require('dotenv').config();
const { createPayment } = require('./Utils/CommonUtils');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();




const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin to access the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use(express.json());

app.post('/create-payment', createPayment);


// ✅ MongoDB Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Database'))
    .catch(err => console.error('❌ Database connection failed:', err.message));

// 🟢 **User Registration API**
app.post('/signup', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // ✅ Ensure passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Insert both plain and hashed password into the database
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            plain_password: password
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
});



// 🟢 **User Login API**
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        // ✅ Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        // ✅ Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

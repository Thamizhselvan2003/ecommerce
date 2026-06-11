require('dotenv').config();
const { createPayment } = require('./Utils/CommonUtils');
const express = require('express');
const mysql = require('mysql2');
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


// ✅ MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Thamizh@2003',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

// 🟢 **User Registration API**
app.post('/signup', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // ✅ Ensure passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Insert both plain and hashed password into the database
        db.query(
            'INSERT INTO signup (name, email, password, plain_password) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, password],  // Storing plain password
            (err, result) => {
                if (err) {
                    console.error("Database Error:", err.message);  // Debugging
                    return res.status(500).json({ error: 'Database error' });
                }
                res.status(201).json({ message: 'User registered successfully' });
            }
        );
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
});



// 🟢 **User Login API**
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM signup   WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = results[0];

        // ✅ Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        // ✅ Generate JWT Token
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    });
});

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

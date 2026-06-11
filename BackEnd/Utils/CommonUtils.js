// Utils/CommonUtils.js

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const createPayment = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        // Validate input
        if (!amount || !currency) {
            return res.status(400).json({ error: 'Amount and currency are required.' });
        }

        // Example validation: Minimum amount for INR is ₹50
        if (currency === 'inr' && amount < 5000) {
            return res.status(400).json({ error: 'Minimum amount for INR is ₹50.' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPayment };

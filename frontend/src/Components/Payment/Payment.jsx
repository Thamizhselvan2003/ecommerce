import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import './Payment.css'

const stripePromise = loadStripe("pk_test_51R6FDRP4UkfP9hqGqtNSMGVQ354TuUowNevxKANRhcyMuZUzDWfJDTyN6HOwlbOqiOk3kWSVbmSn71ExqWCu1eYG00INAwFZvF");

const CheckoutForm = ({ initialAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(initialAmount || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        if (!amount || amount < 50) {
            setMessage("Amount must be at least ₹50.");
            setLoading(false);
            return;
        }

        const response = await fetch(`${process.env.REACT_APP_API_URL}/create-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount * 100, currency: "inr" }),
        })

        const { clientSecret, error } = await response.json();

        if (error) {
            setMessage(error);
            setLoading(false);
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
            },
        });
        console.log(result,"result")

        if (result.error) {
            setMessage(result.error.message);
        } else {
            setPaymentSuccess(true);
            setMessage("✅ Payment successful! Your order is confirmed.");
        }

        setLoading(false);
    };

    return (
        <div className="payment-container">
            {!paymentSuccess ? (
                <form onSubmit={handleSubmit} className="payment-form">
                    <h2 className="payment-title">Secure Checkout</h2>
                    <div className="payment-underline"></div>
                    
                    <div className="payment-group">
                        <label className="payment-label">Amount (₹)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min="50"
                            required
                            className="payment-input"
                            placeholder="Enter Amount (min ₹50)"
                        />
                    </div>

                    <div className="payment-group">
                        <label className="payment-label">Card Number</label>
                        <div className="stripe-input-wrapper">
                            <CardNumberElement className="card-input" />
                        </div>
                    </div>

                    <div className="payment-row">
                        <div className="payment-group">
                            <label className="payment-label">Expiry Date</label>
                            <div className="stripe-input-wrapper">
                                <CardExpiryElement className="card-input" />
                            </div>
                        </div>

                        <div className="payment-group">
                            <label className="payment-label">CVC</label>
                            <div className="stripe-input-wrapper">
                                <CardCvcElement className="card-input" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" disabled={!stripe || loading} className="payment-submit">
                        {loading ? "Processing..." : `Pay ₹${amount || '0'}`}
                    </button>
                </form>
            ) : (
                <div className="payment-success-card">
                    <h3>✅ Payment Successful</h3>
                    <p>Your order has been placed successfully. Thank you for shopping with SnapBuy!</p>
                </div>
            )}

            {message && (
                <div className={`payment-message ${paymentSuccess ? 'success' : 'error'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

const Payment = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;
    
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm initialAmount={totalAmount} />
        </Elements>
    );
};

export default Payment;

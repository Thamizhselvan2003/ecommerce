import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Address.css';

const Address = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;

    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
        amount: totalAmount,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (totalAmount > 0) {
            setShippingAddress(prev => ({ ...prev, amount: totalAmount }));
        }
    }, [totalAmount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({ ...shippingAddress, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!shippingAddress.firstName.trim()) formErrors.firstName = 'First Name is required';
        if (!shippingAddress.lastName.trim()) formErrors.lastName = 'Last Name is required';
        if (!shippingAddress.address.trim()) formErrors.address = 'Address is required';
        if (!shippingAddress.city.trim()) formErrors.city = 'City is required';
        if (!shippingAddress.postalCode.trim()) formErrors.postalCode = 'Postal Code is required';
        if (!shippingAddress.country.trim()) formErrors.country = 'Country is required';
        if (!shippingAddress.phone.trim()) formErrors.phone = 'Phone number is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully', shippingAddress);
        }
    };

    return (
        <div className="address-container">
            <h2 className="address-title">Contact & Shipping Details</h2>
            <div className="address-underline"></div>
            
            <form onSubmit={handleCreateCheckout}>
                <div className="address-row">
                    <div className="address-group">
                        <label className="address-label">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={shippingAddress.firstName}
                            onChange={handleInputChange}
                            className={`address-input ${errors.firstName ? 'input-error' : ''}`}
                            placeholder="First Name"
                        />
                        {errors.firstName && <p className="address-error">{errors.firstName}</p>}
                    </div>
                    
                    <div className="address-group">
                        <label className="address-label">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={shippingAddress.lastName}
                            onChange={handleInputChange}
                            className={`address-input ${errors.lastName ? 'input-error' : ''}`}
                            placeholder="Last Name"
                        />
                        {errors.lastName && <p className="address-error">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="address-group">
                    <label className="address-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={shippingAddress.address}
                        onChange={handleInputChange}
                        className={`address-input ${errors.address ? 'input-error' : ''}`}
                        placeholder="Street Address, Apartment, Suite"
                    />
                    {errors.address && <p className="address-error">{errors.address}</p>}
                </div>

                <div className="address-row">
                    <div className="address-group">
                        <label className="address-label">City</label>
                        <input
                            type="text"
                            name="city"
                            value={shippingAddress.city}
                            onChange={handleInputChange}
                            className={`address-input ${errors.city ? 'input-error' : ''}`}
                            placeholder="City"
                        />
                        {errors.city && <p className="address-error">{errors.city}</p>}
                    </div>
                    
                    <div className="address-group">
                        <label className="address-label">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={shippingAddress.postalCode}
                            onChange={handleInputChange}
                            className={`address-input ${errors.postalCode ? 'input-error' : ''}`}
                            placeholder="Postal Code"
                        />
                        {errors.postalCode && <p className="address-error">{errors.postalCode}</p>}
                    </div>
                </div>

                <div className="address-group">
                    <label className="address-label">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={shippingAddress.country}
                        onChange={handleInputChange}
                        className={`address-input ${errors.country ? 'input-error' : ''}`}
                        placeholder="Country"
                    />
                    {errors.country && <p className="address-error">{errors.country}</p>}
                </div>

                <div className="address-group">
                    <label className="address-label">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={shippingAddress.phone}
                        onChange={handleInputChange}
                        className={`address-input ${errors.phone ? 'input-error' : ''}`}
                        placeholder="Phone Number"
                    />
                    {errors.phone && <p className="address-error">{errors.phone}</p>}
                </div>

                <div className="address-group">
                    <label className="address-label">Order Amount (Auto-filled)</label>
                    <input
                        type="text"
                        name="amount"
                        value={`₹${shippingAddress.amount}`}
                        disabled
                        className="address-input"
                        placeholder="Order Amount"
                    />
                </div>

                <div className="address-actions">
                    <Link to="/payment" state={{ totalAmount: shippingAddress.amount }}>
                        <button type="submit" className="address-submit">Proceed to Payment</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Address;

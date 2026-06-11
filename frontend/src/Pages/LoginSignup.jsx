import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./CSS/Login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } 
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, formData);
        
        // Accessing data from the response
        const { message, token } = response.data;
        
        // Displaying a success message
        alert(message || "Login Successful!");
        
        // Optionally, store the token for authenticated requests
        localStorage.setItem('authToken', token);
        
        // Redirect to homepage or dashboard
        navigate("/");
      } catch (error) {
        // Handling errors
        if (error.response && error.response.data && error.response.data.error) {
          alert(error.response.data.error);
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      }
      
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="underline"></div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>

        <button className="form-input-btn" type="submit">
          Login
        </button>
        <p>Don't have an account? <a href="/signup">SignUp</a></p>
      </form>
    </div>
  );
};

export default LoginForm;

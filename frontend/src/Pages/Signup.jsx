import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './CSS/SignUp.css';


const SignUp = () =>   {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
  
    // Name Validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) {
      errors.name = "Name must contain only letters and be at least 3 characters long";
    }
  
    // Email Validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    // Password Validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    // Confirm Password Validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
        alert("Signup Successful!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setErrors({});
        navigate("/login");
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <div className="signup-underline"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="form-inputs">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="form-inputs">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>

        <div className="form-inputs">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>

        <button type="submit" className="form-input-btn " style={{ backgroundColor: "#FEBE10" }}>
          Signup
        </button>
        <p> Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default SignUp;

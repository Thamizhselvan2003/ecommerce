import React from 'react'
import './CSS/About.css'

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>Empowering everyday style through innovation and sustainable fashion.</p>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h2>Who We Are</h2>
            <p>
              Founded in 2024, SnapBuy is a premier online fashion destination. We believe that fashion is an expression of self, and everyone deserves access to high-quality, trendy clothing that makes them feel confident.
            </p>
          </div>
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To deliver high-quality, sustainable fashion directly to your doorstep with a seamless shopping experience. We work closely with manufacturers to ensure ethical production and premium materials.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Premium Brands</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Product Categories</p>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality First</h4>
              <p>We handpick every item to ensure it meets our strict quality standards before it reaches you.</p>
            </div>
            <div className="value-card">
              <h4>Sustainability</h4>
              <p>We are committed to reducing our carbon footprint by utilizing eco-friendly materials and packaging.</p>
            </div>
            <div className="value-card">
              <h4>Customer Obsession</h4>
              <p>Your satisfaction is our top priority. We design every interaction with you in mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

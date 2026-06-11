import React from 'react'
import './CSS/Offices.css'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

const Offices = () => {
  return (
    <div className='offices-page'>
      <div className="offices-hero">
        <h1>Our Offices</h1>
        <p>Connect with us at any of our primary regional centers.</p>
      </div>

      <div className="offices-content">
        <div className="offices-grid">
          <div className="office-card">
            <div className="office-badge">HQ</div>
            <h3>Coimbatore Office</h3>
            <hr />
            <div className="office-details">
              <p><FaLocationDot /> Peelamedu, Coimbatore, TN, India</p>
              <p><FaPhone /> +91 99523 67485</p>
              <p><FaEnvelope /> coimbatore@snapbuy.com</p>
              <p><FaClock /> Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="office-card">
            <div className="office-badge">Branch</div>
            <h3>Chennai Office</h3>
            <hr />
            <div className="office-details">
              <p><FaLocationDot /> OMR Tech Corridor, Chennai, TN, India</p>
              <p><FaPhone /> +91 63589 52527</p>
              <p><FaEnvelope /> chennai@snapbuy.com</p>
              <p><FaClock /> Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="office-card">
            <div className="office-badge">Innovation Hub</div>
            <h3>Bengaluru Office</h3>
            <hr />
            <div className="office-details">
              <p><FaLocationDot /> Indiranagar Tech Park, Bengaluru, KA, India</p>
              <p><FaPhone /> +91 80234 56789</p>
              <p><FaEnvelope /> bangalore@snapbuy.com</p>
              <p><FaClock /> Mon - Fri: 10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offices

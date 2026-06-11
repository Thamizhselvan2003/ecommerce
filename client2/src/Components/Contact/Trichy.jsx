import React from 'react'
import './Trichy.css'
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Trichy = () => {
  return (
    <div className="container">
    <header className="header">
      <div className="container-header">
        <h1 className="travel">TRAVEL AGENCY IN TRICHY</h1>
        <h3 className="contact">Contact Us</h3>

      </div>
      </header>
      <div className="content">
            <div className="contact-row">
              <div className="contact-section">
                <h2><FaLocationDot /> REACH US</h2>
                <br></br>
                <h2>TRICHY</h2>
                <br></br>
                <p>
                B12,11th cross Above Sony Centre colony Street, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018, India
                </p>
              </div>
              <div className="call-section">
                <h2><IoCall /> CALL US</h2>
                <br></br>
                <h2>MOBILE NUMBER</h2>
                <br></br>
                <h4>9763258403</h4>
                <h4>9863574890</h4>
              </div>
              <div className="mail-section">
                <h2><MdMail /> MAIL US</h2>
                <br></br>
                <h2>MAIL</h2>
                <br></br>
                <p>
                  Write to this email for a detailed quotation
                </p>
                <h4>trichy@holidays.in</h4>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Trichy
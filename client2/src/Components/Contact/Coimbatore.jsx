import React from 'react'
import './Coimbatore.css'
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Coimbatore = () => {
  return (
    <div className="container">
      <header className="headerr">
        <div className="container-headers">
          <h2 className="travel">TRAVEL AGENCY IN COIMBATORE</h2>
          <h5 className="contact">Contact Us</h5>

        </div>
        </header>
        <div className="content">
      <div className="contact-row">
        <div className="contact-section">
          <h2><FaLocationDot /> REACH US</h2>
          <br></br>
          <h2>COIMBATORE</h2>
          <br></br>
          <p>
          SF No. 339/2A,3A, Nava India Road,, Krishnarajapuram Village,, Peelamedu, Coimbatore, Tamil Nadu 641004, India
          </p>
        </div>
        <div className="call-section">
          <h2><IoCall /> CALL US</h2>
          <br></br>
          <h2>MOBILE NUMBER</h2>
          <br></br>
          <h4>9952367485</h4>
          <h4>6358952527</h4>
        </div>
        <div className="mail-section">
          <h2><MdMail /> MAIL US</h2>
          <br></br>
          <h2>MAIL</h2>
          <br></br>
          <p>
            Write to this email for a detailed quotation
          </p>
          <h4>snapbuy@gmail.com</h4>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default Coimbatore
import React from 'react'
import './Chennai.css'
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Chennai = () => {
  return (
  <div className="container">
    <header className="headeress" >
        <div className="container-headeres">
            <h2 className='travel'>SNAP BUY IN CHENNAI </h2>
            <h3 className='contact'> Contact Us</h3>
        </div>
    </header>
    <div className="content">
                <div className="contact-row">
                  <div className="contact-section">
                    <h2><FaLocationDot /> REACH US</h2>
                    <br></br>
                    <h2>CHENNAI</h2>
                  
                    <br></br>
                    <p>
                      Second Floor, Nagammai Building Road, Near Park Gate Roundana, Chennai, Tamil Nadu 641018
                    </p>
                  </div>
                  <div className="call-section">
                    <h2><IoCall /> CALL US</h2>
                    <br></br>
                    <h2>MOBILE NUMBER</h2>
                    <br></br>
                    <h4>9362266212</h4>
                    <h4>9954213652</h4>
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

export default Chennai
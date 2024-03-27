import React from 'react'
import './Footer.css'
import logo from'../Assets/logo4.webp'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import watsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>EBUY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={watsapp} alt="" />
            </div>
        </div>
    </div>
  )
}

export  default Footer

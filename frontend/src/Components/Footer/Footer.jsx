import React from 'react'
import './Footer.css'
import logo from'../Assets/logo_genii.png'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import watsapp from '../Assets/whatsapp_icon.png'
import Profile from '../../Pages/Profile'
import Contact from '../Profile/Contact'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            {/* <p>Genii</p> */}
        </div>
        <ul className="footer-links">
        <li><a href="/">Home</a></li>
            <li><a href="/Profile">About</a></li>
        </ul>
        <div className="footer-social-icon">
            <h3>Social Media</h3>
            <div className="footer-icons-container">
                 <a href="https://www.instagram.com/" target="_blank" > 
                <img src={insta} alt="" /></a>
            </div>
            <div className="footer-icons-container">
            <a href="https://www.pinterest.com/" target="_blank" > 
                <img src={pinterest} alt="" /></a>
            </div>
            <div className="footer-icons-container">
            <a href="https://web.whatsapp.com/" target="_blank" > 
                <img src={watsapp} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export  default Footer

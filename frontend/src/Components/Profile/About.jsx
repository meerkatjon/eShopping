import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h1>About Genii</h1>
            <p>As one of the nation’s newest and largest online retailers of apparel and merchandise, Genii has a portfolio of private and national brands of remarkable quality and exceptional value.</p>
            <p>Genii is working to build brands and consistently developing and introducing exciting new products and brands to meet the ever-evolving needs of our customers and their families.</p>
            <button>Check now</button>
        </div>
        <div className="about-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default About
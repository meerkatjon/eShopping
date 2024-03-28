import React from 'react'
import './hero.css'
import hand_icon from'../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_img from '../Assets/hero_image8.webp'
import hero_img from '../Assets/hero_image11.png'
import NewCollections from '../NewCollections/NewCollections'
// import hero_img from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero' >
        {
        /* <h1 className='hero-text'> <span>Make Everybody Count</span>
        <p>  <i>Embracing Style: A Journey through Fashion Wear for Men, Women and Kids</i>
        </p>
           
        </h1> */}
        
        <div className='hero-left'>
            <h2>New Arrivals</h2>
            <div>
            <div className='hero-hand-icon'>
                <img src={hand_icon} alt="" />
            </div>
            <p>Make Everybody Count</p>
            {/* <p>for everyone</p> */}
        </div>
        <div className='hero-latest-btn'>
            {/* <div>Latest Collection</div> */}
        <a href="#newColl"> Latest Collection 
        <img src={arrow_icon} alt="" />
        </a>
        
        </div>
        </div> 
        <div className='hero-right'>
            <img src={hero_img} alt="" />
        </div>

        </div>
  )
}
//         <div className='hero'>
//             <span>  </span>
//         <h1> <span>Make Everybody Count</span></h1>
//         <p>  <i>Embracing Style: A Journey through Fashion Wear for Men, Women and Kids</i>
//         </p>
//         <div className='hero-image'>
//         <img src={hero_img} alt="" />
//         </div>
//         </div>
//   )
// }


export default Hero
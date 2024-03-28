import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive offers for you</h1>
            <Link to="/women"><button>
            Check now</button></Link>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
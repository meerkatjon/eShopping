import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe & Stay updated</p>
        <div>
            <input type="email" placeholder='your emailid' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}


export default Newsletter
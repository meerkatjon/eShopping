import React, { useState, useRef } from 'react'
import './Newsletter.css'

const Newsletter = () => {
const[inputValue, setInputValue] = useState('');

const inpVal = useRef('')
const emailValidation = (e)=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputValue.match(validRegex)) {
      alert("Subscription Saved!");
      inpVal.current.value=''
      return true;
     } else {
       alert("Invalid email address, Please try again!");
      return false;
    }
  }

  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email.

        </h1>
        <p>Be the first to know about the latest deals and more!</p>
        <div>
            <input ref={inpVal} type="email" onChange={(e)=> setInputValue(e.target.value)} placeholder='Enter your Email Id' />
            <button  onClick={emailValidation}>Subscribe</button>
        </div>
    </div>
  )
}


export default Newsletter
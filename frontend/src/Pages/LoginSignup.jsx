import React from 'react'
import'./CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Signup</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='your name' />
        <input type="email" placeholder='your emailid'/>
        <input type="password" placeholder='password' />
      </div>
      <button>continue</button>
        <p className="loginsignup-login">Already have an account <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
      </div>
  )
}


export default LoginSignup
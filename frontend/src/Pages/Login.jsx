import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const loginHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }
  const login = async (e) => {
    e.preventDefault()
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    }).then(res => res.json()).then(data => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }

  return (

    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <form onSubmit={login}>
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email' name='email' value={loginData.email} onChange={loginHandler} required />
            <input type="password" placeholder='Password' name='password' value={loginData.password} onChange={loginHandler} required />
          </div>
          <button type="submit">Submit </button>

          <div> <hr />  </div>

          <p className="loginsignup-login">New to Genii? <Link to="/Signup">Signup</Link></p>
        </form>
      </div>
    </div >

  )
}


export default Login
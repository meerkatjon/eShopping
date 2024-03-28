import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import Login from './Login'
import { Link } from 'react-router-dom'

const Signup = () => {
  //const [state,setState] = useState({Signup})
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const signup = async (e) => {
    e.preventDefault()
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
        <form onSubmit={signup}>
          <h1>Signup</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Name' name='username' value={formData.username} onChange={changeHandler} required />
            <input type="email" placeholder='Email Id' name='email' value={formData.email} onChange={changeHandler} required />
            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={changeHandler} required />
          </div>
          <div className="loginsignup-fields-check">
            <input className="loginsignup-fields-check" type="checkbox" required /> <label>I authorize Genii & its affiliates to store my communication preference.</label>
          </div>
          <button type="submit">Signup</button>
          <p className="loginsignup-login">Already have an account <Link to="/Login">click here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
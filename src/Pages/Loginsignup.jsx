import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/LoginSignup.css'
const Loginsignup = () => {
  const navigate = useNavigate()
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button>continue {navigate('/')}</button>
      <p className="loginsignup-login">Already have an account?  <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, i agree to use the terms of use and privacy policy. </p>
      </div>
    </div>
    </div>
  )
}

export default Loginsignup
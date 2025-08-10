import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

export default function Login() {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

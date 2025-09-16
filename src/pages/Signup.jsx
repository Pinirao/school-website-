import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = () => {
    if (form.username && form.email && form.password) {
      alert(`Account created for ${form.username}!`);
      setForm({ username: '', email: '', password: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="illustration-side">
          <div className="floating-objects">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="main-illustration">
            <div className="pyramid">
              <div className="base"></div>
              <div className="side front"></div>
              <div className="side left"></div>
              <div className="side right"></div>
            </div>
          </div>
          <h2>Join Our Community!</h2>
          <p>Create an account to unlock exclusive features</p>
        </div>
        
        <div className="form-side">
          <div className="form-container">
            <h1>Create Account</h1>
            <p className="subtitle">Get started with your free account</p>
            
            <div className="social-buttons">
              <button className="social-btn google-btn">
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="social-btn facebook-btn">
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
            
            <div className="divider">
              <span>Or sign up with email</span>
            </div>
            
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <div className="password-strength">
                <div className="strength-bar">
                  <div className="strength-fill"></div>
                </div>
                <span className="strength-text">Password strength</span>
              </div>
            </div>
            
            <div className="options-row">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
              </label>
            </div>
            
            <button 
              type="button" 
              onClick={handleSignup}
              className={`signup-button ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Create Account
            </button>
            
            <p className="login-link">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
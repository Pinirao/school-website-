import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [isHovered, setIsHovered] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    if (form.username && form.password) {
      // Use AuthContext login function
      login();
      
      // Show welcome message
      alert(`Welcome, ${form.username}!`);
      
      // Navigate to home page
      navigate('/');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="illustration-side">
          <div className="floating-objects">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="main-illustration">
            <div className="cube">
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
          <h2>Welcome Back!</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        
        <div className="form-side">
          <div className="form-container">
            <h1>Sign In</h1>
            <p className="subtitle">Welcome back! Please enter your details</p>
            
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
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            
            <div className="options-row">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-link">Forgot password?</a>
            </div>
            
            <button 
              type="button" 
              onClick={handleLogin}
              className={`login-button ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Sign In
            </button>
            
            <div className="divider">
              <span>Or</span>
            </div>
            
            <button className="google-login">
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
            
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
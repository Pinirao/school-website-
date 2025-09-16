import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Logout.css';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      setIsLoggedOut(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isLoggedOut && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isLoggedOut && countdown === 0) {
      // Redirect to login page after countdown
      navigate('/login');
    }
    return () => clearTimeout(timer);
  }, [isLoggedOut, countdown, navigate]);

  const handleLogout = () => {
    // Perform logout operations using AuthContext
    logout();
    
    // Clear local storage items
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    
    // Set logout state
    setIsLoggedOut(true);
  };

  const handleCancel = () => {
    // Redirect back to the previous page or home
    navigate(-1);
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="logout-wrapper">
      <div className="logout-container">
        <div className="illustration-side">
          <div className="floating-objects">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="main-illustration">
            <div className="door">
              <div className="door-front"></div>
              <div className="door-handle"></div>
            </div>
            <div className="door-frame"></div>
          </div>
          <h2>See You Soon!</h2>
          <p>We hope to welcome you back again</p>
        </div>
        
        <div className="content-side">
          <div className="logout-content">
            {!isLoggedOut ? (
              <>
                <h1>Log Out</h1>
                <p className="logout-message">Are you sure you want to log out?</p>
                
                <div className="logout-actions">
                  <button 
                    className="logout-btn confirm-btn"
                    onClick={handleLogout}
                  >
                    Yes, Log Out
                  </button>
                  <button 
                    className="logout-btn cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
                
                <div className="logout-info">
                  <div className="info-item">
                    <span className="info-icon">🔒</span>
                    <span>Your data will remain secure</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">↩️</span>
                    <span>You can always log back in</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="logout-success">
                  <div className="success-icon">✅</div>
                  <h1>Logged Out Successfully</h1>
                  <p className="logout-message">
                    You have been successfully logged out of your account.
                  </p>
                  <p className="redirect-message">
                    Redirecting to login page in {countdown} seconds...
                  </p>
                  
                  <button 
                    className="logout-btn login-btn"
                    onClick={handleGoToLogin}
                  >
                    Go to Login Page Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>EduPrime</h1>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link></li>
            <li><Link to="/academics" onClick={() => setIsMenuOpen(false)}>Academics</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="account-section">
          <div className="account-dropdown">
            <button className="account-toggle" onClick={toggleAccountDropdown}>
              <span>My Account</span> {/* Ensure this title is present */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M12 14l-4-4h8z" fill="currentColor" />
              </svg>
            </button>
            {isAccountDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={() => setIsAccountDropdownOpen(false)}>Profile</Link>
                <Link to="/settings" onClick={() => setIsAccountDropdownOpen(false)}>Settings</Link>
                <Link to="/grades" onClick={() => setIsAccountDropdownOpen(false)}>Grades</Link>
                <Link to="/login" onClick={() => setIsAccountDropdownOpen(false)}>Login</Link>
                <Link to="/signup" onClick={() => setIsAccountDropdownOpen(false)}>Signup</Link>
                <Link to="/logout" onClick={() => setIsAccountDropdownOpen(false)}>Logout</Link>
              </div>
            )}
          </div>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
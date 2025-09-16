import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <h3>About Our School</h3>
          <p>
            Providing quality education since 1985. Our mission is to nurture
            young minds and prepare them for a bright future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 123 Education Lane, Knowledge City</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@ourschool.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Our School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

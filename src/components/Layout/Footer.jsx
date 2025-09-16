import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main content */}
        <div className="footer-main">
          {/* Brand section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Our School</h3>
            <p className="footer-description">
              Providing quality education since 1985. Our mission is to nurture
              young minds and prepare them for a bright future.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Stay Updated</h3>
            <div className="newsletter">
              <p>Subscribe to our newsletter for updates</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Our School. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
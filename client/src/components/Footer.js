import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaPlus } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#footerGradient)" />
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="logo-text">APARAITECH</span>
            </div>
            <p className="footer-tagline">SOFTWARE COMPANY</p>
            <p className="footer-description">
              Innovative IT solutions empowering your business growth.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><a href="#ai">AI & Analytics Learning</a></li>
              <li><a href="#solutions">UFT Solutions</a></li>
              <li><a href="#solutions">Web Development</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Privacy Policy</h3>
            <h3 className="footer-heading" style={{ marginTop: '1.5rem' }}>Contact</h3>
            <div className="footer-contact-info">
              <p className="contact-item">9010020343018</p>
              <p className="contact-item">info@aparaitech.com</p>
              <p className="contact-item">Fintech, Main Street, Pune, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon" aria-label="More">
              <FaPlus />
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} APARAITECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


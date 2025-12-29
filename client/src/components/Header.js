import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">APARAITECH</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <div 
            className="nav-link dropdown" 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span>Services <span className="dropdown-arrow">▼</span></span>
            {isServicesOpen && (
              <div className="dropdown-menu">
                <a href="#services">Cloud Computing</a>
                <a href="#services">Software Development</a>
                <a href="#services">AI & Machine Learning</a>
                <a href="#services">IT Consulting</a>
              </div>
            )}
          </div>
          <a href="#ai" className="nav-link">AI</a>
          <div 
            className="nav-link dropdown"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <span>About <span className="dropdown-arrow">▼</span></span>
            {isAboutOpen && (
              <div className="dropdown-menu">
                <a href="#about">Our Story</a>
                <a href="#about">Our Team</a>
                <a href="#about">Careers</a>
              </div>
            )}
          </div>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button className="get-started-btn">Get Started</button>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;


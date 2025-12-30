import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(10,10,15,0.95)] backdrop-blur-[10px] z-[1000] py-4 border-b border-[rgba(124,58,237,0.2)]">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="flex items-center">
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
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] bg-clip-text text-transparent">Aparaitech</span>
        </div>

        {/* Desktop Navigation - hidden on mobile, shown on md and above */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-white no-underline text-base font-medium hover:text-[#a78bfa] transition-colors">Home</a>
          <div 
            className="relative text-white text-base font-medium hover:text-[#a78bfa] transition-colors cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span>Services <span className="text-xs transition-transform">▼</span></span>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[rgba(30,30,45,0.98)] border border-[rgba(124,58,237,0.3)] rounded-lg min-w-[200px] py-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <a href="#services" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">Cloud Computing</a>
                <a href="#services" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">Software Development</a>
                <a href="#services" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">AI & Machine Learning</a>
                <a href="#services" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">IT Consulting</a>
              </div>
            )}
          </div>
          <a href="#ai" className="text-white no-underline text-base font-medium hover:text-[#a78bfa] transition-colors">AI</a>
          <div 
            className="relative text-white text-base font-medium hover:text-[#a78bfa] transition-colors cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <span>About <span className="text-xs transition-transform">▼</span></span>
            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[rgba(30,30,45,0.98)] border border-[rgba(124,58,237,0.3)] rounded-lg min-w-[200px] py-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <a href="#about" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">Our Story</a>
                <a href="#about" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">Our Team</a>
                <a href="#about" className="block px-6 py-3 text-white no-underline hover:bg-[rgba(124,58,237,0.2)] transition-colors">Careers</a>
              </div>
            )}
          </div>
          <a href="#contact" className="text-white no-underline text-base font-medium hover:text-[#a78bfa] transition-colors">Contact</a>
        </nav>

        <button className="hidden md:block bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white border-none px-8 py-3 text-base font-semibold rounded-lg cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]">
          Get Started
        </button>

        <button 
          className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-[25px] h-[3px] bg-white rounded-sm transition-all"></span>
          <span className="w-[25px] h-[3px] bg-white rounded-sm transition-all"></span>
          <span className="w-[25px] h-[3px] bg-white rounded-sm transition-all"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-[rgba(10,10,15,0.98)] p-8 flex flex-col gap-6">
          <a href="#home" className="text-white no-underline">Home</a>
          <a href="#services" className="text-white no-underline">Services</a>
          <a href="#ai" className="text-white no-underline">AI</a>
          <a href="#about" className="text-white no-underline">About</a>
          <a href="#contact" className="text-white no-underline">Contact</a>
          <button className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white border-none px-6 py-3 rounded-lg cursor-pointer">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;


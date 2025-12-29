import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPlus } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0f] to-[#050508] border-t border-[rgba(124,58,237,0.2)] py-16 px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <div className="flex items-center">
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
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] bg-clip-text text-transparent">Aparaitech</span>
            </div>
            <p className="text-sm font-semibold text-[#a78bfa] mb-4 tracking-wider uppercase">SOFTWARE COMPANY</p>
            <p className="text-sm text-[#c4b5fd] leading-relaxed max-w-[300px]">
              Innovative IT solutions empowering your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-4">
                <a href="#home" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#about" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#services" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">Solutions</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-4">
                <a href="#ai" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  AI & Analytics Learning
                </a>
              </li>
              <li className="mb-4">
                <a href="#solutions" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  UFT Solutions
                </a>
              </li>
              <li className="mb-4">
                <a href="#solutions" className="text-[#c4b5fd] no-underline text-base transition-all inline-block hover:text-[#a78bfa] hover:pl-1">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">Privacy Policy</h3>
            <h3 className="text-xl font-bold text-white mb-6 mt-6">Contact</h3>
            <div className="mt-2">
              <p className="text-[#c4b5fd] text-sm mb-3 leading-relaxed">9010020343018</p>
              <p className="text-[#c4b5fd] text-sm mb-3 leading-relaxed">info@aparaitech.com</p>
              <p className="text-[#c4b5fd] text-sm mb-3 leading-relaxed">Fintech, Main Street, Pune, India</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(124,58,237,0.2)]">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="w-10 h-10 bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] rounded-full flex items-center justify-center text-[#c4b5fd] text-xl no-underline transition-all hover:bg-[rgba(124,58,237,0.4)] hover:border-[#7c3aed] hover:text-white hover:-translate-y-1" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] rounded-full flex items-center justify-center text-[#c4b5fd] text-xl no-underline transition-all hover:bg-[rgba(124,58,237,0.4)] hover:border-[#7c3aed] hover:text-white hover:-translate-y-1" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] rounded-full flex items-center justify-center text-[#c4b5fd] text-xl no-underline transition-all hover:bg-[rgba(124,58,237,0.4)] hover:border-[#7c3aed] hover:text-white hover:-translate-y-1" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="w-10 h-10 bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] rounded-full flex items-center justify-center text-[#c4b5fd] text-xl no-underline transition-all hover:bg-[rgba(124,58,237,0.4)] hover:border-[#7c3aed] hover:text-white hover:-translate-y-1" aria-label="More">
              <FaPlus />
            </a>
          </div>
          <p className="text-[#c4b5fd] text-sm">
            © {new Date().getFullYear()} APARAITECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


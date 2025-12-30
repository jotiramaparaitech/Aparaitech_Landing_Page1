import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#fdfcff]/55 backdrop-blur-xl
        border-b border-[rgba(124,58,237,0.16)]
        shadow-[0_4px_14px_rgba(124,58,237,0.10)]
      "
    >
      <div
        className="
          max-w-[1400px] mx-auto
          flex items-center justify-between
          px-4 sm:px-8 md:px-14 lg:px-20
          py-[12px]
        "
      >
        {/* Logo + Brand */}
        <div className="flex items-center cursor-pointer gap-2">
          <img
            src={logo}
            alt="Aparaitech Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="font-semibold text-[#2d1b69] text-lg md:text-xl">
            Aparaitech
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[#2d1b69] font-medium">
          <a href="#home" className="hover:text-[#7c3aed] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#7c3aed] transition">
            About Us
          </a>
          <a href="#services" className="hover:text-[#7c3aed] transition">
            Services
          </a>
          <a href="#contact" className="hover:text-[#7c3aed] transition">
            Contact
          </a>

          {/* Light Purple CTA */}
          <button
            className="
              bg-[#a78bfa] text-white
              px-5 py-2 rounded-full
              hover:bg-[#8b5cf6]
              hover:shadow-[0_10px_28px_rgba(124,58,237,0.30)]
              transition
            "
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="
            md:hidden flex items-center justify-center
            w-10 h-10 rounded-lg
            hover:bg-[#f1ecff] transition
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-[#fdfcff]/75 backdrop-blur-lg
            border-t border-[rgba(124,58,237,0.16)]
            px-6 py-5
            flex flex-col gap-4
            text-[#2d1b69]
          "
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <button
            className="
              bg-[#a78bfa] text-white
              px-4 py-2 rounded-md
              hover:bg-[#8b5cf6]
              transition
            "
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

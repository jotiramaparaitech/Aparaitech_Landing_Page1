// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // 🔥 Scroll logic
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[72px]">
      {/* 🔥 BACKGROUND LAYER (no layout shift) */}
      <div
        className={`absolute inset-0 transition-all duration-300
          ${
            isScrolled
              ? "bg-[#fdfcff]/60 backdrop-blur-md"
              : "bg-transparent backdrop-blur-md"
          }
        `}
      />

      {/* 🔥 CONTENT LAYER */}
      <div className="relative max-w-[1400px] mx-auto flex items-center h-full px-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aparaitech Logo" className="h-8 w-auto" />
          <span
            className={`font-semibold text-lg transition-colors ${
              isScrolled ? "text-[#2d1b69]" : "text-white"
            }`}
          >
            Aparaitech
          </span>
        </Link>

        {/* DESKTOP LEFT MENU */}
        <nav
          className={`hidden md:flex items-center gap-8 ml-16 font-medium ${
            isScrolled ? "text-[#2d1b69]" : "text-white"
          }`}
        >
          <Link to="/generative-ai" className="hover:text-[#7c3aed] transition">
            Generative AI
          </Link>
          <Link to="/cloud" className="hover:text-[#7c3aed] transition">
            Cloud
          </Link>
          <Link to="/solutions" className="hover:text-[#7c3aed] transition">
            Solutions
          </Link>
        </nav>

        {/* DESKTOP RIGHT MENU */}
        <div
          className={`hidden md:flex items-center gap-8 ml-auto font-medium ${
            isScrolled ? "text-[#2d1b69]" : "text-white"
          }`}
        >
          <a
            href="https://lms-full-stack-mcq7.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7c3aed] transition"
          >
            Explore Programs
          </a>

          <Link to="/careers" className="hover:text-[#7c3aed] transition">
            Careers
          </Link>

          <Link to="/about" className="hover:text-[#7c3aed] transition">
            About
          </Link>

          <button
            onClick={scrollToContact}
            className={`px-5 py-2 rounded-full transition ${
              isScrolled
                ? "bg-[#a78bfa]/90 text-white hover:bg-[#8b5cf6]"
                : "border border-white/40 text-white hover:bg-white/10"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] ${
                  isScrolled ? "bg-[#2d1b69]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4 text-white">
          <Link to="/generative-ai" onClick={() => setMenuOpen(false)} className="block">
            Generative AI
          </Link>
          <Link to="/cloud" onClick={() => setMenuOpen(false)} className="block">
            Cloud
          </Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)} className="block">
            Solutions
          </Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)} className="block">
            Careers
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
            About
          </Link>
          <button
            onClick={scrollToContact}
            className="w-full mt-4 py-2 rounded-lg bg-[#8b5cf6] text-white"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // 🔥 Scroll detection
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
    <header className="fixed top-0 left-0 w-full z-50 h-[72px] overflow-x-hidden">
      {/* 🔥 BACKGROUND (NON-BLOCKING) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-300
          ${
            isScrolled
              ? "bg-[#fdfcff]/70 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      />

      {/* 🔥 CONTENT */}
      <div
        className="
          relative z-10 max-w-[1400px] mx-auto flex items-center h-full
          px-4 sm:px-6
          pr-[max(1rem,env(safe-area-inset-right))]
          overflow-x-hidden
        "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
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
                ? "bg-[#a78bfa] text-white hover:bg-[#8b5cf6]"
                : "border border-white/40 text-white hover:bg-white/10"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* ✅ MOBILE HAMBURGER (NO NEGATIVE MARGIN) */}
        <button
          className="md:hidden ml-auto z-20 p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] rounded ${
                  isScrolled ? "bg-[#2d1b69]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* ✅ MOBILE MENU (NO OVERFLOW) */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] inset-x-0 bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4 text-white z-40 overflow-x-hidden">
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
            className="w-full mt-4 py-2 rounded-lg bg-[#8b5cf6]"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

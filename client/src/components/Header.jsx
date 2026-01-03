import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const hero = document.getElementById("home");
        if (!hero) return;

        const heroHeight = hero.offsetHeight;
        const scrollY = window.scrollY;

        // Smooth 0 → 1 transition window
        const value = Math.min(
          Math.max((scrollY - (heroHeight - 120)) / 140, 0),
          1
        );

        setProgress(value);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        // ✨ GLASS, not white
        backgroundColor: `rgba(255,255,255,${0. * progress})`,
        backdropFilter: `blur(${10 * progress}px)`,
        boxShadow: `0 6px 20px rgba(0,0,0,${0.08 * progress})`,
      }}
      className="
        fixed top-0 left-0 w-full z-50
        will-change-[background-color,backdrop-filter,box-shadow]
      "
    >
      <div className="
        max-w-[1400px] mx-auto
        flex items-center justify-between
        px-4 sm:px-8 md:px-14 lg:px-20
        py-[12px]
      ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span
            style={{
              color: progress > 0.6 ? "#2d1b69" : "#ffffff",
            }}
            className="font-semibold text-lg md:text-xl transition-colors duration-300"
          >
            Aparaitech
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            color:
              progress > 0.6
                ? "#2d1b69"
                : "rgba(255,255,255,0.9)",
          }}
          className="hidden md:flex items-center gap-8 font-medium transition-colors duration-300"
        >
          <a href="#home" className="hover:text-[#7c3aed] transition">Home</a>
          <a href="#about" className="hover:text-[#7c3aed] transition">About Us</a>
          <a href="#services" className="hover:text-[#7c3aed] transition">Services</a>
          <a href="#contact" className="hover:text-[#7c3aed] transition">Contact</a>

          <button
            style={{
              backgroundColor:
                progress > 0.6
                  ? "rgba(124,58,237,0.9)"
                  : "rgba(255,255,255,0.14)",
              color: "#fff",
            }}
            className="
              px-5 py-2 rounded-full
              backdrop-blur-md
              transition-all duration-300
              hover:shadow-[0_10px_28px_rgba(124,58,237,0.30)]
            "
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  backgroundColor: progress > 0.6 ? "#2d1b69" : "#fff",
                }}
                className="block w-6 h-[2px] transition-colors duration-300"
              />
            ))}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

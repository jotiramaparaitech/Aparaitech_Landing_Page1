// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  const ticking = useRef(false);
  const closeTimeout = useRef(null);

  const scrollToContact = () => {
    navigate("/", { replace: false });

    // wait for Home page to mount
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  /* ✅ NEW: Home scroll handler */
  const scrollToHome = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const fadeRange = 80;
        setProgress(Math.min(scrollY / fadeRange, 1));
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const serviceItems = [
    { label: "Generative AI", path: "/generative-ai" },
    { label: "Cloud", path: "/cloud" },
    { label: "Solutions", path: "/solutions" },
    {
      label: "Explore Programs",
      path: "https://lms-full-stack-mcq7.vercel.app/",
      external: true
    },
  ];



  const handleServicesEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  return (
    <header
      style={{
        backgroundColor: `rgba(255,255,255,${0.85 * progress})`,
        backdropFilter: `blur(${10 * progress}px)`,
        boxShadow: `0 6px 20px rgba(0,0,0,${0.08 * progress})`,
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-20 py-[12px]">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span
            style={{ color: progress > 0.6 ? "#2d1b69" : "#ffffff" }}
            className="font-semibold text-lg md:text-xl transition-colors"
          >
            Aparaitech
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            color: progress > 0.6 ? "#2d1b69" : "rgba(255,255,255,0.9)",
          }}
          className="hidden md:flex items-center gap-8 font-medium"
        >
          {navItems.map((item) =>
            item.id === "home" ? (
              <Link
                key={item.id}
                to="/"
                onClick={scrollToHome}
                className="hover:text-[#7c3aed] transition"
              >
                {item.label}
              </Link>
            ) : item.id === "about" ? (
              <Link
                key={item.id}
                to="/about"
                className="hover:text-[#7c3aed] transition"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={scrollToContact}
                className="hover:text-[#7c3aed] transition"
              >
                {item.label}
              </button>

            )
          )}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="hover:text-[#7c3aed] transition">
              Services
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {serviceItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-[#2d1b69] hover:bg-[#f3eeff] transition"
                  >
                    {service.label}
                  </Link>
                ))}

              </div>
            )}
          </div>

          <button
            onClick={scrollToContact}
            style={{
              backgroundColor:
                progress > 0.6
                  ? "rgba(124,58,237,0.95)"
                  : "rgba(124,58,237,0.85)",
            }}
            className="px-5 py-2 rounded-full text-white font-semibold transition hover:scale-105"
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
                style={{ backgroundColor: progress > 0.6 ? "#2d1b69" : "#fff" }}
                className="block w-6 h-[2px]"
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col py-4">

            {navItems.map((item) =>
              item.id === "home" ? (
                <Link
                  key={item.id}
                  to="/"
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToHome();
                  }}
                  className="px-6 py-3 text-[#2d1b69] font-medium hover:bg-[#f3eeff]"
                >
                  {item.label}
                </Link>
              ) : item.id === "about" ? (
                <Link
                  key={item.id}
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-[#2d1b69] font-medium hover:bg-[#f3eeff]"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-[#2d1b69] font-medium hover:bg-[#f3eeff]"
                >
                  {item.label}
                </a>
              )
            )}

            {/* Services (Mobile) */}
            <div className="px-6 pt-3 pb-1 text-sm font-semibold text-gray-500 uppercase">
              Services
            </div>

            {serviceItems.map((service) => (
              <Link
                key={service.label}
                to={service.path}
                onClick={() => setMenuOpen(false)}
                className="px-10 py-2 text-[#2d1b69] hover:bg-[#f3eeff]"
              >
                {service.label}
              </Link>
            ))}


            <div className="px-6 pt-4">
              <button className="w-full py-3 rounded-full bg-[#7c3aed] text-white font-semibold">
                Get Started
              </button>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

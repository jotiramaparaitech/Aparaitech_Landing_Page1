// src/components/Header.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const moreRef = useRef(null);
  const dropdownRef = useRef(null);

  const isHome = location.pathname === "/";

  /* 🔥 Scroll logic (old + new merged safely) */
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setMoreOpen(false); // ✅ new behaviour
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  /* ✅ Close More on outside click (from new code) */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ✅ Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  /* ✅ Contact scroll (exact logic from new code) */
  const scrollToContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
    setMoreOpen(false);
  };

  /* ✅ EXACT same dropdown data (UNCHANGED) */
  const moreDropdownContent = {
    Products: [
      { name: "AI Solutions", link: "/generative-ai" },
      { name: "Cloud Services", link: "/cloud" },
      { name: "Custom Software", link: "/products/custom-software" },
      { name: "Mobile Apps", link: "/products/mobile-apps" },
      { name: "DevOps", link: "/products/devops" },
      { name: "UI/UX Design", link: "/products/ui-ux-design" },
    ],
    Industries: [
      { name: "Healthcare", link: "/industries/healthcare" },
      { name: "Finance & Banking", link: "/industries/finance" },
      { name: "E-Commerce", link: "/industries/ecommerce" },
      { name: "Education", link: "/industries/education" },
      { name: "Manufacturing", link: "/industries/manufacturing" },
      { name: "Startups", link: "/industries/startups" },
    ],
    Customers: [
      { name: "Success Stories", link: "/customers/success-stories" },
      { name: "Case Studies", link: "/customers/case-studies" },
      { name: "Testimonials", link: "/customers/testimonials" },
      { name: "Client Portfolio", link: "/customers/portfolio" },
    ],
    Learning: [
      {
        name: "Explore Programs",
        link: "https://lms-full-stack-mcq7.vercel.app/",
        external: true,
      },
      { name: "Documentation", link: "/learning/documentation" },
      { name: "Tutorials", link: "/learning/tutorials" },
      { name: "Webinars", link: "/learning/webinars" },
      { name: "Certifications", link: "/learning/certifications" },
    ],
    Support: [
      { name: "Help Center", link: "/support/help-center" },
      { name: "Contact Support", onClick: scrollToContact },
      { name: "Community Forum", link: "/support/community" },
      { name: "Status", link: "/support/status" },
    ],
    Company: [
      { name: "About Us", link: "/company/about-us" },
      { name: "Our Values", link: "/company/values" },
      { name: "Careers", link: "/company/careers" },
      { name: "News & Blog", link: "/company/news" },
      { name: "Partners", link: "/company/partners" },
      { name: "Investor Relations", link: "/company/investors" },
    ]

  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[72px]">
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${isScrolled
          ? "bg-[#fdfcff]/60 backdrop-blur-md"
          : "bg-transparent backdrop-blur-md"
          }`}
      />

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto flex items-center h-full px-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aparaitech Logo" className="h-8 w-auto" />
          <span
            className={`font-semibold text-lg ${isScrolled ? "text-[#2d1b69]" : "text-white"
              }`}
          >
            Aparaitech
          </span>
        </Link>

        {/* DESKTOP LEFT MENU */}
        <nav
          className={`hidden md:flex items-center gap-8 ml-16 font-medium ${isScrolled ? "text-[#2d1b69]" : "text-white"
            }`}
        >
          <Link to="/generative-ai">Generative AI</Link>
          <Link to="/cloud">Cloud</Link>
          <Link to="/solutions">Solutions</Link>

          {/* 🔥 EXACT SAME MORE DROPDOWN */}
          <div className="relative" ref={moreRef}>
            <button
              className={`flex items-center gap-1 ${moreOpen ? "text-[#7c3aed]" : ""
                }`}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() =>
                setTimeout(() => {
                  if (!dropdownRef.current?.matches(":hover")) {
                    setMoreOpen(false);
                  }
                }, 100)
              }
              onClick={() => setMoreOpen(!moreOpen)}
            >
              Mores
              <svg
                className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {moreOpen && (
              <div
                ref={dropdownRef}
                className="fixed left-0 right-0 top-[72px] bg-white shadow-2xl rounded-b-2xl border-t border-gray-100 pt-6 pb-8 px-8"
              >
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {Object.entries(moreDropdownContent).map(
                    ([category, items]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-[#2d1b69] text-sm mb-4 uppercase">
                          {category}
                        </h3>
                        <ul className="space-y-3">
                          {items.map((item, index) => (
                            <li key={index}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-700 hover:text-[#7c3aed] text-sm"
                                >
                                  {item.name}
                                </a>
                              ) : item.onClick ? (
                                <button
                                  onClick={item.onClick}
                                  className="text-gray-700 hover:text-[#7c3aed] text-sm text-left"
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  to={item.link}
                                  className="text-gray-700 hover:text-[#7c3aed] text-sm"
                                  onClick={() => setMoreOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT MENU (unchanged old) */}
        <div
          className={`hidden md:flex items-center gap-8 ml-auto font-medium ${isScrolled ? "text-[#2d1b69]" : "text-white"
            }`}
        >
          <a
            href="https://lms.aparaitech.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Programs
          </a>
          <Link to="/company/careers">Careers</Link>
          <Link to="/company/about-us">About</Link>
          <button onClick={scrollToContact}>Contact Us</button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden ml-auto p-2 transition-colors ${isScrolled ? "text-[#2d1b69]" : "text-white"
            }`}
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header of Mobile Menu */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-xl text-[#2d1b69]">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div className="flex flex-col space-y-4">
              <Link
                to="/generative-ai"
                className="text-lg font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Generative AI
              </Link>
              <Link
                to="/cloud"
                className="text-lg font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Cloud
              </Link>
              <Link
                to="/solutions"
                className="text-lg font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </Link>
            </div>

            <hr className="border-gray-100" />

            {/* More Content */}
            <div className="space-y-6">
              {Object.entries(moreDropdownContent).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <ul className="space-y-3 pl-3 border-l-2 border-gray-100">
                    {items.map((item, index) => (
                      <li key={index}>
                        {item.external ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-gray-600 hover:text-[#7c3aed]"
                          >
                            {item.name}
                          </a>
                        ) : item.onClick ? (
                          <button
                            onClick={item.onClick}
                            className="block text-sm text-gray-600 hover:text-[#7c3aed] text-left w-full"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            to={item.link}
                            className="block text-sm text-gray-600 hover:text-[#7c3aed]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <hr className="border-gray-100" />

            {/* Bottom Links */}
            <div className="flex flex-col space-y-4 pb-8">
              <a
                href="https://lms-full-stack-mcq7.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-800"
              >
                Live Programs
              </a>
              <Link
                to="/careers"
                className="text-base font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={scrollToContact}
                className="w-full py-3 bg-[#7c3aed] text-white rounded-xl font-semibold shadow-lg shadow-purple-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

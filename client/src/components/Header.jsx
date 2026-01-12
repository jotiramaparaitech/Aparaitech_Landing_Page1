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
      { name: "About Us", link: "/about" },
      { name: "Our Values", link: "/company/values" },
      { name: "Careers", link: "/careers" },
      { name: "News & Blog", link: "/company/news" },
      { name: "Partners", link: "/company/partners" },
      { name: "Investor Relations", link: "/company/investors" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[72px]">
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
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
            className={`font-semibold text-lg ${
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
          <Link to="/generative-ai">Generative AI</Link>
          <Link to="/cloud">Cloud</Link>
          <Link to="/solutions">Solutions</Link>

          {/* 🔥 EXACT SAME MORE DROPDOWN */}
          <div className="relative" ref={moreRef}>
            <button
              className={`flex items-center gap-1 ${
                moreOpen ? "text-[#7c3aed]" : ""
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
              More
              <svg
                className={`w-4 h-4 transition-transform ${
                  moreOpen ? "rotate-180" : ""
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
          className={`hidden md:flex items-center gap-8 ml-auto font-medium ${
            isScrolled ? "text-[#2d1b69]" : "text-white"
          }`}
        >
          <a
            href="https://lms-full-stack-mcq7.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Programs
          </a>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
          <button onClick={scrollToContact}>Contact Us</button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

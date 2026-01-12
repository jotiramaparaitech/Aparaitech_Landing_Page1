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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Scroll detection
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setMoreOpen(false); // Close dropdown on scroll
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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

  // ✅ UPDATED: Fixed all links with correct routes
  const moreDropdownContent = {
    "Products": [
      { name: "AI Solutions", link: "/generative-ai" },
      { name: "Cloud Services", link: "/cloud" },
      { name: "Custom Software", link: "/products/custom-software" },
      { name: "Mobile Apps", link: "/products/mobile-apps" },
      { name: "DevOps", link: "/products/devops" },
      { name: "UI/UX Design", link: "/products/ui-ux-design" }
    ],
    "Industries": [
      { name: "Healthcare", link: "/industries/healthcare" },
      { name: "Finance & Banking", link: "/industries/finance" },
      { name: "E-Commerce", link: "/industries/ecommerce" },
      { name: "Education", link: "/industries/education" },
      { name: "Manufacturing", link: "/industries/manufacturing" },
      { name: "Startups", link: "/industries/startups" }
    ],
    "Customers": [
      { name: "Success Stories", link: "/customers/success-stories" },
      { name: "Case Studies", link: "/customers/case-studies" },
      { name: "Testimonials", link: "/customers/testimonials" },
      { name: "Client Portfolio", link: "/customers/portfolio" }
    ],
    "Learning": [
      { name: "Explore Programs", link: "https://lms-full-stack-mcq7.vercel.app/", external: true },
      { name: "Documentation", link: "/learning/documentation" },
      { name: "Tutorials", link: "/learning/tutorials" },
      { name: "Webinars", link: "/learning/webinars" },
      { name: "Certifications", link: "/learning/certifications" }
    ],
    "Support": [
      { name: "Help Center", link: "/support/help-center" },
      { name: "Contact Support", link: "#", onClick: scrollToContact },
      { name: "Community Forum", link: "/support/community" },
      { name: "Status", link: "/support/status" }
    ],
    "Company": [
      { name: "About Us", link: "/about" },
      { name: "Our Values", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "News & Blog", link: "/company/news" },
      { name: "Partners", link: "/company/partners" },
      { name: "Investor Relations", link: "/company/investors" }
    ]
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
          
          {/* MORE DROPDOWN TRIGGER */}
          <div className="relative" ref={moreRef}>
            <button
              className={`flex items-center gap-1 hover:text-[#7c3aed] transition ${
                moreOpen ? "text-[#7c3aed]" : ""
              }`}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setTimeout(() => {
                if (!dropdownRef.current?.matches(':hover')) {
                  setMoreOpen(false);
                }
              }, 100)}
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* MEGA DROPDOWN */}
            {moreOpen && (
              <div
                ref={dropdownRef}
                className="fixed left-0 right-0 top-[72px] bg-white shadow-2xl rounded-b-2xl border-t border-gray-100 pt-6 pb-8 px-8 animate-fadeIn"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setTimeout(() => setMoreOpen(false), 100)}
                style={{
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {Object.entries(moreDropdownContent).map(([category, items]) => (
                    <div key={category} className="min-w-[160px]">
                      <h3 className="font-semibold text-[#2d1b69] text-sm uppercase tracking-wide mb-4">
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
                                className="text-gray-700 hover:text-[#7c3aed] text-sm block py-1 transition hover:translate-x-1"
                                onClick={() => setMoreOpen(false)}
                              >
                                {item.name}
                              </a>
                            ) : item.onClick ? (
                              <button
                                onClick={() => {
                                  item.onClick();
                                  setMoreOpen(false);
                                }}
                                className="text-gray-700 hover:text-[#7c3aed] text-sm block py-1 transition hover:translate-x-1 text-left w-full"
                              >
                                {item.name}
                              </button>
                            ) : (
                              <Link
                                to={item.link}
                                className="text-gray-700 hover:text-[#7c3aed] text-sm block py-1 transition hover:translate-x-1"
                                onClick={() => setMoreOpen(false)}
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
                
                {/* BOTTOM SECTION */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h4 className="font-medium text-[#2d1b69] mb-2">Need help?</h4>
                      <p className="text-gray-600 text-sm max-w-md">
                        Contact our sales team or explore our resources for more information
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          scrollToContact();
                          setMoreOpen(false);
                        }}
                        className="px-5 py-2.5 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition font-medium text-sm"
                      >
                        Contact Sales
                      </button>
                      <Link
                        to="/resources"
                        className="px-5 py-2.5 rounded-full border border-[#7c3aed] text-[#7c3aed] hover:bg-[#f5f3ff] transition font-medium text-sm"
                        onClick={() => setMoreOpen(false)}
                      >
                        View Resources
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
        <div className="md:hidden fixed top-[72px] inset-x-0 bg-black/90 backdrop-blur-xl px-6 py-6 space-y-0 text-white z-40 overflow-x-hidden animate-slideDown"
          style={{ animation: 'slideDown 0.3s ease-out' }}>
          
          <Link 
            to="/generative-ai" 
            onClick={() => setMenuOpen(false)} 
            className="block py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded"
          >
            Generative AI
          </Link>
          <Link 
            to="/cloud" 
            onClick={() => setMenuOpen(false)} 
            className="block py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded"
          >
            Cloud
          </Link>
          <Link 
            to="/solutions" 
            onClick={() => setMenuOpen(false)} 
            className="block py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded"
          >
            Solutions
          </Link>
          
          {/* Mobile More Section */}
          <div className="pt-2 pb-4 border-b border-white/10">
            <div className="text-white/70 text-sm font-medium mb-3 px-2">More Options</div>
            <div className="grid grid-cols-2 gap-3 px-2">
              {Object.entries(moreDropdownContent).slice(0, 4).map(([category, items]) => (
                <div key={category} className="bg-white/5 rounded-lg p-3">
                  <div className="text-white/60 text-xs uppercase mb-2 font-semibold">{category}</div>
                  <div className="space-y-1">
                    {items.slice(0, 2).map((item, index) => (
                      <div key={index}>
                        {item.external ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white text-xs block py-1 hover:pl-1 transition-all"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ) : item.onClick ? (
                          <button
                            onClick={() => {
                              item.onClick();
                              setMenuOpen(false);
                            }}
                            className="text-white/80 hover:text-white text-xs block py-1 hover:pl-1 transition-all text-left w-full"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            to={item.link}
                            className="text-white/80 hover:text-white text-xs block py-1 hover:pl-1 transition-all"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link 
            to="/careers" 
            onClick={() => setMenuOpen(false)} 
            className="block py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded"
          >
            Careers
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMenuOpen(false)} 
            className="block py-4 border-b border-white/10 hover:bg-white/5 px-2 rounded"
          >
            About
          </Link>
          <button
            onClick={scrollToContact}
            className="w-full mt-6 py-3 rounded-lg bg-[#8b5cf6] font-medium hover:bg-[#7c3aed] transition"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
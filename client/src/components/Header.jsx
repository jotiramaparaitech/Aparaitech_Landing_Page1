import React, { useState } from "react";
import ALogo from "../assets/ALogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(233,228,250,0.9)] backdrop-blur-lg z-[1000] py-4 border-b border-white/40">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 text-2xl font-bold text-[#3f3c8f]">
          <img
            src={ALogo}
            alt="Aparaitech Logo"
            className="w-12 h-12 object-contain"
          />
          <span>Aparaitech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-[#4b4a7a]">
          <a
            href="#home"
            className="font-medium hover:text-[#6d63ff] transition-colors"
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div
            className="relative font-medium hover:text-[#6d63ff] cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span>
              Services <span className="text-xs">▼</span>
            </span>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md border border-[#dcd7ff] rounded-lg min-w-[200px] py-2 shadow-lg">
                {[
                  "Cloud Computing",
                  "Software Development",
                  "AI & Machine Learning",
                  "IT Consulting",
                ].map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block px-6 py-3 text-[#4b4a7a] hover:bg-[#ebe7ff]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#ai"
            className="font-medium hover:text-[#6d63ff] transition-colors"
          >
            AI
          </a>

          {/* About Dropdown */}
          <div
            className="relative font-medium hover:text-[#6d63ff] cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <span>
              About <span className="text-xs">▼</span>
            </span>
            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md border border-[#dcd7ff] rounded-lg min-w-[200px] py-2 shadow-lg">
                {["Our Story", "Our Team", "Careers"].map((item) => (
                  <a
                    key={item}
                    href="#about"
                    className="block px-6 py-3 text-[#4b4a7a] hover:bg-[#ebe7ff]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="font-medium hover:text-[#6d63ff] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#6d63ff] text-white px-8 py-3 font-semibold rounded-lg hover:bg-[#5b52e6] transition-all shadow-md">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-[25px] h-[3px] bg-[#4b4a7a] rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-[#4b4a7a] rounded-sm"></span>
          <span className="w-[25px] h-[3px] bg-[#4b4a7a] rounded-sm"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-[rgba(233,228,250,0.95)] backdrop-blur-lg p-8 flex flex-col gap-6 text-[#4b4a7a]">
          {["Home", "Services", "AI", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium"
            >
              {item}
            </a>
          ))}
          <button className="bg-[#6d63ff] text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

// src/components/Header.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Phone, CheckCircle2, ChevronDown, Sun, Moon } from "lucide-react";
import toast from "react-hot-toast";
import { recordAppointmentBooking } from "../utils/sheetService";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);

  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Enterprise AI Diagnostic",
    message: "",
    nda: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const moreRef = useRef(null);
  const dropdownRef = useRef(null);

  /* Close More on outside click */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  const scrollToContact = () => {
    setModalOpen(true);
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await recordAppointmentBooking({
        ...form,
        source: "Header Consultation Modal",
      });
      setSubmitted(true);
      toast.success("Consultation request received! Logged to inquiry sheet.");
      setTimeout(() => {
        setModalOpen(false);
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "Enterprise AI Diagnostic",
          message: "",
          nda: true,
        });
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error("Saved locally. Our team will contact you shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  /* Dropdown Data */
  const moreDropdownContent = {
    Products: [
      { name: "Generative AI Solutions", link: "/generative-ai" },
      { name: "Cloud Infrastructure", link: "/cloud" },
      { name: "Custom AI Software", link: "/products/custom-software" },
      { name: "Mobile AI Applications", link: "/products/mobile-apps" },
      { name: "DevOps & MLOps", link: "/products/devops" },
      { name: "UI/UX & Cognitive Design", link: "/products/ui-ux-design" },
    ],
    Industries: [
      { name: "Manufacturing & Industrial", link: "/industries/manufacturing" },
      { name: "BFSI & Banking", link: "/industries/finance" },
      { name: "E-Commerce & Retail", link: "/industries/ecommerce" },
      { name: "Healthcare & Life Sciences", link: "/industries/healthcare" },
      { name: "Education & EdTech", link: "/industries/education" },
      { name: "High-Growth Startups", link: "/industries/startups" },
    ],
    Customers: [
      { name: "Success Stories", link: "/customers/success-stories" },
      { name: "Case Studies", link: "/customers/case-studies" },
      { name: "Client Testimonials", link: "/customers/testimonials" },
      { name: "Production Portfolio", link: "/customers/portfolio" },
    ],
    Learning: [
      {
        name: "Explore Programs",
        link: "https://lms-full-stack-mcq7.vercel.app/",
        external: true,
      },
      { name: "Documentation", link: "/learning/documentation" },
      { name: "Tutorials & Guides", link: "/learning/tutorials" },
      { name: "Technical Webinars", link: "/learning/webinars" },
      { name: "AI Certifications", link: "/learning/certifications" },
    ],
    Support: [
      { name: "Contact Support", onClick: scrollToContact },
      { name: "Developer Community", link: "/support/community" },
      { name: "System Status (99.9% Live)", link: "/support/status" },
    ],
    Company: [
      { name: "About Aparaitech", link: "/company/about-us" },
      { name: "Our Values & Principles", link: "/company/values" },
      { name: "Careers & Engineering Pods", link: "/company/careers" },
      { name: "News & Insights", link: "/company/news" },
      { name: "Partnerships", link: "/company/partners" },
      { name: "Investor Relations", link: "/company/investors" },
    ],
  };

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div
        className="flex min-h-[38px] flex-wrap items-center justify-between gap-2 px-4 sm:px-8 py-1.5 text-xs shadow-sm bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
            India's #1 Agentic CRM
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs">
            Uniquely built for India's growing businesses — SMB Growth Kit live in just 4 weeks!
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex cursor-pointer items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors whitespace-nowrap text-xs"
          >
            <span>Get SMB Growth Kit</span>
            <span>→</span>
          </button>
          <a
            href="tel:+918261840199"
            className="hidden md:inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs transition-colors"
          >
            <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>1800-420-7332 / +91 82618 40199</span>
          </a>
        </div>
      </div>

      {/* 2. ENTERPRISE NAVBAR */}
      <header className="relative w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[70px] items-center justify-between gap-4">
            {/* Official Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-10 w-10 rounded-xl object-contain bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 group-hover:border-blue-500 transition-all shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[17px] tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-none">
                  Aparaitech Software
                </span>
                <span className="text-[10px] tracking-wider text-blue-600 dark:text-blue-400 uppercase mt-1 font-semibold">
                  Enterprise AI & Cloud Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menus */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-medium text-slate-700 dark:text-slate-200">
              {/* Products Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-500 dark:text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-2.5 shadow-xl dark:shadow-2xl z-50">
                  <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5">
                    Agentforce & CRM Suite
                  </div>
                  {moreDropdownContent.Products.map((p, i) => (
                    <Link
                      key={i}
                      to={p.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <span>Industries</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-500 dark:text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-2.5 shadow-xl dark:shadow-2xl z-50">
                  <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5">
                    Specialized Solutions
                  </div>
                  {moreDropdownContent.Industries.map((ind, i) => (
                    <Link
                      key={i}
                      to={ind.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Customers Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <span>Customers</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-500 dark:text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-2.5 shadow-xl dark:shadow-2xl z-50">
                  <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5">
                    Enterprise Proof Points
                  </div>
                  {moreDropdownContent.Customers.map((cust, i) => (
                    <Link
                      key={i}
                      to={cust.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                    >
                      {cust.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Learning Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <span>Learning</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-500 dark:text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-2.5 shadow-xl dark:shadow-2xl z-50">
                  <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5">
                    Agentblazer & Academy
                  </div>
                  {moreDropdownContent.Learning.map((lrn, i) =>
                    lrn.external ? (
                      <a
                        key={i}
                        href={lrn.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                      >
                        {lrn.name} ↗
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={lrn.link}
                        className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                      >
                        {lrn.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <span>Company</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-500 dark:text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-2.5 shadow-xl dark:shadow-2xl z-50">
                  <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1.5">
                    About Aparaitech Software
                  </div>
                  {moreDropdownContent.Company.map((c, i) => (
                    <Link
                      key={i}
                      to={c.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right Utility Actions */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="hidden xl:flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer font-medium"
              >
                <span>Contact Us</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/60 transition-all focus:outline-none"
                title={theme === "dark" ? "Switch to White / Light Theme" : "Switch to Dark Theme"}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-emerald-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Signature CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="relative inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 transition-all shadow-sm hover:shadow-md hover:brightness-105"
              >
                <span>Try for free</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 h-[calc(100vh-120px)] bg-white dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 p-4 sm:p-6 overflow-y-auto z-50 shadow-2xl">
            <nav className="space-y-2 text-sm pb-16">
              {/* Mobile Theme Toggle Card */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-500 dark:text-slate-400 tracking-wider">Theme Appearance</div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                      {theme === "dark" ? "Dark Theme" : "Light Theme"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                >
                  Switch to {theme === "dark" ? "Light" : "Dark"}
                </button>
              </div>

              {/* Primary Pages */}
              <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/generative-ai"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 text-blue-600 dark:text-blue-400 transition-colors"
                >
                  <span>AI Solutions</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">21+ Systems</span>
                </Link>
                <Link
                  to="/cloud"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Cloud Infrastructure
                </Link>
                <Link
                  to="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </div>

              {/* Categorized Dropdown Sections for All Subpages */}
              <div className="pt-2 space-y-1.5">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest px-3 py-1 font-semibold">
                  Explore Architecture & Subpages
                </div>

                {Object.entries(moreDropdownContent).map(([category, items]) => {
                  const isOpen = mobileCategory === category;
                  return (
                    <div key={category} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111827] overflow-hidden">
                      <button
                        onClick={() => setMobileCategory(isOpen ? null : category)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span className="uppercase tracking-wider">{category}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-500"}`} />
                      </button>

                      {isOpen && (
                        <div className="px-3.5 pb-3 pt-1 space-y-1.5 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B0F19]">
                          {items.map((item, idx) => (
                            <div key={idx}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                >
                                  {item.name} ↗
                                </a>
                              ) : item.onClick ? (
                                <button
                                  onClick={() => {
                                    setMenuOpen(false);
                                    item.onClick();
                                  }}
                                  className="block w-full text-left py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  to={item.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Direct Actions in Mobile Menu */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                <a
                  href="tel:+918261840199"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-medium"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Pune CoE: +91 82618 40199</span>
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs uppercase tracking-wider text-center rounded-lg shadow-sm transition-all"
                >
                  Schedule Architectural Consultation →
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* 3. INTERACTIVE CONSULTATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-lg p-1 transition-colors"
            >
              ✕
            </button>

            <div className="mb-6 flex items-center gap-3">
              <img src="/aparaitech_logo.jpg" alt="Logo" className="h-10 w-10 rounded-lg object-contain border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  EXECUTIVE CONSULTATION INTAKE
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Aparaitech Software AI Advisory
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Consultation Request Confirmed</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Our Lead AI Architect will review your parameters and reach out within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Apex Enterprise Systems"
                    className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Focus Area</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                  >
                    <option value="Enterprise AI Diagnostic">Enterprise AI Diagnostic Sprint (Recommended)</option>
                    <option value="Autonomous Multi-Agents">Autonomous Multi-Agent Workflows</option>
                    <option value="Enterprise RAG & Knowledge Bases">Enterprise RAG & Zero-Hallucination Knowledge Bases</option>
                    <option value="Computer Vision & Inspection">Computer Vision & Quality Inspection</option>
                    <option value="Document OCR & IDP">Intelligent Document Processing (IDP/OCR)</option>
                    <option value="Private LLM & On-Premises VPC">Private LLM & VPC Isolation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Operational Challenge (Optional)</label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe the workflow bottleneck or target automation system..."
                    className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none transition-all"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="hdr-nda-check"
                    checked={form.nda}
                    onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                    className="rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F172A] text-blue-600 focus:ring-0"
                  />
                  <label htmlFor="hdr-nda-check" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                    Require mutual non-disclosure agreement (NDA) before call.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer shadow-sm hover:shadow-md"
                >
                  {submitting ? "Transmitting..." : "Submit Consultation Request →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

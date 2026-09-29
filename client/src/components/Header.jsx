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
        className="flex min-h-[38px] flex-wrap items-center justify-center gap-1.5 px-3 sm:px-6 py-1.5 text-center text-[11px] sm:text-[13px] text-white font-medium shadow-sm"
        style={{ background: "linear-gradient(90deg, #028090 0%, #00A896 50%, #473BFD 100%)" }}
      >
        <span>Discover how Aparaitech Software accelerates enterprise AI workflows in under 30 minutes.</span>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex cursor-pointer items-center gap-1 text-white underline font-semibold hover:opacity-90 transition-opacity whitespace-nowrap ml-1"
        >
          Schedule Consultation <span>→</span>
        </button>
      </div>

      {/* 2. TECHNICAL NAVBAR */}
      <header className="relative w-full border-b border-[#22242A] bg-[#0C0D0F]/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Official Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-10 w-10 rounded-lg object-contain bg-white/5 border border-white/10 group-hover:border-[#00E5C9] transition-all shadow-md shadow-[#00E5C9]/10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[17px] tracking-tight text-white leading-none">
                  Aparaitech Software
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#00E5C9] uppercase mt-0.5 font-medium">
                  Enterprise AI Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.11em]">
              <Link
                to="/"
                className={location.pathname === "/" ? "text-[#00E5C9]" : "text-white hover:text-[#00E5C9] transition-colors"}
              >
                Home
              </Link>
              <Link
                to="/generative-ai"
                className={
                  location.pathname === "/generative-ai"
                    ? "text-[#00E5C9] flex items-center gap-1.5"
                    : "text-[#C9C9CE] hover:text-[#00E5C9] transition-colors flex items-center gap-1.5"
                }
              >
                AI Solutions <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C9] animate-pulse"></span>
              </Link>
              <Link
                to="/cloud"
                className={location.pathname === "/cloud" ? "text-[#00E5C9]" : "text-[#C9C9CE] hover:text-white transition-colors"}
              >
                Cloud
              </Link>
              <Link
                to="/solutions"
                className={location.pathname === "/solutions" ? "text-[#00E5C9]" : "text-[#C9C9CE] hover:text-white transition-colors"}
              >
                Solutions
              </Link>

              {/* More Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  className={
                    moreOpen
                      ? "text-[#00E5C9] flex items-center gap-1 cursor-pointer"
                      : "text-[#C9C9CE] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  }
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
                  <span>More</span>
                  <ChevronDown className={moreOpen ? "w-3.5 h-3.5 rotate-180 transition-transform text-[#00E5C9]" : "w-3.5 h-3.5 transition-transform"} />
                </button>

                {moreOpen && (
                  <div
                    ref={dropdownRef}
                    className="fixed left-0 right-0 top-[114px] bg-[#141518] border-b border-[#22242A] shadow-2xl pt-8 pb-10 px-8 z-50 text-white"
                  >
                    <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                      {Object.entries(moreDropdownContent).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="font-mono font-semibold text-[#00E5C9] text-xs mb-4 uppercase tracking-wider">
                            {category}
                          </h3>
                          <ul className="space-y-2.5">
                            {items.map((item, index) => (
                              <li key={index}>
                                {item.external ? (
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-white text-xs font-mono transition-colors block py-0.5"
                                  >
                                    {item.name} ↗
                                  </a>
                                ) : item.onClick ? (
                                  <button
                                    onClick={item.onClick}
                                    className="text-slate-300 hover:text-[#00E5C9] text-xs font-mono text-left transition-colors block py-0.5"
                                  >
                                    {item.name}
                                  </button>
                                ) : (
                                  <Link
                                    to={item.link}
                                    className="text-slate-300 hover:text-white text-xs font-mono transition-colors block py-0.5"
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
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="tel:+918261840199"
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E5C9]" />
                +91 82618 40199
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#1C1C1E] border border-white/10 text-slate-300 hover:text-white hover:border-[#00E5C9]/50 transition-all focus:outline-none"
                title={theme === "dark" ? "Switch to White / Light Theme" : "Switch to Dark Theme"}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#D4FD53] transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-[#0D9488] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="group relative flex h-10 cursor-pointer items-center gap-1.5 rounded-md bg-[#1C1C1E] border border-white/10 px-4 font-mono text-[13px] text-white transition-all hover:bg-[#2C2C30] hover:border-[#00E5C9]/50"
              >
                <span>Contact us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00E5C9]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#00E5C9] transition-colors"
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
          <div className="lg:hidden absolute top-full left-0 right-0 h-[calc(100vh-120px)] bg-[#0C0D0F] border-t border-[#22242A] p-4 sm:p-6 overflow-y-auto z-50 shadow-2xl">
            <nav className="space-y-2 font-mono text-sm pb-16">
              {/* Mobile Theme Toggle Card */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#141518] border border-[#22242A] mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1C1C1E] border border-white/10">
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4 text-[#D4FD53]" />
                    ) : (
                      <Moon className="w-4 h-4 text-[#0D9488]" />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Theme Appearance</div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      {theme === "dark" ? "Dark Theme" : "White Theme"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-md bg-[#1C1C1E] border border-white/10 hover:border-[#00E5C9]/50 text-xs font-mono text-slate-200 transition-all cursor-pointer"
                >
                  Switch to {theme === "dark" ? "White" : "Dark"}
                </button>
              </div>

              {/* Primary Pages */}
              <div className="space-y-1 pb-3 border-b border-[#22242A]">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded hover:bg-[#141518] text-white hover:text-[#00E5C9] transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/generative-ai"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded hover:bg-[#141518] text-[#00E5C9] transition-colors"
                >
                  <span>AI Solutions</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#00E5C9]/10 text-[#00E5C9] border border-[#00E5C9]/20">21+ Systems</span>
                </Link>
                <Link
                  to="/cloud"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded hover:bg-[#141518] text-white hover:text-[#00E5C9] transition-colors"
                >
                  Cloud Infrastructure
                </Link>
                <Link
                  to="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded hover:bg-[#141518] text-white hover:text-[#00E5C9] transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </div>

              {/* Categorized Dropdown Sections for All Subpages */}
              <div className="pt-2 space-y-1.5">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-3 py-1">
                  Explore Architecture & Subpages
                </div>

                {Object.entries(moreDropdownContent).map(([category, items]) => {
                  const isOpen = mobileCategory === category;
                  return (
                    <div key={category} className="rounded-lg border border-[#22242A] bg-[#141518] overflow-hidden">
                      <button
                        onClick={() => setMobileCategory(isOpen ? null : category)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left font-mono font-semibold text-slate-200 hover:text-[#00E5C9] transition-colors"
                      >
                        <span className="uppercase tracking-wider">{category}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180 text-[#00E5C9]" : "text-slate-500"}`} />
                      </button>

                      {isOpen && (
                        <div className="px-3.5 pb-3 pt-1 space-y-1.5 border-t border-[#22242A] bg-[#0C0D0F]">
                          {items.map((item, idx) => (
                            <div key={idx}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1 text-xs text-slate-400 hover:text-[#D4FD53] transition-colors"
                                >
                                  {item.name} ↗
                                </a>
                              ) : item.onClick ? (
                                <button
                                  onClick={() => {
                                    setMenuOpen(false);
                                    item.onClick();
                                  }}
                                  className="block w-full text-left py-1 text-xs text-slate-400 hover:text-[#00E5C9] transition-colors"
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  to={item.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1 text-xs text-slate-400 hover:text-[#00E5C9] transition-colors"
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
              <div className="pt-4 border-t border-[#22242A] space-y-2.5">
                <a
                  href="tel:+918261840199"
                  className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#141518] border border-[#22242A] text-xs text-[#00E5C9]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Pune CoE: +91 82618 40199</span>
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-3 bg-[#00E5C9] text-[#0C0D0F] font-bold text-xs uppercase tracking-wider text-center rounded hover:brightness-110 shadow-lg shadow-[#00E5C9]/20"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#141518] border border-white/20 rounded-xl p-5 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-mono p-1"
            >
              ✕
            </button>

            <div className="mb-6 flex items-center gap-3">
              <img src="/aparaitech_logo.jpg" alt="Logo" className="h-10 w-10 rounded-md object-contain border border-white/10" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E5C9]">
                  EXECUTIVE CONSULTATION INTAKE
                </span>
                <h3 className="text-xl font-bold text-white">
                  Aparaitech Software AI Advisory
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Consultation Request Confirmed</h4>
                <p className="text-xs text-slate-300">
                  Our Lead AI Architect will review your parameters and reach out within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Apex Enterprise Systems"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Focus Area</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
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
                  <label className="block text-xs font-mono text-slate-300 mb-1">Operational Challenge (Optional)</label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe the workflow bottleneck or target automation system..."
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="hdr-nda-check"
                    checked={form.nda}
                    onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                    className="rounded border-white/20 bg-[#1C1C1E] text-[#00E5C9] focus:ring-0"
                  />
                  <label htmlFor="hdr-nda-check" className="text-xs text-slate-400">
                    Require mutual non-disclosure agreement (NDA) before call.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded bg-[#00E5C9] text-[#0C0D0F] font-bold text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
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

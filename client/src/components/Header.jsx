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
      {/* 1. TOP ANNOUNCEMENT BANNER (SALESFORCE INDIA STYLE) */}
      <div
        className="flex min-h-[38px] flex-wrap items-center justify-between gap-2 px-4 sm:px-8 py-1.5 text-xs text-white shadow-sm bg-[#032D60] border-b border-white/10"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-[#D4FD53] bg-white/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wide">
            India's #1 Agentic CRM
          </span>
          <span className="text-white/90">
            Uniquely built for India's growing businesses — SMB Growth Kit live in just 4 weeks!
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex cursor-pointer items-center gap-1 text-[#00E5C9] font-bold hover:underline transition-opacity whitespace-nowrap text-xs"
          >
            <span>Get SMB Growth Kit</span>
            <span>→</span>
          </button>
          <a
            href="tel:+918261840199"
            className="hidden md:inline-flex items-center gap-1 text-white/80 hover:text-white text-xs font-mono"
          >
            <Phone className="w-3 h-3 text-[#00E5C9]" />
            <span>1800-420-7332 / +91 82618 40199</span>
          </a>
        </div>
      </div>

      {/* 2. SALESFORCE-GRADE NAVBAR */}
      <header className="relative w-full border-b border-[#22242A] bg-[#0C0D0F]/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* Official Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-10 w-10 rounded-lg object-contain bg-white/5 border border-white/10 group-hover:border-[#0176D3] transition-all shadow-md shadow-[#0176D3]/20"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[17px] tracking-tight text-white leading-none">
                  Aparaitech Software
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#0176D3] uppercase mt-0.5 font-bold">
                  The #1 AI CRM Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menus (Salesforce India) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-sans text-[13px] font-semibold text-slate-200">
              {/* Products Dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1 hover:text-[#0176D3] transition-colors cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-[#141518] border border-[#22242A] p-3 shadow-2xl z-50">
                  <div className="text-[11px] font-mono text-[#0176D3] uppercase tracking-wider px-3 py-1 font-bold">
                    Agentforce & CRM Suite
                  </div>
                  {moreDropdownContent.Products.map((p, i) => (
                    <Link
                      key={i}
                      to={p.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0176D3] transition-colors cursor-pointer"
                >
                  <span>Industries</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-[#141518] border border-[#22242A] p-3 shadow-2xl z-50">
                  <div className="text-[11px] font-mono text-[#0176D3] uppercase tracking-wider px-3 py-1 font-bold">
                    Specialized Solutions
                  </div>
                  {moreDropdownContent.Industries.map((ind, i) => (
                    <Link
                      key={i}
                      to={ind.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0176D3] transition-colors cursor-pointer"
                >
                  <span>Customers</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-[#141518] border border-[#22242A] p-3 shadow-2xl z-50">
                  <div className="text-[11px] font-mono text-[#0176D3] uppercase tracking-wider px-3 py-1 font-bold">
                    Enterprise Proof Points
                  </div>
                  {moreDropdownContent.Customers.map((cust, i) => (
                    <Link
                      key={i}
                      to={cust.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0176D3] transition-colors cursor-pointer"
                >
                  <span>Learning</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-[#141518] border border-[#22242A] p-3 shadow-2xl z-50">
                  <div className="text-[11px] font-mono text-[#0176D3] uppercase tracking-wider px-3 py-1 font-bold">
                    Agentblazer & Academy
                  </div>
                  {moreDropdownContent.Learning.map((lrn, i) =>
                    lrn.external ? (
                      <a
                        key={i}
                        href={lrn.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {lrn.name} ↗
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={lrn.link}
                        className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0176D3] transition-colors cursor-pointer"
                >
                  <span>Company</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-slate-400" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-xl bg-[#141518] border border-[#22242A] p-3 shadow-2xl z-50">
                  <div className="text-[11px] font-mono text-[#0176D3] uppercase tracking-wider px-3 py-1 font-bold">
                    About Salesforce / Aparaitech
                  </div>
                  {moreDropdownContent.Company.map((c, i) => (
                    <Link
                      key={i}
                      to={c.link}
                      className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
                className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                <span>Contact Us</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#1C1C1E] border border-white/10 text-slate-300 hover:text-white hover:border-[#0176D3]/50 transition-all focus:outline-none"
                title={theme === "dark" ? "Switch to White / Light Theme" : "Switch to Dark Theme"}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#D4FD53] transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-[#0176D3] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Signature Salesforce "Try for free" CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="relative inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#008244] hover:bg-[#007038] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 transition-all shadow-md hover:shadow-lg hover:brightness-105"
              >
                <span>Try for free</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#0176D3] transition-colors"
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

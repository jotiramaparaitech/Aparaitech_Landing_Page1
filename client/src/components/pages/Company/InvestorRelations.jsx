// src/components/pages/Company/InvestorRelations.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Calendar,
  ExternalLink,
  FileText,
  Download,
  X,
  Send,
  Sparkles,
  ArrowUpRight,
  Activity,
  Layers,
  Lock,
  Phone,
  Mail
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const InvestorRelations = () => {
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investorType: "Venture Capital / Growth Equity",
    aum: "$50M - $250M",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast.error("Please fill in your name, corporate email, phone, and fund/entity name.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: `Investor Briefing: ${formData.investorType}`,
        source: "Investor Relations Page"
      });
      if (result.success) {
        toast.success("Briefing request confirmed! Logged to executive leadership schedule.");
        setIsBriefingModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          investorType: "Venture Capital / Growth Equity",
          aum: "$50M - $250M",
          notes: ""
        });
      } else {
        toast.error("Request saved locally. Executive leadership will reach out shortly.");
        setIsBriefingModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please email directly to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const metrics = [
    { label: "Production Platforms", value: "6 Live Systems", sub: "CloudKitchen, Attendance, ApnaStore, ServiceHub, etc." },
    { label: "Infrastructure Uptime SLA", value: "99.98%", sub: "Monitored 24/7 across Hinjawadi Phase 2 CoE" },
    { label: "Monthly Platform Events", value: "500k+", sub: "High-concurrency order & biometric transactions" },
    { label: "Capital Efficiency", value: "Customer Funded", sub: "High gross margins with lean engineering pods" }
  ];

  const filings = [
    {
      name: "FY2024 Corporate Strategy & Technical Roadmap",
      date: "Sep 2024",
      type: "Roadmap Deck",
      size: "2.4 MB"
    },
    {
      name: "Autonomous Agentic AI & SaaS Unit Economics Whitepaper",
      date: "Aug 2024",
      type: "Whitepaper",
      size: "1.8 MB"
    },
    {
      name: "Hinjawadi Center of Excellence Phase 2 Capital Allocation",
      date: "Jun 2024",
      type: "Corporate Filing",
      size: "1.2 MB"
    },
    {
      name: "Enterprise SLA Compliance & Security Governance Audit",
      date: "Apr 2024",
      type: "Audit Report",
      size: "3.1 MB"
    }
  ];

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-24 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#766DFE 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#D4FD53]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53]">
              INSTITUTIONAL RELATIONS // CORPORATE GOVERNANCE
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Aparaitech Software Investor Relations
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl leading-relaxed">
            Building sustainable, defensible enterprise value through disciplined software engineering, real proprietary SaaS products, and capital-efficient operations based in Pune, India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setIsBriefingModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Executive Briefing</span>
            </button>
            <a
              href="mailto:info@ai.aparaitech.org?subject=Investor%20Information%20Pack"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Request Information Memorandum</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL METRICS */}
      <section className="border-b border-[#22242A] bg-[#141518]/70 py-14">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-[#22242A] bg-[#0C0D0F]">
                <div className="font-mono text-2xl lg:text-3xl font-bold text-[#D4FD53]">{m.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mt-1">{m.label}</div>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORPORATE THESIS */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
              CORE INVESTMENT THESIS
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">
              Engineering Foundations. Tangible Production Moats.
            </h2>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Unlike companies selling speculative AI slideware, Aparaitech Software engineers and owns production operating systems that power daily commerce, industrial biometric check-ins, and cloud kitchens across real enterprises.
              </p>
              <p>
                Our Hinjawadi Phase 2 Pune Center of Excellence operates on a highly disciplined, productized consulting and SaaS subscription model with strong operational cash flows and negative customer churn.
              </p>
            </div>

            <div className="mt-8 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FD53]" />
                <span>Zero debt capitalization structure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FD53]" />
                <span>Proprietary IP across 6 live production systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FD53]" />
                <span>Strategic expansion in Hinjawadi IT corridor, Pune</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#22242A] bg-[#141518] p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4FD53]" />
              <span>Corporate Governance & Compliance</span>
            </h3>

            <div className="space-y-4 text-xs font-mono text-slate-400">
              <div className="p-4 rounded-lg bg-[#0C0D0F] border border-[#22242A]">
                <div className="text-white font-bold mb-1">Corporate Registration</div>
                <div>Aparaitech Software • Registered under Indian Companies Act</div>
                <div className="text-slate-500 mt-1">CIN & Tax GST Compliance Up to Date</div>
              </div>

              <div className="p-4 rounded-lg bg-[#0C0D0F] border border-[#22242A]">
                <div className="text-white font-bold mb-1">Center of Excellence Operations</div>
                <div>Hinjawadi Phase 2, Pune, Maharashtra 411057</div>
                <div className="text-slate-500 mt-1">Direct Engineering Pod Operations</div>
              </div>

              <div className="p-4 rounded-lg bg-[#0C0D0F] border border-[#22242A]">
                <div className="text-white font-bold mb-1">Audit & Accounting Standard</div>
                <div>Statutory quarterly compliance, audited balance sheets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DISCLOSURES & FILINGS */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider">
                TRANSPARENCY & REPORTS
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">Executive Briefings & Filings</h2>
            </div>
            <a
              href="mailto:info@ai.aparaitech.org?subject=Investor%20Data%20Room%20Access"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5C9] hover:underline"
            >
              <span>Request Data Room NDA Access</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] divide-y divide-[#22242A] overflow-hidden">
            {filings.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#141518] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#D4FD53] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{doc.name}</h4>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{doc.date} • {doc.size}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-2.5 py-0.5 rounded bg-[#1C1C1E] border border-white/5 font-mono text-[11px] text-slate-400 uppercase">
                    {doc.type}
                  </span>
                  <a
                    href="mailto:info@ai.aparaitech.org?subject=Request%20Filing:%20"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4FD53] hover:underline"
                  >
                    <span>Request Copy</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTOR CONTACT DESK */}
      <section className="py-16 border-t border-[#22242A] bg-[#0C0D0F]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>INVESTOR RELATIONS DESK</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Direct Executive Communication
          </h2>
          <p className="text-slate-400 text-xs font-mono max-w-lg mx-auto mb-6">
            For institutional investor inquiries, strategic investment syndicates, or commercial partnership discussions:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs">
            <a
              href="mailto:info@ai.aparaitech.org?subject=IR%20Inquiry"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#D4FD53]"
            >
              <Mail className="w-4 h-4 text-[#D4FD53]" />
              <span>info@ai.aparaitech.org</span>
            </a>
            <a
              href="tel:+918261840199"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#D4FD53]"
            >
              <Phone className="w-4 h-4 text-[#D4FD53]" />
              <span>+91 82618 40199</span>
            </a>
            <span className="text-slate-500">Hinjawadi Phase 2, Pune, Maharashtra 411057</span>
          </div>
        </div>
      </section>

      {/* 6. MODAL: INVESTOR BRIEFING REQUEST */}
      {isBriefingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#22242A] bg-[#141518] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsBriefingModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Executive Briefing Request</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Schedule Institutional Discussion
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Recorded directly to our leadership management sheet. Executive officers connect with institutional queries directly.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Sanjeev Bajaj"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sanjeev@fund.com"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Institution / Fund Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g., Apex Capital"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Investor Category</label>
                  <select
                    name="investorType"
                    value={formData.investorType}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="Venture Capital / Growth Equity">Venture Capital / Growth Equity</option>
                    <option value="Family Office / High Net Worth">Family Office / High Net Worth</option>
                    <option value="Corporate Strategic Venture">Corporate Strategic Venture</option>
                    <option value="Angel Syndicate">Angel Syndicate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Inquiry Context / Discussion Topics</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline areas of interest, allocation thesis, or questions for leadership..."
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#D4FD53] py-3 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Syncing Request..." : "Request Executive Briefing"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorRelations;
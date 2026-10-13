// src/components/pages/industries/Finance.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  ShieldCheck,
  Lock,
  Cpu,
  Database,
  ArrowUpRight,
  Zap,
  Calendar,
  X,
  Send,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Scale
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Finance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    financialInstitution: "",
    fintechFocus: "Sub-15ms Real-Time Fraud Detection Engine",
    preferredTime: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please provide your name, corporate email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        company: formData.financialInstitution,
        service: "FinTech & Banking AI Systems",
        source: "Finance Industry Page"
      });
      if (result.success) {
        toast.success("FinTech consultation sprint booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          financialInstitution: "",
          fintechFocus: "Sub-15ms Real-Time Fraud Detection Engine",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune FinTech pod will reach out shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Submission error. Please email direct to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const capabilities = [
    {
      code: "01 / REAL-TIME FRAUD DEFENSE",
      title: "Sub-15ms Fraud Inference",
      desc: "Graph neural networks and streaming decision trees scoring millions of concurrent payment requests against dynamic velocity rules with zero impact on checkout latency.",
      icon: <ShieldCheck className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
    },
    {
      code: "02 / PCI-DSS LEVEL 1 ENCLAVES",
      title: "Zero-Knowledge Tokenization",
      desc: "Isolated Hardware Security Module (HSM) key storage, ephemeral PAN tokenization, and strict cryptographic role-based access preventing database leak vectors.",
      icon: <Lock className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
    },
    {
      code: "03 / IMMUTABLE LEDGERS",
      title: "Double-Entry Accounting Core",
      desc: "High-throughput ACID-compliant ledger microservices engineered with strict idempotency keys, automated batch settlement, and continuous end-of-day reconciliation.",
      icon: <Database className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
    },
    {
      code: "04 / REGULATORY AI CO-PILOT",
      title: "Autonomous AML & SAR Reporting",
      desc: "Automated Suspicious Activity Report (SAR) dossier generation, KYC identity cross-referencing, and continuous compliance telemetry aligned with global regulatory mandates.",
      icon: <Scale className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
    }
  ];

  const standards = [
    { label: "Security Certification", value: "PCI-DSS v4.0 Level 1 & SOC 2 Type II compliant" },
    { label: "Execution Latency", value: "Sub-15ms P99 fraud scoring across payment webhooks" },
    { label: "Data Integrity", value: "Immutable append-only distributed ledger with SHA-256 audit hashing" },
    { label: "Disaster Recovery", value: "Active-active multi-region failover with RPO = 0, RTO < 30s" }
  ];

  return (
    <div className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] text-[#142B4A] dark:text-[#F1F5F9] font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] pt-24 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#10B981]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF]">
              ENTERPRISE INDUSTRIES // FINTECH & BANKING
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight max-w-4xl">
            FinTech & Banking Intelligence Architecture
          </h1>

          <p className="mt-6 text-lg text-[#475569] dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
            Sub-millisecond fraud scoring pipelines, PCI-DSS Level 1 tokenized vaults, and resilient transactional core ledgers engineered by our Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              PCI-DSS v4.0 Level 1
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <Lock className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              Zero-Knowledge Tokenization
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <Zap className="w-3.5 h-3.5 text-[#00E5C9]" />
              Sub-15ms P99 Scoring
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#2563EB] px-8 text-sm font-semibold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule FinTech Architecture Sprint</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-[#29384D] bg-slate-100 dark:bg-[#161F32] px-8 text-sm font-mono text-[#142B4A] dark:text-[#F1F5F9] hover:bg-slate-200 dark:hover:bg-[#1E293B] transition-all"
            >
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-20 border-b border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-[#0F9F8F] dark:text-[#2DD4BF] block mb-2">
              FINANCIAL RIGOR
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#142B4A] dark:text-[#F1F5F9]">
              Institutional Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF]">{cap.code}</span>
                  <div className="p-2 rounded bg-slate-100 dark:bg-[#161F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-white/5 group-hover:border-blue-500/30 transition-all">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-3">{cap.title}</h3>
                <p className="text-sm text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] leading-relaxed font-mono">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STANDARDS */}
      <section className="py-20 border-b border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-[#0D1322]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              BANKING SPECIFICATIONS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#142B4A] dark:text-[#F1F5F9]">
              Regulatory Standards & Resilience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((std, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] shadow-sm">
                <h4 className="font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF] uppercase tracking-wider mb-2">
                  {std.label}
                </h4>
                <p className="text-sm text-[#142B4A] dark:text-[#F1F5F9] font-mono">{std.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-[#142B4A] dark:text-[#F1F5F9]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF] uppercase">Hinjawadi FinTech Pod</span>
            </div>
            <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2">Book FinTech Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Review transaction scale requirements, payment gateways, and PCI-DSS compliance blueprints with our Financial Systems Lead.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alok Agarwal"
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@finbank.com"
                    className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">FinTech Architecture Focus</label>
                <select
                  name="fintechFocus"
                  value={formData.fintechFocus}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none focus:border-blue-500"
                >
                  <option value="Sub-15ms Real-Time Fraud Detection Engine">Sub-15ms Real-Time Fraud Detection Engine</option>
                  <option value="PCI-DSS v4.0 Level 1 Tokenization Vault">PCI-DSS v4.0 Level 1 Tokenization Vault</option>
                  <option value="Double-Entry Core Ledger & Batch Settlement">Double-Entry Core Ledger & Batch Settlement</option>
                  <option value="Open Banking & Payment Gateway Aggregator">Open Banking & Payment Gateway Aggregator</option>
                  <option value="Autonomous AML / SAR Regulatory Drafting">Autonomous AML / SAR Regulatory Drafting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Transaction Scale & System Scope</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Expected TPS, payment rails (UPI, Card, ACH), and banking partners..."
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#2563EB] text-white font-semibold text-sm rounded hover:bg-blue-600 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Recording Appointment...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm FinTech Sprint</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;
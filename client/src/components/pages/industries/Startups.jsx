// src/components/pages/industries/Startups.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  ArrowUpRight,
  Lock,
  Calendar,
  X,
  Send,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Startups = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
    startupStage: "Seed / Pre-Series A (MVP Acceleration)",
    preferredTime: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please provide your name, founder email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        company: formData.startupName,
        service: "Startup AI MVP & Venture Sprint",
        source: "Startups Industry Page"
      });
      if (result.success) {
        toast.success("Founder sprint booked! Recorded to executive appointment sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          startupName: "",
          startupStage: "Seed / Pre-Series A (MVP Acceleration)",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune venture engineering pod will reach out shortly.");
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
      code: "01 / 6-TO-8 WEEK MVP SPRINT",
      title: "Venture-Grade Launch Velocity",
      desc: "Turn specifications into production systems in 45 days. Built with modular TypeScript, Go, Python, and scalable PostgreSQL schemas ready for immediate live customer onboarding.",
      icon: <Rocket className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / INVESTOR TECHNICAL DUE DILIGENCE",
      title: "Zero Technical Debt Architecture",
      desc: "Clean Git histories, automated CI/CD test gates, SOC 2 alignment, and strict microservice decoupling designed to pass venture capital technical audits with flying colors.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / SEED-TO-SCALE RESILIENCE",
      title: "Autoscaling Cloud Foundations",
      desc: "Terraform-defined AWS / GCP environments that operate efficiently on seed budgets while seamlessly scaling to 1,000,000+ daily active users without architectural rewrites.",
      icon: <TrendingUp className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / FRACTIONAL CTO & AI ARCHITECT",
      title: "Senior Pune Pod Leadership",
      desc: "Direct access to our Hinjawadi Center of Excellence leads for AI strategy, model selection (RAG vs fine-tuning), and infrastructure cost optimization.",
      icon: <Cpu className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const terms = [
    { label: "IP Ownership", value: "100% intellectual property & source code transferred to founder" },
    { label: "Delivery Guarantee", value: "Sprint-scoped milestone deliverables with weekly working demos" },
    { label: "Engineering Pod", value: "Dedicated Senior Architect + Full-Stack Pod in Pune CoE" },
    { label: "Post-Launch Warranty", value: "60-day zero-defect warranty and production handover training" }
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
              ENTERPRISE INDUSTRIES // VENTURE SCALE & HIGH-GROWTH
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            High-Growth Startups & AI Venture Sprint Pods
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            6-to-8 week venture MVP sprints, investor-grade cloud architectures, and dedicated engineering pods stationed at our Hinjawadi Phase 2, Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              6-8 Week MVP Turnaround
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              100% Founder IP Ownership
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Rocket className="w-3.5 h-3.5 text-[#00E5C9]" />
              Investor Due Diligence Ready
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Founder Architecture Sprint</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] block mb-2">
              VENTURE ACCELERATION
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Engineering Capabilities for Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#D4FD53]">{cap.code}</span>
                  <div className="p-2 rounded bg-[#1C1C1E] border border-white/5 group-hover:border-[#D4FD53]/30 transition-all">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-mono">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP TERMS */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              FOUNDER COMMITMENTS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Venture Partnership Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {terms.map((t, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#141518] border border-[#22242A]">
                <h4 className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider mb-2">
                  {t.label}
                </h4>
                <p className="text-sm text-white font-mono">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-[#141518] border border-[#22242A] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Venture Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Book Founder Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Review product scope, technical architecture, and 6-week MVP delivery timeline with our Venture CTO.
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
                  placeholder="e.g. Siddharth Mehra"
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="founder@startup.io"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
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
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Venture Stage</label>
                <select
                  name="startupStage"
                  value={formData.startupStage}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="Pre-Seed (Idea to Initial MVP)">Pre-Seed (Idea to Initial MVP)</option>
                  <option value="Seed / Pre-Series A (MVP Acceleration)">Seed / Pre-Series A (MVP Acceleration)</option>
                  <option value="Series A Scaleup (High-Concurrency Scaling)">Series A Scaleup (High-Concurrency Scaling)</option>
                  <option value="AI Integration into Existing SaaS">AI Integration into Existing SaaS</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Product Vision & Core Requirements</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Target market, core user action, preferred tech stack, and funding status..."
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#D4FD53] text-[#0C0D0F] font-bold text-sm rounded hover:brightness-105 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Recording Appointment...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Founder Sprint</span>
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

export default Startups;
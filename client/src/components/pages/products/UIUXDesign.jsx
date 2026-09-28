// src/components/pages/products/UIUXDesign.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Layout,
  Eye,
  Sparkles,
  Layers,
  ArrowUpRight,
  Lock,
  Zap,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Monitor,
  MousePointer
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const UIUXDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designFocus: "Enterprise Design System & Token Architecture",
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
        service: "Enterprise UI/UX Product Design",
        source: "UI/UX Design Product Page"
      });
      if (result.success) {
        toast.success("Design sprint booked! Synced to executive appointment spreadsheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          designFocus: "Enterprise Design System & Token Architecture",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune design pod will reach out shortly.");
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
      code: "01 / DESIGN SYSTEMS",
      title: "Tokenized Design Systems",
      desc: "Atomic design systems with bidirectional Figma-to-code token synchronization. Scalable color palettes, typography scales, spacing units, and component variants in React.",
      icon: <Layers className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / AI WORKSPACES",
      title: "Generative AI & Agent Ergonomics",
      desc: "Purpose-built interfaces for LLM copilots, streaming markdown responses, human-in-the-loop review queues, and multi-turn agent status telemetry.",
      icon: <Sparkles className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / DATA-DENSE CONSOLES",
      title: "Complex B2B Dashboards",
      desc: "High-density data consoles engineered for operators, financial analysts, and network NOC engineers. High-performance canvas graphs, virtualized tables, and split views.",
      icon: <Monitor className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / ACCESSIBILITY & SPEED",
      title: "WCAG 2.1 AA Compliance",
      desc: "Audited accessibility standards, keyboard-first navigation patterns, screen-reader semantic trees, and sub-16ms interactive UI response time guarantees.",
      icon: <Eye className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const standards = [
    { label: "Design Token Pipeline", value: "Figma Tokens Studio → JSON → Tailwind / CSS Vars" },
    { label: "Component Documentation", value: "Storybook 8 with automated chromatic visual regression" },
    { label: "Accessibility Benchmark", value: "WCAG 2.1 Level AA / AAA strict conformance" },
    { label: "Prototype Turnaround", value: "Interactive high-fidelity Figma clickthroughs in 5 business days" }
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
              CORE PRODUCTS // DESIGN SYSTEMS & ERGONOMICS
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Enterprise Product & AI Interface Design
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Eliminate cognitive friction in mission-critical applications. Bespoke enterprise design systems, data-dense operations dashboards, and conversational AI workspaces designed by our Pune product studio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Figma-to-React Token Sync
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              WCAG 2.1 AA Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5C9]" />
              Generative AI UX Patterns
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule UX Architecture Review</span>
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

      {/* 2. CAPABILITIES */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] block mb-2">
              DESIGN ENGINEERING
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Enterprise Interface Capabilities
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

      {/* 3. DESIGN STANDARDS */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              SPECIFICATIONS & TOOLING
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Design Systems Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((std, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#141518] border border-[#22242A]">
                <h4 className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider mb-2">
                  {std.label}
                </h4>
                <p className="text-sm text-white font-mono">{std.value}</p>
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
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Design Studio</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Schedule UX Architecture Review</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Discuss enterprise design systems, complex data workflows, and AI copilot ergonomics with our Principal Designers.
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
                  placeholder="e.g. Shalini Kulkarni"
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
                    placeholder="name@enterprise.com"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Design Focus</label>
                <select
                  name="designFocus"
                  value={formData.designFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="Enterprise Design System & Token Architecture">Enterprise Design System & Token Architecture</option>
                  <option value="Generative AI & Agent Workspace Ergonomics">Generative AI & Agent Workspace Ergonomics</option>
                  <option value="B2B High-Density Telemetry & Analytics Dashboard">B2B High-Density Telemetry & Analytics Dashboard</option>
                  <option value="Complete Mobile App UX Redesign (iOS / Android)">Complete Mobile App UX Redesign (iOS / Android)</option>
                  <option value="WCAG 2.1 Accessibility Audit & Refactor">WCAG 2.1 Accessibility Audit & Refactor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Product Details / User Base</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Target user persona, primary pain points, and current design stack..."
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
                    <span>Confirm UX Consultation</span>
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

export default UIUXDesign;
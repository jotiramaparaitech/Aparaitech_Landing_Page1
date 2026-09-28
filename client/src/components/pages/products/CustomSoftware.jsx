// src/components/pages/products/CustomSoftware.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  Terminal,
  Database,
  CheckCircle2,
  ArrowUpRight,
  Lock,
  GitBranch,
  Server,
  Activity,
  Send,
  Calendar,
  X,
  FileSpreadsheet
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const CustomSoftware = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    architectureFocus: "Event-Driven Microservices",
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
        service: "Enterprise Custom Software",
        source: "Custom Software Product Page"
      });
      if (result.success) {
        toast.success("Consultation sprint booked! Details recorded and synced to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          architectureFocus: "Event-Driven Microservices",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune engineering pod will reach out within 2 hours.");
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
      code: "01 / DISTRIBUTED ARCHITECTURE",
      title: "Event-Driven Microservices",
      desc: "Architected with Apache Kafka, RabbitMQ, and CQRS patterns for decoupled service boundaries capable of handling 500,000+ operations/sec without lock contention.",
      icon: <GitBranch className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / HIGH CONCURRENCY",
      title: "Sharded Data & Caching",
      desc: "Optimized multi-tenant PostgreSQL clusters, Redis distributed caching, and vector indexing with sub-25ms response percentiles at p99.",
      icon: <Database className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / RESILIENCE ENGINEERING",
      title: "Zero Downtime Deployments",
      desc: "Canary routing, blue-green cutovers, and automated circuit breakers configured across Kubernetes clusters to deliver uninterrupted 99.99% availability.",
      icon: <Activity className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / SOVEREIGN VPC",
      title: "Air-Gapped & Private Cloud",
      desc: "Deployable within your dedicated AWS, GCP, Azure VPC or on-prem bare metal with strict zero data retention and end-to-end envelope encryption.",
      icon: <Server className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const stack = [
    { category: "Core Languages", tech: ["Go (Golang)", "Rust", "Node.js (TypeScript)", "Python"] },
    { category: "Data & Storage", tech: ["PostgreSQL", "Redis Enterprise", "ClickHouse", "MongoDB Atlas"] },
    { category: "Streaming & Queues", tech: ["Apache Kafka", "RabbitMQ", "AWS SQS / SNS", "NATS.io"] },
    { category: "Orchestration & Ops", tech: ["Kubernetes (EKS/GKE)", "Docker", "Terraform", "ArgoCD"] }
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
              CORE PRODUCTS // DISTRIBUTED SYSTEMS
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Enterprise Custom Software Engineering
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Tailor-engineered distributed software designed to replace fragile monoliths. Built by senior engineering pods stationed at our Hinjawadi Phase 2, Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              99.99% Uptime Guarantee
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              SOC 2 Type II & ISO 27001
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#00E5C9]" />
              Dedicated Pune Pods
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Architecture Sprint</span>
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

      {/* 2. ARCHITECTURAL CAPABILITY MATRIX */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] block mb-2">
              ENGINEERING RIGOR
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Architectural Pillars for Scale
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

      {/* 3. TECHNOLOGY STACK MATRIX */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              MODERN TECH RADAR
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Production-Vetted Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#141518] border border-[#22242A]">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-[#22242A]">
                  {item.category}
                </h4>
                <ul className="space-y-2.5">
                  {item.tech.map((t, tidx) => (
                    <li key={tidx} className="flex items-center gap-2 text-sm text-slate-200 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4FD53]"></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL-WORLD PRODUCTION ANCHOR */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-xl bg-[#141518] border border-[#22242A] p-8 lg:p-12 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-[0.2em] block mb-3">
                PROVEN IN PRODUCTION
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Powering Live Commercial Operating Systems
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-mono">
                Our custom engineering frameworks operate real systems in high-load production daily, including the CloudKitchen OS dispatch engine, ApnaStore B2B multi-store checkout, and ServiceHub automated technician field dispatch.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/customers/portfolio"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#D4FD53] hover:underline"
                >
                  <span>Explore Live Production Deployments</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPOINTMENT MODAL */}
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
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Engineering Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Schedule Custom Software Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              30-minute direct sprint with our Principal Architect. Data synchronizes live to our client appointment spreadsheet.
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
                  placeholder="e.g. Anand Deshmukh"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Architecture Focus</label>
                <select
                  name="architectureFocus"
                  value={formData.architectureFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="Event-Driven Microservices">Event-Driven Microservices</option>
                  <option value="High-Concurrency Database Sharding">High-Concurrency Database Sharding</option>
                  <option value="Legacy Monolith Modernization">Legacy Monolith Modernization</option>
                  <option value="Air-Gapped Sovereign Deployment">Air-Gapped Sovereign Deployment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Scope / Technical Notes</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline current tech stack, target volume, and deployment timeline..."
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
                    <span>Confirm Architecture Sprint</span>
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

export default CustomSoftware;
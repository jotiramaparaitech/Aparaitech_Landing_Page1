// src/components/pages/Customers/Portfolio.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Lock,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Activity,
  Globe
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    portfolioSystem: "All Live Production Systems",
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
        service: "Production Architecture Review",
        source: "Portfolio Page"
      });
      if (result.success) {
        toast.success("Architecture review booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          portfolioSystem: "All Live Production Systems",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune engineering pod will reach out shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Submission error. Please email direct to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const platforms = [
    {
      title: "CloudKitchen OS",
      category: "Enterprise Cloud",
      url: "https://cloudkitchen.aparaitech.org/",
      badge: "LIVE SAAS",
      desc: "Autonomous multi-brand cloud kitchen management, kitchen display system (KDS), and automated delivery aggregator dispatch operating in commercial kitchens.",
      stack: ["React", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
      metric: "Sub-15s Kitchen Dispatch"
    },
    {
      title: "AI Attendance & Workforce Platform",
      category: "AI & Vision",
      url: "https://attendance.aparaitech.org/",
      badge: "LIVE BIOMETRIC AI",
      desc: "Geofenced facial recognition check-in, automated shift scheduling, anti-spoofing liveness verification, and integrated payroll telemetry.",
      stack: ["Computer Vision", "TensorFlow", "React Native", "PostgreSQL"],
      metric: "99.8% Biometric Precision"
    },
    {
      title: "ApnaStore B2B & Retail Commerce",
      category: "Omnichannel Commerce",
      url: "https://apnastore.aparaitech.org/",
      badge: "LIVE COMMERCE",
      desc: "Next-generation wholesale and retail commerce engine with instantaneous inventory synchronization, WhatsApp ordering, and POS terminal integration.",
      stack: ["Next.js", "Redis", "Kafka", "PostgreSQL", "TailwindCSS"],
      metric: "100k+ SKU Scalability"
    },
    {
      title: "ServiceHub Field Operations",
      category: "Field Operations",
      url: "http://servicehub.aparaitech.org/",
      badge: "LIVE FIELD OPS",
      desc: "Intelligent field technician routing, SLA ticket escalation engine, offline signature capture, and customer dispatch portal.",
      stack: ["React", "Express", "MongoDB", "Leaflet Maps", "Docker"],
      metric: "99.9% Uptime SLA"
    },
    {
      title: "SVPM Alumni Network Portal",
      category: "Institutional",
      url: "http://svpmalumni.aparaitech.org/",
      badge: "LIVE COMMUNITY",
      desc: "Large-scale institutional alumni knowledge directory, structured mentorship matching, campaign management, and verified graduate networking.",
      stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS S3"],
      metric: "Thousands of Active Alumni"
    },
    {
      title: "Aparaitech LMS Tech Academy",
      category: "EdTech & Learning",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      badge: "LIVE LMS",
      desc: "Interactive technical learning suite with in-browser code sandboxes, automated MCQ evaluations, curriculum milestones, and skill verification.",
      stack: ["React", "TypeScript", "Node.js", "Monaco Editor", "TailwindCSS"],
      metric: "Instant Code Feedback"
    }
  ];

  const categories = ["All", "Enterprise Cloud", "AI & Vision", "Omnichannel Commerce", "Field Operations", "EdTech & Learning"];

  const filteredPlatforms = activeFilter === "All"
    ? platforms
    : platforms.filter((p) => p.category === activeFilter);

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
              PRODUCTION DEPLOYMENTS // REAL PLATFORMS
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Live Production Systems & Enterprise Portfolio
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            We don't deal in hypothetical slideware. Inspect real commercial operating systems engineered, deployed, and operated live 24/7 by Aparaitech Software.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              6 Live Production Platforms
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              Pune Hinjawadi CoE Operations
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Activity className="w-3.5 h-3.5 text-[#00E5C9]" />
              99.9% Production Availability
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Architecture Walkthrough</span>
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

      {/* 2. FILTER & PORTFOLIO GRID */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded text-xs font-mono transition-all ${
                  activeFilter === cat
                    ? "bg-[#D4FD53] text-[#0C0D0F] font-bold"
                    : "bg-[#141518] text-slate-400 border border-[#22242A] hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlatforms.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#10B981] flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                      {p.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{p.metric}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4FD53] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-mono mb-6">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s, sidx) => (
                      <span
                        key={sidx}
                        className="px-2 py-0.5 rounded bg-[#1C1C1E] border border-white/5 font-mono text-[11px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22242A]">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#D4FD53] hover:underline"
                  >
                    <span>Launch Live Platform</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-xl bg-[#141518] border border-[#22242A] p-8 shadow-2xl">
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
            <h3 className="text-xl font-bold text-white mb-2">Schedule Production Architecture Review</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Live code walkthrough and architecture breakdown of our production platforms with our Lead Architect.
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
                  placeholder="e.g. Ketan Shinde"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Target Production System</label>
                <select
                  name="portfolioSystem"
                  value={formData.portfolioSystem}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="All Live Production Systems">All Live Production Systems (Comprehensive Review)</option>
                  <option value="CloudKitchen OS (Multi-Brand Dispatch & KDS)">CloudKitchen OS (Multi-Brand Dispatch & KDS)</option>
                  <option value="Attendance AI (Biometric Face Recognition)">Attendance AI (Biometric Face Recognition)</option>
                  <option value="ApnaStore (Omnichannel Retail & Wholesale)">ApnaStore (Omnichannel Retail & Wholesale)</option>
                  <option value="ServiceHub (On-Demand Technician Dispatch)">ServiceHub (On-Demand Technician Dispatch)</option>
                  <option value="Aparaitech LMS (Interactive Code Sandbox)">Aparaitech LMS (Interactive Code Sandbox)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Architecture Objectives / Questions</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline scale goals, concurrency needs, or deployment inquiries..."
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
                    <span>Confirm Architecture Review</span>
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

export default Portfolio;
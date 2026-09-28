// src/components/pages/Company/AboutUs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Cpu,
  Shield,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Users,
  Award,
  Lock,
  ExternalLink,
  Briefcase,
  Sparkles,
  Calendar,
  X,
  FileSpreadsheet,
  Download
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Executive Architecture Briefing with Founder",
    message: "",
    nda: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      toast.error("Please provide your name, corporate email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      await saveAppointmentToSheet({
        ...bookingForm,
        source: "About Us - Founder Executive Briefing Modal",
      });
      toast.success("Executive briefing requested! Logged to leadership schedule sheet.");
      setModalOpen(false);
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Executive Architecture Briefing with Founder",
        message: "",
        nda: true,
      });
    } catch (err) {
      console.error(err);
      toast.error("Request saved locally. Executive office will reach out shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillars = [
    {
      title: "Senior Engineering Pods On-Site",
      detail: "Based at our Hinjawadi Phase 2, Pune Center of Excellence, our pods consist of senior AI researchers and distributed systems architects who work directly on your systems.",
      metric: "Hinjawadi CoE",
      icon: <Building2 className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "6 Production Platforms Live",
      detail: "We don't deal in hypothetical slideware. We build and operate high-scale production systems across retail, biometric attendance, cloud kitchens, and alumni networks.",
      metric: "6 Live Systems",
      icon: <Cpu className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "Zero Hallucination Guardrails",
      detail: "Our enterprise architectures utilize deterministic retrieval, structured verification pipelines, and hybrid semantic search so business outcomes remain reliable.",
      metric: "Deterministic",
      icon: <Shield className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "Direct AI Lab Collaboration",
      detail: "We test frontier models from OpenAI, Anthropic, and Google Cloud AI before public release, ensuring your organization stays ahead of market shifts.",
      metric: "Frontier Access",
      icon: <Zap className="w-5 h-5 text-[#D4FD53]" />,
    },
  ];

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-20 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#00E5C9 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#D4FD53]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53]">
              WHO WE ARE
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Architecting the AI-run enterprise from Pune to the world.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Aparaitech Software is an enterprise AI software engineering firm headquartered in Pune, India. We map operational bottlenecks, deploy autonomous multi-agent systems, and build intelligent platforms directly into how your teams work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4FD53]" />
              Gera Imperium, Hinjawadi Phase 2, Pune
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#00E5C9]" />
              ISO 27001 & 9001 Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Users className="w-3.5 h-3.5 text-[#10B981]" />
              Dedicated Pune Engineering Pods
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP & FOUNDER SPOTLIGHT */}
      <section className="py-24 border-b border-[#22242A] relative overflow-hidden bg-[#0e0f13]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5C9]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4FD53]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#00E5C9] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5C9]">
              EXECUTIVE LEADERSHIP & GOVERNANCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5C9]/30 to-[#D4FD53]/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl bg-[#141518] border border-[#22242A] overflow-hidden p-3 shadow-2xl">
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0C0D0F]">
                    <img
                      src="/founder.jpg"
                      alt="Jotiram Shinde - Founder & CEO, Aparaitech Software"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#141518]/90 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4FD53] font-bold">
                          FOUNDER & CEO
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-300">
                          <MapPin className="w-3 h-3 text-[#00E5C9]" /> Pune CoE
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        Jotiram Shinde
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Aparaitech Software Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Manifesto & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-[#D4FD53]" />
                Principal Systems Architect & Technology Leader
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                "We don't build speculative prototypes. We engineer resilient, sovereign AI systems that run real enterprises."
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Under the strategic direction of <span className="text-white font-semibold">Jotiram Shinde</span>, Aparaitech Software has evolved from a vision in Pune to an enterprise-grade AI powerhouse operating six live commercial SaaS platforms and serving clients globally.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                "Our guiding thesis is that enterprise AI must be deterministic, auditable, and sovereign. By pairing world-class frontier models with rigorous verification pipelines and private VPC isolation, our engineering pods in Hinjawadi give enterprises the confidence to run mission-critical workflows with zero hallucination risk."
              </p>

              {/* Founder Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#22242A]">
                <div className="p-4 rounded-lg bg-[#141518] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5C9]" />
                    <span>Hands-On Engineering</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Direct technical oversight on every enterprise client architecture and VPC deployment.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141518] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#D4FD53]" />
                    <span>Pune CoE Innovation</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Incubating next-generation multi-agent systems and real-time biometric vision from Hinjawadi Phase 2.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#00E5C9] px-6 text-sm font-bold text-[#0C0D0F] hover:brightness-110 transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Executive Briefing</span>
                </button>

                <a
                  href={GOOGLE_SHEET_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/20 bg-[#141518] px-5 text-xs font-mono text-slate-300 hover:text-white hover:border-[#00E5C9] transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#00E5C9]" />
                  <span>View Leadership Appointments Sheet</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILLARS GRID */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {p.icon}
                    <span className="font-mono text-xs text-[#D4FD53] bg-[#1C1C1E] px-2.5 py-1 rounded border border-white/10">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4FD53] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-mono">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROVEN PORTFOLIO DEPLOYMENTS */}
      <section className="py-20 bg-[#0C0D0F] border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold block mb-2">
                OUR PRODUCTION TRACK RECORD
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Real enterprise software operating at scale.
              </h2>
            </div>
            <Link
              to="/customers/portfolio"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4FD53] hover:underline"
            >
              <span>View All 6 Live Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141518] p-6 rounded-lg border border-[#22242A] hover:border-[#00E5C9]/50 transition-all">
              <h4 className="font-mono text-xs text-slate-400 uppercase">FOOD & HOSPITALITY</h4>
              <h3 className="text-xl font-bold text-white mt-1">Cloud Kitchen AI</h3>
              <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">
                Multi-brand kitchen operations platform coordinating preparation pipelines and order dispatch.
              </p>
              <a href="https://cloudkitchen.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#00E5C9]">
                cloudkitchen.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-[#141518] p-6 rounded-lg border border-[#22242A] hover:border-[#00E5C9]/50 transition-all">
              <h4 className="font-mono text-xs text-slate-400 uppercase">ENTERPRISE SAAS</h4>
              <h3 className="text-xl font-bold text-white mt-1">Attendance SaaS</h3>
              <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">
                Biometric edge face validation and corporate workforce time-tracking with automated payroll sync.
              </p>
              <a href="https://attendance.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#00E5C9]">
                attendance.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-[#141518] p-6 rounded-lg border border-[#22242A] hover:border-[#00E5C9]/50 transition-all">
              <h4 className="font-mono text-xs text-slate-400 uppercase">RETAIL ENGINE</h4>
              <h3 className="text-xl font-bold text-white mt-1">APNA Store</h3>
              <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">
                High-scale commercial e-commerce engine with semantic product catalog search and cart optimization.
              </p>
              <a href="https://apnastore.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#00E5C9]">
                apnastore.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 border-b border-[#22242A] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Partner with our AI engineering pod.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Visit our Center of Excellence at Hinjawadi Phase 2, Pune or connect directly with our founder and lead architects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all"
            >
              <span>Schedule Executive Architecture Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXECUTIVE BRIEFING MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#141518] border border-[#22242A] p-8 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <img
                src="/founder.jpg"
                alt="Jotiram Shinde"
                className="w-12 h-12 rounded-full object-cover object-top border border-[#00E5C9]"
              />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E5C9]">
                  EXECUTIVE BRIEFING INTAKE
                </span>
                <h3 className="text-lg font-bold text-white">
                  Connect with Jotiram Shinde & Pune Leads
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono mb-6">
              Recorded directly to our leadership management sheet. Executive officers connect with institutional queries within 24 hours.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3 py-2 text-white focus:border-[#00E5C9] focus:outline-none"
                  placeholder="e.g., Rajesh Kumar"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3 py-2 text-white focus:border-[#00E5C9] focus:outline-none"
                    placeholder="rajesh@enterprise.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3 py-2 text-white focus:border-[#00E5C9] focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Organization / Enterprise Name</label>
                <input
                  type="text"
                  value={bookingForm.company}
                  onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3 py-2 text-white focus:border-[#00E5C9] focus:outline-none"
                  placeholder="Acme Technologies Ltd."
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Operational Agenda / Challenge</label>
                <textarea
                  rows="3"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3 py-2 text-white focus:border-[#00E5C9] focus:outline-none"
                  placeholder="Describe your architecture requirements, data volume, or target rollout timeline..."
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="nda-about"
                  checked={bookingForm.nda}
                  onChange={(e) => setBookingForm({ ...bookingForm, nda: e.target.checked })}
                  className="rounded border-[#22242A] bg-[#0C0D0F] text-[#00E5C9] focus:ring-0"
                />
                <label htmlFor="nda-about" className="text-slate-400 text-[11px]">
                  Require mutual non-disclosure agreement (NDA) before briefing
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={exportAppointmentsToCSV}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-[11px]"
                >
                  <Download className="w-3.5 h-3.5 text-[#00E5C9]" />
                  <span>Download Records CSV</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded bg-[#00E5C9] px-5 py-2.5 font-bold text-[#0C0D0F] hover:brightness-110 disabled:opacity-50 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Dispatching..." : "Confirm Briefing Request"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;


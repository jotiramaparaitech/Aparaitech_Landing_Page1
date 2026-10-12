// src/components/pages/industries/Education.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Cpu,
  ShieldCheck,
  Zap,
  BookOpen,
  Users,
  ArrowUpRight,
  Lock,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Code2,
  Network
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institutionName: "",
    edtechFocus: "AI-Powered Adaptive Learning & Code Sandbox LMS",
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
        company: formData.institutionName,
        service: "EdTech & University AI Platforms",
        source: "Education Industry Page"
      });
      if (result.success) {
        toast.success("EdTech consultation sprint booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          institutionName: "",
          edtechFocus: "AI-Powered Adaptive Learning & Code Sandbox LMS",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune EdTech pod will reach out shortly.");
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
      code: "01 / LIVE LMS SUITE",
      title: "Interactive Code & MCQ Evaluation",
      desc: "Architected around our live platform (lms-full-stack-mcq7.vercel.app), offering real-time browser sandbox execution, automated test case evaluation, and instant performance telemetry.",
      icon: <Code2 className="w-5 h-5 text-[#34D399]" />
    },
    {
      code: "02 / INSTITUTIONAL KNOWLEDGE",
      title: "SVPM Alumni Knowledge Graph",
      desc: "Proven through our live SVPM Alumni Network (svpmalumni.aparaitech.org), connecting thousands of graduates, faculty, and research mentors through an intelligent relational directory.",
      icon: <Network className="w-5 h-5 text-[#34D399]" />
    },
    {
      code: "03 / ADAPTIVE LEARNING LOOPS",
      title: "Personalized Skill Gap Remediation",
      desc: "Machine learning algorithms that analyze continuous student submissions, dynamically adjusting exercise difficulty and generating custom remediation paths.",
      icon: <Cpu className="w-5 h-5 text-[#34D399]" />
    },
    {
      code: "04 / ENTERPRISE CERTIFICATIONS",
      title: "Verifiable Credential Ledger",
      desc: "Tamper-proof digital certificate generation with cryptographic verification badges, grade audit trails, and LinkedIn-ready skill verification endpoints.",
      icon: <GraduationCap className="w-5 h-5 text-[#34D399]" />
    }
  ];

  const platforms = [
    {
      name: "Aparaitech Learning Management Suite (LMS)",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      badge: "Live Production Platform",
      desc: "Full-stack MCQ testing, automated code compilation, curriculum tracking, and developer interview simulations."
    },
    {
      name: "SVPM Alumni Network Portal",
      url: "http://svpmalumni.aparaitech.org/",
      badge: "Live Production Network",
      desc: "Large-scale institutional alumni directory, mentorship matching, fundraising event campaigns, and career networking."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-[#1E293B] pt-24 pb-20">
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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#34D399]">
              ENTERPRISE INDUSTRIES // EDTECH & HIGHER EDUCATION
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
            EdTech, Adaptive Learning & Knowledge Graphs
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Automated code assessment, adaptive curriculum engines, and institutional alumni graphs engineered and operated live from our Hinjawadi, Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              2 Live Academic Platforms
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#34D399]" />
              Cryptographic Credentials
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Code2 className="w-3.5 h-3.5 text-[#00E5C9]" />
              In-Browser Code Sandboxes
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#2563EB] px-8 text-sm font-semibold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule EdTech Architecture Sprint</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-[#161F32] px-8 text-sm font-mono text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1E293B] transition-all"
            >
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-20 border-b border-slate-200 dark:border-[#1E293B]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-[#34D399] block mb-2">
              ACADEMIC CAPABILITIES
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Institutional Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#34D399]">{cap.code}</span>
                  <div className="p-2 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/5 group-hover:border-blue-500/30 transition-all">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LIVE PRODUCTION ANCHORS */}
      <section className="py-20 border-b border-slate-200 dark:border-[#1E293B] bg-[#0D1322]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              PRODUCTION DEPLOYMENTS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Operating Platforms Engineered by Aparaitech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((p, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-[#00E5C9]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#34D399] uppercase tracking-wider block mb-2">{p.badge}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-mono mb-6">
                    {p.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-emerald-600 dark:text-[#34D399] hover:underline"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-mono text-xs text-[#34D399] uppercase">Hinjawadi EdTech Engineering Pod</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Book EdTech Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Discuss coding sandboxes, university alumni portals, and automated assessment pipelines with our engineering leads.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Prof. Rajesh Deshpande"
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@university.edu"
                    className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1">Institution Focus</label>
                <select
                  name="edtechFocus"
                  value={formData.edtechFocus}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="AI-Powered Adaptive Learning & Code Sandbox LMS">AI-Powered Adaptive Learning & Code Sandbox LMS</option>
                  <option value="Institutional Alumni Network & Knowledge Graph">Institutional Alumni Network & Knowledge Graph</option>
                  <option value="Automated MCQ & Coding Examination Sandbox">Automated MCQ & Coding Examination Sandbox</option>
                  <option value="Corporate Training & Skill Verification Ledger">Corporate Training & Skill Verification Ledger</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-300 mb-1">Students / Enrollees & System Needs</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Student headcount, existing SIS/LMS integrations (Canvas, Moodle), and launch timeline..."
                  className="w-full bg-slate-100 dark:bg-[#161F32] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
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
                    <span>Confirm EdTech Sprint</span>
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

export default Education;
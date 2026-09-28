// src/components/pages/Customers/SuccessStories.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ShieldCheck,
  Zap,
  TrendingUp,
  Activity,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Lock,
  Server,
  ArrowUpRight,
  Layers,
  Sparkles
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Enterprise Scalability Audit",
    timeline: "Immediate (1-2 weeks)",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, corporate email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: "Success Story Strategy Session",
        source: "Success Stories Page"
      });
      if (result.success) {
        toast.success("Consultation booked! Logged to central executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "Enterprise Scalability Audit",
          timeline: "Immediate (1-2 weeks)",
          notes: ""
        });
      } else {
        toast.error("Booking recorded locally. Engineering leadership will contact you shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please reach out to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stories = [
    {
      title: "CloudKitchen OS: Multi-Brand KDS & Automated Dispatch",
      client: "Commercial Cloud Kitchens",
      category: "Enterprise SaaS",
      badge: "LIVE IN PRODUCTION",
      url: "https://cloudkitchen.aparaitech.org/",
      metric: "78% Faster Ticket Cycle",
      metricSub: "Zero dropped kitchen tickets during peak rushes",
      summary: "Consolidated orders across third-party delivery channels into a synchronized Kitchen Display System (KDS) with low-latency WebSockets and Redis queuing.",
      techStack: ["React", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
      highlights: [
        "Concurrent order dispatch with sub-15s kitchen station routing",
        "Automated inventory decrement with low-stock alerts",
        "Dual-screen Kitchen Display System with acoustic and visual timers",
        "Unified billing reconciliation eliminating revenue leakage"
      ]
    },
    {
      title: "Attendance AI: Edge Biometric Facial Recognition",
      client: "Distributed Workforce Enterprise",
      category: "AI & Vision",
      badge: "LIVE BIOMETRIC AI",
      url: "https://attendance.aparaitech.org/",
      metric: "99.8% Recognition Accuracy",
      metricSub: "<400ms edge inference with anti-spoof liveness",
      summary: "Engineered on-device facial recognition check-in kiosks and mobile app with active infrared anti-spoofing and geofenced location verification.",
      techStack: ["Computer Vision", "TensorFlow", "React Native", "PostgreSQL"],
      highlights: [
        "Eliminated buddy-punching across 5,000+ daily check-ins",
        "Sub-second verification even under variable industrial lighting",
        "Automated shift differential and overtime calculation engine",
        "Instant compliance reports for labor audits and statutory filings"
      ]
    },
    {
      title: "ApnaStore: High-Throughput Omnichannel Commerce",
      client: "Wholesale & Retail Network",
      category: "Omnichannel",
      badge: "LIVE COMMERCE",
      url: "https://apnastore.aparaitech.org/",
      metric: "100k+ SKU Scalability",
      metricSub: "Sub-50ms catalog render across 12 branch locations",
      summary: "Modernized fragmented offline wholesale warehouses into an omnichannel catalog engine with real-time stock sync, WhatsApp checkout, and POS hardware bridges.",
      techStack: ["Next.js", "Redis", "Kafka", "PostgreSQL", "TailwindCSS"],
      highlights: [
        "Zero inventory discrepancies between warehouse and retail POS",
        "Sub-50ms catalog search powered by in-memory indexing",
        "Direct-to-WhatsApp order dispatch and automated payment confirmations",
        "Multi-tier B2B tiered volume pricing algorithms"
      ]
    },
    {
      title: "ServiceHub: Field Operations Dispatch & SLA Governance",
      client: "Facility Management Corp",
      category: "Field Operations",
      badge: "LIVE FIELD OPS",
      url: "http://servicehub.aparaitech.org/",
      metric: "42% Faster SLA Response",
      metricSub: "Sub-30min critical emergency site arrival",
      summary: "Built an intelligent field technician dispatch matrix with dynamic geolocation routing, offline signature capture, and customer status tracking.",
      techStack: ["React", "Express", "MongoDB", "Leaflet Maps", "Docker"],
      highlights: [
        "Dynamic proximity routing cutting travel time by 34%",
        "Offline-first mobile client with automated background sync",
        "Automated customer SMS arrival alerts with live technician tracking",
        "Comprehensive SLA breach warning dashboards for operations managers"
      ]
    },
    {
      title: "SVPM Alumni Network: High-Scale Graduate Portal",
      client: "SVPM Educational Institutes",
      category: "Enterprise SaaS",
      badge: "LIVE COMMUNITY",
      url: "http://svpmalumni.aparaitech.org/",
      metric: "15,000+ Active Members",
      metricSub: "Verified alumni directory & mentorship pipeline",
      summary: "Architected a secure institutional portal linking alumni across global corporations, featuring verified profiles, donation drives, and career matchmaking.",
      techStack: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS S3"],
      highlights: [
        "Institutional single sign-on with role-based graduate verification",
        "Mentorship matching engine pairing seniors with verified alumni leaders",
        "Secure end-to-end fundraising campaigns with automated tax receipts",
        "Privacy-preserving direct messaging and industry chapter forums"
      ]
    },
    {
      title: "Aparaitech LMS: Cloud-Based Code Academy",
      client: "Technical Training Center of Excellence",
      category: "AI & Vision",
      badge: "LIVE LMS PLATFORM",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      metric: "Instant Code Compilation",
      metricSub: "Sandboxed browser runtime for 100+ concurrent students",
      summary: "Engineered an interactive engineering training platform equipped with browser sandboxes, automated syntax evaluation, and structured cohort tracking.",
      techStack: ["React", "TypeScript", "Node.js", "Monaco Editor", "TailwindCSS"],
      highlights: [
        "Monaco code editor with real-time linting and automated test harnesses",
        "Algorithmic MCQ auto-grading with randomized question pools",
        "Granular instructor telemetry tracking student drop-off bottlenecks",
        "Automated cryptographic certificate generation upon course completion"
      ]
    }
  ];

  const categories = ["All", "Enterprise SaaS", "AI & Vision", "Omnichannel", "Field Operations"];

  const filteredStories = activeFilter === "All"
    ? stories
    : stories.filter((s) => s.category === activeFilter);

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
              CUSTOMER SUCCESS // VERIFIED ENGINEERING OUTCOMES
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Real Systems. High Concurrency. Documented ROI.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Aparaitech Software designs, builds, and maintains mission-critical cloud backends, biometric edge systems, and high-volume commerce platforms. Explore verified outcomes from our Hinjawadi Phase 2 Pune engineering labs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              6 Live Production Platforms
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4FD53]" />
              Enterprise SLA Guarantee
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Activity className="w-3.5 h-3.5 text-[#00E5C9]" />
              99.98% Monitored Uptime
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Architecture Review</span>
            </button>
            <Link
              to="/customers/case-studies"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4FD53]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="border-b border-[#22242A] bg-[#141518]/70 py-12">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4 border-l-2 border-[#D4FD53]">
              <div className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight">99.98%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Production Uptime SLA</div>
            </div>
            <div className="p-4 border-l-2 border-[#00E5C9]">
              <div className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight">&lt;400ms</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Biometric Edge Latency</div>
            </div>
            <div className="p-4 border-l-2 border-[#D4FD53]">
              <div className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight">100k+</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Catalog SKUs Synced</div>
            </div>
            <div className="p-4 border-l-2 border-[#00E5C9]">
              <div className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight">5,000+</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Daily Automated Check-ins</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES SECTION */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? "bg-[#D4FD53] text-[#0C0D0F] font-bold shadow-md shadow-[#D4FD53]/20"
                  : "bg-[#141518] text-slate-300 border border-[#22242A] hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-8 hover:border-[#D4FD53]/50 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    {story.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white group-hover:text-[#D4FD53] transition-colors leading-snug">
                  {story.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  Client Deployment: <span className="text-slate-200">{story.client}</span>
                </p>

                {/* Primary Metric Pill */}
                <div className="mt-6 rounded-lg bg-[#0C0D0F] border border-[#22242A] p-4">
                  <div className="flex items-center gap-2 text-[#00E5C9]">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-lg font-mono font-bold">{story.metric}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{story.metricSub}</p>
                </div>

                <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                  {story.summary}
                </p>

                {/* Key Architectural Highlights */}
                <div className="mt-6 space-y-2 border-t border-[#22242A] pt-4">
                  {story.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4FD53] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {story.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#1C1C1E] border border-white/5 font-mono text-[11px] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4FD53] hover:underline"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXECUTIVE CTA BANNER */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#00E5C9] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PUNE HINJAWADI COE CONSULTING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Engineer Similar Production Results?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base mb-8">
            Consult directly with Aparaitech senior software architects. We evaluate your current bottlenecks, architect a fault-tolerant solution, and provide a transparent delivery roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>
            <a
              href={GOOGLE_SHEET_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>View Executive Schedule Sheet</span>
              <ExternalLink className="w-4 h-4 text-[#D4FD53]" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#22242A] bg-[#141518] p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Engineering Strategy Consultation</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Schedule Architecture Consultation
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Details are recorded directly to our engineering management sheet for immediate follow-up by Pune leadership.
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
                  placeholder="e.g., Rajesh Sharma"
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
                    placeholder="name@company.com"
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
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Focus Area</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="Enterprise Scalability Audit">Enterprise Scalability Audit</option>
                    <option value="Biometric AI & Computer Vision">Biometric AI & Computer Vision</option>
                    <option value="CloudKitchen / POS Automation">CloudKitchen / POS Automation</option>
                    <option value="Omnichannel Commerce Engine">Omnichannel Commerce Engine</option>
                    <option value="Custom Microservices Backend">Custom Microservices Backend</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Technical Context / Requirements</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline current infrastructure challenges, throughput goals, or desired rollout timelines..."
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
                  <span>{isSubmitting ? "Syncing to Schedule Sheet..." : "Confirm & Book Strategy Session"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
// src/components/pages/Learning/Webinars.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Video,
  Play,
  User,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Send,
  X,
  Radio,
  Layers,
  ShieldCheck
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { upcomingWebinarData, pastWebinarsData } from "./webinarsData";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const Webinars = () => {
  const [registered, setRegistered] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sessionTopic: upcomingWebinarData.title || "Enterprise Generative AI & Autonomous Agents",
    notes: ""
  });

  const webinar = upcomingWebinarData;

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
        service: "Technical Webinar Registration",
        source: "Webinars Page"
      });
      if (result.success) {
        toast.success("Spot reserved! Recorded to executive attendee sheet.");
        setRegistered(true);
        setIsRegisterModalOpen(false);
      } else {
        toast.error("Saved locally. You can join directly using the meeting link.");
        setRegistered(true);
        setIsRegisterModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please join directly via Google Meet link.");
      setRegistered(true);
      setIsRegisterModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const aparaitechPastWebinars = [
    {
      id: "web-1",
      title: "Real-Time KDS Architecture with Node.js & Redis Streams",
      speaker: "Aparaitech Principal Architect",
      date: "Aug 24, 2024",
      duration: "55 min",
      views: "1.4k views",
      category: "Distributed Systems",
      desc: "Deep dive into sub-15s kitchen order routing, state machine transitions, and offline WebSocket reconnection policies."
    },
    {
      id: "web-2",
      title: "On-Device Biometric Face Recognition with TensorFlow Lite",
      speaker: "Aparaitech Computer Vision Lead",
      date: "Sep 12, 2024",
      duration: "60 min",
      views: "2.1k views",
      category: "Computer Vision",
      desc: "Architectural blueprint for running MobileNetV3 face feature extraction directly on edge Android kiosks with anti-spoof liveness."
    },
    {
      id: "web-3",
      title: "100k+ SKU High-Concurrency Retail Catalog Optimization",
      speaker: "Aparaitech Cloud Operations Lead",
      date: "Oct 05, 2024",
      duration: "45 min",
      views: "1.8k views",
      category: "Omnichannel Commerce",
      desc: "Strategies for zero inventory drift between retail POS hardware and wholesale catalog backends using Kafka and Redis."
    }
  ];

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

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
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-6">
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>LIVE ENGINEERING BROADCASTS // PUNE COE</span>
            </div>

            <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight">
              Aparaitech Technical Webinars
            </h1>

            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Direct masterclasses from the engineering teams running mission-critical backends, biometric computer vision, and enterprise agentic systems.
            </p>
          </div>

          {/* FEATURED WEBINAR CARD */}
          <div className="mt-14 rounded-2xl border border-[#22242A] bg-[#141518] overflow-hidden shadow-2xl relative">
            <div className="grid md:grid-cols-12 gap-0">
              {/* Left / Info Side */}
              <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-950/60 border border-red-800/50 font-mono text-xs text-red-400">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                      UPCOMING LIVE MASTERCLASS
                    </span>
                    <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
                      {webinar.category || "Enterprise AI & Architecture"}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    {webinar.title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {webinar.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                      "Agentic LLM Graphs",
                      "Sub-200ms RAG Latency",
                      "Live Architecture Code",
                      "Interactive Q&A Session"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FD53] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4FD53]" />
                      60 Minutes Deep Dive
                    </span>
                    <span>•</span>
                    <span className="text-[#00E5C9]">Live on Google Meet</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {!registered ? (
                      <button
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="inline-flex h-[46px] items-center gap-2 rounded bg-[#D4FD53] px-6 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105 transition-all shadow-md shadow-[#D4FD53]/20"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Reserve Your Spot</span>
                      </button>
                    ) : (
                      <a
                        href={webinar.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[46px] items-center gap-2 rounded bg-emerald-500 px-6 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105 transition-all"
                      >
                        <Video className="w-4 h-4" />
                        <span>Join Meeting Room Now</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right / Host Details */}
              <div className="md:col-span-4 bg-[#0C0D0F] p-8 md:p-12 border-t md:border-t-0 md:border-l border-[#22242A] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4">
                    SESSION HOST & LEAD
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center font-mono font-bold text-2xl text-[#D4FD53] mb-4">
                    {webinar.speaker ? webinar.speaker.charAt(0) : "A"}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{webinar.speaker}</h3>
                  <p className="text-xs text-[#00E5C9] font-mono mb-4">{webinar.role}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineering leads from Aparaitech Software's Hinjawadi Phase 2 Pune Center of Excellence.
                  </p>
                </div>

                <div className="mt-8 rounded-lg bg-[#141518] border border-[#22242A] p-4 text-center">
                  <div className="font-mono text-[11px] text-slate-400 uppercase">Interactive Cohort</div>
                  <div className="font-mono text-sm font-bold text-[#D4FD53] mt-1">Limited to 100 Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ON-DEMAND ARCHIVES */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#D4FD53] mb-1">
              RECORDED TECHNICAL ARCHIVES
            </div>
            <h2 className="text-3xl font-bold text-white">On-Demand Engineering Library</h2>
          </div>
          <a
            href="mailto:info@ai.aparaitech.org?subject=Webinar%20Archive%20Access"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5C9] hover:underline"
          >
            <span>Request Full Archive Transcripts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aparaitechPastWebinars.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-7 hover:border-[#D4FD53]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] text-[#00E5C9] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{item.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#D4FD53] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#22242A] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">{item.speaker}</div>
                  <div className="text-[10px] font-mono text-slate-500">{item.date} • {item.views}</div>
                </div>

                <a
                  href={`mailto:info@ai.aparaitech.org?subject=Access%20Recording:%20${encodeURIComponent(item.title)}`}
                  className="w-8 h-8 rounded-lg bg-[#0C0D0F] border border-[#22242A] flex items-center justify-center text-slate-400 group-hover:text-[#D4FD53] group-hover:border-[#D4FD53]/40 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REGISTRATION MODAL */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#22242A] bg-[#141518] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Webinar Seat Reservation</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Reserve Your Live Masterclass Spot
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Details are recorded to our executive attendee sheet and a calendar invite with the Google Meet link will be confirmed.
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
                  placeholder="e.g., Amit Kulkarni"
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
                    placeholder="amit@company.com"
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

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Company / College / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., Tech Enterprise"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Questions for the Speaker / Specific Focus</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="What architecture or deployment challenge would you like addressed during live Q&A?"
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
                  <span>{isSubmitting ? "Syncing Registration..." : "Confirm Masterclass Registration"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinars;

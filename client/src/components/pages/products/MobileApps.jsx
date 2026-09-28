// src/components/pages/products/MobileApps.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Lock,
  Layers,
  Activity,
  Send,
  Calendar,
  X,
  Radio,
  WifiOff,
  Sparkles
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const MobileApps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    platformFocus: "iOS & Android (React Native / Flutter)",
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
        service: "Enterprise Mobile App Engineering",
        source: "Mobile Apps Product Page"
      });
      if (result.success) {
        toast.success("Mobile consultation sprint booked! Details synced to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          platformFocus: "iOS & Android (React Native / Flutter)",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune mobile pod will reach out shortly.");
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
      code: "01 / NATIVE PERFORMANCE",
      title: "SwiftUI & Jetpack Compose",
      desc: "Pixel-perfect native user interfaces engineered with modern Swift and Kotlin, achieving guaranteed 60fps and 120fps ProMotion animations under heavy compute loads.",
      icon: <Smartphone className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / CROSS-PLATFORM SPEED",
      title: "React Native & Flutter",
      desc: "Single codebase, dual native performance. Architected with custom C++ JSI bindings and skia renderers to eliminate bridge latency across high-frequency screens.",
      icon: <Layers className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / EDGE AI ON-DEVICE",
      title: "CoreML & TensorFlow Lite",
      desc: "Run neural models on-device without cloud round-trips. Powers real-time facial biometric check-in, document OCR scanning, and anomaly detection.",
      icon: <Cpu className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / OFFLINE-FIRST RESILIENCE",
      title: "SQLite & Background Sync",
      desc: "Robust local-first persistence engines. Seamlessly operates in zero-connectivity environments with automated conflict-free differential synchronization upon reconnection.",
      icon: <WifiOff className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const platforms = [
    {
      name: "Native iOS Suite",
      badge: "Apple Ecosystem",
      tech: "Swift 5.9, SwiftUI, CoreML, Metal",
      desc: "Engineered specifically for enterprise fleets utilizing Apple Vision Pro, iPhone, and iPadOS with Apple Enterprise Developer provisioning."
    },
    {
      name: "Native Android Suite",
      badge: "Google Ecosystem",
      tech: "Kotlin, Jetpack Compose, Coroutines, TFLite",
      desc: "Hardened for enterprise Android tablets, ruggedized field hardware, and multi-OEM compatibility with strict memory profiling."
    },
    {
      name: "Unified Cross-Platform",
      badge: "Single Codebase",
      tech: "React Native (New Architecture) / Flutter",
      desc: "Ideal for consumer and employee applications requiring synchronized feature releases across iOS and Android with rapid sprint cycles."
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
              CORE PRODUCTS // NATIVE & HYBRID MOBILE
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Enterprise Mobile Engineering & Edge AI
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            High-performance iOS, Android, and cross-platform mobile systems. Built for offline resilience, biometric security, and on-device CoreML intelligence by our Pune engineering center.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Sub-100ms On-Device Inference
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              Biometric Hardware KeyStore
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Radio className="w-3.5 h-3.5 text-[#00E5C9]" />
              Offline-First SQLite Engine
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Mobile Architecture Review</span>
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
              MOBILE CORE ARCHITECTURE
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Engineered for Field-Grade Reliability
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

      {/* 3. PLATFORM ARCHITECTURE TIERS */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              TARGET PLATFORMS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Specialized Stacks for Every Deployment Target
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#00E5C9]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">{p.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-xs text-[#D4FD53] font-mono mb-4">{p.tech}</p>
                  <p className="text-sm text-slate-400 leading-relaxed font-mono">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL SYSTEMS ANCHOR */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-xl bg-[#141518] border border-[#22242A] p-8 lg:p-12 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-[0.2em] block mb-3">
                FIELD VERIFIED
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Powering Live Attendance & Field Workforce Operations
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-mono">
                Our mobile frameworks power Aparaitech's live workforce systems: Attendance AI (biometric face detection with geofenced check-in) and ServiceHub (real-time technician task dispatch with offline signature capture).
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://attendance.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#D4FD53] hover:underline"
                >
                  <span>Inspect Attendance AI Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODAL */}
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
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Mobile Engineering Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Book Mobile Architecture Consultation</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Discuss target platforms, offline sync requirements, and edge AI feasibility with our mobile leads.
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
                  placeholder="e.g. Priyadarshini Patil"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Platform Focus</label>
                <select
                  name="platformFocus"
                  value={formData.platformFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="iOS & Android (React Native / Flutter)">iOS & Android (React Native / Flutter)</option>
                  <option value="Pure Native Swift (iOS)">Pure Native Swift (iOS)</option>
                  <option value="Pure Native Kotlin (Android)">Pure Native Kotlin (Android)</option>
                  <option value="On-Device Edge AI / Computer Vision">On-Device Edge AI / Computer Vision</option>
                  <option value="Field Ops & Offline Sync Engine">Field Ops & Offline Sync Engine</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">App Requirements / Field Spec</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline hardware requirements, security standards, and launch goals..."
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
                    <span>Confirm Consultation Sprint</span>
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

export default MobileApps;
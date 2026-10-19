// src/components/pages/industries/Manufacturing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ArrowUpRight,
  Lock,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Eye,
  Radio
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Manufacturing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plantName: "",
    industryFocus: "Edge Computer Vision & Automated Optical Inspection (AOI)",
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
        company: formData.plantName,
        service: "Industry 4.0 & Industrial AI",
        source: "Manufacturing Industry Page"
      });
      if (result.success) {
        toast.success("Manufacturing consultation sprint booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          plantName: "",
          industryFocus: "Edge Computer Vision & Automated Optical Inspection (AOI)",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune industrial AI pod will reach out shortly.");
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
      code: "01 / COMPUTER VISION AT THE EDGE",
      title: "Automated Optical Inspection (AOI)",
      desc: "Sub-35ms defect classification and surface anomaly detection running on edge accelerators (NVIDIA Jetson, Edge TPU) along high-speed conveyor lines.",
      icon: <Eye className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / PREDICTIVE MAINTENANCE TELEMETRY",
      title: "Vibration & Acoustic Anomaly Detection",
      desc: "Continuous timeseries telemetry analyzing bearing wear, motor cavitation, and thermal shifts to predict Mean Time Between Failures (MTBF) weeks in advance.",
      icon: <Activity className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / SCADA & PLC INTEGRATION",
      title: "OPC-UA & Industrial MQTT Bridges",
      desc: "Zero-latency protocol adapters mapping legacy Siemens, Allen-Bradley, and Mitsubishi PLC registers directly into Kafka timeseries pipelines.",
      icon: <Radio className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / FACTORY DIGITAL TWIN",
      title: "Real-Time Assembly Simulation",
      desc: "Live 3D telemetry reflecting line bottlenecks, Overall Equipment Effectiveness (OEE) metrics, and autonomous shift scheduling recommendations.",
      icon: <Factory className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const specs = [
    { label: "Edge Inference Latency", value: "< 35ms per image frame at 4K resolution" },
    { label: "Hardware Support", value: "NVIDIA Jetson AGX / Orin, Google Coral, x86 IPCs" },
    { label: "Industrial Protocols", value: "OPC-UA, MQTT Sparkplug B, Modbus TCP, PROFINET" },
    { label: "Operating Environment", value: "Air-gapped factory floor deployment with local inference" }
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
              ENTERPRISE INDUSTRIES // INDUSTRY 4.0 & INDUSTRIAL AI
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Smart Manufacturing, Edge Computer Vision & IIoT
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Sub-50ms edge defect inspection, predictive asset maintenance, and SCADA-to-Cloud telemetry bridges engineered by our Pune Industrial AI engineering team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              99.98% Defect Recall Rate
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              Air-Gapped Factory Deployment
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#00E5C9]" />
              OPC-UA & MQTT Native
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Factory AI Sprint</span>
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
              INDUSTRIAL RIGOR
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Factory Edge AI Capabilities
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

      {/* 3. HARDWARE & PROTOCOLS */}
      {/* HARDWARE & PROTOCOLS */}

      <section className="border-b border-slate-200 bg-sky-50/60 py-20 transition-colors duration-300 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          {/* Section Heading */}

          <div className="mb-12">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              HARDWARE &amp; PROTOCOLS
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Industrial Specifications
            </h2>
          </div>

          {/* Specifications Cards */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {specs.map((s, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 dark:border-slate-700/70 dark:bg-[#111827] dark:hover:border-sky-400/40 dark:hover:shadow-sky-950/20"
              >
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-sky-700 transition-colors group-hover:text-sky-800 dark:text-sky-300 dark:group-hover:text-sky-200">
                  {s.label}
                </h4>

                <p className="font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {s.value}
                </p>

                <div className="mt-5 h-px w-full bg-slate-100 transition-colors group-hover:bg-sky-200 dark:bg-slate-800 dark:group-hover:bg-sky-400/30" />
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
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Industrial AI Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Book Factory AI Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Review plant floor PLC hardware, vision inspection requirements, and edge computing nodes with our Industrial Lead.
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
                  placeholder="e.g. Sanjay Ghorpade"
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
                    placeholder="name@manufacturing.com"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Industrial Focus</label>
                <select
                  name="industryFocus"
                  value={formData.industryFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="Edge Computer Vision & Automated Optical Inspection (AOI)">Edge Computer Vision & Automated Optical Inspection (AOI)</option>
                  <option value="Predictive Maintenance & Vibration Anomaly Telemetry">Predictive Maintenance & Vibration Anomaly Telemetry</option>
                  <option value="SCADA / PLC / OPC-UA to Cloud Telemetry Bridge">SCADA / PLC / OPC-UA to Cloud Telemetry Bridge</option>
                  <option value="Factory Floor Digital Twin & OEE Dashboard">Factory Floor Digital Twin & OEE Dashboard</option>
                  <option value="Autonomous AGV / Warehouse Mobile Robotics Navigation">Autonomous AGV / Warehouse Mobile Robotics Navigation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Plant Details & Hardware Spec</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Number of production lines, PLC brands (Siemens, Rockwell), and inspection criteria..."
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
                    <span>Confirm Industrial Sprint</span>
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

export default Manufacturing;
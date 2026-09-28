// src/components/pages/industries/Healthcare.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ShieldCheck,
  Lock,
  Cpu,
  Database,
  ArrowUpRight,
  Zap,
  Calendar,
  X,
  Send,
  CheckCircle2,
  FileText,
  HeartPulse
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Healthcare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    complianceFocus: "HIPAA & FHIR v4 Compliant Clinical RAG",
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
        company: formData.organization,
        service: "Healthcare AI & Clinical Systems",
        source: "Healthcare Industry Page"
      });
      if (result.success) {
        toast.success("Healthcare consultation sprint booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          complianceFocus: "HIPAA & FHIR v4 Compliant Clinical RAG",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune healthcare pod will reach out shortly.");
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
      code: "01 / CLINICAL RAG",
      title: "Deterministic EHR & Chart Retrieval",
      desc: "Guaranteed zero-hallucination semantic search across Electronic Health Records, clinical documentation, and ICD-10 / SNOMED CT ontologies with citation tracking.",
      icon: <FileText className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / PHI DATA SOVEREIGNTY",
      title: "HIPAA & SOC 2 Hardware Vaults",
      desc: "End-to-end envelope encryption for Protected Health Information (PHI). Real-time de-identification, cryptographic access logging, and air-gapped on-premise deployments.",
      icon: <Lock className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / INTEROPERABILITY",
      title: "HL7 FHIR v4 & DICOM Integrations",
      desc: "Pre-built connectors for Epic, Cerner, and legacy hospital systems. Real-time patient data pipelines conforming to ONC Cures Act standards.",
      icon: <Database className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / EDGE VITALS TELEMETRY",
      title: "Real-Time Patient Monitoring AI",
      desc: "Sub-second edge anomaly detection for ICU vitals, bedside IoT hardware, and cardiac telemetry alerts operating directly within hospital intranet perimeters.",
      icon: <HeartPulse className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const standards = [
    { label: "Compliance Benchmark", value: "HIPAA, HITECH & ISO 27799 certified architectures" },
    { label: "Data Standards", value: "HL7 FHIR Release 4, DICOM 3.0, SNOMED-CT, ICD-10" },
    { label: "Model Sovereignty", value: "Zero Data Retention (ZDR) air-gapped private LLM endpoints" },
    { label: "Availability SLA", value: "99.99% high-availability failover across hospital clusters" }
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
              ENTERPRISE INDUSTRIES // HEALTHCARE & MEDTECH
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Healthcare & Life Sciences AI Engineering
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            HIPAA-compliant clinical RAG architectures, FHIR interoperability pipelines, and edge diagnostic telemetry engineered by our Hinjawadi, Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              HIPAA & HITECH Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              Zero PHI Retention Guarantee
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#00E5C9]" />
              HL7 FHIR v4 Native
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Healthcare Architecture Sprint</span>
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
              MEDTECH ENGINEERING
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Sovereign Clinical Capabilities
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

      {/* 3. TECHNICAL STANDARDS */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              HEALTHCARE STANDARDS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Data Privacy & Clinical Specifications
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
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Healthcare Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Schedule Healthcare Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Direct technical session with our Healthcare Systems Architect on HIPAA, FHIR, and hospital VPC deployments.
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
                  placeholder="e.g. Dr. Vijay Sharma"
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
                    placeholder="name@hospital.org"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">Healthcare Focus</label>
                <select
                  name="complianceFocus"
                  value={formData.complianceFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="HIPAA & FHIR v4 Compliant Clinical RAG">HIPAA & FHIR v4 Compliant Clinical RAG</option>
                  <option value="Hospital EHR / EMR Interoperability Bridge">Hospital EHR / EMR Interoperability Bridge</option>
                  <option value="Medical Imaging & DICOM AI Inference">Medical Imaging & DICOM AI Inference</option>
                  <option value="Bedside ICU Vitals Telemetry Anomaly Detection">Bedside ICU Vitals Telemetry Anomaly Detection</option>
                  <option value="Air-Gapped Hospital On-Premise LLM Pod">Air-Gapped Hospital On-Premise LLM Pod</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Hospital / Clinic System Details</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Current EHR system, patient records volume, and compliance requirements..."
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

export default Healthcare;
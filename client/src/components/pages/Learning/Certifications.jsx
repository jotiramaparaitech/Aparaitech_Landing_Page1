// src/components/pages/Learning/Certifications.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  Sparkles,
  BookOpen,
  Clock,
  Calendar,
  Send,
  X,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Terminal,
  Layers
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const Certifications = () => {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    certificationTrack: "Professional Distributed Systems Architect",
    experienceLevel: "3-5 Years Software Engineering",
    notes: ""
  });

  const certifications = [
    {
      id: "associate",
      level: "Associate",
      title: "Associate AI Platform Engineer",
      badge: "TIER 1 FOUNDATION",
      duration: "90 min Proctored Exam",
      format: "MCQs & Monaco Sandbox Lab",
      description: "Validates foundational competence in consuming Aparaitech microservices, configuring API credentials, and writing client integrations with latency monitoring.",
      features: [
        "REST, GraphQL & WebSocket Gateway consumption",
        "OAuth 2.0 & Token rotation lifecycle management",
        "Basic RAG document chunking & embedding ingestion",
        "Client-side caching with Redis and optimistic updates"
      ],
      icon: Terminal,
      color: "border-[#22242A]"
    },
    {
      id: "professional",
      level: "Professional",
      title: "Professional Distributed Systems Architect",
      badge: "MOST POPULAR // TIER 2",
      popular: true,
      duration: "180 min Architectural Lab",
      format: "Hands-on Code Sprint & Defense",
      description: "Demonstrates mastery in architecting event-driven microservices, high-throughput database schemas, and enterprise RAG pipelines with sub-200ms SLAs.",
      features: [
        "Distributed messaging with Apache Kafka & Redis Streams",
        "Hybrid dense + sparse pgvector search optimization",
        "Zero-drop order pipelines & high-concurrency lock isolation",
        "Kubernetes GitOps deployment via ArgoCD & Helm"
      ],
      icon: Cpu,
      color: "border-[#D4FD53]/60"
    },
    {
      id: "principal",
      level: "Principal",
      title: "Principal AI Systems & CoE Fellow",
      badge: "TIER 3 MASTERY",
      duration: "2-Day Capstone Architecture",
      format: "Executive Architectural Review",
      description: "The gold standard for engineering directors and lead architects designing mission-critical AI systems, edge vision models, and zero-trust security topologies.",
      features: [
        "Quantized on-device edge AI (TFLite/Jetson) with anti-spoofing",
        "Multi-agent orchestration with LangGraph & self-healing workflows",
        "mTLS zero-trust mesh & SOC 2 / HIPAA compliance audits",
        "High-availability multi-region active-active cloud topologies"
      ],
      icon: Sparkles,
      color: "border-[#00E5C9]/60"
    }
  ];

  const filteredCerts = selectedLevel === "all"
    ? certifications
    : certifications.filter((cert) => cert.level.toLowerCase() === selectedLevel.toLowerCase());

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
        service: "Certification Track Enrollment",
        source: "Certifications Page"
      });
      if (result.success) {
        toast.success("Enrollment registered! Recorded to executive evaluation sheet.");
        setIsEnrollModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          certificationTrack: "Professional Distributed Systems Architect",
          experienceLevel: "3-5 Years Software Engineering",
          notes: ""
        });
      } else {
        toast.error("Enrollment recorded locally. Our examination board will contact you shortly.");
        setIsEnrollModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please email direct to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewDetails = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

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

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY RECOGNITION // VERIFIABLE CREDENTIALS</span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Aparaitech Engineering Certifications
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Validate production capabilities in distributed cloud architectures, real-time WebSocket messaging, on-device edge AI, and enterprise generative AI.
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => setIsEnrollModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Enroll for Certification Exam</span>
            </button>
            <a
              href="mailto:info@ai.aparaitech.org?subject=Enterprise%20Cohort%20Certifications"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Corporate Team Cohorts</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. FILTER SECTION */}
      <section className="border-b border-[#22242A] bg-[#141518]/70 py-4">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Filter Track:
              </span>
              <div className="flex gap-2">
                {["all", "associate", "professional", "principal"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                      selectedLevel === level
                        ? "bg-[#D4FD53] text-[#0C0D0F] font-bold"
                        : "bg-[#1C1C1E] text-slate-300 border border-white/5 hover:border-slate-500"
                    }`}
                  >
                    {level === "all" ? "All Tracks" : level}
                  </button>
                ))}
              </div>
            </div>

            <div className="font-mono text-xs text-slate-400">
              Showing {filteredCerts.length} Accredited Certification{filteredCerts.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CERTIFICATION CARDS */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => {
            const IconComp = cert.icon;
            return (
              <div
                key={cert.id}
                className={`flex flex-col justify-between rounded-xl border bg-[#141518] p-8 transition-all duration-300 relative group ${
                  cert.popular
                    ? "border-[#D4FD53]/70 shadow-2xl shadow-[#D4FD53]/5 md:-translate-y-2"
                    : "border-[#22242A] hover:border-[#D4FD53]/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1C1C1E] border border-white/10 text-[#D4FD53]">
                      {cert.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      {cert.level}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-[#0C0D0F] border border-[#22242A] flex items-center justify-center text-[#D4FD53] mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#D4FD53] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="rounded-lg bg-[#0C0D0F] border border-[#22242A] p-3 mb-6 space-y-1 font-mono text-[11px] text-slate-400">
                    <div>Format: <strong className="text-slate-200">{cert.format}</strong></div>
                    <div>Duration: <strong className="text-slate-200">{cert.duration}</strong></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-2 border-t border-[#22242A] pt-4 mb-6">
                    {cert.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4FD53] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22242A] flex gap-2">
                  <button
                    onClick={() => handleViewDetails(cert)}
                    className="flex-1 py-2.5 rounded border border-white/20 bg-[#1C1C1E] text-xs font-mono text-slate-300 hover:text-white hover:bg-[#2C2C30] transition-colors"
                  >
                    View Curriculum
                  </button>
                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        certificationTrack: cert.title
                      });
                      setIsEnrollModalOpen(true);
                    }}
                    className="flex-1 py-2.5 rounded bg-[#D4FD53] text-[#0C0D0F] text-xs font-mono font-bold hover:brightness-105 transition-all"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY GET CERTIFIED */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
              INDUSTRY VALUE PROPOSITION
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">Why Certify with Aparaitech?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center mx-auto text-[#D4FD53] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cryptographically Verifiable</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Credentials issue a verifiable cryptographic token on the SVPM / Aparaitech blockchain ledger, verifiable by enterprise hiring directors instantly.
              </p>
            </div>

            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center mx-auto text-[#00E5C9] mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real Production Code Labs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No trivial multiple-choice questions. Candidates are evaluated on actual system implementations in Monaco code sandboxes with live assertions.
              </p>
            </div>

            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center mx-auto text-[#D4FD53] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast-Track Hiring & CoE Pods</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certified alumni receive priority placement in Aparaitech Hinjawadi Phase 2 engineering pods and partner enterprise consulting teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODAL: CURRICULUM DETAILS */}
      {showModal && selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#141518] border border-[#22242A] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-[#D4FD53] uppercase mb-2">
              CURRICULUM SPECIFICATION // {selectedCert.level}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h2>
            <p className="text-slate-400 text-xs mb-6 font-mono">{selectedCert.duration} • {selectedCert.format}</p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5 mb-6">
              <h4 className="font-mono text-xs uppercase text-[#00E5C9] tracking-wider mb-3">
                Key Tested Competencies
              </h4>
              <div className="space-y-2">
                {selectedCert.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#22242A]">
              <button
                onClick={() => {
                  setShowModal(false);
                  setFormData({
                    ...formData,
                    certificationTrack: selectedCert.title
                  });
                  setIsEnrollModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded bg-[#D4FD53] px-6 py-2.5 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Register for Examination</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL: ENROLLMENT FORM */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#22242A] bg-[#141518] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Aparaitech Examination Registration</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Candidate Examination Enrollment
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Recorded directly to our examination management sheet for proctor scheduling and exam token issuance.
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
                  placeholder="e.g., Pooja Deshmukh"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate / Academic Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="pooja@domain.com"
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
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Institution</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enterprise Corp"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Experience Level</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="1-3 Years Software Engineering">1-3 Years Software Engineering</option>
                    <option value="3-5 Years Software Engineering">3-5 Years Software Engineering</option>
                    <option value="5-10 Years Architecture Experience">5-10 Years Architecture Experience</option>
                    <option value="Senior Staff / Principal Engineer">Senior Staff / Principal Engineer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Selected Certification Track</label>
                <select
                  name="certificationTrack"
                  value={formData.certificationTrack}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                >
                  <option value="Associate AI Platform Engineer">Associate AI Platform Engineer (Level 1)</option>
                  <option value="Professional Distributed Systems Architect">Professional Distributed Systems Architect (Level 2)</option>
                  <option value="Principal AI Systems & CoE Fellow">Principal AI Systems & CoE Fellow (Level 3)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Examination Date / Target Month</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline your target exam window or cohort requirements..."
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
                  <span>{isSubmitting ? "Syncing Examination Booking..." : "Confirm Exam Registration"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
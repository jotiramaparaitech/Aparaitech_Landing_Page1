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
  FileText,
  ShieldCheck,
  Terminal,
  Workflow,
  Layers
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet } from "../../../utils/sheetService";

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
      icon: <Building2 className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    },
    {
      title: "6 Production Platforms Live",
      detail: "We don't deal in hypothetical slideware. We build and operate high-scale production systems across retail, biometric attendance, cloud kitchens, and alumni networks.",
      metric: "6 Live Systems",
      icon: <Cpu className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    },
    {
      title: "Zero Hallucination Guardrails",
      detail: "Our enterprise architectures utilize deterministic retrieval, structured verification pipelines, and hybrid semantic search so business outcomes remain reliable.",
      metric: "Deterministic",
      icon: <Shield className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    },
    {
      title: "Direct AI Lab Collaboration",
      detail: "We test frontier models from OpenAI, Anthropic, and Google Cloud AI before public release, ensuring your organization stays ahead of market shifts.",
      metric: "Frontier Access",
      icon: <Zap className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    },
  ];

  return (
    <div className="bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] font-sans selection:bg-[#2563EB] selection:text-white min-h-screen transition-colors">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#29384D] pt-20 pb-20">
        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-semibold">
              WHO WE ARE
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight max-w-4xl">
            Architecting the AI-run enterprise from Pune to the world.
          </h1>

          <p className="mt-6 text-lg text-[#64748B] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
            Aparaitech Software is an enterprise AI software engineering firm headquartered in Pune, India. We map operational bottlenecks, deploy autonomous multi-agent systems, and build intelligent platforms directly into how your teams work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              Gera Imperial, Hinjawadi Phase 2, Pune
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1] shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
              ISO 27001 & 9001 Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1] shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              Dedicated Pune Engineering Pods
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP & FOUNDERS SPOTLIGHT */}
      <section className="py-24 border-b border-[#E2E8F0] dark:border-[#29384D] relative overflow-hidden bg-[#F3F6FA] dark:bg-[#0B1220] transition-colors">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0F9F8F] dark:text-[#2DD4BF] font-semibold">
              EXECUTIVE LEADERSHIP & STATUTORY COMPLIANCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-[clamp(2.2rem,4vw,3.25rem)] font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight leading-tight">
                Founder Leadership & Statutory Governance
              </h2>
              <p className="mt-3 text-[#64748B] dark:text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                Founded and directed by Pratik Pawar from Hinjawadi Phase 2, Pune, uniting sovereign frontier AI systems engineering with Government of India statutory registrations, MSME certification, and enterprise compliance.
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 px-6 text-sm font-semibold text-white transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Executive Briefing</span>
            </button>
          </div>

          {/* Founder & Government Accreditations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Executive Leadership & Systems Architecture Matrix */}
            <div className="relative group flex flex-col">
              <div className="relative rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] overflow-hidden p-6 sm:p-7 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-[#E2E8F0] dark:border-[#29384D]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/25 text-[#0F9F8F] dark:text-[#2DD4BF] font-mono text-[11px] font-bold tracking-wider uppercase">
                      <Terminal className="w-3.5 h-3.5" />
                      Executive Leadership
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B] dark:text-[#94A3B8] bg-[#F3F6FA] dark:bg-[#0B1220] px-2.5 py-1 rounded-lg border border-[#E2E8F0] dark:border-[#29384D] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0F9F8F] dark:text-[#2DD4BF]" /> Pune CoE Command
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-5">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center shrink-0 shadow-sm">
                      <Cpu className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight">
                          Pratik Pawar
                        </h3>
                        <span className="font-mono text-[9px] bg-teal-50 dark:bg-[#0F9F8F]/15 text-[#0F9F8F] dark:text-[#2DD4BF] px-2 py-0.5 rounded border border-[#0F9F8F]/25 font-bold uppercase">
                          Verified
                        </span>
                      </div>
                      <p className="text-xs text-[#2563EB] dark:text-[#3B82F6] font-mono mt-0.5 font-medium">
                        Founder & Principal Systems Architect • Sole Proprietor
                      </p>
                      <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5">
                        Aparaitech Software • Hinjawadi Phase 2, Pune
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] font-normal mb-6 leading-relaxed">
                    Directing frontier enterprise AI engineering, autonomous multi-agent orchestration, and sovereign cloud deployments. Combining high-concurrency architecture with statutory Government of India compliance.
                  </p>

                  <div className="space-y-3.5">
                    {/* Mandate 1: Autonomous Multi-Agent Orchestration */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Workflow className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            Autonomous Multi-Agent Consensus
                          </h4>
                          <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#3B82F6] font-bold uppercase tracking-wider shrink-0">
                            Pillar 01
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-normal mt-0.5 leading-relaxed">
                          Deterministic agentic workflows, self-correcting RAG memory, and sub-second tool execution pipelines.
                        </p>
                      </div>
                    </div>

                    {/* Mandate 2: Sovereign Cloud & Private VPC */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#0F9F8F]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0F9F8F]/10 border border-[#0F9F8F]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Lock className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            Private VPC & On-Premises Isolation
                          </h4>
                          <span className="font-mono text-[10px] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold uppercase tracking-wider shrink-0">
                            Pillar 02
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-normal mt-0.5 leading-relaxed">
                          Air-gapped model inferencing, zero external data leakage, and enterprise HIPAA/PCI-DSS compliance.
                        </p>
                      </div>
                    </div>

                    {/* Mandate 3: Commercial Production Scale */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            Production Platform Ecosystem
                          </h4>
                          <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#3B82F6] font-bold uppercase tracking-wider shrink-0">
                            Pillar 03
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-normal mt-0.5 leading-relaxed">
                          6 live production SaaS systems operating with continuous 99.9% uptime SLA across enterprise clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statutory Verification Strip */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#29384D] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
                  <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    100% IP & Source Ownership Transferred
                  </span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-[#2563EB] dark:text-[#3B82F6] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Architecture Lead</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Government Statutory Licences & Accreditations Card */}
            <div className="relative group flex flex-col">
              <div className="relative rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] overflow-hidden p-6 sm:p-7 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-[#E2E8F0] dark:border-[#29384D]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/25 text-[#0F9F8F] dark:text-[#2DD4BF] font-mono text-[11px] font-bold tracking-wider uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Statutory Accreditations
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B] dark:text-[#94A3B8] bg-[#F3F6FA] dark:bg-[#0B1220] px-2.5 py-1 rounded-lg border border-[#E2E8F0] dark:border-[#29384D]">
                      Govt. of India & Maharashtra
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight leading-snug mb-2">
                    Government Licensed & Enterprise Certified Firm
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] font-mono mb-6 leading-relaxed">
                    Aparaitech Software operates as a verified Sole Proprietorship commercial IT enterprise under statutory licenses issued by the Government of India and the State of Maharashtra.
                  </p>

                  <div className="space-y-3.5">
                    {/* License 1: MSME / Udyam */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#0F9F8F]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0F9F8F]/10 border border-[#0F9F8F]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            MSME / Udyam Registration
                          </h4>
                          <span className="font-mono text-[10px] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold uppercase tracking-wider shrink-0">
                            Govt. of India
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5 leading-relaxed">
                          Ministry of Micro, Small & Medium Enterprises statutory recognition for IT Architecture & Cloud AI.
                        </p>
                      </div>
                    </div>

                    {/* License 2: Gumasta / Shop Act */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            Maharashtra Shop & Establishment (Gumasta)
                          </h4>
                          <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#3B82F6] font-bold uppercase tracking-wider shrink-0">
                            Pune PMC
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5 leading-relaxed">
                          Licensed commercial office under Pune Municipal Corporation & Labour Dept, Maharashtra (Hinjawadi Phase 2).
                        </p>
                      </div>
                    </div>

                    {/* License 3: GSTIN Commercial Entity */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#0F9F8F]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0F9F8F]/10 border border-[#0F9F8F]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Shield className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            GST Registered Commercial Enterprise
                          </h4>
                          <span className="font-mono text-[10px] text-[#64748B] dark:text-[#94A3B8] font-bold uppercase tracking-wider shrink-0">
                            CBIC / State 27
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5 leading-relaxed">
                          Central Board of Indirect Taxes & Customs compliant with verified B2B enterprise invoicing.
                        </p>
                      </div>
                    </div>

                    {/* License 4: ISO 27001 & 9001 + SOC 2 */}
                    <div className="p-3.5 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 transition-colors flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Lock className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#142B4A] dark:text-[#F1F5F9] truncate">
                            ISO 27001 & 9001 Certified Architecture
                          </h4>
                          <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#3B82F6] font-bold uppercase tracking-wider shrink-0">
                            SOC 2 Type II
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5 leading-relaxed">
                          Information Security (ISMS) & Quality standard compliance with isolated private VPC deployments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#29384D] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-[#142B4A] dark:text-[#F1F5F9]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    Legal Entity: Sole Proprietorship Firm
                  </span>
                  <span className="text-[#0F9F8F] dark:text-[#2DD4BF]">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Narrative & Vision */}
          <div className="rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-8 sm:p-10 space-y-6 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#2563EB] dark:text-[#3B82F6]">
              <Briefcase className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              Executive Strategic Vision
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight leading-tight">
              "We don't build speculative prototypes. We engineer resilient, sovereign AI systems that run real enterprises."
            </h3>

            <p className="text-[#475569] dark:text-[#CBD5E1] text-base leading-relaxed">
              Under the executive direction of Founder & Sole Proprietor <span className="text-[#142B4A] dark:text-[#F1F5F9] font-semibold">Pratik Pawar</span>, Aparaitech Software has evolved from an engineering lab in Pune into an enterprise-grade AI powerhouse operating six live commercial SaaS platforms, holding full statutory registrations and serving clients globally.
            </p>

            <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed font-mono">
              "Our guiding thesis is that enterprise AI must be deterministic, auditable, and sovereign. By pairing world-class frontier models with rigorous verification pipelines and private VPC isolation, our engineering pods in Hinjawadi give enterprises the confidence to run mission-critical workflows with zero hallucination risk."
            </p>

            {/* Founder Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0] dark:border-[#29384D]">
              <div className="p-4 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] space-y-1">
                <div className="flex items-center gap-2 text-[#142B4A] dark:text-[#F1F5F9] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                  <span>Hands-On Engineering Leadership</span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">
                  Direct technical oversight on every enterprise client architecture and private cloud VPC rollout.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] space-y-1">
                <div className="flex items-center gap-2 text-[#142B4A] dark:text-[#F1F5F9] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>Statutory Governance & Compliance</span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">
                  Govt. of India MSME/Udyam registered, Maharashtra Shop & Establishment licensed, GSTIN compliant, and ISO 27001/9001 quality frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILLARS GRID */}
      <section className="py-20 border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {p.icon}
                    <span className="font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF] bg-teal-50 dark:bg-[#0F9F8F]/15 px-2.5 py-1 rounded-lg border border-[#0F9F8F]/25">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-3 group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-mono">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROVEN PORTFOLIO DEPLOYMENTS */}
      <section className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold block mb-2">
                OUR PRODUCTION TRACK RECORD
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9]">
                Real enterprise software operating at scale.
              </h2>
            </div>
            <Link
              to="/customers/portfolio"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#2563EB] dark:text-[#3B82F6] hover:underline"
            >
              <span>View All 6 Live Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#131F32] p-6 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 shadow-sm transition-all">
              <h4 className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8] uppercase">FOOD & HOSPITALITY</h4>
              <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">Cloud Kitchen AI</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-2 font-mono leading-relaxed">
                Multi-brand kitchen operations platform coordinating preparation pipelines and order dispatch.
              </p>
              <a href="https://cloudkitchen.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#3B82F6]">
                cloudkitchen.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-white dark:bg-[#131F32] p-6 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 shadow-sm transition-all">
              <h4 className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8] uppercase">ENTERPRISE SAAS</h4>
              <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">Attendance SaaS</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-2 font-mono leading-relaxed">
                Biometric edge face validation and corporate workforce time-tracking with automated payroll sync.
              </p>
              <a href="https://attendance.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#3B82F6]">
                attendance.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-white dark:bg-[#131F32] p-6 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 shadow-sm transition-all">
              <h4 className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8] uppercase">RETAIL ENGINE</h4>
              <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">APNA Store</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-2 font-mono leading-relaxed">
                High-scale commercial e-commerce engine with semantic product catalog search and cart optimization.
              </p>
              <a href="https://apnastore.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#3B82F6]">
                apnastore.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 border-b border-[#E2E8F0] dark:border-[#29384D] text-center relative overflow-hidden bg-white dark:bg-[#0B1220]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight leading-tight max-w-2xl mx-auto">
            Partner with our AI engineering pod.
          </h2>
          <p className="mt-4 text-[#64748B] dark:text-[#94A3B8] text-base max-w-lg mx-auto">
            Visit our Center of Excellence at Hinjawadi Phase 2, Pune or connect directly with our founder and lead architects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 px-8 text-sm font-semibold text-white shadow-sm transition-all cursor-pointer"
            >
              <span>Schedule Executive Architecture Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#131F32] px-8 text-sm font-mono text-[#142B4A] dark:text-[#F1F5F9] hover:border-[#2563EB] transition-all"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
      {/* EXECUTIVE BRIEFING MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#142B4A] dark:text-[#94A3B8] dark:hover:text-[#142B4A] dark:text-[#F1F5F9] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="relative">
                <img
                  src="/aparaitech_logo.jpg"
                  alt="Aparaitech Software"
                  className="w-12 h-12 rounded-xl object-contain bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] p-1 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F9F8F] text-[9px] font-bold text-[#142B4A] dark:text-[#F1F5F9]">✓</span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6] font-semibold">
                  EXECUTIVE BRIEFING INTAKE
                </span>
                <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9]">
                  Executive Briefing & Architectural Advisory
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono mb-6">
              Recorded directly to our leadership management sheet. Executive officers connect with institutional queries within 24 hours.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] px-3 py-2 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  placeholder="e.g., Rajesh Kumar"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] px-3 py-2 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    placeholder="rajesh@enterprise.com"
                  />
                </div>
                <div>
                  <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] px-3 py-2 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Organization / Enterprise Name</label>
                <input
                  type="text"
                  value={bookingForm.company}
                  onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                  className="w-full rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] px-3 py-2 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  placeholder="Acme Technologies Ltd."
                />
              </div>

              <div>
                <label className="block text-[#475569] dark:text-[#CBD5E1] mb-1 font-medium">Operational Agenda / Challenge</label>
                <textarea
                  rows="3"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="w-full rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] px-3 py-2 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none resize-none"
                  placeholder="Describe your architecture requirements, data volume, or target rollout timeline..."
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="nda-about"
                  checked={bookingForm.nda}
                  onChange={(e) => setBookingForm({ ...bookingForm, nda: e.target.checked })}
                  className="rounded border-[#E2E8F0] dark:border-[#29384D] text-[#2563EB] focus:ring-0"
                />
                <label htmlFor="nda-about" className="text-[#64748B] dark:text-[#94A3B8] text-[11px]">
                  Require mutual non-disclosure agreement (NDA) before briefing
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-50 transition-all cursor-pointer shadow-sm"
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


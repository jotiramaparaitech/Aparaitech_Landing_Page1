// src/components/Solutions.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Layers,
  Sparkles,
  ShieldCheck,
  Building,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Workflow,
  BarChart,
  Lock
} from "lucide-react";

const solutionsData = {
  "AI Services": {
    icon: <Bot className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    desc: "Advanced generative AI and autonomous multi-agent systems designed to drive operational velocity.",
    items: [
      { name: "Autonomous Agent Swarms", detail: "Self-coordinating agent pods for multi-step enterprise workflows." },
      { name: "Enterprise RAG Architectures", detail: "Zero-hallucination document synthesis with hybrid vector + BM25 retrieval." },
      { name: "Intelligent Document Processing (IDP)", detail: "High-accuracy OCR and entity extraction from invoices, contracts, and scans." },
      { name: "Computer Vision & Quality Defect AI", detail: "Real-time edge inspection for manufacturing and assembly lines." },
      { name: "Conversational Phone & Voice AI", detail: "Sub-500ms voice agents with native multilingual fluency." },
    ],
  },
  "Enterprise Solutions": {
    icon: <Building className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    desc: "Custom-engineered business software connecting departments, data silos, and supply chains.",
    items: [
      { name: "Custom ERP & MRP Systems", detail: "Tailored manufacturing resource planning with real-time BOM tracking." },
      { name: "Enterprise CRM & Pipeline Automation", detail: "Unified sales telemetry, deal scoring, and automated customer journeys." },
      { name: "Supply Chain & Logistics Dispatch", detail: "Dynamic route optimization and multi-warehouse inventory allocation." },
      { name: "HRM & Biometric Payroll Platforms", detail: "Edge face-recognition attendance with automated compliance reporting." },
      { name: "Product Lifecycle Management (PLM)", detail: "Engineering change orders, revision history, and supplier collaboration." },
    ],
  },
  "Digital Transformation": {
    icon: <Workflow className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    desc: "Modernizing legacy architectures and transitioning traditional workflows into automated digital systems.",
    items: [
      { name: "Legacy System Decoupling", detail: "Migrating monolithic on-prem systems to modern microservices." },
      { name: "Event-Driven Architecture (EDA)", detail: "Apache Kafka and RabbitMQ pipelines for real-time transaction processing." },
      { name: "Omnichannel Customer Portals", detail: "Frictionless web, mobile, and WhatsApp self-service customer hubs." },
      { name: "Automated Financial Reconciliation", detail: "Matching bank statements, vendor invoices, and ledger entries with AI." },
    ],
  },
  "Industry Solutions": {
    icon: <Cpu className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    desc: "Domain-specific platforms built around industry-specific compliance and workflows.",
    items: [
      { name: "Manufacturing & EPC Automation", detail: "Tender parsing, spec-to-CAD translation, and downtime intelligence." },
      { name: "Healthcare EHR & Claims Triaging", detail: "Clinical documentation parsing and automated prior-authorization checks." },
      { name: "FinTech & Real-Time Fraud Defense", detail: "High-concurrency risk scoring and AML graph analytics." },
      { name: "Quick Commerce & Retail Engine", detail: "Dark-store pick routing and localized demand forecasting." },
    ],
  },
  "Security Solutions": {
    icon: <ShieldCheck className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF]" />,
    desc: "Enterprise platform hardening, threat modeling, and zero-trust security postures.",
    items: [
      { name: "Zero-Trust Network Access (ZTNA)", detail: "Context-aware authentication for distributed engineering teams." },
      { name: "Penetration Testing & Red Teaming", detail: "Automated vulnerability assessments and continuous posture scoring." },
      { name: "Data Encryption & Sovereign Vaults", detail: "Air-gapped key management and localized data residency guarantees." },
      { name: "Continuous Compliance Monitoring", detail: "Automated evidence collection for ISO 27001, SOC2, and GDPR audits." },
    ],
  },
};

const Solutions = () => {
  const [active, setActive] = useState("AI Services");

  return (
    <div className="bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] font-sans min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#29384D] pt-20 pb-20 bg-white dark:bg-[#131F32]">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#34D399]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF]">
              ENTERPRISE SOLUTIONS & SYSTEMS
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-semibold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight max-w-4xl">
            Intelligent software engineered for competitive advantage.
          </h1>

          <p className="mt-6 text-lg text-[#475569] dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
            We architect and deploy custom enterprise platforms that combine Generative AI, autonomous agents, and robust cloud microservices — designed around your exact business processes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <span className="h-2 w-2 rounded-full bg-[#0F9F8F]"></span>
              7 Live Production Deployments
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <Lock className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              Zero Hallucination Guarantee
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <BarChart className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
              Outcome-Based Fixed Pricing
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SOLUTIONS MATRIX */}
      <section className="py-20 border-b border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#0B1220]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 pb-10 border-b border-[#E2E8F0] dark:border-[#29384D]">
            {Object.keys(solutionsData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? "px-5 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider bg-[#2563EB] text-white shadow-sm"
                    : "px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider bg-white dark:bg-[#131F32] text-[#475569] dark:text-[#CBD5E1] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-all"
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Solution Content */}
          <div className="pt-12">
            <div className="flex items-center gap-3 mb-3">
              {solutionsData[active].icon}
              <h2 className="text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight">
                {active}
              </h2>
            </div>
            <p className="text-[#475569] dark:text-[#94A3B8] text-base max-w-2xl mb-10">
              {solutionsData[active].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionsData[active].items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all group shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#0F9F8F] dark:text-[#2DD4BF] transition-colors">
                      {item.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF] shrink-0 mt-1" />
                  </div>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className="py-20 border-b border-[#E2E8F0] dark:border-[#29384D] text-center relative overflow-hidden bg-white dark:bg-[#131F32]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to build custom enterprise solutions?
          </h2>
          <p className="mt-4 text-[#64748B] dark:text-[#94A3B8] text-base max-w-lg mx-auto">
            Speak directly with our senior system architects at our Hinjawadi Phase 2, Pune office.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/generative-ai"
              className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-all"
            >
              <span>Explore Generative AI Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#0B1220] px-8 text-sm font-medium text-[#142B4A] dark:text-[#F1F5F9] hover:bg-[#E2E8F0] dark:hover:bg-[#131F32] transition-all"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

// src/components/pages/Company/Careers.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Shield,
  Layers,
  CheckCircle2,
  Mail
} from "lucide-react";

const jobOpenings = [
  {
    title: "Lead AI Systems Architect",
    pod: "Core AI / RAG",
    type: "Full-Time",
    location: "Hinjawadi, Pune / Hybrid",
    desc: "Architect enterprise multi-agent workflows, vector retrieval pipelines, and private on-premises LLM deployments.",
    tags: ["LLMs", "LangGraph", "Vector DBs", "Python", "Kubernetes"],
  },
  {
    title: "Senior Full Stack Systems Engineer",
    pod: "Enterprise Platforms",
    type: "Full-Time",
    location: "Hinjawadi, Pune / Hybrid",
    desc: "Build mission-critical React, Node.js, and high-concurrency microservices for our live SaaS platforms.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Kafka"],
  },
  {
    title: "Computer Vision & Edge AI Engineer",
    pod: "Vision & IoT",
    type: "Full-Time",
    location: "On-Site (Pune CoE)",
    desc: "Deploy defect detection and real-time visual inspection models at edge hardware for industrial manufacturing plants.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "TensorRT", "Edge TPU"],
  },
  {
    title: "Cloud Infrastructure & DevOps Engineer",
    pod: "Cloud Ops",
    type: "Full-Time",
    location: "Remote / Hybrid",
    desc: "Manage high-availability Kubernetes clusters, GPU inference scaling, and automated ISO 27001 compliance pipelines.",
    tags: ["Kubernetes", "AWS / GCP", "Terraform", "CI/CD", "vLLM"],
  },
  {
    title: "Enterprise Solutions Consultant",
    pod: "Diagnostic & Strategy",
    type: "Full-Time",
    location: "Pune / Mumbai",
    desc: "Conduct operational diagnostic sprints with enterprise clients, quantifying automation ROI and scoping custom builds.",
    tags: ["Enterprise AI", "B2B SaaS", "Architecture Review", "Client Advisory"],
  },
  {
    title: "UI/UX & Product Design Lead",
    pod: "Product Design",
    type: "Full-Time",
    location: "Remote / Hybrid",
    desc: "Design high-density, technical enterprise dashboards, AI consoles, and operational interfaces.",
    tags: ["Figma", "Design Systems", "Enterprise UX", "Data Visualization"],
  },
];

const perks = [
  {
    title: "Frontier Hardware Access",
    desc: "Dedicated compute clusters with NVIDIA H100/A100 instances for model experimentation.",
  },
  {
    title: "Prime Pune Center of Excellence",
    desc: "Modern collaborative workspace at Gera Imperium, Hinjawadi Phase 2, Pune.",
  },
  {
    title: "Direct Production Ownership",
    desc: "No bureaucratic red tape. You ship code directly to live production platforms serving thousands of users.",
  },
  {
    title: "Competitive Equity & Rewards",
    desc: "Top-tier compensation packages aligned with tangible enterprise delivery milestones.",
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-20 pb-20">
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
              CAREERS & ENGINEERING PODS
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Build production AI systems with high autonomy.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            We are looking for exceptional software engineers, distributed systems builders, and AI researchers to join our specialized pods in Hinjawadi, Pune.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4FD53]" />
              Hinjawadi Phase 2, Pune
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#766DFE]" />
              Frontier Model Access
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Briefcase className="w-3.5 h-3.5 text-[#10B981]" />
              6 Open Positions
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & PERKS */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] font-bold block mb-2">
            WHY JOIN APARAITECH
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
            An engineering-first culture with zero bureaucracy.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/40 transition-colors"
              >
                <span className="font-mono text-sm font-bold text-[#D4FD53] mb-3 block">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS GRID */}
      <section className="py-20 bg-[#F6F4EE] text-[#0C0D0F] border-b border-[#DDD7CF]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#473BFD] font-bold block mb-2">
                ACTIVE RECRUITMENT SPRINT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0C0D0F]">
                Open Roles Across Engineering Pods
              </h2>
            </div>
            <a
              href="mailto:info@ai.aparaitech.org?subject=Application%20for%20Engineering%20Pod"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#473BFD] hover:underline"
            >
              Direct Email: info@ai.aparaitech.org ↗
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-lg border border-[#DDD7CF] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {job.pod}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">
                      {job.type} • {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0C0D0F] mb-2">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/apply"
                    className="inline-flex w-full items-center justify-center gap-1.5 h-10 rounded bg-[#0C0D0F] text-white font-mono text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Apply for this Position</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4FD53]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING FAST INTAKE */}
      <section className="py-24 border-b border-[#22242A] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Don't see your specific specialization?
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Send your GitHub profile and architectural highlights directly to our engineering leadership.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:info@ai.aparaitech.org?subject=General%20Engineering%20Inquiry"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Engineering Leads: info@ai.aparaitech.org</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

// src/components/pages/Company/AboutUs.jsx
import React from "react";
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
  ExternalLink
} from "lucide-react";

const AboutUs = () => {
  const pillars = [
    {
      title: "Senior Engineering Pods On-Site",
      detail: "Based at our Hinjawadi Phase 2, Pune Center of Excellence, our pods consist of senior AI researchers and distributed systems architects who work directly on your systems.",
      metric: "Hinjawadi CoE",
      icon: <Building2 className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "7 Production Platforms Live",
      detail: "We don't deal in hypothetical slideware. We build and operate high-scale production systems across retail, biometric attendance, cloud kitchens, and alumni networks.",
      metric: "7 Live Systems",
      icon: <Cpu className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "Zero Hallucination Guardrails",
      detail: "Our enterprise architectures utilize deterministic retrieval, structured verification pipelines, and hybrid semantic search so business outcomes remain reliable.",
      metric: "Deterministic",
      icon: <Shield className="w-5 h-5 text-[#D4FD53]" />,
    },
    {
      title: "Direct AI Lab Collaboration",
      detail: "We test frontier models from OpenAI, Anthropic, and Google Cloud AI before public release, ensuring your organization stays ahead of market shifts.",
      metric: "Frontier Access",
      icon: <Zap className="w-5 h-5 text-[#D4FD53]" />,
    },
  ];

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
              WHO WE ARE
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Architecting the AI-run enterprise from Pune to the world.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Aparaitech Software is an enterprise AI software engineering firm. We map operational bottlenecks, deploy autonomous multi-agent systems, and build intelligent platforms directly into how your teams work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4FD53]" />
              Gera Imperium, Hinjawadi Phase 2, Pune
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#766DFE]" />
              ISO 27001 & 9001 Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Users className="w-3.5 h-3.5 text-[#10B981]" />
              Dedicated Pods
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS GRID */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {p.icon}
                    <span className="font-mono text-xs text-[#D4FD53] bg-[#1C1C1E] px-2.5 py-1 rounded border border-white/10">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4FD53] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-mono">
                    {p.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROVEN PORTFOLIO DEPLOYMENTS */}
      <section className="py-20 bg-[#F6F4EE] text-[#0C0D0F] border-b border-[#DDD7CF]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#473BFD] font-bold block mb-2">
            OUR PRODUCTION TRACK RECORD
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0C0D0F] mb-10">
            Real enterprise software operating at scale.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF]">
              <h4 className="font-mono text-xs text-slate-400 uppercase">FOOD & HOSPITALITY</h4>
              <h3 className="text-xl font-bold text-[#0C0D0F] mt-1">Cloud Kitchen AI</h3>
              <p className="text-xs text-slate-600 mt-2">
                Multi-brand kitchen operations platform coordinating preparation pipelines and order dispatch.
              </p>
              <a href="https://cloudkitchen.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD]">
                cloudkitchen.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF]">
              <h4 className="font-mono text-xs text-slate-400 uppercase">ENTERPRISE SAAS</h4>
              <h3 className="text-xl font-bold text-[#0C0D0F] mt-1">Attendance SaaS</h3>
              <p className="text-xs text-slate-600 mt-2">
                Biometric edge face validation and corporate workforce time-tracking with automated payroll sync.
              </p>
              <a href="https://attendance.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD]">
                attendance.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF]">
              <h4 className="font-mono text-xs text-slate-400 uppercase">RETAIL ENGINE</h4>
              <h3 className="text-xl font-bold text-[#0C0D0F] mt-1">APNA Store</h3>
              <p className="text-xs text-slate-600 mt-2">
                High-scale commercial e-commerce engine with semantic product catalog search and cart optimization.
              </p>
              <a href="https://apnastore.aparaitech.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD]">
                apnastore.aparaitech.org <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="py-24 border-b border-[#22242A] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Partner with our AI engineering pod.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Visit our Center of Excellence at Hinjawadi Phase 2, Pune or connect with our lead architects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/generative-ai"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all"
            >
              <span>Explore AI Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

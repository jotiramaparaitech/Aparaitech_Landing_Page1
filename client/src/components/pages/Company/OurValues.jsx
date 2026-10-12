// src/components/pages/Company/OurValues.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Cpu,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Award
} from "lucide-react";

const values = [
  {
    num: "01",
    title: "Zero Hallucination Standard",
    desc: "In enterprise software, 95% accuracy is a failure. We engineer deterministic verification layers, multi-model consensus, and hybrid semantic retrieval to guarantee zero hallucination.",
    icon: <Target className="w-5 h-5 text-[#34D399]" />
  },
  {
    num: "02",
    title: "Absolute Data Sovereignty",
    desc: "Your data never trains public frontier models. We deploy within your cloud VPC (AWS, GCP, Azure) or air-gapped on-prem infrastructure with strict Zero Data Retention (ZDR) agreements.",
    icon: <Lock className="w-5 h-5 text-[#34D399]" />
  },
  {
    num: "03",
    title: "Production Durability",
    desc: "A prototype is not a product. We build enterprise systems with automated fallbacks, sub-second latency SLAs, circuit-breakers, and 99.99% fault-tolerant resilience.",
    icon: <Cpu className="w-5 h-5 text-[#34D399]" />
  },
  {
    num: "04",
    title: "Outcome-Tied Accountability",
    desc: "We don't bill endless consulting hours without deliverables. Our engagements are scoped around verifiable operational metrics, speed gains, and measurable cost reductions.",
    icon: <ShieldCheck className="w-5 h-5 text-[#34D399]" />
  },
  {
    num: "05",
    title: "Complete Client Enablement",
    desc: "We don't create vendor lock-in. Every system we build includes full architectural documentation, clean source code, and comprehensive training so your team can extend it autonomously.",
    icon: <Users className="w-5 h-5 text-[#34D399]" />
  },
  {
    num: "06",
    title: "Continuous Frontier Evolution",
    desc: "The AI landscape evolves monthly. As your AI Partner of Record, we proactively evaluate frontier model releases and benchmark improvements to continuously raise your system output.",
    icon: <Sparkles className="w-5 h-5 text-[#34D399]" />
  }
];

const OurValues = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-[#1E293B] pt-20 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#10B981]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#34D399]">
              CORE ARCHITECTURAL PRINCIPLES
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
            The engineering principles that govern how we build.
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            We hold ourselves to rigorous enterprise standards: zero hallucination, sovereign data governance, production durability, and outcome-tied accountability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#34D399]" />
              ISO 27001 & 9001 Certified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
              SOC2 Type II Aligned
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUES GRID */}
      <section className="py-20 border-b border-slate-200 dark:border-[#1E293B]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {v.icon}
                    <span className="font-mono text-xs font-bold text-[#34D399] bg-slate-100 dark:bg-[#161F32] px-2 py-0.5 rounded border border-white/10">
                      {v.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34D399] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className="py-24 border-b border-slate-200 dark:border-[#1E293B] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-slate-900 dark:text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Build with an enterprise partner you can trust.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            Schedule an architectural review with our engineering leadership in Hinjawadi, Pune.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/generative-ai"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#2563EB] px-8 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-all"
            >
              <span>Explore AI Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-[#161F32] px-8 text-sm font-mono text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1E293B] transition-all"
            >
              <span>Direct Call: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValues;

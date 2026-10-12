// src/components/pages/SharedPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Sparkles, CheckCircle2, Cpu, Lock } from "lucide-react";

const SharedPage = ({ category = "Enterprise Division", title, subtitle }) => {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO SECTION */}
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
            <span className="block h-3 w-3 bg-[#34D399]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#34D399]">
              {category}
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
            {title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {subtitle || "Engineered for high reliability, verifiable outputs, and autonomous enterprise operations."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Enterprise SLA Guarantee
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#34D399]" />
              ISO 27001 Aligned
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION & CAPABILITY CARDS */}
      <section className="py-20 border-b border-slate-200 dark:border-[#1E293B]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-500/40 transition-all shadow-sm">
              <span className="font-mono text-xs text-emerald-600 dark:text-[#34D399] block mb-2">01 / ARCHITECTURE</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Engineered</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                Designed around your organization's exact data schemas, security boundaries, and operational workflows.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-500/40 transition-all shadow-sm">
              <span className="font-mono text-xs text-emerald-600 dark:text-[#34D399] block mb-2">02 / INTEGRATION</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">On-Premises / VPC</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                Deploy securely within your private cloud environment with zero data leakage and strict retention controls.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-500/40 transition-all shadow-sm">
              <span className="font-mono text-xs text-emerald-600 dark:text-[#34D399] block mb-2">03 / CONTINUOUS ROI</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Partner of Record</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                Ongoing model monitoring, automated maintenance, and benchmark enhancements as frontier AI evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
      <section className="py-24 border-b border-slate-200 dark:border-[#1E293B] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-slate-900 dark:text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Put your enterprise on AI.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            Schedule a 30-minute consultation sprint with our lead engineers in Hinjawadi, Pune.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/generative-ai"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#2563EB] px-8 text-sm font-semibold text-white hover:brightness-105 transition-all"
            >
              <span>Explore AI Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-[#161F32] px-8 text-sm font-mono text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1E293B] transition-all"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SharedPage;

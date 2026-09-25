// src/components/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Globe, Layers, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a12] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>404 • Page Not Found</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
          Lost in Cyberspace?
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          The subpage or endpoint you are looking for does not exist or has been relocated to our main directory.
        </p>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/customers/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 transition-all hover:scale-105"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>View Live Portfolio</span>
          </Link>
        </div>

        {/* Popular Subpages Grid */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-4">
            Popular Subpages & Destinations
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium">
            <Link
              to="/generative-ai"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>Generative AI</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
            <Link
              to="/cloud"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>Cloud Services</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
            <Link
              to="/solutions"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>Enterprise Solutions</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
            <Link
              to="/company/careers"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>Careers at Aparaitech</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
            <Link
              to="/company/about-us"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>About Company</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
            <Link
              to="/contact"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 transition-all text-left flex items-center justify-between"
            >
              <span>Contact & Consultation</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

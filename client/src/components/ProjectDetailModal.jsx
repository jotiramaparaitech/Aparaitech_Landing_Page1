// src/components/ProjectDetailModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Globe,
  Share2,
} from "lucide-react";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f111a] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/50 text-white z-10 custom-scrollbar"
        >
          {/* Top Banner / Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-gradient-to-r from-gray-900 to-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter contrast-125"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-[#0f111a]/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges in Header */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {project.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>{project.emoji}</span>
                <span>{project.title}</span>
              </h2>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Production Live URL
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-mono text-sm underline break-all flex items-center gap-1"
                  >
                    {project.url}
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Overview Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                System Overview & Purpose
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.fullOverview || project.description}
              </p>
            </div>

            {/* Performance & Architecture Metrics */}
            {project.stats && (
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Verified Production Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-center"
                    >
                      <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Features */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                Core Capabilities & Modules
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-black border border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
                  <Server className="w-4 h-4" />
                  Architecture & Data Flow
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Technology & Infrastructure Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                Developed & Deployed by{" "}
                <span className="text-cyan-400 font-semibold">
                  Team APARAITECH SOFTWARE
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  Close
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;

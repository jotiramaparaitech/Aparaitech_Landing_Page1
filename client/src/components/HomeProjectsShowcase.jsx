// src/components/HomeProjectsShowcase.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Activity,
  Info,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { liveProjects, APARAITECH_INFO } from "../data/projectsData";
import ProjectDetailModal from "./ProjectDetailModal";

const filterTabs = [
  { id: "All", label: "All Live Solutions" },
  { id: "FoodTech & Operations", label: "🍽️ FoodTech" },
  { id: "Enterprise HRMS & Workforce", label: "📝 HRMS & Workforce" },
  { id: "E-Commerce & Retail", label: "🛒 E-Commerce" },
  { id: "Field Operations & Services", label: "🔧 Field Ops" },
  { id: "EdTech & Assessment Engine", label: "🧪 CBT & Exams" },
  { id: "EdTech & Community", label: "🎓 Alumni Network" },
  { id: "AI & Cloud Infrastructure", label: "🌐 AI & Cloud" },
];

const HomeProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? liveProjects
      : liveProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-24 bg-[#0a0a12] text-white overflow-hidden border-t border-b border-white/[0.06]">
      {/* Background Cyber Glow & Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>APARAITECH SOFTWARE • Live Enterprise Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Real-World Software Solutions{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Deployed in Production
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore live products and cloud systems developed by{" "}
            <strong className="text-white font-semibold">APARAITECH SOFTWARE</strong>.
            From high-throughput cloud kitchens to proctored CBT engines, our solutions deliver reliability, speed, and real enterprise impact.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                7 Live
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Production Deployments</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">99.95%</div>
              <div className="text-xs text-gray-400 mt-0.5">Uptime SLA</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">Multi-Unit</div>
              <div className="text-xs text-gray-400 mt-0.5">Scalable Architecture</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">&lt; 350ms</div>
              <div className="text-xs text-gray-400 mt-0.5">Average Event Latency</div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide px-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-white/[0.03] text-gray-400 hover:text-white border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0f111a]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Top Ambient Glow on Hover */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.accentGradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Header: Status Pill & Emoji */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Category */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.shortTitle}
                    </h3>
                  </div>
                  <span className="text-xs text-cyan-400 font-medium tracking-wide">
                    {project.industry}
                  </span>
                </div>

                {/* Tagline / Hero Highlight */}
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <p className="text-xs font-medium text-gray-200 flex items-start gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.heroHighlight}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Mini Stats Banner */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-5 py-2 px-3 rounded-lg bg-black/30 border border-white/5 text-xs">
                    <div>
                      <span className="text-gray-500 block text-[10px]">
                        {project.stats[0]?.label}
                      </span>
                      <span className="font-bold text-gray-200">
                        {project.stats[0]?.value}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">
                        {project.stats[1]?.label}
                      </span>
                      <span className="font-bold text-gray-200">
                        {project.stats[1]?.value}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-gray-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Specs & Architecture</span>
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout & LinkedIn Connect */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-black border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 block">
                Team APARAITECH SOFTWARE
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need a Custom AI or Enterprise Software Solution?
              </h3>
              <p className="text-sm text-gray-300 max-w-xl">
                We design, build, and deploy production-grade cloud architectures, automated web systems, and high-concurrency SaaS products tailored for your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/customers/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <span>View Full Company Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={APARAITECH_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-white border border-[#0077b5]/40 transition-all hover:scale-105"
              >
                <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default HomeProjectsShowcase;

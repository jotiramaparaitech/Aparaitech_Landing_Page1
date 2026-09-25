// src/components/pages/Customers/Portfolio.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  Server,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Globe,
  Grid,
  List,
  ArrowUpRight,
  Zap,
  Terminal,
  Database,
  Code2,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import {
  liveProjects,
  projectCategories,
  APARAITECH_INFO,
} from "../../../data/projectsData";
import ProjectDetailModal from "../../ProjectDetailModal";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return liveProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.shortTitle.toLowerCase().includes(query) ||
        project.industry.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-20 min-h-screen bg-[#07080e] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-white/[0.08]">
        {/* Cyber Neon Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-600/20 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Ambient Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>APARAITECH SOFTWARE • COMPANY PROJECT PORTFOLIO</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Production Software Solutions &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Live AI Applications
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore the live projects and products engineered by{" "}
            <strong className="text-white font-semibold">
              APARAITECH SOFTWARE
            </strong>
            . Demonstrating our proven expertise in building high-throughput, secure, and mission-critical software solutions across diverse global industries.
          </p>

          {/* Verified Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                7 Live
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Production Deployments
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Guaranteed Cloud SLA
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">
                7+ Industries
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Real-World Domains
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                100k+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Operations Handled
              </div>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects-directory"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              Browse Live Directory
            </a>

            <a
              href={APARAITECH_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-white border border-[#0077b5]/40 transition-all hover:scale-105"
            >
              <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn Company Page</span>
            </a>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 border border-white/15 transition-all hover:scale-105"
            >
              Request Custom Software Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FILTER & SEARCH DIRECTORY ================= */}
      <section id="projects-directory" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar: Search & View Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by project name, tech stack (e.g. React, Redis), or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs text-gray-400 font-medium">View:</span>
            <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-white shadow-sm font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all ${
                  viewMode === "table"
                    ? "bg-cyan-500 text-white shadow-sm font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? liveProjects.length
                : liveProjects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-white/[0.03] text-gray-400 hover:text-white border-white/10 hover:border-white/20"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-gray-400">
          <div>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{" "}
            <strong className="text-white">{liveProjects.length}</strong> verified production solutions
          </div>
          {searchQuery && (
            <div>
              Filtering by: <span className="text-cyan-400">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* ================= PROJECTS GRID VIEW ================= */}
        {viewMode === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f111d] border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Visual Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f111d] via-[#0f111d]/50 to-transparent" />

                  {/* Badges on Banner */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE PRODUCTION
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* URL badge in banner */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-black/70 px-2.5 py-1 rounded-md border border-cyan-500/30 backdrop-blur-md max-w-full truncate">
                      <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{project.url}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{project.emoji}</span>
                        <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <span className="text-xs text-purple-400 font-semibold tracking-wide">
                        {project.industry}
                      </span>
                    </div>

                    {/* Tagline */}
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                      <p className="text-xs font-medium text-gray-200 flex items-start gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{project.heroHighlight}</span>
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Capabilities Bullet Points */}
                    <div className="space-y-1.5 mb-5">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-gray-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Metrics Grid */}
                    {project.stats && (
                      <div className="grid grid-cols-2 gap-2 mb-5 p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                        {project.stats.slice(0, 2).map((stat, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-xs font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Architecture</span>
                    </button>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                      <span>Launch Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ================= PROJECTS TABLE VIEW ================= */}
        {viewMode === "table" && (
          <div className="overflow-x-auto rounded-2xl bg-[#0f111d] border border-white/[0.08] shadow-2xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-xs uppercase bg-white/[0.04] border-b border-white/[0.08] text-gray-400 font-semibold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Product / Platform</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Production URL</th>
                  <th className="py-4 px-6">Key Metric</th>
                  <th className="py-4 px-6">Tech Stack</th>
                  <th className="py-4 px-6 text-right">Live Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.emoji}</span>
                        <div>
                          <div className="font-bold text-white flex items-center gap-2">
                            <span>{project.shortTitle}</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                          <div className="text-xs text-gray-400">
                            {project.industry}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {project.category}
                      </span>
                    </td>

                    <td className="py-4 px-6 font-mono text-xs text-cyan-400">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        {project.url}
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </td>

                    <td className="py-4 px-6">
                      {project.stats && (
                        <div>
                          <div className="font-bold text-white">
                            {project.stats[0]?.value}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {project.stats[0]?.label}
                          </div>
                        </div>
                      )}
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {project.techStack.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10"
                        >
                          Specs
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-white shadow-sm"
                        >
                          <span>Launch</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-white/10 p-8">
            <p className="text-gray-400 mb-4">
              No matching live projects found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ================= ARCHITECTURAL EXCELLENCE SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-[#07080e] via-[#0c0e18] to-[#07080e] border-t border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
              Engineering Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              How APARAITECH Builds Scalable Solutions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Every system in our portfolio is engineered for zero-compromise availability, ironclad data security, and blazing sub-second event latency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-5">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                High-Concurrency Event Pipelines
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Utilizing WebSockets, in-memory Redis caching, and reactive worker queues to handle tens of thousands of simultaneous orders, exams, and live geo-checkins.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 w-fit mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Zero-Trust & Geofence Security
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                End-to-end encrypted sessions, polygon-based GPS verification, anti-tamper client monitoring, and strict role-based authorization guards across all microservices.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                AI & Smart Algorithmic Logic
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Intelligent proctoring violation detection, dynamic technician routing, automated multi-brand KDS routing, and data-driven inventory deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK WITH US / LINKEDIN CALLOUT ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-black border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl">
            {/* Ambient Background Pulse */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">
                Partner With Team APARAITECH SOFTWARE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Have a Mission-Critical Software Project in Mind?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you need a custom SaaS platform, cloud infrastructure modernization, or enterprise AI application, our engineering team is ready to deliver.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 transition-all hover:scale-105"
                >
                  Schedule Technical Consultation
                </Link>

                <a
                  href={APARAITECH_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-base bg-[#0077b5] hover:bg-[#006097] text-white shadow-lg transition-all hover:scale-105"
                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
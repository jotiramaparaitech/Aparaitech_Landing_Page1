// src/components/pages/Customers/CaseStudies.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Lock,
  Server,
  ArrowUpRight,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Clock,
  ChevronRight
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    architectureFocus: "Microservices & Distributed Systems",
    timeline: "Within 30 Days",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please provide your name, corporate email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: "Technical Architecture Deep Dive",
        source: "Case Studies Page"
      });
      if (result.success) {
        toast.success("Consultation booked! Recorded in executive schedule sheet.");
        setIsConsultModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          architectureFocus: "Microservices & Distributed Systems",
          timeline: "Within 30 Days",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. A senior architect from Pune CoE will connect shortly.");
        setIsConsultModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please reach out to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredStudy = {
    id: "featured-cloudkitchen",
    title: "CloudKitchen OS: Zero-Drop High-Concurrency Kitchen Display System",
    category: "Distributed Systems",
    client: "Multi-Brand Commercial Kitchen Operators",
    url: "https://cloudkitchen.aparaitech.org/",
    desc: "Migrated fragmented commercial kitchen tablets into an event-driven Kitchen Display System (KDS) powered by Node.js, WebSockets, Redis pub/sub, and PostgreSQL, achieving sub-15s dispatch and 99.99% uptime during rush-hour traffic.",
    tags: ["Node.js", "WebSockets", "Redis Streams", "PostgreSQL", "React", "Docker"],
    metrics: [
      { label: "Dispatch Latency", value: "<15s" },
      { label: "Peak Ticket Loss", value: "0%" },
      { label: "Production SLA", value: "99.99%" }
    ],
    challenge: "Commercial cloud kitchens cooking for 5+ food brands simultaneously suffered from lost tickets, order throttling, and desynchronized order statuses between delivery riders and kitchen prep lines during 8 PM peak loads.",
    solution: "Aparaitech engineered a decentralized KDS with dual-monitor station routing. We built a WebSocket gateway on top of Redis Pub/Sub streams for atomic order state changes, backed by an offline-resilient local cache ensuring stations keep running even during internet blips.",
    architecture: [
      "Aggregator Ingestion API → Event Stream (Redis/Kafka)",
      "Station Dispatch Worker → Kitchen Screen WebSockets (<20ms latency)",
      "State Machine: Order Received → In Prep → Plated → Dispatched",
      "Telemetry & Audit Ledger storing millisecond-accurate prep metrics"
    ],
    results: [
      "Zero ticket drops across 50,000+ monthly orders",
      "78% reduction in preparation lag time per station",
      "100% synchronized rider pickup dispatch alerts",
      "Multi-brand inventory automatically decremented without race conditions"
    ],
    conclusion: "The platform transformed kitchen throughput, allowing the client to onboard 3 additional food brands into the exact same physical kitchen square footage without adding managerial overhead."
  };

  const studies = [
    {
      id: "study-biometric",
      title: "Attendance AI: Sub-400ms Biometric Edge Inference with Anti-Spoofing",
      category: "Computer Vision",
      client: "Multi-Site Industrial Workforce",
      url: "https://attendance.aparaitech.org/",
      desc: "Developed an on-device facial recognition attendance platform with 3D infrared liveness detection, edge neural caching, and automated shift-differential calculation.",
      tags: ["TensorFlow", "Computer Vision", "React Native", "PostgreSQL"],
      metrics: [
        { label: "Inference Speed", value: "<400ms" },
        { label: "Accuracy", value: "99.8%" },
        { label: "Daily Check-ins", value: "5k+" }
      ],
      challenge: "Manual fingerprint and card check-ins caused shift change bottlenecks and buddy-punching, while traditional cloud vision APIs suffered from bandwidth limits in basement factories.",
      solution: "Engineered quantized edge vision models that run directly on rugged Android tablets. Embedded passive 3D liveness detection to eliminate photo and video spoofing attempts, syncing encrypted embeddings to a central database.",
      architecture: [
        "Edge Camera Feed → MTCNN Face Detection Pipeline",
        "On-device Embedding Extraction (MobileNetV3 Backbone)",
        "Local Vector Cosine Similarity (<100ms) with Offline Support",
        "Batched Asynchronous Event Sync to Hinjawadi Cloud Backend"
      ],
      results: [
        "Eliminated 100% of proxy check-ins across 5,000+ workers",
        "Sub-second queue turnaround during 8:00 AM shift changes",
        "Seamless offline mode when factory WAN links fail"
      ],
      conclusion: "Reduced administrative payroll calculation labor from 4 days a month to under 15 minutes of automated reconciliation."
    },
    {
      id: "study-apnastore",
      title: "ApnaStore: High-Throughput Omnichannel Catalog & WhatsApp Checkout",
      category: "Omnichannel Commerce",
      client: "Regional Wholesale Distribution Network",
      url: "https://apnastore.aparaitech.org/",
      desc: "Re-architected an offline distribution warehouse into a lightning-fast omnichannel retail engine with sub-50ms catalog queries and automated WhatsApp order dispatch.",
      tags: ["Next.js", "Redis", "Kafka", "PostgreSQL", "TailwindCSS"],
      metrics: [
        { label: "Catalog P99", value: "<45ms" },
        { label: "Catalog SKUs", value: "100k+" },
        { label: "Inventory Drift", value: "0.0%" }
      ],
      challenge: "Discrepancies between warehouse inventory and walk-in counter sales led to frequent out-of-stock ordering, while existing e-commerce templates were too bloated for low-bandwidth mobile devices.",
      solution: "Built a headless catalog engine utilizing Redis in-memory indexing for instantaneous product filtering. Integrated direct WhatsApp Cloud API webhooks so tier-2 customers can browse and place bulk orders with zero friction.",
      architecture: [
        "Headless Next.js Frontend with ISR (Incremental Static Regeneration)",
        "In-Memory Redis Hash Index for 100,000+ SKU Catalog",
        "Kafka Transaction Log for Distributed Inventory Lock Allocation",
        "WhatsApp Business Webhook Engine with automated PDF invoices"
      ],
      results: [
        "99.98% inventory accuracy between warehouse pallets and online store",
        "Sub-50ms search response even on 3G cellular connections",
        "Over 45% uplift in repeat monthly B2B order frequency"
      ],
      conclusion: "Enabled non-technical shop managers to manage catalog updates from mobile phones with immediate network-wide synchronization."
    },
    {
      id: "study-servicehub",
      title: "ServiceHub: Field Operations Dispatch Matrix & Mobile Proof-of-Work",
      category: "Field Operations",
      client: "Enterprise Facility Maintenance Provider",
      url: "http://servicehub.aparaitech.org/",
      desc: "Engineered an automated technician dispatch engine with geospatial proximity routing, offline digital signatures, and automated customer status telemetry.",
      tags: ["React", "Node.js", "MongoDB", "Leaflet Maps", "Docker"],
      metrics: [
        { label: "Dispatch Response", value: "Sub-30m" },
        { label: "Travel Redux", value: "-34%" },
        { label: "SLA Adherence", value: "99.4%" }
      ],
      challenge: "Technicians were dispatched manually over phone calls, causing delayed emergency responses, erratic drive times, and zero verified proof of job completion.",
      solution: "Created an automated dispatch matrix calculating shortest travel time using open-source routing algorithms. Built an offline-first PWA for field technicians to capture customer signatures, job photos, and geo-timestamps.",
      architecture: [
        "Central Dispatch Engine with OSRM Geospatial Routing",
        "Worker PWA with IndexedDB Offline Storage and Background Sync",
        "Automated Customer SMS Notification Gateway with Real-time Map",
        "Executive SLA Monitoring Dashboard with Red Alert Breach Triggers"
      ],
      results: [
        "Reduced average travel time per technician by 34%",
        "30-minute emergency site arrival SLA achieved 99.4% of the time",
        "100% digital proof of work eliminating payment disputes"
      ],
      conclusion: "Lowered operational vehicle fuel costs while enhancing enterprise customer satisfaction ratings to 4.9/5."
    },
    {
      id: "study-svpm",
      title: "SVPM Alumni Portal: Secure Federated Directory for 15,000+ Graduates",
      category: "Institutional",
      client: "SVPM Educational Institutes",
      url: "http://svpmalumni.aparaitech.org/",
      desc: "Constructed an institutional alumni networking platform with role-based identity verification, automated mentorship matchmaking, and fundraising ledger tracking.",
      tags: ["React", "GraphQL", "Node.js", "PostgreSQL", "AWS S3"],
      metrics: [
        { label: "Active Members", value: "15,000+" },
        { label: "Mentorship Matches", value: "1,200+" },
        { label: "Uptime", value: "99.9%" }
      ],
      challenge: "Legacy paper and spreadsheet alumni rosters were fragmented, leaving graduated students disconnected from active campus initiatives and donation drives.",
      solution: "Developed a modern, responsive web portal with student ID auto-validation, private direct messaging, mentorship request channels, and secure payment processing.",
      architecture: [
        "GraphQL API Gateway with Federated Institutional Resolvers",
        "Encrypted Document & Certificate Storage on Amazon S3",
        "Role-Based Access Control (Alumni, Students, Faculty, Admins)",
        "Automated Digest & Event Notification Engine"
      ],
      results: [
        "Onboarded over 15,000 alumni across 20+ countries",
        "Over 1,200 active student-to-alumni career mentorship connections",
        "100% transparent tracking of alumni endowment contributions"
      ],
      conclusion: "Created a self-sustaining institutional community that now drives annual scholarship funds and graduate hiring pipelines."
    },
    {
      id: "study-lms",
      title: "Aparaitech LMS: Scalable Browser-Based Technical Assessment Engine",
      category: "EdTech & Learning",
      client: "Enterprise Technology Academy",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      desc: "Engineered an interactive engineering training platform featuring embedded Monaco code sandboxes, automated syntax validation, and randomized assessment banks.",
      tags: ["React", "TypeScript", "Monaco Editor", "Node.js", "TailwindCSS"],
      metrics: [
        { label: "Eval Latency", value: "<350ms" },
        { label: "Concurrent Devs", value: "250+" },
        { label: "Course Modules", value: "40+" }
      ],
      challenge: "Evaluating engineering candidates through traditional multiple-choice questions was failing to measure actual coding competence, while manual code reviews took days.",
      solution: "Integrated Microsoft Monaco Editor with isolated client-side WebAssembly runtimes and backend validation microservices to assess real code execution in real time.",
      architecture: [
        "In-Browser Monaco Code Editor with Intelligent Autocomplete",
        "Sandboxed Test Runner executing Jest/Mocha assertions in real time",
        "Dynamic MCQ Question Engine with Anti-Cheating tab blur detection",
        "Automated Verifiable Certificate Generation with QR Verification"
      ],
      results: [
        "Reduced technical screening cycle from 3 days to under 30 minutes",
        "Instant code evaluation feedback for over 250 concurrent engineers",
        "Comprehensive skill breakdown reports for corporate hiring managers"
      ],
      conclusion: "Enabled seamless onboarding and upskilling of dozens of software engineers within days of joining."
    }
  ];

  const categories = ["All", "Distributed Systems", "Computer Vision", "Omnichannel Commerce", "Field Operations", "Institutional", "EdTech & Learning"];

  const filteredStudies = activeCategory === "All"
    ? studies
    : studies.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-24 pb-20">
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
              TECHNICAL ARCHITECTURE // IN-DEPTH CASE STUDIES
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Engineering Under the Hood. Real Problems Solved.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Examine the engineering blueprints, latency budgets, database models, and operational tradeoffs behind Aparaitech Software's production platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-[#D4FD53]" />
              Architectural Blueprints
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00E5C9]" />
              Sub-Millisecond SLAs
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Server className="w-3.5 h-3.5 text-[#D4FD53]" />
              Event-Driven Backends
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Request System Architecture Review</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Call Pune CoE: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDY BANNER */}
      <section className="py-16 border-b border-[#22242A] bg-[#141518]/70">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-2xl border border-[#22242A] bg-[#0C0D0F] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4FD53]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53]">
                    FEATURED ARCHITECTURE CASE STUDY
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {featuredStudy.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {featuredStudy.title}
                </h2>
                <p className="mt-2 font-mono text-xs text-slate-400">
                  Target Customer: <span className="text-slate-200">{featuredStudy.client}</span>
                </p>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {featuredStudy.desc}
                </p>

                {/* Key Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4 border-y border-[#22242A] py-4">
                  {featuredStudy.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="font-mono text-2xl font-bold text-[#D4FD53]">{m.value}</div>
                      <div className="font-mono text-[11px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredStudy.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#1C1C1E] border border-white/5 font-mono text-xs text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedStudy(featuredStudy)}
                    className="inline-flex items-center gap-2 rounded bg-[#D4FD53] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#0C0D0F] hover:brightness-105 transition-all"
                  >
                    <span>Read Full Architecture Breakdown</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href={featuredStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-white"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4FD53]" />
                  </a>
                </div>
              </div>

              {/* Terminal / Code Representation */}
              <div className="lg:col-span-5 rounded-xl border border-[#22242A] bg-[#141518] p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#22242A] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#D4FD53]" />
                    <span>kds-order-stream.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">● LIVE WORKER</span>
                </div>
                <div className="mt-3 space-y-1.5 text-slate-300">
                  <p className="text-slate-500">// Event routing via Redis Pub/Sub</p>
                  <p><span className="text-purple-400">const</span> sub = <span className="text-blue-400">redis</span>.duplicate();</p>
                  <p><span className="text-purple-400">await</span> sub.subscribe(<span className="text-[#D4FD53]">'kds:orders:live'</span>);</p>
                  <p className="text-slate-500 mt-2">// Sub-15ms broadcast to station terminals</p>
                  <p>sub.on(<span className="text-[#D4FD53]">'message'</span>, (channel, raw) =&gt; &#123;</p>
                  <p className="pl-4">const order = JSON.parse(raw);</p>
                  <p className="pl-4">wsGateway.broadcastToStation(order.stationId, order);</p>
                  <p className="pl-4 text-emerald-400">telemetry.recordDispatchLag(Date.now() - order.ts);</p>
                  <p>&#125;);</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#22242A] flex items-center justify-between text-[11px] text-slate-400">
                  <span>Latency P99: 14.2ms</span>
                  <span>Throughput: 850 msg/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#D4FD53] mb-1">
              SYSTEM REPERTORY
            </div>
            <h3 className="text-2xl font-bold text-white">Production Case Studies</h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#D4FD53] text-[#0C0D0F] font-bold"
                    : "bg-[#141518] text-slate-300 border border-[#22242A] hover:border-slate-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="group flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-6 hover:border-[#D4FD53]/50 transition-all cursor-pointer relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
                    {study.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4FD53] transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-[#D4FD53] transition-colors leading-snug">
                  {study.title}
                </h4>

                <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {study.desc}
                </p>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-[#0C0D0F] p-2.5 border border-[#22242A]">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-mono text-xs font-bold text-[#D4FD53]">{m.value}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#22242A] flex flex-wrap gap-1.5">
                {study.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-[#1C1C1E] border border-white/5 font-mono text-[10px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL: DETAILED ARCHITECTURAL DEEP DIVE */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-[#141518] border border-[#22242A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#D4FD53] uppercase mb-2">
              <Server className="w-4 h-4" />
              <span>{selectedStudy.category} // Architecture Deep Dive</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              {selectedStudy.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-[#22242A]">
              <span>Client: <strong className="text-white">{selectedStudy.client}</strong></span>
              {selectedStudy.url && (
                <a
                  href={selectedStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D4FD53] hover:underline"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-[#0C0D0F] border border-[#22242A] p-4 mb-6">
              {selectedStudy.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-mono font-bold text-[#D4FD53]">{m.value}</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6 text-sm">
              <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                <h3 className="font-mono text-xs uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>The Engineering Challenge</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">{selectedStudy.challenge}</p>
              </div>

              <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                <h3 className="font-mono text-xs uppercase text-[#00E5C9] tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>The Implemented Solution</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">{selectedStudy.solution}</p>
              </div>

              {selectedStudy.architecture && (
                <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                  <h3 className="font-mono text-xs uppercase text-[#D4FD53] tracking-wider mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>Architectural Pipeline</span>
                  </h3>
                  <div className="space-y-2">
                    {selectedStudy.architecture.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 font-mono text-xs text-slate-300">
                        <span className="text-[#D4FD53]">0{idx + 1}.</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantifiable Results */}
              <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                <h3 className="font-mono text-xs uppercase text-emerald-400 tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Production Results</span>
                </h3>
                <div className="space-y-2">
                  {selectedStudy.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedStudy.conclusion && (
                <p className="text-xs text-slate-400 italic border-l-2 border-[#D4FD53] pl-3 py-1">
                  "{selectedStudy.conclusion}"
                </p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedStudy(null);
                  setIsConsultModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded bg-[#D4FD53] px-6 py-2.5 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Similar Architecture</span>
              </button>
              <button
                onClick={() => setSelectedStudy(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. CONSULTATION MODAL */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#22242A] bg-[#141518] p-8 shadow-2xl">
            <button
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Pune Hinjawadi CoE Architectural Review</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Schedule Architecture Consultation
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Connect with principal engineers who built and deployed these systems. Direct sync to our leadership schedule sheet.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Vikram Deshmukh"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="vikram@enterprise.com"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Fintech / Retail Enterprise"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Architecture Area</label>
                  <select
                    name="architectureFocus"
                    value={formData.architectureFocus}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="Microservices & Distributed Systems">Microservices & Distributed Systems</option>
                    <option value="Edge AI & Biometrics">Edge AI & Biometrics</option>
                    <option value="High-Throughput E-Commerce">High-Throughput E-Commerce</option>
                    <option value="Field Ops Geospatial Routing">Field Ops Geospatial Routing</option>
                    <option value="Container Orchestration / Kubernetes">Container Orchestration / Kubernetes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Architecture Notes & Specific SLAs</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline current tech stack, peak QPS, latency requirements, or refactoring scope..."
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#D4FD53] py-3 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Logging Consultation..." : "Confirm & Schedule Deep Dive"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
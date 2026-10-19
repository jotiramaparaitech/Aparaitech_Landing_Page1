// src/components/pages/Customers/CaseStudies.jsx
import React, { useState } from "react";
import {
  ExternalLink,
  Activity,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Server,
  ArrowUpRight,
  Terminal,
  Cpu,
  Clock,
  ChevronRight,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet } from "../../../utils/sheetService";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    architectureFocus: "Microservices & Distributed Systems",
    timeline: "Within 30 Days",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(
        "Please provide your name, corporate email, and phone number."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: "Technical Architecture Deep Dive",
        source: "Case Studies Page",
      });

      if (result.success) {
        toast.success(
          "Consultation booked! Recorded in executive schedule sheet."
        );

        setIsConsultModalOpen(false);
        setFormData({ ...initialFormData });
      } else {
        toast.error(
          "Booking could not be confirmed. Please contact our team."
        );
        setIsConsultModalOpen(false);
      }
    } catch (err) {
      toast.error(
        "Network error. Please reach out to info@ai.aparaitech.org"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredStudy = {
    id: "featured-cloudkitchen",
    title:
      "CloudKitchen OS: Zero-Drop High-Concurrency Kitchen Display System",
    category: "Distributed Systems",
    client: "Multi-Brand Commercial Kitchen Operators",
    url: "https://cloudkitchen.aparaitech.org/",
    desc: "Migrated fragmented commercial kitchen tablets into an event-driven Kitchen Display System (KDS) powered by Node.js, WebSockets, Redis pub/sub, and PostgreSQL, achieving sub-15s dispatch and 99.99% uptime during rush-hour traffic.",
    tags: [
      "Node.js",
      "WebSockets",
      "Redis Streams",
      "PostgreSQL",
      "React",
      "Docker",
    ],
    metrics: [
      { label: "Dispatch Latency", value: "<15s" },
      { label: "Peak Ticket Loss", value: "0%" },
      { label: "Production SLA", value: "99.99%" },
    ],
    challenge:
      "Commercial cloud kitchens cooking for 5+ food brands simultaneously suffered from lost tickets, order throttling, and desynchronized order statuses between delivery riders and kitchen prep lines during 8 PM peak loads.",
    solution:
      "Aparaitech engineered a decentralized KDS with dual-monitor station routing. We built a WebSocket gateway on top of Redis Pub/Sub streams for atomic order state changes, backed by an offline-resilient local cache ensuring stations keep running even during internet blips.",
    architecture: [
      "Aggregator Ingestion API → Event Stream (Redis/Kafka)",
      "Station Dispatch Worker → Kitchen Screen WebSockets (<20ms latency)",
      "State Machine: Order Received → In Prep → Plated → Dispatched",
      "Telemetry & Audit Ledger storing millisecond-accurate prep metrics",
    ],
    results: [
      "Zero ticket drops across 50,000+ monthly orders",
      "78% reduction in preparation lag time per station",
      "100% synchronized rider pickup dispatch alerts",
      "Multi-brand inventory automatically decremented without race conditions",
    ],
    conclusion:
      "The platform transformed kitchen throughput, allowing the client to onboard 3 additional food brands into the exact same physical kitchen square footage without adding managerial overhead.",
  };

  const studies = [
    {
      id: "study-biometric",
      title:
        "Attendance AI: Sub-400ms Biometric Edge Inference with Anti-Spoofing",
      category: "Computer Vision",
      client: "Multi-Site Industrial Workforce",
      url: "https://attendance.aparaitech.org/",
      desc: "Developed an on-device facial recognition attendance platform with 3D infrared liveness detection, edge neural caching, and automated shift-differential calculation.",
      tags: [
        "TensorFlow",
        "Computer Vision",
        "React Native",
        "PostgreSQL",
      ],
      metrics: [
        { label: "Inference Speed", value: "<400ms" },
        { label: "Accuracy", value: "99.8%" },
        { label: "Daily Check-ins", value: "5k+" },
      ],
      challenge:
        "Manual fingerprint and card check-ins caused shift change bottlenecks and buddy-punching, while traditional cloud vision APIs suffered from bandwidth limits in basement factories.",
      solution:
        "Engineered quantized edge vision models that run directly on rugged Android tablets. Embedded passive 3D liveness detection to eliminate photo and video spoofing attempts, syncing encrypted embeddings to a central database.",
      architecture: [
        "Edge Camera Feed → MTCNN Face Detection Pipeline",
        "On-device Embedding Extraction (MobileNetV3 Backbone)",
        "Local Vector Cosine Similarity (<100ms) with Offline Support",
        "Batched Asynchronous Event Sync to Hinjawadi Cloud Backend",
      ],
      results: [
        "Eliminated 100% of proxy check-ins across 5,000+ workers",
        "Sub-second queue turnaround during 8:00 AM shift changes",
        "Seamless offline mode when factory WAN links fail",
      ],
      conclusion:
        "Reduced administrative payroll calculation labor from 4 days a month to under 15 minutes of automated reconciliation.",
    },
    {
      id: "study-apnastore",
      title:
        "ApnaStore: High-Throughput Omnichannel Catalog & WhatsApp Checkout",
      category: "Omnichannel Commerce",
      client: "Regional Wholesale Distribution Network",
      url: "https://apnastore.aparaitech.org/",
      desc: "Re-architected an offline distribution warehouse into a lightning-fast omnichannel retail engine with sub-50ms catalog queries and automated WhatsApp order dispatch.",
      tags: [
        "Next.js",
        "Redis",
        "Kafka",
        "PostgreSQL",
        "TailwindCSS",
      ],
      metrics: [
        { label: "Catalog P99", value: "<45ms" },
        { label: "Catalog SKUs", value: "100k+" },
        { label: "Inventory Drift", value: "0.0%" },
      ],
      challenge:
        "Discrepancies between warehouse inventory and walk-in counter sales led to frequent out-of-stock ordering, while existing e-commerce templates were too bloated for low-bandwidth mobile devices.",
      solution:
        "Built a headless catalog engine utilizing Redis in-memory indexing for instantaneous product filtering. Integrated direct WhatsApp Cloud API webhooks so tier-2 customers can browse and place bulk orders with zero friction.",
      architecture: [
        "Headless Next.js Frontend with ISR (Incremental Static Regeneration)",
        "In-Memory Redis Hash Index for 100,000+ SKU Catalog",
        "Kafka Transaction Log for Distributed Inventory Lock Allocation",
        "WhatsApp Business Webhook Engine with automated PDF invoices",
      ],
      results: [
        "99.98% inventory accuracy between warehouse pallets and online store",
        "Sub-50ms search response even on 3G cellular connections",
        "Over 45% uplift in repeat monthly B2B order frequency",
      ],
      conclusion:
        "Enabled non-technical shop managers to manage catalog updates from mobile phones with immediate network-wide synchronization.",
    },
    {
      id: "study-servicehub",
      title:
        "ServiceHub: Field Operations Dispatch Matrix & Mobile Proof-of-Work",
      category: "Field Operations",
      client: "Enterprise Facility Maintenance Provider",
      url: "http://servicehub.aparaitech.org/",
      desc: "Engineered an automated technician dispatch engine with geospatial proximity routing, offline digital signatures, and automated customer status telemetry.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Leaflet Maps",
        "Docker",
      ],
      metrics: [
        { label: "Dispatch Response", value: "Sub-30m" },
        { label: "Travel Redux", value: "-34%" },
        { label: "SLA Adherence", value: "99.4%" },
      ],
      challenge:
        "Technicians were dispatched manually over phone calls, causing delayed emergency responses, erratic drive times, and zero verified proof of job completion.",
      solution:
        "Created an automated dispatch matrix calculating shortest travel time using open-source routing algorithms. Built an offline-first PWA for field technicians to capture customer signatures, job photos, and geo-timestamps.",
      architecture: [
        "Central Dispatch Engine with OSRM Geospatial Routing",
        "Worker PWA with IndexedDB Offline Storage and Background Sync",
        "Automated Customer SMS Notification Gateway with Real-time Map",
        "Executive SLA Monitoring Dashboard with Red Alert Breach Triggers",
      ],
      results: [
        "Reduced average travel time per technician by 34%",
        "30-minute emergency site arrival SLA achieved 99.4% of the time",
        "100% digital proof of work eliminating payment disputes",
      ],
      conclusion:
        "Lowered operational vehicle fuel costs while enhancing enterprise customer satisfaction ratings to 4.9/5.",
    },
    {
      id: "study-svpm",
      title:
        "SVPM Alumni Portal: Secure Federated Directory for 15,000+ Graduates",
      category: "Institutional",
      client: "SVPM Educational Institutes",
      url: "http://svpmalumni.aparaitech.org/",
      desc: "Constructed an institutional alumni networking platform with role-based identity verification, automated mentorship matchmaking, and fundraising ledger tracking.",
      tags: [
        "React",
        "GraphQL",
        "Node.js",
        "PostgreSQL",
        "AWS S3",
      ],
      metrics: [
        { label: "Active Members", value: "15,000+" },
        { label: "Mentorship Matches", value: "1,200+" },
        { label: "Uptime", value: "99.9%" },
      ],
      challenge:
        "Legacy paper and spreadsheet alumni rosters were fragmented, leaving graduated students disconnected from active campus initiatives and donation drives.",
      solution:
        "Developed a modern, responsive web portal with student ID auto-validation, private direct messaging, mentorship request channels, and secure payment processing.",
      architecture: [
        "GraphQL API Gateway with Federated Institutional Resolvers",
        "Encrypted Document & Certificate Storage on Amazon S3",
        "Role-Based Access Control (Alumni, Students, Faculty, Admins)",
        "Automated Digest & Event Notification Engine",
      ],
      results: [
        "Onboarded over 15,000 alumni across 20+ countries",
        "Over 1,200 active student-to-alumni career mentorship connections",
        "100% transparent tracking of alumni endowment contributions",
      ],
      conclusion:
        "Created a self-sustaining institutional community that now drives annual scholarship funds and graduate hiring pipelines.",
    },
    {
      id: "study-lms",
      title:
        "Aparaitech LMS: Scalable Browser-Based Technical Assessment Engine",
      category: "EdTech & Learning",
      client: "Enterprise Technology Academy",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      desc: "Engineered an interactive engineering training platform featuring embedded Monaco code sandboxes, automated syntax validation, and randomized assessment banks.",
      tags: [
        "React",
        "TypeScript",
        "Monaco Editor",
        "Node.js",
        "TailwindCSS",
      ],
      metrics: [
        { label: "Eval Latency", value: "<350ms" },
        { label: "Concurrent Devs", value: "250+" },
        { label: "Course Modules", value: "40+" },
      ],
      challenge:
        "Evaluating engineering candidates through traditional multiple-choice questions was failing to measure actual coding competence, while manual code reviews took days.",
      solution:
        "Integrated Microsoft Monaco Editor with isolated client-side WebAssembly runtimes and backend validation microservices to assess real code execution in real time.",
      architecture: [
        "In-Browser Monaco Code Editor with Intelligent Autocomplete",
        "Sandboxed Test Runner executing Jest/Mocha assertions in real time",
        "Dynamic MCQ Question Engine with Anti-Cheating tab blur detection",
        "Automated Verifiable Certificate Generation with QR Verification",
      ],
      results: [
        "Reduced technical screening cycle from 3 days to under 30 minutes",
        "Instant code evaluation feedback for over 250 concurrent engineers",
        "Comprehensive skill breakdown reports for corporate hiring managers",
      ],
      conclusion:
        "Enabled seamless onboarding and upskilling of dozens of software engineers within days of joining.",
    },
  ];

  const categories = [
    "All",
    "Distributed Systems",
    "Computer Vision",
    "Omnichannel Commerce",
    "Field Operations",
    "Institutional",
    "EdTech & Learning",
  ];

  const filteredStudies =
    activeCategory === "All"
      ? studies
      : studies.filter((study) => study.category === activeCategory);

  const openConsultation = () => {
    setSelectedStudy(null);
    setIsConsultModalOpen(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-[#0B1220] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10";

  const labelClasses =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-sky-200 selection:text-slate-900 dark:bg-[#0B1220] dark:text-slate-100 dark:selection:bg-sky-400/30 dark:selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pb-20 pt-24 dark:border-slate-800 dark:bg-[#0B1220]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(#93C5FD 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Technical Architecture / In-Depth Case Studies
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(1.75rem,5vw,4.25rem)] font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
            Engineering Under the Hood.{" "}
            <span className="text-sky-600 dark:text-sky-300">
              Real Problems Solved.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Explore the engineering blueprints, latency budgets, database
            models, and operational trade-offs behind Aparaitech Software's
            platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { icon: Cpu, text: "Architectural Blueprints" },
              { icon: Clock, text: "Performance Engineering" },
              { icon: Server, text: "Event-Driven Backends" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
              >
                <Icon className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                {text}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/15 transition hover:bg-sky-700 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
            >
              <Calendar className="h-4 w-4" />
              Request Architecture Review
              <ChevronRight className="h-4 w-4" />
            </button>

            <a
              href="tel:+918261840199"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:bg-slate-800"
            >
              Call Pune CoE: +91 82618 40199
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="border-b border-slate-200 bg-sky-50/60 py-16 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-sm dark:border-slate-700/70 dark:bg-[#111C30] md:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-400/10" />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                    Featured Architecture Case Study
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {featuredStudy.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-slate-950 dark:text-white md:text-3xl">
                  {featuredStudy.title}
                </h2>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Target customer:{" "}
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {featuredStudy.client}
                  </span>
                </p>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {featuredStudy.desc}
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 border-y border-slate-200 py-5 dark:border-slate-700">
                  {featuredStudy.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-mono text-xl font-bold text-sky-700 dark:text-sky-300 sm:text-2xl">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase leading-relaxed tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedStudy(featuredStudy)}
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-sky-700 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
                  >
                    Read Architecture Breakdown
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <a
                    href={featuredStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-300"
                  >
                    Launch Live Platform
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* CODE TERMINAL */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 font-mono text-xs shadow-sm dark:border-slate-700 dark:bg-[#0B1220] lg:col-span-5">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Terminal className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                    <span>kds-order-stream.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                    ● WORKER
                  </span>
                </div>

                <div className="space-y-2 overflow-x-auto p-4 text-slate-700 dark:text-slate-300">
                  <p className="text-slate-400 dark:text-slate-500">
                    // Event routing via Redis Pub/Sub
                  </p>
                  <p>
                    <span className="text-violet-600 dark:text-violet-400">
                      const
                    </span>{" "}
                    sub ={" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      redis
                    </span>
                    .duplicate();
                  </p>
                  <p>
                    <span className="text-violet-600 dark:text-violet-400">
                      await
                    </span>{" "}
                    sub.subscribe(
                    <span className="text-sky-700 dark:text-sky-300">
                      'kds:orders:live'
                    </span>
                    );
                  </p>
                  <p className="pt-2 text-slate-400 dark:text-slate-500">
                    // Broadcast to station terminals
                  </p>
                  <p>
                    sub.on(
                    <span className="text-sky-700 dark:text-sky-300">
                      'message'
                    </span>
                    , (channel, raw) =&gt; {"{"}
                  </p>
                  <p className="pl-4">const order = JSON.parse(raw);</p>
                  <p className="pl-4 break-all">
                    wsGateway.broadcastToStation(order.stationId, order);
                  </p>
                  <p className="pl-4 text-emerald-600 dark:text-emerald-400">
                    telemetry.recordDispatchLag(Date.now() - order.ts);
                  </p>
                  <p>{"});"}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 px-4 py-3 text-[10px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  <span>Latency P99: 14.2ms</span>
                  <span>Throughput: 850 msg/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
              <Layers className="h-4 w-4" />
              System Repertory
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              Production Case Studies
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Explore projects by engineering domain.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                  activeCategory === category
                    ? "border-sky-600 bg-sky-600 text-white dark:border-sky-300 dark:bg-sky-300 dark:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.map((study) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setSelectedStudy(study)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 focus:outline-none focus:ring-4 focus:ring-sky-100 dark:border-slate-700/70 dark:bg-[#111C30] dark:hover:border-sky-400/50 dark:hover:shadow-sky-950/20 dark:focus:ring-sky-400/10"
            >
              <div className="w-full">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    {study.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-sky-600 dark:group-hover:text-sky-300" />
                </div>

                <h4 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
                  {study.title}
                </h4>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {study.desc}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#0B1220]">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="min-w-0 text-center">
                      <div className="break-words font-mono text-sm font-bold text-sky-700 dark:text-sky-300">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex w-full flex-wrap gap-1.5 border-t border-slate-200 pt-4 dark:border-slate-700">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400">
              No case studies found for this category.
            </p>
          </div>
        )}
      </section>

      {/* ARCHITECTURE DETAILS MODAL */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-[#111C30] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close architecture details"
              onClick={() => setSelectedStudy(null)}
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-3 flex items-center gap-2 pr-10 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              <Server className="h-4 w-4" />
              {selectedStudy.category} / Architecture Deep Dive
            </div>

            <h2
              id="case-study-title"
              className="pr-6 text-2xl font-bold leading-snug text-slate-950 dark:text-white md:text-3xl"
            >
              {selectedStudy.title}
            </h2>

            <div className="mb-6 mt-4 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
              <span>
                Client:{" "}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  {selectedStudy.client}
                </strong>
              </span>

              {selectedStudy.url && (
                <a
                  href={selectedStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-medium text-sky-700 hover:underline dark:text-sky-300"
                >
                  Launch Live Platform
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* METRICS */}
            <div className="mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-sky-50/70 p-4 dark:border-slate-700 dark:bg-[#0B1220] sm:grid-cols-3">
              {selectedStudy.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="font-mono text-xl font-bold text-sky-700 dark:text-sky-300 sm:text-2xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-sm">
              {/* CHALLENGE */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-[#0B1220]">
                <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300">
                  <Activity className="h-4 w-4" />
                  Engineering Challenge
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedStudy.challenge}
                </p>
              </div>

              {/* SOLUTION */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-[#0B1220]">
                <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                  <Cpu className="h-4 w-4" />
                  Implemented Solution
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedStudy.solution}
                </p>
              </div>

              {/* ARCHITECTURE */}
              {selectedStudy.architecture && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-[#0B1220]">
                  <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    <Terminal className="h-4 w-4" />
                    Architectural Pipeline
                  </h3>

                  <div className="space-y-3">
                    {selectedStudy.architecture.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 font-mono text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <span className="shrink-0 font-semibold text-sky-700 dark:text-sky-300">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RESULTS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-[#0B1220]">
                <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Key Results
                </h3>

                <div className="space-y-3">
                  {selectedStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONCLUSION */}
              {selectedStudy.conclusion && (
                <blockquote className="rounded-r-xl border-l-2 border-sky-400 bg-sky-50/70 py-3 pl-4 pr-3 text-sm italic leading-relaxed text-slate-600 dark:bg-sky-400/5 dark:text-slate-300">
                  {selectedStudy.conclusion}
                </blockquote>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-slate-700">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-sky-700 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                <Calendar className="h-4 w-4" />
                Discuss Similar Architecture
              </button>

              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONSULTATION MODAL */}
      {isConsultModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => {
            if (!isSubmitting) setIsConsultModalOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-[#111C30] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close consultation form"
              onClick={() => setIsConsultModalOpen(false)}
              disabled={isSubmitting}
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-3 flex items-center gap-2 pr-8 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              <Calendar className="h-4 w-4" />
              Pune Hinjawadi CoE
            </div>

            <h3
              id="consultation-title"
              className="text-2xl font-bold text-slate-950 dark:text-white"
            >
              Schedule an Architecture Consultation
            </h3>

            <p className="mb-6 mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Tell us about your technical requirements so our team can
              understand your architecture needs.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company or organization"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="architectureFocus" className={labelClasses}>
                  Architecture Area
                </label>
                <select
                  id="architectureFocus"
                  name="architectureFocus"
                  value={formData.architectureFocus}
                  onChange={handleInputChange}
                  className={inputClasses}
                >
                  <option value="Microservices & Distributed Systems">
                    Microservices & Distributed Systems
                  </option>
                  <option value="Edge AI & Biometrics">
                    Edge AI & Biometrics
                  </option>
                  <option value="High-Throughput E-Commerce">
                    High-Throughput E-Commerce
                  </option>
                  <option value="Field Ops Geospatial Routing">
                    Field Ops Geospatial Routing
                  </option>
                  <option value="Container Orchestration / Kubernetes">
                    Container Orchestration / Kubernetes
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClasses}>
                  Expected Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={inputClasses}
                >
                  <option value="Immediately">Immediately</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Within 3 Months">Within 3 Months</option>
                  <option value="Exploring Options">Exploring Options</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className={labelClasses}>
                  Architecture Notes & Specific Requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Describe your current tech stack, performance requirements, or project goals..."
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/15 transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
              >
                <Send className="h-4 w-4" />
                {isSubmitting
                  ? "Submitting Consultation..."
                  : "Confirm Consultation Request"}
              </button>

              <p className="text-center text-xs leading-relaxed text-slate-400 dark:text-slate-500">
                Your information will be used to respond to your consultation
                request.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
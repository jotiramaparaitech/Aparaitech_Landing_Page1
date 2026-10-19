// src/components/Cloud.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Database,
  Cpu,
  Shield,
  Network,
  Boxes,
  Sparkles,
  ArrowUpRight,
  HardDrive,
  CloudLightning,
  Lock,
} from "lucide-react";

const cloudData = {
  Storage: {
    icon: HardDrive,
    desc: "Reliable, scalable storage solutions with automated replication, fast access, and intelligent data lifecycle management.",
    items: [
      {
        name: "Archive Cold Storage",
        spec: "High-durability archival storage with automated lifecycle tiering.",
      },
      {
        name: "Continuous Automated Backup",
        spec: "Point-in-time recovery, scheduled backups, and immutable snapshots.",
      },
      {
        name: "NVMe Block Storage",
        spec: "High-performance block storage for latency-sensitive applications.",
      },
      {
        name: "Distributed File Storage",
        spec: "Shared file systems with NFS and SMB access support.",
      },
      {
        name: "S3-Compatible Object Store",
        spec: "Scalable object storage with encryption and caching options.",
      },
      {
        name: "Parallel High-Throughput IO",
        spec: "High-throughput storage architecture for AI workloads and large datasets.",
      },
    ],
  },

  Compute: {
    icon: Cpu,
    desc: "Flexible compute infrastructure, from general-purpose virtual machines to GPU-powered AI workloads.",
    items: [
      {
        name: "High-Density GPU Clusters",
        spec: "GPU infrastructure for model training, inference, and accelerated computing.",
      },
      {
        name: "Elastic Auto-Scaling VM Nodes",
        spec: "Automatically scale compute resources based on workload demand.",
      },
      {
        name: "Bare Metal Dedicated Servers",
        spec: "Dedicated physical infrastructure for performance-intensive applications.",
      },
      {
        name: "Serverless Event Triggers",
        spec: "Run event-driven functions without managing underlying servers.",
      },
    ],
  },

  Database: {
    icon: Database,
    desc: "Scalable relational, NoSQL, caching, and vector database infrastructure for modern applications.",
    items: [
      {
        name: "Enterprise PostgreSQL & MySQL",
        spec: "Managed relational databases with replication and automated recovery options.",
      },
      {
        name: "Distributed NoSQL Engine",
        spec: "Flexible data models designed for horizontally scalable applications.",
      },
      {
        name: "In-Memory Redis Cache Cluster",
        spec: "Fast caching for sessions, frequently accessed data, and application responses.",
      },
      {
        name: "Vector Database Engine",
        spec: "Embedding storage and similarity search for retrieval-augmented generation pipelines.",
      },
    ],
  },

  Container: {
    icon: Boxes,
    desc: "Deploy and manage containerized applications using orchestration, automated scaling, and resilient deployment workflows.",
    items: [
      {
        name: "Managed Kubernetes",
        spec: "Container orchestration with workload management and deployment automation.",
      },
      {
        name: "Private Container Registry",
        spec: "Centralized image storage with access control and vulnerability scanning integrations.",
      },
      {
        name: "Service Mesh & Gateway",
        spec: "Service-to-service communication, traffic management, and secure connections.",
      },
      {
        name: "Microservice Auto-Healing",
        spec: "Health checks and automatic workload recovery when configured conditions are met.",
      },
    ],
  },

  Networking: {
    icon: Network,
    desc: "Secure, scalable networking with traffic distribution, private connectivity, and edge delivery capabilities.",
    items: [
      {
        name: "Virtual Private Cloud",
        spec: "Isolated cloud networking with configurable subnets and routing.",
      },
      {
        name: "Global Load Balancer",
        spec: "Distribute incoming application traffic across available services.",
      },
      {
        name: "Global CDN & Edge Compute",
        spec: "Deliver static and dynamic content closer to users.",
      },
      {
        name: "Dedicated Cloud Interconnect",
        spec: "Private connectivity options between enterprise networks and cloud infrastructure.",
      },
    ],
  },

  Security: {
    icon: Shield,
    desc: "Protect cloud workloads with identity governance, network defenses, encryption, and security monitoring.",
    items: [
      {
        name: "Identity & Access Management",
        spec: "Role-based permissions, least-privilege access, and identity policies.",
      },
      {
        name: "DDoS Protection",
        spec: "Traffic monitoring and mitigation options for distributed denial-of-service attacks.",
      },
      {
        name: "Cloud Firewall & WAF",
        spec: "Network filtering and web application protection against common attack patterns.",
      },
      {
        name: "Hardware Security Modules",
        spec: "Dedicated cryptographic key management and hardware-backed security options.",
      },
    ],
  },

  "AI / ML": {
    icon: Sparkles,
    desc: "Build and deploy AI applications with model serving, inference optimization, vector search, and operational monitoring.",
    items: [
      {
        name: "Multi-Model Routing",
        spec: "Route requests between configured AI models based on application requirements.",
      },
      {
        name: "Private LLM Hosting",
        spec: "Deploy language models in controlled environments with configurable data access.",
      },
      {
        name: "Distributed Inference Engine",
        spec: "Optimize model serving with batching and efficient GPU utilization.",
      },
      {
        name: "AI Telemetry & Guardrails",
        spec: "Monitor AI requests, apply configurable safety checks, and maintain audit logs.",
      },
    ],
  },
};

const projects = [
  {
    category: "MULTI-BRAND RESTAURANTS",
    title: "Cloud Kitchen AI",
    description:
      "A restaurant operations platform designed to coordinate orders, kitchen workflows, and delivery operations across connected services.",
    url: "https://cloudkitchen.aparaitech.org/",
  },
  {
    category: "BIOMETRIC IDENTITY SAAS",
    title: "Attendance SaaS",
    description:
      "An attendance management platform focused on identity verification, attendance records, and streamlined workforce operations.",
    url: "https://attendance.aparaitech.org/",
  },
  {
    category: "HIGH-VOLUME E-COMMERCE",
    title: "APNA Store",
    description:
      "An e-commerce platform focused on product discovery, inventory workflows, catalog management, and checkout experiences.",
    url: "https://apnastore.aparaitech.org/",
  },
];

const Cloud = () => {
  const [active, setActive] = useState("Storage");
  const ActiveIcon = cloudData[active].icon;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-[#0B1220] dark:text-slate-100">
      {/* 1. HERO SECTION */}

      <section className="relative border-b border-slate-200 py-20 transition-colors duration-300 dark:border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#93C5FD 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10"
        />

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-3 w-3 rounded-sm bg-sky-600 dark:bg-sky-300" />

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Cloud Platforms & Infrastructure
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-tight tracking-tight text-slate-950 dark:text-white">
            Enterprise cloud architecture built for AI & massive scale.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            From high-performance storage and scalable compute to Kubernetes
            infrastructure and AI inference, build resilient cloud foundations
            designed around your business needs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 font-mono text-xs text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Enterprise-Ready Infrastructure
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 font-mono text-xs text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              <Lock className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
              Security-Focused Architecture
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 font-mono text-xs text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              <CloudLightning className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
              Scalable Cloud Services
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CLOUD ARCHITECTURE */}

      <section className="border-b border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Explore Our Capabilities
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              Cloud infrastructure, organized around your needs.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Explore our infrastructure capabilities across storage, compute,
              databases, networking, security, containers, and AI.
            </p>
          </div>

          {/* Category Tabs */}

          <div
            className="flex flex-wrap gap-2 border-b border-slate-200 pb-6 dark:border-slate-800"
            role="tablist"
            aria-label="Cloud service categories"
          >
            {Object.keys(cloudData).map((cat) => {
              const isActive = active === cat;

              return (
                <button
                  key={cat}
                  id={`cloud-tab-${cat.replace(/[^a-zA-Z0-9]/g, "-")}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="cloud-category-panel"
                  onClick={() => setActive(cat)}
                  className={
                    isActive
                      ? "rounded-lg bg-sky-600 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/15 transition-all dark:bg-sky-300 dark:text-slate-950"
                      : "rounded-lg border border-slate-200 bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-slate-600 transition-all hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-sky-200"
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Active Category */}

          <div
            id="cloud-category-panel"
            role="tabpanel"
            aria-labelledby={`cloud-tab-${active.replace(/[^a-zA-Z0-9]/g, "-")}`}
            className="pt-10"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 dark:border-sky-400/20 dark:bg-sky-400/10">
                <ActiveIcon className="h-5 w-5 text-sky-700 dark:text-sky-300" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                {active} Architecture
              </h2>
            </div>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {cloudData[active].desc}
            </p>

            {/* Service Cards */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {cloudData[active].items.map((item) => (
                <article
                  key={item.name}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 dark:border-slate-700/70 dark:bg-[#111827] dark:hover:border-sky-400/40 dark:hover:shadow-sky-950/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-700 dark:text-slate-100 dark:group-hover:text-sky-300">
                      {item.name}
                    </h3>

                    <span className="shrink-0 rounded-md bg-sky-50 px-2 py-1 font-mono text-[10px] tracking-wider text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                      SERVICE
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.spec}
                  </p>

                  <div className="mt-5 h-px w-full bg-slate-100 transition-colors group-hover:bg-sky-100 dark:bg-slate-800 dark:group-hover:bg-sky-400/20" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTION CASE STUDIES */}

      <section className="border-b border-slate-200 bg-sky-50/70 py-20 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-3 w-3 rounded-sm bg-sky-600 dark:bg-sky-300" />

            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              Project Showcase
            </span>
          </div>

          <h2 className="mb-4 max-w-3xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-slate-950 dark:text-white">
            Technology solutions built for real-world business needs.
          </h2>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Explore selected applications and platforms. Visit each project to
            learn more about its functionality and user experience.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/60 dark:border-slate-700 dark:bg-[#111827] dark:hover:border-sky-400/40 dark:hover:shadow-sky-950/20"
              >
                <span className="mb-3 block font-mono text-[10px] font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-300">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-slate-950 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-700 transition-all hover:border-sky-300 hover:bg-sky-100 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300 dark:hover:border-sky-400/40 dark:hover:bg-sky-400/15"
                >
                  Explore Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION CTA */}

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10"
        />

        <div className="relative mx-auto max-w-[1240px] px-6 text-center lg:px-8">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 dark:border-sky-400/20 dark:bg-sky-400/10">
            <Server className="h-6 w-6 text-sky-700 dark:text-sky-300" />
          </div>

          <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
            Design your next cloud architecture.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Explore cloud and AI solutions designed to support your
            infrastructure, security, and scalability goals.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/generative-ai"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/15 transition-all hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200"
            >
              <span>Explore AI Solutions</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+918261840199"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:bg-slate-800 dark:hover:text-sky-200"
            >
              <span>Call Specialist: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cloud;
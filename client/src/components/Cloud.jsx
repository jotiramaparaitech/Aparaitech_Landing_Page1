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
  CheckCircle2,
  HardDrive,
  CloudLightning,
  Lock
} from "lucide-react";

const cloudData = {
  Storage: {
    icon: <HardDrive className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Diverse data storage offerings with greater reliability, sub-millisecond access, and automated replication.",
    items: [
      { name: "Archive Cold Storage", spec: "99.999999999% Durability, automated lifecycle tiering" },
      { name: "Continuous Automated Backup", spec: "Point-in-time recovery, immutable snapshots" },
      { name: "NVMe Block Storage", spec: "Up to 256,000 IOPS per volume, zero burst penalty" },
      { name: "Distributed File Storage", spec: "POSIX compliant, multi-protocol NFS/SMB access" },
      { name: "S3-Compatible Object Store", spec: "Encrypted at rest, global edge caching" },
      { name: "Parallel High-Throughput IO", spec: "Engineered for LLM weight checkpointing" },
    ],
  },
  Compute: {
    icon: <Cpu className="w-5 h-5 text-[#D4FD53]" />,
    desc: "High-performance compute instances and GPU clusters engineered for enterprise AI and scalable microservices.",
    items: [
      { name: "High-Density GPU Clusters", spec: "NVIDIA H100 / A100 SXM5 with NVLink interconnect" },
      { name: "Elastic Auto-Scaling VM Nodes", spec: "Scale from 0 to 10,000 instances in sub-minute bursts" },
      { name: "Bare Metal Dedicated Servers", spec: "Zero virtualization overhead, direct hypervisor access" },
      { name: "Serverless Event Triggers", spec: "Sub-10ms cold start, pay per 100ms execution" },
    ],
  },
  Database: {
    icon: <Database className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Globally distributed, high-concurrency relational and vector database infrastructure.",
    items: [
      { name: "Enterprise PostgreSQL & MySQL", spec: "Multi-AZ active replication with automated failover" },
      { name: "Distributed NoSQL Engine", spec: "Sub-millisecond read/write latency at petabyte scale" },
      { name: "In-Memory Redis Cache Cluster", spec: "Ultra-fast session routing & semantic caching" },
      { name: "Vector Database Engine (Qdrant/pgvector)", spec: "Billion-scale embedding retrieval for RAG pipelines" },
    ],
  },
  Container: {
    icon: <Boxes className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Run containerized workloads with enterprise Kubernetes orchestration and zero-downtime rolling upgrades.",
    items: [
      { name: "Managed Kubernetes (EKS / GKE)", spec: "Multi-tenant clusters with strict pod security policies" },
      { name: "Private Container Registry", spec: "Automated vulnerability scanning and SBOM attestation" },
      { name: "Service Mesh & Envoy Gateway", spec: "Mutual TLS encryption with traffic shaping & circuit breaking" },
      { name: "Microservice Auto-Healing", spec: "Real-time liveness probes and automated pod restart" },
    ],
  },
  Networking: {
    icon: <Network className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Ultra-low-latency global interconnect, DDoS mitigation, and software-defined private cloud networks.",
    items: [
      { name: "Virtual Private Cloud (VPC)", spec: "Isolated network topology with custom subnet CIDRs" },
      { name: "Global Anycast Load Balancer", spec: "Layer 4 & Layer 7 intelligent packet routing" },
      { name: "Global CDN & Edge Compute", spec: "300+ PoPs worldwide with SSL termination at edge" },
      { name: "Dedicated Direct Cloud Interconnect", spec: "Up to 100 Gbps dedicated dark-fiber pipelines" },
    ],
  },
  Security: {
    icon: <Shield className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Bank-grade cloud defense perimeter, identity governance, and strict compliance automation.",
    items: [
      { name: "Granular Identity & Access (IAM)", spec: "Role-based access control with temporal elevation" },
      { name: "Multi-Terabit DDoS Shield", spec: "Automated volumetric traffic scrubbing" },
      { name: "Next-Gen Cloud Firewall (WAF)", spec: "Zero-day exploit mitigation & OWASP Top 10 defense" },
      { name: "Hardware Security Modules (HSM)", spec: "FIPS 140-2 Level 3 certified customer-managed keys" },
    ],
  },
  "AI / ML": {
    icon: <Sparkles className="w-5 h-5 text-[#D4FD53]" />,
    desc: "Optimized model training, vector indexing, and low-latency inference endpoints.",
    items: [
      { name: "Multi-Model Fallback Routing", spec: "Automated switching between GPT-4o, Claude 3.5, Gemini 1.5" },
      { name: "Private On-Premises LLM Hosting", spec: "Air-gapped Llama 3 weights with zero data egress" },
      { name: "Distributed Inference Engine (vLLM)", spec: "PagedAttention with continuous request batching" },
      { name: "Real-Time Telemetry & Guardrails", spec: "Toxicity filtering, prompt injection defense, audit trails" },
    ],
  },
};

const Cloud = () => {
  const [active, setActive] = useState("Storage");

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-20 pb-20">
        {/* Radial Background Dots */}
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
              CLOUD PLATFORMS & INFRASTRUCTURE
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Enterprise cloud architecture built for AI & massive scale.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            From high-throughput NVMe block storage to distributed Kubernetes clusters and private GPU inference clouds, we engineer fault-tolerant foundations designed for 99.99% uptime.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              99.99% Enterprise SLA
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              ISO 27001 & SOC2 Aligned
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <CloudLightning className="w-3.5 h-3.5 text-[#766DFE]" />
              Zero Data Egress Risk
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CLOUD ARCHITECTURE SUITE */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-10 border-b border-[#22242A]">
            {Object.keys(cloudData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? "px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider bg-[#D4FD53] text-[#0C0D0F] font-bold shadow-md shadow-[#D4FD53]/10"
                    : "px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider bg-[#141518] text-slate-300 border border-[#22242A] hover:border-white/20 hover:text-white transition-all"
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="pt-12">
            <div className="flex items-center gap-3 mb-3">
              {cloudData[active].icon}
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {active} Architecture
              </h2>
            </div>
            <p className="text-slate-400 text-base max-w-2xl mb-10">
              {cloudData[active].desc}
            </p>

            {/* Spec Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cloudData[active].items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4FD53] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono text-xs text-[#766DFE] bg-[#1C1C1E] px-2 py-0.5 rounded">
                      VERIFIED
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed font-mono">
                    {item.spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROVEN PRODUCTION ARCHITECTURE CASE STUDY */}
      <section className="py-20 bg-[#F6F4EE] text-[#0C0D0F] border-b border-[#DDD7CF]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-3 w-3 bg-[#473BFD]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#473BFD] font-bold">
              PRODUCTION DEPLOYMENT PROOF
            </span>
          </div>

          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#0C0D0F] max-w-3xl mb-10">
            Powering mission-critical platforms with zero downtime.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF] shadow-sm">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                MULTI-BRAND RESTAURANTS
              </span>
              <h3 className="text-xl font-bold text-[#0C0D0F]">Cloud Kitchen AI</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Handles thousands of concurrent orders, kitchen prep timing, and rider dispatches across high-throughput distributed microservices.
              </p>
              <a
                href="https://cloudkitchen.aparaitech.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD] hover:underline"
              >
                Inspect Live System ↗
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF] shadow-sm">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                BIOMETRIC IDENTITY SAAS
              </span>
              <h3 className="text-xl font-bold text-[#0C0D0F]">Attendance SaaS</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Real-time facial verification & attendance capture at edge terminals with sub-100ms vector matching against high-security databases.
              </p>
              <a
                href="https://attendance.aparaitech.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD] hover:underline"
              >
                Inspect Live System ↗
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#DDD7CF] shadow-sm">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                HIGH-VOLUME E-COMMERCE
              </span>
              <h3 className="text-xl font-bold text-[#0C0D0F]">APNA Store</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Omnichannel inventory sync, automated product cataloging, and semantic vector search with real-time checkout payment gateways.
              </p>
              <a
                href="https://apnastore.aparaitech.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#473BFD] hover:underline"
              >
                Inspect Live System ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CONSULTATION CTA */}
      <section className="py-24 border-b border-[#22242A] text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Design your enterprise cloud architecture.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Schedule an architectural review sprint with our Pune cloud engineering pod.
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

export default Cloud;

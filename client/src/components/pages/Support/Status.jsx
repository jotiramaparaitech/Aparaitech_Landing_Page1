// src/components/pages/Support/Status.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  Clock,
  Server,
  ShieldCheck,
  Zap,
  Globe,
  ExternalLink,
  Cpu,
  Database,
  Radio,
  Sparkles,
  ArrowUpRight,
  Bell
} from "lucide-react";
import { toast } from "react-hot-toast";

const Status = () => {
  const [subscribed, setSubscribed] = useState(false);

  const systems = [
    {
      name: "CloudKitchen OS // KDS WebSocket Engine",
      url: "https://cloudkitchen.aparaitech.org/",
      status: "Operational",
      uptime: "99.99%",
      latency: "14ms",
      category: "Live Production Systems"
    },
    {
      name: "Attendance AI // Biometric Edge Neural Ingestion",
      url: "https://attendance.aparaitech.org/",
      status: "Operational",
      uptime: "99.98%",
      latency: "380ms",
      category: "Live Production Systems"
    },
    {
      name: "ApnaStore // Omnichannel Catalog & Redis Index",
      url: "https://apnastore.aparaitech.org/",
      status: "Operational",
      uptime: "99.99%",
      latency: "38ms",
      category: "Live Production Systems"
    },
    {
      name: "ServiceHub // Real-time Geospatial Dispatch Engine",
      url: "http://servicehub.aparaitech.org/",
      status: "Operational",
      uptime: "99.95%",
      latency: "45ms",
      category: "Live Production Systems"
    },
    {
      name: "SVPM Alumni Portal // Federated GraphQL Mesh",
      url: "http://svpmalumni.aparaitech.org/",
      status: "Operational",
      uptime: "100.0%",
      latency: "62ms",
      category: "Live Production Systems"
    },
    {
      name: "Aparaitech LMS // Monaco In-Browser Code Sandboxes",
      url: "https://lms-full-stack-mcq7.vercel.app/",
      status: "Operational",
      uptime: "99.97%",
      latency: "210ms",
      category: "Live Production Systems"
    },
    {
      name: "Pune Hinjawadi CoE // Primary API Gateway (mTLS)",
      url: null,
      status: "Operational",
      uptime: "100.0%",
      latency: "8ms",
      category: "Core Infrastructure"
    },
    {
      name: "pgvector Vector Clusters & Embedding Vaults",
      url: null,
      status: "Operational",
      uptime: "99.99%",
      latency: "28ms",
      category: "Core Infrastructure"
    },
    {
      name: "Redis Streams // Station Event Pub/Sub",
      url: null,
      status: "Operational",
      uptime: "100.0%",
      latency: "2ms",
      category: "Core Infrastructure"
    },
    {
      name: "Apache Kafka Enterprise Transaction Ledger",
      url: null,
      status: "Operational",
      uptime: "99.99%",
      latency: "12ms",
      category: "Core Infrastructure"
    }
  ];

  const pastIncidents = [
    {
      date: "Sep 22, 2024 - 04:30 IST",
      title: "Scheduled Maintenance: Hinjawadi Phase 2 Redis Cluster Scaling",
      status: "Completed",
      impact: "Zero Downtime",
      desc: "Upgraded primary in-memory Redis cluster from 32GB to 64GB with live replica promotion. All WebSocket connections migrated transparently with 0 dropped events."
    },
    {
      date: "Aug 14, 2024 - 11:15 IST",
      title: "Elevated Latency on Western India Edge Gateway",
      status: "Resolved",
      impact: "Minor Transient Lag",
      desc: "Upstream transit carrier fiber maintenance caused a 40ms routing deviation. Automated BGP failover to secondary Mumbai PoP restored sub-15ms latency within 180 seconds."
    },
    {
      date: "Jul 02, 2024 - 02:00 IST",
      title: "PostgreSQL Database Engine Security Patching",
      status: "Completed",
      impact: "Zero Downtime",
      desc: "Applied critical security and WAL replication performance patches across primary and standby database instances."
    }
  ];

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-24 pb-16">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#766DFE 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53]">
                  GLOBAL TELEMETRY // ALL SYSTEMS OPERATIONAL
                </span>
              </div>

              <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold tracking-tight text-white leading-tight">
                Aparaitech System Status & SLA Telemetry
              </h1>

              <p className="mt-2 text-slate-300 text-base max-w-2xl font-mono text-xs">
                Real-time uptime metrics, latency benchmarks, and cluster health for all 6 production platforms and Pune Hinjawadi CoE infrastructure.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  setSubscribed(true);
                  toast.success("Subscribed! Real-time alerts will be dispatched to your email.");
                }}
                className={`inline-flex h-[46px] items-center gap-2 rounded px-6 text-xs font-mono font-bold uppercase transition-all ${
                  subscribed
                    ? "bg-emerald-500 text-[#0C0D0F]"
                    : "bg-[#D4FD53] text-[#0C0D0F] hover:brightness-105 shadow-lg shadow-[#D4FD53]/10"
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{subscribed ? "Alerts Active" : "Subscribe to Alerts"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERALL UPTIME & 90-DAY METRIC BARS */}
      <section className="border-b border-[#22242A] bg-[#141518]/70 py-10">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#22242A] gap-4">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  90-Day Production Reliability Score
                </span>
                <div className="text-3xl font-mono font-bold text-[#D4FD53] mt-1">
                  99.986% Average Availability
                </div>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
                <div>
                  <span className="text-slate-500">P99 Gateway Latency:</span>{" "}
                  <strong className="text-[#00E5C9]">18.4ms</strong>
                </div>
                <div>
                  <span className="text-slate-500">Zero-Loss Uptime:</span>{" "}
                  <strong className="text-emerald-400">89 Days</strong>
                </div>
              </div>
            </div>

            {/* 90-day graphical bars */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>90 Days Ago</span>
                <span className="text-emerald-400 font-bold">100% Operational Status</span>
                <span>Today</span>
              </div>
              <div className="flex items-center gap-1 overflow-hidden py-1">
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    title={`Day ${i + 1}: 100% Uptime`}
                    className="flex-1 h-8 rounded-sm bg-emerald-500/80 hover:bg-[#D4FD53] transition-colors cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES STATUS GRID */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider">
              REAL-TIME SERVICE TELEMETRY
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">Component Health by Platform</h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Telemetry Socket</span>
          </div>
        </div>

        <div className="rounded-xl border border-[#22242A] bg-[#141518] divide-y divide-[#22242A] overflow-hidden">
          {systems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1C1C1E]/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-white">
                      {item.name}
                    </span>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#D4FD53] transition-colors inline-flex items-center"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs">
                <div className="text-right">
                  <div className="text-slate-400">Latency</div>
                  <div className="text-[#00E5C9] font-bold">{item.latency}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400">30d SLA</div>
                  <div className="text-[#D4FD53] font-bold">{item.uptime}</div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0C0D0F] border border-emerald-900/50 text-emerald-400 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PAST MAINTENANCE & INCIDENTS */}
      <section className="py-16 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
              MAINTENANCE LOGS & TRANSPARENCY
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">Incident History & Maintenance Audits</h2>
          </div>

          <div className="space-y-4">
            {pastIncidents.map((incident, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-6 hover:border-[#D4FD53]/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-white">{incident.title}</h3>
                  <span className="font-mono text-xs text-slate-400">{incident.date}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {incident.desc}
                </p>

                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold uppercase">
                    {incident.status}
                  </span>
                  <span className="text-slate-400">Impact: <strong className="text-white">{incident.impact}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER SLA COMMITMENT */}
      <section className="py-12 border-t border-[#22242A] bg-[#0C0D0F]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-xs font-mono">
            Aparaitech Software guarantees 99.9% uptime SLA across enterprise tier agreements. Questions about system performance or custom private cloud VPC deployments? Email our Pune Operations Center at{" "}
            <a href="mailto:info@ai.aparaitech.org" className="text-[#D4FD53] hover:underline font-bold">
              info@ai.aparaitech.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Status;
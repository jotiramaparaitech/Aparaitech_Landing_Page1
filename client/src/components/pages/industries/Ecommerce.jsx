// src/components/pages/industries/Ecommerce.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  ArrowUpRight,
  Lock,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Package,
  TrendingUp
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL, exportAppointmentsToCSV } from "../../../utils/sheetService";

const Ecommerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    retailBrand: "",
    commerceFocus: "High-Concurrency Flash-Sale & Inventory Architecture",
    preferredTime: "",
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
        company: formData.retailBrand,
        service: "Enterprise Commerce & Retail AI",
        source: "Ecommerce Industry Page"
      });
      if (result.success) {
        toast.success("Commerce consultation sprint booked! Recorded to executive sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          retailBrand: "",
          commerceFocus: "High-Concurrency Flash-Sale & Inventory Architecture",
          preferredTime: "",
          notes: ""
        });
      } else {
        toast.error("Booking saved locally. Our Pune commerce pod will reach out shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Submission error. Please email direct to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const capabilities = [
    {
      code: "01 / VECTOR SEARCH & RERANKING",
      title: "Semantic Catalog Intelligence",
      desc: "Sub-50ms neural product search across millions of SKUs with hybrid keyword-vector reranking, typo tolerance, and intent-aware visual lookalikes.",
      icon: <Zap className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "02 / CONCURRENCY AT FLASH-SALE PEAKS",
      title: "Queue-Backed Checkout Engines",
      desc: "Optimistic locking and Redis-backed stock reservation pipelines preventing inventory overselling during massive promotional traffic spikes.",
      icon: <Layers className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "03 / DISTRIBUTED FULFILLMENT",
      title: "Omnichannel Warehouse Sync",
      desc: "Unified inventory state connecting dark stores, central fulfillment hubs, retail POS terminals, and third-party delivery dispatch in real time.",
      icon: <Package className="w-5 h-5 text-[#D4FD53]" />
    },
    {
      code: "04 / PROVEN IN PRODUCTION",
      title: "ApnaStore Live Architecture",
      desc: "Our production retail platform operates live B2B and consumer storefronts with integrated WhatsApp checkout, dynamic pricing, and hyper-local routing.",
      icon: <ShoppingBag className="w-5 h-5 text-[#D4FD53]" />
    }
  ];

  const metrics = [
    { label: "Search Latency", value: "< 45ms P99 neural catalog query response" },
    { label: "Peak Concurrency", value: "100,000+ simultaneous checkouts per node" },
    { label: "Inventory Accuracy", value: "100% zero-drift atomic inventory locking" },
    { label: "Live Reference", value: "ApnaStore omnichannel commerce engine" }
  ];

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
              ENTERPRISE INDUSTRIES // OMNICHANNEL COMMERCE
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Unified Retail & High-Concurrency Commerce AI
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Neural product discovery, real-time multi-warehouse inventory synchronization, and zero-downtime flash-sale checkout engines engineered by our Pune Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Powering ApnaStore Platform
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#D4FD53]" />
              Zero Inventory Drift
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Zap className="w-3.5 h-3.5 text-[#00E5C9]" />
              Sub-50ms Vector Search
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Commerce Architecture Sprint</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] block mb-2">
              COMMERCE INFRASTRUCTURE
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Omnichannel Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#D4FD53]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#D4FD53]">{cap.code}</span>
                  <div className="p-2 rounded bg-[#1C1C1E] border border-white/5 group-hover:border-[#D4FD53]/30 transition-all">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-mono">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METRICS */}
      <section className="py-20 border-b border-[#22242A] bg-[#0E0F12]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] block mb-2">
              PRODUCTION METRICS
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Performance Under Heavy Load
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#141518] border border-[#22242A]">
                <h4 className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider mb-2">
                  {m.label}
                </h4>
                <p className="text-sm text-white font-mono">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL APNASTORE ANCHOR */}
      <section className="py-20 border-b border-[#22242A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-xl bg-[#141518] border border-[#22242A] p-8 lg:p-12 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-[0.2em] block mb-3">
                LIVE PRODUCTION BENCHMARK
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Explore the Live ApnaStore Retail Engine
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-mono">
                Engineered and operated by Aparaitech Software, ApnaStore demonstrates multi-tier wholesale and retail ordering, sub-second product filtering, and instant checkout sync.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://apnastore.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#D4FD53] hover:underline"
                >
                  <span>Launch Live ApnaStore System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-xl bg-[#141518] border border-[#22242A] p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-mono text-xs text-[#D4FD53] uppercase">Hinjawadi Commerce Engineering Pod</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Book Commerce Architecture Sprint</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Discuss catalog vector search, high-volume flash sales, and ERP/POS integrations with our Principal Architect.
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
                  placeholder="e.g. Rohini Gaikwad"
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@retailbrand.com"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
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
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Commerce Architecture Focus</label>
                <select
                  name="commerceFocus"
                  value={formData.commerceFocus}
                  onChange={handleInputChange}
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                >
                  <option value="High-Concurrency Flash-Sale & Inventory Architecture">High-Concurrency Flash-Sale & Inventory Architecture</option>
                  <option value="Neural Vector Product Search & Reranking">Neural Vector Product Search & Reranking</option>
                  <option value="Multi-Warehouse & POS Omnichannel Sync">Multi-Warehouse & POS Omnichannel Sync</option>
                  <option value="Headless Commerce Modernization (Next.js / Shopify Plus)">Headless Commerce Modernization (Next.js / Shopify Plus)</option>
                  <option value="Conversational WhatsApp Commerce Automation">Conversational WhatsApp Commerce Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Store Scope & Traffic Estimates</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="SKU count, peak orders per minute, current platform (Magento, Shopify, Custom)..."
                  className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4FD53]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#D4FD53] text-[#0C0D0F] font-bold text-sm rounded hover:brightness-105 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Recording Appointment...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Commerce Sprint</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
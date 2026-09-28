// src/components/pages/Company/Partners.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  Building2,
  User,
  Mail,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
  Calendar,
  ExternalLink,
  X,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Layers,
  Globe
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnerTier: "System Integrator (SI)",
    partnershipGoals: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast.error("Please fill in all required company and contact fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: `Partner Application: ${formData.partnerTier}`,
        source: "Partners Page"
      });
      if (result.success) {
        toast.success("Partner application recorded! Logged to executive alliances sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          partnerTier: "System Integrator (SI)",
          partnershipGoals: "",
          notes: ""
        });
      } else {
        toast.error("Application recorded locally. Our partnerships team will connect shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please reach out to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnerTiers = [
    {
      title: "ISV & Technology Partners",
      badge: "CO-ENGINEERED PLATFORMS",
      desc: "Integrate specialized hardware, payment rails, AI models, and cloud infrastructure directly with Aparaitech SaaS backends.",
      focus: ["CloudKitchen POS & KDS Hardware Bridges", "Edge AI Accelerators (NVIDIA Jetson, Coral)", "Biometric Sensor OEM Integration"],
      icon: Cpu
    },
    {
      title: "System Integrators & Consultancies",
      badge: "ACCREDITED DELIVERY PODS",
      desc: "Regional and global IT services firms that architect, customize, and deliver turnkey Aparaitech operating platforms for enterprise clients.",
      focus: ["Hinjawadi CoE Joint Delivery Pods", "Sub-200ms Enterprise RAG Implementations", "Omnichannel ERP / Warehouse Integrations"],
      icon: Layers
    },
    {
      title: "Channel & Strategic Resellers",
      badge: "REGIONAL ALLIANCES",
      desc: "Distribute Aparaitech's 6 live production platforms to new geographic regions with certified technical pre-sales and deployment backing.",
      focus: ["Tier-1 Wholesale & Retail Networks", "Multi-Location Cloud Kitchen Operators", "Enterprise Workforce Biometrics"],
      icon: Globe
    }
  ];

  const benefits = [
    {
      title: "Direct Access to Pune CoE Architects",
      desc: "Work shoulder-to-shoulder with our principal engineers for architecture validation, joint sprint planning, and dedicated staging VPCs."
    },
    {
      title: "Co-Marketing & Enterprise Joint Bidding",
      desc: "Participate in joint RFPs, institutional consortiums, enterprise whitepapers, and co-branded case studies with documented ROI."
    },
    {
      title: "Lucrative Economics & Recurring Retainers",
      desc: "Competitive margins on SaaS platform licensing, implementation fees, and long-term 24/7 SLA maintenance retainers."
    },
    {
      title: "Sandbox Runtimes & Early Feature Previews",
      desc: "Unrestricted staging API keys, priority access to beta agentic AI engines, and internal technical documentation."
    }
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

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-6">
            <Handshake className="w-3.5 h-3.5" />
            <span>GLOBAL PARTNER ALLIANCE // PUNE COE</span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Partner with Aparaitech Software
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Collaborate with an engineering organization that builds, hosts, and operates mission-critical cloud backends, biometric vision systems, and high-concurrency commerce engines.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Apply for Partner Network</span>
            </button>
            <a
              href="mailto:info@ai.aparaitech.org?subject=Partnership%20Discussion"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Contact Alliances Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PARTNER TIERS MATRIX */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#00E5C9] uppercase tracking-wider">
            ENGAGEMENT MODELS
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">Partnership Programs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerTiers.map((tier, idx) => {
            const IconComp = tier.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-8 hover:border-[#D4FD53]/50 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#1C1C1E] border border-white/10 text-[#D4FD53]">
                      {tier.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-[#0C0D0F] border border-[#22242A] flex items-center justify-center text-[#D4FD53] mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4FD53] transition-colors">
                    {tier.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-2 border-t border-[#22242A] pt-4 mb-6">
                    {tier.focus.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4FD53] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22242A]">
                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        partnerTier: tier.title
                      });
                      setIsModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded bg-[#1C1C1E] border border-white/10 text-xs font-mono font-bold text-white hover:bg-[#D4FD53] hover:text-[#0C0D0F] transition-all"
                  >
                    Select {tier.title.split(" ")[0]} Track →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY PARTNER WITH APARAITECH */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs text-[#D4FD53] uppercase tracking-wider">
              ALLIANCE ADVANTAGES
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">Why Partner With Aparaitech?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-xl border border-[#22242A] bg-[#0C0D0F] hover:border-[#D4FD53]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#D4FD53] shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{b.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL: PARTNER APPLICATION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#22242A] bg-[#141518] p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Handshake className="w-4 h-4" />
              <span>Partner Network Application</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Join the Aparaitech Partner Ecosystem
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Recorded directly to our executive alliance management sheet. Pune leadership reviews all applications within 48 hours.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., Enterprise Consulting Solutions"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Sunil Varma"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sunil@partner.com"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Partnership Track</label>
                  <select
                    name="partnerTier"
                    value={formData.partnerTier}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="ISV & Technology Partner">ISV & Technology Partner</option>
                    <option value="System Integrator (SI)">System Integrator (SI)</option>
                    <option value="Channel Reseller">Channel Reseller</option>
                    <option value="Regional Cloud Consultancy">Regional Cloud Consultancy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Partnership Scope & Target Synergies</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Describe your current client base, target geographic markets, or joint technology integration plans..."
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
                  <span>{isSubmitting ? "Syncing Application..." : "Submit Partner Application"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
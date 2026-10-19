// src/components/pages/Company/Partners.jsx

import React, { useState } from "react";
import {
  Handshake,
  Building2,
  Mail,
  ShieldCheck,
  Sparkles,
  Calendar,
  X,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Layers,
  Globe,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { partnerAPI } from "../../../utils/api";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  partnerTier: "System Integrator (SI)",
  partnershipGoals: "",
  notes: "",
};

const partnerTiers = [
  {
    title: "ISV & Technology Partners",
    badge: "CO-ENGINEERED PLATFORMS",
    desc: "Integrate specialized hardware, payment rails, AI models, and cloud infrastructure directly with Aparaitech SaaS backends.",
    focus: [
      "CloudKitchen POS & KDS Hardware Bridges",
      "Edge AI Accelerators (NVIDIA Jetson, Coral)",
      "Biometric Sensor OEM Integration",
    ],
    icon: Cpu,
  },
  {
    title: "System Integrators & Consultancies",
    badge: "ACCREDITED DELIVERY PODS",
    desc: "Regional and global IT services firms that architect, customize, and deliver turnkey Aparaitech operating platforms for enterprise clients.",
    focus: [
      "Hinjawadi CoE Joint Delivery Pods",
      "Sub-200ms Enterprise RAG Implementations",
      "Omnichannel ERP / Warehouse Integrations",
    ],
    icon: Layers,
  },
  {
    title: "Channel & Strategic Resellers",
    badge: "REGIONAL ALLIANCES",
    desc: "Distribute Aparaitech's 6 live production platforms to new geographic regions with certified technical pre-sales and deployment backing.",
    focus: [
      "Tier-1 Wholesale & Retail Networks",
      "Multi-Location Cloud Kitchen Operators",
      "Enterprise Workforce Biometrics",
    ],
    icon: Globe,
  },
];

const benefits = [
  {
    title: "Direct Access to Pune CoE Architects",
    desc: "Work shoulder-to-shoulder with our principal engineers for architecture validation, joint sprint planning, and dedicated staging VPCs.",
  },
  {
    title: "Co-Marketing & Enterprise Joint Bidding",
    desc: "Participate in joint RFPs, institutional consortiums, enterprise whitepapers, and co-branded case studies with documented ROI.",
  },
  {
    title: "Lucrative Economics & Recurring Retainers",
    desc: "Competitive margins on SaaS platform licensing, implementation fees, and long-term 24/7 SLA maintenance retainers.",
  },
  {
    title: "Sandbox Runtimes & Early Feature Previews",
    desc: "Unrestricted staging API keys, priority access to beta agentic AI engines, and internal technical documentation.",
  },
];

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-[#0B1220] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10";

const labelClass =
  "mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300";

const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openApplication = (tier) => {
    if (tier) {
      setFormData((previous) => ({
        ...previous,
        partnerTier: tier,
      }));
    }

    setIsModalOpen(true);
  };

  const closeApplication = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.company.trim()
    ) {
      toast.error("Please fill in all required company and contact fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await partnerAPI.apply({
        companyName: formData.company.trim(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        partnershipType: formData.partnerTier,
        message:
          formData.partnershipGoals.trim() ||
          formData.notes.trim() ||
          "",
      });

      toast.success(
        result?.message || "Partner application submitted successfully!"
      );

      setIsModalOpen(false);
      setFormData({ ...initialFormData });
    } catch (err) {
      console.error("[Partner Application Error]:", err);

      toast.error(
        err?.message ||
          "Failed to submit partner application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 selection:text-slate-950 dark:bg-[#0B1220] dark:text-white dark:selection:bg-sky-300 dark:selection:text-slate-950">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white pb-20 pt-24 dark:border-slate-800 dark:from-[#101E33] dark:via-[#0B1220] dark:to-[#0B1220]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#7DD3FC 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10"
        />

        <div className="relative mx-auto max-w-[1240px] px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-white/90 px-3 py-2 font-mono text-xs text-sky-700 shadow-sm dark:border-sky-400/20 dark:bg-[#111C30]/90 dark:text-sky-300">
            <Handshake className="h-4 w-4" />
            <span>GLOBAL PARTNER ALLIANCE // PUNE COE</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-[clamp(1.75rem,5vw,4.25rem)] font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
            Partner with Aparaitech{" "}
            <span className="text-sky-600 dark:text-sky-300">
              Software
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Collaborate with an engineering organization that builds, hosts,
            and operates mission-critical cloud backends, biometric vision
            systems, and high-concurrency commerce engines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => openApplication()}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/15 transition-all hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-300 dark:text-slate-950 dark:shadow-sky-300/10 dark:hover:bg-sky-200 dark:focus-visible:ring-sky-300 dark:focus-visible:ring-offset-[#0B1220]"
            >
              <Calendar className="h-4 w-4" />
              <span>Apply for Partner Network</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <a
              href="mailto:info@ai.aparaitech.org?subject=Partnership%20Discussion"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-[#111C30] dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:bg-[#17243A] dark:focus-visible:ring-sky-300"
            >
              <Mail className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              <span>Contact Alliances Desk</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              Pune Hinjawadi Phase 2 CoE
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              Technology & Delivery Alliances
            </span>
          </div>
        </div>
      </section>

      {/* 2. PARTNERSHIP PROGRAMS */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-700 dark:text-sky-300">
            ENGAGEMENT MODELS
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Partnership Programs
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Choose an engagement model that aligns with your technology,
            delivery capabilities, and business growth strategy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerTiers.map((tier) => {
            const IconComponent = tier.icon;

            return (
              <article
                key={tier.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 sm:p-8 dark:border-slate-700 dark:bg-[#111C30] dark:shadow-none dark:hover:border-sky-400/50 dark:hover:shadow-sky-950/20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-100/60 blur-3xl transition-colors group-hover:bg-sky-200/70 dark:bg-sky-400/5 dark:group-hover:bg-sky-400/10"
                />

                <div className="relative">
                  <div className="mb-5">
                    <span className="inline-block rounded-md border border-sky-100 bg-sky-50 px-2.5 py-1 font-mono text-[10px] tracking-wide text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                      {tier.badge}
                    </span>
                  </div>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-700 transition-colors group-hover:border-sky-200 group-hover:bg-sky-100 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300 dark:group-hover:bg-sky-400/15">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 sm:text-2xl dark:text-white dark:group-hover:text-sky-300">
                    {tier.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {tier.desc}
                  </p>

                  <div className="mb-6 space-y-3 border-t border-slate-100 pt-5 dark:border-slate-700">
                    {tier.focus.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative border-t border-slate-100 pt-5 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => openApplication(tier.title)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-[#17243A] dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:focus-visible:ring-sky-300"
                  >
                    <span>
                      Select {tier.title.split(" ")[0]} Track
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. PARTNERSHIP BENEFITS */}
      <section className="border-t border-slate-200 bg-sky-50/60 py-20 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 dark:text-sky-300">
              ALLIANCE ADVANTAGES
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Why Partner With Aparaitech?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Build stronger delivery capabilities through technical
              collaboration, joint go-to-market opportunities, and shared
              engineering resources.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50 dark:border-slate-700 dark:bg-[#111C30] dark:hover:border-sky-400/40 dark:hover:shadow-none sm:p-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 font-mono text-sm font-bold text-sky-700 transition-colors group-hover:bg-sky-100 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300 dark:group-hover:bg-sky-400/15">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {benefit.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-sky-100 bg-white p-6 sm:flex-row sm:p-8 dark:border-slate-700 dark:bg-[#111C30]">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Have a partnership idea?
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Tell us about your organization and explore potential
                  collaboration opportunities.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openApplication()}
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 dark:focus-visible:ring-sky-300 dark:focus-visible:ring-offset-[#111C30]"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. PARTNER APPLICATION MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 backdrop-blur-sm sm:p-5 dark:bg-black/80"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeApplication();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-modal-title"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-8 dark:border-slate-700 dark:bg-[#111C30]"
          >
            <button
              type="button"
              onClick={closeApplication}
              disabled={isSubmitting}
              aria-label="Close partner application"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-50 sm:right-5 sm:top-5 dark:border-slate-700 dark:bg-[#17243A] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-3 flex items-center gap-2 pr-12 font-mono text-xs uppercase tracking-wider text-sky-700 dark:text-sky-300">
              <Handshake className="h-4 w-4" />
              <span>Partner Network Application</span>
            </div>

            <h2
              id="partner-modal-title"
              className="mb-3 pr-8 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl dark:text-white"
            >
              Join the Aparaitech Partner Ecosystem
            </h2>

            <p className="mb-7 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Share your company details and partnership goals with our
              team. Required fields are marked with an asterisk.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label htmlFor="partner-company" className={labelClass}>
                  Company / Organization Name *
                </label>
                <input
                  id="partner-company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="partner-name" className={labelClass}>
                    Contact Name *
                  </label>
                  <input
                    id="partner-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="partner-email" className={labelClass}>
                    Corporate Email *
                  </label>
                  <input
                    id="partner-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="partner-phone" className={labelClass}>
                    Phone Number *
                  </label>
                  <input
                    id="partner-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="partner-tier" className={labelClass}>
                    Partnership Track
                  </label>
                  <select
                    id="partner-tier"
                    name="partnerTier"
                    value={formData.partnerTier}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option value="ISV & Technology Partners">
                      ISV & Technology Partners
                    </option>
                    <option value="System Integrator (SI)">
                      System Integrator (SI)
                    </option>
                    <option value="System Integrators & Consultancies">
                      System Integrators & Consultancies
                    </option>
                    <option value="Channel & Strategic Resellers">
                      Channel & Strategic Resellers
                    </option>
                    <option value="Channel Reseller">
                      Channel Reseller
                    </option>
                    <option value="Regional Cloud Consultancy">
                      Regional Cloud Consultancy
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="partner-notes" className={labelClass}>
                  Partnership Scope & Target Synergies
                </label>
                <textarea
                  id="partner-notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Describe your organization, target markets, client base, or potential technology integrations..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="border-t border-slate-200 pt-5 dark:border-slate-700">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-600/10 transition-all hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-300 dark:text-slate-950 dark:shadow-none dark:hover:bg-sky-200 dark:focus-visible:ring-sky-300 dark:focus-visible:ring-offset-[#111C30]"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                      />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Partner Application</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  Your information will be submitted to the configured
                  partner application service.
                </p>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
};

export default Partners;
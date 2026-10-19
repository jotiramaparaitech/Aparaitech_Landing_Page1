// client/src/components/ContactSection.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import { contactAPI } from "../utils/api";
import {
  MapPin,
  PhoneCall,
  Mail,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Enterprise Consultation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in your name, email, and project scope.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await contactAPI.submit(formData);

      setSuccess(true);
      toast.success(
        res.message ||
          "Thank you! Your inquiry has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Enterprise Consultation",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const googleMapsUrl =
    "https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057";

  const whatsappUrl = "https://wa.me/919158852129";

  const cardClass =
    "rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-[#020617] dark:hover:border-sky-500/50";

  const labelClass =
    "mb-1 block text-xs font-mono font-medium text-slate-600 dark:text-slate-300";

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-500 dark:focus:ring-sky-500/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-[#0B1220] dark:text-white lg:py-24"
    >
      {/* Soft ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-sky-200/40 blur-[140px] dark:bg-[#0D9488]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-200/40 blur-[140px] dark:bg-[#22D3EE]/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:border-teal-500/30 dark:bg-teal-950/60 dark:text-[#22D3EE]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500 dark:bg-[#22D3EE]" />
            Direct Architectural Consultation
          </div>

          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let’s Architect Your Next Platform
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Collaborate directly with our senior software and AI engineers in
            Pune. We deliver rapid scoping, proof-of-concept sprints, and
            production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Contact Information */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-3.5">
              {/* Address Card */}
              <div className={cardClass}>
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-teal-500/10 dark:text-[#22D3EE]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
                      Corporate Headquarters
                    </h4>

                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Office 122, Gera Imperial, Opposite Wipro Circle,
                      Hinjawadi Phase 2, Pune, Maharashtra – 411057
                    </p>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-700 hover:underline dark:text-[#22D3EE]"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Open in Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div
                className={`${cardClass} hover:border-sky-300 dark:hover:border-sky-500/50`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-cyan-500/10 dark:text-[#22D3EE]">
                      <PhoneCall className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Direct Calling
                      </span>

                      <a
                        href="tel:+918261840199"
                        className="text-sm font-bold font-mono text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-[#22D3EE]"
                      >
                        +91 82618 40199
                      </a>
                    </div>
                  </div>

                  <a
                    href="tel:+918261840199"
                    className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-white"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                className={`${cardClass} hover:border-emerald-300 dark:hover:border-emerald-500/50`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        WhatsApp Connect
                      </span>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold font-mono text-slate-900 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
                      >
                        +91 9158852129
                      </a>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-all hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div
                className={`${cardClass} hover:border-sky-300 dark:hover:border-sky-500/50`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-teal-500/10 dark:text-[#22D3EE]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="mb-1 block text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Official Email Inquiries
                    </span>

                    <a
                      href="mailto:info@ai.aparaitech.org"
                      className="block break-words text-sm font-bold text-slate-900 transition-colors hover:text-sky-600 dark:text-white dark:hover:text-[#22D3EE]"
                    >
                      info@ai.aparaitech.org
                    </a>

                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                      Careers &amp; HR:{" "}
                      <a
                        href="mailto:hr@info.aparaitech.org"
                        className="text-slate-700 hover:underline dark:text-slate-300"
                      >
                        hr@info.aparaitech.org
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-2 px-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="h-4 w-4 shrink-0 text-sky-600 dark:text-[#0D9488]" />
              <span>
                Average engineering inquiry response time: &lt; 2 business
                hours
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition-colors duration-300 dark:border-slate-800 dark:bg-[#020617] dark:shadow-2xl dark:shadow-black/20 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Send Us a Direct Message
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Fill in your details below and our technical leads will reach
                  out with architecture options.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Your Full Name *
                    </label>

                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Deshmukh"
                      autoComplete="name"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Business Email *
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@enterprise.com"
                      autoComplete="email"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Phone Number (Optional)
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Inquiry Subject
                    </label>

                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Custom AI Platform"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Project Scope &amp; Requirements *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current tech stack, target deliverables, or architectural timeline..."
                    rows={4}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-sky-600 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#0D9488] dark:hover:bg-[#0f766e] dark:hover:shadow-teal-500/20"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Inquiry to Engineering Hub →</span>
                    </>
                  )}
                </button>

                {success && (
                  <div className="flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-700 dark:border-teal-500/40 dark:bg-teal-950/60 dark:text-teal-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>
                      Inquiry logged successfully. Our architects will contact
                      you shortly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
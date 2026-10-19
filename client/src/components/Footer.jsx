// client/src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Send,
  Lock,
  MessageSquare,
  Navigation,
} from "lucide-react";
import toast from "react-hot-toast";
import { subscribeAPI } from "../utils/api";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const { isDark } = useTheme();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      toast.error("Please provide a valid email address.");
      return;
    }

    setSubscribing(true);

    try {
      const res = await subscribeAPI.subscribe(normalizedEmail);

      toast.success(
        res?.message ||
        "Subscribed successfully to APARAITECH engineering updates!"
      );

      setEmail("");
    } catch (err) {
      toast.error(
        err?.message ||
        "Subscription could not be processed. Please try again."
      );
    } finally {
      setSubscribing(false);
    }
  };

  const googleMapsUrl =
    "https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057";

  // Theme-aware utility classes
  const footerBg = isDark ? "bg-[#111C2E]" : "bg-[#EFF6FF]";
  const panelBg = isDark
    ? "bg-gradient-to-br from-[#0B1220] to-[#0f172a]"
    : "bg-gradient-to-br from-white to-[#E8F3FF]";
  const cardBg = isDark ? "bg-[#020617]/80" : "bg-white";
  const inputBg = isDark ? "bg-slate-900" : "bg-white";
  const mainText = isDark ? "text-white" : "text-slate-800";
  const bodyText = isDark ? "text-slate-300" : "text-slate-700";
  const mutedText = isDark ? "text-slate-400" : "text-slate-600";
  const borderColor = isDark ? "border-slate-800" : "border-blue-200";
  const innerBorder = isDark ? "border-slate-700" : "border-blue-200";
  const accentText = isDark ? "text-cyan-300" : "text-blue-700";
  const hoverText = isDark
    ? "hover:text-cyan-300"
    : "hover:text-blue-700";

  const footerLinkClass = `rounded-sm transition-colors duration-200 ${hoverText} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`;

  const externalLinkClass =
    `flex items-center gap-1.5 transition-colors duration-200 ${hoverText}`;

  return (
    <footer
      className={`relative overflow-hidden border-t ${borderColor} ${footerBg} ${bodyText} pt-16 pb-8 transition-colors duration-300`}
    >
      {/* APARAITECH watermark: part of the footer background, not a separate section */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none ${
  isDark ? "text-white/[0.12]" : "text-blue-900/[0.10]"
}`}
style={{ transform: "translateY(210px)" }}
      >
        <span className="whitespace-nowrap text-[clamp(3rem,10vw,8rem)] font-extrabold uppercase leading-none tracking-tighter">
          APARAITECH
        </span>
      </div>

      {/* Background decoration */}
      <div
        className={`pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full blur-3xl ${isDark ? "bg-blue-500/5" : "bg-blue-300/20"
          }`}
      />
      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl ${isDark ? "bg-teal-500/5" : "bg-sky-300/20"
          }`}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Contact and map banner */}
        <div
          className={`mb-12 rounded-2xl border ${borderColor} ${panelBg} p-6 shadow-xl transition-colors duration-300 sm:p-8`}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Contact details */}
            <div className="space-y-5 lg:col-span-7">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider ${isDark
                    ? "border-teal-500/30 bg-teal-950/60 text-cyan-300"
                    : "border-blue-200 bg-blue-50 text-blue-700"
                  }`}
              >
                <span
                  className={`h-2 w-2 animate-pulse rounded-full ${isDark ? "bg-cyan-300" : "bg-blue-500"
                    }`}
                />
                Official Corporate Headquarters
              </div>

              <div>
                <h3
                  className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${mainText}`}
                >
                  APARAITECH SOFTWARE
                </h3>

                <p className={`mt-1 text-sm leading-relaxed ${mutedText}`}>
                  Enterprise AI Systems • Cloud Platforms • Mission-Critical
                  Software Engineering
                </p>
              </div>

              {/* Address */}
              <div className={`flex items-start gap-3 text-sm ${bodyText}`}>
                <MapPin
                  className={`mt-0.5 h-5 w-5 shrink-0 ${accentText}`}
                />

                <div>
                  <p className={`font-semibold ${mainText}`}>
                    Office 122, Gera Imperial
                  </p>
                  <p>
                    Opposite Wipro Circle, Hinjawadi Phase 2, Pune,
                    Maharashtra – 411057
                  </p>
                </div>
              </div>

              {/* Contact cards */}
              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 xl:grid-cols-3">
                {/* Phone */}
                <a
                  href="tel:+918261840199"
                  className={`group flex min-w-0 items-center gap-3 rounded-xl border ${innerBorder} ${cardBg} p-3 transition-all hover:border-blue-400`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isDark
                        ? "bg-teal-500/10 text-cyan-300"
                        : "bg-blue-50 text-blue-700"
                      } transition-transform group-hover:scale-110`}
                  >
                    <PhoneCall className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`block text-[11px] font-mono uppercase ${mutedText}`}
                    >
                      Calling
                    </span>
                    <span className={`block text-xs font-bold ${mainText}`}>
                      +91 82618 40199
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919158852129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex min-w-0 items-center gap-3 rounded-xl border ${innerBorder} ${cardBg} p-3 transition-all hover:border-emerald-500/60`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isDark
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-emerald-50 text-emerald-700"
                      } transition-transform group-hover:scale-110`}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`block text-[11px] font-mono uppercase ${mutedText}`}
                    >
                      WhatsApp
                    </span>
                    <span className={`block text-xs font-bold ${mainText}`}>
                      +91 91588 52129
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@ai.aparaitech.org"
                  className={`group flex min-w-0 items-center gap-3 rounded-xl border ${innerBorder} ${cardBg} p-3 transition-all hover:border-blue-400 sm:col-span-2 xl:col-span-1`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isDark
                        ? "bg-cyan-500/10 text-cyan-300"
                        : "bg-sky-50 text-sky-700"
                      } transition-transform group-hover:scale-110`}
                  >
                    <Mail className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`block text-[11px] font-mono uppercase ${mutedText}`}
                    >
                      Inquiries
                    </span>
                    <span
                      className={`block truncate text-xs font-bold ${mainText}`}
                    >
                      info@ai.aparaitech.org
                    </span>
                  </div>
                </a>
              </div>

              {/* HR and business hours */}
              <div
                className={`flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs ${mutedText}`}
              >
                <span className="flex items-center gap-1.5">
                  <Mail className={`h-3.5 w-3.5 ${accentText}`} />
                  HR:
                  <a
                    href="mailto:hr@info.aparaitech.org"
                    className={footerLinkClass}
                  >
                    hr@info.aparaitech.org
                  </a>
                </span>

                <span className="hidden sm:inline">•</span>

                <span>
                  Business Hours: Mon – Fri (9:30 AM – 6:30 PM IST)
                </span>
              </div>
            </div>

            {/* Google Maps */}
            <div className="lg:col-span-5">
              <div
                className={`group relative h-[240px] overflow-hidden rounded-xl border ${innerBorder} ${isDark ? "bg-[#020617]" : "bg-blue-50"
                  } shadow-xl sm:h-[260px]`}
              >
                <iframe
                  title="Aparaitech Software Office Location Map"
                  src="https://www.google.com/maps?q=Gera+Imperial,+Hinjawadi+Phase+2,+Pune&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />

                <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                  <span
                    className={`pointer-events-auto rounded border px-2.5 py-1 text-[11px] font-mono backdrop-blur-sm ${isDark
                        ? "border-slate-700 bg-[#020617]/90 text-slate-200"
                        : "border-blue-200 bg-white/95 text-slate-700"
                      }`}
                  >
                    Gera Imperial, Hinjawadi Ph 2
                  </span>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four-column footer */}
        <div
          className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className={`h-10 w-10 rounded-lg border ${isDark
                    ? "border-white/10 bg-white/5"
                    : "border-blue-100 bg-white"
                  } object-contain shadow-md shadow-blue-500/10 transition-all group-hover:border-blue-400`}
              />

              <div>
                <span className={`block text-base font-bold tracking-tight ${mainText}`}>
                  Aparaitech Software
                </span>
                <span className={`block text-[10px] font-mono uppercase tracking-wider ${accentText}`}>
                  Enterprise Technology
                </span>
              </div>
            </Link>

            <p className={`text-xs leading-relaxed ${mutedText}`}>
              Global enterprise engineering partner. Architecting scalable
              AI-native software platforms, autonomous agents, and resilient
              cloud architectures.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-mono ${accentText} hover:underline`}
            >
              <MapPin className="h-3.5 w-3.5" />
              View on Google Maps ↗
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              className={`mb-4 text-xs font-mono font-semibold uppercase tracking-widest ${mainText}`}
            >
              Core Navigation
            </h4>

            <ul className={`space-y-3 text-xs ${mutedText}`}>
              <li><Link to="/" className={footerLinkClass}>Home</Link></li>
              <li><Link to="/software-development" className={footerLinkClass}>Software Development</Link></li>
              <li>
                <Link to="/generative-ai" className={`inline-flex items-center gap-1 ${footerLinkClass}`}>
                  Generative AI Solutions
                  <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${isDark ? "bg-cyan-300" : "bg-blue-500"}`} />
                </Link>
              </li>
              <li><Link to="/cloud-computing" className={footerLinkClass}>Cloud Infrastructure</Link></li>
              <li><Link to="/solutions" className={footerLinkClass}>Enterprise Solutions</Link></li>
              <li><Link to="/company/about-us" className={footerLinkClass}>About Us</Link></li>
              <li><Link to="/company/careers" className={footerLinkClass}>Careers &amp; Job Openings</Link></li>
              <li><Link to="/support/contact" className={footerLinkClass}>Support &amp; Help Center</Link></li>
            </ul>
          </div>

          {/* Column 3: Platforms and newsletter */}
          <div>
            <h4
              className={`mb-4 text-xs font-mono font-semibold uppercase tracking-widest ${mainText}`}
            >
              Live SaaS Ecosystem
            </h4>

            <ul className={`space-y-3 text-xs ${mutedText}`}>
              <li>
                <a href="https://cloudkitchen.aparaitech.org/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Cloud Kitchen AI <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://attendance.aparaitech.org/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Attendance SaaS <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://apnastore.aparaitech.org/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  APNA Store eCommerce <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="http://servicehub.aparaitech.org/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Service Hub Dispatch <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="http://svpmalumni.aparaitech.org/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  SVPM Alumni Portal <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className={`mt-6 border-t ${borderColor} pt-4`}>
              <h5 className={`mb-2 text-xs font-semibold ${mainText}`}>
                Subscribe to Tech Updates
              </h5>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  aria-label="Email address for tech updates"
                  autoComplete="email"
                  required
                  className={`min-w-0 flex-1 rounded-lg border ${innerBorder} ${inputBg} px-2.5 py-2 text-xs ${isDark
                      ? "text-white placeholder-slate-500"
                      : "text-slate-800 placeholder-slate-400"
                    } outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30`}
                />

                <button
                  type="submit"
                  disabled={subscribing}
                  aria-label="Subscribe to tech updates"
                  className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {subscribing ? <span>...</span> : <Send className="h-3.5 w-3.5" />}
                </button>
              </form>
            </div>
          </div>

          {/* Column 4: Compliance */}
          <div>
            <h4
              className={`mb-4 text-xs font-mono font-semibold uppercase tracking-widest ${mainText}`}
            >
              Standards &amp; Compliance
            </h4>

            <div className={`space-y-3 text-xs ${bodyText}`}>
              <p className={`flex items-center gap-2 font-medium ${mainText}`}>
                <Shield className="h-4 w-4 shrink-0 text-teal-500" />
                ISO 27001 &amp; 9001 Aligned
              </p>

              <p className={`flex items-center gap-2 ${accentText}`}>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                Govt. of India MSME Registered
              </p>

              <p className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                Maharashtra Shop &amp; Est. (Gumasta)
              </p>

              <p className="flex items-start gap-2">
                <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentText}`} />
                GST Registered Commercial Firm
              </p>

              <p className={`pl-6 ${mutedText}`}>
                SOC 2 Type II Security Controls
              </p>

              <p className={`pl-6 ${mutedText}`}>
                Dedicated Sovereign VPC Hosting
              </p>

              <div className={`border-t ${borderColor} pt-3`}>
                <a
                  href="https://www.linkedin.com/company/aparaitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs ${accentText} hover:underline`}
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom copyright and legal links */}
        <div
          className={`flex flex-col items-center justify-between gap-4 pt-6 text-center text-xs ${mutedText} md:flex-row md:text-left`}
        >
          <p>
            © {new Date().getFullYear()} APARAITECH SOFTWARE. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/company/values" className={footerLinkClass}>
              Trust &amp; Security
            </Link>

            <Link to="/company/values" className={footerLinkClass}>
              Privacy Statement
            </Link>

            <Link to="/company/about-us" className={footerLinkClass}>
              Terms of Service
            </Link>

            <Link
              to="/admin"
              className={`inline-flex items-center gap-1 transition-colors ${mutedText} ${hoverText}`}
            >
              <Lock className={`h-3 w-3 ${accentText}`} />
              Admin Portal
            </Link>
          </div>

          <p className="text-center md:text-right">
            Office 122, Gera Imperial, Hinjawadi Phase 2, Pune
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
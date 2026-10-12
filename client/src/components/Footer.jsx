// client/src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Send,
  Lock,
  MessageSquare,
  Navigation
} from "lucide-react";
import toast from "react-hot-toast";
import { subscribeAPI } from "../utils/api";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please provide a valid email address.");
      return;
    }

    setSubscribing(true);
    try {
      const res = await subscribeAPI.subscribe(email);
      toast.success(res.message || "Subscribed successfully to APARAITECH engineering updates!");
      setEmail("");
    } catch (err) {
      toast.error(err.message || "Subscription could not be processed. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  const googleMapsUrl = "https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057";

  return (
    <footer className="relative bg-[#020617] text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* TOP CONTACT & MAP HIGHLIGHT BANNER */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#0f172a] border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
                Official Corporate Headquarters
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  APARAITECH SOFTWARE
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Enterprise AI Systems • Cloud Platforms • Mission-Critical Software Engineering
                </p>
              </div>

              {/* Direct Address */}
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <MapPin className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Office 122, Gera Imperial</p>
                  <p className="text-slate-300">Opposite Wipro Circle, Hinjawadi Phase 2, Pune, Maharashtra – 411057</p>
                </div>
              </div>

              {/* Action Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Calling */}
                <a
                  href="tel:+918261840199"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#020617]/80 border border-slate-800 hover:border-[#22D3EE]/50 hover:bg-[#020617] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Calling</span>
                    <span className="text-xs font-bold text-white font-mono">+91 82618 40199</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919158852129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#020617]/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-[#020617] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">WhatsApp</span>
                    <span className="text-xs font-bold text-white font-mono">+91 9158852129</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@ai.aparaitech.org"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#020617]/80 border border-slate-800 hover:border-[#0D9488]/50 hover:bg-[#020617] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Inquiries</span>
                    <span className="text-xs font-bold text-white truncate block">info@ai.aparaitech.org</span>
                  </div>
                </a>
              </div>

              {/* Additional HR email */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>HR: <a href="mailto:hr@info.aparaitech.org" className="text-slate-300 hover:text-white hover:underline">hr@info.aparaitech.org</a></span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Business Hours: Mon – Fri (9:30 AM – 6:30 PM IST)</span>
              </div>
            </div>

            {/* Right Interactive Map Card */}
            <div className="lg:col-span-5 h-full">
              <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-[#020617] shadow-xl relative group h-[220px] sm:h-[240px]">
                <iframe
                  title="Aparaitech Software Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.564757519159!2d73.71439267595568!3d18.593655066933568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb04c107f9ff%3A0xc48ad1f19c961e69!2sGera%20Imperial!5e0!3m2!1sen!2sin!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity"
                ></iframe>
                
                {/* Floating overlay button */}
                <div className="absolute bottom-3 right-3 left-3 flex justify-between items-center pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-[#020617]/90 text-[11px] font-mono text-slate-300 border border-slate-700 backdrop-blur-sm pointer-events-auto">
                    Gera Imperial, Hinjawadi Ph 2
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold shadow-lg transition-all pointer-events-auto hover:scale-105"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions ↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION & DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Summary */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-9 w-9 rounded-lg object-contain bg-white/5 border border-white/10 group-hover:border-[#0D9488] transition-all shadow-md shadow-[#0D9488]/10"
              />
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  Aparaitech Software
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#22D3EE] uppercase block">
                  Enterprise Technology
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Global enterprise engineering partner. Architecting scalable AI-native software platforms, autonomous agents, and resilient cloud architectures.
            </p>
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] hover:underline font-mono"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View on Google Maps ↗</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4 font-semibold">
              Core Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/software-development" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/generative-ai" className="hover:text-[#22D3EE] transition-colors flex items-center gap-1">
                  Generative AI Solutions <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
                </Link>
              </li>
              <li>
                <Link to="/cloud-computing" className="hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/company/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-white transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link to="/support/contact" className="hover:text-white transition-colors">
                  Support & Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Production Platforms */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4 font-semibold">
              Live SaaS Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://cloudkitchen.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"
                >
                  <span>Cloud Kitchen AI</span> <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://attendance.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"
                >
                  <span>Attendance SaaS</span> <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://apnastore.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"
                >
                  <span>APNA Store eCommerce</span> <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://servicehub.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"
                >
                  <span>Service Hub Dispatch</span> <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://svpmalumni.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"
                >
                  <span>SVPM Alumni Portal</span> <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <h5 className="text-xs font-semibold text-white mb-2">Subscribe to Tech Updates</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="bg-slate-900 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488] flex-1 min-w-0"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-[#0D9488] hover:bg-[#0f766e] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 flex items-center gap-1 shrink-0"
                >
                  {subscribing ? "..." : <Send className="w-3 h-3" />}
                </button>
              </form>
            </div>
          </div>

          {/* Col 4: Governance & Certification Standards */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4 font-semibold">
              Standards & Compliance
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-center gap-2 text-white font-medium">
                <Shield className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>ISO 27001 & 9001 Aligned</span>
              </p>
              <p className="flex items-center gap-2 text-[#22D3EE]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Govt. of India MSME Registered</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#0D9488]" />
                <span>Maharashtra Shop & Est. (Gumasta)</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#22D3EE]" />
                <span>GST Registered Commercial Firm</span>
              </p>
              <p className="text-slate-400 pl-5.5">SOC 2 Type II Security Controls</p>
              <p className="text-slate-400 pl-5.5">Dedicated Sovereign VPC Hosting</p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/aparaitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#22D3EE] hover:underline flex items-center gap-1"
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Lettermark */}
        <div className="pt-10 pb-4 text-center select-none pointer-events-none overflow-hidden">
          <h1 className="text-[clamp(2rem,10vw,8rem)] font-extrabold tracking-tighter text-slate-800/40 leading-none uppercase">
            APARAITECH
          </h1>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} APARAITECH SOFTWARE. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/company/values" className="hover:text-white transition-colors">Trust & Security</Link>
            <Link to="/company/values" className="hover:text-white transition-colors">Privacy Statement</Link>
            <Link to="/company/about-us" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-[#22D3EE] transition-colors flex items-center gap-1 text-slate-400 hover:text-white">
              <Lock className="w-3 h-3 text-[#22D3EE]" /> Admin Portal
            </Link>
          </div>
          <p className="text-slate-400">Office 122, Gera Imperial, Hinjawadi Phase 2, Pune</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="relative bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] pt-16 pb-12 overflow-hidden border-t border-[#E2E8F0] dark:border-[#29384D] transition-colors">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* TOP CONTACT & MAP HIGHLIGHT BANNER */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-[#0F9F8F]/10 border border-[#0F9F8F]/20 text-[#0F9F8F] dark:text-[#2DD4BF] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
                Official Corporate Headquarters
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] dark:text-[#F1F5F9] tracking-tight">
                  APARAITECH SOFTWARE
                </h3>
                <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mt-1">
                  Enterprise AI Systems • Cloud Platforms • Mission-Critical Software Engineering
                </p>
              </div>

              {/* Direct Address */}
              <div className="flex items-start gap-3 text-sm text-[#475569] dark:text-[#CBD5E1]">
                <MapPin className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Office 122, Gera Imperial</p>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">Opposite Wipro Circle, Hinjawadi Phase 2, Pune, Maharashtra – 411057</p>
                </div>
              </div>

              {/* Action Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Calling */}
                <a
                  href="tel:+918261840199"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/50 dark:hover:border-[#3B82F6]/50 transition-all group shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] dark:text-[#3B82F6] group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase">Calling</span>
                    <span className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] font-mono">+91 82618 40199</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919158852129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#0F9F8F]/50 dark:hover:border-[#2DD4BF]/50 transition-all group shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0F9F8F]/10 flex items-center justify-center text-[#0F9F8F] dark:text-[#2DD4BF] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase">WhatsApp</span>
                    <span className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] font-mono">+91 9158852129</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@ai.aparaitech.org"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/50 dark:hover:border-[#3B82F6]/50 transition-all group shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] dark:text-[#3B82F6] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] uppercase">Inquiries</span>
                    <span className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] truncate block">info@ai.aparaitech.org</span>
                  </div>
                </a>
              </div>

              {/* Additional HR email */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] dark:text-[#94A3B8] pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                  <span>HR: <a href="mailto:hr@info.aparaitech.org" className="text-[#2563EB] dark:text-[#3B82F6] hover:underline">hr@info.aparaitech.org</a></span>
                </span>
                <span className="text-[#E2E8F0] dark:text-[#29384D]">•</span>
                <span>Business Hours: Mon – Fri (9:30 AM – 6:30 PM IST)</span>
              </div>
            </div>

            {/* Right Interactive Map Card */}
            <div className="lg:col-span-5 h-full">
              <div className="rounded-xl overflow-hidden border border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#0B1220] shadow-sm relative group h-[220px] sm:h-[240px]">
                <iframe
                  title="Aparaitech Software Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.564757519159!2d73.71439267595568!3d18.593655066933568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb04c107f9ff%3A0xc48ad1f19c961e69!2sGera%20Imperial!5e0!3m2!1sen!2sin!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                ></iframe>
                
                {/* Floating overlay button */}
                <div className="absolute bottom-3 right-3 left-3 flex justify-between items-center pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-white/95 dark:bg-[#131F32]/95 text-[11px] font-mono text-[#142B4A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm pointer-events-auto">
                    Gera Imperial, Hinjawadi Ph 2
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-all pointer-events-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#E2E8F0] dark:border-[#29384D]">
          
          {/* Col 1: Brand Summary */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-8 w-8 rounded-lg object-contain bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] group-hover:border-[#2563EB] transition-all shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-none">
                  Aparaitech Software
                </span>
                <span className="text-[10px] tracking-wider text-[#2563EB] dark:text-[#3B82F6] uppercase mt-0.5 font-semibold">
                  Enterprise AI & Cloud
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
              Enterprise engineering partner architecting AI-native platforms, autonomous agent swarms, and resilient cloud infrastructure from Pune, India.
            </p>

            <div className="pt-2 text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1">
              <p className="font-semibold text-[#142B4A] dark:text-[#F1F5F9]">Global Engineering CoE:</p>
              <p>Office 122, Gera Imperial, Hinjawadi Phase 2, Pune – 411057</p>
              <p>Direct: +91 82618 40199 / +91 9158852129</p>
            </div>
          </div>

          {/* Col 2: Core Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Core Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B] dark:text-[#94A3B8]">
              <li>
                <Link to="/" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/software-development" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/generative-ai" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5">
                  Generative AI Solutions <span className="h-1.5 w-1.5 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
                </Link>
              </li>
              <li>
                <Link to="/cloud" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/company/about-us" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link to="/support/contact" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  Support & Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Live SaaS Ecosystem & Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Live SaaS Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B] dark:text-[#94A3B8]">
              <li>
                <a
                  href="https://cloudkitchen.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>Cloud Kitchen AI</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href="https://attendance.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>Attendance SaaS</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href="https://apnastore.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>APNA Store eCommerce</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href="http://servicehub.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>Service Hub Dispatch</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href="http://svpmalumni.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>SVPM Alumni Portal</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href="https://tests.apraitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
                >
                  <span>Online Test Platform</span> <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-5 pt-4 border-t border-[#E2E8F0] dark:border-[#29384D]">
              <h5 className="text-xs font-semibold text-[#142B4A] dark:text-[#F1F5F9] mb-2">Subscribe to Tech Updates</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] text-xs rounded-lg px-2.5 py-1.5 text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] flex-1 min-w-0"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {subscribing ? "..." : <Send className="w-3 h-3" />}
                </button>
              </form>
            </div>
          </div>

          {/* Col 4: Governance & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] dark:text-[#F1F5F9] mb-4">
              Standards & Compliance
            </h4>
            <div className="space-y-2.5 text-xs text-[#475569] dark:text-[#CBD5E1]">
              <p className="flex items-center gap-2 text-[#142B4A] dark:text-[#F1F5F9] font-medium">
                <Shield className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF] shrink-0" />
                <span>ISO 27001 & 9001 Aligned</span>
              </p>
              <p className="flex items-center gap-2 text-[#2563EB] dark:text-[#3B82F6]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                <span>Govt. of India MSME Registered</span>
              </p>
              <p className="flex items-center gap-2 text-[#475569] dark:text-[#CBD5E1]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                <span>Maharashtra Shop & Est. (Gumasta)</span>
              </p>
              <p className="flex items-center gap-2 text-[#475569] dark:text-[#CBD5E1]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                <span>GST Registered Commercial Firm</span>
              </p>
              <p className="text-[#64748B] dark:text-[#94A3B8] pl-5.5">SOC 2 Type II Security Controls</p>
              <p className="text-[#64748B] dark:text-[#94A3B8] pl-5.5">Dedicated Sovereign VPC Hosting</p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/aparaitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2563EB] dark:text-[#3B82F6] hover:underline flex items-center gap-1 font-medium"
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Lettermark */}
        <div className="pt-10 pb-4 text-center select-none pointer-events-none overflow-hidden opacity-20 dark:opacity-25">
          <h1 className="text-[clamp(2rem,10vw,8rem)] font-extrabold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-none uppercase">
            APARAITECH
          </h1>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 border-t border-[#E2E8F0] dark:border-[#29384D] flex flex-col md:flex-row items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8] gap-4">
          <p>© {new Date().getFullYear()} APARAITECH SOFTWARE. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/company/values" className="hover:text-[#142B4A] dark:hover:text-[#F1F5F9] transition-colors">Trust & Security</Link>
            <Link to="/company/values" className="hover:text-[#142B4A] dark:hover:text-[#F1F5F9] transition-colors">Privacy Statement</Link>
            <Link to="/company/about-us" className="hover:text-[#142B4A] dark:hover:text-[#F1F5F9] transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors flex items-center gap-1 text-[#64748B] dark:text-[#94A3B8] font-medium">
              <Lock className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6]" /> Admin Portal
            </Link>
          </div>
          <p className="text-[#64748B] dark:text-[#94A3B8]">Office 122, Gera Imperial, Hinjawadi Phase 2, Pune</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

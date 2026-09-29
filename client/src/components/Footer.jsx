// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0C0D0F] text-slate-400 pt-20 pb-12 overflow-hidden border-t border-[#22242A]">
      <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-16 border-b border-[#22242A]">
          {/* Brand & Address */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-8 w-8 rounded-lg object-contain bg-white/5 border border-white/10 group-hover:border-[#00E5C9] transition-all shadow-md shadow-[#00E5C9]/10"
              />
              <span className="font-semibold text-white text-base tracking-tight">
                Aparaitech Software
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Partner in building an AI-native enterprise. Engineering scalable intelligent systems, autonomous agents, and enterprise cloud infrastructure.
            </p>
            <div className="text-xs text-slate-300 space-y-2 font-mono pt-2">
              <a
                href="https://maps.app.goo.gl/zshFooG4n2aS8Dr3A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#D4FD53] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#D4FD53] shrink-0 mt-0.5" />
                <span>Gera Imperium, Hinjawadi Phase 2, Pune, Maharashtra, India</span>
              </a>
              <a
                href="tel:+918261840199"
                className="flex items-center gap-2 hover:text-[#D4FD53] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4FD53] shrink-0" />
                <span>+91 82618 40199</span>
              </a>
              <a
                href="mailto:info@ai.aparaitech.org"
                className="flex items-center gap-2 hover:text-[#D4FD53] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4FD53] shrink-0" />
                <span>info@ai.aparaitech.org</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generative-ai" className="hover:text-[#D4FD53] transition-colors flex items-center gap-1">
                  Generative AI Solutions <span className="h-1.5 w-1.5 rounded-full bg-[#D4FD53] animate-pulse"></span>
                </Link>
              </li>
              <li>
                <Link to="/cloud" className="hover:text-white transition-colors">
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
                  About Aparaitech
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-white transition-colors">
                  Careers & Engineering Pods
                </Link>
              </li>
              <li>
                <Link to="/company/values" className="hover:text-white transition-colors">
                  Our Values & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Live SaaS Platforms */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">
              Live Production Platforms
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://cloudkitchen.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  Cloud Kitchen AI <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://attendance.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  Attendance SaaS <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://apnastore.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  APNA Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://servicehub.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  Service Hub Dispatch <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://svpmalumni.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  SVPM Alumni Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://tests.apraitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                >
                  Online Test Platform <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">
              Governance & Licences
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-slate-300">
              <p className="flex items-center gap-1.5 text-white font-semibold">
                <Shield className="w-4 h-4 text-[#D4FD53]" />
                ISO 27001 & 9001 Certified
              </p>
              <p className="flex items-center gap-1.5 text-[#00E5C9]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                Govt. of India MSME Registered
              </p>
              <p className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#D4FD53]" />
                Maharashtra Shop & Est. (Gumasta)
              </p>
              <p className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#00E5C9]" />
                GST Registered Commercial Enterprise
              </p>
              <p className="text-slate-400">SOC 2 Type II Aligned Security Controls</p>
              <p className="text-slate-400">Private VPC Isolated Deployments</p>
              <p className="text-[#D4FD53] pt-1">1-Hour Response SLA for Inquiries</p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/aparaitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#D4FD53] hover:underline flex items-center gap-1"
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Architectural Lettermark */}
        <div className="pt-12 text-center select-none pointer-events-none overflow-hidden">
          <h1 className="text-[clamp(2.25rem,13vw,11.5rem)] font-bold tracking-tighter text-[#16171B] leading-none uppercase">
            APARAITECH
          </h1>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aparaitech Software (Proprietorship Firm). All rights reserved.</p>
          <p>Headquarters: Gera Imperium, Hinjawadi Phase 2, Pune, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

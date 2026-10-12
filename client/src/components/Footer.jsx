// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#0B0F19] text-slate-600 dark:text-slate-400 pt-16 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Address */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="h-8 w-8 rounded-lg object-contain bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 group-hover:border-blue-500 transition-all shadow-sm"
              />
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Aparaitech Software
              </span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Partner in building an AI-native enterprise. Engineering scalable intelligent systems, autonomous agents, and enterprise cloud infrastructure.
            </p>
            <div className="text-xs text-slate-700 dark:text-slate-300 space-y-2 pt-2">
              <a
                href="https://maps.app.goo.gl/zshFooG4n2aS8Dr3A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Gera Imperium, Hinjawadi Phase 2, Pune, Maharashtra, India</span>
              </a>
              <a
                href="tel:+918261840199"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>+91 82618 40199</span>
              </a>
              <a
                href="mailto:info@ai.aparaitech.org"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>info@ai.aparaitech.org</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generative-ai" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  Generative AI Solutions <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                </Link>
              </li>
              <li>
                <Link to="/cloud" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/company/about-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Aparaitech
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Careers & Engineering Pods
                </Link>
              </li>
              <li>
                <Link to="/company/values" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Our Values & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Live SaaS Platforms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Live Production Platforms
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://cloudkitchen.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Cloud Kitchen AI <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://attendance.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Attendance SaaS <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://apnastore.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  APNA Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://servicehub.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Service Hub Dispatch <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://svpmalumni.aparaitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  SVPM Alumni Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://tests.apraitech.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Online Test Platform <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Governance & Licences
            </h4>
            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-1.5 text-slate-900 dark:text-white font-medium">
                <Shield className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                ISO 27001 & 9001 Certified
              </p>
              <p className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
                Govt. of India MSME Registered
              </p>
              <p className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                Maharashtra Shop & Est. (Gumasta)
              </p>
              <p className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
                GST Registered Commercial Enterprise
              </p>
              <p className="text-slate-500 dark:text-slate-400">SOC 2 Type II Aligned Security Controls</p>
              <p className="text-slate-500 dark:text-slate-400">Private VPC Isolated Deployments</p>
              <p className="text-emerald-600 dark:text-emerald-400 pt-1 font-medium">1-Hour Response SLA for Inquiries</p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/aparaitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Architectural Lettermark */}
        <div className="pt-10 text-center select-none pointer-events-none overflow-hidden opacity-30 dark:opacity-40">
          <h1 className="text-[clamp(2rem,11vw,9rem)] font-extrabold tracking-tight text-slate-300 dark:text-slate-800 leading-none uppercase">
            APARAITECH
          </h1>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Aparaitech Software / Enterprise Technology Platform. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/company/values" className="hover:text-slate-900 dark:hover:text-white transition-colors">Trust & Security</Link>
            <Link to="/company/values" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Statement</Link>
            <Link to="/company/values" className="hover:text-slate-900 dark:hover:text-white transition-colors">Responsible AI Principles</Link>
            <Link to="/company/about-us" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/company/about-us" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Preferences</Link>
          </div>
          <p className="text-slate-500">India HQ: Hinjawadi Phase 2, Pune, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

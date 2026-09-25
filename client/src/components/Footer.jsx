import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink, Sparkles } from "lucide-react";
import { liveProjects, APARAITECH_INFO } from "../data/projectsData";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleLinkClick = (link, e) => {
    e.preventDefault();

    if (link.id) {
      if (window.location.pathname === "/") {
        document
          .getElementById(link.id)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(link.id)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
      return;
    }

    if (link.route) navigate(link.route);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setStatus("loading");
      setMessage("Processing...");

      await axios.post("http://localhost:5000/api/subscribe", { email });

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      if (error.response?.status === 409) {
        setMessage("You are already subscribed.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="contact-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#090b14] via-[#07080e] to-black text-white border-t border-white/10"
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Aparaitech_company_logo.jpeg"
                alt="Aparaitech Logo"
                className="h-14 w-14 rounded-xl shadow-lg border border-white/10 object-cover"
                onError={(e) => {
                  e.target.src = "/vite.svg";
                }}
              />
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  APARAITECH
                </span>
                <span className="block text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                  SOFTWARE
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Engineering high-scale cloud platforms, AI software, and modern enterprise applications across global industries.
            </p>

            <div className="text-gray-300 text-xs sm:text-sm space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5">
                <FaPhone className="text-cyan-400 shrink-0" />
                <a href="tel:+918261840199" className="hover:text-white transition-colors font-medium">
                  +91 82618 40199
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-cyan-400 shrink-0" />
                <a href="mailto:info@ai.aparaitech.org" className="hover:text-white transition-colors font-medium">
                  info@ai.aparaitech.org
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.app.goo.gl/zshFooG4n2aS8Dr3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <FaMapMarkerAlt className="text-cyan-400 shrink-0 mt-1 group-hover:text-cyan-300" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-200">
                    <strong className="text-gray-300 group-hover:text-cyan-300 block transition-colors flex items-center gap-1">
                      Company Location
                      <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
                    </strong>
                    Gera Imperium, Hinjawadi Phase 2, Pune
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Live Products & Solutions */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Live Products
              </h2>
            </div>
            <ul className="space-y-2.5">
              {liveProjects.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-xs sm:text-sm text-gray-400 hover:text-cyan-300 transition-colors py-0.5"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span>{proj.emoji}</span>
                      <span className="truncate">{proj.shortTitle}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-cyan-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Navigation */}
          <div>
            <h2 className="text-base font-bold mb-5 text-white uppercase tracking-wider">
              Company
            </h2>
            <ul className="space-y-2.5">
              {[
                { name: "Home", id: "home" },
                { name: "Company Project Portfolio", route: "/customers/portfolio" },
                { name: "Generative AI", route: "/generative-ai" },
                { name: "Cloud Solutions", route: "/cloud" },
                { name: "Enterprise Solutions", route: "/solutions" },
                { name: "About Us", route: "/company/about-us" },
                { name: "Careers", route: "/company/careers" },
                { name: "Contact & Consultation", id: "contact" },
              ].map((link, i) => (
                <li key={i}>
                  {link.route ? (
                    <Link
                      to={link.route}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleLinkClick(link, e)}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Updated & Official LinkedIn */}
          <div>
            <h2 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
              Connect & Subscribe
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Subscribe for software releases, enterprise insights, and company updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5 mb-6">
              <input
                type="email"
                placeholder="Enter your corporate email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm outline-none focus:border-cyan-500"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02]"
              >
                {loading ? "Processing..." : "Subscribe"}
              </button>

              {message && (
                <p
                  className={`text-xs ${
                    status === "success"
                      ? "text-emerald-400"
                      : status === "error"
                      ? "text-red-400"
                      : "text-cyan-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>

            {/* Official Social Links with LinkedIn Highlight */}
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">
                Official Networks
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={APARAITECH_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0077b5] text-white hover:bg-[#006097] transition-all hover:scale-105 shadow-md shadow-[#0077b5]/20 flex items-center gap-1.5 text-xs font-semibold"
                  title="Aparaitech LinkedIn"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-red-600 text-gray-300 hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-pink-600 text-gray-300 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-blue-600 text-gray-300 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-black text-gray-300 hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] bg-black/40 py-5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} APARAITECH SOFTWARE. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Production Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

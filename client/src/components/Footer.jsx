import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Aparaitech_company_logo.jpeg";
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


const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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

  const handleLinkClick = (link, e) => {
    e.preventDefault();

    // HOME
    if (link.id === "home") {
      if (window.location.pathname === "/") {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
      return;
    }

    // SCROLL SECTIONS (like contact)
    if (link.id) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // ROUTES
    if (link.route) {
      navigate(link.route);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await axios.post(
        "http://localhost:5000/api/contacts",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <footer
      id="contact-section"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white pb-4"
    >
      {/* Top Divider */}
      <div className="h-[2px] bg-gradient-to-r from-blue-500 to-purple-600" />

      <div className="w-full flex flex-col md:flex-row gap-10 px-6 py-10">

        {/* LEFT: BRAND */}
        <div className="md:w-2/5 space-y-4">
          <img src={logo} alt="Aparaitech" className="w-24 rounded-xl" />

          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-400" /> +91 63643 26342
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> info@aparaitech.org
            </p>

            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              360, Neeladri Rd, Electronic City Phase I, Bengaluru – 560100
            </p>

            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              Mukti Complex, Near Prashaskiya Bhawan, Baramati
            </p>
          </div>
        </div>

        {/* CENTER: COMPANY LINKS */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Company</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", id: "home" },
              { name: "Generative AI", route: "/generative-ai" },
              { name: "Cloud", route: "/cloud" },
              { name: "Solutions", route: "/solutions" },
              { name: "About", route: "/about" },
              { name: "Contact", id: "contact-section" },
            ].map((link, i) => (
              <li key={i}>
                <button
                  onClick={(e) => handleLinkClick(link, e)}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: NEWSLETTER + SOCIAL */}
        <div className="md:w-1/3 space-y-5">
          <h3 className="text-lg font-semibold text-blue-400">Stay Updated</h3>

          <p className="text-sm text-gray-300">
            Subscribe for insights, tutorials & updates.
          </p>

          <form onSubmit={handleSubscribe} className="w-full">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700/50 text-white 
                             placeholder-gray-400 rounded-xl px-4 py-3.5 pr-12 outline-none 
                             text-sm transition-all duration-300 
                             focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 
                             focus:bg-gray-800/70 hover:border-gray-600 hover:bg-gray-800/60
                             shadow-inner"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <button
                  type="submit"
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 
                            text-white font-medium px-6 py-3.5 rounded-xl shadow-lg 
                            transition-all duration-300 hover:shadow-xl 
                            hover:from-blue-700 hover:to-purple-700 
                            hover:scale-[1.02] active:scale-[0.98]
                            disabled:opacity-50 disabled:cursor-not-allowed
                            whitespace-nowrap group"
                  disabled={loading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </span>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-white/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {message && (
                <div
                  className={`py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${status === "success"
                      ? "bg-green-900/20 text-green-300 border-green-800/30"
                      : status === "error"
                        ? "bg-red-900/20 text-red-300 border-red-800/30"
                        : "bg-gray-900/20 text-gray-300 border-gray-700/30"
                    }`}
                >
                  <div className="flex items-center gap-2 text-sm">
                    {status === "success" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {message}
                  </div>
                </div>
              )}

            </div>
          </form>

          {/* Social Icons moved to below the newsletter form */}
          <div className="mt-3">
            <h3 className="font-semibold text-sm mb-2 text-gray-300 text-center md:text-left">
              Connect Us
            </h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                {
                  Icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/company/aparaitech",
                  color: "group-hover:text-blue-700",
                  bg: "group-hover:bg-blue-700/20",
                  glow: "group-hover:shadow-blue-500/30"
                },
                {
                  Icon: FaYoutube,
                  link: "https://www.youtube.com/@Aparaitech",
                  color: "group-hover:text-red-600",
                  bg: "group-hover:bg-red-600/20",
                  glow: "group-hover:shadow-red-500/30"
                },
                {
                  Icon: FaInstagram,
                  link: "https://www.instagram.com/aparaitech_global/",
                  color: "group-hover:text-pink-600",
                  bg: "group-hover:bg-gradient-to-br group-hover:from-pink-600/20 group-hover:to-yellow-500/20",
                  glow: "group-hover:shadow-pink-500/30"
                },
                {
                  Icon: FaFacebookF,
                  link: "https://www.facebook.com/yourpage",
                  color: "group-hover:text-blue-600",
                  bg: "group-hover:bg-blue-600/20",
                  glow: "group-hover:shadow-blue-500/30"
                },
                {
                  Icon: FaXTwitter,
                  link: "https://twitter.com/yourprofile",
                  color: "group-hover:text-white",
                  bg: "group-hover:bg-white/10",
                  glow: "group-hover:shadow-white/30"
                },

              ].map(({ Icon, link, color, bg, glow }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-xl bg-white/5 text-gray-300 
                            transition-all duration-300 hover:scale-110 
                            ${bg} ${glow} hover:shadow-lg border border-white/10 
                            hover:border-white/20`}
                  style={{
                    animation: `gentlePulse 4s ease-in-out ${idx * 0.1}s infinite`
                  }}
                >
                  <Icon className={`text-lg transition-colors duration-300 ${color}`} />
                  {/* Subtle Ring Effect on Hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current group-hover:opacity-20 transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

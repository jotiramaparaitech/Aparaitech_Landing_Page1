import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      {/* Clean Top Divider */}
      <div className="h-[1px] bg-gray-800" />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row gap-10">
        {/* Brand & Contact */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
          <img
            src="/Aparaitech_company_logo.jpeg"
            alt="Aparaitech Logo"
            className="h-24 w-24 rounded-xl shadow-xl mb-6"
          />

          <div className="text-gray-300 text-sm space-y-4 text-center md:text-left">
            {/* Phone */}
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhone className="text-blue-400 flex-shrink-0" />
              <span>+91 63643 26342</span>
            </div>

            {/* Email */}
            <div
              className="flex items-center gap-2 justify-center md:justify-start cursor-pointer group/email"
              onClick={() => window.location.href = 'mailto:info@aparaitechsoftware.org'}
              title="Click to email us"
            >
              <FaEnvelope className="text-blue-400 flex-shrink-0 group-hover/email:text-blue-300 transition-colors" />
              <span className="group-hover/email:text-blue-300 transition-colors">
                info@aparaitechsoftware.org
              </span>
            </div>

            {/* Addresses - Stacked Vertically */}
            <div className="space-y-4">
              {/* Branch Address */}
              <div>
                <div
                  className="flex items-start gap-2 justify-center md:justify-start cursor-pointer group/address"
                  onClick={() => {
                    const address = "360, Neeladri Rd, Electronic City Phase I, Bengaluru – 560100";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                  }}
                  title="Click to open in Google Maps"
                >
                  {/* <FaMapMarkerAlt className="text-blue-400 flex-shrink-0 group-hover/address:text-blue-300 transition-colors mt-1" /> */}
                  <div className="flex-1">
                    <span className="font-medium transition-colors">
                      Branch Address
                    </span>
                    <p className="mt-1 hover:text-blue-300 transition-colors cursor-pointer">
                      360, Neeladri Rd, Electronic City Phase I, Bengaluru – 560100
                    </p>
                  </div>
                </div>
              </div>

              {/* New Branch */}
              <div>
                <div
                  className="flex items-start gap-2 justify-center md:justify-start cursor-pointer group/address"
                  onClick={() => {
                    const address = "Mukti Complex, Near Prashaskiya Bhawan, Baramati";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                  }}
                  title="Click to open in Google Maps"
                >
                  <div className="flex-1">
                    <span className="font-medium transition-colors">
                      New Branch
                    </span>
                  {/* <FaMapMarkerAlt className="text-blue-400 flex-shrink-0 group-hover/address:text-blue-300 transition-colors mt-1" /> */}
                    <p className="mt-1 hover:text-blue-300 transition-colors cursor-pointer">
                      Mukti Complex, Near Prashaskiya Bhawan, Baramati
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-5 text-blue-400">Company</h2>
          <ul className="space-y-3">
            {[
              { name: "Home", id: "home" },
              { name: "Generative AI", route: "/generative-ai" },
              { name: "Cloud", route: "/cloud" },
              { name: "Solutions", route: "/solutions" },
              { name: "About", route: "/company/about-us" },
              { name: "Contact", id: "contact" },
            ].map((link, i) => (
              <li key={i}>
                <button
                  onClick={(e) => handleLinkClick(link, e)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-blue-400">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-sm mb-6 md:mb-8">
            Follow our social media for latest updates.
          </p>

          {/* Regular Social Media Icons - Mobile View */}
          <div className="flex gap-7 justify-center md:justify-start">
              {[
                {
                  Icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/company/aparaitech",
                  color: "group-hover:text-blue-700",
                  bg: "group-hover:bg-blue-700/20",
                  glow: "group-hover:shadow-blue-500/30",
                },
                {
                  Icon: FaYoutube,
                  link: "https://www.youtube.com/@Aparaitech",
                  color: "group-hover:text-red-600",
                  bg: "group-hover:bg-red-600/20",
                  glow: "group-hover:shadow-red-500/30",
                },
                {
                  Icon: FaInstagram,
                  link: "https://www.instagram.com/aparaitech_global/",
                  color: "group-hover:text-pink-600",
                  bg: "group-hover:bg-gradient-to-br group-hover:from-pink-600/20 group-hover:to-yellow-500/20",
                  glow: "group-hover:shadow-pink-500/30",
                },
                {
                  Icon: FaFacebookF,
                  link: "https://www.facebook.com/profile.php?id=61586032508393",
                  color: "group-hover:text-blue-600",
                  bg: "group-hover:bg-blue-600/20",
                  glow: "group-hover:shadow-blue-500/30",
                },
                {
                  Icon: FaXTwitter,
                  link: "https://x.com/Aparaitech",
                  color: "text-white group-hover:text-white",
                  bg: "bg-black/30 group-hover:bg-black/50",
                  glow: "group-hover:shadow-black/50",
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
                    animation: `gentlePulse 4s ease-in-out ${idx * 0.1
                      }s infinite`,
                  }}
                >
                  <Icon
                    className={`text-lg transition-colors duration-300 ${color}`}
                  />
                  {/* Subtle Ring Effect on Hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current group-hover:opacity-20 transition-all duration-500"></div>
                </a>
              ))}
            </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Aparaitech. All rights reserved.
      </div>
      
      {/* Animation Keyframes */}
      <style>{`
        @keyframes gentlePulse {
          0%, 100% {
            transform: scale(1) translateZ(0);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          50% {
            transform: scale(1.05) translateZ(0);
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
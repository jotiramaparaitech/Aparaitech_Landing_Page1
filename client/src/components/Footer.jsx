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

          <div className="text-gray-300 text-sm space-y-3 text-center md:text-left">
            <div className="flex gap-2 justify-center md:justify-start">
              <FaPhone className="text-blue-400" />
              <span>+91 63643 26342</span>
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
              <FaEnvelope className="text-blue-400" />
              <span>info@aparaitech.org</span>
            </div>

            <div>
              <div className="flex gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="font-medium">Branch Address</span>
              </div>
              <p className="md:ml-6 mt-1">
                360, Neeladri Rd, Electronic City Phase I, Bengaluru – 560100
              </p>
            </div>

            <div>
              <div className="flex gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="font-medium">New Branch</span>
              </div>
              <p className="md:ml-6 mt-1">
                Mukti Complex, Near Prashaskiya Bhawan, Baramati
              </p>
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

        {/* Newsletter */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-blue-400">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter for latest updates.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-600"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              {loading ? "Processing..." : "Subscribe"}
            </button>

            {message && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {[FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-gray-400 hover:text-white text-lg cursor-pointer transition"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Aparaitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Aparaitech_company_logo.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* 🔥 UNIVERSAL FOOTER NAV HANDLER */
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

  /* 📧 NEWSLETTER */
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Processing...");

    emailjs
      .send(
        "service_wdj15jn",
        "template_xtmll8h",
        {
          to_email: email,
          from_name: "Aparaitech",
          message: "Thank you for subscribing to our newsletter!",
        },
        "gpm7Cf-quPRpX09xI"
      )
      .then(
        () => {
          setMessage("✓ Subscription successful! Check your inbox.");
          setEmail("");
        },
        () => {
          setMessage("Failed to subscribe. Please try again.");
        }
      );
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

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>

          {message && (
            <p className="text-sm text-gray-300">{message}</p>
          )}

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-3">
            {[
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/aparaitech" },
              { Icon: FaYoutube, link: "https://www.youtube.com/@Aparaitech" },
              { Icon: FaInstagram, link: "https://www.instagram.com/aparaitech_global/" },
              { Icon: FaFacebookF, link: "#" },
              { Icon: FaTwitter, link: "#" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:scale-110 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useRef, useState } from "react";
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

const ContactSection = () => {
  const formWrapperRef = useRef(null);

  // 🔹 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔹 Scroll Animations
  const { scrollYProgress } = useScroll({
    target: formWrapperRef,
    offset: ["start 90%", "start 40%"]
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 0.7], [-90, 0]);
  const rawScaleY = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const springConfig = { stiffness: 45, damping: 22, mass: 1 };

  const rotateX = useSpring(rawRotateX, springConfig);
  const scaleY = useSpring(rawScaleY, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  // 🔹 Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  console.log("API URL:", import.meta.env.VITE_API_URL);

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/contacts`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    );

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.log("ERROR:", error);
    console.log("RESPONSE:", error.response);
    alert(error.response?.data?.message || error.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="
        relative py-32 overflow-hidden
        bg-slate-50 dark:bg-[#0B0F19]
        transition-colors
      "
    >
      {/* Decorative Subtle Background Accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-200 dark:bg-[#1E293B]" />
          <h2 className="relative inline-block bg-slate-50 dark:bg-[#0B0F19] px-6 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let’s Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Got an idea?
              <br />
              <span className="text-blue-600 dark:text-blue-400">Let’s build it together.</span>
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              We collaborate closely with you to turn ideas into elegant,
              scalable digital products — with engineering rigor, clarity, and precision.
            </p>
          </div>

          {/* FORM WRAPPER */}
          <div ref={formWrapperRef} id="contact-form" style={{ perspective: "1400px" }}>
            <motion.div
              style={{
                rotateX,
                scaleY,
                opacity,
                transformOrigin: "top center",
                transformStyle: "preserve-3d"
              }}
              className="
                bg-white dark:bg-[#111827]
                border border-slate-200 dark:border-[#1E293B]
                rounded-3xl p-8 sm:p-12
                shadow-xl shadow-slate-200/50 dark:shadow-none
              "
            >
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Start the conversation
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="
                    w-full p-4 rounded-xl
                    bg-slate-50 dark:bg-[#161F32]
                    text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                    border border-slate-200 dark:border-white/10
                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                    transition-all
                  "
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="
                    w-full p-4 rounded-xl
                    bg-slate-50 dark:bg-[#161F32]
                    text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                    border border-slate-200 dark:border-white/10
                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                    transition-all
                  "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind..?"
                  rows="4"
                  required
                  className="
                    w-full p-4 rounded-xl
                    bg-slate-50 dark:bg-[#161F32]
                    text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500
                    border border-slate-200 dark:border-white/10
                    resize-none
                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                    transition-all
                  "
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-center">
                    We'll reach out to you soon!
                  </p>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

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
    <section
      id="contact"
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-br
        from-[#f6f2ff]
        via-[#f1ecff]
        to-[#faf8ff]
      "
    >
      {/* 🔮 Decorative Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#a78bfa]/25 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#7c3aed]/20 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#d9d1f3]" />
          <h2 className="relative inline-block bg-[#f3eeff] px-6 text-3xl font-semibold text-[#2d1b69]">
            Let’s Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl font-semibold text-[#2d1b69] mb-6 leading-tight">
              Got an idea?
              <br />
              Let’s build it together.
            </h3>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              We collaborate closely with you to turn ideas into elegant,
              scalable digital products — with clarity and care.
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
                bg-[#fdfcff]
                border border-[rgba(124,58,237,0.25)]
                rounded-3xl p-12
                shadow-[0_30px_60px_rgba(124,58,237,0.35)]
              "
            >
              <h4 className="text-2xl font-semibold text-[#2d1b69] mb-6">
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
                    bg-white focus:bg-white active:bg-white
                    text-gray-800 placeholder-gray-400
                    border border-[rgba(124,58,237,0.25)]
                    focus:outline-none focus:border-[#7c3aed]
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
                    bg-white focus:bg-white active:bg-white
                    text-gray-800 placeholder-gray-400
                    border border-[rgba(124,58,237,0.25)]
                    focus:outline-none focus:border-[#7c3aed]
                  "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's in your mind..?"
                  rows="4"
                  required
                  className="
                    w-full p-4 rounded-xl
                    bg-white focus:bg-white active:bg-white
                    text-gray-800 placeholder-gray-400
                    border border-[rgba(124,58,237,0.25)]
                    resize-none
                    focus:outline-none focus:border-[#7c3aed]
                  "
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#7c3aed] text-white py-4 rounded-xl font-semibold hover:bg-[#6d28d9] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-600 font-medium text-center">
                    We'll reach out to you soon!!
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

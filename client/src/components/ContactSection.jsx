// client/src/components/ContactSection.jsx
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { contactAPI } from "../utils/api";
import {
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle2,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const formWrapperRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Enterprise Consultation",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, email, and project scope.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await contactAPI.submit(formData);
      setSuccess(true);
      toast.success(res.message || "Thank you! Your inquiry has been submitted and stored in our database.");
      setFormData({ name: "", email: "", phone: "", subject: "Enterprise Consultation", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const googleMapsUrl = "https://maps.google.com/?q=Office+122+Gera+Imperial+Opposite+Wipro+Circle+Hinjawadi+Phase+2+Pune+Maharashtra+411057";

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 bg-[#0B1220] text-white overflow-hidden border-t border-slate-800"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
            Direct Architectural Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Let’s Architect Your Next Platform
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Collaborate directly with our senior software and AI engineers in Pune. We deliver rapid scoping, proof-of-concept sprints, and production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Address Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#020617] border border-slate-800 hover:border-[#0D9488]/50 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#22D3EE] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Corporate Headquarters</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Office 122, Gera Imperial, Opposite Wipro Circle, Hinjawadi Phase 2, Pune, Maharashtra – 411057
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#22D3EE] hover:underline font-mono mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Calling & Phone Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#020617] border border-slate-800 hover:border-[#22D3EE]/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-[#22D3EE] shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Direct Calling</span>
                      <a href="tel:+918261840199" className="text-sm font-bold text-white font-mono hover:text-[#22D3EE] transition-colors">
                        +91 82618 40199
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+918261840199"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-[#22D3EE] hover:text-white transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#020617] border border-slate-800 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">WhatsApp Connect</span>
                      <a
                        href="https://wa.me/919158852129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white font-mono hover:text-emerald-400 transition-colors"
                      >
                        +91 9158852129
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919158852129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-all"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#020617] border border-slate-800 hover:border-[#0D9488]/50 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-[#22D3EE] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Official Email Inquiries</span>
                    <a href="mailto:info@ai.aparaitech.org" className="text-sm font-bold text-white hover:text-[#22D3EE] transition-colors block">
                      info@ai.aparaitech.org
                    </a>
                    <span className="text-xs text-slate-400">Careers & HR: <a href="mailto:hr@info.aparaitech.org" className="text-slate-300 hover:underline">hr@info.aparaitech.org</a></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Response time reassurance */}
            <div className="flex items-center gap-2 text-xs text-slate-400 px-1">
              <Clock className="w-4 h-4 text-[#0D9488]" />
              <span>Average engineering inquiry response time: &lt; 2 business hours</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Intake Form */}
          <div className="lg:col-span-7" ref={formWrapperRef}>
            <div className="bg-[#020617] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below and our technical leads will reach out with architecture options.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Deshmukh"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Business Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@enterprise.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number (Optional)</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Inquiry Subject</label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Custom AI Platform"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Project Scope & Requirements *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current tech stack, target deliverables, or architectural timeline..."
                    rows="4"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D9488] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Transmitting to Database...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Engineering Hub →</span>
                    </>
                  )}
                </button>

                {success && (
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inquiry logged successfully. Our architects will contact you shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;

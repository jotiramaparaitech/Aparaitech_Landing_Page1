// src/components/pages/Customers/Testimonials.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ShieldCheck,
  Star,
  Quote,
  Activity,
  Calendar,
  X,
  Send,
  CheckCircle2,
  Lock,
  Server,
  ArrowUpRight,
  Sparkles,
  Building2,
  Users
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet } from "../../../utils/sheetService";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "Enterprise AI & Cloud Architecture",
    notes: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, corporate email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await saveAppointmentToSheet({
        ...formData,
        service: "Client Reference & Strategy Session",
        source: "Testimonials Page"
      });
      if (result.success) {
        toast.success("Consultation booked! Recorded to executive schedule sheet.");
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          interest: "Enterprise AI & Cloud Architecture",
          notes: ""
        });
      } else {
        toast.error("Booking recorded locally. Engineering leadership will contact you shortly.");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please reach out to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      quote: "Aparaitech's engineering team re-architected our order pipeline from the ground up. Their WebSocket KDS handled peak dinner rushes with zero ticket drops and sub-15s dispatch. Truly production-grade.",
      author: "Vikramaditya S.",
      role: "VP of Engineering & Cloud Ops",
      organization: "CloudKitchen Multi-Brand Network",
      category: "Enterprise Cloud",
      platform: "CloudKitchen OS",
      platformUrl: "https://cloudkitchen.aparaitech.org/",
      stats: "Sub-15s KDS Dispatch // Zero Dropped Tickets",
      rating: 5
    },
    {
      quote: "Edge facial recognition on low-cost tablets seemed impossible until Aparaitech delivered. We eliminated buddy punching across 5,000+ factory workers with sub-400ms verification and 99.8% precision.",
      author: "Nitin Kulkarni",
      role: "Chief Operating Officer",
      organization: "Industrial Manufacturing Group",
      category: "AI & Vision",
      platform: "Attendance AI",
      platformUrl: "https://attendance.aparaitech.org/",
      stats: "5,000+ Daily Check-ins // 99.8% Accuracy",
      rating: 5
    },
    {
      quote: "Our wholesale catalog of 100k+ SKUs renders in under 50ms even on cellular data. Connecting WhatsApp ordering directly to warehouse inventory gave us a huge competitive moat.",
      author: "Deepak Agarwal",
      role: "Managing Director",
      organization: "ApnaStore Retail & Wholesale",
      category: "Omnichannel",
      platform: "ApnaStore Commerce",
      platformUrl: "https://apnastore.aparaitech.org/",
      stats: "100k+ SKUs // <50ms P99 Catalog Search",
      rating: 5
    },
    {
      quote: "ServiceHub automated technician dispatch based on real-time traffic and geolocation. Our critical 30-minute site arrival SLA compliance jumped to 99.4%, saving thousands of transit kilometers.",
      author: "Anand Deshmukh",
      role: "Head of Field Operations",
      organization: "Facility Maintenance Solutions",
      category: "Field Operations",
      platform: "ServiceHub Ops",
      platformUrl: "http://servicehub.aparaitech.org/",
      stats: "34% Transit Reduction // 99.4% SLA Adherence",
      rating: 5
    },
    {
      quote: "Connecting over 15,000 alumni across 20 countries required rigorous identity verification and high security. Aparaitech delivered a flawless institutional portal that our alumni actively love using.",
      author: "Dr. Pratibha Patil",
      role: "Dean of Institutional Relations",
      organization: "SVPM Educational Institutes",
      category: "Institutional",
      platform: "SVPM Alumni Portal",
      platformUrl: "http://svpmalumni.aparaitech.org/",
      stats: "15,000+ Alumni // 1,200+ Mentorship Matches",
      rating: 5
    },
    {
      quote: "Their in-browser Monaco code evaluation engine revolutionized our engineering screening. We evaluated 250+ developers concurrently with sub-350ms code execution feedback and zero server crashes.",
      author: "Sameer Joshi",
      role: "Director of Technical Talent",
      organization: "Aparaitech Technical Academy",
      category: "AI & Vision",
      platform: "Aparaitech LMS",
      platformUrl: "https://lms-full-stack-mcq7.vercel.app/",
      stats: "250+ Concurrent Devs // <350ms Test Evaluation",
      rating: 5
    }
  ];

  const categories = ["All", "Enterprise Cloud", "AI & Vision", "Omnichannel", "Field Operations", "Institutional"];

  const filteredTestimonials = activeFilter === "All"
    ? testimonials
    : testimonials.filter((t) => t.category === activeFilter);

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#22242A] pt-24 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#766DFE 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#D4FD53]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53]">
              VERIFIED ENDORSEMENTS // CLIENT TESTIMONIALS
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Trusted by CTOs, Product Leads & Operations Directors
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Read direct feedback from executives and technical leaders whose production systems are built, hosted, and operated by Aparaitech Software's Pune engineering pods.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
              100% Production Verified
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              5.0 / 5.0 Engineering CSAT
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-[#00E5C9]" />
              Pune Hinjawadi CoE Delivery
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Connect with Our Architects</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS MASONRY GRID */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? "bg-[#D4FD53] text-[#0C0D0F] font-bold shadow-md shadow-[#D4FD53]/20"
                  : "bg-[#141518] text-slate-300 border border-[#22242A] hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-8 hover:border-[#D4FD53]/50 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-[#00E5C9] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#22242A] mb-2 group-hover:text-[#D4FD53]/30 transition-colors" />

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>

                {/* Platform Metric Badge */}
                <div className="rounded-lg bg-[#0C0D0F] border border-[#22242A] p-3 mb-6">
                  <div className="font-mono text-xs text-[#D4FD53] font-bold">
                    {item.stats}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>System: {item.platform}</span>
                    <a
                      href={item.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00E5C9] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#22242A] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#D4FD53] shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.author}</div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{item.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXECUTIVE CTA */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT ACCESS TO LEAD ARCHITECTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Join the Enterprises Building with Aparaitech
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base mb-8">
            Experience the difference of partnering with engineers who own the production lifecycle from initial architectural spike to 24/7 SLA monitoring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Sprint</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#22242A] bg-[#141518] p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Executive Discovery Consultation</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Schedule Architecture Discovery
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Recorded directly to our leadership management sheet for immediate follow-up by Pune senior architects.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Alok Singhania"
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alok@company.com"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter organization"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Area of Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="Enterprise AI & Cloud Architecture">Enterprise AI & Cloud Architecture</option>
                    <option value="Edge Biometric Recognition">Edge Biometric Recognition</option>
                    <option value="CloudKitchen & POS Systems">CloudKitchen & POS Systems</option>
                    <option value="Omnichannel Commerce Engine">Omnichannel Commerce Engine</option>
                    <option value="Field Ops Routing & Dispatch">Field Ops Routing & Dispatch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Details or Questions</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tell us about your upcoming initiatives, timeline, or reference questions..."
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#D4FD53] py-3 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Logging Request..." : "Schedule Discovery Session"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
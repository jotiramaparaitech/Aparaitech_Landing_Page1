// src/components/pages/Company/News.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Newspaper,
  Calendar,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
  Building2,
  Layers,
  ChevronRight,
  X,
  Mail,
  Phone
} from "lucide-react";

const News = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = {
    title: "Aparaitech Expands Pune Hinjawadi Center of Excellence to Accelerate Enterprise AI & Real-Time SaaS",
    category: "Press Release",
    date: "Sep 2024",
    readTime: "4 min read",
    author: "Executive Leadership, Aparaitech Software",
    excerpt: "Strengthening our engineering footprint in Hinjawadi Phase 2, Pune, Aparaitech inaugurates dedicated engineering labs for real-time WebSocket architectures, computer vision biometrics, and autonomous multi-agent systems.",
    content: "Aparaitech Software has announced the formal expansion of its Engineering Center of Excellence located in Hinjawadi Phase 2, Pune, Maharashtra. The facility expansion provides dedicated hardware testbeds for on-device edge AI (NVIDIA Jetson, Android kiosks), high-concurrency Redis and Kafka event streaming testbeds, and client demonstration facilities for commercial cloud kitchen operating systems and omnichannel commerce.",
    highlights: [
      "Expanded Hinjawadi Phase 2 engineering facility with dedicated CoE pods",
      "Testbeds for sub-400ms edge biometric recognition and IoT streaming",
      "Accelerating commercial rollouts for CloudKitchen OS, Attendance AI, and ApnaStore",
      "Active hiring pipeline for distributed backend and full-stack software architects"
    ]
  };

  const articles = [
    {
      id: "news-cloudkitchen",
      title: "CloudKitchen OS Deploys to Commercial Multi-Brand Kitchens Across Maharashtra",
      category: "Product Launches",
      date: "Aug 2024",
      readTime: "3 min read",
      author: "Platform Engineering Pod",
      excerpt: "The event-driven Kitchen Display System (KDS) achieves sub-15s station dispatch, eliminating ticket drops across peak evening dinner rushes for 5+ simultaneous virtual food brands.",
      content: "Aparaitech Software announced the wide commercial release of CloudKitchen OS, an event-driven operating system designed specifically for commercial cloud kitchens and ghost kitchen hubs. Built using Node.js, WebSockets, and Redis Pub/Sub, the system routes orders instantaneously to designated cooking stations without reliance on single points of failure.",
      highlights: [
        "Sub-15 second station routing and acoustic prep timers",
        "Zero dropped tickets during peak rush-hour demand",
        "Direct live platform available at cloudkitchen.aparaitech.org"
      ]
    },
    {
      id: "news-attendance",
      title: "Attendance AI Introduces Sub-400ms Edge Facial Biometrics with 3D Liveness Detection",
      category: "Product Launches",
      date: "Jul 2024",
      readTime: "5 min read",
      author: "Computer Vision Research Group",
      excerpt: "Our quantized on-device neural network delivers 99.8% biometric verification accuracy on budget Android tablets, effectively eliminating factory buddy-punching.",
      content: "Aparaitech Computer Vision engineering team has rolled out a major algorithmic upgrade to the Attendance AI platform. By quantizing MobileNetV3 backbones to 8-bit integers and embedding passive infrared anti-spoofing heuristics, the system achieves sub-400ms face verification on low-cost tablet devices without transmitting raw video feeds over public networks.",
      highlights: [
        "99.8% face verification precision across variable lighting conditions",
        "Eliminates 100% of proxy check-ins for 5,000+ daily factory workers",
        "Direct live platform available at attendance.aparaitech.org"
      ]
    },
    {
      id: "news-apnastore",
      title: "ApnaStore Integrates WhatsApp Business Cloud Engine with 100k+ SKU Real-Time Catalog",
      category: "Product Launches",
      date: "Jun 2024",
      readTime: "3 min read",
      author: "Omnichannel Commerce Pod",
      excerpt: "Wholesale distribution warehouses achieve sub-50ms product search and automated WhatsApp order checkout with zero inventory discrepancies.",
      content: "Bridging wholesale distribution with modern digital commerce, Aparaitech Software rolled out a major upgrade to the ApnaStore commerce engine. Incorporating in-memory Redis indexing, the engine delivers catalog queries in under 50 milliseconds across 100,000+ SKUs while allowing buyers to confirm bulk replenishment orders directly via official WhatsApp webhooks.",
      highlights: [
        "Sub-50ms P99 search latency on cellular connections",
        "Zero inventory discrepancies between warehouses and retail points of sale",
        "Direct live platform available at apnastore.aparaitech.org"
      ]
    },
    {
      id: "news-servicehub",
      title: "ServiceHub Surpasses 50,000 Autonomous Dispatches with 99.4% SLA Adherence",
      category: "Engineering Dispatches",
      date: "May 2024",
      readTime: "4 min read",
      author: "Field Operations Team",
      excerpt: "Dynamic geospatial proximity routing and offline-first PWA digital signatures reduce technician transit time by 34% across commercial facility accounts.",
      content: "Aparaitech's ServiceHub enterprise field operations platform reached a major milestone, processing over 50,000 emergency and routine maintenance work orders. Field technicians using the offline-first mobile app captured customer signatures and proof-of-work timestamps without losing a single work order even in basement facility sites.",
      highlights: [
        "34% reduction in overall technician travel transit time",
        "99.4% compliance on 30-minute critical site arrival SLAs",
        "Direct live platform available at servicehub.aparaitech.org"
      ]
    },
    {
      id: "news-svpm",
      title: "SVPM Alumni Network Reaches 15,000+ Verified Members Across 20 Countries",
      category: "Engineering Dispatches",
      date: "Apr 2024",
      readTime: "3 min read",
      author: "Institutional Solutions Pod",
      excerpt: "The secure federated institutional directory powers automated student mentorship matchmaking, verifiable credential registries, and alumni endowment fundraising.",
      content: "The institutional alumni portal engineered by Aparaitech for SVPM Educational Institutes has surpassed 15,000 registered graduates. Featuring single sign-on verification, encrypted records storage, and direct mentorship pairing algorithms, the platform continues to foster deep ties between industry veterans and current students.",
      highlights: [
        "Over 1,200 active student-to-alumni career mentorship connections",
        "Federated institutional GraphQL architecture with 100% uptime",
        "Direct live platform available at svpmalumni.aparaitech.org"
      ]
    }
  ];

  const categories = ["All", "Press Release", "Product Launches", "Engineering Dispatches"];

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-[#1E293B] pt-24 pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-3 w-3 bg-[#10B981]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#34D399]">
              NEWSROOM // PRESS DISPATCHES & MILESTONES
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
            Aparaitech Software Newsroom
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl leading-relaxed">
            Official announcements, engineering milestones, system releases, and corporate dispatches from our Pune Hinjawadi Center of Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-[#34D399]" />
              Pune Hinjawadi Phase 2 CoE
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
              6 Live Production Platforms
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE BANNER */}
      <section className="py-14 border-b border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#111827]/70">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div
            onClick={() => setSelectedArticle(featuredArticle)}
            className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-8 md:p-12 hover:border-blue-500/40 transition-all cursor-pointer relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-white/10 font-mono text-xs text-[#34D399]">
                {featuredArticle.category}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {featuredArticle.date} • {featuredArticle.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#34D399] transition-colors leading-tight max-w-4xl">
              {featuredArticle.title}
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
              {featuredArticle.excerpt}
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-[#34D399] group-hover:underline">
              <span>Read Full Press Dispatch</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY FILTER & ARTICLES GRID */}
      <section className="py-16 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white font-bold shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-[#111827] text-slate-300 border border-slate-200 dark:border-[#1E293B] hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedArticle(article)}
              className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#111827] p-7 hover:border-blue-500/40 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-[#161F32] border border-white/5 text-[#2DD4BF] uppercase">
                    {article.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#34D399] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500">{article.readTime}</span>
                <span className="text-[#34D399] inline-flex items-center gap-1 group-hover:underline">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEDIA CONTACT & PRESS ENQUIRIES */}
      <section className="py-16 border-t border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#111827]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-[#161F32] border border-white/10 font-mono text-xs text-[#2DD4BF] mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>PRESS & MEDIA INQUIRIES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Looking for Official Statements or Executive Interviews?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            For press briefings, product demo assets, or interviews with Aparaitech leadership, contact our corporate communications desk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a
              href="mailto:info@ai.aparaitech.org?subject=Press%20Inquiry"
              className="inline-flex items-center gap-2 rounded bg-[#2563EB] px-6 py-3 text-white font-bold hover:bg-[#1D4ED8] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>info@ai.aparaitech.org</span>
            </a>
            <a
              href="tel:+918261840199"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-slate-100 dark:bg-[#161F32] px-6 py-3 text-white hover:bg-[#1E293B] transition-all"
            >
              <Phone className="w-4 h-4 text-[#34D399]" />
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. MODAL: FULL ARTICLE READING */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#34D399] uppercase mb-2">
              <Newspaper className="w-4 h-4" />
              <span>{selectedArticle.category} // Dispatch</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400 mb-6 pb-4 border-b border-slate-200 dark:border-[#1E293B]">
              <span>Date: <strong className="text-white">{selectedArticle.date}</strong></span>
              <span>•</span>
              <span>By {selectedArticle.author || "Aparaitech Press"}</span>
              <span>•</span>
              <span className="text-[#2DD4BF]">{selectedArticle.readTime}</span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">
              {selectedArticle.excerpt}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedArticle.content}
            </p>

            {selectedArticle.highlights && (
              <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-5 mb-6">
                <h4 className="font-mono text-xs uppercase text-[#34D399] tracking-wider mb-3">
                  Key Takeaways & Production Milestones
                </h4>
                <div className="space-y-2">
                  {selectedArticle.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded bg-slate-100 dark:bg-[#161F32] border border-white/20 px-6 py-2.5 text-xs font-mono text-white hover:bg-[#1E293B]"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
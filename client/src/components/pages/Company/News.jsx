// src/components/pages/Company/News.jsx

import React, { useState } from "react";
import {
  Newspaper,
  Calendar,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Building2,
  Layers,
  ChevronRight,
  X,
  Mail,
  Phone,
} from "lucide-react";

const featuredArticle = {
  title:
    "Aparaitech Expands Pune Hinjawadi Center of Excellence to Accelerate Enterprise AI & Real-Time SaaS",
  category: "Press Release",
  date: "Sep 2024",
  readTime: "4 min read",
  author: "Executive Leadership, Aparaitech Software",
  excerpt:
    "Strengthening our engineering footprint in Hinjawadi Phase 2, Pune, Aparaitech inaugurates dedicated engineering labs for real-time WebSocket architectures, computer vision biometrics, and autonomous multi-agent systems.",
  content:
    "Aparaitech Software has announced the formal expansion of its Engineering Center of Excellence located in Hinjawadi Phase 2, Pune, Maharashtra. The facility expansion provides dedicated hardware testbeds for on-device edge AI (NVIDIA Jetson, Android kiosks), high-concurrency Redis and Kafka event streaming testbeds, and client demonstration facilities for commercial cloud kitchen operating systems and omnichannel commerce.",
  highlights: [
    "Expanded Hinjawadi Phase 2 engineering facility with dedicated CoE pods",
    "Testbeds for sub-400ms edge biometric recognition and IoT streaming",
    "Accelerating commercial rollouts for CloudKitchen OS, Attendance AI, and ApnaStore",
    "Active hiring pipeline for distributed backend and full-stack software architects",
  ],
};

const articles = [
  {
    id: "news-cloudkitchen",
    title:
      "CloudKitchen OS Deploys to Commercial Multi-Brand Kitchens Across Maharashtra",
    category: "Product Launches",
    date: "Aug 2024",
    readTime: "3 min read",
    author: "Platform Engineering Pod",
    excerpt:
      "The event-driven Kitchen Display System (KDS) achieves sub-15s station dispatch, eliminating ticket drops across peak evening dinner rushes for 5+ simultaneous virtual food brands.",
    content:
      "Aparaitech Software announced the wide commercial release of CloudKitchen OS, an event-driven operating system designed specifically for commercial cloud kitchens and ghost kitchen hubs. Built using Node.js, WebSockets, and Redis Pub/Sub, the system routes orders instantaneously to designated cooking stations without reliance on single points of failure.",
    highlights: [
      "Sub-15 second station routing and acoustic prep timers",
      "Zero dropped tickets during peak rush-hour demand",
      "Direct live platform available at cloudkitchen.aparaitech.org",
    ],
  },
  {
    id: "news-attendance",
    title:
      "Attendance AI Introduces Sub-400ms Edge Facial Biometrics with 3D Liveness Detection",
    category: "Product Launches",
    date: "Jul 2024",
    readTime: "5 min read",
    author: "Computer Vision Research Group",
    excerpt:
      "Our quantized on-device neural network delivers 99.8% biometric verification accuracy on budget Android tablets, effectively eliminating factory buddy-punching.",
    content:
      "Aparaitech Computer Vision engineering team has rolled out a major algorithmic upgrade to the Attendance AI platform. By quantizing MobileNetV3 backbones to 8-bit integers and embedding passive infrared anti-spoofing heuristics, the system achieves sub-400ms face verification on low-cost tablet devices without transmitting raw video feeds over public networks.",
    highlights: [
      "99.8% face verification precision across variable lighting conditions",
      "Eliminates 100% of proxy check-ins for 5,000+ daily factory workers",
      "Direct live platform available at attendance.aparaitech.org",
    ],
  },
  {
    id: "news-apnastore",
    title:
      "ApnaStore Integrates WhatsApp Business Cloud Engine with 100k+ SKU Real-Time Catalog",
    category: "Product Launches",
    date: "Jun 2024",
    readTime: "3 min read",
    author: "Omnichannel Commerce Pod",
    excerpt:
      "Wholesale distribution warehouses achieve sub-50ms product search and automated WhatsApp order checkout with zero inventory discrepancies.",
    content:
      "Bridging wholesale distribution with modern digital commerce, Aparaitech Software rolled out a major upgrade to the ApnaStore commerce engine. Incorporating in-memory Redis indexing, the engine delivers catalog queries in under 50 milliseconds across 100,000+ SKUs while allowing buyers to confirm bulk replenishment orders directly via official WhatsApp webhooks.",
    highlights: [
      "Sub-50ms P99 search latency on cellular connections",
      "Zero inventory discrepancies between warehouses and retail points of sale",
      "Direct live platform available at apnastore.aparaitech.org",
    ],
  },
  {
    id: "news-servicehub",
    title:
      "ServiceHub Surpasses 50,000 Autonomous Dispatches with 99.4% SLA Adherence",
    category: "Engineering Dispatches",
    date: "May 2024",
    readTime: "4 min read",
    author: "Field Operations Team",
    excerpt:
      "Dynamic geospatial proximity routing and offline-first PWA digital signatures reduce technician transit time by 34% across commercial facility accounts.",
    content:
      "Aparaitech's ServiceHub enterprise field operations platform reached a major milestone, processing over 50,000 emergency and routine maintenance work orders. Field technicians using the offline-first mobile app captured customer signatures and proof-of-work timestamps without losing a single work order even in basement facility sites.",
    highlights: [
      "34% reduction in overall technician travel transit time",
      "99.4% compliance on 30-minute critical site arrival SLAs",
      "Direct live platform available at servicehub.aparaitech.org",
    ],
  },
  {
    id: "news-svpm",
    title:
      "SVPM Alumni Network Reaches 15,000+ Verified Members Across 20 Countries",
    category: "Engineering Dispatches",
    date: "Apr 2024",
    readTime: "3 min read",
    author: "Institutional Solutions Pod",
    excerpt:
      "The secure federated institutional directory powers automated student mentorship matchmaking, verifiable credential registries, and alumni endowment fundraising.",
    content:
      "The institutional alumni portal engineered by Aparaitech for SVPM Educational Institutes has surpassed 15,000 registered graduates. Featuring single sign-on verification, encrypted records storage, and direct mentorship pairing algorithms, the platform continues to foster deep ties between industry veterans and current students.",
    highlights: [
      "Over 1,200 active student-to-alumni career mentorship connections",
      "Federated institutional GraphQL architecture with 100% uptime",
      "Direct live platform available at svpmalumni.aparaitech.org",
    ],
  },
];

const categories = [
  "All",
  "Press Release",
  "Product Launches",
  "Engineering Dispatches",
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const openArticle = (article) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  const handleCardKeyDown = (event, article) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openArticle(article);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 selection:text-slate-950 dark:bg-[#0B1220] dark:text-white dark:selection:bg-sky-300 dark:selection:text-slate-950">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white pb-20 pt-24 dark:border-slate-800 dark:from-[#101E33] dark:to-[#0B1220]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#7DD3FC 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10"
        />

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-3 w-3 rounded-sm bg-sky-500 dark:bg-sky-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              NEWSROOM // PRESS DISPATCHES & MILESTONES
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(1.75rem,5vw,4.25rem)] font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
            Aparaitech Software{" "}
            <span className="text-sky-600 dark:text-sky-300">Newsroom</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Official announcements, engineering milestones, system releases,
            and corporate dispatches from our Pune Hinjawadi Center of
            Excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-3 py-2 font-mono text-xs text-slate-600 shadow-sm dark:border-slate-700 dark:bg-[#111C30]/90 dark:text-slate-300">
              <Building2 className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              Pune Hinjawadi Phase 2 CoE
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-3 py-2 font-mono text-xs text-slate-600 shadow-sm dark:border-slate-700 dark:bg-[#111C30]/90 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              6 Live Production Platforms
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE */}
      <section className="border-b border-slate-200 bg-slate-50/80 py-14 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <article
            role="button"
            tabIndex={0}
            aria-label={`Read featured article: ${featuredArticle.title}`}
            onClick={() => openArticle(featuredArticle)}
            onKeyDown={(event) => handleCardKeyDown(event, featuredArticle)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:p-12 dark:border-slate-700 dark:bg-[#111C30] dark:shadow-none dark:hover:border-sky-400/50 dark:hover:shadow-sky-950/20 dark:focus-visible:ring-sky-300"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-100/80 blur-3xl transition-colors group-hover:bg-sky-200/70 dark:bg-sky-400/5 dark:group-hover:bg-sky-400/10"
            />

            <div className="relative">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-1 font-mono text-xs text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                  {featuredArticle.category}
                </span>

                <span className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {featuredArticle.date}
                  <span aria-hidden="true">•</span>
                  <Clock className="h-3.5 w-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="mb-4 max-w-4xl text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-sky-700 md:text-4xl dark:text-white dark:group-hover:text-sky-300">
                {featuredArticle.title}
              </h2>

              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
                {featuredArticle.excerpt}
              </p>

              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-700 dark:text-sky-300">
                <span>Read Full Press Dispatch</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. CATEGORY FILTERS AND ARTICLE GRID */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Filter:
            </span>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-300 ${
                  activeCategory === category
                    ? "bg-sky-600 font-bold text-white shadow-md shadow-sky-600/15 dark:bg-sky-300 dark:text-slate-950 dark:shadow-sky-300/10"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-[#111C30] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:bg-[#17243A]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                role="button"
                tabIndex={0}
                aria-label={`Read article: ${article.title}`}
                onClick={() => openArticle(article)}
                onKeyDown={(event) => handleCardKeyDown(event, article)}
                className="group flex cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:p-7 dark:border-slate-700 dark:bg-[#111C30] dark:shadow-none dark:hover:border-sky-400/50 dark:hover:shadow-sky-950/20 dark:focus-visible:ring-sky-300"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="rounded-md border border-sky-100 bg-sky-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
                      {article.category}
                    </span>

                    <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
                    {article.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 font-mono text-xs dark:border-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>

                  <span className="inline-flex items-center gap-1 font-semibold text-sky-700 dark:text-sky-300">
                    Read Article
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-12 text-center dark:border-slate-700 dark:bg-[#111C30]">
            <Newspaper className="mx-auto mb-3 h-8 w-8 text-sky-600 dark:text-sky-300" />
            <p className="text-sm text-slate-600 dark:text-slate-300">
              No articles found in this category.
            </p>
          </div>
        )}
      </section>

      {/* 4. MEDIA CONTACT */}
      <section className="border-t border-slate-200 bg-sky-50/60 py-16 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-[1240px] px-6 text-center lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-white px-3 py-1.5 font-mono text-xs text-sky-700 dark:border-sky-400/20 dark:bg-[#111C30] dark:text-sky-300">
            <Newspaper className="h-3.5 w-3.5" />
            <span>PRESS & MEDIA INQUIRIES</span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
            Looking for Official Statements or Executive Interviews?
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            For press briefings, product demo assets, or interviews with
            Aparaitech leadership, contact our corporate communications desk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:info@ai.aparaitech.org?subject=Press%20Inquiry"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-600/10 transition-all hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 dark:focus-visible:ring-sky-300 dark:focus-visible:ring-offset-[#0F172A]"
            >
              <Mail className="h-4 w-4" />
              <span>info@ai.aparaitech.org</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="tel:+918261840199"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-[#111C30] dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:bg-[#17243A] dark:focus-visible:ring-sky-300"
            >
              <Phone className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              <span>+91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FULL ARTICLE MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 backdrop-blur-sm sm:p-5 dark:bg-black/80"
          onClick={closeArticle}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="news-modal-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 dark:border-slate-700 dark:bg-[#111C30]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeArticle}
              aria-label="Close article"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:right-5 sm:top-5 dark:border-slate-700 dark:bg-[#17243A] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 dark:focus-visible:ring-sky-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-3 flex items-center gap-2 pr-12 font-mono text-xs uppercase tracking-wider text-sky-700 dark:text-sky-300">
              <Newspaper className="h-4 w-4 shrink-0" />
              <span>{selectedArticle.category} / Dispatch</span>
            </div>

            <h2
              id="news-modal-title"
              className="mb-4 pr-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl dark:text-white"
            >
              {selectedArticle.title}
            </h2>

            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-slate-200 pb-5 font-mono text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
              <span>
                Date:{" "}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">
                  {selectedArticle.date}
                </strong>
              </span>

              <span aria-hidden="true">•</span>

              <span>
                By {selectedArticle.author || "Aparaitech Press"}
              </span>

              <span aria-hidden="true">•</span>

              <span className="inline-flex items-center gap-1.5 text-sky-700 dark:text-sky-300">
                <Clock className="h-3.5 w-3.5" />
                {selectedArticle.readTime}
              </span>
            </div>

            <p className="mb-5 text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              {selectedArticle.excerpt}
            </p>

            <p className="mb-7 whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300">
              {selectedArticle.content}
            </p>

            {selectedArticle.highlights?.length > 0 && (
              <div className="mb-6 rounded-xl border border-slate-200 bg-sky-50/70 p-5 dark:border-slate-700 dark:bg-[#0B1220]">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                  <Layers className="h-4 w-4" />
                  Key Takeaways & Production Milestones
                </h3>

                <div className="space-y-3">
                  {selectedArticle.highlights.map((highlight, index) => (
                    <div
                      key={`${selectedArticle.id || "featured"}-${index}`}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end border-t border-slate-200 pt-5 dark:border-slate-700">
              <button
                type="button"
                onClick={closeArticle}
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-[#17243A] dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:bg-[#1B2D46] dark:focus-visible:ring-sky-300"
              >
                <X className="h-4 w-4" />
                Close Dispatch
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default News;
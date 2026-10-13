// src/components/pages/Support/CommunityForum.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  Plus,
  Pin,
  Clock,
  Eye,
  CheckCircle2,
  Sparkles,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  X,
  Send,
  Users,
  Activity
} from "lucide-react";
import { toast } from "react-hot-toast";

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Discussions");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewDiscussionModal, setShowNewDiscussionModal] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    content: "",
    category: "Architecture & Scaling",
    author: "Enterprise Architect"
  });

  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Aparaitech v3.0 Architecture Release: Edge AI Vision & Multi-Brand KDS Engine",
      author: "Aparaitech Pune CoE",
      replies: 128,
      views: 6420,
      tag: "Announcements",
      pinned: true,
      timestamp: "Yesterday",
      lastReply: "20 min ago"
    },
    {
      id: 2,
      title: "Achieving zero-drift inventory sync between warehouse pallets & retail POS via Redis Streams",
      author: "Vikram S.",
      replies: 42,
      views: 1240,
      tag: "Architecture & Scaling",
      pinned: true,
      timestamp: "3 hours ago",
      lastReply: "12 min ago"
    },
    {
      id: 3,
      title: "Optimizing 3D infrared anti-spoof liveness detection on budget Android tablets",
      author: "Nitin Kulkarni",
      replies: 18,
      views: 890,
      tag: "AI & Vision",
      timestamp: "5 hours ago",
      lastReply: "1 hour ago"
    },
    {
      id: 4,
      title: "Benchmarking pgvector vs Pinecone for 1M+ chunk enterprise RAG with FlashRank reranking",
      author: "Dr. Sameer Joshi",
      replies: 31,
      views: 1540,
      tag: "AI & Vision",
      timestamp: "8 hours ago",
      lastReply: "2 hours ago"
    },
    {
      id: 5,
      title: "Handling offline conflict resolution in IndexedDB for field technician service apps",
      author: "Anand Deshmukh",
      replies: 15,
      views: 620,
      tag: "Field Ops & Mobile",
      timestamp: "1 day ago",
      lastReply: "4 hours ago"
    },
    {
      id: 6,
      title: "Feature Request: Declarative Kafka CDC connector for custom PostgreSQL audit tables",
      author: "Alok R.",
      replies: 24,
      views: 980,
      tag: "Feature Requests",
      timestamp: "2 days ago",
      lastReply: "6 hours ago"
    }
  ]);

  const categories = [
    "All Discussions",
    "Announcements",
    "Architecture & Scaling",
    "AI & Vision",
    "Field Ops & Mobile",
    "Feature Requests"
  ];

  const topContributors = [
    { name: "Pratik Aparaitech", role: "Pune CoE Architect", points: 2840, avatar: "PA" },
    { name: "Vikram S.", role: "Principal Cloud Engineer", points: 1950, avatar: "VS" },
    { name: "Nitin Kulkarni", role: "Edge AI Specialist", points: 1420, avatar: "NK" }
  ];

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCategory =
      selectedCategory === "All Discussions" || discussion.tag === selectedCategory;
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewDiscussion = (e) => {
    e.preventDefault();
    if (!newDiscussion.title.trim() || !newDiscussion.content.trim()) {
      toast.error("Please provide both a discussion title and technical description.");
      return;
    }
    const newTopic = {
      id: discussions.length + 1,
      title: newDiscussion.title,
      author: newDiscussion.author,
      replies: 0,
      views: 1,
      tag: newDiscussion.category,
      timestamp: "Just now",
      lastReply: "Just now"
    };
    setDiscussions([newTopic, ...discussions]);
    setNewDiscussion({
      title: "",
      content: "",
      category: "Architecture & Scaling",
      author: "Enterprise Architect"
    });
    setShowNewDiscussionModal(false);
    toast.success("Discussion topic posted to developer community!");
  };

  return (
    <div className="bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] text-[#142B4A] dark:text-[#F1F5F9] font-sans selection:bg-blue-500/30 selection:text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] pt-24 pb-16">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="block h-3 w-3 bg-[#10B981]"></span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF]">
                  DEVELOPER ECOSYSTEM // COMMUNITY DISCUSSIONS
                </span>
              </div>
              <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
                Aparaitech Developer Community
              </h1>
              <p className="mt-2 text-slate-300 text-base max-w-2xl">
                Collaborate directly with fellow enterprise architects, systems engineers, and Aparaitech Hinjawadi Pune CoE engineering leads.
              </p>
            </div>

            <button
              onClick={() => setShowNewDiscussionModal(true)}
              className="inline-flex h-[48px] items-center gap-2 rounded bg-[#10B981] px-6 text-xs font-mono font-bold uppercase text-[#142B4A] dark:text-[#F1F5F9] hover:brightness-105 transition-all shadow-lg shadow-blue-500/20 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Start New Discussion</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORUM BODY */}
      <section className="py-12 max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:max-w-md relative">
            <Search className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search discussions by topic or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[44px] rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] pl-10 pr-4 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span>{filteredDiscussions.length} active threads</span>
            <span>•</span>
            <span className="text-[#00E5C9]">24/7 CoE Moderation</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            {/* Category Navigation */}
            <div className="rounded-xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-white dark:bg-[#131F32] p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                Discussion Channels
              </h3>
              <ul className="space-y-1">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded font-mono text-xs transition-colors flex items-center justify-between ${
                        selectedCategory === cat
                          ? "bg-[#10B981] text-white font-bold"
                          : "text-slate-300 hover:bg-slate-100 dark:bg-[#161F32] hover:text-white"
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <span className="h-1.5 w-1.5 rounded-full bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220]"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Contributors */}
            <div className="rounded-xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-white dark:bg-[#131F32] p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#00E5C9] mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Featured Engineering Leads</span>
              </h3>
              <div className="space-y-3.5">
                {topContributors.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#0F9F8F] dark:text-[#2DD4BF]">
                      {c.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#142B4A] dark:text-[#F1F5F9]">{c.name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{c.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forum Telemetry Stats */}
            <div className="rounded-xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] p-5 font-mono text-xs">
              <h3 className="text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                <span>Community Telemetry</span>
              </h3>
              <div className="space-y-2 border-t border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] pt-3 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Active Engineers:</span>
                  <span className="font-bold text-[#142B4A] dark:text-[#F1F5F9]">1,420+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Total Code Reviews:</span>
                  <span className="font-bold text-[#142B4A] dark:text-[#F1F5F9]">850+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Median Answer Time:</span>
                  <span className="font-bold text-[#00E5C9]">&lt;24 mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN THREAD LIST */}
          <div className="lg:col-span-8 space-y-4">
            {filteredDiscussions.length > 0 ? (
              filteredDiscussions.map((d) => (
                <div
                  key={d.id}
                  className={`p-6 rounded-xl border transition-all duration-200 group ${
                    d.pinned
                      ? "border-[#0F9F8F]/40 bg-white dark:bg-[#131F32]"
                      : "border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-white dark:bg-[#131F32] hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {d.pinned && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-[#10B981] text-[#142B4A] dark:text-[#F1F5F9] px-2 py-0.5 rounded">
                            <Pin className="w-3 h-3" />
                            PINNED
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-[#00E5C9] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-[#161F32] border border-white/5">
                          {d.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-[#142B4A] dark:text-[#F1F5F9] group-hover:text-[#0F9F8F] dark:text-[#2DD4BF] transition-colors leading-snug">
                        {d.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                        <span>Started by <strong className="text-slate-200">{d.author}</strong></span>
                        <span>•</span>
                        <span>{d.timestamp}</span>
                        {d.lastReply && (
                          <>
                            <span>•</span>
                            <span className="text-[#64748B] dark:text-[#94A3B8]">Last reply {d.lastReply}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
                      <div className="text-center px-2 py-1 rounded bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B]">
                        <div className="font-bold text-[#0F9F8F] dark:text-[#2DD4BF]">{d.replies}</div>
                        <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Replies</div>
                      </div>
                      <div className="text-center px-2 py-1 rounded bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B]">
                        <div className="font-bold text-[#142B4A] dark:text-[#F1F5F9]">{d.views}</div>
                        <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Views</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 rounded-xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] bg-white dark:bg-[#131F32]">
                <MessageSquare className="w-10 h-10 text-[#64748B] dark:text-[#94A3B8] mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-1">No discussions found</h3>
                <p className="text-xs text-slate-400">Try modifying your filter keyword or post a new topic.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. NEW DISCUSSION MODAL */}
      {showNewDiscussionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] rounded-2xl max-w-xl w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setShowNewDiscussionModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-[#142B4A] dark:text-[#F1F5F9]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF] uppercase mb-2">
              POST TO COMMUNITY
            </div>
            <h2 className="text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2">Start New Technical Discussion</h2>
            <p className="text-slate-400 text-xs mb-6">
              Post questions, architectural patterns, or RFC proposals for the Aparaitech developer community.
            </p>

            <form onSubmit={handleNewDiscussion} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Discussion Title *</label>
                <input
                  type="text"
                  required
                  value={newDiscussion.title}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                  placeholder="e.g., How to configure Kafka partition keys for high-scale order ingestion?"
                  className="w-full rounded bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] px-3.5 py-2.5 text-sm text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Channel Category</label>
                <select
                  value={newDiscussion.category}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, category: e.target.value })}
                  className="w-full rounded bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] px-3.5 py-2.5 text-sm text-[#142B4A] dark:text-[#F1F5F9] focus:border-blue-500 focus:outline-none"
                >
                  <option value="Architecture & Scaling">Architecture & Scaling</option>
                  <option value="AI & Vision">AI & Vision</option>
                  <option value="Field Ops & Mobile">Field Ops & Mobile</option>
                  <option value="Feature Requests">Feature Requests</option>
                  <option value="Announcements">Announcements</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Technical Context & Snippets *</label>
                <textarea
                  rows="5"
                  required
                  value={newDiscussion.content}
                  onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
                  placeholder="Describe your architecture requirements, observed bottlenecks, or proposed code structure..."
                  className="w-full rounded bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] px-3.5 py-2.5 text-sm text-[#142B4A] dark:text-[#F1F5F9] placeholder-slate-600 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewDiscussionModal(false)}
                  className="px-5 py-2.5 rounded bg-slate-100 dark:bg-[#161F32] border border-white/10 text-xs font-mono text-slate-300 hover:text-[#142B4A] dark:text-[#F1F5F9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded bg-[#10B981] px-6 py-2.5 text-xs font-mono font-bold uppercase text-[#142B4A] dark:text-[#F1F5F9] hover:brightness-105 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Thread</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;
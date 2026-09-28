// src/components/pages/Learning/Tutorials.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Terminal,
  Clock,
  CheckCircle2,
  X,
  Play,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  ExternalLink,
  Calendar,
  Send
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const Tutorials = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    workshopTopic: "Enterprise RAG & LangGraph Architecture",
    teamSize: "5-15 Engineers",
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
        service: "Enterprise Technical Workshop",
        source: "Tutorials Page"
      });
      if (result.success) {
        toast.success("Workshop request booked! Recorded in executive schedule sheet.");
        setIsWorkshopModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          workshopTopic: "Enterprise RAG & LangGraph Architecture",
          teamSize: "5-15 Engineers",
          notes: ""
        });
      } else {
        toast.error("Booking recorded locally. Engineering leadership will contact you shortly.");
        setIsWorkshopModalOpen(false);
      }
    } catch (err) {
      toast.error("Network error. Please reach out to info@ai.aparaitech.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tutorials = [
    {
      id: "tut-rag",
      title: "Production RAG with LangGraph, pgvector & Cross-Encoder Reranking",
      desc: "Architect an enterprise retrieval-augmented generation engine with hybrid lexical + dense vector search, semantic chunking, and sub-200ms answer synthesis.",
      level: "Advanced",
      time: "45 min",
      tags: ["AI & LLMs", "Python", "pgvector", "LangGraph"],
      modules: [
        "Hybrid Search Indexing (BM25 + OpenAI Ada-002)",
        "Semantic Document Ingestion & Recursive Chunking",
        "Two-Stage Cross-Encoder Reranking via FlashRank",
        "Streaming Response API to React / Next.js Clients"
      ],
      codeSnippet: `// Python / LangGraph Ingestion Pipeline
from langgraph.graph import StateGraph, END
from langchain_community.vectorstores import PGVector

def retrieve_nodes(state):
    query = state["query"]
    # Hybrid dense + sparse search
    docs = vector_store.similarity_search_with_relevance_scores(query, k=10)
    reranked = reranker.rank(query, docs)[:3]
    return {"context": reranked}

workflow = StateGraph(RAGState)
workflow.add_node("retrieve", retrieve_nodes)
workflow.set_entry_point("retrieve")`
    },
    {
      id: "tut-kds",
      title: "Real-Time KDS Event Stream with WebSockets & Redis Pub/Sub",
      desc: "Engineer a sub-15s kitchen display dispatch pipeline that survives network drops, prevents race conditions, and synchronizes state across multi-brand kitchens.",
      level: "Intermediate",
      time: "40 min",
      tags: ["Node.js", "WebSockets", "Redis", "CloudKitchen"],
      modules: [
        "WebSocket Gateway with Heartbeat Health Checks",
        "Redis Pub/Sub Channel Partitioning per Kitchen Station",
        "Optimistic UI Updates with Offline IndexedDB Buffer",
        "SLA Timer Synchronization and Audible Bell Triggers"
      ],
      codeSnippet: `// Node.js WebSocket Broadcast Worker
import { WebSocketServer } from 'ws';
import Redis from 'ioredis';

const wss = new WebSocketServer({ port: 8080 });
const sub = new Redis(process.env.REDIS_URL);

sub.subscribe('station:prep:events');
sub.on('message', (channel, msg) => {
  const event = JSON.parse(msg);
  wss.clients.forEach(client => {
    if (client.stationId === event.stationId && client.readyState === 1) {
      client.send(JSON.stringify(event));
    }
  });
});`
    },
    {
      id: "tut-edge-ai",
      title: "Quantized Computer Vision on Edge Android with 3D Liveness",
      desc: "Deploy on-device facial recognition models on low-power tablets with anti-spoofing heuristics and batch offline sync for industrial factory floors.",
      level: "Advanced",
      time: "55 min",
      tags: ["Computer Vision", "TensorFlow Lite", "Mobile", "Attendance AI"],
      modules: [
        "CameraX Stream Preprocessing & Face Cropping",
        "MobileNetV3 8-bit Quantization with TFLite",
        "Passive 3D Liveness & Infrared Anti-Spoof Heuristic",
        "Local SQLite Vector Store & Resilient Background Sync"
      ],
      codeSnippet: `// Kotlin TFLite Embedding Extraction
val interpreter = Interpreter(loadModelFile("facenet_int8.tflite"))
val inputTensor = preprocessBitmap(faceCroppedBitmap)
val embeddingOutput = Array(1) { FloatArray(512) }

interpreter.run(inputTensor, embeddingOutput)
val match = cosineSimilarity(embeddingOutput[0], localCacheVector)
if (match > 0.82 && passesLiveness(faceCroppedBitmap)) {
    recordAttendancePunch(employeeId = employee.id)
}`
    },
    {
      id: "tut-catalog",
      title: "High-Throughput Omnichannel Catalog Sync with Kafka & Next.js",
      desc: "Synchronize 100,000+ wholesale catalog SKUs across physical POS hardware, web dashboards, and WhatsApp checkout with zero inventory drift.",
      level: "Intermediate",
      time: "35 min",
      tags: ["Kafka", "Next.js", "PostgreSQL", "ApnaStore"],
      modules: [
        "Kafka Distributed Change Data Capture (CDC)",
        "Redis In-Memory Full-Text Indexing (<45ms P99)",
        "Incremental Static Regeneration (ISR) in Next.js",
        "WhatsApp Business Cloud API Webhook Integration"
      ],
      codeSnippet: `// Next.js High-Speed Catalog Search API
import { redis } from '@/lib/redis';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '*';
  
  // Query Redis in-memory search index
  const results = await redis.call(
    'FT.SEARCH', 'idx:catalog', q, 
    'LIMIT', 0, 20
  );
  return Response.json({ data: results });
}`
    },
    {
      id: "tut-field-ops",
      title: "Geospatial Technician Dispatch & Offline PWA Field Sync",
      desc: "Construct an automated dispatch matrix with open-source route optimization, offline signature capture, and automated SMS arrival telemetry.",
      level: "Intermediate",
      time: "30 min",
      tags: ["Leaflet", "React PWA", "Node.js", "ServiceHub"],
      modules: [
        "Geospatial Proximity Routing with OSRM",
        "PWA Service Worker & Background Sync Registration",
        "Canvas Digital Customer Signature & Geo-Stamp Vault",
        "Automated Twilio / WhatsApp SMS Transit Dispatch Alerts"
      ],
      codeSnippet: `// Background Sync Service Worker
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-service-tickets') {
    event.waitUntil(uploadPendingFieldTickets());
  }
});

async function uploadPendingFieldTickets() {
  const pending = await idb.getAll('pending_tickets');
  for (const ticket of pending) {
    await fetch('/api/tickets/complete', {
      method: 'POST',
      body: JSON.stringify(ticket)
    });
    await idb.delete('pending_tickets', ticket.id);
  }
}`
    },
    {
      id: "tut-gitops",
      title: "Zero-Downtime GitOps Deployments with Kubernetes & ArgoCD",
      desc: "Set up a resilient continuous delivery pipeline for microservices with automated progressive rollouts, Prometheus metric gates, and instant rollback.",
      level: "Advanced",
      time: "50 min",
      tags: ["Kubernetes", "ArgoCD", "Terraform", "DevOps"],
      modules: [
        "EKS Cluster Provisioning via Terraform Modules",
        "ArgoCD Application Set Declarative GitOps Sync",
        "Canary Progressive Rollouts with Metric Analysis",
        "Automated Vault Secret Injection via CSI Drivers"
      ],
      codeSnippet: `apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: aparaitech-api-gateway
spec:
  replicas: 5
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: { duration: 10m }
      - setWeight: 50
      - pause: { duration: 15m }
      analysis:
        templates:
        - templateName: success-rate-gate`
    }
  ];

  const filteredTutorials = tutorials.filter((tut) => {
    if (activeFilter === "All") return true;
    return tut.level === activeFilter;
  });

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast.success("Code snippet copied to clipboard!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

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

        <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#D4FD53] mb-6">
            <Terminal className="w-3.5 h-3.5" />
            <span>PRACTICAL ARCHITECTURE // HANDS-ON LABS</span>
          </div>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Production Engineering Tutorials
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Step-by-step technical blueprints drafted by Aparaitech senior engineers. Build real-time streaming architectures, on-device AI models, and scalable microservices.
          </p>

          <div className="mt-8 flex justify-center gap-2 flex-wrap">
            {["All", "Intermediate", "Advanced"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? "bg-[#D4FD53] text-[#0C0D0F] font-bold shadow-md shadow-[#D4FD53]/20"
                    : "bg-[#141518] text-slate-300 border border-[#22242A] hover:border-slate-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TUTORIALS GRID */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              onClick={() => setSelectedTutorial(tutorial)}
              className="flex flex-col justify-between rounded-xl border border-[#22242A] bg-[#141518] p-7 hover:border-[#D4FD53]/50 transition-all cursor-pointer group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded border ${
                      tutorial.level === "Advanced"
                        ? "bg-purple-950/40 text-purple-300 border-purple-800/40"
                        : "bg-blue-950/40 text-blue-300 border-blue-800/40"
                    }`}
                  >
                    {tutorial.level}
                  </span>
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00E5C9]" />
                    {tutorial.time}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#D4FD53] transition-colors leading-snug">
                  {tutorial.title}
                </h3>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {tutorial.desc}
                </p>

                {/* Modules Preview */}
                <div className="mt-5 space-y-1.5 border-t border-[#22242A] pt-4">
                  {tutorial.modules.slice(0, 2).map((mod, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FD53] shrink-0" />
                      <span className="truncate">{mod}</span>
                    </div>
                  ))}
                  {tutorial.modules.length > 2 && (
                    <div className="text-[11px] font-mono text-slate-500 pl-5">
                      +{tutorial.modules.length - 2} more architectural steps...
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#22242A] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {tutorial.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#0C0D0F] border border-white/5 font-mono text-[10px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#D4FD53] group-hover:underline">
                  <span>Start Lab</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORKSHOP CTA BANNER */}
      <section className="py-20 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#00E5C9] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PUNE HINJAWADI COE ARCHITECTURE WORKSHOPS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Custom Engineering Masterclasses for Your Team
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base mb-8">
            Level up your senior developers on enterprise microservices, real-time WebSockets, or on-device AI. Led by our hands-on engineering leads.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsWorkshopModalOpen(true)}
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded bg-[#D4FD53] px-8 text-sm font-semibold text-[#0C0D0F] hover:brightness-105 transition-all shadow-lg shadow-[#D4FD53]/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Private Engineering Workshop</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded border border-white/20 bg-[#1C1C1E] px-8 text-sm font-mono text-white hover:bg-[#2C2C30] transition-all"
            >
              <span>Call Pune CoE: +91 82618 40199</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. MODAL: DETAILED TUTORIAL LAB */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedTutorial(null)}
        >
          <div
            className="bg-[#141518] border border-[#22242A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTutorial(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#D4FD53] uppercase mb-2">
              <Terminal className="w-4 h-4" />
              <span>HANDS-ON TUTORIAL LAB // {selectedTutorial.level}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              {selectedTutorial.title}
            </h2>

            <div className="flex items-center gap-3 font-mono text-xs text-slate-400 mb-6 pb-4 border-b border-[#22242A]">
              <span>Duration: <strong className="text-white">{selectedTutorial.time}</strong></span>
              <span>•</span>
              <div className="flex gap-2">
                {selectedTutorial.tags.map((t, i) => (
                  <span key={i} className="text-[#00E5C9]">#{t}</span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedTutorial.desc}
            </p>

            {/* Modules List */}
            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5 mb-6">
              <h3 className="font-mono text-xs uppercase text-[#D4FD53] tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Curriculum Modules</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedTutorial.modules.map((mod, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4FD53] shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] overflow-hidden mb-6">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#22242A] bg-[#1C1C1E] font-mono text-xs text-slate-400">
                <span>Architecture Implementation Snippet</span>
                <button
                  onClick={() => handleCopyCode(selectedTutorial.codeSnippet)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4FD53] hover:underline"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <code>{selectedTutorial.codeSnippet}</code>
              </pre>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#22242A]">
              <button
                onClick={() => {
                  setSelectedTutorial(null);
                  setIsWorkshopModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded bg-[#D4FD53] px-6 py-2.5 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Team Training</span>
              </button>
              <button
                onClick={() => setSelectedTutorial(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Close Lab
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. WORKSHOP CONSULTATION MODAL */}
      {isWorkshopModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#22242A] bg-[#141518] p-8 shadow-2xl">
            <button
              onClick={() => setIsWorkshopModalOpen(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4FD53] font-mono text-xs uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>Pune CoE Technical Workshop</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Book Engineering Workshop
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Recorded directly to our leadership management sheet for schedule confirmation by Pune leads.
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
                  placeholder="e.g., Neha Joshi"
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
                    placeholder="neha@company.com"
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
                    placeholder="Acme Tech"
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4FD53] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Team Size</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                  >
                    <option value="1-5 Engineers">1-5 Engineers</option>
                    <option value="5-15 Engineers">5-15 Engineers</option>
                    <option value="15-50 Engineers">15-50 Engineers</option>
                    <option value="Enterprise Department (50+)">Enterprise Department (50+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Target Curriculum Focus</label>
                <select
                  name="workshopTopic"
                  value={formData.workshopTopic}
                  onChange={handleInputChange}
                  className="w-full rounded bg-[#0C0D0F] border border-[#22242A] px-3.5 py-2.5 text-sm text-white focus:border-[#D4FD53] focus:outline-none"
                >
                  <option value="Enterprise RAG & LangGraph Architecture">Enterprise RAG & LangGraph Architecture</option>
                  <option value="Real-Time WebSockets & Redis Stream Systems">Real-Time WebSockets & Redis Stream Systems</option>
                  <option value="Edge AI & Biometrics Inference">Edge AI & Biometrics Inference</option>
                  <option value="High-Throughput Omnichannel Architecture">High-Throughput Omnichannel Architecture</option>
                  <option value="Kubernetes GitOps & Cloud Hardening">Kubernetes GitOps & Cloud Hardening</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Special Requirements or Schedule Constraints</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Outline preferred dates, existing technology bottlenecks, or custom team goals..."
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
                  <span>{isSubmitting ? "Syncing Request..." : "Confirm Workshop Booking"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorials;
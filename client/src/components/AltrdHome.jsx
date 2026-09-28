// src/components/AltrdHome.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Shield,
  Zap,
  Building2,
  Bot,
  ArrowRight,
  Phone,
  ExternalLink,
  Cpu,
  FileText,
  BarChart3,
  Factory,
  Database,
  Lock,
  Layers,
  Sparkles,
  Workflow,
  Search,
  Eye,
  Sliders,
  Terminal,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight,
  Send,
  MapPin,
  Briefcase
} from "lucide-react";
import toast from "react-hot-toast";
import { recordAppointmentBooking } from "../utils/sheetService";

export default function AltrdHome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("manufacturing");
  const [openFaq, setOpenFaq] = useState(null);

  // Interactive ROI Calculator State
  const [calcWorkforce, setCalcWorkforce] = useState(25);
  const [calcHours, setCalcHours] = useState(12);
  const [calcDomain, setCalcDomain] = useState("idp");

  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Enterprise AI Diagnostic",
    message: "",
    nda: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Consultation request received! Our Lead AI Architect will respond within 1 hour.");
      setTimeout(() => {
        setModalOpen(false);
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "Enterprise AI Diagnostic",
          message: "",
          nda: true,
        });
      }, 2000);
    }, 850);
  };

  // 6 Live Production Platforms
  const productionPlatforms = [
    {
      name: "Cloud Kitchen AI",
      tagline: "Automated Culinary Operations & Predictive Inventory",
      metric: "32% Waste Reduction",
      detail: "Demand forecasting, dynamic ingredient costing, multi-channel food aggregator sync, and kitchen display intelligence.",
      badge: "LIVE SAAS PLATFORM",
      link: "https://cloudkitchen.aparaitech.org/",
      stack: "Python • Fastify • PyTorch • Postgres"
    },
    {
      name: "Enterprise Attendance SaaS",
      tagline: "Biometric Computer Vision & Geofenced Workforce Telemetry",
      metric: "99.8% Facial Match",
      detail: "Edge facial recognition, anti-spoofing liveness verification, multi-shift scheduling, and automated payroll sync.",
      badge: "ENTERPRISE DEPLOYMENT",
      link: "https://attendance.aparaitech.org/",
      stack: "OpenCV • TensorRT • Node.js • Redis"
    },
    {
      name: "APNA Store",
      tagline: "Omnichannel Commerce Engine & Semantic Search",
      metric: "4.2x Search Conversion",
      detail: "Vector-driven product discovery, real-time catalog indexing, automated checkout flows, and inventory intelligence.",
      badge: "ECOMMERCE PLATFORM",
      link: "https://apnastore.aparaitech.org/",
      stack: "React • Qdrant • Microservices • Docker"
    },
    {
      name: "Service Hub Dispatch",
      tagline: "Intelligent Field Service Dispatch & Route Optimizer",
      metric: "40% Transit Optimization",
      detail: "Automated multi-vendor technician allocation, dynamic travel route planning, SLA tracking, and instant mobile alerts.",
      badge: "OPERATIONAL DISPATCH",
      link: "http://servicehub.aparaitech.org/",
      stack: "Graph Algorithms • Go • React Native"
    },
    {
      name: "SVPM Alumni Network",
      tagline: "Cognitive Mentorship Matching & Institutional Portal",
      metric: "12,000+ Active Members",
      detail: "Semantic resume-to-job matching, automated chapter announcements, alumni donation tracking, and verified directories.",
      badge: "ACADEMIC NETWORK",
      link: "http://svpmalumni.aparaitech.org/",
      stack: "Next.js • Vector Embeddings • AWS"
    },
    {
      name: "Online Assessment Platform",
      tagline: "Proctored Cognitive Testing & Skill Evaluation Engine",
      metric: "50,000+ Tests Evaluated",
      detail: "Automated MCQ generation, live webcam behavioral proctoring, code execution sandbox, and comprehensive candidate scoring.",
      badge: "ASSESSMENT ENGINE",
      link: "https://tests.apraitech.org/",
      stack: "WebAssembly • Pyodide • WebRTC • GCP"
    }
  ];

  // Core Capabilities
  const coreCapabilities = [
    {
      icon: <Workflow className="w-6 h-6 text-[#00E5C9]" />,
      title: "Autonomous Multi-Agent Swarms",
      desc: "Goal-driven AI agent networks that collaborate across planning, tool-calling, data retrieval, and execution to automate complex knowledge work.",
      points: ["Self-correcting reasoning loops", "Tool-use & API integration", "Human-in-the-loop oversight"]
    },
    {
      icon: <Database className="w-6 h-6 text-[#00E5C9]" />,
      title: "Zero-Hallucination Enterprise RAG",
      desc: "Hybrid semantic vector + BM25 keyword search connected to your proprietary documents with strict citation guardrails and verifiable evidence.",
      points: ["Sub-250ms retrieval latency", "Role-based ACL permission filtering", "Source sentence grounding"]
    },
    {
      icon: <Eye className="w-6 h-6 text-[#00E5C9]" />,
      title: "Vision AI & Document Intelligence",
      desc: "Multimodal neural networks engineered for scanned invoices, complex engineering drawings, handwritten forms, and visual assembly inspection.",
      points: ["99.4% table extraction accuracy", "Complex layout awareness", "Edge inference capability"]
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00E5C9]" />,
      title: "Private VPC & Sovereign LLMs",
      desc: "Deployment of state-of-the-art open models (Llama 3, Mistral, Qwen) inside your private cloud or on-premises servers with zero data egress.",
      points: ["Parameter-efficient fine-tuning", "vLLM high-throughput serving", "Complete IP sovereignty"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#00E5C9]" />,
      title: "Predictive Operational Intelligence",
      desc: "Deep learning forecasting systems that analyze historical telemetry, supply chain variables, and customer behavior to anticipate operational demands.",
      points: ["Dynamic pricing & stock replenishment", "Predictive machine maintenance", "Anomaly & fraud detection"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00E5C9]" />,
      title: "Full-Lifecycle MLOps & Governance",
      desc: "Continuous model evaluation, hallucination telemetry, latency profiling, and automated red-teaming aligned with ISO 27001 and SOC 2 standards.",
      points: ["Prompt injection defenses", "Real-time drift detection", "Comprehensive audit trails"]
    }
  ];

  // Industry Architectures
  const industriesData = {
    manufacturing: {
      title: "Manufacturing & Industrial EPC",
      tagline: "Streamline engineering workflows from tender estimation to shop-floor quality inspection.",
      useCases: [
        {
          title: "Automated RFP & Bid Estimation",
          desc: "Extract technical specifications from 500+ page EPC tenders and generate accurate bill-of-materials (BOM) estimates."
        },
        {
          title: "Computer Vision Defect Inspection",
          desc: "Edge-deployed vision models detecting micron-level surface flaws and dimensional anomalies at line speed."
        },
        {
          title: "Predictive Equipment Telemetry",
          desc: "Analyze vibration, thermal, and electrical sensor streams to prevent unplanned downtime."
        },
        {
          title: "Engineering Change Order (ECO) Copilot",
          desc: "Cross-reference CAD drawing revisions with supplier inventory to calculate change impact in seconds."
        }
      ]
    },
    bfsi: {
      title: "BFSI & Financial Services",
      tagline: "Accelerate underwriting, detect complex fraud patterns, and automate regulatory compliance.",
      useCases: [
        {
          title: "Credit & Financial Statement Spreading",
          desc: "Instantly parse audited balance sheets, P&L statements, and tax returns into structured underwriting models."
        },
        {
          title: "Real-Time Anti-Money Laundering (AML)",
          desc: "Graph-based neural network analysis identifying suspicious multi-hop transaction topologies."
        },
        {
          title: "Automated Policy & Claims Adjudication",
          desc: "Cross-examine hospital bills, policy limits, and diagnostic records to expedite claim approvals."
        },
        {
          title: "Regulatory Compliance Audit Copilot",
          desc: "Continuously audit communications and transaction logs against RBI, SEBI, and global guidelines."
        }
      ]
    },
    healthcare: {
      title: "Healthcare & Life Sciences",
      tagline: "Empower clinical decision-making, automate documentation, and protect patient health data.",
      useCases: [
        {
          title: "Clinical Note Summarization & EHR Sync",
          desc: "Synthesize ambient physician-patient consultations into structured HL7/FHIR compliant clinical summaries."
        },
        {
          title: "Medical Imaging Triage Assistance",
          desc: "Deep learning models highlighting acute nodules and fractures on X-ray and CT scans for radiologist review."
        },
        {
          title: "Prior-Authorization Automation",
          desc: "Match patient clinical histories against insurer pre-requisites to eliminate claim turnaround delays."
        },
        {
          title: "Biomedical Literature Synthesis",
          desc: "Semantic research agents scanning millions of clinical trials to accelerate pharmacological insights."
        }
      ]
    },
    retail: {
      title: "Retail & Omnichannel Commerce",
      tagline: "Predict consumer demand surges, personalize customer journeys, and unify store fulfillment.",
      useCases: [
        {
          title: "Semantic Vector Search & Recommendations",
          desc: "Replace rigid keyword filters with natural language search that understands customer buying intent."
        },
        {
          title: "Automated Supply Chain Reordering",
          desc: "Dynamic safety-stock calculation factoring in lead times, weather anomalies, and promotion calendars."
        },
        {
          title: "Multichannel Customer Support Agent",
          desc: "Autonomous conversational agents resolving order queries, returns, and exchanges across Web & WhatsApp."
        },
        {
          title: "Computer Vision Shelf Compliance",
          desc: "Audit store aisle images to flag out-of-stock items, planogram discrepancies, and mislabeled pricing."
        }
      ]
    },
    logistics: {
      title: "Logistics, Fleet & Supply Chain",
      tagline: "Optimize multi-modal freight routes, automate bill-of-lading processing, and minimize delivery delays.",
      useCases: [
        {
          title: "Dynamic Dispatch & Multi-Stop Routing",
          desc: "Heuristic and reinforcement learning models calculating optimal vehicle routes under live traffic constraints."
        },
        {
          title: "Bill-of-Lading & Customs Document OCR",
          desc: "Extract complex shipping manifests, HS codes, and customs declarations with zero manual data entry."
        },
        {
          title: "Cold-Chain Telemetry & Expiry Prediction",
          desc: "Monitor temperature fluctuations during transit to predict perishability and reroute shipments proactively."
        },
        {
          title: "Warehouse Slotting & Pick Automation",
          desc: "Cluster high-velocity SKU items dynamically to minimize warehouse picker transit times."
        }
      ]
    }
  };

  // 4-Stage Methodology
  const engineeringPhases = [
    {
      num: "01",
      name: "Architectural Diagnostic",
      duration: "Week 1 - 2",
      headline: "Quantifying high-impact operational opportunities.",
      desc: "Our senior AI architects examine your existing workflows, data schemas, and operational bottlenecks. We calculate exact payback timelines and establish deterministic benchmarks before writing any code."
    },
    {
      num: "02",
      name: "Domain Sandbox & Benchmark",
      duration: "Week 3 - 4",
      headline: "Building custom prototypes on your real enterprise data.",
      desc: "We construct a secure, isolated evaluation environment to fine-tune models, test RAG pipelines, and measure accuracy, token efficiency, and latency against agreed precision thresholds."
    },
    {
      num: "03",
      name: "VPC Production Rollout",
      duration: "Week 5 - 8",
      headline: "Hardened containerized integration inside your perimeter.",
      desc: "Deploying microservices directly within your AWS, Azure, GCP, or private data center. We configure enterprise SSO, RBAC access controls, audit logs, and continuous CI/CD pipelines."
    },
    {
      num: "04",
      name: "Autonomous SLA & Governance",
      duration: "Continuous",
      headline: "Proactive model drift mitigation and operational evolution.",
      desc: "Aparaitech Software functions as your long-term AI engineering partner. We monitor inference telemetry 24/7, retrain weights on new domain patterns, and ensure 99.9% production availability."
    }
  ];

  // Authentic Enterprise FAQs
  const faqs = [
    {
      q: "How does Aparaitech Software guarantee enterprise data privacy and sovereignty?",
      a: "Your data never leaves your perimeter. We deploy models and vector indexes directly within your private cloud (AWS, Azure, GCP) or on-premises servers. We enforce zero-data-retention agreements, TLS 1.3 encryption in transit, AES-256 at rest, and strict RBAC isolation."
    },
    {
      q: "Can Aparaitech Software integrate with our existing ERP, CRM, and databases?",
      a: "Yes. Our systems are built with production-grade REST, gRPC, and GraphQL connectors. We have deep native integration experience with SAP, Oracle, Salesforce, PostgreSQL, MongoDB, Snowflake, Microsoft 365, and legacy internal databases."
    },
    {
      q: "What is the typical timeline to take an enterprise AI system into production?",
      a: "A typical engagement progresses from initial Diagnostic sprint to an interactive proof-of-concept in 2 to 3 weeks. Production VPC deployment and full system integration are generally achieved within 6 to 8 weeks, backed by guaranteed performance SLAs."
    },
    {
      q: "Who owns the intellectual property and fine-tuned model weights?",
      a: "Your organization owns 100% of the intellectual property, custom code, adapted model weights, and proprietary vector embeddings. Aparaitech Software never uses your proprietary enterprise data to train shared models."
    },
    {
      q: "How do you eliminate hallucinations in mission-critical applications?",
      a: "We engineer deterministic guardrails combining hybrid vector-dense + BM25 keyword retrieval, cross-encoder reranking, and citation-enforced generation. If verifiable factual support is absent from your documents, the system triggers graceful fallbacks rather than fabricating answers."
    },
    {
      q: "What support and maintenance is provided after deployment?",
      a: "Every engagement includes our Enterprise AI SLA covering 24/7 uptime monitoring, automated drift detection, security patching, prompt telemetry optimization, and scheduled model fine-tuning as your enterprise data expands."
    }
  ];

  // Calculations for ROI Tool
  const hoursSavedPerWeek = Math.round(calcWorkforce * calcHours * 0.65);
  const annualCostSaved = (hoursSavedPerWeek * 50 * 28).toLocaleString("en-US");

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#00E5C9] selection:text-[#0C0D0F]">
      
      {/* 1. HERO SECTION WITH ANIMATED LIGHT TRACES */}
      <section id="home" className="relative flex w-full min-h-[680px] items-center overflow-hidden bg-[#0C0D0F] border-b border-[#22242A]">
        {/* Animated Light Traces SVG */}
        <svg
          viewBox="0 0 1440 420"
          className="pointer-events-none absolute left-1/2 top-0 hidden h-auto w-full max-w-[1440px] -translate-x-1/2 overflow-visible lg:block opacity-60"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trace-teal" gradientUnits="userSpaceOnUse" x1="-460" y1="0" x2="0" y2="0" spreadMethod="pad">
              <stop offset="0" stopColor="#00E5C9" stopOpacity="0" />
              <stop offset="0.6" stopColor="#00E5C9" stopOpacity="0.35" />
              <stop offset="0.9" stopColor="#00E5C9" stopOpacity="0.85" />
              <stop offset="0.985" stopColor="#E0FFFC" stopOpacity="1" />
              <stop offset="1" stopColor="#00E5C9" stopOpacity="0" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-900 0; 2340 0"
                keyTimes="0; 1"
                calcMode="linear"
                dur="11.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="trace-lime" gradientUnits="userSpaceOnUse" x1="-460" y1="0" x2="0" y2="0" spreadMethod="pad">
              <stop offset="0" stopColor="#D4FD53" stopOpacity="0" />
              <stop offset="0.6" stopColor="#D4FD53" stopOpacity="0.3" />
              <stop offset="0.9" stopColor="#D4FD53" stopOpacity="0.8" />
              <stop offset="0.985" stopColor="#F5FFDA" stopOpacity="1" />
              <stop offset="1" stopColor="#D4FD53" stopOpacity="0" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-900 0; 2340 0"
                keyTimes="0; 1"
                calcMode="linear"
                dur="13.2s"
                begin="-5.5s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="trace-purple" gradientUnits="userSpaceOnUse" x1="-460" y1="0" x2="0" y2="0" spreadMethod="pad">
              <stop offset="0" stopColor="#9B95FE" stopOpacity="0" />
              <stop offset="0.6" stopColor="#9B95FE" stopOpacity="0.3" />
              <stop offset="0.9" stopColor="#9B95FE" stopOpacity="0.85" />
              <stop offset="0.985" stopColor="#EFEAFF" stopOpacity="1" />
              <stop offset="1" stopColor="#9B95FE" stopOpacity="0" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-900 0; 2340 0"
                keyTimes="0; 1"
                calcMode="linear"
                dur="12.1s"
                begin="-2.8s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path d="M-1000 32H554C614 32 670 64 700 116L753 197C770 223 799 238 830 238H2400" fill="none" stroke="url(#trace-teal)" strokeWidth="3" />
          <path d="M-1000 134H604C635 134 664 150 681 176L735 257C765 308 820 341 880 341H2400" fill="none" stroke="url(#trace-lime)" strokeWidth="3" />
          <path d="M787 32H2400" fill="none" stroke="url(#trace-purple)" strokeWidth="3" />
        </svg>

        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Center of Excellence Pill with Official Logo Mark */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141518] border border-[#22242A] font-mono text-xs text-[#00E5C9] mb-8 shadow-inner">
              <img
                src="/aparaitech_logo.jpg"
                alt="Aparaitech Software"
                className="w-4 h-4 rounded-sm object-contain"
              />
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C9] animate-pulse"></span>
              <span>PUNE COE: GERA IMPERIUM, HINJAWADI PHASE 2</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold tracking-tight text-white leading-[1.08]">
              Engineering Autonomous AI & Intelligent Cloud Systems
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-[clamp(1.05rem,1.9vw,1.3rem)] leading-relaxed text-slate-300 max-w-3xl font-normal">
              Aparaitech Software designs, builds, and deploys production-grade Generative AI, autonomous multi-agent workflows, and sovereign cloud infrastructure tailored to your enterprise data.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#00E5C9] px-7 text-[15px] font-bold text-[#0C0D0F] transition-all hover:-translate-y-0.5 hover:brightness-110 w-full sm:w-auto shadow-lg shadow-[#00E5C9]/20"
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#0C0D0F]" />
              </button>

              <Link
                to="/generative-ai"
                className="inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#22242A] bg-[#141518] px-7 text-[15px] font-mono text-white transition-all hover:border-[#00E5C9]/50 hover:bg-[#1C1C1E] w-full sm:w-auto"
              >
                <span>Explore 21+ AI Frameworks</span>
                <ArrowRight className="w-4 h-4 text-[#00E5C9]" />
              </Link>
            </div>

            {/* Quick Assurance Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5C9]" />
                99.4% Zero-Hallucination Precision
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D4FD53]" />
                Zero-Data Egress / Air-Gapped Safe
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#9B95FE]" />
                1-Hour Executive Response SLA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BAR */}
      <section className="w-full border-b border-[#22242A] bg-[#0C0D0F]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#22242A]">
            <div className="flex min-h-[110px] items-center gap-4 px-6 py-6 transition-colors hover:bg-white/[0.02]">
              <div className="h-10 w-10 rounded-lg bg-[#141518] border border-[#22242A] flex items-center justify-center text-[#00E5C9]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">30+</div>
                <div className="text-xs text-slate-400 font-mono">Enterprise Deployments</div>
              </div>
            </div>

            <div className="flex min-h-[110px] items-center gap-4 px-6 py-6 transition-colors hover:bg-white/[0.02]">
              <div className="h-10 w-10 rounded-lg bg-[#141518] border border-[#22242A] flex items-center justify-center text-[#D4FD53]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-xs text-slate-400 font-mono">Neural Models & Agents</div>
              </div>
            </div>

            <div className="flex min-h-[110px] items-center gap-4 px-6 py-6 transition-colors hover:bg-white/[0.02]">
              <div className="h-10 w-10 rounded-lg bg-[#141518] border border-[#22242A] flex items-center justify-center text-[#9B95FE]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">2.4M+</div>
                <div className="text-xs text-slate-400 font-mono">Automated Transactions</div>
              </div>
            </div>

            <div className="flex min-h-[110px] items-center gap-4 px-6 py-6 transition-colors hover:bg-white/[0.02]">
              <div className="h-10 w-10 rounded-lg bg-[#141518] border border-[#22242A] flex items-center justify-center text-[#00E5C9]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 font-mono">VPC Sovereignty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROVEN PRODUCTION PLATFORMS SHOWCASE */}
      <section id="platforms" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
                PROVEN PRODUCTION DEPLOYMENTS
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight">
              Real-world platforms engineered & operated by Aparaitech Software.
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              We do not deal in hypothetical concept decks. We build, scale, and maintain high-volume cognitive software systems deployed in production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl bg-[#141518] border border-[#22242A] p-7 transition-all duration-300 hover:border-[#00E5C9]/50 hover:shadow-xl hover:shadow-[#00E5C9]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#1C1C1E] text-[#00E5C9] border border-white/5">
                      {platform.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#D4FD53]">
                      {platform.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E5C9] transition-colors mb-2">
                    {platform.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-300 mb-3">
                    {platform.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {platform.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#22242A] flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-slate-500 truncate max-w-[170px]">
                    {platform.stack}
                  </span>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#00E5C9] hover:underline font-semibold"
                  >
                    Launch Platform <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE ENTERPRISE AI CAPABILITIES */}
      <section id="capabilities" className="w-full bg-[#0E0F12] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-2.5 w-2.5 bg-[#D4FD53]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] font-bold">
                ENTERPRISE CAPABILITIES
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight">
              Architected for enterprise security, deterministic precision, and scale.
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Every layer of our cognitive stack is built to eliminate hallucinations, enforce enterprise access controls, and integrate natively into existing enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#141518] border border-[#22242A] p-8 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center mb-6">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {cap.desc}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-[#22242A] pt-4 font-mono text-xs text-slate-300">
                  {cap.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C9]"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/generative-ai"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#00E5C9] hover:underline"
            >
              <span>Explore all 21+ Generative AI technical capabilities in detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SPECIFIC COGNITIVE ARCHITECTURES */}
      <section id="industries" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-2.5 w-2.5 bg-[#9B95FE]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B95FE] font-bold">
              DOMAIN SOLUTIONS
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight max-w-3xl">
            Custom operational workflows tailored to your sector.
          </h2>

          {/* Industry Navigation Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#22242A] pb-4">
            {Object.keys(industriesData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={
                  activeIndustry === key
                    ? "px-5 py-2.5 rounded-md bg-[#1C1C1E] border border-[#00E5C9] text-[#00E5C9] font-mono text-xs font-semibold transition-all"
                    : "px-5 py-2.5 rounded-md bg-[#141518] border border-transparent text-slate-400 font-mono text-xs hover:text-white transition-all"
                }
              >
                {industriesData[key].title}
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <div className="mt-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {industriesData[activeIndustry].title}
              </h3>
              <p className="text-sm text-slate-400 font-mono">
                {industriesData[activeIndustry].tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industriesData[activeIndustry].useCases.map((uc, uIdx) => (
                <div
                  key={uIdx}
                  className="rounded-xl bg-[#141518] border border-[#22242A] p-6 hover:border-[#00E5C9]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#00E5C9]">
                      0{uIdx + 1}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {uc.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROPRIETARY 4-STAGE METHODOLOGY */}
      <section id="methodology" className="w-full bg-[#0E0F12] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
                ENGINEERING LIFECYCLE
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight">
              From diagnostic sprint to hardened VPC production.
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Our structured 4-phase deployment methodology mitigates project risk, validates business ROI early, and delivers reliable production AI with zero disruption to active business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPhases.map((phase, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={
                  activeStage === idx
                    ? "cursor-pointer rounded-xl border p-7 transition-all bg-[#1C1C1E] border-[#00E5C9] shadow-lg shadow-[#00E5C9]/10"
                    : "cursor-pointer rounded-xl border p-7 transition-all bg-[#141518] border-[#22242A] hover:border-white/20"
                }
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#00E5C9]">
                    {phase.num}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {phase.name}
                </h3>
                <h4 className="text-xs font-semibold text-slate-300 mb-3">
                  {phase.headline}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE ROI & ARCHITECTURE ESTIMATOR */}
      <section className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="block h-2.5 w-2.5 bg-[#D4FD53]"></span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FD53] font-bold">
                  ROI & IMPACT ESTIMATOR
                </span>
              </div>
              <h2 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold tracking-tight text-white leading-tight">
                Calculate the operational return of automating knowledge workflows.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Repetitive manual verification, spreadsheet data wrangling, and unstructured document ingestion consume up to 35% of knowledge worker capacity. See your projected savings:
              </p>

              <div className="space-y-5 pt-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Team Size Engaged in Manual Workflows:</span>
                    <span className="text-[#00E5C9] font-bold">{calcWorkforce} Professionals</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={calcWorkforce}
                    onChange={(e) => setCalcWorkforce(Number(e.target.value))}
                    className="w-full h-2 bg-[#1C1C1E] rounded-lg appearance-none cursor-pointer accent-[#00E5C9]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Average Manual Hours/Week per Person:</span>
                    <span className="text-[#00E5C9] font-bold">{calcHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="30"
                    step="2"
                    value={calcHours}
                    onChange={(e) => setCalcHours(Number(e.target.value))}
                    className="w-full h-2 bg-[#1C1C1E] rounded-lg appearance-none cursor-pointer accent-[#00E5C9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Primary Automation Target:</label>
                  <select
                    value={calcDomain}
                    onChange={(e) => setCalcDomain(e.target.value)}
                    className="w-full bg-[#141518] border border-[#22242A] rounded-lg px-4 py-2.5 text-xs font-mono text-white focus:border-[#00E5C9] focus:outline-none"
                  >
                    <option value="idp">Document Processing & Invoice/Contract OCR</option>
                    <option value="rag">Zero-Hallucination Knowledge Retrieval & RAG</option>
                    <option value="agents">Multi-Agent Operational Coordination</option>
                    <option value="vision">Computer Vision & Factory Quality Control</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Projected Result Card */}
            <div className="lg:col-span-6 rounded-2xl bg-[#141518] border border-[#22242A] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5C9]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#22242A]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00E5C9] animate-pulse"></div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    PROJECTED OPERATIONAL RECOVERY
                  </span>
                </div>
                <span className="font-mono text-xs text-[#D4FD53]">65% Automation Target</span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-white">
                    {hoursSavedPerWeek.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Hours Recovered / Week
                  </div>
                </div>

                <div>
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-[#00E5C9]">
                    ${annualCostSaved}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Est. Annual Productivity Gain
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0C0D0F] border border-white/5 space-y-2 mb-8 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Projected Payback Horizon:</span>
                  <span className="text-[#D4FD53] font-bold">&lt; 90 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Sovereignty:</span>
                  <span className="text-white">100% Private Cloud / On-Prem</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SLA Guarantee:</span>
                  <span className="text-[#00E5C9]">99.9% Uptime Support</span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full h-12 rounded-lg bg-[#00E5C9] text-[#0C0D0F] font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom ROI Feasibility Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENTERPRISE SECURITY & GOVERNANCE */}
      <section className="w-full bg-[#0E0F12] py-20 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="rounded-2xl bg-[#141518] border border-[#22242A] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#00E5C9]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ENTERPRISE GOVERNANCE & SOVEREIGNTY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Built to satisfy chief information security officers (CISOs).
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We engineer zero-trust AI architectures with end-to-end encryption, strict role-based access control (RBAC), SOC 2 Type II alignment, and ISO 27001 / 9001 certified engineering processes.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0C0D0F] border border-white/5">
                  <Check className="w-4 h-4 text-[#00E5C9] shrink-0" />
                  <span>On-Premises / Private VPC Isolation</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0C0D0F] border border-white/5">
                  <Check className="w-4 h-4 text-[#00E5C9] shrink-0" />
                  <span>Zero Data Retention Agreements</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0C0D0F] border border-white/5">
                  <Check className="w-4 h-4 text-[#00E5C9] shrink-0" />
                  <span>Full Model Weight Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 EXECUTIVE LEADERSHIP & PUNE COE */}
      <section className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E5C9]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4FD53]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
              EXECUTIVE LEADERSHIP & PUNE COE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Card */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5C9]/30 to-[#D4FD53]/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl bg-[#141518] border border-[#22242A] overflow-hidden p-3 shadow-2xl">
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0C0D0F]">
                    <img
                      src="/founder.jpg"
                      alt="Jotiram Shinde - Founder & CEO, Aparaitech Software"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#141518]/90 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4FD53] font-bold">
                          FOUNDER & CEO
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-300">
                          <MapPin className="w-3 h-3 text-[#00E5C9]" /> Pune CoE
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        Jotiram Shinde
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Aparaitech Software Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1E] border border-white/10 font-mono text-xs text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-[#00E5C9]" />
                Principal Architect & Technology Strategist
              </div>

              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white tracking-tight leading-tight">
                Led by Systems Architects, Rooted in Hinjawadi, Pune.
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                "Enterprise AI is not an experimental novelty—it is mission-critical infrastructure. At Aparaitech Software, our obsession is engineering deterministic, zero-hallucination agentic systems and private cloud deployments that eliminate operational friction and deliver verifiable ROI for enterprises worldwide."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#141518] border border-white/5 space-y-1">
                  <div className="font-mono text-2xl font-bold text-[#00E5C9]">6 Systems</div>
                  <div className="text-xs text-slate-300 font-semibold">Live Production SaaS</div>
                  <p className="text-[11px] text-slate-400 font-mono">
                    CloudKitchen AI, Attendance SaaS, ApnaStore, ServiceHub & more running at scale.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#141518] border border-white/5 space-y-1">
                  <div className="font-mono text-2xl font-bold text-[#D4FD53]">Pune CoE</div>
                  <div className="text-xs text-slate-300 font-semibold">Hinjawadi Phase 2</div>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Direct on-site engineering pods and executive architectural consulting.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#00E5C9] px-6 text-sm font-bold text-[#0C0D0F] hover:brightness-110 transition-all shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Executive Briefing</span>
                </button>

                <Link
                  to="/company/about-us"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/20 bg-[#141518] px-6 text-sm font-mono text-white hover:border-[#D4FD53] hover:text-[#D4FD53] transition-all"
                >
                  <span>Explore Company & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUTHENTIC ENTERPRISE FAQS */}
      <section id="faqs" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight">
              Clarity on technical feasibility, security & engagement.
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#141518] border border-[#22242A] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.01]"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={
                      openFaq === idx
                        ? "w-5 h-5 text-[#00E5C9] rotate-180 transition-transform shrink-0"
                        : "w-5 h-5 text-slate-500 transition-transform shrink-0"
                    }
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-400 leading-relaxed border-t border-[#22242A] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="relative overflow-hidden bg-[#0C0D0F] py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1E] border border-white/10 font-mono text-xs text-[#00E5C9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C9] animate-pulse"></span>
              <span>1-HOUR ARCHITECTURAL CONSULTATION RESPONSE</span>
            </div>

            <h2 className="text-[clamp(2.4rem,5vw,4.25rem)] font-bold tracking-tight text-white leading-tight">
              Ready to deploy production AI across your enterprise?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Schedule an architectural diagnostic session with our Lead AI Architects at our Pune Center of Excellence.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="h-[52px] px-8 rounded-md bg-[#00E5C9] text-[#0C0D0F] font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-[#00E5C9]/20"
              >
                <span>Initiate AI Feasibility Sprint</span>
                <ArrowUpRight className="w-4 h-4 text-[#0C0D0F]" />
              </button>

              <a
                href="tel:+918261840199"
                className="h-[52px] px-7 rounded-md border border-[#22242A] bg-[#141518] text-white font-mono text-xs hover:border-[#00E5C9]/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-[#00E5C9]" />
                <span>Call Center of Excellence: +91 82618 40199</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INTAKE MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#141518] border border-white/20 rounded-xl p-8 shadow-2xl text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-mono"
            >
              ✕
            </button>

            <div className="mb-6 flex items-center gap-3">
              <img
                src="/aparaitech_logo.jpg"
                alt="Logo"
                className="h-10 w-10 rounded-md object-contain border border-white/10"
              />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E5C9]">
                  EXECUTIVE CONSULTATION INTAKE
                </span>
                <h3 className="text-xl font-bold text-white">
                  Aparaitech Software AI Advisory
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Consultation Request Confirmed</h4>
                <p className="text-xs text-slate-300">
                  Our Lead AI Architect will review your parameters and reach out within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Vikram Joshi"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="vikram@enterprise.com"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Apex Industrial Systems"
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Area of Interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none"
                  >
                    <option value="Enterprise AI Diagnostic">Enterprise AI Diagnostic Sprint (Recommended)</option>
                    <option value="Autonomous Multi-Agents">Autonomous Multi-Agent Workflows</option>
                    <option value="Enterprise RAG">Enterprise RAG & Zero-Hallucination Retrieval</option>
                    <option value="Computer Vision & Inspection">Computer Vision & Edge Inspection</option>
                    <option value="Document OCR & IDP">Intelligent Document Processing (IDP/OCR)</option>
                    <option value="Private LLM & Sovereign Cloud">Private LLM & Sovereign Cloud Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Operational Challenge (Optional)</label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe the workflow bottleneck or target automation system..."
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#00E5C9] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="nda-check-modal"
                    checked={form.nda}
                    onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                    className="rounded border-white/20 bg-[#1C1C1E] text-[#00E5C9] focus:ring-0"
                  />
                  <label htmlFor="nda-check-modal" className="text-xs text-slate-400">
                    Require mutual non-disclosure agreement (NDA) before consultation.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded bg-[#00E5C9] text-[#0C0D0F] font-bold text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  {submitting ? "Transmitting..." : "Submit Consultation Request →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

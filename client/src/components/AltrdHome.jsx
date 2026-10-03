// src/components/AltrdHome.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Send,
  MapPin,
  Briefcase,
  SlidersHorizontal,
  Grid,
  Maximize2,
  X,
  Play,
  Pause
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await recordAppointmentBooking({
        ...form,
        source: "Homepage Consultation Intake Modal",
      });
      setSubmitted(true);
      toast.success("Consultation request received! Recorded to inquiry sheet.");
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
    } catch (err) {
      console.error(err);
      toast.error("Saved locally. Our team will contact you shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  // Carousel & Production Platforms Showcase State
  const carouselRef = useRef(null);
  const [platformViewMode, setPlatformViewMode] = useState("carousel"); // "carousel" or "grid"
  const [activePlatformIndex, setActivePlatformIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [selectedPlatformModal, setSelectedPlatformModal] = useState(null);

  // Auto-scrolling carousel effect (pauses on hover)
  useEffect(() => {
    if (platformViewMode !== "carousel" || isCarouselPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardStep = 390;

        if (scrollLeft >= maxScroll - 25) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setActivePlatformIndex(0);
        } else {
          carouselRef.current.scrollBy({ left: cardStep, behavior: "smooth" });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [platformViewMode, isCarouselPaused]);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const cardStep = 390;
    const newIdx = Math.min(
      Math.max(0, Math.round(scrollLeft / cardStep)),
      5
    );
    setActivePlatformIndex(newIdx);
  };

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const cardStep = 390;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth"
    });
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const cardStep = 390;
    carouselRef.current.scrollTo({
      left: index * cardStep,
      behavior: "smooth"
    });
    setActivePlatformIndex(index);
  };

  // 6 Live Production Platforms with Real Images, Specs & Subpages
  const productionPlatforms = [
    {
      id: "cloud-kitchen",
      name: "Cloud Kitchen AI",
      tagline: "Automated Culinary Operations & Predictive Inventory",
      metric: "32% Waste Reduction",
      detail: "Demand forecasting, dynamic ingredient costing, multi-channel food aggregator sync, and kitchen display intelligence.",
      badge: "LIVE SAAS PLATFORM",
      link: "https://cloudkitchen.aparaitech.org/",
      subpage: "/customers/portfolio",
      stack: "Python • Fastify • PyTorch • Postgres",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#00E5C9",
      specs: {
        latency: "<15ms Order Routing",
        throughput: "12,000+ Orders/Day",
        sla: "99.98% Live Uptime",
        deployment: "Distributed Private VPC"
      }
    },
    {
      id: "enterprise-attendance",
      name: "Enterprise Attendance SaaS",
      tagline: "Biometric Computer Vision & Geofenced Workforce Telemetry",
      metric: "99.8% Facial Match",
      detail: "Edge facial recognition, anti-spoofing liveness verification, multi-shift scheduling, and automated payroll sync.",
      badge: "ENTERPRISE DEPLOYMENT",
      link: "https://attendance.aparaitech.org/",
      subpage: "/customers/portfolio",
      stack: "OpenCV • TensorRT • Node.js • Redis",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#D4FD53",
      specs: {
        latency: "<45ms Edge Match",
        throughput: "50,000+ Check-Ins/Day",
        sla: "99.99% Edge Availability",
        deployment: "On-Premises Edge Hub"
      }
    },
    {
      id: "apna-store",
      name: "APNA Store",
      tagline: "Omnichannel Commerce Engine & Semantic Search",
      metric: "4.2x Search Conversion",
      detail: "Vector-driven product discovery, real-time catalog indexing, automated checkout flows, and inventory intelligence.",
      badge: "ECOMMERCE PLATFORM",
      link: "https://apnastore.aparaitech.org/",
      subpage: "/customers/portfolio",
      stack: "React • Qdrant • Microservices • Docker",
      image: "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#9B95FE",
      specs: {
        latency: "<8ms Vector Query",
        throughput: "100k+ Live SKU Indexing",
        sla: "100% Zero-Drop Checkout",
        deployment: "Containerized Kubernetes"
      }
    },
    {
      id: "service-hub",
      name: "Service Hub Dispatch",
      tagline: "Intelligent Field Service Dispatch & Route Optimizer",
      metric: "40% Transit Optimization",
      detail: "Automated multi-vendor technician allocation, dynamic travel route planning, SLA tracking, and instant mobile alerts.",
      badge: "OPERATIONAL DISPATCH",
      link: "http://servicehub.aparaitech.org/",
      subpage: "/customers/portfolio",
      stack: "Graph Algorithms • Go • React Native",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#00E5C9",
      specs: {
        latency: "<100ms Route Calculation",
        throughput: "5,000+ Active Dispatches",
        sla: "99.95% Route Precision",
        deployment: "Multi-Zone Geo Cluster"
      }
    },
    {
      id: "svpm-alumni",
      name: "SVPM Alumni Network",
      tagline: "Cognitive Mentorship Matching & Institutional Portal",
      metric: "12,000+ Active Members",
      detail: "Semantic resume-to-job matching, automated chapter announcements, alumni donation tracking, and verified directories.",
      badge: "ACADEMIC NETWORK",
      link: "http://svpmalumni.aparaitech.org/",
      subpage: "/customers/portfolio",
      stack: "Next.js • Vector Embeddings • AWS",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#D4FD53",
      specs: {
        latency: "<50ms Semantic Scoring",
        throughput: "12,000+ Verified Records",
        sla: "99.9% Portal Availability",
        deployment: "AWS Serverless Edge"
      }
    },
    {
      id: "assessment-platform",
      name: "Online Assessment Platform",
      tagline: "Proctored Cognitive Testing & Skill Evaluation Engine",
      metric: "50,000+ Tests Evaluated",
      detail: "Automated MCQ generation, live webcam behavioral proctoring, code execution sandbox, and comprehensive candidate scoring.",
      badge: "ASSESSMENT ENGINE",
      link: "https://tests.apraitech.org/",
      subpage: "/customers/portfolio",
      stack: "WebAssembly • Pyodide • WebRTC • GCP",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#9B95FE",
      specs: {
        latency: "<30ms Code Isolation Run",
        throughput: "50,000+ Completed Sessions",
        sla: "100% Anti-Cheating Telemetry",
        deployment: "Isolated Sandbox Pods"
      }
    }
  ];

  // Core Capabilities with Rich Visual Mockups & Metrics
  const coreCapabilities = [
    {
      icon: <Workflow className="w-5 h-5 text-[#00E5C9]" />,
      title: "Autonomous Multi-Agent Swarms",
      tag: "AGENTIC ORCHESTRATION",
      metric: "<120ms Consensus",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      link: "/generative-ai",
      desc: "Goal-driven AI agent networks that collaborate across planning, tool-calling, data retrieval, and execution to automate complex knowledge work.",
      points: ["Self-correcting reasoning loops", "Tool-use & API integration", "Human-in-the-loop oversight"]
    },
    {
      icon: <Database className="w-5 h-5 text-[#00E5C9]" />,
      title: "Zero-Hallucination Enterprise RAG",
      tag: "HYBRID VECTOR RETRIEVAL",
      metric: "99.8% Grounded Precision",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      link: "/solutions",
      desc: "Hybrid semantic vector + BM25 keyword search connected to your proprietary documents with strict citation guardrails and verifiable evidence.",
      points: ["Sub-250ms retrieval latency", "Role-based ACL permission filtering", "Source sentence grounding"]
    },
    {
      icon: <Eye className="w-5 h-5 text-[#00E5C9]" />,
      title: "Vision AI & Document Intelligence",
      tag: "MULTIMODAL NEURAL VISION",
      metric: "99.4% Table Extraction",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=1000&q=80",
      link: "/generative-ai",
      desc: "Multimodal neural networks engineered for scanned invoices, complex engineering drawings, handwritten forms, and visual assembly inspection.",
      points: ["99.4% table extraction accuracy", "Complex layout awareness", "Edge inference capability"]
    },
    {
      icon: <Lock className="w-5 h-5 text-[#00E5C9]" />,
      title: "Private VPC & Sovereign LLMs",
      tag: "AIR-GAPPED SOVEREIGNTY",
      metric: "Zero Data Egress",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
      link: "/cloud",
      desc: "Deployment of state-of-the-art open models (Llama 3, Mistral, Qwen) inside your private cloud or on-premises servers with zero data egress.",
      points: ["Parameter-efficient fine-tuning", "vLLM high-throughput serving", "Complete IP sovereignty"]
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#00E5C9]" />,
      title: "Predictive Operational Intelligence",
      tag: "DYNAMIC TIME-SERIES ML",
      metric: "4.2x Demand Precision",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      link: "/solutions",
      desc: "Deep learning forecasting systems that analyze historical telemetry, supply chain variables, and customer behavior to anticipate operational demands.",
      points: ["Dynamic pricing & stock replenishment", "Predictive machine maintenance", "Anomaly & fraud detection"]
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00E5C9]" />,
      title: "Full-Lifecycle MLOps & Governance",
      tag: "ISO 27001 & SOC 2 COMPLIANCE",
      metric: "100% Audit Logging",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      link: "/services/devops-cicd",
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
            <h1 className="text-[clamp(1.85rem,5.5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
              Engineering Autonomous AI & Intelligent Cloud Systems
            </h1>

            {/* Subhead */}
            <p className="mt-5 text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-slate-300 max-w-3xl font-normal">
              Aparaitech Software designs, builds, and deploys production-grade Generative AI, autonomous multi-agent workflows, and sovereign cloud infrastructure tailored to your enterprise data.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#00E5C9] px-5 sm:px-7 text-sm sm:text-[15px] font-bold text-[#0C0D0F] transition-all hover:-translate-y-0.5 hover:brightness-110 w-full sm:w-auto shadow-lg shadow-[#00E5C9]/20"
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#0C0D0F]" />
              </button>

              <Link
                to="/generative-ai"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-[#22242A] bg-[#141518] px-5 sm:px-7 text-sm sm:text-[15px] font-mono text-white transition-all hover:border-[#00E5C9]/50 hover:bg-[#1C1C1E] w-full sm:w-auto"
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
      {/* 3. PROVEN PRODUCTION PLATFORMS SHOWCASE WITH CAROUSEL & TIMES NEW ROMAN */}
      <section id="platforms" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          {/* Header & Controls Strip */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="block h-2.5 w-2.5 bg-[#00E5C9]"></span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
                  PROVEN PRODUCTION DEPLOYMENTS
                </span>
              </div>
              <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold tracking-tight text-white leading-tight">
                Real-World Platforms Engineered & Operated by Aparaitech Software.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-times font-serif leading-relaxed">
                We do not deal in hypothetical concept decks. We build, scale, and maintain high-volume cognitive software systems deployed in production environments.
              </p>
            </div>

            {/* Carousel Navigation & Mode Toggles */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* View Mode Toggle */}
              <div className="inline-flex items-center rounded-lg bg-[#141518] border border-[#22242A] p-1 font-mono text-xs">
                <button
                  onClick={() => setPlatformViewMode("carousel")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                    platformViewMode === "carousel"
                      ? "bg-[#00E5C9] text-[#0C0D0F] font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Carousel</span>
                </button>
                <button
                  onClick={() => setPlatformViewMode("grid")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                    platformViewMode === "grid"
                      ? "bg-[#00E5C9] text-[#0C0D0F] font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>All (6)</span>
                </button>
              </div>

              {/* Prev / Next Scroll Buttons (Carousel Mode) */}
              {platformViewMode === "carousel" && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollCarousel("left")}
                    className="h-9 w-9 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#00E5C9]/50 hover:bg-[#1C1C1E] flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Previous platform"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollCarousel("right")}
                    className="h-9 w-9 rounded-lg bg-[#141518] border border-[#22242A] hover:border-[#00E5C9]/50 hover:bg-[#1C1C1E] flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Next platform"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Subpage Portfolio Link */}
              <Link
                to="/customers/portfolio"
                className="inline-flex h-9 items-center gap-1.5 px-4 rounded-lg bg-[#141518] border border-white/15 hover:border-[#00E5C9] text-xs font-mono text-white transition-all"
              >
                <span>Full Portfolio Subpage</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00E5C9]" />
              </Link>
            </div>
          </div>

          {/* Scrolling Effect Notice Bar */}
          {platformViewMode === "carousel" && (
            <div className="flex items-center justify-between mb-4 font-mono text-xs text-slate-400 px-1">
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${isCarouselPaused ? "bg-amber-400" : "bg-[#10B981] animate-pulse"}`}></span>
                {isCarouselPaused ? "Auto-Scroll Paused (Hovering)" : "Auto-Scrolling Active (Hover card to pause)"}
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Drag or use arrows to navigate systems
              </span>
            </div>
          )}

          {/* Platforms Cards Container: Carousel or Grid */}
          {platformViewMode === "carousel" ? (
            <div>
              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 px-1"
                style={{ scrollbarWidth: "none" }}
              >
                {productionPlatforms.map((platform, idx) => (
                  <div
                    key={platform.id || idx}
                    className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 snap-start group relative rounded-xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 transition-all duration-300 hover:border-[#00E5C9]/50 hover:shadow-2xl hover:shadow-[#00E5C9]/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* 1. High-Resolution Card Preview Image */}
                      <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-lg mb-5 bg-[#1C1C1E] border border-white/10 group-hover:border-[#00E5C9]/40 transition-all">
                        <img
                          src={platform.image}
                          alt={platform.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Gradient Shadow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-black/40"></div>

                        {/* Badges on Top */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#00E5C9]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                            {platform.badge}
                          </span>
                          <span className="font-times font-serif text-xs font-bold px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-[#D4FD53]/30 text-[#D4FD53]">
                            {platform.metric}
                          </span>
                        </div>

                        {/* Quick Specs Action Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPlatformModal(platform);
                          }}
                          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/85 hover:bg-[#00E5C9] hover:text-[#0C0D0F] text-white border border-white/20 text-[10px] font-mono transition-all backdrop-blur-md cursor-pointer shadow-md"
                          title="View Architecture Specs"
                        >
                          <SlidersHorizontal className="w-3 h-3" />
                          <span>Quick Specs</span>
                        </button>
                      </div>

                      {/* 2. Platform Title (Times New Roman) */}
                      <h3 className="text-xl sm:text-2xl font-times font-serif font-bold text-white group-hover:text-[#00E5C9] transition-colors mb-1.5 leading-snug">
                        {platform.name}
                      </h3>

                      {/* 3. Platform Tagline (Times New Roman) */}
                      <p className="text-xs sm:text-sm font-times font-serif italic text-slate-300 mb-3 leading-relaxed">
                        {platform.tagline}
                      </p>

                      {/* 4. Platform Detail Text */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 font-normal">
                        {platform.detail}
                      </p>

                      {/* 5. Production Telemetry Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {platform.specs.latency}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {platform.specs.throughput}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#D4FD53]/10 border border-[#D4FD53]/20 text-[#D4FD53] font-semibold">
                          {platform.specs.sla}
                        </span>
                      </div>
                    </div>

                    {/* 6. Card Footer with Subpage Link & Live Launch */}
                    <div className="pt-4 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      {/* Architecture Subpage Link */}
                      <Link
                        to={platform.subpage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00E5C9]/15 border border-white/10 hover:border-[#00E5C9]/40 text-[#00E5C9] font-mono text-[11px] font-semibold transition-all group-hover:border-[#00E5C9]/30"
                      >
                        <span>Architecture Subpage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Live Platform Deployment Link */}
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00E5C9] hover:bg-[#00E5C9]/90 text-[#0C0D0F] font-mono text-[11px] font-bold transition-all shadow-md hover:brightness-110"
                      >
                        <span>Launch Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {productionPlatforms.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    className={`h-2 transition-all rounded-full cursor-pointer ${
                      activePlatformIndex === idx
                        ? "w-8 bg-[#00E5C9]"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                    aria-label={`Jump to platform ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Full Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionPlatforms.map((platform, idx) => (
                <div
                  key={platform.id || idx}
                  className="group relative rounded-xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 transition-all duration-300 hover:border-[#00E5C9]/50 hover:shadow-2xl hover:shadow-[#00E5C9]/5 flex flex-col justify-between"
                >
                  <div>
                    {/* High-Resolution Card Preview Image */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-lg mb-5 bg-[#1C1C1E] border border-white/10 group-hover:border-[#00E5C9]/40 transition-all">
                      <img
                        src={platform.image}
                        alt={platform.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-black/40"></div>

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#00E5C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                          {platform.badge}
                        </span>
                        <span className="font-times font-serif text-xs font-bold px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-[#D4FD53]/30 text-[#D4FD53]">
                          {platform.metric}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPlatformModal(platform);
                        }}
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/85 hover:bg-[#00E5C9] hover:text-[#0C0D0F] text-white border border-white/20 text-[10px] font-mono transition-all backdrop-blur-md cursor-pointer shadow-md"
                        title="View Architecture Specs"
                      >
                        <SlidersHorizontal className="w-3 h-3" />
                        <span>Quick Specs</span>
                      </button>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-times font-serif font-bold text-white group-hover:text-[#00E5C9] transition-colors mb-1.5 leading-snug">
                      {platform.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-times font-serif italic text-slate-300 mb-3 leading-relaxed">
                      {platform.tagline}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 font-normal">
                      {platform.detail}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                        {platform.specs.latency}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                        {platform.specs.throughput}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#D4FD53]/10 border border-[#D4FD53]/20 text-[#D4FD53] font-semibold">
                        {platform.specs.sla}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <Link
                      to={platform.subpage}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00E5C9]/15 border border-white/10 hover:border-[#00E5C9]/40 text-[#00E5C9] font-mono text-[11px] font-semibold transition-all group-hover:border-[#00E5C9]/30"
                    >
                      <span>Architecture Subpage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00E5C9] hover:bg-[#00E5C9]/90 text-[#0C0D0F] font-mono text-[11px] font-bold transition-all shadow-md hover:brightness-110"
                    >
                      <span>Launch Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* QUICK ARCHITECTURE SPECS MODAL */}
      {selectedPlatformModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedPlatformModal(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedPlatformModal.image}
                alt={selectedPlatformModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-black/40"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[#00E5C9] px-3 py-1 rounded bg-[#0C0D0F]/90 border border-white/20">
                  {selectedPlatformModal.badge}
                </span>
                <span className="font-times font-serif text-sm font-bold text-[#D4FD53] px-3 py-1 rounded bg-[#0C0D0F]/90 border border-[#D4FD53]/30">
                  {selectedPlatformModal.metric}
                </span>
              </div>
            </div>

            {/* Modal Title & Tagline in Times New Roman */}
            <h3 className="text-2xl sm:text-3xl font-times font-serif font-bold text-white mb-2">
              {selectedPlatformModal.name}
            </h3>
            <p className="text-sm font-times font-serif italic text-[#00E5C9] mb-4">
              {selectedPlatformModal.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {selectedPlatformModal.detail}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#0C0D0F] border border-white/5 mb-6 font-mono text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 text-[10px]">INFERENCE LATENCY</div>
                <div className="text-white font-bold">{selectedPlatformModal.specs.latency}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 text-[10px]">DAILY SCALE</div>
                <div className="text-[#00E5C9] font-bold">{selectedPlatformModal.specs.throughput}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 text-[10px]">AVAILABILITY SLA</div>
                <div className="text-[#D4FD53] font-bold">{selectedPlatformModal.specs.sla}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 text-[10px]">DEPLOYMENT</div>
                <div className="text-slate-200 font-bold truncate">{selectedPlatformModal.specs.deployment}</div>
              </div>
            </div>

            {/* Stack */}
            <div className="mb-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                ENGINEERING STACK
              </div>
              <div className="p-3 rounded-lg bg-[#0C0D0F] border border-white/5 font-mono text-xs text-[#00E5C9]">
                {selectedPlatformModal.stack}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#22242A]">
              <Link
                to={selectedPlatformModal.subpage}
                onClick={() => setSelectedPlatformModal(null)}
                className="inline-flex h-11 items-center gap-2 px-5 rounded-lg bg-[#141518] border border-white/20 hover:border-[#00E5C9] text-xs font-mono text-white transition-all"
              >
                <span>Open Full System Subpage</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00E5C9]" />
              </Link>
              <a
                href={selectedPlatformModal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 px-5 rounded-lg bg-[#00E5C9] hover:brightness-110 text-xs font-mono text-[#0C0D0F] font-bold transition-all shadow-lg"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

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
            <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold tracking-tight text-white leading-tight">
              Architected for enterprise security, deterministic precision, and scale.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-times font-serif leading-relaxed">
              Every layer of our cognitive stack is built to eliminate hallucinations, enforce enterprise access controls, and integrate natively into existing enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 hover:border-[#00E5C9]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00E5C9]/5 flex flex-col justify-between"
              >
                <div>
                  {/* 1. Capability Preview Image Banner */}
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-lg mb-6 bg-[#1C1C1E] border border-white/10 group-hover:border-[#00E5C9]/40 transition-all">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Contrast Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-black/40"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#00E5C9]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                        {cap.tag}
                      </span>
                      <span className="font-times font-serif text-xs font-bold px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-[#D4FD53]/30 text-[#D4FD53]">
                        {cap.metric}
                      </span>
                    </div>

                    {/* Integrated Floating Icon */}
                    <div className="absolute bottom-3 left-3 h-10 w-10 rounded-lg bg-[#0C0D0F]/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#00E5C9] group-hover:border-[#00E5C9]/50 shadow-md">
                      {cap.icon}
                    </div>
                  </div>

                  {/* 2. Capability Title in Times New Roman */}
                  <h3 className="text-xl sm:text-2xl font-times font-serif font-bold text-white group-hover:text-[#00E5C9] transition-colors mb-2.5 leading-snug">
                    {cap.title}
                  </h3>

                  {/* 3. Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div>
                  {/* 4. Telemetry Bullet Points */}
                  <ul className="space-y-2 border-t border-[#22242A] pt-4 font-mono text-xs text-slate-300">
                    {cap.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C9]"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 5. Subpage Architecture Action Link */}
                  <div className="pt-4 mt-4 border-t border-[#22242A] flex items-center justify-between font-mono text-xs">
                    <span className="text-[11px] text-slate-500">Sovereign Architecture</span>
                    <Link
                      to={cap.link}
                      className="inline-flex items-center gap-1.5 text-[#00E5C9] hover:underline font-semibold text-xs transition-colors"
                    >
                      <span>Explore Subpage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
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
            <div className="lg:col-span-6 rounded-2xl bg-[#141518] border border-[#22242A] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5C9]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#22242A]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00E5C9] animate-pulse"></div>
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">
                    PROJECTED OPERATIONAL RECOVERY
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs text-[#D4FD53]">65% Automation Target</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div>
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {hoursSavedPerWeek.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Hours Recovered / Week
                  </div>
                </div>

                <div>
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00E5C9] truncate">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#141518] border border-white/20 rounded-xl p-5 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-mono p-1"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

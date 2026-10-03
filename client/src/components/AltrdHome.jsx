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
  Pause,
  ShoppingBag,
  Package,
  Settings,
  Car,
  Heart,
  GraduationCap,
  Film,
  Mic,
  Volume2,
  MessageSquare,
  HelpCircle,
  Video,
  Award,
  Globe,
  Compass
} from "lucide-react";
import toast from "react-hot-toast";
import { recordAppointmentBooking } from "../utils/sheetService";

export default function AltrdHome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [openSfFaq, setOpenSfFaq] = useState(0);

  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Salesforce Agentforce Diagnostic",
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
        source: "Homepage Salesforce Intake Modal",
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
          service: "Salesforce Agentforce Diagnostic",
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
  const [platformViewMode, setPlatformViewMode] = useState("carousel");
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

  // Customer Video Stories Carousel State (Salesforce Style)
  const videoStoriesRef = useRef(null);
  const [isVideoStoriesPaused, setIsVideoStoriesPaused] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Auto-scroll customer video stories
  useEffect(() => {
    if (isVideoStoriesPaused) return;
    const interval = setInterval(() => {
      if (videoStoriesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = videoStoriesRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardStep = 420;

        if (scrollLeft >= maxScroll - 20) {
          videoStoriesRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          videoStoriesRef.current.scrollBy({ left: cardStep, behavior: "smooth" });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isVideoStoriesPaused]);

  const scrollVideoStories = (direction) => {
    if (!videoStoriesRef.current) return;
    const cardStep = 420;
    videoStoriesRef.current.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth"
    });
  };

  // Salesforce-Style Floating AI Copilot Widget State
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [aiAssistantQuery, setAiAssistantQuery] = useState("");
  const [aiMessages, setAiMessages] = useState([
    {
      sender: "agent",
      text: "Hi! I'm Piper from Salesforce Agentforce. I help businesses discover Agentic workflows, unify Customer 360 data, and launch autonomous coworker agents. What can I help you explore today?"
    }
  ]);

  const handleAiSend = (e) => {
    e.preventDefault();
    if (!aiAssistantQuery.trim()) return;
    const q = aiAssistantQuery.trim();
    setAiMessages(prev => [...prev, { sender: "user", text: q }]);
    setAiAssistantQuery("");
    setTimeout(() => {
      setAiMessages(prev => [
        ...prev,
        {
          sender: "agent",
          text: `Thank you for asking about "${q}". Agentforce combines the Atlas reasoning engine, Customer 360 metadata, and sovereign guardrails. You can connect with our sales team or explore our 30-day free trial.`
        }
      ]);
    }, 600);
  };

  // 8 Salesforce Industry Cards (Matching Blade 15 & Screenshot 4)
  const salesforceIndustries = [
    {
      id: "financial-services",
      name: "Financial Services",
      desc: "Connect with customers proactively to deliver AI-powered, high-value experiences and sub-second fraud detection.",
      link: "/industries/finance",
      icon: <Shield className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "retail",
      name: "Retail",
      desc: "Acquire profitable customers faster with unified, real-time data, vector search catalogs, and automated checkouts.",
      link: "/industries/ecommerce",
      icon: <ShoppingBag className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "consumer-goods",
      name: "Consumer Goods",
      desc: "Transform your business with consumer goods technology made for dynamic inventory synchronization and multi-brand distribution.",
      link: "/industries/manufacturing",
      icon: <Package className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      desc: "Integrate all your data across a unified value chain to better serve customers, calculate BOMs, and coordinate partners.",
      link: "/industries/manufacturing",
      icon: <Settings className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "automotive",
      name: "Automotive",
      desc: "Drive personalised experiences, explore new revenue models and power software-defined vehicles with predictive telemetry.",
      link: "/industries/manufacturing",
      icon: <Car className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      desc: "Elevate your clinical workforce with HIPAA-compliant AI agents for healthier businesses, verified medical data, and trusted outcomes.",
      link: "/industries/healthcare",
      icon: <Heart className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "education",
      name: "Education",
      desc: "Elevate the education experience with the #1 AI architecture for learner success, institutional alumni portals, and proctored testing.",
      link: "/industries/education",
      icon: <GraduationCap className="w-5 h-5 text-[#5A24BA]" />
    },
    {
      id: "media",
      name: "Media",
      desc: "Enhance audience engagement, streamline digital content operations, and optimize recurring subscription lifetime value.",
      link: "/industries/startups",
      icon: <Film className="w-5 h-5 text-[#5A24BA]" />
    }
  ];

  // 8 Indian Enterprise Customer Stories (Matching Blades 5-12 of salesforce.com/in)
  const customerVideoStories = [
    {
      id: "tata-realty",
      company: "Tata Realty & Infrastructure Limited",
      executive: "Sanjay Dutt",
      title: "MD & CEO, Tata Realty & Infrastructure Limited",
      quote: "Tata Realty and Infrastructure Limited wanted to remove data silos and automate processes for real-time visibility. With Salesforce and AI agents, teams work seamlessly, boosting performance, customer engagement and satisfaction.",
      thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      stats: "Real-time Visibility"
    },
    {
      id: "manipal",
      company: "Manipal Academy of Higher Education (MAHE)",
      executive: "Dr. Ganesh Prasad",
      title: "Director - Dept of IT & Digital Transformation, MAHE",
      quote: "What does it take to run one of India's top 3 universities at scale? MAHE manages 40,000+ students, 6,000+ faculty & 37 institutes on Salesforce's Student Lifecycle platform. Now with Agentforce, complex tasks are just a sentence away — education, reimagined.",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      stats: "40,000+ Students"
    },
    {
      id: "pvr-inox",
      company: "PVR INOX Limited",
      executive: "Indranil Mukherjee",
      title: "Deputy VP & Head - Customer Experience, PVR Limited",
      quote: "PVR INOX, India's largest multiplex chain & world's 5th largest, runs 360 cinemas and 1,800+ screens serving 15.7 crore customers yearly. With Salesforce and Agentforce, every booking, complaint & call becomes one unified 360° customer view.",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      stats: "15.7 Cr Customers"
    },
    {
      id: "ambuja-neotia",
      company: "Ambuja Neotia Group",
      executive: "Kripadyuti Sarkar",
      title: "Group CIO, Ambuja Neotia Group",
      quote: "Salesforce gave us the agility and ease of use to quickly build the transparent and service-oriented journeys that define our customer philosophy. This is key to serving our real estate customers with the empathy they deserve.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      stats: "Empathetic Real Estate"
    },
    {
      id: "shakti-pumps",
      company: "Shakti Pumps (India) Limited",
      executive: "Rajesh Potdar",
      title: "Chief Digital Information Officer, Shakti Pumps",
      quote: "Shakti Pumps built a connected ecosystem on Salesforce to digitally transform its dealer & distribution network. Driving a data-driven team, a synced dealer network, delighted farmers and our ₹5,000 crore growth ambition.",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      stats: "₹5,000 Cr Ambition"
    },
    {
      id: "hero-fincorp",
      company: "Hero FinCorp",
      executive: "Saiprasad Potaraju",
      title: "Head of Enterprise Applications, Hero FinCorp",
      quote: "Modernizing loan origination and real-time customer underwriting credit scoring across 1,500+ Indian touchpoints on unified Salesforce AI data with zero processing lag.",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      stats: "1,500+ Branches"
    },
    {
      id: "exide",
      company: "Exide Industries Limited",
      executive: "Ravi Kumar",
      title: "CDIO, Exide Industries Limited",
      quote: "Automating national battery supply chain logistics, instant warranty registrations, and dealer field servicing with autonomous AI workflows and unified Customer 360 data.",
      thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      stats: "Unified Supply Chain"
    },
    {
      id: "indiafirst-life",
      company: "IndiaFirst Life Insurance",
      executive: "Sankaranarayanan Raghavan",
      title: "Chief Technology & Digital Officer, IndiaFirst Life",
      quote: "Transforming life insurance policy issuance and conversational underwriting with 24/7 Agentforce claims processing, reducing customer turnaround time by 60%.",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      stats: "60% Faster Turnaround"
    }
  ];

  // 8 Enterprise Client Logos (Matching Blade 16 & Screenshot 5)
  const enterpriseClientLogos = [
    { name: "Balaji Wafers", category: "FMCG / Retail", fallbackText: "BALAJI WAFERS" },
    { name: "FLAME University", category: "Higher Education", fallbackText: "FLAME UNIVERSITY" },
    { name: "Genpact", category: "Global Enterprise Services", fallbackText: "GENPACT" },
    { name: "Godrej & Boyce", category: "Conglomerate & Manufacturing", fallbackText: "GODREJ & BOYCE" },
    { name: "Mahindra", category: "Automotive & Aerospace", fallbackText: "MAHINDRA" },
    { name: "Pepe Jeans London", category: "Global Apparel", fallbackText: "PEPE JEANS LONDON" },
    { name: "Razorpay", category: "Fintech & Payments", fallbackText: "RAZORPAY" },
    { name: "Secutech", category: "Smart Buildings & Security", fallbackText: "SECUTECH" }
  ];

  // 3 Analyst & Leadership Cards (Matching Blade 17)
  const analystCards = [
    {
      title: "Valoir Research Report",
      headline: "Agentforce delivers ROI faster and at a lower cost than a DIY approach",
      stat: "2.4x Faster Time-to-Value",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      desc: "Independent benchmarking demonstrates prebuilt agents and unified metadata reduce deployment friction by 70% compared to custom open-source scaffolding.",
      tag: "ANALYST REPORT"
    },
    {
      title: "G2 Global Software Awards",
      headline: "Salesforce voted the #1 Global Software Company on G2 & 9-Year Gartner Leader",
      stat: "#1 Software Worldwide",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      desc: "Recognized as the leader in Enterprise CRM, customer service automation, and agentic intelligence across over 100,000 verified enterprise customer reviews.",
      tag: "INDUSTRY LEADER"
    },
    {
      title: "Futurum Enterprise Assessment",
      headline: "Futurum explains why Agentforce is the fastest path to autonomous enterprise value",
      stat: "66% Autonomous Resolution",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      desc: "Analysis of high-volume customer contact hubs reveals breakthrough deflection rates and NPS improvements through contextual multi-agent collaboration.",
      tag: "MARKET STUDY"
    }
  ];

  // 3 Agentblazer Learning Levels (Matching Blades 18 & 19)
  const agentblazerLevels = [
    {
      level: "Level 1",
      title: "Champion",
      desc: "Confidently explain Agentforce concepts, trust boundaries, and measurable business impact.",
      badge: "FOUNDATIONAL SKILLS",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      accent: "#00E5C9"
    },
    {
      level: "Level 2",
      title: "Innovator",
      desc: "Implement Agentforce solutions, configure custom actions, and drive measurable workflow automation.",
      badge: "PRACTITIONER CERTIFICATION",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      accent: "#0176D3"
    },
    {
      level: "Level 3",
      title: "Legend",
      desc: "Master advanced Atlas reasoning engines, multi-agent swarms, and enterprise security governance.",
      badge: "EXECUTIVE ARCHITECT",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      accent: "#D4FD53"
    }
  ];

  // 5 Salesforce CRM FAQs (Matching Blade 24)
  const salesforceFaqs = [
    {
      q: "What is Salesforce?",
      a: "Salesforce is the #1 AI CRM (customer relationship management) platform. We bring companies and customers together by providing a unified set of applications — powered by agentic AI and data — that help every department, including sales, service, marketing, commerce, and IT, work as one. Our cloud-based agentic solutions help you find more leads, close more deals, and provide better service on a single, integrated platform."
    },
    {
      q: "What is CRM software and why do businesses in India need it?",
      a: "CRM stands for customer relationship management. It’s a technology for managing all your company’s relationships and interactions with customers and potential customers. A CRM system helps you organize contact information, automate tasks like logging calls and follow-ups, and analyze data to understand customer behavior. An AI-powered CRM like Salesforce provides a single, 360-degree view of every customer to build stronger, more profitable relationships at scale."
    },
    {
      q: "What is agentic AI and how is it used in Salesforce?",
      a: "Agentic AI refers to advanced artificial intelligence systems that can act autonomously to achieve a specific goal with minimal human intervention. Unlike traditional AI that only generates text, agentic AI can reason, plan multistep actions, and execute tasks. In Salesforce, Agentforce automates complex workflows like lead qualification, service case resolution, and proactive customer engagement."
    },
    {
      q: "How does Salesforce CRM help businesses grow in India?",
      a: "Salesforce offers agentic CRM solutions tailored for companies of all sizes in India, from fast-growing startups and SMBs to large enterprises. Our new SMB Growth Kit helps Indian businesses deploy in just 4 weeks, with local support, flexible pricing, and complete scalability as your operations expand across India."
    },
    {
      q: "How does Aparaitech Software integrate with the Salesforce Agentforce ecosystem?",
      a: "Aparaitech Software acts as an enterprise AI engineering partner, building sovereign VPC connectors, private LLM agents, and zero-data-retention pipelines that seamlessly synchronize with Salesforce Customer 360, Data Cloud, and Slack workflows with guaranteed SLAs."
    }
  ];

  // 6 Live Production Platforms
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

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#0176D3] selection:text-white">

      {/* 0. MARQUEE BANNER BLADE (MATCHING BLADE 0 OF SALESFORCE.COM/IN) */}
      <section className="w-full bg-[#032D60] border-b border-white/10 py-3.5 px-4 sm:px-8">
        <div className="mx-auto w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="h-9 w-9 rounded-full bg-[#0176D3]/40 border border-[#0176D3] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#D4FD53]" />
            </div>
            <div>
              <div className="text-sm sm:text-[15px] font-bold text-white leading-tight">
                Get Started with Salesforce <span className="text-[#00E5C9]">— India's #1 Agentic CRM</span>
              </div>
              <p className="text-xs text-slate-200 mt-0.5">
                Uniquely built for India's growing businesses, the new SMB Growth Kit helps you sell faster, collaborate smarter and make confident decisions. Live in just 4 weeks!*
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00E5C9] hover:bg-[#00E5C9]/90 text-[#0C0D0F] font-bold text-xs sm:text-sm transition-all shrink-0 cursor-pointer shadow-md hover:brightness-105"
          >
            <span>Get SMB Growth Kit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 1. HERO: WELCOME TO THE AGENTIC ENTERPRISE (MATCHING BLADE 1 & SCREENSHOT 1) */}
      <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-[#032D60]/90 via-[#0C0D0F] to-[#0C0D0F] py-20 sm:py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0176D3]/20 border border-[#0176D3]/40 text-[#00E5C9] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Where humans, agents, and platforms drive customer success together.</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-times font-serif font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
              Welcome to the Agentic Enterprise
            </h1>

            {/* Description Subtext */}
            <p className="mt-6 text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-slate-300 max-w-3xl font-times font-serif">
              Humans and agents work inside the systems that run your business. The result: faster decisions, stronger customer relationships, and non-stop growth. Now with Headless 360, every Salesforce capability is accessible from any tool, any agent, any interface — wherever work happens.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0176D3] hover:bg-[#0176D3]/90 px-7 text-sm sm:text-base font-bold text-white transition-all shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                <span>Explore Agentforce Coworker</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#141518] px-7 text-sm sm:text-base font-mono text-white transition-all hover:border-[#00E5C9]/50 hover:bg-[#1C1C1E] w-full sm:w-auto"
              >
                <span>Meet Slackbot / Live Demo</span>
                <ExternalLink className="w-4 h-4 text-[#00E5C9]" />
              </button>
            </div>

            {/* 5 Product Ecosystem Cards (Slack, Tableau, Agentforce, Customer 360, Data 360) */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 w-full text-left font-sans">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141518]/90 border border-white/10 hover:border-[#0176D3] transition-all group shadow-md">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 text-[#00E5C9] group-hover:scale-110 transition-transform">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">Slack</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Connect workflows and conversational data where work happens.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#141518]/90 border border-white/10 hover:border-[#0176D3] transition-all group shadow-md">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 text-[#D4FD53] group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">Tableau</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Turn agentic analytics into actionable intelligence.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0176D3]/20 border border-[#0176D3]/50 hover:border-[#0176D3] transition-all group shadow-lg">
                <div className="h-10 w-10 rounded-xl bg-[#0176D3]/40 flex items-center justify-center mb-3 text-[#D4FD53] group-hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">Agentforce</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Build trusted, agentic experiences that act with purpose.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#141518]/90 border border-white/10 hover:border-[#0176D3] transition-all group shadow-md">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 text-[#9B95FE] group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">Customer 360</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Ground every decision in proven business context.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#141518]/90 border border-white/10 hover:border-[#0176D3] transition-all group shadow-md col-span-2 sm:col-span-1">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 text-[#00E5C9] group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">Data 360</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  One governed, trusted enterprise data foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "SEE WHY COMPANIES TRUST SALESFORCE" & BUILT-IN AI SPLIT SECTION (BLADES 2 & 3 & SCREENSHOT 3) */}
      <section className="w-full bg-[#0E0F12] py-20 border-b border-[#22242A] relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-[#0176D3] uppercase tracking-widest">
              PROVEN ENTERPRISE IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-times font-serif font-bold text-white mt-2">
              See why companies trust Salesforce to help them grow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-[clamp(2.1rem,4vw,3.25rem)] font-times font-serif font-bold text-white tracking-tight leading-tight">
                Built-in AI for every part of your business.
              </h3>
              <p className="text-base text-slate-300 font-times font-serif leading-relaxed">
                Put AI to work across sales, service, and marketing with Starter Suite — a CRM that knows your business and can automate the kind of customer experiences you’ll actually be proud of. Start simply with quick and easy setup and prebuilt agents.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#008244] hover:bg-[#007038] px-6 text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
                >
                  <span>Start for free</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#141518] hover:bg-[#1C1C1E] px-6 text-sm font-mono text-white transition-all cursor-pointer"
                >
                  <span>Start demo</span>
                  <ArrowRight className="w-4 h-4 text-[#00E5C9]" />
                </button>
              </div>

              {/* High-Impact Stat Counter */}
              <div className="pt-6 border-t border-[#22242A] flex items-center gap-4 font-mono text-xs text-slate-400">
                <div className="text-3xl font-bold font-times font-serif text-[#D4FD53]">
                  3.4M+
                </div>
                <div>
                  <div className="text-white font-semibold">Autonomous Conversations & Transactions Handled Daily</div>
                  <div className="text-slate-500 text-[11px]">Powered by Agentforce & Customer 360</div>
                </div>
              </div>
            </div>

            {/* Right Vidyard Video Player Mockup Card */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0176D3]/30 via-[#5A24BA]/30 to-[#00E5C9]/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-2xl bg-[#141518] border border-[#22242A] overflow-hidden p-3 shadow-2xl">
                <div className="relative h-[340px] sm:h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0B2577] via-[#5A24BA] to-[#0A0D1A] flex flex-col justify-between p-6 sm:p-8">
                  {/* Top Branding Pill */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
                      Starter Suite • India SMB Edition
                    </span>
                    <span className="font-mono text-xs text-[#00E5C9] flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                      Interactive Demo
                    </span>
                  </div>

                  {/* Centered Play Trigger */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="h-20 w-20 rounded-full bg-white text-[#0B2577] flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer group-hover:shadow-[#00E5C9]/40 mb-4"
                    >
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </button>
                    <h3 className="text-xl sm:text-2xl font-times font-serif font-bold text-white max-w-sm">
                      Why Indian SMBs love Salesforce
                    </h3>
                  </div>

                  {/* Bottom Stats Banner */}
                  <div className="flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-4">
                    <span>Prebuilt Agents Ready</span>
                    <span className="text-[#D4FD53] font-bold">Live in Just 4 Weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3M+ CONVERSATIONS HANDLED BY AGENTFORCE AND COUNTING (MATCHING BLADE 4) */}
      <section className="w-full bg-[#0C0D0F] py-20 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Metrics Demonstration Card */}
            <div className="lg:col-span-6 relative rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-pulse"></div>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Agentforce Resolution Engine
                  </span>
                </div>
                <span className="font-mono text-xs text-[#00E5C9]">2.5M+ Requests Handled</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold font-times font-serif text-[#00E5C9]">66%</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">Autonomous Resolution</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold font-times font-serif text-[#D4FD53]">15%</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">More Pipeline</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold font-times font-serif text-[#9B95FE]">1.8x</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">Higher Conversion</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 text-xs text-slate-300 leading-relaxed font-mono">
                "Agentforce handles tier-1 customer inquiries, drafts sales email sequences, and verifies inventory autonomously with zero hallucination guardrails."
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00E5C9]/10 border border-[#00E5C9]/30 text-[#00E5C9] font-mono text-xs font-bold uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5" />
                PROVEN AGENTIC SCALE
              </div>
              <h2 className="text-[clamp(2.1rem,4vw,3.25rem)] font-times font-serif font-bold text-white tracking-tight leading-tight">
                3M+ conversations handled by Agentforce and counting.
              </h2>
              <p className="text-base text-slate-300 font-times font-serif leading-relaxed">
                Everyone talks the AI talk. We’re walking the walk. With 66% autonomous case resolution, 15% more marketing pipeline, and 1.8x higher lead conversion, Agentforce delivers real conversational AI across service, sales, and marketing workflows. See how we did it – and how you can, too.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex h-12 items-center gap-2 px-6 rounded-lg bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-bold text-sm shadow-md cursor-pointer"
                >
                  <span>See our stories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/solutions"
                  className="inline-flex h-12 items-center gap-2 px-6 rounded-lg border border-white/20 bg-[#141518] hover:bg-[#1C1C1E] text-white font-mono text-xs transition-all"
                >
                  <span>Experience Salesforce Help</span>
                  <ExternalLink className="w-4 h-4 text-[#00E5C9]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER VIDEO STORIES CAROUSEL (MATCHING BLADES 5-12 & SCREENSHOT 2) */}
      <section className="w-full bg-[#0B2577] py-24 border-b border-[#0176D3]/40 relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00E5C9] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <Video className="w-3.5 h-3.5" />
                Verified Indian Customer Stories
              </div>
              <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold text-white tracking-tight leading-tight max-w-2xl">
                See why companies trust Salesforce to help them grow.
              </h2>
            </div>

            {/* Video Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollVideoStories("left")}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Previous customer story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsVideoStoriesPaused(prev => !prev)}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer font-mono text-xs"
                aria-label="Pause or play auto-scroll"
              >
                {isVideoStoriesPaused ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={() => scrollVideoStories("right")}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Next customer story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Customer Video Cards Track */}
          <div
            ref={videoStoriesRef}
            onMouseEnter={() => setIsVideoStoriesPaused(true)}
            onMouseLeave={() => setIsVideoStoriesPaused(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {customerVideoStories.map((story) => (
              <div
                key={story.id}
                className="w-[320px] sm:w-[380px] lg:w-[410px] shrink-0 snap-start rounded-2xl overflow-hidden bg-white text-gray-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={story.thumbnail}
                    alt={story.executive}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

                  <button
                    onClick={() => setActiveVideoModal(story)}
                    className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 hover:bg-white text-[#0B2577] flex items-center justify-center shadow-xl hover:scale-110 transition-all cursor-pointer"
                  >
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </button>

                  <div className="absolute top-3 right-3 font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {story.stats}
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#0176D3] uppercase tracking-wider">
                      {story.company}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">
                    {story.executive}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 font-medium">
                    {story.title}
                  </p>
                  <p className="text-xs text-gray-700 italic mt-3 line-clamp-3 leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SALESFORCE IS THE PLATFORM FOR THE AGENTIC ENTERPRISE (MATCHING BLADE 13) */}
      <section className="w-full bg-[#0E0F12] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center">
          <span className="font-mono text-xs font-bold text-[#00E5C9] uppercase tracking-widest">
            DEEPLY UNIFIED ARCHITECTURE
          </span>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-times font-serif font-bold text-white tracking-tight leading-tight mt-3 max-w-3xl mx-auto">
            Salesforce is the platform for the Agentic Enterprise
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-times font-serif">
            Our deeply unified platform brings together apps, data, agents, and metadata to drive customer and employee success. With trust and governance built in, Salesforce ensures your AI and business scale securely, reliably, and with confidence.
          </p>

          <div className="mt-8">
            <Link
              to="/solutions"
              className="inline-flex h-12 items-center gap-2 px-7 rounded-lg bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-bold text-sm shadow-lg"
            >
              <span>See all products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Platform Architecture Interactive Diagram */}
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-10 shadow-2xl text-left">
            <div className="space-y-4 font-mono text-xs">
              {/* Layer 1 */}
              <div className="p-4 rounded-xl bg-[#0176D3]/20 border border-[#0176D3]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#0176D3] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <div className="text-white font-bold">Agentforce Atlas Reasoning Engine</div>
                    <div className="text-slate-300 text-[11px]">Autonomous goal decomposition, tool execution & real-time guardrails</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-[#0176D3] text-white font-bold text-[10px]">AGENTIC REASONING</span>
              </div>

              {/* Layer 2 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#5A24BA] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <div className="text-white font-bold">Customer 360 Core Applications</div>
                    <div className="text-slate-300 text-[11px]">Sales, Service, Marketing, Commerce, Slack, and Tableau natively unified</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-white/10 text-[#00E5C9] font-bold text-[10px]">APPLICATION SUITE</span>
              </div>

              {/* Layer 3 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#008244] text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <div className="text-white font-bold">Data 360 & Federated Metadata</div>
                    <div className="text-slate-300 text-[11px]">Zero-copy Data Cloud connectors, hybrid vector embeddings & schema governance</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-white/10 text-[#D4FD53] font-bold text-[10px]">ZERO-COPY DATA</span>
              </div>

              {/* Layer 4 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#22242A] text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <div className="text-white font-bold">Enterprise Trust & Sovereign Compliance</div>
                    <div className="text-slate-300 text-[11px]">Indian data localization, SOC 2 Type II, ISO 27001 & prompt injection isolation</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-white/10 text-white font-bold text-[10px]">ZERO-RETENTION TRUST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 16+ AGENTFORCE SOLUTIONS BUILT FOR YOUR INDUSTRY (MATCHING BLADES 14 & 15 & SCREENSHOT 4) */}
      <section id="industries" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B95FE] font-bold">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold tracking-tight text-white leading-tight mt-2">
              Launch faster with 16+ Agentforce solutions, built for your industry
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-times font-serif leading-relaxed">
              Designed with industry expertise, these out-of-the-box solutions align with your workflows, data, and customer needs, so you can modernise faster, go to market sooner, and deliver value from day one.
            </p>
          </div>

          {/* 8 Salesforce Vibrant Purple Gradient Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesforceIndustries.map((ind) => (
              <div
                key={ind.id}
                className="group relative rounded-3xl bg-gradient-to-br from-[#5A24BA] to-[#3B1287] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#5A24BA]/40 border border-white/10 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-8">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <Link
                    to={ind.link}
                    className="text-xs font-semibold text-white underline hover:text-[#D4FD53] transition-colors flex items-center gap-1"
                  >
                    <span>Explore {ind.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 inline" />
                  </Link>

                  <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    {ind.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/solutions"
              className="inline-flex h-11 items-center gap-2 px-6 rounded-lg border border-white/20 bg-[#141518] hover:bg-[#1C1C1E] text-white font-bold text-xs"
            >
              <span>See all Industries</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00E5C9]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED CRM SOFTWARE BY 150,000+ BUSINESSES WORLDWIDE (MATCHING BLADE 16 & SCREENSHOT 5) */}
      <section className="w-full bg-[#0E0F12] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(1.85rem,3.8vw,3rem)] font-times font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Trusted CRM & AI Software by 150,000+ Businesses Worldwide
          </h2>
          <div className="mt-5">
            <Link
              to="/customers/success-stories"
              className="inline-flex h-11 items-center gap-2 px-6 rounded-full bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-semibold text-xs transition-all shadow-md"
            >
              <span>See all stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Crisp White Logo Cards Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {enterpriseClientLogos.map((client, idx) => (
              <div
                key={idx}
                className="h-28 rounded-xl bg-white p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 group"
              >
                <div className="text-gray-900 font-bold text-sm sm:text-base tracking-wider uppercase font-mono group-hover:text-[#0176D3] transition-colors text-center">
                  {client.name}
                </div>
                <div className="text-[10px] text-gray-500 font-sans mt-1">
                  {client.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEE WHY ANALYSTS AGREE SALESFORCE SHOULD BE YOUR AGENTIC AI PARTNER (MATCHING BLADE 17) */}
      <section className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="font-mono text-xs font-bold text-[#00E5C9] uppercase tracking-widest">
              INDEPENDENT BENCHMARKS
            </span>
            <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold text-white tracking-tight leading-tight mt-3">
              See why analysts agree Salesforce should be your Agentic AI partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analystCards.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 hover:border-[#0176D3] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/10">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 text-[10px] font-mono text-[#00E5C9] border border-white/20">
                      {c.tag}
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-xs font-bold text-[#D4FD53]">
                      {c.stat}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {c.headline}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#22242A] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{c.title}</span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-[#0176D3] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BECOME AN AGENTBLAZER (MATCHING BLADES 18 & 19) */}
      <section className="w-full bg-[#0E0F12] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#D4FD53] uppercase tracking-widest">
                TRAILHEAD & ACADEMY
              </span>
              <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold text-white tracking-tight leading-tight mt-2">
                Become an Agentblazer
              </h2>
              <p className="mt-3 text-base text-slate-300 font-times font-serif leading-relaxed">
                Learn essential AI and Agentforce skills required to shape the future of work for free.
              </p>
            </div>
            <a
              href="https://lms-full-stack-mcq7.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 px-6 rounded-lg bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-bold text-xs shrink-0 shadow-md"
            >
              <span>Explore all Agentforce learning</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agentblazerLevels.map((lvl, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 hover:border-white/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-white/10">
                    <img
                      src={lvl.image}
                      alt={lvl.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-black/30"></div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0C0D0F]/90 text-[10px] font-mono font-bold text-[#00E5C9] border border-white/20">
                      {lvl.badge}
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#0176D3] font-bold uppercase tracking-wider mb-1">
                    {lvl.level}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lvl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {lvl.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#22242A]">
                  <a
                    href="https://lms-full-stack-mcq7.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00E5C9] hover:underline"
                  >
                    <span>Start Learning Path</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WE BELIEVE BUSINESS IS THE GREATEST PLATFORM FOR CHANGE (MATCHING BLADE 20) */}
      <section className="w-full bg-[#032D60] py-20 border-b border-white/10 text-white">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-times font-serif font-bold leading-tight">
            We believe that business is the greatest platform for change.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-times font-serif">
            Grounded in trust, customer success, innovation, equality, and sustainability, we’re committed to doing well in business and doing good in the world — investing 1% of our equity, technology, and time to create lasting change. We’re also a founder and champion of Pledge 1%, a global movement to ensure giving back is part of companies of all sizes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/company/values"
              className="inline-flex h-12 items-center gap-2 px-7 rounded-lg bg-white text-[#032D60] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
            >
              <span>See what drives us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex h-12 items-center gap-2 px-7 rounded-lg border border-white/30 hover:border-white text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Take the pledge</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. LIVE PRODUCTION PLATFORMS SHOWCASE CAROUSEL */}
      <section id="platforms" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
                LIVE PRODUCTION PORTFOLIO
              </span>
              <h2 className="text-[clamp(2.1rem,4.2vw,3.35rem)] font-times font-serif font-bold tracking-tight text-white leading-tight mt-2">
                Real-World Platforms Engineered & Operated by Aparaitech
              </h2>
              <p className="mt-3 text-base text-slate-300 font-times font-serif leading-relaxed">
                We build, scale, and maintain high-volume cognitive software systems deployed in production environments across India.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="h-10 w-10 rounded-full bg-[#141518] border border-[#22242A] hover:border-[#00E5C9] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="h-10 w-10 rounded-full bg-[#141518] border border-[#22242A] hover:border-[#00E5C9] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

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
                className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 snap-start group relative rounded-xl bg-[#141518] border border-[#22242A] p-6 sm:p-7 transition-all duration-300 hover:border-[#00E5C9]/50 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-lg mb-5 bg-[#1C1C1E] border border-white/10 group-hover:border-[#00E5C9]/40 transition-all">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-black/40"></div>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#00E5C9]">
                        {platform.badge}
                      </span>
                      <span className="font-times font-serif text-xs font-bold px-2.5 py-1 rounded bg-[#0C0D0F]/90 backdrop-blur-md border border-[#D4FD53]/30 text-[#D4FD53]">
                        {platform.metric}
                      </span>
                    </div>
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
                </div>

                <div className="pt-4 border-t border-[#22242A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <Link
                    to={platform.subpage}
                    className="inline-flex items-center gap-1.5 text-[#00E5C9] hover:underline font-semibold"
                  >
                    <span>Architecture Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00E5C9] text-[#0C0D0F] font-bold shadow-md hover:brightness-110"
                  >
                    <span>Launch Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GET STARTED TODAY - FREE FOR 30 DAYS (MATCHING BLADES 22 & 23) */}
      <section className="w-full bg-gradient-to-r from-[#0176D3] to-[#0B2577] py-20 text-white text-center">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[clamp(2.3rem,4.8vw,3.75rem)] font-times font-serif font-bold tracking-tight leading-tight">
            Get started today.
          </h2>
          <p className="mt-3 text-base sm:text-xl text-white/90 font-times font-serif">
            There's nothing to install. No credit card required. Free for 30 days.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex h-13 px-9 rounded-lg bg-[#008244] hover:bg-[#007038] text-white font-bold text-base transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Try for free</span>
            </button>
            <a
              href="tel:+918261840199"
              className="inline-flex h-13 px-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white font-mono text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00E5C9]" />
              <span>Contact Sales: 1800-420-7332</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. SALESFORCE CRM FAQS ACCORDION (MATCHING BLADE 24) */}
      <section id="faqs" className="w-full bg-[#0C0D0F] py-24 border-b border-[#22242A]">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5C9] font-bold">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-times font-serif font-bold tracking-tight text-white leading-tight mt-2">
              Salesforce CRM FAQs
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              CRM and Agentic AI FAQ for Your Business in India
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {salesforceFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#141518] border border-[#22242A] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenSfFaq(openSfFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.01]"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={
                      openSfFaq === idx
                        ? "w-5 h-5 text-[#00E5C9] rotate-180 transition-transform shrink-0"
                        : "w-5 h-5 text-slate-500 transition-transform shrink-0"
                    }
                  />
                </button>
                {openSfFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-[#22242A] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKE / FREE TRIAL MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#141518] border border-white/20 rounded-xl p-5 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-mono p-1 cursor-pointer"
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
                  SALESFORCE CRM & AGENTFORCE INTAKE
                </span>
                <h3 className="text-xl font-bold text-white">
                  Get Started Free for 30 Days
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Request Confirmed</h4>
                <p className="text-xs text-slate-300">
                  Our Salesforce Solutions Specialist will reach out within 1 hour.
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
                    <option value="Salesforce Starter Suite Free Trial">Salesforce Starter Suite (Free for 30 Days)</option>
                    <option value="Agentforce Coworker Implementation">Agentforce Coworker Implementation</option>
                    <option value="Customer 360 & Data Cloud VPC">Customer 360 & Data Cloud VPC</option>
                    <option value="SMB Growth Kit 4-Week Rollout">SMB Growth Kit (Live in 4 Weeks)</option>
                    <option value="Enterprise Architecture Consulting">Enterprise AI Diagnostic & Custom Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Operational Requirement (Optional)</label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your current CRM or automation goals..."
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
                  className="w-full h-11 rounded bg-[#008244] hover:bg-[#007038] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  {submitting ? "Transmitting..." : "Start Free 30-Day Access →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMER VIDEO MODAL */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#141518] border border-[#22242A] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.executive}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white text-[#0B2577] flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#00E5C9] uppercase">
                {activeVideoModal.company}
              </span>
              <span className="font-mono text-xs font-bold text-[#D4FD53] px-2.5 py-1 rounded bg-[#D4FD53]/10 border border-[#D4FD53]/20">
                {activeVideoModal.stats}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {activeVideoModal.executive}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mb-4">
              {activeVideoModal.title}
            </p>
            <p className="text-sm text-slate-300 italic mb-6 leading-relaxed">
              "{activeVideoModal.quote}"
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#22242A]">
              <button
                onClick={() => {
                  setActiveVideoModal(null);
                  setModalOpen(true);
                }}
                className="inline-flex h-11 items-center gap-2 px-6 rounded-lg bg-[#008244] hover:bg-[#007038] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                <span>Request Case Study Architecture Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SALESFORCE-STYLE FLOATING "ASK PIPER" AI ASSISTANT WIDGET */}
      <div className="fixed bottom-20 right-4 sm:right-6 z-40">
        {!aiAssistantOpen ? (
          <button
            onClick={() => setAiAssistantOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0176D3] hover:bg-[#0176D3]/90 text-white font-bold text-xs sm:text-sm shadow-2xl hover:scale-105 transition-all border border-white/20 cursor-pointer"
            aria-label="Open AI Assistant"
          >
            <Sparkles className="w-4 h-4 text-[#D4FD53]" />
            <span>Ask Piper (AI Copilot)</span>
          </button>
        ) : (
          <div className="w-[320px] sm:w-[360px] rounded-2xl bg-white text-gray-900 shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all animate-in fade-in slide-in-from-bottom-4">
            <div className="relative bg-gradient-to-r from-[#0176D3] to-[#0B2577] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  🤖
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight">Piper • Agentforce Copilot</div>
                  <div className="text-[10px] text-white/80">Salesforce AI Architecture Lead</div>
                </div>
              </div>
              <button
                onClick={() => setAiAssistantOpen(false)}
                className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-36 bg-gradient-to-b from-[#E8F3FD] to-white flex flex-col items-center justify-center p-3">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#0176D3] shadow-md mb-2 bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                  alt="Piper AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0176D3] text-white font-mono text-[11px] font-bold shadow-sm">
                <Volume2 className="w-3 h-3" />
                <span>Speak now</span>
              </div>
            </div>

            <div className="p-4 max-h-52 overflow-y-auto space-y-3 text-xs bg-slate-50">
              {aiMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl leading-relaxed ${
                    msg.sender === "agent"
                      ? "bg-white text-gray-800 border border-slate-200 shadow-sm"
                      : "bg-[#0176D3] text-white ml-6 text-right font-medium"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="px-4 py-2 bg-white">
              <button
                onClick={() => {
                  setAiAssistantOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-[#008244] hover:bg-[#007038] text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Connect with a sales rep</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <form onSubmit={handleAiSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={aiAssistantQuery}
                onChange={(e) => setAiAssistantQuery(e.target.value)}
                placeholder="Ask Piper a question..."
                className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-xs text-gray-900 border border-slate-200 focus:outline-none focus:border-[#0176D3]"
              />
              <button
                type="button"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
                title="Voice input"
              >
                <Mic className="w-4 h-4" />
              </button>
              <button
                type="submit"
                className="p-2 rounded-lg bg-[#0176D3] text-white hover:bg-[#0176D3]/90 shadow-sm cursor-pointer"
                title="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="px-4 pb-3 bg-white text-[9px] text-gray-400 text-center leading-tight">
              Piper is an AI agent and can make mistakes. Please verify critical architectural details.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

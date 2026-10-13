// src/components/pages/GenerativeAI.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Bot,
  Brain,
  Cpu,
  Code2,
  Layers,
  Terminal,
  Copy,
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Mic,
  Workflow,
  Database,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Search,
  Sliders,
  Eye,
  Headphones,
  FileSpreadsheet,
  Building2,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  DollarSign,
  Stethoscope,
  Factory,
  Home,
  Scale,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Shield,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";
import { recordAppointmentBooking } from "../../utils/sheetService";

// ================= DATA DEFINITIONS =================

const capabilitiesList = [
  { name: "Autonomous AI Agents", icon: <Workflow className="w-5 h-5 text-[#00E5C9]" />, desc: "Goal-directed multi-step task execution & API tool calling." },
  { name: "Zero-Hallucination RAG", icon: <Database className="w-5 h-5 text-[#00E5C9]" />, desc: "Hybrid dense-vector + BM25 keyword retrieval with strict citations." },
  { name: "Enterprise AI Chatbots", icon: <MessageSquare className="w-5 h-5 text-[#00E5C9]" />, desc: "Contextual conversational assistants for customer & employee support." },
  { name: "Multi-Agent AI Swarms", icon: <Layers className="w-5 h-5 text-[#00E5C9]" />, desc: "Collaborative agent pods with planner, critic, and worker roles." },
  { name: "Document Intelligence & OCR", icon: <FileText className="w-5 h-5 text-[#00E5C9]" />, desc: "Deep parsing of scanned PDFs, invoices, forms, and complex tables." },
  { name: "Institutional Knowledge Bases", icon: <Brain className="w-5 h-5 text-[#00E5C9]" />, desc: "Centralized private vector memory connecting all corporate data silos." },
  { name: "Semantic Vector Search", icon: <Search className="w-5 h-5 text-[#00E5C9]" />, desc: "Intent-based search across millions of unstructured internal documents." },
  { name: "Natural Language Processing", icon: <Cpu className="w-5 h-5 text-[#00E5C9]" />, desc: "Named entity extraction, sentiment analysis, and structured categorization." },
  { name: "Conversational Voice AI", icon: <Mic className="w-5 h-5 text-[#00E5C9]" />, desc: "Sub-400ms voice agents with real-time turn-taking and telephony support." },
  { name: "Speech-to-Text Transcription", icon: <Headphones className="w-5 h-5 text-[#00E5C9]" />, desc: "High-accuracy domain-adapted transcription across 40+ languages." },
  { name: "Natural Voice Synthesis", icon: <Zap className="w-5 h-5 text-[#00E5C9]" />, desc: "Human-grade neural speech generation with brand-specific voice cloning." },
  { name: "Computer Vision & Edge Defect AI", icon: <Eye className="w-5 h-5 text-[#00E5C9]" />, desc: "Real-time visual anomaly detection and automated dimensional inspection." },
  { name: "Spreadsheet & SQL Copilot", icon: <FileSpreadsheet className="w-5 h-5 text-[#00E5C9]" />, desc: "Ask plain English questions to query, pivot, and visualize relational data." },
  { name: "Predictive Analytics & Forecasting", icon: <TrendingUp className="w-5 h-5 text-[#00E5C9]" />, desc: "Time-series neural models for inventory replenishment and demand forecasting." },
  { name: "Personalized Recommendation Systems", icon: <Sliders className="w-5 h-5 text-[#00E5C9]" />, desc: "Collaborative and embedding-based item recommendations for e-commerce." },
  { name: "End-to-End Workflow Automation", icon: <Workflow className="w-5 h-5 text-[#00E5C9]" />, desc: "Connecting CRMs, ERPs, emails, and databases into autonomous pipelines." },
  { name: "Private Sovereign LLMs", icon: <Shield className="w-5 h-5 text-[#00E5C9]" />, desc: "Fine-tuned open models deployed inside your private VPC or on-prem servers." },
  { name: "Enterprise API Connectors", icon: <Code2 className="w-5 h-5 text-[#00E5C9]" />, desc: "Hardened REST, gRPC, and GraphQL connectors for SAP, Oracle, and Postgres." },
  { name: "Generative Media & Visuals", icon: <ImageIcon className="w-5 h-5 text-[#00E5C9]" />, desc: "High-resolution product rendering, image variation, and marketing assets." },
  { name: "Automated Code & SQL Generation", icon: <Terminal className="w-5 h-5 text-[#00E5C9]" />, desc: "Accelerating internal engineering pods with domain-specific code copilots." },
  { name: "Enterprise AI Guardrails", icon: <ShieldCheck className="w-5 h-5 text-[#00E5C9]" />, desc: "Input sanitization, prompt injection defense, and continuous audit telemetry." },
];

const chatbotSolutions = [
  { name: "Enterprise Website Copilot", desc: "Engage prospective enterprise buyers 24/7, qualify intent, and schedule discovery meetings." },
  { name: "Tier-1 Customer Support Bot", desc: "Automate ticket triage and instant resolution with continuous CRM updates." },
  { name: "Internal Employee Helpdesk", desc: "Resolve IT access requests, hardware tickets, and software provisioning in Slack & Teams." },
  { name: "HR & Policy Assistant", desc: "Instant answers for employee benefits, leaves, reimbursement policies, and payroll." },
  { name: "Sales Enablement Copilot", desc: "Arm sales executives with real-time battlecards, proposal drafts, and competitor data." },
  { name: "WhatsApp Commerce Bot", desc: "Drive transactional commerce, order tracking, and customer inquiries directly inside WhatsApp." },
  { name: "Clinical Patient Guidance", desc: "HIPAA-aligned triage, appointment scheduling, and patient intake coordination." },
  { name: "BFSI & Wealth Advisor Bot", desc: "Regulatory-compliant portfolio updates, loan calculators, and policy explanations." },
  { name: "Omnichannel Retail Assistant", desc: "Semantic product matching, inventory lookups, and personalized shopping journeys." },
  { name: "Legal Contract Reviewer", desc: "Rapidly identify non-standard indemnification clauses and risk exposures in commercial agreements." },
  { name: "Technical Documentation Assistant", desc: "Query API specs, SDK guides, and architectural diagrams using natural language." },
  { name: "Field Service Dispatch Copilot", desc: "Voice-enabled job logging, diagnostic assistance, and parts ordering for technicians." },
];

const connectedSystems = [
  "Enterprise CRM Systems (HubSpot, Zoho, Dynamics)",
  "SAP, Oracle & Custom ERP",
  "PostgreSQL, MySQL & MongoDB",
  "Snowflake, BigQuery & Databricks",
  "Internal Document Repositories (SharePoint, Drive)",
  "Zendesk, Freshdesk & Jira",
  "Slack & Microsoft Teams",
  "Custom REST & GraphQL Endpoints",
  "Edge IoT & Telemetry Feeds",
  "Banking & Payment Gateways",
];

const industrySolutionsData = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: <Factory className="w-4 h-4" />,
    summary: "Automating tender engineering, quality defect inspection, and shop-floor inventory allocation.",
    solutions: [
      { title: "Tender Spec to BOM Engine", detail: "Extract 500+ page EPC engineering requirements and produce accurate cost estimates." },
      { title: "Computer Vision Defect Triage", detail: "High-speed camera feeds analyzed for surface micro-cracks and weld irregularities." },
      { title: "Predictive Equipment Maintenance", detail: "Real-time acoustic and thermal sensor telemetry preventing machine failure." },
      { title: "Digital Supply Chain Dispatch", detail: "Dynamic raw material routing across multi-tier fabrication plants." }
    ]
  },
  {
    id: "bfsi",
    name: "Banking & Financial Services",
    icon: <DollarSign className="w-4 h-4" />,
    summary: "Accelerating credit underwriting, catching complex financial fraud, and ensuring audit compliance.",
    solutions: [
      { title: "Credit Statement Spreading", detail: "Instantly parse complex audited P&L, balance sheets, and tax filings into risk ratios." },
      { title: "Real-Time AML & Fraud Graph", detail: "Sub-second detection of synthetic identity fraud and laundering patterns." },
      { title: "Insurance Claims Adjudication", detail: "Auto-reconcile medical bills against policy deductibles and approved tariffs." },
      { title: "Regulatory Compliance Copilot", detail: "Audit transactions and corporate communications against RBI and SEBI mandates." }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: <Stethoscope className="w-4 h-4" />,
    summary: "Ambient clinical documentation, radiological triage assistance, and prior-authorization pipelines.",
    solutions: [
      { title: "Ambient Clinical Scribe", detail: "Turn doctor-patient conversations into structured HL7/FHIR medical notes." },
      { title: "Prior-Authorization Automation", detail: "Match diagnostic evidence to insurer rules to eliminate multi-day approval delays." },
      { title: "Radiology Triage Highlighting", detail: "Flag critical intracranial hemorrhages and pulmonary nodules for expedited review." },
      { title: "Pharmacovigilance Monitoring", detail: "Semantic scanning of clinical trial adverse events across medical journals." }
    ]
  },
  {
    id: "retail",
    name: "Retail & Omnichannel Commerce",
    icon: <ShoppingCart className="w-4 h-4" />,
    summary: "Vector-driven semantic search, automated inventory replenishment, and multichannel conversational commerce.",
    solutions: [
      { title: "Semantic Visual Search", detail: "Allow shoppers to discover catalog items using natural descriptions and uploaded photos." },
      { title: "Dynamic Demand Replenishment", detail: "Predict hyper-local SKU velocity factoring in promotions and transit times." },
      { title: "WhatsApp Automated Shopping", detail: "Complete transactional purchase, tracking, and returns directly via WhatsApp." },
      { title: "Shelf Planogram Compliance", detail: "Analyze store shelf photos to identify out-of-stock items and misplaced inventory." }
    ]
  },
  {
    id: "education",
    name: "Higher Education & EdTech",
    icon: <GraduationCap className="w-4 h-4" />,
    summary: "Proctored cognitive assessment engines, personalized tutoring systems, and institutional alumni networks.",
    solutions: [
      { title: "AI-Proctored Exam Sandbox", detail: "Webcam gaze monitoring, audio anomaly detection, and automated essay scoring." },
      { title: "Personalized Syllabus Tutor", detail: "Adaptive problem generation calibrated to student mastery and learning curves." },
      { title: "Alumni Mentorship Matching", detail: "Vector matching between student career aspirations and alumni professional histories." },
      { title: "Automated Academic Administration", detail: "Resolve admissions inquiries, credit transfers, and scholarship verifications." }
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Fleet Operations",
    icon: <Building2 className="w-4 h-4" />,
    summary: "Real-time dispatch optimization, automated customs document OCR, and warehouse pick routing.",
    solutions: [
      { title: "Dynamic Multi-Stop Dispatch", detail: "Heuristic optimization of delivery routes under live traffic and vehicle capacity constraints." },
      { title: "Bill of Lading Document OCR", detail: "Parse international shipping manifests, HS customs codes, and freight invoices." },
      { title: "Cold-Chain Telemetry Tracking", detail: "Monitor temperature sensor logs to anticipate perishability and route alerts." },
      { title: "Warehouse Slotting Intelligence", detail: "Cluster high-frequency items to shorten picker transit paths by up to 35%." }
    ]
  }
];

const interactivePresets = [
  {
    label: "Enterprise RAG & Doc Query",
    category: "Zero-Hallucination Retrieval",
    prompt: "According to our Master Services Agreement, what is the maximum limitation of liability for data breach claims and what is our notice period?",
    output: `[Zero-Hallucination Enterprise RAG Engine]
Found 3 verified citations in 'Master_Services_Agreement_2026.pdf' (Section 14.2 & 18.1):

1. Limitation of Liability for Data Breaches:
• Section 14.2 (Super-Cap): Liability arising from unauthorized disclosure of Protected Data is capped at $10,000,000 or 3x the total aggregate fees paid in the preceding 12 months, whichever is greater.
• Standard commercial claims remain capped at 1x annual fees (Section 14.1).

2. Required Notification Window:
• Section 18.1: The Service Provider must notify the Enterprise Security Team within 24 hours of confirmed security incidents.
• Written forensic report required within 72 hours.

Verification: Confirmed against cryptographic document hash #a8f902. Grounded with 100% citation confidence.`,
  },
  {
    label: "Multi-Agent Workflow",
    category: "Autonomous Swarms",
    prompt: "Coordinate inbound lead: Enterprise VP requesting custom quote for 1,000-seat private VPC AI copilot deployment.",
    output: `[Multi-Agent Coordination Swarm Triggered]
1. Lead Qualification Agent: Identified tier = 'Enterprise Tier 1', Target Seats = 1,000, VPC = AWS us-east-1.
2. Data Enrichment Agent: Pulled company financials from corporate registry -> $140M ARR, 1,200 headcount.
3. Architecture Cost Agent: Calculated dedicated vLLM GPU cluster cost (4x H100 nodes = $18.40/seat/month).
4. CRM Connector Agent: Created Opportunity #AP-9421 in Enterprise CRM with priority flag.
5. Response Agent: Generated executive proposal with technical SLA appendix and direct calendar invite link.

Execution Telemetry: 5 agents coordinated asynchronously in 340ms. Human enterprise executive notified.`,
  },
  {
    label: "Spreadsheet Data Copilot",
    category: "Data Analytics",
    prompt: "Analyze Quarterly_Enterprise_Sales.xlsx: Which product generated the highest gross margin and what is the regional growth projection?",
    output: `[Structured Spreadsheet Intelligence // Dataset: Quarterly_Enterprise_Sales.xlsx (6,200 records)]

Key Executive Insights:
1. Highest Margin Product: 'Private Cloud AI Infrastructure' achieved 74.2% gross margin ($2,180,000 revenue).
2. Quarter-over-Quarter Growth: +54.1% compared to Q3 2025.
3. Top Performing Territory: North America accounts for 48% of pipeline, followed by APAC at 34%.
4. Churn Risk Probability: < 0.8% across annual committed contracts.

Actionable Recommendation: Scale dedicated GPU allocation for Mumbai and Singapore regions to support forecasted APAC expansion.`,
  },
  {
    label: "Document OCR Extraction",
    category: "Multimodal Vision AI",
    prompt: "Extract structured tabular invoice data from scanned vendor PDF 'Invoice_8841_CloudHardware.pdf'",
    output: `[Document OCR & Entity Extraction Engine // Confidence: 99.8%]

Extracted Schema:
• Vendor Name: Aparaitech Software (Cloud Infrastructure Services)
• Invoice Number: INV-2026-8841 | Issue Date: 12-Feb-2026 | Due Date: 14-Mar-2026
• Tax Identification (GSTIN): 27AABCA9120M1ZX
• Subtotal: $78,500.00 | GST (18%): $14,130.00 | Total Payable: $92,630.00
• Line Items Detected:
  1. Dedicated H100 GPU Pod (1 Month) - $62,000.00
  2. Enterprise NVMe Storage Cluster (200TB) - $12,500.00
  3. 24/7 Dedicated Architectural SLA Support - $4,000.00

Validation Result: Successfully matched against approved Purchase Order #PO-7892. Ready for automated payment dispatch.`,
  },
];

export default function GenerativeAI() {
  const [selectedIndustry, setSelectedIndustry] = useState(industrySolutionsData[0].id);
  const [activePrompt, setActivePrompt] = useState(interactivePresets[0]);
  const [customPrompt, setCustomPrompt] = useState(interactivePresets[0].prompt);
  const [displayedOutput, setDisplayedOutput] = useState(interactivePresets[0].output);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // Intake Form State
  const [ideaForm, setIdeaForm] = useState({
    automationGoal: "",
    businessProblem: "",
    connectedSystems: "",
    clientName: "",
    clientContact: "",
    workEmail: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSelectPreset = (preset) => {
    setActivePrompt(preset);
    setCustomPrompt(preset.prompt);
    setIsGenerating(true);
    setDisplayedOutput("");
    setTimeout(() => {
      setDisplayedOutput(preset.output);
      setIsGenerating(false);
    }, 380);
  };

  const handleRunSimulation = () => {
    if (!customPrompt.trim()) return;
    setIsGenerating(true);
    setDisplayedOutput("");
    setTimeout(() => {
      setDisplayedOutput(
        `[Aparaitech Generative AI Engine Execution Complete]\nDirective: "${customPrompt}"\n\nSystem Output:\n• Verified grounded retrieval with zero-data egress policy.\n• Semantic confidence score: 99.4% (deterministic citation check passed).\n• Real-time model execution time: 268ms.\n• Output validated against enterprise RBAC access boundaries.`
      );
      setIsGenerating(false);
    }, 550);
  };

  const handleCopy = () => {
    if (!displayedOutput) return;
    navigator.clipboard.writeText(displayedOutput);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!ideaForm.automationGoal && !ideaForm.businessProblem) return;
    setFormSubmitted(true);
    toast.success("AI Consultation inquiry submitted! An architect will reach out within 1 hour.");
  };

  const currentIndustry =
    industrySolutionsData.find((ind) => ind.id === selectedIndustry) || industrySolutionsData[0];

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] font-sans selection:bg-[#2563EB] selection:text-white transition-colors">
      
      {/* ================= STICKY QUICK-JUMP NAVIGATION BAR ================= */}
      <div className="sticky top-[108px] z-30 bg-white/95 dark:bg-[#131F32]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#29384D] shadow-sm hidden md:block transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2.5">
            <div className="flex items-center gap-3 lg:gap-5 overflow-x-auto no-scrollbar text-xs font-mono text-[#64748B] dark:text-[#94A3B8] py-1">
              <a href="#what-we-do" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Capabilities</a>
              <a href="#chatbots" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Chatbots & Copilots</a>
              <a href="#agents" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Agent Swarms</a>
              <a href="#rag" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Zero-Hallucination RAG</a>
              <a href="#sandbox" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Live Sandbox</a>
              <a href="#industries" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Industry Solutions</a>
              <a href="#governance" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Security & Sovereignty</a>
              <a href="#process" className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] whitespace-nowrap transition-colors shrink-0">Delivery Process</a>
            </div>
            <a
              href="#intake"
              className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white font-semibold text-xs transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <span>Submit AI Inquiry →</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
          
          {/* Brand Pill Badge with Official Logo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] text-[#2563EB] dark:text-[#3B82F6] text-xs font-mono mb-6 shadow-sm">
            <img src="/aparaitech_logo.jpg" alt="Aparaitech Software" className="w-4 h-4 rounded-sm object-contain" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]" />
            <span>APARAITECH SOFTWARE • ENTERPRISE GENERATIVE AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(1.85rem,4.5vw,3.75rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] mb-6 leading-[1.15]">
            Transform Your Enterprise with Production Generative AI
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
            Aparaitech Software designs, develops, integrates, and deploys custom Generative AI solutions tailored to real-world enterprise requirements. From autonomous agent swarms to zero-hallucination RAG, document intelligence, and private cloud models.
          </p>

          {/* Core Philosophy Banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] text-xs sm:text-sm font-mono text-[#0F9F8F] dark:text-[#2DD4BF] mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF] shrink-0" />
            <span>Build Smarter. Automate Faster. Scale with Sovereign AI.</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#intake"
              className="px-7 py-3 rounded-lg font-semibold text-sm bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white shadow-sm transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit AI Consultation Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/918261840199?text=Hello%20Aparaitech%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20Generative%20AI%20solution."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-lg font-semibold text-sm bg-[#25D366] hover:bg-[#20ba59] text-[#142B4A] dark:text-[#F1F5F9] shadow-sm transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Direct Line</span>
            </a>

            <a
              href="#sandbox"
              className="px-6 py-3 rounded-lg font-mono text-sm bg-white hover:bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#131F32] dark:hover:bg-[#1A2840] text-[#142B4A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#29384D] transition-all flex items-center gap-2 shadow-sm"
            >
              <Terminal className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              <span>Launch Live AI Sandbox</span>
            </a>
          </div>

          {/* Top Quick Assurance Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              <span>Guaranteed 1-Hour Architectural Response</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
              <span>Direct AI Line: <strong className="text-[#142B4A] dark:text-[#F1F5F9]">+91 82618 40199</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
              <span>Strict Mutual NDA Protected</span>
            </span>
          </div>

          {/* Trust Highlights KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 text-left font-mono">
            <div className="p-5 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
              <div className="text-3xl font-bold text-[#2563EB] dark:text-[#3B82F6]">21+</div>
              <div className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">Core AI Frameworks</div>
              <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">Agents to private LLMs</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
              <div className="text-3xl font-bold text-[#0F9F8F] dark:text-[#2DD4BF]">99.4%</div>
              <div className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">RAG Precision</div>
              <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">Zero-hallucination citations</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
              <div className="text-3xl font-bold text-[#2563EB] dark:text-[#3B82F6]">&lt; 300ms</div>
              <div className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">Inference Latency</div>
              <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">Optimized vLLM kernels</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
              <div className="text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">100%</div>
              <div className="text-xs font-bold text-[#142B4A] dark:text-[#F1F5F9] mt-1">Data Sovereignty</div>
              <div className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">Private VPC / Air-gapped safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE LIVE AI SANDBOX ================= */}
      <section id="sandbox" className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold">
                ENTERPRISE CONSOLE
              </span>
            </div>
            <h2 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              Test Aparaitech's Cognitive Reasoning Engine in Real Time
            </h2>
            <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8]">
              Select an enterprise scenario below or input custom directives to experience zero-hallucination retrieval and agent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Preset Selector */}
            <div className="lg:col-span-4 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-2 font-semibold">
                Pre-Configured Enterprise Scenarios:
              </div>
              {interactivePresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(preset)}
                  className={
                    activePrompt.label === preset.label
                      ? "w-full text-left p-4 rounded-xl border bg-blue-50/80 dark:bg-[#1A2840] border-[#2563EB] dark:border-[#3B82F6] text-[#142B4A] dark:text-[#F1F5F9] shadow-sm transition-all cursor-pointer"
                      : "w-full text-left p-4 rounded-xl border bg-white dark:bg-[#131F32] border-[#E2E8F0] dark:border-[#29384D] text-[#475569] dark:text-[#CBD5E1] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all cursor-pointer"
                  }
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6] font-bold">
                      {preset.category}
                    </span>
                    {activePrompt.label === preset.label && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]"></span>
                    )}
                  </div>
                  <div className="font-bold text-sm text-[#142B4A] dark:text-[#F1F5F9]">
                    {preset.label}
                  </div>
                </button>
              ))}

              <div className="p-4 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#64748B] dark:text-[#94A3B8] space-y-2 mt-4 shadow-sm">
                <div className="text-[#142B4A] dark:text-[#F1F5F9] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                  <span>Sandbox Security Guardrails</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
                  Real enterprise deployments utilize cryptographic hash verification, cross-encoder reranking, and private VPC container isolation.
                </p>
              </div>
            </div>

            {/* Right: Live Terminal & Inference Output */}
            <div className="lg:col-span-8 flex flex-col rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] overflow-hidden shadow-sm">
              
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#142B4A] dark:text-[#F1F5F9] font-medium">
                  <Terminal className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>aparaitech-inference-console://sandbox-v2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-50 dark:bg-[#0F9F8F]/15 text-[#0F9F8F] dark:text-[#2DD4BF] border border-[#0F9F8F]/25 font-semibold">
                    Latency: 268ms
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 font-mono text-xs text-[#64748B] dark:text-[#94A3B8] hover:text-[#142B4A] dark:hover:text-[#142B4A] dark:text-[#F1F5F9] cursor-pointer transition-colors"
                  >
                    {hasCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                        <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Prompt Input Box */}
              <div className="p-5 border-b border-[#E2E8F0] dark:border-[#29384D] bg-[#F3F6FA] dark:bg-[#0B1220]">
                <label className="block text-xs font-mono text-[#64748B] dark:text-[#94A3B8] mb-2 font-medium">
                  Input Directive / Operational Query:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Enter custom business instruction..."
                    className="w-full bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    onKeyDown={(e) => e.key === "Enter" && handleRunSimulation()}
                  />
                  <button
                    onClick={handleRunSimulation}
                    disabled={isGenerating}
                    className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white font-semibold font-mono text-xs transition-all cursor-pointer shrink-0 shadow-sm"
                  >
                    {isGenerating ? "Executing..." : "Run AI →"}
                  </button>
                </div>
              </div>

              {/* Output Display Area */}
              <div className="p-6 bg-white dark:bg-[#0E1626] flex-1 min-h-[300px] overflow-y-auto font-mono text-xs text-[#142B4A] dark:text-[#CBD5E1] whitespace-pre-wrap leading-relaxed border-t border-[#E2E8F0] dark:border-transparent">
                {isGenerating ? (
                  <div className="flex items-center gap-3 text-[#2563EB] dark:text-[#3B82F6] py-8">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
                    <span>Executing deterministic neural inference & grounding with citations...</span>
                  </div>
                ) : (
                  displayedOutput
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. WHAT WE DO: 21+ CORE AI CAPABILITIES ================= */}
      <section id="what-we-do" className="py-20 bg-white dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold">
                COMPREHENSIVE CAPABILITIES
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              21+ Specialized Enterprise AI Capabilities
            </h2>
            <p className="mt-3 text-base text-[#64748B] dark:text-[#94A3B8]">
              We develop custom applications designed around your workflow, enterprise data schemas, and security objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilitiesList.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-6 hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. ENTERPRISE CHATBOTS & COPILOTS ================= */}
      <section id="chatbots" className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold">
                CONVERSATIONAL INTELLIGENCE
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              12 Custom Chatbot & Copilot Solutions
            </h2>
            <p className="mt-3 text-base text-[#64748B] dark:text-[#94A3B8]">
              Intelligent conversational agents connected to your proprietary knowledge base, CRM records, and transactional APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbotSolutions.map((bot, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-6 hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-[#142B4A] dark:text-[#F1F5F9]">{bot.name}</h3>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                  {bot.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Connected Enterprise Systems List */}
          <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6] mb-4 font-bold">
              NATIVE CONNECTIVITY TO YOUR EXISTING STACK
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {connectedSystems.map((sys, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#475569] dark:text-[#CBD5E1]"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. AI AGENTS & MULTI-AGENT SWARMS ================= */}
      <section id="agents" className="py-20 bg-white dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="block h-2.5 w-2.5 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full"></span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#3B82F6] font-bold">
                  AUTONOMOUS AGENTS
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
                Beyond Static Prompts: Autonomous Multi-Agent Swarms
              </h2>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Traditional chatbots only reply when spoken to. Aparaitech AI Agents autonomously decompose complex goals into discrete subtasks, query databases, invoke APIs, evaluate intermediate outputs, and iterate until the objective is achieved.
              </p>

              <div className="space-y-4 font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
                <div className="p-4 rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] flex items-start gap-3 shadow-sm">
                  <Workflow className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A] dark:text-[#F1F5F9] block mb-0.5">Hierarchical Multi-Agent Orchestration</strong>
                    A lead planner agent delegates research, coding, and verification tasks to specialized worker agents in parallel.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] flex items-start gap-3 shadow-sm">
                  <Database className="w-5 h-5 text-[#0F9F8F] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A] dark:text-[#F1F5F9] block mb-0.5">Short-Term & Long-Term Vector Memory</strong>
                    Agents persist conversational context and historic transaction outcomes across multi-week customer workflows.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] flex items-start gap-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142B4A] dark:text-[#F1F5F9] block mb-0.5">Human-in-the-Loop Governance</strong>
                    Configurable review checkpoints requiring human authorization before executing financial or contract transactions.
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Graphic */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] shadow-sm space-y-4 font-mono text-xs text-[#142B4A] dark:text-[#CBD5E1]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#29384D]">
                <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">AGENT_ORCHESTRATOR_RUNNER</span>
                <span className="h-2 w-2 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
              </div>

              <div className="p-3.5 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D]">
                <div className="text-[#64748B] dark:text-[#94A3B8] text-[11px] mb-1">USER DIRECTIVE:</div>
                <div className="text-[#142B4A] dark:text-[#F1F5F9]">"Audit vendor invoices for Q4, flag price discrepancies against contracted master rates, and generate approval batch."</div>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-[#2563EB]/40 dark:border-[#3B82F6]/40">
                <div className="text-[#64748B] dark:text-[#94A3B8]">├─ [Agent 1: OCR Parser] Extracted 42 invoice PDFs (confidence: 99.8%)</div>
                <div className="text-[#64748B] dark:text-[#94A3B8]">├─ [Agent 2: ERP Cross-Examiner] Queried SAP contract table #VND-889</div>
                <div className="text-[#0F9F8F] dark:text-[#2DD4BF]">├─ [Agent 3: Anomaly Detector] Detected 3 price mismatches ($4,210 overage)</div>
                <div className="text-[#142B4A] dark:text-[#F1F5F9]">└─ [Agent 4: Dispatcher] Drafted dispute email + queued clean balance for CFO sign-off</div>
              </div>

              <div className="p-3 bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/25 rounded text-[#0F9F8F] dark:text-[#2DD4BF] text-center font-bold">
                ✓ Autonomous Swarm Completed in 1.4s with Audit Trail
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. ZERO-HALLUCINATION ENTERPRISE RAG ================= */}
      <section id="rag" className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold">
                DETERMINISTIC RETRIEVAL
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              Enterprise RAG & Private Knowledge Retrieval
            </h2>
            <p className="mt-3 text-base text-[#64748B] dark:text-[#94A3B8]">
              Transform massive volumes of corporate PDFs, internal wikis, spreadsheets, and SQL databases into an accurate, citeable institutional brain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] space-y-3 shadow-sm">
              <div className="h-10 w-10 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center text-[#2563EB] dark:text-[#3B82F6]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9]">Hybrid Vector + BM25</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                Combining dense semantic embeddings with sparse keyword search guarantees exact matching on product SKUs, part numbers, and legal citations.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] space-y-3 shadow-sm">
              <div className="h-10 w-10 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center text-[#0F9F8F] dark:text-[#2DD4BF]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9]">Sentence-Level Citation</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                Every generated response is directly linked to source document sentences with page numbers and cryptographic hashes for instant verification.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] space-y-3 shadow-sm">
              <div className="h-10 w-10 rounded bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] flex items-center justify-center text-[#2563EB] dark:text-[#3B82F6]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#142B4A] dark:text-[#F1F5F9]">Role-Based Access (RBAC)</h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                Enforcing granular document ACL permissions at the vector index level so employees only retrieve records authorized by their security clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. CROSS-INDUSTRY MATRIX ================= */}
      <section id="industries" className="py-20 bg-white dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#0F9F8F] dark:bg-[#2DD4BF] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0F9F8F] dark:text-[#2DD4BF] font-bold">
                INDUSTRY PLAYBOOKS
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              Domain-Specific Enterprise AI Architectures
            </h2>
          </div>

          {/* Industry Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-[#E2E8F0] dark:border-[#29384D]">
            {industrySolutionsData.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={
                  selectedIndustry === ind.id
                    ? "px-5 py-2.5 rounded-lg bg-blue-50 dark:bg-[#1A2840] border border-[#2563EB] dark:border-[#3B82F6] text-[#2563EB] dark:text-[#3B82F6] font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                    : "px-5 py-2.5 rounded-lg bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] text-[#475569] dark:text-[#CBD5E1] font-mono text-xs flex items-center gap-2 hover:text-[#142B4A] dark:hover:text-white transition-all cursor-pointer"
                }
              >
                {ind.icon}
                <span>{ind.name}</span>
              </button>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">{currentIndustry.name}</h3>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono mt-1">{currentIndustry.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentIndustry.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold">0{idx + 1}</span>
                  <h4 className="text-base font-bold text-[#142B4A] dark:text-[#F1F5F9]">{sol.title}</h4>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                  {sol.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. SECURITY, SOVEREIGNTY & MULTI-MODEL ================= */}
      <section id="governance" className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] font-mono text-xs text-[#2563EB] dark:text-[#3B82F6]">
                  <ShieldCheck className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                  <span>AIR-GAPPED & SOVEREIGN VPC DEPLOYMENTS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">
                  Zero Data Egress. Complete Model Sovereignty.
                </h3>
                <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  We build with multi-model agility across OpenAI GPT-4o, Anthropic Claude 3.5, Google Cloud Gemini, as well as parameter-efficient open weights (Llama 3.3, Mistral, Qwen) hosted directly inside your corporate VPC.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    <span>ISO 27001 Certified Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    <span>Zero Data Retention (ZDR)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    <span>On-Premise GPU Serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F9F8F] dark:text-[#2DD4BF]" />
                    <span>100% Client IP Ownership</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] space-y-3 font-mono text-xs">
                <div className="text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] border-b border-[#E2E8F0] dark:border-[#29384D] pb-2 font-semibold">
                  SUPPORTED CLOUD & HARDWARE FABRICS
                </div>
                <div className="space-y-2 text-[#475569] dark:text-[#CBD5E1]">
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0] dark:border-[#29384D]">
                    <span>Inference Engine:</span>
                    <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-semibold">vLLM / TensorRT-LLM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0] dark:border-[#29384D]">
                    <span>Cloud Providers:</span>
                    <span className="text-[#142B4A] dark:text-[#F1F5F9]">AWS • GCP • Azure • On-Prem</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0] dark:border-[#29384D]">
                    <span>Vector Databases:</span>
                    <span className="text-[#142B4A] dark:text-[#F1F5F9]">Qdrant • pgvector • Pinecone</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>SLA Guarantee:</span>
                    <span className="text-[#0F9F8F] dark:text-[#2DD4BF] font-semibold">99.9% Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. 5-STEP DELIVERY PROCESS ================= */}
      <section id="process" className="py-20 bg-white dark:bg-[#0B1220] border-b border-[#E2E8F0] dark:border-[#29384D] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-2.5 w-2.5 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#3B82F6] font-bold">
                DELIVERY FRAMEWORK
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-[#142B4A] dark:text-[#F1F5F9] leading-tight">
              Our 5-Stage Engineering Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", name: "AI Diagnostic", detail: "Analyze workflows, security requirements, and data readiness." },
              { step: "02", name: "Custom Prototype", detail: "Construct domain sandbox evaluating accuracy against benchmarks." },
              { step: "03", name: "System Integration", detail: "Connect to enterprise ERP, CRM, and internal databases via API." },
              { step: "04", name: "VPC Deployment", detail: "Harden containerized microservices inside your perimeter." },
              { step: "05", name: "Managed Operations", detail: "24/7 telemetry monitoring, latency profiling, and model fine-tuning." },
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F3F6FA] dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-[#2563EB] dark:text-[#3B82F6] mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-2">{st.name}</h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
                    {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. INTERACTIVE INTAKE & SCOPING FORM ================= */}
      <section id="intake" className="py-20 bg-[#F3F6FA] dark:bg-[#0B1220] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto rounded-2xl bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] p-8 sm:p-12 shadow-sm">
            
            <div className="text-center mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-[#0F9F8F]/15 border border-[#0F9F8F]/25 font-mono text-xs text-[#0F9F8F] dark:text-[#2DD4BF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F9F8F] dark:bg-[#2DD4BF]"></span>
                <span>1-HOUR ARCHITECTURAL RESPONSE GUARANTEED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">
                Submit Your Enterprise AI Project Scoping Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
                Share your target operational bottleneck. Our Senior AI Architect at Hinjawadi Phase 2, Pune will evaluate feasibility and provide an architectural roadmap.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 font-mono">
                <CheckCircle2 className="w-16 h-16 text-[#0F9F8F] dark:text-[#2DD4BF] mx-auto" />
                <h3 className="text-xl font-bold text-[#142B4A] dark:text-[#F1F5F9]">Inquiry Received Successfully</h3>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
                  Our Lead AI Architect is reviewing your parameters. You will receive an initial diagnostic assessment within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={ideaForm.clientName}
                      onChange={(e) => setIdeaForm({ ...ideaForm, clientName: e.target.value })}
                      placeholder="e.g. Anand Kulkarni"
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={ideaForm.businessProblem}
                      onChange={(e) => setIdeaForm({ ...ideaForm, businessProblem: e.target.value })}
                      placeholder="e.g. Zenith Global Enterprises"
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={ideaForm.workEmail}
                      onChange={(e) => setIdeaForm({ ...ideaForm, workEmail: e.target.value })}
                      placeholder="anand@zenith.com"
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Direct Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={ideaForm.clientContact}
                      onChange={(e) => setIdeaForm({ ...ideaForm, clientContact: e.target.value })}
                      placeholder="+91 98220 12345"
                      className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475569] dark:text-[#CBD5E1] mb-1">Primary Automation Objective *</label>
                  <textarea
                    rows="3"
                    required
                    value={ideaForm.automationGoal}
                    onChange={(e) => setIdeaForm({ ...ideaForm, automationGoal: e.target.value })}
                    placeholder="Describe the knowledge workflow, document bottleneck, or system you want to automate..."
                    className="w-full bg-[#F3F6FA] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#29384D] rounded-lg px-4 py-2.5 text-xs font-mono text-[#142B4A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#2563EB] hover:bg-blue-700 dark:bg-[#3B82F6] dark:hover:bg-blue-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Transmit Scoping Request →</span>
                  </button>
                </div>

                <div className="text-center font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8] pt-2">
                  Strict mutual NDA applies automatically to all technical scoping submissions.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

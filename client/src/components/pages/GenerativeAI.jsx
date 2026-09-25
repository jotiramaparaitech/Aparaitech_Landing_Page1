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
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ================= DATA DEFINITIONS =================

const capabilitiesList = [
  { name: "AI Chatbots", icon: <MessageSquare className="w-5 h-5 text-[#0176d3]" />, desc: "Customer service & automated queries" },
  { name: "AI Virtual Assistants", icon: <Bot className="w-5 h-5 text-indigo-600" />, desc: "Intelligent user guidance & actions" },
  { name: "Enterprise AI Assistants", icon: <Building2 className="w-5 h-5 text-[#032d60]" />, desc: "Internal workforce enablement" },
  { name: "AI Agents", icon: <Workflow className="w-5 h-5 text-blue-600" />, desc: "Autonomous task execution & tools" },
  { name: "Multi-Agent AI Systems", icon: <Layers className="w-5 h-5 text-purple-600" />, desc: "Orchestrated collaborative networks" },
  { name: "Retrieval-Augmented Generation (RAG)", icon: <Database className="w-5 h-5 text-emerald-600" />, desc: "Zero-hallucination private retrieval" },
  { name: "AI Knowledge Bases", icon: <Brain className="w-5 h-5 text-cyan-600" />, desc: "Centralized institutional memory" },
  { name: "Document Intelligence", icon: <FileText className="w-5 h-5 text-amber-600" />, desc: "Automated parsing, forms & PDFs" },
  { name: "AI Search Systems", icon: <Search className="w-5 h-5 text-blue-500" />, desc: "Semantic vector intent search" },
  { name: "Natural Language Processing", icon: <Cpu className="w-5 h-5 text-rose-600" />, desc: "Entity extraction & sentiment" },
  { name: "Voice AI", icon: <Mic className="w-5 h-5 text-indigo-500" />, desc: "Conversational voice agents" },
  { name: "Speech-to-Text Solutions", icon: <Headphones className="w-5 h-5 text-violet-600" />, desc: "High-accuracy audio transcription" },
  { name: "Text-to-Speech Solutions", icon: <Zap className="w-5 h-5 text-amber-500" />, desc: "Human-like natural voice synthesis" },
  { name: "Image Understanding", icon: <Eye className="w-5 h-5 text-teal-600" />, desc: "Computer vision & scene analysis" },
  { name: "OCR & Document Scanning", icon: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />, desc: "Handwritten & scanned digitizing" },
  { name: "Generative Image Solutions", icon: <ImageIcon className="w-5 h-5 text-pink-600" />, desc: "Brand creatives & visual concepts" },
  { name: "Data Analysis Assistants", icon: <TrendingUp className="w-5 h-5 text-blue-700" />, desc: "Natural-language query on tables" },
  { name: "AI Recommendation Systems", icon: <Sliders className="w-5 h-5 text-indigo-700" />, desc: "Personalized suggestions & scoring" },
  { name: "AI Workflow Automation", icon: <Workflow className="w-5 h-5 text-emerald-600" />, desc: "End-to-end multi-step pipelines" },
  { name: "AI API Integration", icon: <Code2 className="w-5 h-5 text-slate-700" />, desc: "Secure REST/GraphQL connectors" },
  { name: "Custom AI Applications", icon: <Sparkles className="w-5 h-5 text-[#0176d3]" />, desc: "Bespoke full-stack AI software" },
];

const chatbotSolutions = [
  { name: "Website AI Chatbot", desc: "Convert web visitors into qualified leads 24/7 with instant contextual responses." },
  { name: "Customer Support Bot", desc: "Automate Tier-1 & Tier-2 tickets with real-time resolution and CRM logging." },
  { name: "Sales Assistant", desc: "Identify buyer intent, recommend products, and book discovery meetings." },
  { name: "HR Assistant", desc: "Answer internal leave, payroll, policy questions, and guide new employee onboarding." },
  { name: "Employee Helpdesk", desc: "Resolve IT ticket requests, software access grants, and hardware troubleshooting." },
  { name: "Education Assistant", desc: "Personalized AI tutor answering syllabus queries, providing study aids & tests." },
  { name: "Healthcare Info Assistant", desc: "Patient guidance, appointment coordination, and medical FAQ triage." },
  { name: "Banking & Finance Assistant", desc: "Account balance inquiries, loan calculators, and compliance-checked guidance." },
  { name: "Ecommerce Shopping Assistant", desc: "Intelligent product matching, cart cross-selling, and live order tracking." },
  { name: "Internal Company Assistant", desc: "Query corporate databases, policies, and Slack/Teams knowledge repositories." },
  { name: "WhatsApp AI Assistant", desc: "Automated business messaging on WhatsApp with multi-turn transactional flows." },
  { name: "CRM AI Assistant", desc: "Auto-summarize client conversations, update pipeline stages, and log follow-ups." },
];

const connectedSystems = [
  "Website",
  "Mobile Application",
  "CRM (Salesforce, HubSpot)",
  "ERP (SAP, Oracle)",
  "Database (Postgres, MongoDB)",
  "Documents (PDF, Word)",
  "Product Catalogue",
  "Customer Records",
  "REST / GraphQL APIs",
  "Internal Knowledge Base",
];

const aiAgentsList = [
  {
    role: "Sales Agent",
    badge: "Revenue Growth",
    color: "border-blue-200 bg-blue-50/50 text-blue-900",
    tasks: [
      "Lead qualification & scoring",
      "Automated personalized customer follow-ups",
      "Dynamic product recommendations",
      "Competitor and lead data enrichment",
    ],
  },
  {
    role: "HR Agent",
    badge: "Talent Acquisition",
    color: "border-purple-200 bg-purple-50/50 text-purple-900",
    tasks: [
      "Intelligent resume screening & ranking",
      "Candidate profile & skill verification",
      "Interview question synthesis & assistance",
      "Employee policy query handling",
    ],
  },
  {
    role: "Customer Support Agent",
    badge: "Support Resolution",
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-900",
    tasks: [
      "Instant multi-turn question resolution",
      "Automated support ticket creation & tagging",
      "Real-time order & shipment tracking",
      "Intelligent escalation to human managers",
    ],
  },
  {
    role: "Data Analysis Agent",
    badge: "Business Intelligence",
    color: "border-amber-200 bg-amber-50/50 text-amber-900",
    tasks: [
      "Automated executive report generation",
      "Data pattern & anomaly identification",
      "Key performance metric trend summaries",
      "Predictive business forecasting insights",
    ],
  },
  {
    role: "Operations Agent",
    badge: "Process Automation",
    color: "border-cyan-200 bg-cyan-50/50 text-cyan-900",
    tasks: [
      "Invoice and delivery note processing",
      "ERP and inventory database record updates",
      "Periodic operational audit reports",
      "Triggering downstream webhook workflows",
    ],
  },
];

const ragDataSources = [
  { name: "PDF Files", icon: <FileText className="w-4 h-4 text-red-600" /> },
  { name: "Word Documents (.docx)", icon: <FileText className="w-4 h-4 text-blue-600" /> },
  { name: "Excel Spreadsheets (.xlsx)", icon: <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> },
  { name: "Company Policy Manuals", icon: <ShieldCheck className="w-4 h-4 text-purple-600" /> },
  { name: "Product Guides & Specs", icon: <Brain className="w-4 h-4 text-amber-600" /> },
  { name: "Knowledge Bases & Wikis", icon: <Layers className="w-4 h-4 text-indigo-600" /> },
  { name: "Corporate Websites", icon: <ExternalLink className="w-4 h-4 text-cyan-600" /> },
  { name: "SQL / NoSQL Databases", icon: <Database className="w-4 h-4 text-slate-700" /> },
  { name: "CRM Systems (Salesforce)", icon: <TrendingUp className="w-4 h-4 text-[#0176d3]" /> },
  { name: "ERP Systems (SAP)", icon: <Building2 className="w-4 h-4 text-orange-600" /> },
  { name: "Internal Microservice APIs", icon: <Code2 className="w-4 h-4 text-emerald-700" /> },
];

const docCapabilities = [
  { title: "Optical Character Recognition (OCR)", desc: "Extract high-accuracy text from printed, scanned, and handwritten pages." },
  { title: "Automated Text Extraction", desc: "Isolate structured key-value pairs from complex multi-column documents." },
  { title: "Complex Table Extraction", desc: "Convert tabular invoice and financial statement figures directly into structured JSON." },
  { title: "Document Classification", desc: "Instantly categorize incoming files (e.g. Invoices, Contracts, KYC, Resumes)." },
  { title: "Intelligent Summarization", desc: "Synthesize 100-page agreements into concise executive bullet points." },
  { title: "Contextual Question Answering", desc: "Ask specific queries against any uploaded document with cited page numbers." },
  { title: "Information Validation", desc: "Cross-verify tax IDs, totals, signatures, and dates against database records." },
  { title: "Document Comparison", desc: "Compare versions of legal contracts to spot clause edits, deletions, or risks." },
  { title: "Semantic Document Search", desc: "Search across millions of stored pages by conceptual meaning, not just exact keywords." },
  { title: "Data Normalization & Export", desc: "Push sanitized document outputs directly into SAP, Salesforce, or SQL databases." },
];

const industrySolutionsData = [
  {
    id: "sales",
    title: "AI for Sales & CRM",
    icon: <TrendingUp className="w-5 h-5 text-[#0176d3]" />,
    features: [
      "Automated lead qualification & propensity scoring",
      "Dynamic CRM customer conversation summaries",
      "Automated follow-up drafts based on client emails",
      "Sales assistant chatbot for real-time buyer engagement",
      "Predictive sales velocity and pipeline gap analysis",
    ],
  },
  {
    id: "hr",
    title: "AI for Human Resources",
    icon: <Briefcase className="w-5 h-5 text-purple-600" />,
    features: [
      "Semantic resume parsing and candidate-job matching",
      "Automated candidate skill assessments & interview prep",
      "24/7 internal HR policy and benefits query assistant",
      "Automated employee onboarding documentation verification",
      "Employee sentiment and retention risk analytics",
    ],
  },
  {
    id: "education",
    title: "AI for Education & E-Learning",
    icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    features: [
      "Adaptive 1-on-1 AI tutors for personalized student pacing",
      "Instant automated exam question generation from textbooks",
      "Smart assessments with step-by-step reasoning feedback",
      "Document scanning for handwritten homework grading",
      "Institutional student performance predictive alerts",
    ],
  },
  {
    id: "ecommerce",
    title: "AI for Ecommerce & Retail",
    icon: <ShoppingCart className="w-5 h-5 text-amber-600" />,
    features: [
      "Conversational shopping assistants with cart checkout",
      "Personalized collaborative & vector product recommendations",
      "Natural-language visual & keyword product search",
      "Automated SEO product description & catalog copy generation",
      "Customer review sentiment aggregation and theme detection",
    ],
  },
  {
    id: "finance",
    title: "AI for Finance & Operations",
    icon: <DollarSign className="w-5 h-5 text-green-700" />,
    features: [
      "Automated invoice extraction and three-way PO matching",
      "Expense categorization and financial anomaly detection",
      "Instant financial report and balance sheet summarization",
      "Automated payment reminder workflows and reconciliation",
      "Secure internal audit and compliance knowledge retrieval",
    ],
  },
  {
    id: "healthcare",
    title: "AI for Healthcare Systems",
    icon: <Stethoscope className="w-5 h-5 text-rose-600" />,
    features: [
      "Medical document processing with HIPAA-aligned safeguards",
      "Automated patient appointment scheduling & triage assistants",
      "Clinical knowledge search for approved protocols and guides",
      "Insurance pre-authorization form analysis and packaging",
      "Administrative workload reduction for medical staff",
    ],
  },
  {
    id: "manufacturing",
    title: "AI for Manufacturing & Quality",
    icon: <Factory className="w-5 h-5 text-indigo-600" />,
    features: [
      "Visual computer vision inspection for line defect detection",
      "Interactive machinery manual and maintenance assistant",
      "Real-time parts inventory recognition and barcode parsing",
      "Shift production report analysis and bottleneck identification",
      "Predictive equipment maintenance alerting",
    ],
  },
  {
    id: "realestate",
    title: "AI for Real Estate",
    icon: <Home className="w-5 h-5 text-cyan-600" />,
    features: [
      "Natural-language property search and lifestyle matching",
      "Automated property listing descriptions & marketing assets",
      "24/7 real-time buyer lead qualification chatbot",
      "Lease agreement and title deed automated summarization",
      "Automated CRM tour scheduling and follow-up sequences",
    ],
  },
  {
    id: "legal",
    title: "AI for Legal & Document-Heavy Firms",
    icon: <Scale className="w-5 h-5 text-slate-800" />,
    features: [
      "Deep semantic contract search across thousands of agreements",
      "Clause extraction and non-standard risk identification",
      "Redlining version comparison with automated deviation reports",
      "Internal case law and precedent research assistant",
      "Strict human-in-the-loop signoff configuration",
    ],
  },
];

const developmentSteps = [
  { step: "01", title: "Discovery", desc: "We evaluate your business problem, existing workflows, users, target data sources, and desired measurable outcomes." },
  { step: "02", title: "AI Strategy", desc: "Define precise AI use cases, foundation model selection, security boundaries, and API integration architecture." },
  { step: "03", title: "Prototype (POC)", desc: "Build a functioning proof-of-concept to validate inference speed, retrieval accuracy, and user interaction design." },
  { step: "04", title: "Full-Stack Development", desc: "Develop clean frontend UI, robust backend services, vector database pipelines, and admin analytics dashboards." },
  { step: "05", title: "Rigorous Testing", desc: "Perform functional verification, hallucination benchmarking, security penetration tests, and user acceptance testing." },
  { step: "06", title: "Production Deployment", desc: "Deploy to your choice of cloud (AWS, Azure, Google Cloud) or secure on-premise private VPC infrastructure." },
  { step: "07", title: "Monitoring & Improvement", desc: "Continuous latency tracking, token cost optimization, error rate alerts, and incremental model fine-tuning." },
];

const techStackData = [
  { category: "Generative AI Models", items: ["OpenAI GPT-4o", "Google Gemini 1.5 Pro", "Anthropic Claude 3.5 Sonnet", "Meta LLaMA 3.1", "Mistral Large", "DeepSeek", "Hugging Face"] },
  { category: "AI Frameworks & SDKs", items: ["LangChain", "LlamaIndex", "LangGraph", "AutoGen", "OpenAI SDK", "Google GenAI SDK", "Custom RAG Pipelines"] },
  { category: "Vector Databases", items: ["Pinecone", "Weaviate", "Qdrant", "ChromaDB", "FAISS", "pgvector"] },
  { category: "Backend & APIs", items: ["Node.js", "Express.js", "Python", "FastAPI", "Django", "GraphQL", "REST"] },
  { category: "Frontend & UI", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Vite"] },
  { category: "Mobile Apps", items: ["React Native", "Expo", "Native Android", "Native iOS"] },
  { category: "Databases & Cache", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"] },
  { category: "Cloud & Infrastructure", items: ["Google Cloud Platform", "Amazon Web Services (AWS)", "Microsoft Azure", "Docker", "Kubernetes", "Vercel"] },
];

const builtSolutionsList = [
  "AI Customer Support Platform",
  "AI Recruitment Platform",
  "AI Interview System",
  "AI Resume Analyzer",
  "AI Document Scanner & OCR",
  "AI PDF & Excel Assistant",
  "AI CRM Assistant",
  "AI Sales Lead Agent",
  "AI Education & Tutoring Platform",
  "AI Question & Exam Generator",
  "AI Ecommerce Assistant",
  "AI Voice Assistant & IVR",
  "Enterprise AI Knowledge Base",
  "Semantic AI Search Engine",
  "AI Data Analytics Dashboard",
  "AI Email Automation System",
  "AI Workflow Automation Platform",
  "AI Business Intelligence Copilot",
  "Multi-Agent Enterprise Platform",
];

const businessBenefitsList = [
  "Automate repetitive manual operations and save hundreds of employee hours",
  "Deliver instant, 24/7 intelligent customer support with zero wait time",
  "Search complex organizational knowledge in milliseconds without exact keywords",
  "Process thousands of invoices, contracts, and forms with near-zero error rates",
  "Supercharge employee productivity with domain-adapted co-pilots",
  "Generate structured marketing, sales, and documentation content in seconds",
  "Extract actionable executive insights from vast tabular spreadsheets and databases",
  "Deliver hyper-personalized shopping and learning experiences for customers",
  "Build intelligent, defensible software solutions that give you a competitive edge",
  "Modernize legacy IT workflows into autonomous, scalable digital pipelines",
];

const whyAparaitechPillars = [
  { title: "Business-First AI Development", desc: "We focus on solving real, measurable business bottlenecks rather than building technology for technology's sake." },
  { title: "100% Custom Tailored Development", desc: "Every model pipeline, prompt architecture, and user interface is uniquely engineered around your data and brand." },
  { title: "Complete Full-Stack Capability", desc: "From UI/UX design to modern frontend, scalable backend, vector database, AI model tuning, and cloud deployment." },
  { title: "Multi-Platform Delivery", desc: "Deploy your AI solution across responsive Web, Android, iOS, enterprise administrative portals, and internal tools." },
  { title: "Seamless Integration Support", desc: "Effortlessly connect AI with your existing CRM, ERP, SQL databases, customer portals, and internal REST APIs." },
  { title: "Scalable & Cost-Optimized Architecture", desc: "Built with intelligent model routing and semantic caching to scale smoothly from 100 to 1,000,000 requests affordably." },
];

const industriesList = [
  "Information Technology",
  "Education & EdTech",
  "Recruitment & HR",
  "Ecommerce & Retail",
  "Finance & Banking",
  "Healthcare & Clinics",
  "Manufacturing & Logistics",
  "Real Estate & Property",
  "Professional Services & Consulting",
  "Legal & Compliance",
  "SaaS & Tech Platforms",
  "High-Growth Startups",
  "Enterprise Organizations",
];

// Preset Prompts for Interactive Sandbox
const interactivePresets = [
  {
    label: "Enterprise RAG Query",
    category: "Retrieval-Augmented Generation",
    prompt: "Query internal policy: What is our refund and SLA clause for enterprise multi-tenant software contracts?",
    output: `[RAG Vector Search Completed // Source: Legal_SLA_Master_2026.pdf (Pages 14-16)]

Ground-Truth Verified Clause:
• Enterprise tier clients receive a full refund within 30 days of onboarding if platform uptime falls below 99.9%.
• Quarterly credits of 10% are applied automatically upon verified SLA service interruption exceeding 45 minutes.
• All refund requests are logged directly to SAP Financials with strict audit confirmation.

Citations:
[1] /contracts/2026/Legal_SLA_Master_2026.pdf#page=14
[2] /policies/Finance_Refund_Protocol_v3.docx#section=4.2`,
  },
  {
    label: "Multi-Agent Sales Pipeline",
    category: "Autonomous Multi-Agent Workflow",
    prompt: "Coordinate inbound lead: Enterprise CFO requesting pricing for 500-seat AI assistant integration.",
    output: `[Multi-Agent Coordination Engine Triggered]
1. Lead Coordinator: Identified tier = 'Enterprise Tier 1', Priority = HIGH.
2. Data Enrichment Agent: Queried LinkedIn & Crunchbase API -> Company revenue $85M, 650 employees.
3. Pricing Logic Agent: Calculated 500-seat volume discount ($34/seat/month, annual commitment).
4. CRM Agent: Created new Opportunity #AP-9042 in Salesforce CRM.
5. Response Agent: Drafted personalized executive proposal with calendar booking link.

Status: Workflow completed in 312ms. Human executive alerted via Slack.`,
  },
  {
    label: "Excel Data Intelligence",
    category: "Spreadsheet Analytics",
    prompt: "Analyze Sales_Report_2026.xlsx: Which product generated highest revenue this quarter and what is the growth trend?",
    output: `[Structured Spreadsheet Analysis // Dataset: Sales_Report_2026.xlsx (4,820 rows)]

Key Findings:
1. Top Performing Product: 'Enterprise Cloud AI Hub' generated $1,420,500 (38.4% of total quarterly revenue).
2. Quarter-over-Quarter Growth: +42.6% increase compared to Q4 2025.
3. Top Geographic Segment: North America (54%), followed by APAC (28%).
4. Churn Probability: < 1.2% across annual prepaid contracts.

Recommended Action: Allocate 25% additional compute cluster capacity for APAC region before next quarter.`,
  },
  {
    label: "Document OCR Extraction",
    category: "Document Intelligence",
    prompt: "Extract tabular invoice data from scanned vendor PDF 'Invoice_7739_VendorTech.pdf'",
    output: `[Document OCR & Entity Extraction Complete // Confidence: 99.8%]

Extracted Schema:
• Vendor Name: Global Cloud Systems Pvt Ltd
• Invoice Number: INV-2026-7739
• Date of Issue: 24-Sep-2026 | Due Date: 24-Oct-2026
• Tax Identification (GSTIN): 27AABCG9821K1ZZ
• Subtotal: $45,000.00
• Applicable Tax (18%): $8,100.00
• Total Payable: $53,100.00
• Line Items Detected: 3 items (Cloud Hosting, Dedicated GPU Cluster, 24/7 SLA Support)

Validation Status: Passed automated PO match #PO-2291. Ready for one-click payment approval.`,
  },
];

export default function GenerativeAI() {
  const [selectedIndustry, setSelectedIndustry] = useState(industrySolutionsData[0].id);
  const [activePrompt, setActivePrompt] = useState(interactivePresets[0]);
  const [customPrompt, setCustomPrompt] = useState(interactivePresets[0].prompt);
  const [displayedOutput, setDisplayedOutput] = useState(interactivePresets[0].output);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // Interactive AI Idea Intake Form State
  const [ideaForm, setIdeaForm] = useState({
    automationGoal: "",
    businessProblem: "",
    connectedSystems: "",
    clientName: "",
    clientContact: "",
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
    }, 450);
  };

  const handleRunSimulation = () => {
    if (!customPrompt.trim()) return;
    setIsGenerating(true);
    setDisplayedOutput("");
    setTimeout(() => {
      setDisplayedOutput(
        `[Aparaitech Generative AI Inference Completed]\nDirective: "${customPrompt}"\n\nExecution Result:\n• Grounded in enterprise domain knowledge with zero-data retention.\n• Verification: Verified with 99.4% confidence score.\n• Synthesized actionable insights aligned with enterprise SLA constraints.\n• Latency: Generated in 242ms.`
      );
      setIsGenerating(false);
    }, 600);
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
  };

  const currentIndustry =
    industrySolutionsData.find((ind) => ind.id === selectedIndustry) || industrySolutionsData[0];

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-[#0176d3]">
      
      {/* ================= STICKY QUICK-JUMP NAVIGATION BAR ================= */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto py-3 no-scrollbar text-xs font-semibold text-slate-600">
            <a href="#what-we-do" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">What We Do</a>
            <a href="#chatbots" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Chatbots & Assistants</a>
            <a href="#agents" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">AI Agents & Multi-Agent</a>
            <a href="#rag" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">RAG & Data Intelligence</a>
            <a href="#documents" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Document AI & OCR</a>
            <a href="#voice-vision" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Voice & Vision AI</a>
            <a href="#automation" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Workflow Automation</a>
            <a href="#industries" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Industries</a>
            <a href="#architecture" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Multi-Model & Trust</a>
            <a href="#process" className="hover:text-[#0176d3] whitespace-nowrap transition-colors">Process & Stack</a>
            <a
              href="#intake"
              className="px-4 py-1.5 rounded-full font-bold text-xs bg-gradient-to-r from-[#0176d3] via-[#0284c7] to-[#032d60] hover:from-[#015ba5] hover:to-[#012f5a] text-white shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center gap-1.5 whitespace-nowrap ring-2 ring-[#0176d3]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>Instant AI Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= 1. HERO SECTION (SALESFORCE & GOOGLE CLOUD AI AESTHETIC) ================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f0f4f9] via-[#f8fafc] to-white border-b border-slate-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Salesforce Style Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eaf3fc] border border-[#b9d9f8] text-[#0176d3] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0176d3] animate-pulse" />
            <span>Aparaitech Software • Enterprise Generative AI Solutions</span>
          </div>

          {/* Editorial Times New Roman Serif Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#032d60] mb-6 leading-[1.15]">
            GENERATIVE AI SOLUTIONS
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-[#0176d3] font-serif font-normal italic">
              Transform Your Business with Intelligent AI
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Aparaitech Software helps businesses design, develop, integrate, and deploy Generative AI solutions tailored to real-world business requirements.
          </p>

          <p className="text-sm sm:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
            From intelligent chatbots and AI assistants to document automation, voice AI, image intelligence, predictive systems, and enterprise AI platforms, we build AI-powered solutions that help organizations automate operations, improve customer experiences, analyze information faster, and make better decisions.
          </p>

          {/* Core Philosophy Banner */}
          <div className="inline-block px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm sm:text-base font-bold text-[#032d60] mb-10">
            ✓¨ Build Smarter. Automate Faster. Scale with AI.
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#intake"
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-[#0176d3] hover:bg-[#015ba5] text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Discuss Your AI Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#sandbox"
              className="px-7 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white hover:bg-slate-50 text-[#0176d3] border-2 border-[#0176d3] shadow-sm transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Live AI Sandbox</span>
            </a>

            <Link
              to="/customers/portfolio"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-[#032d60] hover:text-[#0176d3] transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>Explore 7 Live Projects →</span>
            </Link>
          </div>

          {/* Trust Highlights KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0176d3]">21+</div>
              <div>
                <div className="text-xs font-bold text-[#032d60] mt-1">Core AI Capabilities</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Chatbots to custom LLMs</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#032d60]">99.4%</div>
              <div>
                <div className="text-xs font-bold text-[#032d60] mt-1">RAG Accuracy</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Zero hallucination citation</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-emerald-600">&lt; 300ms</div>
              <div>
                <div className="text-xs font-bold text-[#032d60] mt-1">Inference Speed</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Optimized token response</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-indigo-600">Enterprise</div>
              <div>
                <div className="text-xs font-bold text-[#032d60] mt-1">Zero-Data Retention</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Private VPC & Air-gap safe</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. WHAT WE DO: GENERATIVE AI DEVELOPMENT ================= */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Generative AI Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We develop custom Generative AI applications designed around your organization's workflow, users, business data, and objectives. Our solutions can generate, understand, summarize, classify, search, analyze, and interact with different types of business information.
            </p>
          </div>

          {/* 21 Generative AI Capabilities Grid */}
          <div className="mb-6 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#032d60] mb-2 tracking-tight">
              Our Generative AI Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Explore the 21 modular capabilities we engineer for modern high-performance organizations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 text-left">
              {capabilitiesList.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0176d3]/40 transition-all flex items-start gap-3.5 h-full group"
                >
                  <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-slate-200/80 group-hover:scale-110 transition-transform shrink-0">
                    {cap.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#032d60] text-base group-hover:text-[#0176d3] transition-colors">
                      {cap.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. AI CHATBOTS & VIRTUAL ASSISTANTS ================= */}
      <section id="chatbots" className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Conversational Intelligence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              AI Chatbots & Virtual Assistants
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Build intelligent conversational systems capable of answering questions, assisting customers, retrieving company information, and performing business tasks seamlessly.
            </p>
          </div>

          {/* 12 Solutions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {chatbotSolutions.map((sol, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#0176d3]" />
                    <h4 className="font-serif font-bold text-[#032d60] text-lg">
                      {sol.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connected Systems Box (Salesforce Inspired Matrix) */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-1 block">
                Enterprise Connectivity Hub
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#032d60] tracking-tight">
                AI Assistants Can Be Connected To:
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Unified integration with your existing organizational architecture and data streams.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {connectedSystems.map((item, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-center hover:bg-[#eaf3fc] hover:border-[#b9d9f8] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0176d3] mx-auto mb-1.5" />
                  <span className="text-xs font-semibold text-[#032d60] block">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. AI AGENTS & MULTI-AGENT AI SYSTEMS ================= */}
      <section id="agents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Autonomous Intelligence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              AI Agents: AI That Can Perform Tasks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Modern AI systems can do more than answer questions. We develop autonomous AI agents capable of understanding instructions, analyzing information, interacting with software systems, and completing predefined business workflows.
            </p>
          </div>

          {/* 5 AI Agent Cards + 1 Multi-Agent Card */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {aiAgentsList.map((agent, aIdx) => (
              <div
                key={aIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif font-bold text-xl text-[#032d60]">
                      {agent.role}
                    </h3>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${agent.color}`}>
                      {agent.badge}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {agent.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Sixth Card: Multi-Agent Highlights */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#eaf3fc] border border-[#b9d9f8] shadow-xs flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0176d3] text-white inline-block mb-3">
                  Multi-Agent Power
                </span>
                <h3 className="font-serif font-bold text-xl text-[#032d60] mb-2">
                  Multi-Agent AI Systems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  For complex workflows, multiple specialized AI agents work together harmoniously, delegating tasks and reviewing each other's outputs.
                </p>
                <div className="text-xs font-semibold text-[#032d60] space-y-1.5">
                  <div>✓ Enterprise process automation</div>
                  <div>✓ Research & recruitment platforms</div>
                  <div>✓ Cross-database sales operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Agent Coordination Flowchart */}
          <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-1 block">
                Architecture Flow
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#032d60] tracking-tight">
                Multi-Agent Workflow Example
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                How specialized agents collaborate sequentially to resolve complex client operations.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-center">
              <div className="w-full lg:w-1/5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Step 1</span>
                <div className="font-serif font-bold text-[#032d60] text-sm">Customer Request</div>
                <div className="text-[11px] text-slate-500 mt-1">Inbound inquiry received</div>
              </div>

              <div className="text-slate-400 font-bold text-lg hidden lg:block">→</div>
              <ChevronDown className="w-5 h-5 text-slate-400 lg:hidden" />

              <div className="w-full lg:w-1/5 p-4 rounded-xl bg-[#eaf3fc] border border-[#b9d9f8] shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#0176d3] block mb-1">Coordinator</span>
                <div className="font-serif font-bold text-[#0176d3] text-sm">AI Coordinator</div>
                <div className="text-[11px] text-slate-600 mt-1">Parses intent & delegates</div>
              </div>

              <div className="text-slate-400 font-bold text-lg hidden lg:block">→</div>
              <ChevronDown className="w-5 h-5 text-slate-400 lg:hidden" />

              <div className="w-full lg:w-1/5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-indigo-500 block mb-1">Querying</span>
                <div className="font-serif font-bold text-[#032d60] text-sm">Data Agent</div>
                <div className="text-[11px] text-slate-500 mt-1">Retrieves CRM & DB records</div>
              </div>

              <div className="text-slate-400 font-bold text-lg hidden lg:block">→</div>
              <ChevronDown className="w-5 h-5 text-slate-400 lg:hidden" />

              <div className="w-full lg:w-1/5 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-amber-500 block mb-1">Rules Check</span>
                <div className="font-serif font-bold text-[#032d60] text-sm">Business Logic Agent</div>
                <div className="text-[11px] text-slate-500 mt-1">Validates pricing & policies</div>
              </div>

              <div className="text-slate-400 font-bold text-lg hidden lg:block">→</div>
              <ChevronDown className="w-5 h-5 text-slate-400 lg:hidden" />

              <div className="w-full lg:w-1/5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-emerald-600 block mb-1">Execution</span>
                <div className="font-serif font-bold text-emerald-800 text-sm">Response Agent</div>
                <div className="text-[11px] text-emerald-600 mt-1">Delivers cited answer</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. RAG (RETRIEVAL-AUGMENTED GENERATION) ================= */}
      <section id="rag" className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Knowledge Retrieval
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              RAG €“ Retrieval-Augmented Generation
            </h2>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0176d3] italic mb-4">
              AI That Understands Your Company Data
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Generic AI models may not know your private company information. Using RAG technology, we connect AI systems with your organization's documents and databases so the AI searches relevant company knowledge before generating an answer.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left: 11 Data Sources */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-serif font-bold text-xl text-[#032d60] mb-2 tracking-tight">
                Connected Data Sources
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Our hybrid RAG pipelines index, embed, and semantically search across private enterprise repositories:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {ragDataSources.map((src, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-xs"
                  >
                    {src.icon}
                    <span className="text-xs font-semibold text-slate-700">{src.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Real-World Example Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0176d3] block mb-2">
                  Real Enterprise Use Case
                </span>
                <h4 className="font-serif font-bold text-lg text-[#032d60] mb-4 tracking-tight">
                  Refund & Policy Retrieval Example
                </h4>

                <div className="space-y-4">
                  {/* Client Question */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Client Query</span>
                    <p className="text-sm font-semibold text-[#032d60]">
                      "What is our refund policy for enterprise customers?"
                    </p>
                  </div>

                  {/* RAG Search Step */}
                  <div className="p-4 rounded-xl bg-[#eaf3fc] border border-[#b9d9f8] text-xs text-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#0176d3]">
                      <Search className="w-3.5 h-3.5" />
                      <span>RAG Search in Progress...</span>
                    </div>
                    <p className="text-slate-600">
                      The AI searches your approved internal documents (e.g., <code className="text-slate-800 bg-white px-1.5 py-0.5 rounded border border-slate-200">Enterprise_SLA_Terms_2026.pdf</code>) and finds Section 8.4.
                    </p>
                  </div>

                  {/* AI Generated Answer */}
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm text-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">AI Verified Response</span>
                    <p className="leading-relaxed">
                      "Enterprise clients are eligible for a prorated refund within 30 days if service availability falls below 99.9% uptime, as specified in <strong>Section 8.4 of the Enterprise Master Agreement</strong>."
                    </p>
                    <div className="text-[11px] text-emerald-700 font-semibold pt-1 border-t border-emerald-200/80">
                      ✓ Grounded in company policy • Zero hallucinations
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. DOCUMENT INTELLIGENCE & PDF / EXCEL DATA ================= */}
      <section id="documents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Document Automation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              AI Document Intelligence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Transform unstructured PDFs, forms, contracts, and scanned sheets into structured and searchable business information with automated OCR and semantic validation.
            </p>
          </div>

          {/* Processed Document Types Pill Bar */}
          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 mb-12 text-center">
            <span className="text-xs font-bold uppercase text-slate-500 mb-3 block">
              Document Types We Process
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "PDFs", "Forms", "Invoices", "Receipts", "Reports", "Contracts",
                "Resumes", "Certificates", "Applications", "Question Papers", "Scanned Documents"
              ].map((doc, dIdx) => (
                <span
                  key={dIdx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#032d60] shadow-xs"
                >
                  {doc}
                </span>
              ))}
            </div>
          </div>

          {/* 10 Document Capabilities */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {docCapabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#eaf3fc] text-[#0176d3] flex items-center justify-center font-bold text-xs mb-2.5">
                    {cIdx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#032d60] mb-1">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Clean White Salesforce/Google Theme Simulation: AI for PDF, Excel & Business Data */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 sm:p-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] block mb-1">
                Spreadsheet & Tabular Reasoning
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#032d60] mb-2 tracking-tight">
                AI for PDF, Excel & Business Data
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ask questions directly from your business files without writing complex Excel macros or SQL queries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 bg-[#f8fafc] p-6 rounded-2xl border border-slate-200">
              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg inline-flex mb-3">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Uploaded File: Sales_Report_2026.xlsx (4,820 rows)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">User Directive:</span><br />
                    <span className="text-[#032d60] font-semibold text-sm">"Which product generated the highest revenue this quarter?"</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Supported: Excel (.xlsx), CSV, PDF, Databases, CRM, ERP, and BI Dashboards.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 text-xs font-mono space-y-3 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified AI Synthesis
                  </span>
                  <span className="text-slate-400 text-[11px]">Latency: 260ms</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  "Product 'Enterprise Cloud AI Hub' generated $1,420,500, accounting for 38.4% of total quarterly revenue (+42.6% growth over last quarter)."
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>Confidence: 99.8%</span>
                  <span className="text-[#0176d3] font-semibold">Zero-Hallucination</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. VOICE AI, COMPUTER VISION & GENERATIVE MEDIA ================= */}
      <section id="voice-vision" className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Multimodal Modalities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Voice AI & Computer Vision Intelligence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Create natural voice-enabled conversational systems and deploy high-accuracy computer vision for manufacturing, security, and document parsing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Voice AI */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#032d60]">Voice AI Solutions</h3>
                    <span className="text-xs text-slate-500">Ultra-low latency conversational voice</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                  <div>• AI Voice Assistants</div>
                  <div>• Voice Customer Support</div>
                  <div>• Speech-to-Text Systems</div>
                  <div>• Text-to-Speech Systems</div>
                  <div>• Voice Search & Commands</div>
                  <div>• Automated Call Assistants</div>
                </div>

                {/* Voice Pipeline Diagram */}
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Voice AI Workflow</span>
                  <div className="text-xs font-semibold text-[#032d60] flex flex-wrap items-center justify-center gap-1.5">
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded">User Voice</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded">Speech Rec</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded">AI Processing</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded">Voice Output</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Computer Vision & Image AI */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#032d60]">Computer Vision & Image AI</h3>
                    <span className="text-xs text-slate-500">Visual analysis & automated understanding</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mb-6">
                  <div>• Image classification</div>
                  <div>• Object detection</div>
                  <div>• Document & blueprint scanning</div>
                  <div>• Manufacturing defect detection</div>
                  <div>• Inventory recognition</div>
                  <div>• ID / document verification</div>
                </div>

                {/* Generative Image Applications */}
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Generative Media & Content</span>
                  <p className="text-xs text-slate-600">
                    Brand creatives, marketing concepts, product visual ideation, and automated content generation with human approval steps before publishing.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. AI SEARCH, RECOMMENDATIONS & WORKFLOW AUTOMATION ================= */}
      <section id="automation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Semantic Search & Automation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              AI Search, Recommendations & Workflow Automation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Replace rigid keyword lookups with semantic search that understands real intent, delivers personalized recommendations, and automates multi-step administrative workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            
            {/* Semantic AI Search Example */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#0176d3] block mb-2">Intent-Driven Search</span>
                <h3 className="font-serif font-bold text-xl text-[#032d60] mb-3">AI Semantic Search</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Traditional search depends on exact keywords. Semantic AI understands the meaning of natural queries:
                </p>
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 font-mono text-xs text-slate-800 space-y-2 mb-4">
                  <span className="text-slate-400">User Searches:</span><br />
                  <span className="text-[#0176d3] font-bold">"Show invoices where payment is overdue for more than 30 days."</span>
                </div>
                <p className="text-xs text-slate-600">
                  The AI maps the semantic intent to database filters and returns accurate overdue accounts across Websites, Ecommerce, Knowledge Bases, and ERP systems.
                </p>
              </div>
            </div>

            {/* AI Recommendation Systems */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-indigo-600 block mb-2">Personalization</span>
                <h3 className="font-serif font-bold text-xl text-[#032d60] mb-3">AI Recommendation Systems</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Deliver tailored recommendations based on real user behavior and historical enterprise data:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Product Recommendations</div>
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Course & Learning Paths</div>
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Content & Knowledge Match</div>
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Job & Candidate Match</div>
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Service Cross-Sell</div>
                  <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200">Next-Action Guidance</div>
                </div>
              </div>
            </div>

          </div>

          {/* AI Workflow Automation Step-by-Step Pipeline */}
          <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-1 block">
                Workflow Automation Pipeline
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#032d60] tracking-tight">
                Autonomous Email-to-CRM Workflow Example
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                How AI eliminates repetitive administrative paperwork across business units.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
              {[
                { label: "1. Email Received", sub: "Incoming message" },
                { label: "2. AI Reads Email", sub: "Parses natural text" },
                { label: "3. Identifies Need", sub: "Classifies intent" },
                { label: "4. Extracts Data", sub: "Entities & contacts" },
                { label: "5. Updates CRM", sub: "Salesforce / DB" },
                { label: "6. Creates Task", sub: "Assigns follow-up" },
                { label: "7. Generates Draft", sub: "Ready for review" },
              ].map((step, stIdx) => (
                <div
                  key={stIdx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-center items-center"
                >
                  <div className="w-5 h-5 rounded-full bg-[#eaf3fc] text-[#0176d3] text-[10px] font-bold flex items-center justify-center mb-1.5">
                    {stIdx + 1}
                  </div>
                  <div className="font-serif font-bold text-xs text-[#032d60]">{step.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{step.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 9. INDUSTRY SPECIFIC SOLUTIONS ================= */}
      <section id="industries" className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Industry Verticals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              AI Tailored to Your Specific Industry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every vertical has unique compliance constraints and operational nuances. Select an industry to explore our tailored AI architectures.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Industry Selector Buttons */}
            <div className="lg:col-span-4 space-y-2">
              {industrySolutionsData.map((ind) => {
                const isSelected = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-white border-[#0176d3] shadow-md translate-x-1"
                        : "bg-transparent border-transparent hover:bg-white/60 text-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-[#eaf3fc]" : "bg-slate-100"}`}>
                        {ind.icon}
                      </div>
                      <span className="font-serif font-bold text-sm text-[#032d60]">
                        {ind.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#0176d3] translate-x-1" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Industry Detailed View */}
            <div className="lg:col-span-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="p-3 rounded-xl bg-[#eaf3fc] text-[#0176d3]">
                    {currentIndustry.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-[#032d60]">
                      {currentIndustry.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold">Specialized AI Implementation Pillars</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  {currentIndustry.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500">Need a custom solution for {currentIndustry.title}?</span>
                  <a
                    href="#intake"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0176d3] hover:underline"
                  >
                    <span>Request Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 10. AI MODEL INTEGRATION, MULTI-MODEL & FALLBACK ================= */}
      <section id="architecture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Architectural Resilience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Multi-Model AI Architecture & High Availability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your enterprise does not have to depend on a single AI provider. We architect resilient systems where multiple models handle specialized workloads with automated zero-downtime fallback.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            
            {/* Multi-Model Breakdown */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#0176d3] block mb-2">Division of Labor</span>
                <h3 className="font-serif font-bold text-lg text-[#032d60] mb-3">Multi-Model Architecture</h3>
                <ul className="text-xs space-y-2.5 text-slate-600">
                  <li><strong>• Main AI Model:</strong> Conversational dialogue</li>
                  <li><strong>• Document Model:</strong> PDF & OCR parsing</li>
                  <li><strong>• Vision Model:</strong> Image understanding</li>
                  <li><strong>• Speech Model:</strong> Voice transcription & TTS</li>
                  <li><strong>• Domain Model:</strong> Custom fine-tuned weights</li>
                </ul>
              </div>
            </div>

            {/* Model Fallback System */}
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-600 block mb-2">Redundancy</span>
                <h3 className="font-serif font-bold text-lg text-[#032d60] mb-3">Automated AI Fallback</h3>
                <div className="space-y-2 text-xs font-mono text-slate-700">
                  <div className="p-2.5 rounded bg-white border border-slate-200">1. Primary AI Provider</div>
                  <div className="text-center text-slate-400">†“ (if timeout / rate limit)</div>
                  <div className="p-2.5 rounded bg-white border border-slate-200">2. Secondary AI Provider</div>
                  <div className="text-center text-slate-400">†“ (if unavailable)</div>
                  <div className="p-2.5 rounded bg-white border border-slate-200">3. Configured Backup Workflow</div>
                </div>
              </div>
            </div>

            {/* Prompt Engineering & Guardrails */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] uppercase font-bold text-purple-600 block mb-2">Security & Control</span>
                <h3 className="font-serif font-bold text-lg text-[#032d60] mb-3">Guardrails & Human-in-the-Loop</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Enterprise security controls: Input/output validation, prompt-injection defenses, role-based access, and strict human review steps before finalizing financial or legal workflows.
                </p>
                <div className="text-xs font-semibold text-[#032d60] pt-2 border-t border-slate-100">
                  AI Recommends → Employee Approves → System Executes
                </div>
              </div>
            </div>

          </div>

          {/* Model Integration Supported Ecosystems */}
          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 text-center">
            <span className="text-xs font-bold uppercase text-[#0176d3] mb-3 block">
              Supported Foundation AI Ecosystems
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                "OpenAI GPT-4o", "Google Gemini 1.5 Pro", "Anthropic Claude 3.5 Sonnet",
                "Meta LLaMA 3.1", "Mistral AI", "Microsoft Azure AI", "Hugging Face", "DeepSeek", "AWS Bedrock"
              ].map((model, mIdx) => (
                <span
                  key={mIdx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#032d60] shadow-xs"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 11. LIVE INTERACTIVE AI SANDBOX ================= */}
      <section id="sandbox" className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Interactive AI Console
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Test Enterprise AI Models in Real-Time
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Experience the intelligence, accuracy, and citation precision of Aparaitech's generative AI pipelines.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {interactivePresets.map((preset, pIdx) => {
              const isSelected = activePrompt.label === preset.label;
              return (
                <button
                  key={pIdx}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                    isSelected
                      ? "bg-[#0176d3] text-white border-[#0176d3] shadow-xs scale-105"
                      : "bg-white text-slate-700 hover:text-[#0176d3] border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>

          {/* Console Box */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-[#f8fafc] border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-600">
                  Aparaitech Intelligence Studio // Vertex-Agentforce Gateway
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Model Instance
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* Left Column: Input Prompt */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                      Input Enterprise Directive
                    </label>
                    <span className="text-xs font-semibold text-[#0176d3]">
                      {activePrompt.category}
                    </span>
                  </div>

                  <textarea
                    rows={6}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Enter your enterprise requirement..."
                    className="w-full p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3] font-mono resize-none leading-relaxed transition-all"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Engine: <strong className="text-slate-800">Aparaitech Domain-Adapted Pipeline</strong>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isGenerating}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-[#0176d3] hover:bg-[#015ba5] text-white shadow-xs transition-all hover:scale-105 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Run AI Inference</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Output */}
              <div className="p-6 sm:p-8 bg-[#f8fafc] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#0176d3]" />
                      Model Generated Output
                    </span>
                    <button
                      onClick={handleCopy}
                      className="text-xs text-slate-600 hover:text-[#0176d3] font-medium transition-colors flex items-center gap-1"
                    >
                      {hasCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Output</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 min-h-[180px] max-h-[280px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                    {isGenerating ? (
                      <div className="flex items-center justify-center h-32 gap-3 text-slate-500">
                        <Sparkles className="w-5 h-5 text-[#0176d3] animate-spin" />
                        <span>Retrieving dense enterprise vectors and synthesizing...</span>
                      </div>
                    ) : (
                      displayedOutput
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Guardrail: Zero-Data Retention Enforced</span>
                  <span className="text-emerald-600 font-semibold">Latency: ~242ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 12. OUR 7-STEP AI DEVELOPMENT PROCESS ================= */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Engineering Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Our AI Development Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From problem discovery to continuous post-launch optimization, our structured 7-step process ensures robust security, cost efficiency, and predictable business ROI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {developmentSteps.slice(0, 4).map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between h-full"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#0176d3]/30 mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#032d60] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {developmentSteps.slice(4).map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#0176d3]/30 mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#032d60] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 13. TECHNOLOGY STACK ================= */}
      <section className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Technical Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Technology Stack
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We leverage modern, battle-tested technologies across foundation models, vector stores, backend microservices, and multi-cloud environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-[#032d60] mb-3 pb-2 border-b border-slate-100">
                    {tech.category}
                  </h3>
                  <ul className="space-y-1.5">
                    {tech.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0176d3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 14. SOLUTIONS WE CAN BUILD ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Turnkey AI Products
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Solutions We Can Build
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Examples of end-to-end, production-ready AI software products our engineering team can architect and deliver:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-14">
            {builtSolutionsList.map((sol, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs font-semibold text-[#032d60] hover:bg-white hover:border-[#0176d3] hover:shadow-xs transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0176d3] shrink-0" />
                <span>{sol}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 15. WHY BUSINESSES USE GENERATIVE AI & WHY APARAITECH ================= */}
      <section className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Why Businesses Use Generative AI */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-[#0176d3] mb-2 block">
                Business Value Drivers
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#032d60] mb-4 tracking-tight">
                Why Businesses Use Generative AI
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Generative AI delivers competitive advantages across operations, intelligence, and revenue:
              </p>

              <div className="space-y-2.5">
                {businessBenefitsList.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Aparaitech Software */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-purple-600 mb-2 block">
                Our Advantage
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#032d60] mb-4 tracking-tight">
                Why Aparaitech Software
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                What sets our engineering team apart when delivering enterprise AI:
              </p>

              <div className="space-y-4">
                {whyAparaitechPillars.map((pil, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200/80">
                    <h4 className="font-serif font-bold text-sm text-[#032d60]">
                      {pil.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Industries We Serve Badge Grid */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <span className="text-xs font-bold uppercase text-slate-500 mb-3 block">
              Industries We Serve
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {industriesList.map((ind, iIdx) => (
                <span
                  key={iIdx}
                  className="px-4 py-2 rounded-full bg-[#f8fafc] border border-slate-200 text-xs font-semibold text-[#032d60]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 16. HAVE AN AI IDEA? INTERACTIVE INTAKE FORM ================= */}
      <section id="intake" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
              Consultation & Scoping
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
              Have an AI Idea?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you want to add AI to an existing application or create a completely new AI-powered product, our team can help you move from concept to implementation.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#032d60]">
                  Requirement Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  Thank you! An Aparaitech AI Solutions Architect will analyze your requirement and contact you at <strong>{ideaForm.clientContact || "your provided email/phone"}</strong> within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIdeaForm({ automationGoal: "", businessProblem: "", connectedSystems: "", clientName: "", clientContact: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Requirement
                  </button>
                  <a
                    href="https://wa.me/918261840199"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#032d60]">
                    1. What do you want to automate?
                  </label>
                  <input
                    type="text"
                    required
                    value={ideaForm.automationGoal}
                    onChange={(e) => setIdeaForm({ ...ideaForm, automationGoal: e.target.value })}
                    placeholder="e.g. Customer support tickets, invoice entry, sales email follow-ups..."
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#032d60]">
                    2. Which business problem do you want AI to solve?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={ideaForm.businessProblem}
                    onChange={(e) => setIdeaForm({ ...ideaForm, businessProblem: e.target.value })}
                    placeholder="e.g. Our team spends 20 hours a week manually answering repetitive employee questions and reading PDF contracts..."
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#032d60]">
                    3. What existing software or data should the AI connect with?
                  </label>
                  <input
                    type="text"
                    value={ideaForm.connectedSystems}
                    onChange={(e) => setIdeaForm({ ...ideaForm, connectedSystems: e.target.value })}
                    placeholder="e.g. Salesforce CRM, PostgreSQL database, Google Drive PDFs, WhatsApp..."
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#032d60]">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={ideaForm.clientName}
                      onChange={(e) => setIdeaForm({ ...ideaForm, clientName: e.target.value })}
                      placeholder="e.g. John Doe / Acme Corp"
                      className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#032d60]">
                      Email or Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={ideaForm.clientContact}
                      onChange={(e) => setIdeaForm({ ...ideaForm, clientContact: e.target.value })}
                      placeholder="e.g. info@company.com or +91 98765 43210"
                      className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0176d3] focus:ring-1 focus:ring-[#0176d3]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#0176d3] hover:bg-[#015ba5] text-white shadow-xs transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit AI Requirement</span>
                  </button>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Strict NDA & Data Confidentiality Assured</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ================= 17. START YOUR AI PROJECT (CTA & CONTACT) ================= */}
      <section className="py-20 bg-gradient-to-b from-[#f0f4f9] via-[#eaf3fc] to-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-bold uppercase tracking-wider text-[#0176d3] mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#032d60] mb-4 tracking-tight leading-tight">
            START YOUR AI PROJECT
          </h2>
          <h3 className="font-serif text-xl sm:text-2xl text-[#0176d3] font-normal italic mb-6">
            Build Your Next Intelligent Product with Aparaitech Software
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10">
            From AI chatbots to enterprise agents, document intelligence, voice AI, RAG systems, and complete Generative AI platforms, we help businesses transform ideas into practical AI solutions.
          </p>

          {/* Three Key CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-[#0176d3] hover:bg-[#015ba5] text-white shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Discuss Your AI Project
            </Link>

            <a
              href="#sandbox"
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white hover:bg-slate-50 text-[#0176d3] border-2 border-[#0176d3] shadow-xs transition-all hover:scale-105"
            >
              Request a Demo
            </a>

            <a
              href="tel:+918261840199"
              className="px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-[#032d60] hover:bg-[#021f42] text-white shadow-md transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Talk to Our AI Team</span>
            </a>
          </div>

          {/* Company Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            
            <a
              href="tel:+918261840199"
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#0176d3] transition-colors group block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-4 h-4 text-[#0176d3]" />
                <span className="font-serif font-bold text-sm text-[#032d60]">Direct Call</span>
              </div>
              <div className="text-xs text-slate-600 font-semibold group-hover:text-[#0176d3]">
                +91 82618 40199
              </div>
            </a>

            <a
              href="mailto:info@ai.aparaitech.org"
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#0176d3] transition-colors group block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-[#0176d3]" />
                <span className="font-serif font-bold text-sm text-[#032d60]">Official Email</span>
              </div>
              <div className="text-xs text-slate-600 font-semibold group-hover:text-[#0176d3]">
                info@ai.aparaitech.org
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/zshFooG4n2aS8Dr3A"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#0176d3] transition-colors group block"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-serif font-bold text-sm text-[#032d60]">Pune Headquarters</span>
              </div>
              <div className="text-xs text-slate-600 font-semibold group-hover:text-[#0176d3]">
                Gera Imperium, Hinjawadi Phase 2, Pune
              </div>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

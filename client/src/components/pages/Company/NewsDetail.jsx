import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Full content for the articles
const articleContent = {
  "Aparaitech Raises Series B Funding to Accelerate AI Adoption": {
    content: [
      "Aparaitech is proud to announce the successful closing of our Series B funding round, raising $50 million to accelerate the development and adoption of our enterprise AI solutions. The round was led by Horizon Ventures with participation from existing investors.",
      "This significant investment validates our mission to democratize artificial intelligence for businesses of all sizes. The funds will be primarily allocated to expanding our engineering team, enhancing our proprietary generative AI models, and scaling our global sales operations.",
      "\"This funding is a testament to the hard work of our team and the value we deliver to our enterprise partners,\" said the Lead Systems Architect at Aparaitech Software. \"We are at a pivotal moment in the technology landscape, and this engineering milestone will allow us to stay at the forefront of the AI systems revolution.\"",
      "In addition to product development, Aparaitech plans to expand its Pune Center of Excellence and AI research pods, fostering collaboration between researchers, engineers, and enterprise clients. This CoE serves as a testbed for next-generation sovereign AI applications in manufacturing, finance, healthcare, and supply chain logistics."
    ],
    author: "Engineering Editorial Pod",
    role: "Aparaitech Technical Advisory"
  },
  "How Generative AI is Transforming Enterprise Workflows": {
    content: [
      "Generative AI is no longer just an experimental prototype; it is fundamentally reshaping how enterprises execute operations. From automating high-concurrency code refactoring to synthesising domain knowledge bases at scale, Large Language Models (LLMs) and agentic workflows are driving unprecedented efficiency.",
      "At Aparaitech Software, our deployments observe quantifiable reductions in turnaround time among enterprise clients integrating our private RAG and multi-agent platforms. Automated invoice reconciliations, semantic catalog parsing, and institutional memory indexing eliminate manual bottlenecks.",
      "However, enterprise deployment demands stringent governance. Data leakage prevention, deterministic guardrails, zero hallucination, and private VPC or on-premises isolation remain essential priorities. Our architecture frameworks establish secure and provable AI implementations.",
      "The future of work belongs to collaborative systems intelligence, where humans steer deterministic autonomous agents. Organizations that build these pipelines today will establish unassailable operational moats."
    ],
    author: "Systems Architecture Pod",
    role: "Aparaitech Research"
  },
  "Aparaitech Named 'Top Cloud Innovator' of 2023": {
    content: [
      "We are honored to be recognized among the top enterprise AI and cloud engineering innovators. This acknowledgement highlights our commitment to engineering scalable, resilient, and verifiable infrastructure for sovereign enterprise workloads.",
      "Our Hinjawadi Phase 2 Center of Excellence focuses specifically on low-latency GPU cluster orchestration, multi-tenant vector retrieval, and private on-premises VPC isolation engines that reduce energy consumption while maximizing inference throughput.",
      "\"System reliability is in our engineering DNA,\" noted our Lead Cloud Architect. \"We don't merely run standard models; we build hardened runtime kernels, deterministic evaluation harnesses, and resilient microservices designed to never fail.\"",
      "Aparaitech Software thanks our enterprise clients and engineering pods across India and globally for their partnership as we continue advancing sovereign AI systems."
    ],
    author: "Cloud Infrastructure Pod",
    role: "Aparaitech Telemetry"
  },
  "New Partnership with Global Tech Giants": {
    content: [
      "Aparaitech Software has entered into strategic solution integration initiatives to build a unified ecosystem for enterprise cognitive automation. This initiative bridges legacy relational architectures with modern autonomous multi-agent pipelines.",
      "The partnership framework enables seamless deployment of Aparaitech's custom AI platforms across hybrid cloud environments including AWS, GCP, Azure, and air-gapped on-premises Kubernetes clusters.",
      "\"Architectural interoperability is essential to solving modern automation challenges,\" said our Principal Technology Strategist. \"By removing integration friction, our enterprise clients deploy production-grade multi-agent reasoning within days rather than quarters.\"",
      "Joint technical implementations focus on real-time visual inspection, automated document intelligence, and sub-millisecond fraud topology detection across high-volume transaction networks."
    ],
    author: "Strategic Engineering Pod",
    role: "Aparaitech Alliances"
  }
};

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] text-[#142B4A] dark:text-[#F1F5F9] p-6">
        <div className="text-center p-8 bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] rounded-2xl max-w-md w-full shadow-2xl">
          <h2 className="text-2xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-3">Article Dispatch Not Found</h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] text-xs font-mono mb-6">The requested publication or news announcement could not be loaded directly.</p>
          <button 
            onClick={() => navigate('/company/news')}
            className="px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-mono font-bold hover:bg-[#1D4ED8] transition-all cursor-pointer"
          >
            ← Return to Newsroom & Dispatches
          </button>
        </div>
      </div>
    );
  }

  // Get full content or fallback
  const details = articleContent[article.title] || {
    content: [
      "Aparaitech Software engineering pods continually deploy scalable architectures and enterprise AI pipelines designed for verified production outcomes.",
      "Operating from Gera Imperium, Hinjawadi Phase 2, Pune, our teams bridge cutting-edge multi-agent reasoning with statutory compliance, security isolation, and enterprise SLAs."
    ],
    author: "Aparaitech Editorial Pod",
    role: "Technical Communications"
  };

  return (
    <div className="min-h-screen bg-[#F3F6FA] dark:bg-[#0B1220] dark:bg-[#0B1220] text-white font-sans selection:bg-blue-500/30 selection:text-white pt-20 pb-24">
      {/* Top Breadcrumb & Return Nav */}
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#2DD4BF] hover:border-blue-500/40 transition-all font-mono text-xs cursor-pointer shadow-sm"
        >
          <span>← Back to News & Dispatches</span>
        </button>
      </div>

      {/* Hero Banner with Article Metadata */}
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 mb-12">
        <div className="relative h-[380px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] shadow-2xl bg-white dark:bg-[#131F32]">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-12">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#2DD4BF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-md mb-4">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#142B4A] dark:text-[#F1F5F9] mb-4 leading-tight tracking-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center text-[#475569] dark:text-[#CBD5E1] gap-6 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-[#10B981]"></span>
                  {article.date}
                </span>
                <span className="text-slate-400">
                  5 min architectural read
                </span>
                <span className="text-[#0F9F8F] dark:text-[#2DD4BF]">
                  Pune CoE Engineering Dispatch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#131F32] border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-8 border-b border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] pb-6">
                {article.excerpt}
              </p>
              
              <div className="space-y-6 text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed font-normal">
                {details.content.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags Strip */}
              <div className="mt-10 pt-6 border-t border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] uppercase tracking-wider mr-2">Architecture Topics:</span>
                {['Enterprise AI', 'Autonomous Systems', article.category, 'Pune CoE'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-[#161F32] border border-white/10 text-[#475569] dark:text-[#CBD5E1] rounded font-mono text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Author & Technical Overview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#131F32] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] shadow-xl">
              <h3 className="text-xs font-mono font-bold text-[#2DD4BF] uppercase tracking-wider mb-4">
                Published By
              </h3>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center text-[#2DD4BF] font-bold font-mono">
                  {details.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#142B4A] dark:text-[#F1F5F9] text-sm">{details.author}</div>
                  <div className="text-xs text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] font-mono mt-0.5">{details.role}</div>
                </div>
              </div>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] leading-relaxed font-normal">
                Engineering dispatches covering real-world autonomous deployments from our Pune Center of Excellence.
              </p>
            </div>

            <div className="bg-white dark:bg-[#131F32] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#29384D] dark:border-[#1E293B] shadow-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#142B4A] dark:text-[#F1F5F9] uppercase tracking-wider">
                Engineering Inquiries
              </h4>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] dark:text-[#94A3B8] leading-relaxed">
                Connect with our systems architects to evaluate technical specifications or review deployment case studies.
              </p>
              <button
                onClick={() => navigate('/company/about-us')}
                className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-[#161F32] border border-white/10 text-[#142B4A] dark:text-[#F1F5F9] font-mono text-xs hover:border-blue-500/40 transition-colors"
              >
                Learn About Aparaitech →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
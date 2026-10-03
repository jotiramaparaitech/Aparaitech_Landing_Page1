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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0C0D0F] text-white p-6">
        <div className="text-center p-8 bg-[#141518] border border-[#22242A] rounded-2xl max-w-md w-full shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-3">Article Dispatch Not Found</h2>
          <p className="text-slate-400 text-xs font-mono mb-6">The requested publication or news announcement could not be loaded directly.</p>
          <button 
            onClick={() => navigate('/company/news')}
            className="px-5 py-2.5 rounded-lg bg-[#00E5C9] text-[#0C0D0F] text-xs font-mono font-bold hover:brightness-110 transition-all cursor-pointer"
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
    <div className="min-h-screen bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] pt-20 pb-24">
      {/* Top Breadcrumb & Return Nav */}
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141518] border border-[#22242A] text-slate-300 hover:text-[#00E5C9] hover:border-[#00E5C9]/50 transition-all font-mono text-xs cursor-pointer shadow-sm"
        >
          <span>← Back to News & Dispatches</span>
        </button>
      </div>

      {/* Hero Banner with Article Metadata */}
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 mb-12">
        <div className="relative h-[380px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#22242A] shadow-2xl bg-[#141518]">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F] via-[#0C0D0F]/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-12">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#00E5C9]/20 border border-[#00E5C9]/40 text-[#00E5C9] text-[11px] font-mono font-bold uppercase tracking-wider rounded-md mb-4">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center text-slate-300 gap-6 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-[#00E5C9]"></span>
                  {article.date}
                </span>
                <span className="text-slate-400">
                  5 min architectural read
                </span>
                <span className="text-[#D4FD53]">
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
            <div className="bg-[#141518] border border-[#22242A] rounded-2xl p-6 sm:p-10 shadow-2xl">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-8 border-b border-[#22242A] pb-6">
                {article.excerpt}
              </p>
              
              <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {details.content.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags Strip */}
              <div className="mt-10 pt-6 border-t border-[#22242A] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">Architecture Topics:</span>
                {['Enterprise AI', 'Autonomous Systems', article.category, 'Pune CoE'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#1C1C1E] border border-white/10 text-slate-300 rounded font-mono text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Author & Technical Overview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#141518] p-6 rounded-2xl border border-[#22242A] shadow-xl">
              <h3 className="text-xs font-mono font-bold text-[#00E5C9] uppercase tracking-wider mb-4">
                Published By
              </h3>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#00E5C9]/10 border border-[#00E5C9]/30 flex items-center justify-center text-[#00E5C9] font-bold font-mono">
                  {details.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{details.author}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{details.role}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Engineering dispatches covering real-world autonomous deployments from our Pune Center of Excellence.
              </p>
            </div>

            <div className="bg-[#141518] p-6 rounded-2xl border border-[#22242A] shadow-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Engineering Inquiries
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our systems architects to evaluate technical specifications or review deployment case studies.
              </p>
              <button
                onClick={() => navigate('/company/about-us')}
                className="w-full py-2.5 rounded-lg bg-[#1C1C1E] border border-white/10 text-white font-mono text-xs hover:border-[#00E5C9]/50 transition-colors"
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
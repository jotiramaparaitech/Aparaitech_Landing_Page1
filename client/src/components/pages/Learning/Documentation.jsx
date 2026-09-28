// src/components/pages/Learning/Documentation.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  Code2,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronRight,
  X,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Send,
  MessageSquare
} from "lucide-react";
import { toast } from "react-hot-toast";
import { saveAppointmentToSheet, GOOGLE_SHEET_VIEW_URL } from "../../../utils/sheetService";

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [showFullGuide, setShowFullGuide] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      desc: "Prerequisites, environment setup, and rapid initial integration with Aparaitech backends.",
      icon: Terminal,
      links: [
        {
          title: "Quickstart Guide",
          content: "Initialize client connection to Aparaitech Pune CoE API Gateways in under 5 minutes. Configure TLS 1.3 certificates, authenticate via scoped bearer tokens, and execute your first telemetry heartbeat."
        },
        {
          title: "Environment & Gateway Configuration",
          content: "Step-by-step connection topology for staging and production VPCs. Includes CORS configurations, IP whitelisting rules, and high-availability DNS failover setups."
        },
        {
          title: "Token Authentication & OAuth 2.0",
          content: "Cryptographic mTLS and OAuth 2.0 / JWT specification. Rotate secret keys with zero-downtime, inspect JSON Web Key Sets (JWKS), and configure fine-grained role scopes."
        },
        {
          title: "First API Call & Health Telemetry",
          content: "Execute an end-to-end request against our live microservices mesh with complete request/response schemas, error handling policies, and latency tracing headers."
        }
      ]
    },
    {
      id: "api-references",
      title: "API References",
      desc: "Comprehensive schemas for REST, GraphQL, and WebSocket streaming protocols.",
      icon: Code2,
      links: [
        {
          title: "CloudKitchen KDS WebSocket API",
          content: "Real-time kitchen display event streams. Subscribe to 'kds:orders:live', acknowledge ticket prep state transitions, and monitor dispatch SLA counters with sub-15ms latency."
        },
        {
          title: "Attendance AI Biometric Ingestion",
          content: "Edge facial vector payload schemas, anti-spoof liveness verification assertions, offline punch syncing, and ISO 19794-5 biometric data protection specs."
        },
        {
          title: "ApnaStore Catalog GraphQL",
          content: "Federated GraphQL schemas querying 100,000+ SKUs with cursor pagination, real-time inventory locks, multi-tier wholesale pricing, and automated WhatsApp payload generation."
        },
        {
          title: "ServiceHub Dispatch Webhooks",
          content: "High-reliability webhook delivery for field technician status changes, geofence breaches, digital customer signature verification, and automated SMS notifications."
        }
      ]
    },
    {
      id: "sdks-libraries",
      title: "SDKs & Client Libraries",
      desc: "Engineered SDKs for Node.js, Python, React Native, and enterprise JVM runtimes.",
      icon: Layers,
      links: [
        {
          title: "Node.js / TypeScript SDK",
          content: "Type-safe asynchronous client with built-in exponential backoff, connection pooling, automated telemetry injection, and full support for Node 18+ and Bun."
        },
        {
          title: "Python Edge & AI Client",
          content: "Asyncio-native Python package with Pydantic v2 data models, NumPy array serialization, OpenCV camera stream pipelines, and on-device model quantizer hooks."
        },
        {
          title: "React & React Native Hooks",
          content: "Custom stateful hooks (useAparaitechStream, useBiometricAuth, useInventorySync) optimized for 60fps mobile interfaces with offline SQLite fallback."
        },
        {
          title: "Java / Spring Boot Starter",
          content: "Enterprise-grade Spring Boot autoconfiguration with Micrometer metrics, circuit breakers (Resilience4j), and Kafka consumer bindings for core banking."
        }
      ]
    }
  ];

  const popularTopics = [
    {
      title: "Managing API Keys & Vaults",
      category: "getting-started",
      content: "Learn how to provision scoped API tokens, rotate credentials via Terraform, and integrate HashiCorp Vault or AWS Secrets Manager seamlessly."
    },
    {
      title: "Idempotency & Retry Strategies",
      category: "api-references",
      content: "Implement X-Idempotency-Key headers across transaction endpoints to prevent duplicate operations during transient network partition events."
    },
    {
      title: "Rate Limiting & Leaky Bucket Quotas",
      category: "api-references",
      content: "Understand tier-based API throttling, 429 response decoding, and Redis-backed sliding window rate limit recovery strategies."
    },
    {
      title: "High-Volume Cursor Pagination",
      category: "api-references",
      content: "Query million-record logs and catalog archives with sub-20ms database performance using opaque keyset cursor pagination."
    },
    {
      title: "Webhook Signature Verification",
      category: "api-references",
      content: "Verify cryptographic HMAC-SHA256 signatures on incoming webhook payloads to protect against replay and tampering attacks."
    },
    {
      title: "Zero-Trust Security & PCI Compliance",
      category: "getting-started",
      content: "Hardening guidelines covering TLS 1.3 ciphers, IP whitelisting, field-level encryption, and meeting SOC 2 / HIPAA compliance audits."
    },
    {
      title: "API Versioning & Deprecation Lifecycle",
      category: "api-references",
      content: "Review our backward compatibility guarantees, semantic versioning policy, and automated sunset header notifications."
    },
    {
      title: "Sandboxed Testing & Mock Gateways",
      category: "getting-started",
      content: "Deploy against isolated Pune sandbox environments with simulated network jitter, synthetic user pools, and automated test runners."
    }
  ];

  const filteredCategories = useMemo(() => {
    let filtered = categories;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((cat) => cat.id === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered
        .map((cat) => ({
          ...cat,
          links: cat.links.filter(
            (link) =>
              link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              link.content.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }))
        .filter((cat) => cat.links.length > 0);
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return popularTopics;

    return popularTopics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleContentClick = (content, title) => {
    setSelectedContent({ title, content });
    setShowModal(true);
  };

  const handleFullGuide = () => {
    setShowModal(false);
    setShowFullGuide(true);
  };

  const getFullGuideContent = (title) => {
    const guides = {
      "Quickstart Guide": {
        steps: [
          "Request enterprise API credentials from Aparaitech Engineering CoE (info@ai.aparaitech.org)",
          "Configure environment variables with your APARAITECH_API_KEY and REGION_URL",
          "Initialize the Aparaitech SDK client instance with TLS verification enabled",
          "Dispatch an asynchronous ping request to verify low-latency gateway connectivity",
          "Inspect telemetry response headers: X-Aparaitech-Latency and X-Cluster-Node"
        ],
        code: `// Initialize Aparaitech Production Client
import { AparaitechClient } from '@aparaitech/sdk';

const client = new AparaitechClient({
  apiKey: process.env.APARAITECH_API_KEY,
  region: 'in-pune-coe-1',
  timeoutMs: 5000,
  retries: 3
});

// Verify live telemetry heartbeat
const health = await client.system.ping();
console.log('Gateway Connected:', health.status, 'Latency:', health.latencyMs + 'ms');`,
        tips: [
          "Never commit API keys to source control; use KMS or AWS Secrets Manager",
          "All production traffic must route over TLS 1.3",
          "Monitor live status at /support/status for cluster availability"
        ]
      },
      "Environment & Gateway Configuration": {
        steps: [
          "Review private IP subnets and peer your VPC with Aparaitech Cloud Infrastructure",
          "Whitelist Aparaitech Pune CoE egress IP ranges in your corporate firewall",
          "Configure DNS resolution with automatic fallback across multi-zone nodes",
          "Provision reciprocal mTLS certificates for zero-trust microservice communication"
        ],
        code: `# Production Gateway Endpoint Mapping
APARAITECH_PRIMARY_GATEWAY=https://api.aparaitech.org/v1
APARAITECH_FALLBACK_GATEWAY=https://dr.aparaitech.org/v1
APARAITECH_REGION=ap-south-pune-phase2
APARAITECH_MTLS_CERT_PATH=/etc/ssl/aparaitech-client.crt`,
        tips: [
          "Enable HTTP/2 keep-alives for sub-millisecond reuse of open sockets",
          "Maintain independent staging and production environment variables"
        ]
      },
      "Token Authentication & OAuth 2.0": {
        steps: [
          "Generate client ID and secret pair in the Aparaitech Developer Console",
          "Request JWT Bearer token using OAuth 2.0 client_credentials grant",
          "Cache access token in Redis until 5 minutes before expiration",
          "Attach 'Authorization: Bearer <token>' header on all outbound requests"
        ],
        code: `// Generate OAuth 2.0 JWT Token
const tokenResponse = await fetch('https://api.aparaitech.org/oauth/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    scope: 'kds.orders.read attendance.biometrics.write'
  })
});
const { access_token, expires_in } = await tokenResponse.json();`,
        tips: [
          "Validate JWT cryptographic signatures using our public JWKS endpoint",
          "Ensure tokens are refreshed proactively to prevent authentication drops"
        ]
      },
      "First API Call & Health Telemetry": {
        steps: [
          "Select the target microservice (CloudKitchen, Attendance, ApnaStore, ServiceHub)",
          "Construct typed JSON payload satisfying OpenAPI 3.1 specifications",
          "Dispatch request using persistent keep-alive connections",
          "Parse payload response and record latency metrics to OpenTelemetry"
        ],
        code: `// Query ApnaStore Catalog with Filter
const res = await client.catalog.search({
  query: 'Industrial Precision Sensor',
  limit: 20,
  inStockOnly: true
});

console.log('Matched SKUs:', res.data.length, 'Elapsed P99:', res.headers['x-latency']);`,
        tips: [
          "Verify response HTTP 200 before parsing payload bodies",
          "Utilize built-in SDK types for exhaustive TypeScript validation"
        ]
      }
    };

    return (
      guides[title] || {
        steps: [
          "Select your target service module from the architecture index",
          "Verify IAM role credentials and service account permissions",
          "Run the automated sanity script against the Pune staging cluster",
          "Review production logs to ensure zero unauthorized access warnings"
        ],
        code: `// Generic Aparaitech Service invocation
const response = await client.request({
  path: '/v1/system/telemetry',
  method: 'GET'
});
console.log('Telemetry payload:', response);`,
        tips: [
          "Consult our engineering team via info@ai.aparaitech.org for custom modules",
          "Join the developer community at /support/community for live architect Q&A"
        ]
      }
    );
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast.success("Code snippet copied to clipboard!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-[#0C0D0F] text-white font-sans selection:bg-[#D4FD53] selection:text-[#0C0D0F] min-h-screen">
      {/* 1. HERO SEARCH SECTION */}
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
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEVELOPER DOCUMENTATION & API SCHEMAS</span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4.25rem)] font-semibold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Build with Aparaitech Production Engines
          </h1>

          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Detailed API specifications, microservice SDKs, WebSocket protocols, and architectural blueprints engineered by our Hinjawadi Pune Center of Excellence.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search endpoints, SDKs, WebSocket topics, or authentication guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[52px] rounded-xl bg-[#141518] border border-[#22242A] pl-12 pr-10 text-sm text-white placeholder-slate-500 focus:border-[#D4FD53] focus:outline-none transition-all shadow-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {searchTerm && (
            <div className="mt-3 text-xs font-mono text-slate-400">
              Found {filteredCategories.reduce((acc, cat) => acc + cat.links.length, 0) + filteredTopics.length} documentation topics matching "{searchTerm}"
            </div>
          )}
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="border-b border-[#22242A] bg-[#141518]/70 py-4">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 mr-2">
              Browse Domain:
            </span>
            {[
              { id: "all", label: "All Documentation" },
              { id: "getting-started", label: "Getting Started" },
              { id: "api-references", label: "API References" },
              { id: "sdks-libraries", label: "SDKs & Libraries" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#D4FD53] text-[#0C0D0F] font-bold"
                    : "bg-[#1C1C1E] text-slate-300 border border-white/5 hover:border-slate-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN DOCUMENTATION CATEGORIES */}
      <section className="py-20 max-w-[1240px] mx-auto px-6 lg:px-8">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-[#22242A] bg-[#141518]">
            <Terminal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No documentation matches found</h3>
            <p className="text-sm text-slate-400">Try refining your search keyword or clearing the category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="rounded-xl border border-[#22242A] bg-[#141518] p-8 hover:border-[#D4FD53]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0C0D0F] border border-[#22242A] flex items-center justify-center text-[#D4FD53] mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{cat.desc}</p>

                    <div className="space-y-2 border-t border-[#22242A] pt-4">
                      {cat.links.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleContentClick(link.content, link.title)}
                          className="w-full flex items-center justify-between text-left p-2.5 rounded hover:bg-[#1C1C1E] group transition-colors"
                        >
                          <span className="text-xs font-mono text-slate-300 group-hover:text-[#D4FD53] transition-colors">
                            {link.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4FD53] transition-colors shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. POPULAR TOPICS */}
      <section className="py-16 border-t border-[#22242A] bg-[#141518]/50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#00E5C9]">
              CORE ARCHITECTURAL GUIDES
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">Popular Implementation Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => handleContentClick(topic.content, topic.title)}
                className="flex items-center justify-between p-4 rounded-xl border border-[#22242A] bg-[#0C0D0F] hover:border-[#D4FD53]/50 transition-all text-left group"
              >
                <div className="pr-2">
                  <div className="text-xs font-semibold text-white group-hover:text-[#D4FD53] transition-colors">
                    {topic.title}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase mt-1">
                    {topic.category}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4FD53] shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REDIRECT FOOTER BANNER (Replaces obsolete Help Center) */}
      <section className="py-12 border-t border-[#22242A] text-center bg-[#0C0D0F]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <p className="text-slate-400 text-sm">
            Need live engineering support or community answers?{" "}
            <Link
              to="/support/community"
              className="text-[#D4FD53] font-mono font-bold hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Visit our Developer Community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </section>

      {/* 6. MODAL: TOPIC PREVIEW */}
      {showModal && selectedContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#141518] border border-[#22242A] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-[#D4FD53] uppercase mb-2">
              DOCUMENTATION OVERVIEW
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedContent.title}</h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedContent.content}
            </p>

            <div className="p-4 rounded-xl bg-[#0C0D0F] border border-[#22242A] mb-6">
              <div className="text-xs font-bold text-white mb-1">Looking for exact code samples?</div>
              <p className="text-slate-400 text-xs">
                Inspect step-by-step instructions, production code blocks, and security guidelines in the full walkthrough.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handleFullGuide}
                className="inline-flex items-center gap-2 rounded bg-[#D4FD53] px-6 py-2.5 text-xs font-mono font-bold uppercase text-[#0C0D0F] hover:brightness-105"
              >
                <span>Open Full Guide & Code</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL: FULL GUIDE WITH INTERACTIVE CODE */}
      {showFullGuide && selectedContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setShowFullGuide(false)}
        >
          <div
            className="bg-[#141518] border border-[#22242A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullGuide(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-[#00E5C9] uppercase mb-1">
              STEP-BY-STEP IMPLEMENTATION GUIDE
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {selectedContent.title}
            </h2>

            {(() => {
              const guide = getFullGuideContent(selectedContent.title);
              return (
                <div className="space-y-6">
                  {/* Steps */}
                  <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                    <h3 className="font-mono text-xs uppercase text-[#D4FD53] tracking-wider mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Execution Sequence</span>
                    </h3>
                    <div className="space-y-2.5">
                      {guide.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                          <span className="w-5 h-5 rounded bg-[#1C1C1E] border border-white/10 font-mono text-[10px] text-[#D4FD53] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Block with Copy */}
                  <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#22242A] bg-[#141518] font-mono text-xs text-slate-400">
                      <span>Production Implementation</span>
                      <button
                        onClick={() => handleCopyCode(guide.code)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#D4FD53] hover:underline"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{guide.code}</code>
                    </pre>
                  </div>

                  {/* Pro Tips */}
                  <div className="rounded-xl border border-[#22242A] bg-[#0C0D0F] p-5">
                    <h3 className="font-mono text-xs uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Architecture Notes & Best Practices</span>
                    </h3>
                    <div className="space-y-2">
                      {guide.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-amber-400 font-mono mt-0.5">▸</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="mt-8 pt-6 border-t border-[#22242A] flex justify-end">
              <button
                onClick={() => setShowFullGuide(false)}
                className="rounded bg-[#1C1C1E] border border-white/20 px-6 py-2.5 text-xs font-mono text-white hover:bg-[#2C2C30]"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
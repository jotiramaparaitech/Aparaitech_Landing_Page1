import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [showFullGuide, setShowFullGuide] = useState(false);

  const categories = [
    {
      id: 'getting-started',
      title: "Getting Started",
      desc: "Everything you need to know to get up and running with Aparaitech platforms.",
      icon: "",
      links: [
        { title: "Quickstart Guide", content: "Learn the basics of Aparaitech platform in 5 minutes. Set up your account, create your first project, and make your first API call." },
        { title: "Installation", content: "Step-by-step installation guide for different environments. Includes prerequisites, setup instructions, and verification steps." },
        { title: "Authentication", content: "Secure authentication methods including API keys, OAuth 2.0, and JWT tokens. Learn best practices for securing your applications." },
        { title: "First API Call", content: "Make your first API call with detailed examples in multiple programming languages. Includes error handling and response parsing." }
      ]
    },
    {
      id: 'api-references',
      title: "API References",
      desc: "Detailed documentation for all our REST and GraphQL APIs.",
      icon: "",
      links: [
        { title: "Core API", content: "Complete reference for our core API endpoints. Includes request/response formats, status codes, and rate limiting information." },
        { title: "Payments API", content: "Comprehensive payment processing API documentation. Handle transactions, refunds, subscriptions, and payment methods." },
        { title: "Identity API", content: "User management and authentication API. Create, update, and manage user accounts with proper security measures." },
        { title: "Webhooks", content: "Real-time event notifications through webhooks. Configure endpoints, handle signatures, and process incoming events." }
      ]
    },
    {
      id: 'sdks-libraries',
      title: "SDKs & Libraries",
      desc: "Official libraries for your favorite languages and frameworks.",
      icon: "",
      links: [
        { title: "Node.js", content: "Official Node.js SDK with TypeScript support. Includes async/await patterns, error handling, and middleware integration." },
        { title: "Python", content: "Python SDK with comprehensive documentation. Supports both synchronous and asynchronous operations with proper type hints." },
        { title: "React", content: "React hooks and components for seamless integration. Includes context providers, custom hooks, and TypeScript definitions." },
        { title: "Java", content: "Enterprise-ready Java SDK with Spring Boot integration. Includes dependency injection, configuration, and testing utilities." }
      ]
    }
  ];

  const popularTopics = [
    { title: "Managing API Keys", category: "getting-started", content: "Learn how to generate, rotate, and manage API keys securely. Includes best practices for key storage and rotation policies." },
    { title: "Handling Errors", category: "api-references", content: "Comprehensive error handling guide. Understand different error types, status codes, and proper error response parsing." },
    { title: "Rate Limits", category: "api-references", content: "Understanding rate limiting and quotas. Learn how to handle rate limit responses and implement retry strategies." },
    { title: "Pagination", category: "api-references", content: "Implement pagination for large datasets. Covers cursor-based, offset-based, and time-based pagination methods." },
    { title: "Webhooks Integration", category: "api-references", content: "Set up and manage webhook integrations. Includes signature verification, retry logic, and event processing." },
    { title: "Security Best Practices", category: "getting-started", content: "Essential security guidelines for API integration. Covers authentication, data encryption, and secure coding practices." },
    { title: "Versioning", category: "api-references", content: "API versioning strategies and migration guides. Learn how to handle breaking changes and maintain backward compatibility." },
    { title: "Testing Sandbox", category: "getting-started", content: "Use our sandbox environment for testing. Includes test data, mock responses, and debugging tools." }
  ];

  const filteredCategories = useMemo(() => {
    let filtered = categories;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.id === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.map(cat => ({
        ...cat,
        links: cat.links.filter(link => 
          link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          link.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.links.length > 0);
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return popularTopics;
    
    return popularTopics.filter(topic =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleContentClick = (content, title) => {
    setSelectedContent({ title, content });
    setShowModal(true);
  };

  const handleFullGuide = () => {
    setShowModal(false); // Close the main modal first
    setShowFullGuide(true); // Then open the full guide
  };

  const getFullGuideContent = (title) => {
    const guides = {
      "Quickstart Guide": {
        steps: [
          "Sign up for an Aparaitech account",
          "Create your first project",
          "Generate API credentials",
          "Make your first API call",
          "Verify the response"
        ],
        code: `// Example API call
const response = await fetch('https://api.aparaitech.com/v1/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`,
        tips: [
          "Keep your API keys secure",
          "Use the sandbox environment for testing",
          "Check the API documentation for endpoints"
        ]
      },
      "Installation": {
        steps: [
          "Check system requirements",
          "Download the latest version",
          "Run the installer",
          "Verify installation",
          "Configure settings"
        ],
        code: `# Install via npm
npm install aparaitech-sdk

# Install via pip
pip install aparaitech`,
        tips: [
          "Use a virtual environment for Python",
          "Check for dependencies",
          "Follow the setup wizard"
        ]
      },
      "Authentication": {
        steps: [
          "Choose authentication method",
          "Generate API keys",
          "Set up OAuth if needed",
          "Test authentication",
          "Implement token refresh"
        ],
        code: `// API Key Authentication
const headers = {
  'X-API-Key': 'your_api_key_here'
};

// OAuth Bearer Token
const headers = {
  'Authorization': 'Bearer ' + access_token
};`,
        tips: [
          "Never expose API keys in frontend code",
          "Use HTTPS for all API calls",
          "Implement proper token storage"
        ]
      },
      "First API Call": {
        steps: [
          "Choose your programming language",
          "Install required SDK",
          "Set up authentication",
          "Make a simple request",
          "Handle the response"
        ],
        code: `// JavaScript Example
const Aparaitech = require('aparaitech-sdk');
const client = new Aparaitech({ apiKey: 'your_key' });

client.data.list()
  .then(data => console.log(data))
  .catch(error => console.error(error));`,
        tips: [
          "Start with simple GET requests",
          "Check rate limits",
          "Handle errors gracefully"
        ]
      }
    };
    
    return guides[title] || {
      steps: ["Coming soon..."],
      code: "// Detailed guide content will be available soon",
      tips: ["Check back later for comprehensive guides"]
    };
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SEARCH SECTION */}
      <div className="bg-[#0f172a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-700/50 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
            Developer Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you build?</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search guides, API references, and resources..." 
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-4 px-6 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            {searchTerm && (
              <div className="absolute right-4 top-4">
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
          {searchTerm && (
            <div className="mt-4 text-sm text-gray-300">
              Found {filteredCategories.reduce((acc, cat) => acc + cat.links.length, 0) + filteredTopics.length} results for "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter by category:</span>
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'getting-started', label: 'Getting Started' },
                { id: 'api-references', label: 'API References' },
                { id: 'sdks-libraries', label: 'SDKs & Libraries' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.links.map((link, i) => (
                      <li key={i}>
                        <button 
                          onClick={() => handleContentClick(link.content, link.title)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center text-left w-full hover:bg-blue-50 p-2 rounded transition-colors"
                        >
                          {link.title} <span className="ml-auto">→</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* POPULAR TOPICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Topics</h2>
          {filteredTopics.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No popular topics match your search</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleContentClick(topic.content, topic.title)}
                  className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors group text-left w-full"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-gray-700 group-hover:text-blue-700 font-medium">{topic.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f8fafc] border-t border-gray-200 text-center">
        <p className="text-gray-600">Can't find what you're looking for? <Link to="/support/help-center" className="text-blue-600 font-bold hover:underline">Visit our Help Center</Link></p>
      </section>

      {/* FULL GUIDE MODAL */}
      {showFullGuide && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedContent.title} - Full Guide</h2>
                <button
                  onClick={() => setShowFullGuide(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              {(() => {
                const guide = getFullGuideContent(selectedContent.title);
                return (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Instructions</h3>
                      <ol className="space-y-2">
                        {guide.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Example</h3>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          <code>{guide.code}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Pro Tips</h3>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">💡</span>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowFullGuide(false)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CONTENT MODAL */}
      {showModal && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedContent.title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedContent.content}</p>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Need more help?</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Check out our comprehensive guides for detailed step-by-step instructions.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleFullGuide}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Full Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
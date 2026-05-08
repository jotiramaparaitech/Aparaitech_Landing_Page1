import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Full content for the articles
const articleContent = {
  "Aparaitech Raises Series B Funding to Accelerate AI Adoption": {
    content: [
      "Aparaitech is proud to announce the successful closing of our Series B funding round, raising $50 million to accelerate the development and adoption of our enterprise AI solutions. The round was led by Horizon Ventures with participation from existing investors.",
      "This significant investment validates our mission to democratize artificial intelligence for businesses of all sizes. The funds will be primarily allocated to expanding our engineering team, enhancing our proprietary generative AI models, and scaling our global sales operations.",
      "\"This funding is a testament to the hard work of our team and the value we deliver to our customers,\" said the CEO of Aparaitech. \"We are at a pivotal moment in the technology landscape, and this capital will allow us to stay at the forefront of the AI revolution.\"",
      "In addition to product development, Aparaitech plans to launch a new AI innovation hub in San Francisco, fostering collaboration between researchers, engineers, and enterprise clients. This hub will serve as a testing ground for next-generation AI applications in finance, healthcare, and logistics."
    ],
    author: "Sarah Jenkins",
    role: "VP of Communications"
  },
  "How Generative AI is Transforming Enterprise Workflows": {
    content: [
      "Generative AI is no longer just a buzzword; it is fundamentally reshaping how enterprises operate. From automating code generation to creating personalized marketing content at scale, Large Language Models (LLMs) are driving unprecedented efficiency.",
      "At Aparaitech, we have observed a 40% increase in productivity among clients who have integrated our GenAI tools into their daily workflows. The ability to summarize complex documents, generate financial reports, and assist in customer support inquiries has freed up human employees to focus on strategic initiatives.",
      "However, adoption is not without its challenges. Data privacy, model hallucination, and integration with legacy systems remain top concerns for CTOs. Our latest whitepaper explores these challenges in depth and offers a roadmap for secure and effective AI implementation.",
      "The future of work is collaborative intelligence, where humans and AI work side-by-side. Organizations that embrace this shift today will define the competitive landscape of tomorrow."
    ],
    author: "David Chen",
    role: "Chief Technology Officer"
  },
  "Aparaitech Named 'Top Cloud Innovator' of 2023": {
    content: [
      "We are honored to be named the 'Top Cloud Innovator' of 2023 by the Global Tech Awards. This recognition highlights our commitment to building scalable, resilient, and sustainable cloud infrastructure for the modern enterprise.",
      "The award specifically recognizes our breakthrough in 'Green Cloud Computing,' a proprietary optimization engine that reduces server energy consumption by up to 30% without compromising performance. As data centers consume an increasing share of global electricity, sustainable computing is more critical than ever.",
      "\"Innovation is in our DNA,\" said our Head of Cloud Architecture. \"We didn't just want to build a faster cloud; we wanted to build a better one. This award belongs to every engineer who spent late nights optimizing kernels and rethinking resource allocation.\"",
      "Aparaitech competed against 500 other technology firms for this prestigious title. We thank our partners and customers for their continued trust and support as we push the boundaries of what is possible in the cloud."
    ],
    author: "Editorial Team",
    role: "Aparaitech News"
  },
  "New Partnership with Global Tech Giants": {
    content: [
      "Aparaitech has entered into a strategic partnership with several global technology leaders to create a unified ecosystem for digital transformation. This alliance aims to bridge the gap between on-premise infrastructure and multi-cloud environments.",
      "The partnership will enable seamless integration of Aparaitech's AI and analytics platforms with major cloud providers, including AWS, Azure, and Google Cloud. Customers can now deploy our solutions with a single click from their preferred cloud marketplace.",
      "\"Collaboration is key to solving the complex problems of the digital age,\" said the VP of Strategic Partnerships. \"By joining forces with these industry giants, we are removing barriers to entry for our clients and ensuring that our technology works seamlessly wherever their data resides.\"",
      "Joint initiatives will include co-developed solutions for cybersecurity, edge computing, and real-time data processing. Expect to see the first fruits of this collaboration rolling out in Q1 2024."
    ],
    author: "Michael Ross",
    role: "Director of Partnerships"
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <button 
            onClick={() => navigate('/news')}
            className="text-blue-600 hover:underline font-semibold"
          >
            Return to Newsroom
          </button>
        </div>
      </div>
    );
  }

  // Get full content or fallback
  const details = articleContent[article.title] || {
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    ],
    author: "Aparaitech Team.",
    role: "Contributor"
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-16">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-300 gap-6 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                5 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Main Article */}
          <div className="md:w-3/4">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-10">
                {article.excerpt}
              </p>
              
              {details.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share / Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <span className="text-gray-500 font-medium">Tags:</span>
              {['Technology', 'Innovation', article.category, 'Enterprise'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar / Author */}
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Written By</h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {details.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{details.author}</div>
                    <div className="text-xs text-gray-500">{details.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
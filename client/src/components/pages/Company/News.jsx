import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const articles = [
    {
      title: "Aparaitech Raises Series B Funding to Accelerate AI Adoption",
      category: "Press Release",
      date: "Oct 24, 2023",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
      excerpt: "We are thrilled to announce our latest funding round led by top-tier venture capital firms."
    },
    {
      title: "How Generative AI is Transforming Enterprise Workflows",
      category: "Blog",
      date: "Oct 15, 2023",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      excerpt: "Explore the practical applications of LLMs in modern business environments."
    },
    {
      title: "Aparaitech Named 'Top Cloud Innovator' of 2023",
      category: "Awards",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      excerpt: "Recognition for our groundbreaking work in scalable cloud infrastructure."
    },
    {
      title: "New Partnership with Global Tech Giants",
      category: "Partnership",
      date: "Sep 10, 2023",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      excerpt: "Expanding our ecosystem to deliver better integrated solutions for our clients."
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      {/* HERO */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Newsroom</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest updates, press releases, and insights from the Aparaitech team.
          </p>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {articles.map((article, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate('/news-detail', { state: article })}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {article.excerpt}
                  </p>
                  <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
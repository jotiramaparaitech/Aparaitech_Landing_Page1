import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import InternationalPartner1 from "../../../assets/blog/internationalpartner/InternationalPartner1.jpeg";
import InternationalPartner2 from "../../../assets/blog/internationalpartner/InternationalPartner2.jpeg";
import InternationalPartner3 from "../../../assets/blog/internationalpartner/InternationalPartner3.jpeg";

import companypartnership1 from "../../../assets/blog/companypartnership/companypartnership1.jpeg";
import companypartnership2 from "../../../assets/blog/companypartnership/companypartnership2.jpeg";
import companypartnership3 from "../../../assets/blog/companypartnership/companypartnership3.jpeg";
import companypartnership4 from "../../../assets/blog/companypartnership/companypartnership4.jpeg";
import companypartnership5 from "../../../assets/blog/companypartnership/companypartnership5.jpeg";

import StudentInteraction1 from "../../../assets/blog/studentinteraction/StudentInteraction1.jpeg";
import StudentInteraction2 from "../../../assets/blog/studentinteraction/StudentInteraction2.jpeg";
import StudentInteraction3 from "../../../assets/blog/studentinteraction/StudentInteraction3.jpeg";
import StudentInteraction4 from "../../../assets/blog/studentinteraction/StudentInteraction4.jpeg";
import StudentInteraction5 from "../../../assets/blog/studentinteraction/StudentInteraction5.jpeg";
import StudentInteraction6 from "../../../assets/blog/studentinteraction/StudentInteraction6.jpeg";
import StudentInteraction7 from "../../../assets/blog/studentinteraction/StudentInteraction7.jpeg";
import StudentInteraction8 from "../../../assets/blog/studentinteraction/StudentInteraction8.jpeg";
import StudentInteraction9 from "../../../assets/blog/studentinteraction/StudentInteraction9.jpeg";
import StudentInteraction10 from "../../../assets/blog/studentinteraction/StudentInteraction10.jpeg";
import StudentInteraction11 from "../../../assets/blog/studentinteraction/StudentInteraction11.jpeg";
import StudentInteraction12 from "../../../assets/blog/studentinteraction/StudentInteraction12.jpeg";
import StudentInteraction13 from "../../../assets/blog/studentinteraction/StudentInteraction13.jpeg";
import StudentInteraction14 from "../../../assets/blog/studentinteraction/StudentInteraction14.jpeg";
import StudentInteraction15 from "../../../assets/blog/studentinteraction/StudentInteraction15.jpeg";

import team1 from "../../../assets/blog/ourteam/team1.jpeg";
import team2 from "../../../assets/blog/ourteam/team2.jpeg";
import team3 from "../../../assets/blog/ourteam/team3.jpeg";

import Celebrate1 from "../../../assets/blog/celebration/Celebrate1.jpeg";
import Celebrate2 from "../../../assets/blog/celebration/Celebrate2.jpeg";
import Celebrate3 from "../../../assets/blog/celebration/Celebrate3.jpeg";
import Celebrate4 from "../../../assets/blog/celebration/Celebrate4.jpeg";
import Celebrate5 from "../../../assets/blog/celebration/Celebrate5.jpeg";
import Celebrate6 from "../../../assets/blog/celebration/Celebrate6.jpeg";

const categories = [
  {
    id: 'company-blogs',
    title: "Company Blogs",
    desc: "Insights, updates, and stories from Aparaitech.",
    links: [
      {
        title: "Startup Journey",
        desc: "Behind-the-scenes look at how Aparaitech grew from an idea into a company.",
        thumbnail: Celebrate3,
        slides: [
          { image: Celebrate3, text: "" },
          { image: Celebrate4, text: "" },
          { image: Celebrate5, text: "" },
        ],
      },
      {
        title: "Product Updates",
        desc: "We continuously improve our platform with new features and improvements.",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        slides: [
          {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            text: "We continuously improve our platform features.",
          },
        ],
      },
      {
        title: "We Celebrate",
        desc: "Milestones, wins, and moments that define our culture at Aparaitech.",
        thumbnail: Celebrate1,
        slides: [
          { image: Celebrate1, text: "" },
          { image: Celebrate2, text: "" },
          { image: Celebrate3, text: "" },
          { image: Celebrate4, text: "" },
          { image: Celebrate5, text: "" },
          { image: Celebrate6, text: "" },
        ],
      },
    ],
  },
  {
    id: 'collaborations',
    title: "Collaborations",
    desc: "Our partnerships and collaborative success stories.",
    links: [
      {
        title: "International Collaboration",
        desc: "We partner with global companies to build scalable, impactful solutions.",
        thumbnail: InternationalPartner1,
        slides: [
          { image: InternationalPartner1, text: "We partner with companies to build scalable solutions." },
          { image: InternationalPartner2, text: "We partner with companies to build scalable solutions." },
          { image: InternationalPartner3, text: "We partner with companies to build scalable solutions." },
        ],
      },
      {
        title: "Company Partnerships",
        desc: "Strategic alliances that expand our reach and capabilities.",
        thumbnail: companypartnership1,
        slides: [
          {
            image: "https://media.licdn.com/dms/image/v2/D4D22AQElx0nDI-Bhmg/feedshare-shrink_1280/B4DZ126WqrJYAM-/0/1775816502273?e=1778112000&v=beta&t=gyPoLVHzy5ocZeMJa2auG9kS0dr2s8wp9sXbN_M6ajY",
            text: "We partner with companies to build scalable solutions.",
          },
          {
            image: "https://media.licdn.com/dms/image/v2/D4D22AQElx0nDI-Bhmg/feedshare-shrink_1280/B4DZ126WqrJYAM-/0/1775816502273?e=1778112000&v=beta&t=gyPoLVHzy5ocZeMJa2auG9kS0dr2s8wp9sXbN_M6ajY",
            text: "We partner with companies to build scalable solutions.",
          },
          { image: companypartnership1, text: "" },
          { image: companypartnership2, text: "" },
          { image: companypartnership3, text: "" },
          { image: companypartnership4, text: "" },
          { image: companypartnership5, text: "" },
        ],
      },
      {
        title: "Startup Collaborations",
        desc: "Helping early-stage startups accelerate growth through technology.",
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
        slides: [
          {
            image: "",
            text: "Helping startups grow with technology.",
          },
          {
            image: "",
            text: "Helping startups grow with technology.",
          },
          {
            image: "https://media.licdn.com/dms/image/v2/D4D22AQFGkLn51rrreA/feedshare-shrink_2048_1536/B4DZ1N0USZKUAk-/0/1775127053705?e=1778112000&v=beta&t=2MOzNH9_2gZpN9k9N7X4stBKa8SaTBgbP_4uvqReUDI",
            text: "Helping startups grow with technology.",
          },
        ],
      },
    ],
  },
  {
    id: 'company-blogs',
    title: "Company Blogs",
    desc: "Stories from Aparaitech.",
    links: [
      {
        title: "Student Interaction",
        desc: "Our team visits engineering colleges and conducts hands-on sessions for students.",
        thumbnail: StudentInteraction1,
        slides: [
          { image: StudentInteraction1, text: "SVPM College of Engineering, Malegaon BK — practical, industry-focused Java training to build job-ready skills." },
          { image: StudentInteraction2, text: "DHB Soni College, Solapur — induction sessions covering corporate culture, industry expectations, and career growth at Aparaitech." },
          { image: StudentInteraction3, text: "DHB Soni College, Solapur — induction sessions covering corporate culture, industry expectations, and career growth at Aparaitech." },
          { image: StudentInteraction4, text: "" },
          { image: StudentInteraction5, text: "" },
          { image: StudentInteraction6, text: "" },
          { image: StudentInteraction7, text: "" },
          { image: StudentInteraction8, text: "" },
          { image: StudentInteraction9, text: "" },
          { image: StudentInteraction10, text: "" },
          { image: StudentInteraction11, text: "" },
          { image: StudentInteraction12, text: "" },
          { image: StudentInteraction13, text: "" },
          { image: StudentInteraction14, text: "" },
          { image: StudentInteraction15, text: "" },
        ],
      },
      {
        title: "Our Team",
        desc: "Meet the passionate people behind Aparaitech's technology and culture.",
        thumbnail: team1,
        slides: [
          { image: team1, text: "Meet the passionate team behind Aparaitech's success." },
          { image: team2, text: "Meet the passionate team behind Aparaitech's success." },
          { image: team3, text: "Meet the passionate team behind Aparaitech's success." },
        ],
      },
    ],
  },
];

/* ─── Category badge colour map ─── */
const badgeColors = {
  'company-blogs': 'bg-blue-100 text-blue-700',
  'collaborations': 'bg-green-100 text-green-700',
};

/* ─── Modal Component ─── */
const Modal = ({ item, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = item.slides;

  const next = useCallback(() =>
    setCurrentSlide(p => (p === slides.length - 1 ? 0 : p + 1)), [slides.length]);

  const prev = () =>
    setCurrentSlide(p => (p === 0 ? slides.length - 1 : p - 1));

  /* auto-advance */
  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const slide = slides[currentSlide];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.80)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative">

        {/* ── Close ── */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-red-600 text-white flex items-center justify-center text-xl font-bold transition-colors duration-200"
          aria-label="Close"
        >
          ×
        </button>

        {/* ── Image area ── */}
        <div className="relative bg-black" style={{ height: '420px' }}>
          {slide.image ? (
            <img
              key={currentSlide}
              src={slide.image}
              alt={`${item.title} – slide ${currentSlide + 1}`}
              className="w-full h-full object-contain"
              style={{ animation: 'fadeIn 0.35s ease' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              No image available
            </div>
          )}

          {/* slide counter pill */}
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/55 text-white text-xs px-3 py-1 rounded-full select-none">
            {currentSlide + 1} / {slides.length}
          </span>

          {/* Prev / Next arrows — only when more than 1 slide */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-150"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-150"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}
                aria-label="Next"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="px-6 py-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
          {slide.text && (
            <p className="text-gray-600 text-sm leading-relaxed">{slide.text}</p>
          )}

          {/* Dot indicators */}
          {slides.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === currentSlide
                      ? 'w-5 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* fade-in keyframe */}
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
};

/* ─── Blog Card ─── */
const BlogCard = ({ item, categoryId, categoryTitle, onOpen }) => (
    <div
      onClick={() => onOpen(item)}
      className="max-w-6xl mx-auto px-6"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
  
      {/* CONTENT */}
      <div className="pt-4">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline leading-snug">
          {item.title}
        </h3>
  
        {/* DATE + CATEGORY */}
        <p className="text-xs text-gray-500 mt-2">
          April 9, 2026 • {categoryTitle}
        </p>
  
        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );

/* ─── Main Blog Page ─── */
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'company-blogs', label: 'Company Blogs' },
    { id: 'collaborations', label: 'Collaborations' },
  ];

  const filteredCategories = useMemo(() => {
    let filtered = categories;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.id === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered
        .map(cat => ({
          ...cat,
          links: cat.links.filter(link =>
            link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            link.desc.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter(cat => cat.links.length > 0);
    }
    return filtered;
  }, [selectedCategory, searchTerm]);

  /* flatten all cards with their parent category info */
  const allCards = useMemo(() =>
    filteredCategories.flatMap(cat =>
      cat.links.map(link => ({ ...link, categoryId: cat.id, categoryTitle: cat.title }))
    ),
    [filteredCategories]
  );

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-[#0f172a] text-white py-20 text-center px-4">
        <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">Aparaitech</p>
        <h1 className="text-4xl font-bold mb-3">Explore Our Blogs &amp; Collaborations</h1>
        <p className="text-slate-400 text-base mb-8 max-w-md mx-auto">
          Stories, partnerships, and moments from the Aparaitech journey.
        </p>

        {/* Search */}
        <div className="flex items-center gap-2 max-w-md mx-auto bg-white/10 border border-white/20 rounded-xl px-4 py-2">
          <svg width="16" height="16" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search blogs, collaborations…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-white placeholder-slate-400 text-sm flex-1"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-slate-400 hover:text-white text-lg leading-none">×</button>
          )}
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="flex gap-2 justify-center flex-wrap px-4 py-6 border-b border-gray-100">
        {filterButtons.map(btn => (
          <button
            key={btn.id}
            onClick={() => setSelectedCategory(btn.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
              selectedCategory === btn.id
                ? 'bg-[#0f172a] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* ── CARDS GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {allCards.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No results found for &ldquo;{searchTerm}&rdquo;</p>
          </div>
        ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {allCards.map((item, i) => (
              <BlogCard
                key={i}
                item={item}
                categoryId={item.categoryId}
                categoryTitle={item.categoryTitle}
                onOpen={setSelectedItem}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {/* ── CTA ── */}
      <div className="text-center py-12 bg-gray-50 border-t border-gray-200 mt-4">
        <p className="text-gray-700 text-base">
          Want to collaborate with us?{' '}
          <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact Us →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Blog;
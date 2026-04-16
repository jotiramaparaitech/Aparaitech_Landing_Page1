import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Java Workshop Session",
      category: "Web Development",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445717531413278720?compact=1",
      link: "https://www.linkedin.com/"
    },
    {
      title: "Full Stack Java Event",
      category: "Web Development",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445739612481953792?compact=1",
      link: "https://www.linkedin.com/"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445782477169795072?compact=1",
      link: "https://www.linkedin.com/posts/rohan-jagtap-b83881311_aparaitech-hiring-careers-ugcPost-7445782477169795072-Ws7s/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445739612481953792?compact=1",
      link: "https://www.linkedin.com/posts/harshad-dhaigude-40653a2b0_aparaitech-hiring-careers-ugcPost-7445739612481953792-9oqJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445742848412524544?compact=1",
      link: "https://www.linkedin.com/posts/pooja-chavan7270_aparaitech-hiring-careers-ugcPost-7445742848412524544-p6Zz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    },
    {
      title: "Aparaitech Activity",
      category: "Enterprise",
      type: "video",
      video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445738360092000256?compact=1",
      link: "https://www.linkedin.com/posts/pooja-chavan7270_aparaitech-hiring-careers-ugcPost-7445742848412524544-p6Zz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ5x2IBm41Hen-TDzd-DSFj4GyXYNo5Wkk"
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of digital products, websites, and enterprise systems
            we've crafted with precision and passion.
          </p>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['All', 'Web Development', 'Enterprise'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {project.type === "video" ? (
                  <iframe
                    src={project.video}
                    className="w-full h-80"
                    title={project.title}
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                )}

                <div className="p-5">
                  <span className="text-blue-500 text-sm font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-gray-900 text-xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Have a project in mind?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          Let's Talk
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
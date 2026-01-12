import React from 'react';

const OurValues = () => {
  const values = [
    {
      title: "Innovation First",
      desc: "We constantly push boundaries to create solutions that define the future.",
      icon: "💡",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Integrity & Trust",
      desc: "We build relationships based on transparency, honesty, and mutual respect.",
      icon: "🤝",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Customer Obsession",
      desc: "Your success is our success. We go above and beyond to deliver value.",
      icon: "❤️",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Excellence",
      desc: "We don't settle for good. We strive for greatness in every line of code.",
      icon: "⭐",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Collaboration",
      desc: "Great things are built together. We foster a culture of teamwork.",
      icon: "🧩",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Sustainability",
      desc: "We are committed to building a sustainable future through technology.",
      icon: "🌱",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      {/* HERO */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Core Values</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and drive our success.
          </p>
        </div>
      </div>

      {/* VALUES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${val.color}`}>
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurValues;
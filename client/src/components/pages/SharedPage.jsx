import React from 'react';

const SharedPage = ({ category, title, subtitle }) => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
            {category}
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Placeholder content */}
        <div className="text-center">
          <p className="text-gray-400">Content for this page is coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default SharedPage;
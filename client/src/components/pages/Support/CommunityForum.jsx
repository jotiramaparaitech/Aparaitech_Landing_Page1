import React from 'react';

const CommunityForum = () => {
  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HEADER */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
            <p className="text-indigo-200">Connect, share, and learn from other developers.</p>
          </div>
          <button className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
            Start New Discussion
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                {['All Discussions', 'Announcements', 'General', 'Q&A', 'Showcase', 'Feature Requests'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className={`block px-3 py-2 rounded-lg ${idx === 0 ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-xs font-bold text-indigo-700">U{i}</div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">User Name</div>
                      <div className="text-xs text-gray-500">1.2k points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-4">
            {[
              { title: "Best practices for React state management?", author: "Sarah J.", replies: 24, views: 156, tag: "Q&A" },
              { title: "Introducing Aparaitech v2.0 - New Features", author: "Team Aparaitech", replies: 105, views: 5420, tag: "Announcements", pinned: true },
              { title: "How to integrate Payment Gateway API", author: "Mike Chen", replies: 12, views: 89, tag: "General" },
              { title: "Feature Request: Dark Mode for Dashboard", author: "Alex R.", replies: 45, views: 320, tag: "Feature Requests" },
              { title: "My experience migrating to Cloud", author: "DevOps_Guru", replies: 8, views: 67, tag: "Showcase" },
            ].map((topic, idx) => (
              <div key={idx} className={`p-6 rounded-xl border ${topic.pinned ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-gray-200'} hover:shadow-md transition-shadow cursor-pointer`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {topic.pinned && <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded">PINNED</span>}
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{topic.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-indigo-600">{topic.title}</h3>
                    <p className="text-sm text-gray-500">Posted by <span className="font-medium text-gray-700">{topic.author}</span></p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500 flex-shrink-0">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{topic.replies}</div>
                      <div className="text-xs">Replies</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{topic.views}</div>
                      <div className="text-xs">Views</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
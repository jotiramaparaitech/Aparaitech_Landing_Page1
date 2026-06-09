import React, { useState, useEffect } from 'react';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Discussions');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewDiscussionModal, setShowNewDiscussionModal] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    content: '',
    category: 'General',
    author: 'Current User'
  });
  const [discussions, setDiscussions] = useState([
    { 
      id: 1,
      title: "Best practices for React state management?", 
      author: "Sarah J.", 
      replies: 24, 
      views: 156, 
      tag: "Q&A",
      timestamp: "2 hours ago",
      lastReply: "30 minutes ago"
    },
    { 
      id: 2,
      title: "Introducing Aparaitech v2.0 - New Features", 
      author: "Team Aparaitech", 
      replies: 105, 
      views: 5420, 
      tag: "Announcements", 
      pinned: true,
      timestamp: "1 day ago",
      lastReply: "1 hour ago"
    },
    { 
      id: 3,
      title: "How to integrate Payment Gateway API", 
      author: "Mike Chen", 
      replies: 12, 
      views: 89, 
      tag: "General",
      timestamp: "3 hours ago",
      lastReply: "1 hour ago"
    },
    { 
      id: 4,
      title: "Feature Request: Dark Mode for Dashboard", 
      author: "Alex R.", 
      replies: 45, 
      views: 320, 
      tag: "Feature Requests",
      timestamp: "5 hours ago",
      lastReply: "2 hours ago"
    },
    { 
      id: 5,
      title: "My experience migrating to Cloud", 
      author: "DevOps_Guru", 
      replies: 8, 
      views: 67, 
      tag: "Showcase",
      timestamp: "6 hours ago",
      lastReply: "3 hours ago"
    },
  ]);

  const categories = ['All Discussions', 'Announcements', 'General', 'Q&A', 'Showcase', 'Feature Requests'];
  const topContributors = [
    { name: 'Sarah Johnson', points: 1250, avatar: 'SJ' },
    { name: 'Mike Chen', points: 980, avatar: 'MC' },
    { name: 'Alex Rodriguez', points: 856, avatar: 'AR' }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'All Discussions' || discussion.tag === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewDiscussion = () => {
    if (newDiscussion.title.trim() && newDiscussion.content.trim()) {
      const newTopic = {
        id: discussions.length + 1,
        title: newDiscussion.title,
        author: newDiscussion.author,
        replies: 0,
        views: 0,
        tag: newDiscussion.category,
        timestamp: "Just now",
        lastReply: "Just now"
      };
      setDiscussions([newTopic, ...discussions]);
      setNewDiscussion({ title: '', content: '', category: 'General', author: 'Current User' });
      setShowNewDiscussionModal(false);
    }
  };

  const handleDiscussionClick = (discussionId) => {
    console.log(`Navigate to discussion ${discussionId}`);
    // In a real app, this would navigate to the discussion detail page
  };

  return (
    <div className="pt-16 min-h-screen bg-white font-sans">
      
      {/* HEADER */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
            <p className="text-indigo-200">Connect, share, and learn from other developers.</p>
          </div>
          <button 
            onClick={() => setShowNewDiscussionModal(true)}
            className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Start New Discussion
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* SEARCH AND FILTER BAR */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-gray-900 placeholder-gray-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {filteredDiscussions.length} discussions
            </span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-gray-900">
              <option>Sort by Latest</option>
              <option>Sort by Popular</option>
              <option>Sort by Most Replies</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? 'bg-indigo-100 text-indigo-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {topContributors.map((contributor, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-xs font-bold text-indigo-700">
                      {contributor.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{contributor.name}</div>
                      <div className="text-xs text-gray-500">{contributor.points.toLocaleString()} points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h3 className="font-bold text-indigo-900 mb-2">Forum Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Topics</span>
                  <span className="font-medium text-gray-900">{discussions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Replies</span>
                  <span className="font-medium text-gray-900">
                    {discussions.reduce((sum, d) => sum + d.replies, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Users</span>
                  <span className="font-medium text-gray-900">1,234</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-4">
            {filteredDiscussions.length > 0 ? (
              filteredDiscussions.map((discussion) => (
                <div 
                  key={discussion.id}
                  onClick={() => handleDiscussionClick(discussion.id)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all hover:shadow-md ${
                    discussion.pinned 
                      ? 'bg-indigo-50 border-indigo-200' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {discussion.pinned && (
                          <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded">PINNED</span>
                        )}
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {discussion.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-indigo-600 transition-colors">
                        {discussion.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Posted by <span className="font-medium text-gray-700">{discussion.author}</span> • {discussion.timestamp}
                      </p>
                      {discussion.lastReply && (
                        <p className="text-xs text-gray-400">
                          Last reply {discussion.lastReply}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500 flex-shrink-0">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{discussion.replies}</div>
                        <div className="text-xs">Replies</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{discussion.views}</div>
                        <div className="text-xs">Views</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">No discussions found</div>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NEW DISCUSSION MODAL */}
      {showNewDiscussionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Start New Discussion</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newDiscussion.title}
                    onChange={(e) => setNewDiscussion({...newDiscussion, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-gray-900 placeholder-gray-500"
                    placeholder="Enter discussion title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newDiscussion.category}
                    onChange={(e) => setNewDiscussion({...newDiscussion, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-gray-900"
                  >
                    <option value="General">General</option>
                    <option value="Q&A">Q&A</option>
                    <option value="Showcase">Showcase</option>
                    <option value="Feature Requests">Feature Requests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={newDiscussion.content}
                    onChange={(e) => setNewDiscussion({...newDiscussion, content: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-gray-900 placeholder-gray-500"
                    rows={6}
                    placeholder="Write your discussion content..."
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                onClick={() => setShowNewDiscussionModal(false)}
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleNewDiscussion}
                disabled={!newDiscussion.title.trim() || !newDiscussion.content.trim()}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Post Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;
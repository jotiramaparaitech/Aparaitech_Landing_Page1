import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Company', icon: 'hexagon' },
    { name: 'GlobalTech', icon: 'shield' },
    { name: 'NexSolutions', icon: 'stack' },
    { name: 'InnovaCorp', icon: 'arrow' }
  ];

  const getIconSVG = (iconType, uniqueId) => {
    switch (iconType) {
      case 'hexagon':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L50 15V35L30 45L10 35V15L30 5Z" stroke={`url(#gradient-${uniqueId})`} strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id={`gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'shield':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L45 12V28C45 38 30 48 30 48C30 48 15 38 15 28V12L30 5Z" stroke={`url(#gradient2-${uniqueId})`} strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id={`gradient2-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'stack':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="15" y="20" width="30" height="8" stroke={`url(#gradient3-${uniqueId})`} strokeWidth="2" fill="none"/>
            <rect x="15" y="32" width="30" height="8" stroke={`url(#gradient3-${uniqueId})`} strokeWidth="2" fill="none"/>
            <rect x="15" y="44" width="30" height="8" stroke={`url(#gradient3-${uniqueId})`} strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id={`gradient3-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'arrow':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L45 25H35V45H25V25H15L30 5Z" stroke={`url(#gradient4-${uniqueId})`} strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id={`gradient4-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f] relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white via-white to-[#a78bfa] bg-clip-text text-transparent">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-[rgba(30,30,45,0.6)] backdrop-blur-[10px] border border-[rgba(124,58,237,0.2)] rounded-2xl p-12 text-center transition-all flex flex-col items-center gap-6 hover:-translate-y-2 hover:border-[rgba(124,58,237,0.5)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)]"
            >
              <div className="flex items-center justify-center transition-transform hover:scale-110">
                {getIconSVG(partner.icon, index)}
              </div>
              <h3 className="text-2xl font-bold text-white m-0">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

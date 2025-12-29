import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Company', icon: 'hexagon' },
    { name: 'GlobalTech', icon: 'shield' },
    { name: 'NexSolutions', icon: 'stack' },
    { name: 'InnovaCorp', icon: 'arrow' }
  ];

  const getIconSVG = (iconType) => {
    switch (iconType) {
      case 'hexagon':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L50 15V35L30 45L10 35V15L30 5Z" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'shield':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L45 12V28C45 38 30 48 30 48C30 48 15 38 15 28V12L30 5Z" stroke="url(#gradient2)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'stack':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="15" y="20" width="30" height="8" stroke="url(#gradient3)" strokeWidth="2" fill="none"/>
            <rect x="15" y="32" width="30" height="8" stroke="url(#gradient3)" strokeWidth="2" fill="none"/>
            <rect x="15" y="44" width="30" height="8" stroke="url(#gradient3)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'arrow':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L45 25H35V45H25V25H15L30 5Z" stroke="url(#gradient4)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
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
    <section className="partners">
      <div className="partners-container">
        <h2 className="section-title">
          Innovative Technology Solutions to Drive Your Success
        </h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">
                {getIconSVG(partner.icon)}
              </div>
              <h3 className="partner-name">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


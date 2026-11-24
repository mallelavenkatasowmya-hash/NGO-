import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Calendar, Megaphone, Users } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (targetPath) => {
    if (targetPath === '/') return path === '/';
    return path.startsWith(targetPath);
  };

  return (
    <nav className="mobile-app-bottom-dock" aria-label="Mobile Navigation Bar">
      <div className="mobile-dock-inner">
        {/* 1. Activities */}
        <Link
          to="/activities"
          className={`mobile-dock-item ${isActive('/activities') ? 'active' : ''}`}
        >
          <div className="mobile-dock-icon-wrap">
            <Compass size={21} strokeWidth={isActive('/activities') ? 2.5 : 2} />
          </div>
          <span className="mobile-dock-label">Activities</span>
        </Link>

        {/* 2. Events & Drives */}
        <Link
          to="/events"
          className={`mobile-dock-item ${isActive('/events') ? 'active' : ''}`}
        >
          <div className="mobile-dock-icon-wrap">
            <Calendar size={20} strokeWidth={isActive('/events') ? 2.5 : 2} />
          </div>
          <span className="mobile-dock-label">Drives</span>
        </Link>

        {/* 3. Center Elevated Home Button (inspired by modern mobile app design) */}
        <div className="mobile-dock-center-slot">
          <Link
            to="/"
            className={`mobile-dock-center-btn ${isActive('/') ? 'active' : ''}`}
            aria-label="Home"
          >
            <div className="mobile-dock-center-circle">
              <Home size={22} strokeWidth={2.4} color={isActive('/') ? '#ffffff' : '#065f46'} />
            </div>
            <span className="mobile-dock-label-center">Home</span>
          </Link>
        </div>

        {/* 4. Announcements / Updates */}
        <Link
          to="/announcements"
          className={`mobile-dock-item ${isActive('/announcements') ? 'active' : ''}`}
        >
          <div className="mobile-dock-icon-wrap">
            <Megaphone size={20} strokeWidth={isActive('/announcements') ? 2.5 : 2} />
          </div>
          <span className="mobile-dock-label">Updates</span>
        </Link>

        {/* 5. Join Us / About */}
        <Link
          to="/about"
          className={`mobile-dock-item ${isActive('/about') || isActive('/register') ? 'active' : ''}`}
        >
          <div className="mobile-dock-icon-wrap">
            <Users size={20} strokeWidth={isActive('/about') || isActive('/register') ? 2.5 : 2} />
          </div>
          <span className="mobile-dock-label">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;

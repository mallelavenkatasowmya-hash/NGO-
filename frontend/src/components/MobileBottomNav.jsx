import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Brush,
  Sprout,
  Waves,
  Users,
  BookOpen,
  Calendar,
  Clock,
  Megaphone,
  FileText,
  Info,
  Target,
  Star,
  ChevronUp,
  X,
  ArrowRight,
  Compass,
  Phone
} from 'lucide-react';

const mobileNavSections = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: Home,
    hasSubmenu: false
  },
  {
    id: 'activities',
    label: 'Activities',
    fullTitle: 'Our Activities',
    path: '/activities',
    icon: Compass,
    hasSubmenu: true,
    children: [
      { label: 'Cleanliness Drives', path: '/activities/cleanliness', icon: Brush, desc: 'Weekend ghat & riverbank sanitation' },
      { label: 'Tree Plantation', path: '/activities/plantation', icon: Sprout, desc: 'Native riparian afforestation drives' },
      { label: 'River Conservation', path: '/activities/conservation', icon: Waves, desc: 'Water testing & outfall net defense' },
      { label: 'Community Programs', path: '/activities/community', icon: Users, desc: 'Civic assemblies & eco-stewardship' },
    ]
  },
  {
    id: 'awareness',
    label: 'Awareness',
    fullTitle: 'Awareness Programs',
    path: '/awareness',
    icon: BookOpen,
    hasSubmenu: true,
    children: [
      { label: 'School & College Drives', path: '/awareness/schools', icon: BookOpen, desc: 'Eco-clubs & student youth modules' },
      { label: 'Public Workshops', path: '/awareness/workshops', icon: Users, desc: 'Devotee & citizen training sessions' },
      { label: 'Youth Campaigns', path: '/awareness/campaigns', icon: Megaphone, desc: 'Basin-wide environmental rallies' },
    ]
  },
  {
    id: 'events',
    label: 'Events',
    fullTitle: 'Drives & Events',
    path: '/events',
    icon: Calendar,
    hasSubmenu: true,
    children: [
      { label: 'Upcoming Drives & Events', path: '/events/upcoming', icon: Calendar, desc: 'Register for scheduled weekend drives' },
      { label: 'Volunteer Meetings', path: '/events/volunteer-meetings', icon: Users, desc: 'Monthly chapter strategy assemblies' },
      { label: 'Past Reports & Audits', path: '/events/past-reports', icon: Clock, desc: 'Public records of diverted debris' },
    ]
  },
  {
    id: 'announcements',
    label: 'Updates',
    fullTitle: 'Announcements',
    path: '/announcements',
    icon: Megaphone,
    hasSubmenu: true,
    children: [
      { label: 'Latest News & Stories', path: '/announcements/news', icon: Megaphone, desc: 'Field dispatches & ground reporting' },
      { label: 'Press Releases & Statements', path: '/announcements/press', icon: FileText, desc: 'Official communiqués & white papers' },
    ]
  },
  {
    id: 'about',
    label: 'About Us',
    fullTitle: 'About Us',
    path: '/about',
    icon: Info,
    hasSubmenu: true,
    children: [
      { label: 'About Our NGO', path: '/about/ngo', icon: Info, desc: 'History, leadership & legal registration' },
      { label: 'Mission & Vision', path: '/about/mission', icon: Target, desc: 'Core charter for Godavari conservation' },
      { label: 'Our Objectives', path: '/about/objectives', icon: Star, desc: 'Five operational targets & metrics' },
      { label: 'Contact Us', path: '/contact', icon: Phone, desc: 'Helplines, secretariat desk & inquiry form' },
    ]
  }
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null);

  // Close popup whenever route changes
  useEffect(() => {
    setActivePopup(null);
  }, [location.pathname]);

  const isSectionActive = (section) => {
    if (section.path === '/') {
      return location.pathname === '/';
    }
    if (section.id === 'about' && location.pathname === '/contact') {
      return true;
    }
    return location.pathname.startsWith(section.path);
  };

  const handleItemClick = (e, section) => {
    if (!section.hasSubmenu) {
      setActivePopup(null);
      return; // Let normal Link navigation happen
    }

    // If section has sub-menu, toggle the popup sheet
    e.preventDefault();
    if (activePopup === section.id) {
      setActivePopup(null);
    } else {
      setActivePopup(section.id);
    }
  };

  const currentPopupSection = mobileNavSections.find(s => s.id === activePopup);

  return (
    <>
      {/* 1. Backdrop Overlay when a popup sub-menu is open */}
      {activePopup && (
        <div
          className="mobile-dock-backdrop"
          onClick={() => setActivePopup(null)}
          aria-hidden="true"
        />
      )}

      {/* 2. Floating Popover Sub-Menu Sheet */}
      {currentPopupSection && (
        <div className="mobile-dock-popover" role="dialog" aria-modal="true">
          <div className="mobile-dock-popover-header">
            <div className="mobile-dock-popover-title-wrap">
              <span className="mobile-dock-popover-badge">SECTION PORTAL</span>
              <h3 className="mobile-dock-popover-title">{currentPopupSection.fullTitle}</h3>
            </div>
            <button
              onClick={() => setActivePopup(null)}
              className="mobile-dock-popover-close"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Primary Main Section Link */}
          <Link
            to={currentPopupSection.path}
            className="mobile-dock-popover-mainlink"
            onClick={() => setActivePopup(null)}
          >
            <span>Explore All {currentPopupSection.fullTitle}</span>
            <ArrowRight size={15} />
          </Link>

          {/* Subpages Grid / List */}
          <div className="mobile-dock-popover-list">
            {currentPopupSection.children.map((child) => {
              const ChildIcon = child.icon;
              const isChildActive = location.pathname === child.path;

              return (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`mobile-dock-popover-item ${isChildActive ? 'active' : ''}`}
                  onClick={() => setActivePopup(null)}
                >
                  <div className="mobile-dock-popover-item-icon">
                    <ChildIcon size={18} />
                  </div>
                  <div className="mobile-dock-popover-item-text">
                    <div className="mobile-dock-popover-item-title">{child.label}</div>
                    <div className="mobile-dock-popover-item-desc">{child.desc}</div>
                  </div>
                  {isChildActive && <span className="mobile-dock-active-indicator" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Bottom Dock Navigation Bar - ALL 6 SECTIONS */}
      <nav className="mobile-app-bottom-dock" aria-label="Mobile Bottom Navigation">
        <div className="mobile-dock-inner">
          {mobileNavSections.map((sec) => {
            const IconComponent = sec.icon;
            const active = isSectionActive(sec);
            const isPopupOpen = activePopup === sec.id;

            return (
              <Link
                key={sec.id}
                to={sec.path}
                onClick={(e) => handleItemClick(e, sec)}
                className={`mobile-dock-item ${active ? 'active' : ''} ${isPopupOpen ? 'popover-open' : ''}`}
                aria-haspopup={sec.hasSubmenu ? 'true' : 'false'}
                aria-expanded={isPopupOpen}
              >
                <div className="mobile-dock-icon-wrap">
                  <IconComponent size={19} strokeWidth={active ? 2.5 : 1.9} />
                  {sec.hasSubmenu && (
                    <span className={`mobile-dock-chevron-dot ${active ? 'active-dot' : ''}`} />
                  )}
                </div>
                <span className="mobile-dock-label">{sec.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;

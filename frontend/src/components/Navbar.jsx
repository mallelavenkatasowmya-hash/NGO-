import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Home,
  ChevronDown,
  Info,
  Target,
  Star,
  Brush,
  Sprout,
  Waves,
  Users,
  BookOpen,
  Calendar,
  Clock,
  Megaphone,
  FileText,
  Shield,
  LogOut,
  Menu,
  X,
  User,
} from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const { user, isAdmin, isMember, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navMenuItems = [
    {
      label: 'Home',
      path: '/',
      isHome: true,
    },
    {
      label: 'About Us',
      path: '/about',
      hasDropdown: true,
      children: [
        { label: 'About Our NGO', path: '/about/ngo', icon: Info },
        { label: 'Our Mission & Vision', path: '/about/mission', icon: Target },
        { label: 'Our Objectives', path: '/about/objectives', icon: Star },
      ],
    },
    {
      label: 'Our Activities',
      path: '/activities',
      hasDropdown: true,
      children: [
        { label: 'Cleanliness Drives', path: '/activities/cleanliness', icon: Brush },
        { label: 'Tree Plantation', path: '/activities/plantation', icon: Sprout },
        { label: 'River Conservation', path: '/activities/conservation', icon: Waves },
        { label: 'Community Programs', path: '/activities/community', icon: Users },
      ],
    },
    {
      label: 'Awareness Programs',
      path: '/awareness',
      hasDropdown: true,
      children: [
        { label: 'School & College Drives', path: '/awareness', icon: BookOpen },
        { label: 'Public Workshops', path: '/awareness', icon: Users },
        { label: 'Youth Campaigns', path: '/awareness', icon: Megaphone },
      ],
    },
    {
      label: 'Drives & Events',
      path: '/events',
      hasDropdown: true,
      children: [
        { label: 'Upcoming Drives & Events', path: '/events', icon: Calendar },
        { label: 'Volunteer Drives & Meetings', path: '/events', icon: Users },
        { label: 'Past Drives & Reports', path: '/events', icon: Clock },
      ],
    },
    {
      label: 'Announcements',
      path: '/announcements',
      hasDropdown: true,
      children: [
        { label: 'Latest News', path: '/announcements', icon: Megaphone },
        { label: 'Press Releases', path: '/announcements', icon: FileText },
      ],
    },
    {
      label: 'Contact Us',
      path: '/contact',
      hasDropdown: false,
    },
  ];

  const isCurrentActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.path);
  };

  return (
    <header className="eco-header">
      <div className="eco-nav-container">
        {/* Brand Logo with Vertical Divider */}
        <div className="eco-brand-wrap">
          <Link to="/" className="eco-brand-link" onClick={() => setMobileMenuOpen(false)}>
            <Logo variant="dark" size={32} />
          </Link>
          <span className="eco-nav-divider"></span>
        </div>

        {/* Desktop Navigation Links with Dropdowns */}
        <nav className="eco-desktop-nav">
          {navMenuItems.map((item) => {
            if (item.isHome) {
              const active = location.pathname === '/';
              return (
                <Link
                  key={item.label}
                  to="/"
                  className={`eco-nav-home-pill ${active ? 'active' : ''}`}
                >
                  <Home size={13} />
                  <span>Home</span>
                </Link>
              );
            }

            if (item.hasDropdown) {
              const isOpen = activeDropdown === item.label;
              const active = isCurrentActive(item);

              return (
                <div
                  key={item.label}
                  className={`eco-nav-dropdown-wrapper ${isOpen ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`eco-nav-link-with-arrow ${active ? 'active' : ''}`}
                    onClick={(e) => {
                      // Allow navigation or toggle
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={11} className={`eco-nav-chevron ${isOpen ? 'rotated' : ''}`} />
                  </Link>

                  {/* Dropdown Card */}
                  <div className={`eco-nav-dropdown-menu ${isOpen ? 'visible' : ''}`}>
                    {item.children.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="eco-dropdown-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="eco-drop-icon-wrap">
                            <SubIcon size={13} />
                          </span>
                          <span className="eco-drop-item-text">{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // Regular Nav Item (e.g., Contact Us)
            const active = isCurrentActive(item);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`eco-nav-link ${active ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Action: Join Us Pill */}
        <div className="eco-header-actions">
          {user && isAdmin ? (
            <div className="eco-user-actions">
              <Link to="/admin" className="btn-eco-join-pill" title="Go to Admin Dashboard">
                <Shield size={14} />
                <span>Admin Dashboard</span>
              </Link>
              <button
                onClick={handleLogout}
                className="btn-eco-logout"
                title="Sign Out"
              >
                <LogOut size={13} />
              </button>
            </div>
          ) : user && isMember ? (
            <div className="eco-user-actions">
              <Link to="/member" className="btn-eco-join-pill" title="Member Portal">
                <User size={14} />
                <span>Member Portal</span>
              </Link>
              <button
                onClick={handleLogout}
                className="btn-eco-logout"
                title="Sign Out"
              >
                <LogOut size={13} />
              </button>
            </div>
          ) : (
            <div className="eco-guest-actions">
              <Link to="/register" className="btn-eco-join-pill">
                <Users size={14} />
                <span>Join Us</span>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="eco-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="eco-mobile-drawer">
          <div className="container eco-mobile-inner">
            <Link
              to="/"
              className={`eco-mobile-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            {navMenuItems
              .filter((i) => !i.isHome)
              .map((item) => (
                <div key={item.label} className="eco-mobile-nav-group">
                  <Link
                    to={item.path}
                    className={`eco-mobile-link ${isCurrentActive(item) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>

                  {item.hasDropdown && (
                    <div className="eco-mobile-sub-list">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="eco-mobile-sub-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            <div className="eco-mobile-action-wrap">
              {user && isAdmin ? (
                <Link
                  to="/admin"
                  className="btn-eco-join-pill btn-block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Shield size={16} />
                  <span>Admin Dashboard</span>
                </Link>
              ) : user && isMember ? (
                <>
                  <Link
                    to="/member"
                    className="btn-eco-join-pill btn-block text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User size={16} />
                    <span>Open Member Portal</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn-eco-logout-block mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="d-flex flex-column gap-2">
                  <Link
                    to="/register"
                    className="btn-eco-join-pill btn-block text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Users size={16} />
                    <span>Join Us</span>
                  </Link>
                  <Link
                    to="/login"
                    className="btn-eco-login-outline btn-block text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Member Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
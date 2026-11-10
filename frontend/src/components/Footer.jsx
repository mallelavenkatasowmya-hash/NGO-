import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="eco-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Column 1: Organization & Identity */}
          <div className="footer-brand-box">
            <div className="footer-brand-title">
              <Link to="/" title="Godhavari Nadhi Paryavarana Parishubratha">
                <Logo variant="light" size={38} />
              </Link>
            </div>
            <p className="footer-tagline">
              Dedicated to preserving the divine purity, ecological vitality, and clean riverbanks of the sacred River Godavari through grassroots community action.
            </p>
            <div className="footer-org-badge">
              <ShieldCheck size={14} className="text-emerald-400 flex-shrink-0" />
              <span>Regd. Non-Profit Society #45/2018</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Our NGO</Link></li>
              <li><Link to="/activities">Cleanliness Activities</Link></li>
              <li><Link to="/awareness">Awareness Programs</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Get Involved</h4>
            <ul className="footer-link-list">
              <li><Link to="/register">Volunteer Registration</Link></li>
              <li><Link to="/login">Member Portal Login</Link></li>
              <li><Link to="/events">Upcoming Cleanups & Drives</Link></li>
              <li><Link to="/announcements">News & Updates</Link></li>
              <li><Link to="/contact">Contact & Help Desk</Link></li>
            </ul>
          </div>

          {/* Column 4: Secretariat Contact */}
          <div className="footer-nav-col footer-contact-col">
            <h4 className="footer-col-heading">Secretariat</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" />
                <span>Godavari Bund Road, Opp. Kotilingala Ghat, Rajahmundry - 533101, AP</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" />
                <a href="tel:+919848012345" className="hover:text-emerald-300 transition">
                  +91 98480 12345 / 0883 245 7890
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:contact@godhavari.org" className="hover:text-emerald-300 transition">
                  contact@godhavari.org
                </a>
              </li>
              <li className="footer-contact-item">
                <Clock size={15} className="footer-contact-icon" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Clean & Simple Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-flex">
          <p className="footer-copyright">
            &copy; {currentYear} Godhavari Nadhi Paryavarana Parishubratha. All rights reserved.
          </p>
          <div className="footer-legal-row">
            <Link to="/about">About Us</Link>
            <span className="footer-dot">•</span>
            <Link to="/contact">Contact</Link>
            <span className="footer-dot">•</span>
            <span>Rajahmundry, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

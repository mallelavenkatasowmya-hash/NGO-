import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import heroBannerImg from '../assets/hero-banner.jpg';
import {
  Users,
  Leaf,
  Waves,
  Calendar,
  Megaphone,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

const Home = () => {
  const [content, setContent] = useState(null);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [contentRes, eventsRes, announcementsRes] = await Promise.all([
          API.get('/public/content'),
          API.get('/public/events'),
          API.get('/public/announcements'),
        ]);

        setContent(contentRes.data);
        setEvents(eventsRes.data ? eventsRes.data.slice(0, 3) : []);
        setAnnouncements(announcementsRes.data ? announcementsRes.data.slice(0, 3) : []);
      } catch (err) {
        console.error('Failed to load public website content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="eco-home-wrapper">
      {/* 1. HERO SECTION - High-Res Godavari Panorama with Female Hands */}
      <section className="eco-hero-master-section">
        <div className="eco-hero-canvas-wrapper">
          <div className="eco-hero-canvas-inner">
            <img
              src={heroBannerImg}
              alt="Together for a Cleaner and Greener Tomorrow - Godhavari River Paryavarana NGO"
              className="eco-hero-panorama-img"
              loading="eager"
            />

            {/* Live Vector Typography & CTAs (100% Crystal-Clear, Razor Sharp, Zero Blur) */}
            <div className="eco-hero-content-overlay">
              <div className="eco-hero-text-block">
                <h1 className="eco-hero-main-title">
                  Together for a <br />
                  <span className="eco-title-green">Cleaner and Greener Tomorrow</span>
                </h1>
                <p className="eco-hero-subtitle">
                  Working together to create awareness, promote cleanliness, protect our environment, and build a responsible community.
                </p>

                <div className="eco-hero-buttons-overlay">
                  <Link to="/activities" className="btn-hero-primary-green">
                    <Leaf size={18} className="btn-hero-icon" />
                    <span>Explore Our Activities</span>
                    <ArrowRight size={16} className="btn-hero-arrow" />
                  </Link>
                  <Link to="/register" className="btn-hero-outline-green">
                    <Users size={18} className="btn-hero-icon" />
                    <span>Join Our Mission</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4-CARD FEATURE ROW - Exact Match to Design Image */}
      <section className="eco-perminu-cards-section">
        <div className="container">
          <div className="eco-perminu-cards-grid">
            {/* Card 1: Our Mission */}
            <div className="eco-perminu-card">
              <div className="eco-pcard-icon-wrap mint">
                <Waves size={24} className="eco-pcard-icon" />
              </div>
              <div className="eco-pcard-body">
                <h3 className="eco-pcard-title">Our Mission</h3>
                <p className="eco-pcard-desc">
                  Protect and preserve our rivers and environment.
                </p>
                <Link to="/about" className="eco-pcard-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Our Activities */}
            <div className="eco-perminu-card">
              <div className="eco-pcard-icon-wrap green">
                <Leaf size={24} className="eco-pcard-icon" />
              </div>
              <div className="eco-pcard-body">
                <h3 className="eco-pcard-title">Our Activities</h3>
                <p className="eco-pcard-desc">
                  Cleanliness drives, tree plantation and more.
                </p>
                <Link to="/activities" className="eco-pcard-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Upcoming Events */}
            <div className="eco-perminu-card">
              <div className="eco-pcard-icon-wrap emerald">
                <Calendar size={24} className="eco-pcard-icon" />
              </div>
              <div className="eco-pcard-body">
                <h3 className="eco-pcard-title">Drives & Events</h3>
                <p className="eco-pcard-desc">
                  Be part of our river cleanliness drives and community programs.
                </p>
                <Link to="/events" className="eco-pcard-link">
                  <span>View Drives & Events</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 4: Latest Announcements */}
            <div className="eco-perminu-card">
              <div className="eco-pcard-icon-wrap teal">
                <Megaphone size={24} className="eco-pcard-icon" />
              </div>
              <div className="eco-pcard-body">
                <h3 className="eco-pcard-title">Latest Announcements</h3>
                <p className="eco-pcard-desc">
                  Stay updated with our latest news.
                </p>
                <Link to="/announcements" className="eco-pcard-link">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPTIONAL LIVE COMMUNITY UPDATES (When Available) */}
      {(events.length > 0 || announcements.length > 0) && (
        <section className="eco-home-preview-section">
          <div className="container">
            <div className="eco-preview-grid">
              {/* Upcoming Events Column */}
              {events.length > 0 && (
                <div className="eco-preview-col">
                  <div className="eco-preview-header">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={20} className="text-emerald-700" />
                      <h3 className="eco-preview-title">Upcoming Drives & Events</h3>
                    </div>
                    <Link to="/events" className="eco-preview-all">
                      View All →
                    </Link>
                  </div>

                  <div className="eco-preview-list">
                    {events.slice(0, 2).map((evt) => (
                      <div key={evt._id || evt.id} className="eco-preview-item">
                        <div className="eco-preview-date-badge">
                          <span className="p-month">
                            {new Date(evt.date || Date.now()).toLocaleDateString('en-US', {
                              month: 'short',
                            })}
                          </span>
                          <span className="p-day">
                            {new Date(evt.date || Date.now()).getDate()}
                          </span>
                        </div>
                        <div className="eco-preview-item-info">
                          <h4 className="p-item-name">{evt.title}</h4>
                          <p className="p-item-meta">
                            <Clock size={13} />
                            <span>{evt.time || '07:00 AM - 10:00 AM'}</span>
                            <span className="mx-1">•</span>
                            <MapPin size={13} />
                            <span>
                              {typeof evt.location === 'object' && evt.location !== null
                                ? evt.location.venue || evt.location.riverGhat || evt.location.city || 'Godhavari Ghat'
                                : evt.location || 'Godhavari Ghat'}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Latest Announcements Column */}
              {announcements.length > 0 && (
                <div className="eco-preview-col">
                  <div className="eco-preview-header">
                    <div className="d-flex align-items-center gap-2">
                      <Megaphone size={20} className="text-emerald-700" />
                      <h3 className="eco-preview-title">Latest Announcements</h3>
                    </div>
                    <Link to="/announcements" className="eco-preview-all">
                      View All →
                    </Link>
                  </div>

                  <div className="eco-preview-list">
                    {announcements.slice(0, 2).map((item) => (
                      <div key={item._id || item.id} className="eco-preview-item">
                        <div className="eco-preview-bullet-icon">
                          <Sparkles size={16} />
                        </div>
                        <div className="eco-preview-item-info">
                          <h4 className="p-item-name">{item.title}</h4>
                          <p className="p-item-meta">
                            <span>
                              {new Date(item.createdAt || Date.now()).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
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
  const [activeSlide, setActiveSlide] = useState(0);

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
      {/* 1. HERO SECTION - Exact Match to Design Image 1 */}
      <section className="eco-hero-perminu-section">
        {/* Scenic River Landscape Background */}
        <div className="eco-hero-bg-scenery"></div>
        <div className="eco-hero-scrim-overlay"></div>

        <div className="eco-hero-container">
          <div className="eco-hero-grid">
            {/* Left Column: Hands Holding Soil Seedling Visual */}
            <div className="eco-hero-plant-col">
              <div className="eco-plant-visual-wrap">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&auto=format&fit=crop&q=80"
                  alt="Hands cradling soil with young green seedling sprout"
                  className="eco-plant-visual-img"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Hero Headline, Subtitle, and CTAs */}
            <div className="eco-hero-text-col">
              <div className="eco-hero-content-box">
                <h1 className="eco-hero-headline">
                  Together for a<br />
                  <span className="eco-headline-highlight">Cleaner and Greener Tomorrow</span>
                </h1>

                <p className="eco-hero-subtext">
                  Working together to create awareness, promote cleanliness, protect our
                  environment, and build a responsible community.
                </p>

                <div className="eco-hero-cta-group">
                  <Link to="/activities" className="btn-hero-primary-green">
                    <Leaf size={18} />
                    <span>Explore Our Activities</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link to="/register" className="btn-hero-outline-green">
                    <Users size={18} />
                    <span>Join Our Mission</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Carousel Indicator Dots Centered */}
          <div className="eco-hero-dots-row">
            <button
              onClick={() => setActiveSlide(0)}
              className={`eco-carousel-dot ${activeSlide === 0 ? 'active' : ''}`}
              aria-label="Slide 1"
            />
            <button
              onClick={() => setActiveSlide(1)}
              className={`eco-carousel-dot ${activeSlide === 1 ? 'active' : ''}`}
              aria-label="Slide 2"
            />
            <button
              onClick={() => setActiveSlide(2)}
              className={`eco-carousel-dot ${activeSlide === 2 ? 'active' : ''}`}
              aria-label="Slide 3"
            />
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4-CARD FEATURE ROW - Exact Match to Design Image 1 */}
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
                <h3 className="eco-pcard-title">Upcoming Events</h3>
                <p className="eco-pcard-desc">
                  Be part of our events and community programs.
                </p>
                <Link to="/events" className="eco-pcard-link">
                  <span>View Events</span>
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
                      <h3 className="eco-preview-title">Upcoming Events</h3>
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
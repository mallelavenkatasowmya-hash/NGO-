import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import heroBannerImg from '../assets/hero-banner.jpg';
import homePillarCleanImg from '../assets/home-pillar-clean.jpg';
import homePillarPlantImg from '../assets/home-pillar-plant.jpg';
import homePillarSchoolImg from '../assets/home-pillar-school.jpg';
import homePillarCompostImg from '../assets/home-pillar-compost.jpg';
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
  ShieldCheck,
  Scale,
  GraduationCap,
  Heart,
  CheckCircle2
} from 'lucide-react';

const homePillars = [
  {
    title: 'Ghat Cleanliness & Catch-Nets',
    tag: 'Shoreline Sanitation',
    image: homePillarCleanImg,
    path: '/activities/cleanliness',
    metric: '28.4 Tons Diverted',
    desc: 'Weekly volunteer sweeps and 22 drainage outfall bio-barrier nets preventing debris from entering River Godavari.'
  },
  {
    title: 'Riverbank Tree Afforestation',
    tag: 'Riparian Canopy',
    image: homePillarPlantImg,
    path: '/activities/plantation',
    metric: '2,500+ Saplings Planted',
    desc: 'Planting native Neem, Jamun, and Pongamia with protective guards along vulnerable erosion embankments.'
  },
  {
    title: 'School & College Eco-Drives',
    tag: 'Youth Education',
    image: homePillarSchoolImg,
    path: '/awareness/schools',
    metric: '12,500+ Students Certified',
    desc: 'Hands-on water quality test demonstrations, river science curriculum, and student ambassador charters.'
  },
  {
    title: 'Temple Floral Composting',
    tag: 'Cultural Stewardship',
    image: homePillarCompostImg,
    path: '/awareness/workshops',
    metric: '65+ Workshops Completed',
    desc: 'Transforming tons of sacred ritual flowers into nutrient bio-compost and promoting biodegradable leaf vessels.'
  }
];

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
        setEvents(Array.isArray(eventsRes.data) ? eventsRes.data.slice(0, 3) : Array.isArray(eventsRes.data?.events) ? eventsRes.data.events.slice(0, 3) : []);
        setAnnouncements(Array.isArray(announcementsRes.data) ? announcementsRes.data.slice(0, 3) : Array.isArray(announcementsRes.data?.announcements) ? announcementsRes.data.announcements.slice(0, 3) : []);
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
      {/* 1. HERO SECTION - Ultra-HD Godavari Panorama with Live Vector Typography (UNTOUCHED) */}
      <section className="eco-hero-master-section">
        <div className="eco-hero-canvas-wrapper">
          <div className="eco-hero-canvas-inner">
            <img
              src={heroBannerImg}
              alt="Together for a Cleaner and Greener Tomorrow - Godhavari River Paryavarana NGO"
              className="eco-hero-panorama-img"
              loading="eager"
            />

            {/* Live Vector Typography & CTAs (100% Vector Crisp, Zero Blur) */}
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
                    <Leaf size={17} className="btn-hero-icon" />
                    <span>Explore Our Activities</span>
                    <ArrowRight size={15} className="btn-hero-arrow" />
                  </Link>
                  <Link to="/register" className="btn-hero-outline-green">
                    <Users size={17} className="btn-hero-icon" />
                    <span>Join Our Mission</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4-CARD FEATURE ROW */}
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
                <h3 className="eco-pcard-title">Drives &amp; Events</h3>
                <p className="eco-pcard-desc">
                  Be part of our river cleanliness drives and community programs.
                </p>
                <Link to="/events" className="eco-pcard-link">
                  <span>View Drives &amp; Events</span>
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

      {/* 3. IMPACT STATISTICS STRIP (CONSISTENT WITH PLATFORM STANDARDS) */}
      <section style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem', marginBottom: '3.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { val: '28.4+', label: 'Tons Diverted', sub: 'Non-biodegradable waste audited' },
              { val: '35+', label: 'Educational Campuses', sub: 'Schools & degree colleges engaged' },
              { val: '12,000+', label: 'Citizens Pledged', sub: 'Nadi Prathijna oath signed' },
              { val: '100%', label: 'Community Service', sub: 'Free public action across all ghats' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                borderLeft: '4px solid #059669',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUR CORE PILLARS OF RIVER RESTORATION (PHOTO SHOWCASE WITH CONCISE COPY) */}
      <section style={{ padding: '0 1.5rem 4rem', maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#ecfdf5',
            color: '#047857',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.76rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: '1px solid #a7f3d0',
            marginBottom: '0.5rem'
          }}>
            CONSERVATION IN ACTION
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
            Four Pillars of River Godavari Rejuvenation
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
            Hands-on environmental programs delivering measurable restoration across the sacred river basin.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {homePillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              {/* Photo Header */}
              <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: '#ecfdf5',
                  color: '#047857',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  border: '1px solid #a7f3d0'
                }}>
                  {pillar.tag}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.35rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', marginBottom: '0.3rem' }}>
                  {pillar.metric}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem', lineHeight: 1.3 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.55, margin: '0 0 1.25rem', flex: 1 }}>
                  {pillar.desc}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    to={pillar.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      boxSizing: 'border-box',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      padding: '0.65rem 0.9rem',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Explore Program</span>
                    <ArrowRight size={14} color="#059669" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIVE COMMUNITY UPDATES (When Available) */}
      {(events.length > 0 || announcements.length > 0) && (
        <section className="eco-home-preview-section" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '3.5rem' }}>
          <div className="container">
            <div className="eco-preview-grid">
              {/* Upcoming Events Column */}
              {events.length > 0 && (
                <div className="eco-preview-col">
                  <div className="eco-preview-header">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={20} className="text-emerald-700" />
                      <h3 className="eco-preview-title">Upcoming Drives &amp; Events</h3>
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

      {/* 6. CALL TO ACTION BANNER (CONSISTENT WITH OTHER PLATFORM PAGES) */}
      <section style={{
        background: '#064e3b',
        color: '#ffffff',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#86efac',
            marginBottom: '1rem'
          }}>
            JOIN THE CONSERVATION MOVEMENT
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Be Part of the Solution for River Godavari
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Whether dedicating two hours on a weekend morning or spreading eco-awareness in your community, every action counts.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                background: '#ffffff',
                color: '#064e3b',
                padding: '0.85rem 2rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.98rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span>Register Free as Volunteer</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                padding: '0.85rem 1.75rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.98rem',
                textDecoration: 'none'
              }}
            >
              Contact Our Coordinators
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

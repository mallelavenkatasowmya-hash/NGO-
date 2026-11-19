import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import godavariMissionHeroImg from '../assets/godavari-mission-hero.jpg';
import godavariCleanupImg from '../assets/godavari-cleanup.jpg';
import godavariTreePlantationImg from '../assets/godavari-tree-plantation.jpg';
import godavariFieldOperationsImg from '../assets/godavari-field-operations.jpg';
import godavariCommunityImg from '../assets/godavari-community-programs.jpg';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Brush, 
  Sprout, 
  Waves, 
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const activityPillars = [
  {
    title: 'Cleanliness Drives',
    tag: 'Shoreline Action',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariCleanupImg,
    path: '/activities/cleanliness',
    desc: 'Systematic bi-weekly cleaning of major Godavari bathing ghats, removing synthetic plastic waste and restoring sacred riverfront beauty.',
    metric: '45+ Drives Completed'
  },
  {
    title: 'Tree Plantation',
    tag: 'Afforestation',
    badgeBg: '#f0fdf4',
    badgeColor: '#15803d',
    image: godavariTreePlantationImg,
    path: '/activities/plantation',
    desc: 'Planting indigenous Neem, Peepal, and Pongamia trees along 8 km of Godavari embankments to stabilize soil and cool local microclimates.',
    metric: '10,000+ Native Trees'
  },
  {
    title: 'River Conservation',
    tag: 'Hydrology & Science',
    badgeBg: '#f0f9ff',
    badgeColor: '#0369a1',
    image: godavariFieldOperationsImg,
    path: '/activities/conservation',
    desc: 'Deploying canal plastic-trap netting barriers and operating 15 ghat water quality testing stations with transparent public health reporting.',
    metric: '22 Net Traps Active'
  },
  {
    title: 'Community Programs',
    tag: 'Civic Mobilization',
    badgeBg: '#f5f3ff',
    badgeColor: '#6d28d9',
    image: godavariCommunityImg,
    path: '/activities/community',
    desc: 'Youth eco-ambassador workshops, plastic-free pooja counseling for pilgrims, and merchant alliances across East & West Godavari.',
    metric: '3,500+ Citizens Engaged'
  }
];

const fallbackEvents = [
  {
    _id: 'sample-cleanliness-1',
    title: 'Kotilingala Ghat Weekend Sanitation Drive',
    eventType: 'Cleanliness Drive',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    time: '06:30 AM – 09:00 AM',
    location: { venue: 'Kotilingala Ghat, Godavari Bund Road' },
    enrolledVolunteersCount: 28,
    targetVolunteers: 40,
    description: 'Bi-weekly shoreline cleanup focusing on plastic bottle extraction and segregation into municipal recycling streams.',
    bannerImage: godavariCleanupImg
  },
  {
    _id: 'sample-plantation-1',
    title: 'Riparian Forest Embankment Afforestation',
    eventType: 'Tree Plantation',
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    time: '07:00 AM – 10:00 AM',
    location: { venue: 'Godavari Bund Corridor, Near Dowleswaram' },
    enrolledVolunteersCount: 35,
    targetVolunteers: 50,
    description: 'Planting 250 native Neem and Pongamia saplings with protective bamboo guards along eroding riverbanks.',
    bannerImage: godavariTreePlantationImg
  },
  {
    _id: 'sample-conservation-1',
    title: 'Citizen-Science Water Sampling & Testing',
    eventType: 'River Conservation',
    date: new Date(Date.now() + 86400000 * 12).toISOString(),
    time: '08:00 AM – 10:30 AM',
    location: { venue: 'Pushkar & Saraswathi Ghats' },
    enrolledVolunteersCount: 16,
    targetVolunteers: 25,
    description: 'Testing dissolved oxygen, pH, and turbidity alongside college biology students using digital field equipment.',
    bannerImage: godavariFieldOperationsImg
  },
  {
    _id: 'sample-community-1',
    title: 'Plastic-Free Pilgrim & Merchant Workshop',
    eventType: 'Community Program',
    date: new Date(Date.now() + 86400000 * 16).toISOString(),
    time: '05:00 PM – 07:00 PM',
    location: { venue: 'Community Hall, Pushkar Nagar' },
    enrolledVolunteersCount: 42,
    targetVolunteers: 60,
    description: 'Distributing reusable cotton bags and training local vendors on biodegradable packaging options.',
    bannerImage: godavariCommunityImg
  }
];

const Activities = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data } = await API.get('/public/events');
        const validEvents = Array.isArray(data) ? data : Array.isArray(data?.events) ? data.events : [];
        setEvents(validEvents.length > 0 ? validEvents : fallbackEvents);
      } catch (err) {
        console.warn('Using curated scheduled activities fallback:', err);
        setEvents(fallbackEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const categories = ['All', 'Cleanliness Drive', 'Tree Plantation', 'River Conservation', 'Community Program'];

  const filteredEvents =
    filterType === 'All'
      ? events
      : events.filter((e) => (e.eventType || '').toLowerCase() === filterType.toLowerCase());

  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL SPLIT HERO HEADER */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '4rem 1.5rem 3.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Column: Activities Hub Info */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#047857',
                marginBottom: '1rem'
              }}>
                <Sparkles size={14} />
                <span>FIELD OPERATIONS HUB</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Our Field Activities
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Four Action-Driven Pillars for Rejuvenating River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                From weekend ghat sanitation and riverbank afforestation to scientific water testing and community empowerment, 
                explore our structured on-ground conservation programs across the Godavari delta.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/activities/cleanliness" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Brush size={14} color="#059669" />
                  <span>Cleanliness Drives</span>
                </Link>
                <Link to="/activities/plantation" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Sprout size={14} color="#15803d" />
                  <span>Tree Plantation</span>
                </Link>
                <Link to="/activities/conservation" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Waves size={14} color="#0284c7" />
                  <span>River Conservation</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Crystal-Clear River Landscape Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariMissionHeroImg} 
                  alt="Godavari River Conservation Field Initiatives" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '0.85rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari River Basin Environmental Field Operations
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Field Hub
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUR CORE ACTIVITY PILLARS (CARD SHOWCASE) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              WHAT WE DO
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Explore Our Core Action Pillars
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Click into each dedicated initiative to review schedules, methodologies, and volunteer opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.75rem' }}>
            {activityPillars.map((pillar, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
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
                    top: '12px',
                    left: '12px',
                    background: pillar.badgeBg,
                    color: pillar.badgeColor,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {pillar.tag}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                    {pillar.metric}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.65rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: '0 0 1.5rem', flex: 1 }}>
                    {pillar.desc}
                  </p>

                  <Link 
                    to={pillar.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight size={15} color="#059669" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SCHEDULED DRIVES & EVENTS LIST */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              UPCOMING SCHEDULE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Scheduled Field Drives
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Join an upcoming drive. Free registration, safety equipment provided, and certified service hours.
            </p>
          </div>

          {/* Simple Filter Strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filterType === cat ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: filterType === cat ? '#059669' : '#ffffff',
                  color: filterType === cat ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Drives Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              Loading scheduled activities...
            </div>
          ) : filteredEvents.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              background: '#f8fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <AlertCircle size={36} color="#94a3b8" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                No drives found in this category
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                New drives are posted every week. Join as a volunteer to receive immediate notifications.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {filteredEvents.map((evt) => (
                <div 
                  key={evt._id} 
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={evt.bannerImage || godavariCleanupImg}
                      alt={evt.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase'
                    }}>
                      {evt.eventType}
                    </span>
                  </div>

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                      <Calendar size={13} />
                      <span>{new Date(evt.date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</span>
                      <span>•</span>
                      <Clock size={13} />
                      <span>{evt.time}</span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                      {evt.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1rem', flex: 1 }}>
                      {evt.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '0.82rem', marginBottom: '1.25rem' }}>
                      <MapPin size={14} color="#059669" />
                      <span>{evt.location?.venue || 'Godavari Riverfront'}</span>
                    </div>

                    <div style={{
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        <strong style={{ color: '#0f172a' }}>{evt.enrolledVolunteersCount || 0}</strong> / {evt.targetVolunteers || 30} vols
                      </span>
                      <Link 
                        to="/register" 
                        style={{
                          background: '#059669',
                          color: '#ffffff',
                          padding: '0.45rem 1rem',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section style={{
        background: '#064e3b',
        color: '#ffffff',
        padding: '4.5rem 1.5rem',
        textAlign: 'center'
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
            BE PART OF THE CHANGE
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Together for a Cleaner Environment. Together for a Better Future.
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Join our growing family of dedicated environmental volunteers across the Godavari basin.
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
              <span>Join Our Mission</span>
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Activities;

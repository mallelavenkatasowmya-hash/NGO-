import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import godavariEventsUpcomingImg from '../assets/godavari-events-upcoming.jpg';
import godavariVolunteerMeetingsImg from '../assets/godavari-volunteer-meetings.jpg';
import godavariPastReportsImg from '../assets/godavari-past-reports.jpg';
import heroBannerImg from '../assets/hero-banner.jpg';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  AlertCircle 
} from 'lucide-react';

const eventPillars = [
  {
    title: 'Upcoming Drives & Events',
    tag: 'Confirmed Field Schedule',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariEventsUpcomingImg,
    path: '/events/upcoming',
    desc: 'Review upcoming sunrise shoreline cleanups, afforestation drives, and community marches. Free registration with certified hours.',
    metric: '4 Drives This Month'
  },
  {
    title: 'Volunteer Drives & Meetings',
    tag: 'Leadership & Strategy',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariVolunteerMeetingsImg,
    path: '/events/volunteer-meetings',
    desc: 'Attend monthly coordinator strategy tables, weekly morning safety orientations, and youth captain huddles to lead on-ground change.',
    metric: '24 Strategy Sessions/Yr'
  },
  {
    title: 'Past Drives & Reports',
    tag: 'Provable Impact & Audits',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariPastReportsImg,
    path: '/events/past-reports',
    desc: 'Access verified weigh-in receipts, municipal transfer documentation, quarterly environmental impact PDFs, and drive audit archives.',
    metric: '28.4 Tons Diverted'
  }
];

const fallbackEvents = [
  {
    _id: 'sample-drv-1',
    title: 'Kotilingala Ghat Weekend Sanitation Drive',
    eventType: 'Cleanliness Drive',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    time: '06:30 AM – 09:00 AM',
    location: { venue: 'Kotilingala Ghat, Godavari Bund Road' },
    enrolledVolunteersCount: 34,
    targetVolunteers: 50,
    description: 'Shoreline grid sweeping focusing on plastic bottle extraction and segregation into municipal recycling streams.',
    bannerImage: godavariEventsUpcomingImg
  },
  {
    _id: 'sample-drv-2',
    title: 'Monthly Coordinator Strategy & Logistics Review',
    eventType: 'Volunteer Meeting',
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    time: '05:00 PM – 06:30 PM',
    location: { venue: 'Pushkar Nagar Central Office, Rajahmundry' },
    enrolledVolunteersCount: 22,
    targetVolunteers: 30,
    description: 'Monthly operational meeting reviewing past tonnages, net-barrier maintenance, and next month’s zone rosters.',
    bannerImage: godavariVolunteerMeetingsImg
  },
  {
    _id: 'sample-drv-3',
    title: 'Dowleswaram Barrage Riparian Afforestation',
    eventType: 'Tree Plantation',
    date: new Date(Date.now() + 86400000 * 12).toISOString(),
    time: '07:00 AM – 10:00 AM',
    location: { venue: 'Godavari Bund Corridor, Near Dowleswaram' },
    enrolledVolunteersCount: 41,
    targetVolunteers: 60,
    description: 'Planting 250 native Neem and Pongamia saplings with protective bamboo guards along riverbank erosion points.',
    bannerImage: godavariPastReportsImg
  }
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await API.get('/public/events');
        const list = Array.isArray(data) ? data : Array.isArray(data?.events) ? data.events : [];
        setEvents(list.length > 0 ? list : fallbackEvents);
      } catch (err) {
        setEvents(fallbackEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const categories = ['All', 'Cleanliness Drive', 'Volunteer Meeting', 'Tree Plantation'];

  const filteredEvents = filterType === 'All'
    ? events
    : events.filter(e => (e.eventType || '').toLowerCase() === filterType.toLowerCase());

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
            {/* Left Column: Events Hub Info */}
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
                <Calendar size={14} />
                <span>EVENTS &amp; COORDINATION HUB</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Drives &amp; Events
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Field Schedules, Volunteer Assemblies, and Provable Ecological Audits.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Explore upcoming weekend sanitation drives, participate in monthly coordinator strategy meetings, 
                and review publicly audited reports of waste diverted from River Godavari.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/events/upcoming" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Upcoming Drives</span>
                </Link>
                <Link to="/events/volunteer-meetings" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Users size={14} color="#059669" />
                  <span>Volunteer Meetings</span>
                </Link>
                <Link to="/events/past-reports" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <FileText size={14} color="#059669" />
                  <span>Past Reports</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={heroBannerImg} 
                  alt="Godavari Riverfront Drives and Events Calendar" 
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
                      Godavari River Basin Active Operations Calendar
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
                    Central Hub
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS (CARD SHOWCASE) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              ENGAGEMENT PATHWAYS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Explore Our Drives &amp; Events Sections
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Click into each dedicated section to review live countdowns, meeting agendas, and audit records.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {eventPillars.map((pillar, idx) => (
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
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
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

      {/* 3. SCHEDULED CALENDAR LIST */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              CALENDAR TIMELINE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Full Master Schedule
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Filter by drive category and register for upcoming weekend initiatives across the Godavari delta.
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

          {/* Timeline Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
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
                    src={evt.bannerImage || godavariEventsUpcomingImg}
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
                      <strong style={{ color: '#0f172a' }}>{evt.enrolledVolunteersCount || 0}</strong> / {evt.targetVolunteers || 40} vols
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

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
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
            BECOME A REGISTERED STEWARD
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Ready to Join the Next Weekend River Cleanup?
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Registration takes less than 60 seconds. Choose your preferred ghat and receive immediate WhatsApp event updates.
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
              Contact Coordinators
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;

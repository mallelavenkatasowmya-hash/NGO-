import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import eventsHeroShowcaseImg from '../assets/events-hero-showcase.jpg';
import eventsPillarUpcomingImg from '../assets/events-pillar-upcoming.jpg';
import eventsPillarMeetingsImg from '../assets/events-pillar-meetings.jpg';
import eventsPillarReportsImg from '../assets/events-pillar-reports.jpg';
import eventsScheduleCleanImg from '../assets/events-schedule-clean.jpg';
import eventsScheduleMeetImg from '../assets/events-schedule-meet.jpg';
import eventsSchedulePlantImg from '../assets/events-schedule-plant.jpg';
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
    image: eventsPillarUpcomingImg,
    path: '/events/upcoming',
    desc: 'Sunrise shoreline cleanups, afforestation drives, and community marches with certified volunteer service hours.',
    metric: '4 Drives This Month',
    highlights: [
      'Weekend Sunrise Cleanups',
      'Certified Volunteer Service Hours',
      'Safety Gear & Hydration Provided'
    ]
  },
  {
    title: 'Volunteer Drives & Meetings',
    tag: 'Leadership & Strategy',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: eventsPillarMeetingsImg,
    path: '/events/volunteer-meetings',
    desc: 'Monthly coordinator strategy tables, morning safety briefings, and youth captain huddles to steer on-ground change.',
    metric: '24 Strategy Sessions/Yr',
    highlights: [
      'Monthly Coordinator Assemblies',
      'Ghat Captain Logistics Huddles',
      'Safety Briefings & Route Planning'
    ]
  },
  {
    title: 'Past Drives & Reports',
    tag: 'Provable Impact & Audits',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: eventsPillarReportsImg,
    path: '/events/past-reports',
    desc: 'Verified digital weigh-in slips, municipal transfer manifests, quarterly environmental impact PDFs, and audit archives.',
    metric: '28.4 Tons Diverted',
    highlights: [
      'Digital Scale Weigh-In Slips',
      'Municipal Transfer Manifests',
      'Quarterly Audit & Impact PDFs'
    ]
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
    bannerImage: eventsScheduleCleanImg
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
    bannerImage: eventsScheduleMeetImg
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
    bannerImage: eventsSchedulePlantImg
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
        if (list.length > 0) {
          // If backend events lack photos, populate with matching fallback images
          const enriched = list.map((e, idx) => ({
            ...e,
            bannerImage: e.bannerImage || (
              e.eventType === 'Volunteer Meeting' ? eventsScheduleMeetImg :
              e.eventType === 'Tree Plantation' ? eventsSchedulePlantImg :
              eventsScheduleCleanImg
            )
          }));
          setEvents(enriched);
        } else {
          setEvents(fallbackEvents);
        }
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
      
      {/* 1. PROFESSIONAL 2-COLUMN HERO (CONSISTENT WITH ALL PLATFORM PAGES) */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '3rem 1.5rem 2.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Left Column: Info & Action */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ecfdf5',
                color: '#059669',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                border: '1px solid #a7f3d0'
              }}>
                <Sparkles size={14} />
                <span>FIELD OPERATIONS • DRIVES &amp; EVENTS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em'
              }}>
                Drives &amp; Community Events
              </h1>

              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#059669',
                margin: '0 0 0.75rem',
                lineHeight: 1.45
              }}>
                Field Schedules, Volunteer Assemblies, and Provable Ecological Audits.
              </div>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Explore upcoming weekend sanitation drives, participate in monthly coordinator strategy meetings, 
                and review publicly audited reports of waste diverted from River Godavari.
              </p>

              {/* Stat Pills */}
              <div style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Calendar size={14} color="#059669" />
                  <span>4 Drives This Month</span>
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Users size={14} color="#059669" />
                  <span>24 Strategy Sessions/Yr</span>
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Scale size={14} color="#059669" />
                  <span>28.4 Tons Diverted</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="#pathways"
                  style={{
                    background: '#059669',
                    color: '#ffffff',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                  }}
                >
                  <span>Explore 3 Pathways</span>
                  <ArrowRight size={16} />
                </a>
                <Link
                  to="/register"
                  style={{
                    background: '#ffffff',
                    color: '#334155',
                    border: '1px solid #cbd5e1',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Register as Volunteer</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img
                  src={eventsHeroShowcaseImg}
                  alt="Godavari Cleanup Volunteers in Action"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Sparkles size={12} color="#86efac" />
                  <span>COMMUNITY MOBILIZATION</span>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    flexShrink: 0
                  }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                      Rajahmundry Field Drives
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Empowering hundreds of citizens along sacred riverfront ghats
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE CORE ENGAGEMENT PATHWAYS (CARD SHOWCASE) */}
      <section id="pathways" style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
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
              ENGAGEMENT PATHWAYS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Explore Our Drives &amp; Events Sections
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Click into each dedicated section to review live countdowns, meeting agendas, and audit records.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {eventPillars.map((pillar, idx) => (
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
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
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
                    letterSpacing: '0.04em',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}>
                    {pillar.tag}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                    {pillar.metric}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                    {pillar.desc}
                  </p>

                  {/* Highlights List */}
                  <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                        <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

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
                        padding: '0.75rem 1rem',
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. IMPACT STATISTICS STRIP */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { val: '4+', label: 'Monthly Field Drives', sub: 'Shoreline cleanups & river plantation' },
              { val: '24', label: 'Strategy Tables / Year', sub: 'Coordinator & captain planning' },
              { val: '28.4+', label: 'Tons Diverted & Audited', sub: 'Single-use plastic & silt diversion' },
              { val: '100%', label: 'Weigh-In Verified', sub: 'Municipal receipts & certificates' }
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

      {/* 4. FULL MASTER SCHEDULE (TIMELINE WITH CLEAR PHOTOGRAPHS) */}
      <section style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
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
              CALENDAR TIMELINE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Full Master Schedule
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
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
                  padding: '0.5rem 1.2rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filterType === cat ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: filterType === cat ? '#059669' : '#f8fafc',
                  color: filterType === cat ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Timeline Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredEvents.map((evt) => (
              <div 
                key={evt._id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={evt.bannerImage || eventsScheduleCleanImg}
                    alt={evt.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#ecfdf5',
                    color: '#047857',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    border: '1px solid #a7f3d0'
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
                    <MapPin size={14} color="#059669" style={{ flexShrink: 0 }} />
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
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
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

          <p style={{ fontSize: '1.02rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
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

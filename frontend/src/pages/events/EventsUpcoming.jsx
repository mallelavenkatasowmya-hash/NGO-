import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import godavariEventsUpcomingImg from '../../assets/godavari-events-upcoming.jpg';
import upcomingUniqueCleanImg from '../../assets/upcoming-unique-clean.jpg';
import upcomingUniquePlantImg from '../../assets/upcoming-unique-plant.jpg';
import upcomingUniqueWaterImg from '../../assets/upcoming-unique-water.jpg';
import upcomingUniqueWalkImg from '../../assets/upcoming-unique-walk.jpg';
import upcomingVolunteerPrepImg from '../../assets/upcoming-volunteer-prep.jpg';
import upcomingUniqueGroupImg from '../../assets/upcoming-unique-group.jpg';

import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  AlertCircle,
  Package,
  Layers,
  HeartHandshake
} from 'lucide-react';

const fallbackUpcoming = [
  {
    _id: 'up-1',
    title: 'Kotilingala Ghat Sunrise Shoreline Sanitation',
    category: 'Cleanliness Drive',
    eventType: 'Cleanliness Drive',
    image: upcomingUniqueCleanImg,
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    time: '06:30 AM – 09:00 AM',
    venue: 'Kotilingala Ghat, Godavari Bund Road, Rajahmundry',
    registered: 34,
    capacity: 50,
    lead: 'Field Lead: Sri M. Ramu Naidu',
    desc: 'Targeted morning plastic and debris removal along bathing steps.'
  },
  {
    _id: 'up-2',
    title: 'Dowleswaram Bund Native Afforestation Drive',
    category: 'Tree Plantation',
    eventType: 'Tree Plantation',
    image: upcomingUniquePlantImg,
    date: new Date(Date.now() + 86400000 * 6).toISOString(),
    time: '07:00 AM – 10:00 AM',
    venue: 'Godavari Bund Corridor, Near Dowleswaram Barrage',
    registered: 41,
    capacity: 60,
    lead: 'Forestry Lead: Dr. K. V. Subba Rao',
    desc: 'Planting 250 native Neem and Kanuga saplings with protective guards.'
  },
  {
    _id: 'up-3',
    title: 'Pushkar & Saraswathi Ghats Citizen Water Audit',
    category: 'River Conservation',
    eventType: 'River Conservation',
    image: upcomingUniqueWaterImg,
    date: new Date(Date.now() + 86400000 * 10).toISOString(),
    time: '07:30 AM – 10:00 AM',
    venue: 'Pushkar Ghat Command Desk, Rajahmundry',
    registered: 18,
    capacity: 25,
    lead: 'Science Lead: Dr. P. Radha Krishna',
    desc: 'Citizen water sampling measuring dissolved oxygen, pH, and water clarity.'
  },
  {
    _id: 'up-4',
    title: 'Youth Riverfront Rally & Nadi Prathijna Campaign',
    category: 'Community Rally',
    eventType: 'Community Rally',
    image: upcomingUniqueWalkImg,
    date: new Date(Date.now() + 86400000 * 14).toISOString(),
    time: '05:00 PM – 07:00 PM',
    venue: 'Godavari River Promenade, Opp. Pushkar Nagar',
    registered: 58,
    capacity: 100,
    lead: 'Youth Captain: Kum. S. Divya Vani',
    desc: 'Youth awareness walk, river pledge signatures, and cloth bag distribution.'
  }
];

const categoryImageMap = {
  'cleanliness drive': upcomingUniqueCleanImg,
  'tree plantation': upcomingUniquePlantImg,
  'river conservation': upcomingUniqueWaterImg,
  'community rally': upcomingUniqueWalkImg,
  'awareness program': upcomingUniqueWalkImg,
  'environmental protection': godavariEventsUpcomingImg
};

const prepChecklist = [
  { item: 'Wear comfortable closed footwear suitable for wet stone steps' },
  { item: 'Carry a reusable water bottle (refill stations provided on-site)' },
  { item: 'All safety gear (puncture gloves, sashes, grabbers) provided free' },
  { item: 'Morning refreshments and hydration provided to all registered volunteers' }
];

const EventsUpcoming = () => {
  const [events, setEvents] = useState(fallbackUpcoming);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Cleanliness Drive', 'Tree Plantation', 'River Conservation', 'Community Rally'];

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const { data } = await API.get('/public/events');
        const list = Array.isArray(data) ? data : Array.isArray(data?.events) ? data.events : [];
        if (list.length > 0) {
          const apiCategories = new Set(list.map(e => (e.eventType || e.category || '').toLowerCase()));
          const missingFallbacks = fallbackUpcoming.filter(f => !apiCategories.has((f.category || '').toLowerCase()));
          const enriched = list.map((item, idx) => {
            const cat = (item.eventType || item.category || '').toLowerCase();
            return {
              ...item,
              image: categoryImageMap[cat] || fallbackUpcoming[idx % fallbackUpcoming.length].image
            };
          });
          setEvents([...enriched, ...missingFallbacks]);
        } else {
          setEvents(fallbackUpcoming);
        }
      } catch (err) {
        setEvents(fallbackUpcoming);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const filtered = filter === 'All' 
    ? events 
    : events.filter(e => (e.eventType || e.category || '').toLowerCase() === filter.toLowerCase());

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. UPCOMING DRIVES HERO */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '3.5rem 1.5rem 3rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Left Column: Hero Info */}
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
                <span>FIELD SCHEDULE • UPCOMING DRIVES</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Upcoming Drives &amp; Events
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Join Hands with Active Citizens Along the Sacred Godavari Riverfront.
              </p>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.7,
                margin: '0 0 1.5rem'
              }}>
                Every weekend, our volunteers gather at sunrise across Rajahmundry, Kovvur, and neighboring ghats. 
                Registration is free, full safety gear is provided, and service hours are certified.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Clock size={14} color="#059669" />
                  <span>Weekend Mornings • 06:30 AM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>Safety Gear Included</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Users size={14} color="#059669" />
                  <span>Certified Volunteer Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Upcoming Assembly Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariEventsUpcomingImg} 
                  alt="Volunteers gathered at sunrise along Godavari River for upcoming drive" 
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
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
                      Kotilingala Ghat Morning Volunteer Assembly — Rajahmundry
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
                    Live Schedule
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS KPI BAR */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              { val: '4 Upcoming', label: 'Drives This Month', note: 'Weekend sunrise slots' },
              { val: '235+', label: 'Volunteers Registered', note: 'Youth, elders & students' },
              { val: '4 Ghats', label: 'Active Zones', note: 'Kotilingala, Pushkar & more' },
              { val: '100%', label: 'Free Registration', note: 'Refreshments & gloves provided' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                borderLeft: '4px solid #059669'
              }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PATTERN SECTION: FILTERABLE UPCOMING SCHEDULE WITH MORE IMAGES & LESS MATTER */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ecfdf5',
              color: '#047857',
              border: '1px solid #a7f3d0',
              padding: '4px 14px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              RESERVE YOUR SPOT
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.5rem' }}>
              Confirmed Upcoming Field Drives
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Select a category to view dates, meeting points, and register as a participant or group leader.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filter === cat ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: filter === cat ? '#059669' : '#ffffff',
                  color: filter === cat ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Grid: Keeps normal card width and centers nicely if 1 item is filtered */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: filtered.length === 1 
              ? 'minmax(320px, 460px)' 
              : 'repeat(auto-fit, minmax(320px, 1fr))',
            justifyContent: 'center',
            gap: '1.75rem',
            maxWidth: filtered.length === 1 ? '460px' : '1180px',
            margin: '0 auto'
          }}>
            {filtered.map((evt, idx) => {
              const cat = (evt.eventType || evt.category || '').toLowerCase();
              const cardImage = evt.image || categoryImageMap[cat] || fallbackUpcoming[idx % fallbackUpcoming.length].image;

              return (
                <div key={evt._id || idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}>
                  {/* High-Resolution Dedicated Photo Header */}
                  <div style={{ position: 'relative', height: '210px', width: '100%', overflow: 'hidden', background: '#f1f5f9' }}>
                    <img 
                      src={cardImage} 
                      alt={evt.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = godavariEventsUpcomingImg;
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                    
                    {/* Category Tag Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(4px)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#047857',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}>
                      {evt.eventType || evt.category}
                    </div>

                    {/* Date Tag Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                    }}>
                      {evt.date ? new Date(evt.date).toLocaleDateString('en-IN', { dateStyle: 'medium' }) : 'Upcoming'}
                    </div>
                  </div>

                  {/* Card Body - LESS MATTER & CONCISE DETAILS */}
                  <div style={{ padding: '1.25rem 1.35rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                        {evt.title}
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={13} color="#059669" />
                          <span>{evt.time || '06:30 AM – 09:00 AM'}</span>
                        </div>

                        <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <MapPin size={13} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{evt.location?.venue || evt.venue}</span>
                        </div>
                      </div>

                      <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: '0 0 1rem' }}>
                        {evt.description || evt.desc}
                      </p>

                      {/* Visual Capacity Bar */}
                      <div style={{ background: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', marginBottom: '0.3rem' }}>
                          <span style={{ color: '#64748b' }}>Capacity</span>
                          <strong style={{ color: '#0f172a' }}>{evt.enrolledVolunteersCount || evt.registered || 28} / {evt.targetVolunteers || evt.capacity || 50} Enrolled</strong>
                        </div>
                        <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ 
                            height: '100%', 
                            background: '#059669', 
                            width: `${Math.min(100, Math.round(((evt.enrolledVolunteersCount || evt.registered || 28) / (evt.targetVolunteers || evt.capacity || 50)) * 100))}%` 
                          }} />
                        </div>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#64748b' }}>
                        {evt.lead || 'Coordinated by Field Cadre'}
                      </span>
                      <Link 
                        to="/register" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: '#059669',
                          color: '#ffffff',
                          padding: '7px 16px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          boxShadow: '0 2px 6px rgba(5, 150, 105, 0.2)'
                        }}
                      >
                        <span>Sign Up Free</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: VOLUNTEER PREP & HOST A DRIVE WITH VISUALS */}
      <section style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: What to Expect & Preparation with Photo */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <ShieldCheck size={16} />
                <span>First-Time Volunteer Guide</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.75rem', lineHeight: 1.25 }}>
                What to Expect on Your First Morning Drive
              </h2>
              
              {/* Volunteer Prep Photo */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
              }}>
                <img 
                  src={upcomingVolunteerPrepImg} 
                  alt="Morning volunteer equipment orientation" 
                  style={{ width: '100%', height: '175px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {prepChecklist.map((c, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>{c.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Host a Drive Callout with Group Photo */}
            <div>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
              }}>
                {/* Group Assembly Photo */}
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  marginBottom: '1.25rem'
                }}>
                  <img 
                    src={upcomingUniqueGroupImg} 
                    alt="Corporate CSR and college group volunteers assembled" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#059669',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.35rem'
                }}>
                  <HeartHandshake size={14} />
                  <span>Group Partnerships</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem' }}>
                  Want to Organize a Drive for Your Group?
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                  Are you a corporate CSR committee, college NSS cell, or resident association? We will co-host a dedicated cleanup or plantation drive with full equipment.
                </p>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '11px 20px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                  }}
                >
                  <span>Request a Custom Group Drive</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/events"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Back to Events Hub</span>
          </Link>
          <Link
            to="/events/volunteer-meetings"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: Volunteer Drives &amp; Meetings &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EventsUpcoming;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import announceHeroShowcaseImg from '../assets/announce-hero-showcase.jpg';
import announceStreamNewsImg from '../assets/announce-stream-news.jpg';
import announceStreamPressImg from '../assets/announce-stream-press.jpg';
import { 
  Megaphone, 
  FileText, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Newspaper, 
  Sparkles, 
  ChevronRight,
  Download,
  Info,
  Radio,
  Clock
} from 'lucide-react';

const fallbackCirculars = [
  {
    _id: 'circ-1',
    title: 'Advisory on Monsoon Drainage Catch Nets and Prohibited Debris Disposal',
    category: 'Environmental Advisory',
    priority: 'Urgent',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    content: 'Newly tensioned bio-barrier nets are actively operational across 22 drainage outfalls. Deliberate dumping of non-biodegradable packaging or plastic bottles into drainage canals incurs civic penalties under the Municipal River Conservation Ordinance.'
  },
  {
    _id: 'circ-2',
    title: 'Seasonal Schedule for Kotilingala and Pushkar Ghats Sunrise Cleaning Cadres',
    category: 'Operational Circular',
    priority: 'Important',
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    content: 'Morning sanitation shifts for registered volunteers commence at 06:30 AM every Saturday and Sunday across Kotilingala, Pushkar, and Saraswathi Ghats. Shift coordinators must verify safety gear at the central desk before deploying.'
  },
  {
    _id: 'circ-3',
    title: 'Public Invitation: Q3 Basin Water Quality Open Review and Community Hearing',
    category: 'Public Hearing',
    priority: 'Important',
    publishedAt: new Date(Date.now() - 86400000 * 9).toISOString(),
    content: 'The NGO Ecological Directorate invites citizens, collegiate researchers, and media representatives to attend the open public dissemination of the Third Quarter 2026 Godavari Basin Water Quality Index at the Municipal Library Auditorium.'
  },
  {
    _id: 'circ-4',
    title: 'Guidelines for Free Distribution of Reusable Cloth Bags to Pilgrims and Merchants',
    category: 'Community Notice',
    priority: 'General',
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    content: 'Under the "Nadi Mitrula Sangham" civic program, 10,000 unbleached cotton carry bags are being supplied to riverbank flower and pooja merchants free of cost to replace single-use plastic covers.'
  }
];

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data } = await API.get('/public/announcements');
        const list = Array.isArray(data) ? data : Array.isArray(data?.announcements) ? data.announcements : [];
        setAnnouncements(list.length > 0 ? list : fallbackCirculars);
      } catch (err) {
        setAnnouncements(fallbackCirculars);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const filters = ['All', 'Urgent', 'Important', 'General'];

  const filteredCirculars = activeFilter === 'All'
    ? announcements
    : announcements.filter(a => {
        const p = (a.priority || '').toLowerCase();
        if (activeFilter === 'General') {
          return p !== 'urgent' && p !== 'important';
        }
        return p === activeFilter.toLowerCase();
      });

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
                <span>OFFICIAL DISPATCHES • COMMUNICATIONS HUB</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em'
              }}>
                Announcements &amp; Media Center
              </h1>

              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#059669',
                margin: '0 0 0.75rem',
                lineHeight: 1.45
              }}>
                Verified Administrative Circulars, Advisories, and Official Media Communiqués.
              </div>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Stay informed with authenticated field updates, community river conservation milestones, 
                and formal municipal communiqués from Godavari Nadhi Paryavarana Parishubratha.
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
                  <Newspaper size={14} color="#059669" />
                  <span>2 Information Portals</span>
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
                  <Radio size={14} color="#059669" />
                  <span>24/7 Rapid Alert Desk</span>
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
                  <ShieldCheck size={14} color="#059669" />
                  <span>100% Verified Dispatches</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="#portals"
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
                  <span>Explore Portals</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#circulars"
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
                  <span>View Circulars</span>
                </a>
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
                  src={announceHeroShowcaseImg}
                  alt="NGO Field Journalism & Reporting"
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
                  <span>OFFICIAL MEDIA DESK</span>
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
                    <Megaphone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                      Godavari Public Communications
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Real-time public communications, circulars &amp; verified press statements
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE PUBLIC ANNOUNCEMENT CHANNELS (NOW WITH VISUAL PHOTOGRAPHY) */}
      <section id="portals" style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
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
              COMMUNICATION PORTALS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Choose an Information Stream
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Browse through daily ground news reporting or access formal press statements and white papers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {/* Card 1: Latest News */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={announceStreamNewsImg}
                  alt="Latest News & Ground Stories"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: '#ecfdf5',
                  color: '#047857',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  JOURNALISM &amp; FIELD UPDATES
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                  Daily Field Reporting
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  Latest News &amp; Ground Stories
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  Field reporting, milestone updates, school eco-club charters, and civic honors. 
                  Follow frontline achievements and volunteer stories across Godavari ghats.
                </p>

                {/* Highlights List */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>Kotilingala 90-Day Continuous Clean Shoreline</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>Student River Science Charters &amp; Lab Demos</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>Civic Recognition &amp; Volunteer Tributes</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    to="/announcements/news"
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
                    <span>Browse Latest News</span>
                    <ArrowRight size={15} color="#059669" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Press Releases */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={announceStreamPressImg}
                  alt="Press Releases & Statements"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: '#ecfdf5',
                  color: '#047857',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  AUTHORIZED STATEMENTS
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                  Official Board Communiqués
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  Press Releases &amp; Statements
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  Official policy positions, environmental white papers, municipal tripartite MoUs, 
                  and media resource packs authorized by our Board of Trustees.
                </p>

                {/* Highlights List */}
                <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>22 Outfall Plastic-Trap Barriers Statement (PR/08)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>Tripartite Municipal Conservation MoU Authorization</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    <span>Quarterly Basin Water Quality Index Dispatches</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    to="/announcements/press"
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
                    <span>Browse Press Releases</span>
                    <ArrowRight size={15} color="#059669" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. IMPACT STATISTICS STRIP */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { val: '24/7', label: 'Rapid Alert Desk', sub: 'Hazard dispatching within 2 hours' },
              { val: '100%', label: 'Verified Circulars', sub: 'Municipal & trustee authentication' },
              { val: '45+', label: 'Ground News Stories', sub: 'Weekly frontline reporting' },
              { val: '12+', label: 'Press Communiqués', sub: 'Authoritative policy white papers' }
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

      {/* 4. OFFICIAL CIRCULARS & NOTICES FEED */}
      <section id="circulars" style={{
        padding: '4rem 1.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        {/* Section Header & Filters */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Administrative Circulars &amp; Advisories
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.2rem 0 0' }}>
                Public river cleanliness notices, volunteer timing circulars, and civic advisories
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {filters.map((fil) => (
                <button
                  key={fil}
                  onClick={() => setActiveFilter(fil)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: activeFilter === fil ? '1px solid #059669' : '1px solid #e2e8f0',
                    transition: 'all 0.15s ease',
                    background: activeFilter === fil ? '#059669' : '#ffffff',
                    color: activeFilter === fil ? '#ffffff' : '#475569'
                  }}
                >
                  {fil === 'All' ? 'All Circulars' : fil}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Circulars List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
            Loading announcements...
          </div>
        ) : filteredCirculars.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px dashed #cbd5e1'
          }}>
            <Megaphone size={36} style={{ color: '#94a3b8', margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#334155', margin: 0 }}>
              No circulars found in this category
            </h3>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filteredCirculars.map((circ) => {
              const isUrgent = circ.priority === 'Urgent';
              const isImportant = circ.priority === 'Important';

              return (
                <div
                  key={circ._id || circ.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderLeft: `4px solid ${isUrgent ? '#dc2626' : isImportant ? '#f59e0b' : '#059669'}`,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  {/* Top strip */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        background: isUrgent ? '#fef2f2' : isImportant ? '#fffbeb' : '#ecfdf5',
                        color: isUrgent ? '#dc2626' : isImportant ? '#b45309' : '#059669',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        border: `1px solid ${isUrgent ? '#fca5a5' : isImportant ? '#fde68a' : '#a7f3d0'}`
                      }}>
                        {circ.priority || 'General'}
                      </span>
                      <span style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        {circ.category || 'Official Notice'}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8125rem',
                      color: '#64748b'
                    }}>
                      <Calendar size={13} />
                      {new Date(circ.publishedAt || circ.createdAt || Date.now()).toLocaleDateString('en-IN', {
                        dateStyle: 'medium'
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: 0,
                    lineHeight: 1.35
                  }}>
                    {circ.title}
                  </h3>

                  {/* Content */}
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {circ.content}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. EMERGENCY HAZARD BANNER */}
      <section style={{
        padding: '0 1.5rem 3.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          borderRadius: '14px',
          padding: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              background: '#059669',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Info size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#064e3b' }}>
                Notice an Environmental Hazard or Bulk Plastic Dumping?
              </div>
              <div style={{ fontSize: '0.82rem', color: '#047857' }}>
                Our Rapid Water Defense Desk dispatches field volunteers and notifies municipal authorities within 2 hours.
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            style={{
              padding: '0.65rem 1.3rem',
              background: '#059669',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(5,150,105,0.2)'
            }}
          >
            <span>Report an Incident</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Announcements;

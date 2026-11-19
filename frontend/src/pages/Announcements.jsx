import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import godavariAnnouncementsHubImg from '../assets/godavari-announcements-hub.jpg';
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
  Info
} from 'lucide-react';

const fallbackCirculars = [
  {
    _id: 'circ-1',
    title: 'Advisory on Monsoon Drainage Catch Nets and Prohibited Debris Disposal',
    category: 'Environmental Advisory',
    priority: 'Urgent',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    content: 'All residents, pilgrimage coordinators, and ghat vendors are strictly advised that newly tensioned bio-barrier nets are actively operational across 22 drainage outfalls. Any deliberate disposal of non-biodegradable packaging or plastic bottles into drainage canals will incur immediate civic penalties under the Municipal River Conservation Ordinance.'
  },
  {
    _id: 'circ-2',
    title: 'Seasonal Schedule for Kotilingala and Pushkar Ghats Sunrise Cleaning Cadres',
    category: 'Operational Circular',
    priority: 'Important',
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    content: 'Morning sanitation shifts for registered volunteer squads will commence at 06:30 AM every Saturday and Sunday across Kotilingala, Pushkar, and Saraswathi Ghats. Shift coordinators must verify volunteer safety equipment (heavy-duty gloves, sashes, and grabbers) at the central command desk before deploying.'
  },
  {
    _id: 'circ-3',
    title: 'Public Invitation: Q3 Basin Water Quality Open Review and Community Hearing',
    category: 'Public Hearing',
    priority: 'Important',
    publishedAt: new Date(Date.now() - 86400000 * 9).toISOString(),
    content: 'The NGO Ecological Directorate invites all citizens, collegiate researchers, and media representatives to attend the open public dissemination of the Third Quarter 2026 Godavari Basin Water Quality Index at the Municipal Library Auditorium, Rajahmundry.'
  },
  {
    _id: 'circ-4',
    title: 'Guidelines for Free Distribution of Reusable Cloth Bags to Pilgrims and Merchants',
    category: 'Community Notice',
    priority: 'General',
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    content: 'Under the "Nadi Mitrula Sangham" civic program, 10,000 unbleached cotton carry bags are being supplied to riverbank flower and pooja merchants free of cost. Merchants are urged to hand over items only in reusable cotton bags and display eco-conservation placards on storefronts.'
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
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. HERO SECTION */}
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
                gap: '0.5rem',
                background: '#ecfdf5',
                color: '#059669',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1rem',
                border: '1px solid #a7f3d0'
              }}>
                <Megaphone size={15} />
                OFFICIAL COMMUNICATIONS
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Announcements & Communications Center
              </h1>

              <p style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}>
                Verified administrative circulars, river cleanliness advisories, official press releases, 
                and journalistic news coverage from Godavari Nadhi Paryavarana Parishubratha.
              </p>

              {/* Verified Trust Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <ShieldCheck size={16} />
                  Authorized Circulars
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Newspaper size={16} />
                  Dedicated Press Desk
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Sparkles size={16} />
                  Open Public Audits
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link
                  to="/announcements/news"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9375rem'
                  }}
                >
                  <Newspaper size={17} />
                  Latest News
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/announcements/press"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#ffffff',
                    color: '#059669',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    border: '1px solid #059669'
                  }}
                >
                  <FileText size={17} />
                  Press Releases
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img
                  src={godavariAnnouncementsHubImg}
                  alt="Godavari Public Announcements and Official Communications"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Overlay Top Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(5, 150, 105, 0.92)',
                  color: '#ffffff',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Megaphone size={13} />
                  PUBLIC COMMUNICATIONS
                </div>

                {/* Bottom Caption Strip */}
                <div style={{
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                      Godavari Nadhi Information Directorate
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Central Secretariat & Riverfront Dispatch
                    </div>
                  </div>
                  <span style={{
                    background: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #a7f3d0'
                  }}>
                    VERIFIED DISPATCH
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE PUBLIC ANNOUNCEMENT CHANNELS */}
      <section style={{
        padding: '3.5rem 1.5rem 2rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            background: '#ecfdf5',
            color: '#059669',
            padding: '0.3rem 0.8rem',
            borderRadius: '9999px',
            fontSize: '0.8125rem',
            fontWeight: 700,
            border: '1px solid #a7f3d0'
          }}>
            COMMUNICATION PORTALS
          </span>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>
            Choose an Information Stream
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Browse through daily ground news reporting or access formal press statements and white papers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {/* Card 1: Latest News */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 4px 15px -2px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1px solid #a7f3d0'
              }}>
                <Newspaper size={24} />
              </div>

              <div style={{
                display: 'inline-block',
                background: '#f1f5f9',
                color: '#475569',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                marginBottom: '0.5rem'
              }}>
                JOURNALISM & FIELD UPDATES
              </div>

              <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Latest News & Ground Stories
              </h3>

              <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Field reporting, milestone updates, school eco-club charters, and civic honors. 
                Follow frontline achievements and volunteer stories across Godavari ghats.
              </p>

              <div style={{
                background: '#f8fafc',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                marginBottom: '1.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#047857', marginBottom: '0.25rem' }}>
                  RECENT HIGHLIGHT:
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#334155' }}>
                  Kotilingala Ghat Achieves Landmark 90-Day Continuous Clean Shoreline Milestone.
                </div>
              </div>
            </div>

            <Link
              to="/announcements/news"
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                background: '#059669',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              Browse Latest News
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Press Releases */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 4px 15px -2px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1px solid #a7f3d0'
              }}>
                <FileText size={24} />
              </div>

              <div style={{
                display: 'inline-block',
                background: '#f1f5f9',
                color: '#475569',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                marginBottom: '0.5rem'
              }}>
                AUTHORIZED STATEMENTS
              </div>

              <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Press Releases & Statements
              </h3>

              <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Official policy positions, environmental white papers, municipal tripartite MoUs, 
                and media resource packs authorized by our Board of Trustees.
              </p>

              <div style={{
                background: '#f8fafc',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                marginBottom: '1.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#047857', marginBottom: '0.25rem' }}>
                  LATEST RELEASE:
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#334155' }}>
                  Statement on Full Commissioning of 22 Outfall Plastic-Trap Netting Barriers (PR/2026/08).
                </div>
              </div>
            </div>

            <Link
              to="/announcements/press"
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                background: '#059669',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              Browse Press Releases
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OFFICIAL CIRCULARS & NOTICES FEED */}
      <section style={{
        padding: '2.5rem 1.5rem 4rem',
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
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                Administrative Circulars & Advisories
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
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'all 0.15s ease',
                    background: activeFilter === fil ? '#059669' : '#ffffff',
                    color: activeFilter === fil ? '#ffffff' : '#475569',
                    boxShadow: activeFilter === fil ? '0 2px 5px rgba(5,150,105,0.2)' : '0 1px 3px rgba(0,0,0,0.05)'
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
                    fontSize: '0.9375rem',
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

      {/* 4. EMERGENCY NOTICE BANNER */}
      <section style={{
        padding: '0 1.5rem 3.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          borderRadius: '12px',
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
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#064e3b' }}>
                Notice an Environmental Hazard or Bulk Plastic Dumping?
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#047857' }}>
                Our Rapid Water Defense Desk dispatches field volunteers and notifies municipal authorities within 2 hours.
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            style={{
              padding: '0.6rem 1.25rem',
              background: '#059669',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap'
            }}
          >
            Report an Incident
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Announcements;

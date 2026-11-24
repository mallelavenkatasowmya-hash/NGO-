import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import awareHeroShowcaseImg from '../assets/aware-hero-showcase.jpg';
import awarePillarSchoolsImg from '../assets/aware-pillar-schools.jpg';
import awarePillarWorkshopsImg from '../assets/aware-pillar-workshops.jpg';
import awarePillarCampaignsImg from '../assets/aware-pillar-campaigns.jpg';
import awareSessionCollegeImg from '../assets/aware-session-college.jpg';
import awareSessionCompostImg from '../assets/aware-session-compost.jpg';
import awareSessionNukkadImg from '../assets/aware-session-nukkad.jpg';
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  Megaphone, 
  GraduationCap, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Drama,
  Recycle,
  Heart,
  ExternalLink
} from 'lucide-react';

const awarenessPillars = [
  {
    title: 'School & College Drives',
    tag: 'Academic Outreach',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: awarePillarSchoolsImg,
    path: '/awareness/schools',
    desc: 'Interactive river basin science, digital water probe testing, and student eco-ambassador charters across educational campuses.',
    metric: '12,500+ Students Certified',
    highlights: [
      'Digital Water Quality Probes',
      'Basin Ecology Curricula',
      'Student Eco-Club Charters'
    ]
  },
  {
    title: 'Public Workshops',
    tag: 'Community Masterclasses',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: awarePillarWorkshopsImg,
    path: '/awareness/workshops',
    desc: 'Practical masterclasses teaching families and temple trusts to transform floral offerings into compost and craft banana-leaf pooja vessels.',
    metric: '65+ Workshops Completed',
    highlights: [
      'Floral Waste Composting',
      'Biodegradable Pooja Vessels',
      'Ghat Merchant Segregation'
    ]
  },
  {
    title: 'Youth Campaigns',
    tag: 'Cultural Arts & Mobilization',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: awarePillarCampaignsImg,
    path: '/awareness/campaigns',
    desc: 'Lively Telugu street theatre (Nukkad Natak) on bathing ghats, dawn riverfront cyclothons, and the public Nadi Prathijna oath.',
    metric: '12,000+ Pledges Signed',
    highlights: [
      'Ghat Nukkad Natak Theatre',
      'Dawn Riverfront Cyclothons',
      'Nadi Prathijna Citizen Pledge'
    ]
  }
];

const scheduledSessions = [
  {
    title: 'Aditya Degree College: River Basin Science Excursion',
    category: 'School & College Drives',
    image: awareSessionCollegeImg,
    date: 'Upcoming Tuesday • 10:30 AM',
    location: 'Aditya College Auditorium, Danavaipeta',
    lead: 'Dr. K. V. Subba Rao',
    desc: 'Interactive science demo on river water chemistry with on-stage probe testing and eco-charter distribution.'
  },
  {
    title: 'Temple Floral Composting & Leaf-Pooja Masterclass',
    category: 'Public Workshops',
    image: awareSessionCompostImg,
    date: 'Upcoming Saturday • 09:30 AM',
    location: 'Kotilingala Ghat Riverside Pavilion',
    lead: 'Smt. P. Lakshmi Devi',
    desc: 'Hands-on practical training on diverting sacred temple marigolds into high-grade organic bio-compost.'
  },
  {
    title: 'Pushkar Ghat Weekend Nukkad Natak Performance',
    category: 'Youth Campaigns',
    image: awareSessionNukkadImg,
    date: 'Upcoming Sunday • 05:30 PM',
    location: 'Pushkar Ghat Promenade Steps',
    lead: 'NGO Youth Theatre Troupe',
    desc: 'Satirical street play in Telugu addressing single-use plastics and celebrating collective Godavari heritage.'
  }
];

const AwarenessPrograms = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'School & College Drives', 'Public Workshops', 'Youth Campaigns'];

  const filteredSessions = activeTab === 'All'
    ? scheduledSessions
    : scheduledSessions.filter(s => s.category === activeTab);

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
                <span>ENVIRONMENTAL EDUCATION • AWARENESS HUB</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em'
              }}>
                Public Awareness & Education
              </h1>

              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#059669',
                margin: '0 0 0.75rem',
                lineHeight: 1.45
              }}>
                Educating Minds, Awakening Hearts, and Transforming Habits Across Communities.
              </div>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Lasting conservation happens when citizens understand why River Godavari matters. 
                Explore our three dedicated educational pathways designed for classrooms, community halls, and cultural gathering ghats.
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
                  <GraduationCap size={14} color="#059669" />
                  <span>35+ Campuses</span>
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
                  <span>65+ Workshops</span>
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
                  <Megaphone size={14} color="#059669" />
                  <span>12,000+ Pledges</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="#pillars"
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
                  <span>Explore 3 Pillars</span>
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
                  <span>Join as Volunteer</span>
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
                  src={awareHeroShowcaseImg}
                  alt="NGO Awareness Programs in Action"
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
                      Grassroots Awareness on Riverbanks
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Mobilizing over 12,000 youth, families & pilgrims across the Godavari delta
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE CORE AWARENESS PILLARS (CARD SHOWCASE) */}
      <section id="pillars" style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
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
              EDUCATIONAL PATHWAYS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Three Pillars of Public Environmental Education
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Structured, hands-on learning models delivering measurable ecological impact across classrooms and bathing ghats.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {awarenessPillars.map((pillar, idx) => (
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
                      <span>Explore Dedicated Hub</span>
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
              { val: '35+', label: 'Educational Campuses', sub: 'High schools & degree colleges' },
              { val: '65+', label: 'Community Workshops', sub: 'Floral composting & leaf craft' },
              { val: '12,000+', label: 'Citizens Pledged', sub: 'Signed Nadi Prathijna' },
              { val: '100%', label: 'Free Public Service', sub: 'All training kits free of cost' }
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

      {/* 4. UPCOMING SESSIONS SCHEDULE (NOW WITH CLEAR PHOTOGRAPHS) */}
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
              GROUND SESSIONS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Scheduled Community Awareness Sessions
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Attend an educational drive, register your school, or join our weekend street theater performances.
            </p>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeTab === tab ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: activeTab === tab ? '#059669' : '#f8fafc',
                  color: activeTab === tab ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredSessions.map((session, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Visual Thumbnail Image */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={session.image}
                    alt={session.title}
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
                    border: '1px solid #a7f3d0'
                  }}>
                    {session.category}
                  </div>
                </div>

                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={13} />
                      <span>{session.date}</span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                      {session.title}
                    </h3>

                    <div style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={13} color="#059669" style={{ flexShrink: 0 }} />
                      <span>{session.location}</span>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1rem' }}>
                      {session.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                      Lead: {session.lead}
                    </span>
                    <Link 
                      to="/contact" 
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#059669',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Register</span>
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
            COLLABORATE FOR CONSERVATION
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Bring Environmental Education to Your Neighborhood or Institution
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Partner with us to host a free school drive, community floral composting workshop, or ghat street play.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
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
              <span>Request a Program Session</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/register"
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
              Join as Youth Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AwarenessPrograms;

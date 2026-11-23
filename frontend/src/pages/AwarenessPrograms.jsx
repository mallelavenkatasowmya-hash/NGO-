import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import godavariSchoolDrivesImg from '../assets/godavari-school-drives.jpg';
import godavariPublicWorkshopsImg from '../assets/godavari-public-workshops.jpg';
import godavariYouthCampaignsImg from '../assets/godavari-youth-campaigns.jpg';
import godavariYouthEcoImg from '../assets/godavari-youth-eco.jpg';
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
  Heart
} from 'lucide-react';

const awarenessPillars = [
  {
    title: 'School & College Drives',
    tag: 'Academic Outreach',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariSchoolDrivesImg,
    path: '/awareness/schools',
    desc: 'Bringing multimedia river basin science, hands-on water test demos, and student eco-ambassador charters into 35+ high schools and colleges.',
    metric: '12,500+ Students Certified'
  },
  {
    title: 'Public Workshops',
    tag: 'Community Masterclasses',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariPublicWorkshopsImg,
    path: '/awareness/workshops',
    desc: 'Teaching families, pilgrims, and temple trusts how to convert floral offerings into bio-compost and craft banana-leaf pooja vessels.',
    metric: '65+ Workshops Completed'
  },
  {
    title: 'Youth Campaigns',
    tag: 'Cultural Arts & Mobilization',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    image: godavariYouthCampaignsImg,
    path: '/awareness/campaigns',
    desc: 'Staging vibrant Telugu street theatre (Nukkad Natak) on bathing ghats, hosting dawn cyclothons, and administering the Nadi Prathijna citizen pledge.',
    metric: '12,000+ Pledges Signed'
  }
];

const scheduledSessions = [
  {
    title: 'Aditya Degree College: River Basin Science Excursion',
    category: 'School & College Drives',
    date: 'Upcoming Tuesday • 10:30 AM',
    location: 'Aditya College Auditorium, Danavaipeta',
    lead: 'Dr. K. V. Subba Rao',
    desc: 'Interactive lecture on river water chemistry followed by on-stage digital probe testing demonstration.'
  },
  {
    title: 'Temple Floral Composting & Leaf-Pooja Masterclass',
    category: 'Public Workshops',
    date: 'Upcoming Saturday • 09:30 AM',
    location: 'Kotilingala Ghat Riverside Pavilion',
    lead: 'Smt. P. Lakshmi Devi',
    desc: 'Hands-on practical training on diverting sacred temple marigolds from river waters into organic compost.'
  },
  {
    title: 'Pushkar Ghat Weekend Nukkad Natak Performance',
    category: 'Youth Campaigns',
    date: 'Upcoming Sunday • 05:30 PM',
    location: 'Pushkar Ghat Promenade Steps',
    lead: 'NGO Youth Theatre Troupe',
    desc: 'Original satirical comedy in Telugu addressing single-use plastic cups and celebrating River Godavari.'
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
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '5.5rem 1.5rem 5rem',
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.52) 0%, rgba(6, 78, 59, 0.42) 50%, rgba(15, 23, 42, 0.72) 100%), url(${godavariYouthEcoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Soft Radial Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(134, 239, 172, 0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '980px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 1rem',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Awareness Programs
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
            fontWeight: 600,
            color: '#86efac',
            margin: '0 auto 1.25rem',
            lineHeight: 1.5,
            maxWidth: '780px',
            textShadow: '0 1px 6px rgba(0, 0, 0, 0.35)'
          }}>
            Educating Minds, Awakening Hearts, and Transforming Habits Across Communities.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: '#ecfdf5',
            maxWidth: '760px',
            margin: '0 auto 2rem',
            lineHeight: 1.75,
            opacity: 0.95,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)'
          }}>
            Lasting conservation happens when citizens understand why River Godavari matters. 
            Explore our three dedicated educational pathways designed for classrooms, community halls, and cultural gathering ghats.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/awareness/schools" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '7px 16px', borderRadius: '999px', fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
              <GraduationCap size={14} color="#86efac" />
              <span>School Drives</span>
            </Link>
            <Link to="/awareness/workshops" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '7px 16px', borderRadius: '999px', fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
              <Users size={14} color="#86efac" />
              <span>Public Workshops</span>
            </Link>
            <Link to="/awareness/campaigns" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '7px 16px', borderRadius: '999px', fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
              <Megaphone size={14} color="#86efac" />
              <span>Youth Campaigns</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE AWARENESS PILLARS (CARD SHOWCASE) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              OUR METHODOLOGY
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Three Pillars of Public Environmental Education
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Click into each dedicated program to explore specific syllabi, practical workshop schedules, and campaign activities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {awarenessPillars.map((pillar, idx) => (
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
                    <span>Explore Dedicated Page</span>
                    <ArrowRight size={15} color="#059669" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. IMPACT STATISTICS STRIP */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { val: '35+', label: 'Educational Campuses', sub: 'Schools & degree colleges' },
              { val: '65+', label: 'Community Workshops', sub: 'Floral composting & leaf craft' },
              { val: '12,000+', label: 'Citizens Pledged', sub: 'Signed Nadi Prathijna' },
              { val: '100%', label: 'Free Public Service', sub: 'All kits & events free of charge' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                borderLeft: '4px solid #059669'
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

      {/* 4. UPCOMING SESSIONS SCHEDULE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              SCHEDULE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Scheduled Community Awareness Sessions
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
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
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeTab === tab ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: activeTab === tab ? '#059669' : '#ffffff',
                  color: activeTab === tab ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filteredSessions.map((session, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {session.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                      {session.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                    {session.title}
                  </h3>

                  <div style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="#059669" />
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

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
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

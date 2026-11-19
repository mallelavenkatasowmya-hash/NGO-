import React from 'react';
import { Link } from 'react-router-dom';
import godavariMissionHeroImg from '../../assets/godavari-mission-hero.jpg';
import godavariCleanupImg from '../../assets/godavari-cleanup.jpg';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Trash2, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Award,
  AlertCircle
} from 'lucide-react';

const impactStats = [
  { value: '45+', label: 'Drives Completed', sub: 'Across Rajahmundry ghats' },
  { value: '28 Tons', label: 'Waste Removed', sub: 'Plastics & synthetic debris' },
  { value: '1,200+', label: 'Volunteers Mobilized', sub: 'Youth, elders & pilgrims' },
  { value: '4 Ghats', label: 'Permanently Monitored', sub: 'Kotilingala, Pushkar & more' }
];

const cleanupSteps = [
  {
    step: '01',
    title: 'Assembly & Safety Briefing',
    desc: 'Volunteers gather at 6:30 AM at the designated ghat for registration, distribution of puncture-resistant safety gloves, sashes, and safety orientation.'
  },
  {
    step: '02',
    title: 'Zonal Embankment Sweeping',
    desc: 'The ghat is divided into grids. Teams methodically clear plastic bottles, synthetic bags, cloth offerings, and floating shoreline litter.'
  },
  {
    step: '03',
    title: 'On-Site Waste Segregation',
    desc: 'Collected debris is segregated on-site into recyclable plastics, biodegradable floral waste, and non-recyclable discards using color-coded jute bags.'
  },
  {
    step: '04',
    title: 'Weighing & Municipal Transfer',
    desc: 'Total recovered waste is logged and weighed for public transparency, then loaded onto designated municipal recycling vehicles for authorized processing.'
  }
];

const ghatSchedules = [
  {
    ghat: 'Kotilingala Ghat',
    location: 'Godavari Bund Road, Rajahmundry',
    timing: '1st & 3rd Saturday • 6:30 AM – 9:00 AM',
    lead: 'Field Coordinator: Sri M. Ramu Naidu',
    status: 'High Priority Bathing Ghat'
  },
  {
    ghat: 'Pushkar Ghat',
    location: 'Opp. Pushkar Nagar, Rajahmundry',
    timing: '2nd & 4th Sunday • 6:30 AM – 9:00 AM',
    lead: 'Youth Coordinator: Dr. K. V. Subba Rao',
    status: 'Pilgrimage Heritage Zone'
  },
  {
    ghat: 'Saraswathi Ghat',
    location: 'Kotipalli Bus Stand Road',
    timing: 'Bi-Weekly Saturday • 7:00 AM – 9:00 AM',
    lead: 'Community Lead: Smt. P. Lakshmi Devi',
    status: 'Cultural Ritual Area'
  },
  {
    ghat: 'Markandeya Ghat',
    location: 'Near Old River Bridge',
    timing: 'Monthly Mega Drive • 6:30 AM – 9:30 AM',
    lead: 'Joint Volunteer Cadre',
    status: 'Drainage Inlet Buffer'
  }
];

const ActivityCleanliness = () => {
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
            {/* Left Column: Cleanliness Info */}
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
                <Trash2 size={14} />
                <span>FIELD ACTIVITY #01</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Cleanliness Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Restoring and Safeguarding the Sacred Ghats of River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Through scheduled bi-weekly cleanup drives, our dedicated volunteers clear plastic waste, 
                protect aquatic habitats, and foster uncompromising civic pride across Rajahmundry ghats.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Bi-Weekly Weekends</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#059669" />
                  <span>4 Bathing Ghats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>100% Recycled</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Cleanliness Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCleanupImg} 
                  alt="Godavari Active Volunteer Cleanliness Drive" 
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
                      Kotilingala Ghat Weekend Sanitation Drive — Rajahmundry
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
                    Active Drive
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FAST STATS BAR */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {impactStats.map((stat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#059669', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
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

      {/* 3. NARRATIVE & CRYSTAL-CLEAR PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Narrative */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Trash2 size={18} />
                <span>On-Ground Execution</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Systematic Shoreline &amp; Ghat Sanitation
              </h2>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                Every weekend, dozens of citizens, youth, students, and riverside shopkeepers join our trained coordinators 
                at sunrise. We do not just pick up litter; we operate with structured zoning, strict safety gear, and complete 
                chain-of-custody recycling.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Targeted elimination of single-use plastic cups, water pouches, and non-biodegradable offerings',
                  'Clearing sunken plastic netting and tangled nylon cords from ancient stone ghat steps',
                  'Puncture-resistant industrial gloves, biohazard grabbers, and first aid kits on every site',
                  '100% of collected plastics channeled to authorized municipal recycling facilities'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Card (100% Clear, Razor-Sharp) */}
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
                  alt="Restored and Clean Shoreline along River Godavari" 
                  style={{ width: '100%', height: '390px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '0.85rem 1.25rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Restored Shoreline &amp; Unpolluted Riverfront Environment
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
                    Active Drive
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR-STAGE CLEANUP METHODOLOGY */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              HOW WE OPERATE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              The 4-Stage Cleanliness Lifecycle
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Our drives follow a disciplined, scientific process ensuring maximum waste diversion and volunteer safety.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {cleanupSteps.map((step, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. GHAT SCHEDULES & ACTIVE SITES */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              RECURRING CALENDAR
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Scheduled Ghat Cleanup Locations
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Open to all citizens. No prior equipment needed — our NGO provides all safety gear on site.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {ghatSchedules.map((item, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#059669',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    width: 'fit-content',
                    marginBottom: '0.85rem'
                  }}>
                    {item.status}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {item.ghat}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
                    <MapPin size={15} color="#059669" />
                    <span>{item.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0f172a', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1rem' }}>
                    <Clock size={15} color="#0284c7" />
                    <span>{item.timing}</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                  {item.lead}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
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
            BE PART OF THE MOVEMENT
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Join the Next River Cleanliness Drive
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Spend a Saturday morning by the river. All safety equipment, refreshments, and volunteer certificates provided.
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
              <span>Register as Volunteer</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/activities"
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
              View All Activities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityCleanliness;

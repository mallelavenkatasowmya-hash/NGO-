import React from 'react';
import { Link } from 'react-router-dom';
import godavariCleanupImg from '../assets/godavari-cleanup.jpg';
import { 
  Trash2, 
  Filter, 
  TreeDeciduous, 
  Sparkles, 
  GraduationCap, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Target,
  Clock,
  MapPin,
  HeartHandshake
} from 'lucide-react';

const objectivesList = [
  {
    num: '01',
    title: 'Eliminate Ghat Plastic Pollution',
    category: 'Ghat Sanitation',
    icon: Trash2,
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&auto=format&fit=crop&q=85',
    desc: 'Conduct bi-weekly cleanliness drives at major Godavari ghats — Kotilingala, Pushkar, Saraswathi, and Railway Ghats — collecting, segregating, and responsibly disposing of plastic, synthetic garments, and debris.',
    targets: [
      'Minimum 2 weekend cleanup drives per month per ghat',
      '100% waste segregation into recyclable & biodegradable streams',
      'Direct coordination with municipal corporations for rapid transport'
    ]
  },
  {
    num: '02',
    title: 'Canal Plastic Barrier Network',
    category: 'Water Interception',
    icon: Filter,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=85',
    desc: 'Engineer, install, and service heavy-duty river-inlet netting barriers across drainage canals entering the Godavari to intercept floating plastics and bottles before they enter the mainstream water.',
    targets: [
      '22 active plastic-trap barrier sites operational by end of 2025',
      'Scheduled weekly waste extraction and mesh maintenance',
      'GPS mapping and public transparency on intercepted tonnage'
    ]
  },
  {
    num: '03',
    title: 'Bund Afforestation & Soil Stabilization',
    category: 'Corridor Forestry',
    icon: TreeDeciduous,
    color: '#15803d',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=85',
    desc: 'Plant and nurture 10,000 indigenous trees (Neem, Peepal, Pongamia, Tamarind) along vulnerable Godavari embankments to stabilize eroding bunds, prevent siltation, and restore native bird habitats.',
    targets: [
      'Plant 2,000 native saplings annually with an 85% survival rate',
      'Establish community youth groups as dedicated "Tree Guardians"',
      'Bi-annual ecological surveys to document canopy expansion'
    ]
  },
  {
    num: '04',
    title: 'Eco-Friendly Festival & Pilgrimage Practices',
    category: 'Cultural Stewardship',
    icon: Sparkles,
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=85',
    desc: 'Partner with temple boards, priests, and pilgrims to replace harmful immersion offerings — plaster of Paris, synthetic dyes, and plastic bags — with unbaked clay and biodegradable alternatives.',
    targets: [
      'Active partnerships with 50+ riverside temples and mutts',
      'Distribute 10,000 compostable leaf-bowl sets each festival season',
      'Deploy volunteer awareness squads during Pushkaram and Ugadi'
    ]
  },
  {
    num: '05',
    title: 'Community Education & Youth Mobilization',
    category: 'Public Awareness',
    icon: GraduationCap,
    color: '#b45309',
    bg: '#fffbeb',
    border: '#fde68a',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=85',
    desc: 'Build an enduring generation of informed river guardians through interactive school modules, college cleanliness drives, street plays (nukkad nataks), and digital campaigns across East & West Godavari.',
    targets: [
      '50 interactive school and collegiate environmental workshops yearly',
      'Onboard and train 1,000 youth volunteers annually',
      'Conduct quarterly youth leadership river ambassador certificates'
    ]
  },
  {
    num: '06',
    title: 'Live Water Quality & Ecological Monitoring',
    category: 'Scientific Auditing',
    icon: Activity,
    color: '#0f766e',
    bg: '#f0fdfa',
    border: '#99f6e4',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=85',
    desc: 'Operate a citizen-science water testing network across Godavari ghats, analyzing essential hydrological indicators (Dissolved Oxygen, pH, Turbidity, Coliform) and publishing transparent live data.',
    targets: [
      '15 automated water testing stations deployed across ghats by 2027',
      'Monthly public water health index reports shared openly',
      'Direct data sharing with State Pollution Control Board & GVMC'
    ]
  }
];

const AboutObjectives = () => {
  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL HEADER */}
      <section className="clean-page-header" style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
            WHAT WE DO
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.85rem)', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Our Strategic Objectives
          </h1>
          <p style={{ fontSize: '1.18rem', fontWeight: 600, color: '#059669', margin: '0 0 1rem', lineHeight: 1.5 }}>
            Six Action-Driven Pillars for Rejuvenating River Godavari.
          </p>
          <p className="clean-page-sub" style={{ fontSize: '1.02rem', color: '#64748b', maxWidth: '740px', margin: '0 auto', lineHeight: 1.75 }}>
            Every objective translates our founding mission into measurable, transparent, and community-led 
            conservation programs across the Godavari delta.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW NARRATIVE & IMPACT CARD */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Column */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Target size={18} />
                <span>Operational Framework</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Measurable Milestones &amp; Ground Execution
              </h2>
              
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                We do not limit our work to advocacy alone. Each of our six core objectives is backed by 
                tangible targets, dedicated field coordinators, and public accountability metrics.
              </p>
              
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.75rem' }}>
                By pairing community volunteer energy with scientific guidance and civic administration 
                support, we turn daily conservation efforts into lasting regional impact.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#059669', display: 'block' }}>100%</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Ground Verification</span>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7', display: 'block' }}>Bi-Weekly</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Ghat Cleanups</span>
                </div>
              </div>
            </div>

            {/* Right Column Photo Card */}
            <div>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.14)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                background: '#0f172a'
              }}>
                <img 
                  src={godavariCleanupImg} 
                  alt="Godavari Cleanliness Action Team" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 78, 59, 0.88) 0%, rgba(6, 78, 59, 0.35) 45%, transparent 75%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: '2rem'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    padding: '5px 14px',
                    borderRadius: '999px',
                    color: '#86efac',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    width: 'fit-content',
                    marginBottom: '0.75rem'
                  }}>
                    <ShieldCheck size={13} />
                    <span>Active Stewardship</span>
                  </div>
                  <p style={{ 
                    color: '#ffffff', 
                    fontSize: '1.25rem', 
                    fontWeight: 800, 
                    margin: 0, 
                    lineHeight: 1.35,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}>
                    Driven by Dedicated Volunteers &amp; Public Trust.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIX OBJECTIVES (RESPONSIVE PROFESSIONAL GRID) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              TARGET AREAS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Core Action Objectives
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '640px', margin: '0 auto' }}>
              Detailed breakdown of our key programs, operational methods, and verified target deliverables.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}>
            {objectivesList.map((obj) => {
              const Icon = obj.icon;
              return (
                <div 
                  key={obj.num}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  {/* Photo Thumbnail Header */}
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={obj.image} 
                      alt={obj.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(15, 23, 42, 0.78)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {obj.category}
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '14px',
                      background: '#064e3b',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '6px'
                    }}>
                      PILLAR {obj.num}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: obj.bg,
                        color: obj.color,
                        border: `1px solid ${obj.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon size={22} />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
                        {obj.title}
                      </h3>
                    </div>

                    <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                      {obj.desc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem'
                    }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Target Deliverables
                      </span>
                      {obj.targets.map((target, tIdx) => (
                        <div key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5 }}>
                            {target}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ACCOUNTABILITY & TRANSPARENCY CALLOUT */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.5rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Transparency &amp; Governance
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0.75rem' }}>
                Every Action Is Documented &amp; Verified
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                Our field operations undergo weekly log reviews, photographic audit trails, and open reports 
                so our community of donors, volunteers, and citizens can follow our real-world progress.
              </p>
            </div>

            <Link
              to="/activities"
              className="btn btn-outline btn-lg"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#cbd5e1',
                color: '#0f172a',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.75rem',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Explore Live Activities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL CTA */}
      <section style={{ padding: '5rem 1.5rem', background: '#064e3b', color: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#86efac',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            BE PART OF THE CHANGE
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, margin: '0 0 1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Help Us Achieve These Objectives
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#d1fae5', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto 1.25rem' }}>
            Join our growing community of volunteers and make a direct, visible impact on the Godavari River.
          </p>

          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#86efac', margin: '0 auto 2.5rem' }}>
            Together for a Cleaner Environment. Together for a Better Future.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: '#ffffff',
                color: '#064e3b',
                fontWeight: 700,
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}
            >
              <span>Join As Volunteer</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/activities"
              className="btn btn-outline btn-lg"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#ffffff',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '8px'
              }}
            >
              <span>View All Activities</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutObjectives;

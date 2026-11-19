import React from 'react';
import { Link } from 'react-router-dom';
import godavariCleanupImg from '../assets/godavari-cleanup.jpg';
import godavariMissionHeroImg from '../assets/godavari-mission-hero.jpg';
import heroBannerImg from '../assets/hero-banner.jpg';
import { 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Users, 
  BarChart3, 
  HeartHandshake, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

const coreValues = [
  {
    title: 'Environmental Responsibility',
    desc: 'Every action is measured by its long-term ecological impact on the river basin. We act as caretakers and stewards, not just consumers.',
    icon: Globe2,
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0'
  },
  {
    title: 'Community First',
    desc: 'Enduring change requires deep local ownership. We empower riverbank residents, youth, and temple committees to lead and protect their ghats.',
    icon: Users,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    title: 'Science-Based Action',
    desc: 'Our conservation initiatives are driven by regular water quality metrics, hydrological data, and expert environmental assessments.',
    icon: BarChart3,
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff'
  },
  {
    title: 'Cultural Harmony',
    desc: 'We honor the sacred spiritual connection people share with River Godavari, collaborating with pilgrims and priests to foster eco-friendly traditions.',
    icon: HeartHandshake,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a'
  }
];

const strategicRoadmap = [
  {
    year: '2025',
    phase: 'Phase 01',
    title: 'Canal Plastic-Trap Infrastructure',
    desc: 'Deploy 22 municipal-inlet netting barriers across key drainage canals in Rajahmundry district to intercept floating waste before entering the river.',
    status: 'In Progress',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857'
  },
  {
    year: '2026',
    phase: 'Phase 02',
    title: 'Riparian Forest Afforestation',
    desc: 'Complete extensive afforestation across 8 km of vulnerable river embankment with 10,000 indigenous Neem, Peepal, and Pongamia trees.',
    status: 'Planned',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8'
  },
  {
    year: '2027',
    phase: 'Phase 03',
    title: 'Live Water Quality Dashboard',
    desc: 'Launch real-time citizen-accessible monitoring stations across 15 ghats measuring Dissolved Oxygen, pH, Turbidity, and Coliform count.',
    status: 'Planned',
    badgeBg: '#faf5ff',
    badgeColor: '#7c3aed'
  },
  {
    year: '2028',
    phase: 'Phase 04',
    title: 'Basin-Wide Volunteer Network',
    desc: 'Expand volunteer cadres to 2,000 trained environmental coordinators spanning 20 districts along the Godavari river basin.',
    status: 'Planned',
    badgeBg: '#fffbeb',
    badgeColor: '#b45309'
  },
  {
    year: '2030',
    phase: 'Phase 05',
    title: '60% Net Pollution Reduction',
    desc: 'Achieve a verified 60% reduction in plastic pollution across major pilgrimage ghats, establishing Godavari as a national model of civic river conservation.',
    status: 'Vision Target',
    badgeBg: '#f0fdfa',
    badgeColor: '#0f766e'
  }
];

const AboutMission = () => {
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
            {/* Left Column: Mission & Vision Statement */}
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
                <span>PURPOSE &amp; DIRECTION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Our Mission &amp; Vision
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                The Guiding Principles and Long-Term Aspirations Behind Our Conservation Movement.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Every volunteer initiative, community drive, and environmental policy of Godhavari Nadhi Paryavarana Parishubratha 
                is anchored in a clear roadmap for lasting ecological revival across the river basin.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#mission" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Target size={14} color="#059669" />
                  <span>Immediate Mission</span>
                </a>
                <a href="#vision" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Eye size={14} color="#0284c7" />
                  <span>Long-Term Vision</span>
                </a>
                <a href="#roadmap" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155', textDecoration: 'none' }}>
                  <Compass size={14} color="#7c3aed" />
                  <span>2025–2030 Roadmap</span>
                </a>
              </div>
            </div>

            {/* Right Column: Crystal-Clear Distinct Sunrise Photo */}
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
                  alt="Godavari River at Dawn - Guiding Vision" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari River Basin — Guiding Ecological Horizon
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#0369a1',
                    background: '#f0f9ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bae6fd',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Vision
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION: OUR MISSION (TEXT + VOLUNTEER PHOTO) */}
      <section id="mission" style={{ padding: '4.5rem 1.5rem', background: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Target size={18} />
                <span>Immediate Mission</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Mobilizing Communities for Direct Action
              </h2>
              
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, margin: '0 0 1.5rem' }}>
                To systematically mobilize citizens, youth, and riverfront merchants to maintain uncompromising cleanliness across 
                all Godavari ghats, eliminate plastic pollution from the riverbed, and safeguard the ecological purity of our 
                sacred waters through sustainable community stewardship.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Organize bi-weekly cleanliness drives at Kotilingala, Pushkar, and Saraswathi Ghats',
                  'Install and maintain plastic-trapping barrier nets across drainage channels',
                  'Educate pilgrims, merchants, and youth on sustainable, eco-friendly rituals',
                  'Build a 5,000-member certified volunteer stewardship network by 2030'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo (Clean, Unobstructed, Razor-Sharp) */}
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
                  alt="Active Godavari Cleanliness Drive" 
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
                      Active Ghat Cleanliness Drive — Rajahmundry
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
                    Field Action
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION: OUR VISION (RIVER NATURE PHOTO + TEXT) */}
      <section id="vision" style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Photo (Authentic River Godavari, Crystal-Clear & Unobstructed) */}
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
                  alt="Pristine Free-Flowing River Godavari Corridor" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Living River Godavari Corridor — Long-Term Ecological Horizon
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#0369a1',
                    background: '#f0f9ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bae6fd',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Future Vision
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Eye size={18} />
                <span>Our Vision</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Enduring River Health for Future Generations
              </h2>
              
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, margin: '0 0 1.5rem' }}>
                A pristine, free-flowing, and pollution-free River Godavari celebrated for its biological splendor, clean bathing ghats, 
                and deep cultural reverence — guarded vigilantly by every riverbank community for generations to come.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Zero single-use plastic across all major Godavari bathing and pilgrimage ghats',
                  'Fully restored native riparian forest corridors along eroding river embankments',
                  'Revived aquatic biodiversity, fish migration corridors, and riverine ecology',
                  'Recognition as India\'s benchmark public-volunteer river rejuvenation model'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: CORE VALUES (PROFESSIONAL SVG GRID) */}
      <section id="values" style={{ padding: '4.5rem 1.5rem', background: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              WHAT DRIVES US
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Four fundamental principles that guide how our coordinators, members, and trustees work, lead, and serve.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '2rem 1.75rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: val.bg,
                    color: val.color,
                    border: `1px solid ${val.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SECTION: STRATEGIC ROADMAP 2025–2030 */}
      <section id="roadmap" style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              STRATEGIC ROADMAP
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Strategic Goals 2025–2030
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              A structured five-year operational roadmap to accelerate conservation impact across the Godavari basin.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {strategicRoadmap.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem 2rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* Year Pill */}
                <div style={{
                  background: '#064e3b',
                  color: '#ffffff',
                  borderRadius: '10px',
                  padding: '0.55rem 1.1rem',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '80px'
                }}>
                  <span>{item.year}</span>
                  <span style={{ fontSize: '0.68rem', color: '#86efac', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.06em' }}>
                    {item.phase}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {item.title}
                    </h3>
                    <span style={{
                      background: item.badgeBg,
                      color: item.badgeColor,
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {item.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
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
            COLLABORATE FOR CONSERVATION
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, margin: '0 0 1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Aligned With Our Mission?
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#d1fae5', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto 1.25rem' }}>
            See the specific objectives we pursue every day, or join our community of active stewards along the Godavari.
          </p>

          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#86efac', margin: '0 auto 2.5rem' }}>
            Together for a Cleaner Environment. Together for a Better Future.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/about/objectives"
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
              <span>View Our Objectives</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/register"
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
              <span>Join As Volunteer</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutMission;

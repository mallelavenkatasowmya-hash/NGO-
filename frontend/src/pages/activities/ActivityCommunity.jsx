import React from 'react';
import { Link } from 'react-router-dom';
import godavariMissionHeroImg from '../../assets/godavari-mission-hero.jpg';
import godavariCommunityImg from '../../assets/godavari-community-programs.jpg';
import godavariCleanupImg from '../../assets/godavari-cleanup.jpg';
import { 
  Sparkles, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Megaphone,
  Award,
  BookOpen,
  Store
} from 'lucide-react';

const stats = [
  { value: '85+', label: 'Community Workshops', sub: 'At ghats, schools & halls' },
  { value: '3,500+', label: 'Citizens Engaged', sub: 'Trained in waste reduction' },
  { value: '25+', label: 'Schools & Colleges', sub: 'Active eco-ambassador clubs' },
  { value: '40+', label: 'Merchants Pledged', sub: 'Zero single-use plastic ban' }
];

const programPillars = [
  {
    num: '01',
    title: 'School & College Eco-Clubs',
    desc: 'Interactive nature-walk modules, river water test demonstrations, and student leadership certifications creating lifelong conservation champions.'
  },
  {
    num: '02',
    title: 'Eco-Friendly Pilgrimage Guidance',
    desc: 'Collaborating with temple trusts and priests to replace plastic pooja bags with banana-leaf plates and cloth bags, channeling sacred floral waste into compost.'
  },
  {
    num: '03',
    title: 'Street Theatres & Ghat Awareness',
    desc: 'Engaging weekend performances (nukkad nataks), puppet storytelling, and folk songs at Pushkar and Kotilingala Ghats communicating river cleanliness.'
  },
  {
    num: '04',
    title: 'Riverside Merchant Pledges',
    desc: 'Empowering flower sellers, tea stalls, and souvenir kiosks to abandon disposable plastic cups, offering affordable subsidized jute and paper packaging.'
  }
];

const volunteerRoles = [
  {
    role: 'Ghat Youth Ambassador',
    badge: 'Youth Leadership',
    desc: 'Lead weekend cleanup cohorts, register pilgrims for cleanliness pledges, and coordinate on-site logistics.'
  },
  {
    role: 'Environmental Educator',
    badge: 'Workshops & Schools',
    desc: 'Deliver slide presentations, river ecology talks, and interactive demonstrations at local educational institutions.'
  },
  {
    role: 'Field Documenter & Media',
    badge: 'Digital Advocacy',
    desc: 'Capture photos, drone video, and volunteer stories to amplify the conservation movement across social media.'
  },
  {
    role: 'Merchant Alliance Coordinator',
    badge: 'Civic Partnerships',
    desc: 'Liaise with local market associations and municipal authorities to ensure sustainable packaging adoption.'
  }
];

const ActivityCommunity = () => {
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
            {/* Left Column: Community Info */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f5f3ff',
                border: '1px solid #ddd6fe',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#6d28d9',
                marginBottom: '1rem'
              }}>
                <Users size={14} />
                <span>FIELD ACTIVITY #04</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Community Programs
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#7c3aed',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Inspiring Civic Pride and Grassroots Stewardship.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                True ecological preservation begins in the hearts of citizens. We unite students, families, priests, 
                and riverside merchants to cultivate sustainable, culturally reverent habits along River Godavari.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <GraduationCap size={14} color="#7c3aed" />
                  <span>25+ Schools &amp; Colleges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Store size={14} color="#7c3aed" />
                  <span>40+ Merchant Alliances</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Award size={14} color="#7c3aed" />
                  <span>Ambassador Badges</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Community Workshop Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCommunityImg} 
                  alt="Godavari Riverfront Community Awareness Circle" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Riverfront Community Awareness Circle
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#6d28d9',
                    background: '#f5f3ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #ddd6fe',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Workshops
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
            {stats.map((stat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#7c3aed', lineHeight: 1.1, marginBottom: '0.35rem' }}>
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#7c3aed', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Users size={18} />
                <span>Civic Mobilization</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Empowering Communities to Own Their River
              </h2>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                River conservation cannot rely on government intervention alone. Our community development programs work 
                directly with riverfront residential welfare associations, boat operators, and pilgrims. By fostering dialogue 
                and respecting local heritage, we transform bystanders into passionate river custodians.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Hands-on interactive nature modules in over 25 Rajahmundry high schools and universities',
                  'Distribution of reusable cotton pooja kits to eliminate plastic bag offerings',
                  'Weekend educational kiosks stationed at high-traffic bathing ghats',
                  'Public riverfront forums bringing citizens, doctors, and scientists together'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#7c3aed" style={{ flexShrink: 0, marginTop: '3px' }} />
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
                  src={godavariCleanupImg} 
                  alt="Active Citizen Riverfront Mobilization and Volunteer Engagement" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Active Citizen Riverfront Mobilization &amp; Volunteer Participation
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#6d28d9',
                    background: '#f5f3ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #ddd6fe',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Public Action
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR PROGRAM PILLARS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#f5f3ff', color: '#6d28d9', border: '1px solid #ddd6fe' }}>
              ACTION PILLARS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Four Grassroots Initiatives
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Targeted campaigns tailored to distinct segments of our riverfront society.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {programPillars.map((pillar, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}>
                  {pillar.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VOLUNTEER AMBASSADOR ROLES */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#f5f3ff', color: '#6d28d9', border: '1px solid #ddd6fe' }}>
              LEADERSHIP CADRES
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Join as a Community Ambassador
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              We provide formal orientation, volunteer jackets, and official certification for dedicated community leads.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {volunteerRoles.map((role, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  background: '#f5f3ff',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid #ddd6fe',
                  width: 'fit-content',
                  marginBottom: '1rem'
                }}>
                  {role.badge}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {role.role}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section style={{
        background: '#4c1d95',
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
            color: '#c4b5fd',
            marginBottom: '1rem'
          }}>
            GET INVOLVED TODAY
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Become a Godavari River Ambassador
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ede9fe', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Bring your school, college, or neighborhood into our network. Receive custom volunteer badges, community certificates, and training.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                background: '#ffffff',
                color: '#4c1d95',
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
              <span>Join Community Network</span>
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

export default ActivityCommunity;

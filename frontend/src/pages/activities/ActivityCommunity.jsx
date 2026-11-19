import React from 'react';
import { Link } from 'react-router-dom';
import godavariCommunityImg from '../../assets/godavari-community-programs.jpg';
import godavariYouthEcoImg from '../../assets/godavari-youth-eco.jpg';
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
  Store,
  Drama,
  Compass,
  Smile,
  ShieldCheck
} from 'lucide-react';

const outreachChannels = [
  {
    title: 'School & College Eco-Clubs',
    icon: GraduationCap,
    badge: 'Youth Leadership',
    badgeColor: '#047857',
    badgeBg: '#ecfdf5',
    desc: 'Empowering students across 25+ local schools and colleges with interactive river ecology lectures, water test demonstrations, and certified environmental leadership badges.'
  },
  {
    title: 'Eco-Friendly Pilgrimage Guidance',
    icon: Compass,
    badge: 'Cultural Harmony',
    badgeColor: '#047857',
    badgeBg: '#ecfdf5',
    desc: 'Partnering with temple priests and pilgrim committees to eliminate polythene bags from ritual offerings, providing compostable banana-leaf containers and floral collection bins.'
  },
  {
    title: 'Street Theatres & Folk Storytelling',
    icon: Drama,
    badge: 'Cultural Arts',
    badgeColor: '#047857',
    badgeBg: '#ecfdf5',
    desc: 'Performing weekend street plays (nukkad nataks), puppet shows, and folk songs in Telugu at Pushkar and Kotilingala Ghats, making conservation emotionally resonant.'
  },
  {
    title: 'Riverfront Merchant Green Alliance',
    icon: Store,
    badge: 'Local Commerce',
    badgeColor: '#047857',
    badgeBg: '#ecfdf5',
    desc: 'Working directly with tea stalls, flower vendors, and souvenir shops along the bund to phase out single-use plastics in favor of subsidized cloth and paper alternatives.'
  }
];

const ambassadorRoles = [
  {
    role: 'Ghat Youth Captain',
    commitment: 'Weekend Mornings (4 hrs/week)',
    duties: 'Manages volunteer check-ins at Kotilingala & Pushkar Ghats, delivers morning safety orientations, and leads grid coordination teams.'
  },
  {
    role: 'School Environmental Educator',
    commitment: 'Weekday Afternoons (2 hrs/drive)',
    duties: 'Delivers high-impact slide presentations, interactive water demonstrations, and organizes student nature walks along the Godavari.'
  },
  {
    role: 'Merchant Green Liaison',
    commitment: 'Flexible (3 hrs/week)',
    duties: 'Builds trust with local shopkeepers, supplies subsidized cloth carry-bags, and audits compliance with plastic-free pledges.'
  },
  {
    role: 'Civic Media & Storyteller',
    commitment: 'Flexible / Remote Support',
    duties: 'Captures authentic on-ground photos and short video stories of citizen heroes, sharing transparent updates across social channels.'
  }
];

const ActivityCommunity = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. COMMUNITY CITIZEN HERO */}
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
            {/* Left Column: Community Info */}
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
                <Users size={14} />
                <span>COMMUNITY MOBILIZATION • CIVIC STEWARDSHIP</span>
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
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Inspiring Civic Ownership and Cultural Respect for River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Real conservation does not happen through edicts; it is born when children, pilgrims, 
                elders, and shopkeepers feel proud custodians of their sacred river. Our community programs 
                bridge generations to create lasting behavioral change.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <GraduationCap size={14} color="#059669" />
                  <span>25+ Schools &amp; Colleges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Users size={14} color="#059669" />
                  <span>3,500+ Citizens Engaged</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Store size={14} color="#059669" />
                  <span>40+ Riverfront Merchants</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Community Dialogue Photo */}
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
                  alt="Community outreach workshop along the ghats of River Godavari" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
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
                      Civic Dialogue &amp; Stewardship Circle — Godavari Ghats
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
                    Active Outreach
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
              { val: '85+', label: 'Workshops Conducted', note: 'Schools, ghats & community halls' },
              { val: '3,500+', label: 'Citizens Reached', note: 'Youth, elders & river pilgrims' },
              { val: '25+', label: 'Institutions Partnered', note: 'Colleges & high schools' },
              { val: '40+', label: 'Merchant Pledges', note: 'Zero single-use plastic stalls' }
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

      {/* 3. PATTERN SECTION: 4 COMMUNITY OUTREACH CHANNELS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <HeartHandshake size={15} />
              <span>Grassroots Engagement</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Four Pillars of Community Mobilization
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              We reach every corner of society: from school classrooms and riverfront merchant associations to sacred temple ghats and weekend cultural festivals.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {outreachChannels.map((ch, idx) => {
              const IconComp = ch.icon;
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: '#ecfdf5',
                        color: '#047857',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <IconComp size={20} />
                      </div>
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
                        {ch.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.65rem' }}>
                      {ch.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                      {ch.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: YOUTH ECO-CLUB MOVEMENT WITH PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Distinct Youth Eco Club Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariYouthEcoImg} 
                  alt="Students and youth volunteers in eco-club shirts with conservation placards along River Godavari" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
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
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Eco-Club Student Ambassadors on River Promenade
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
                    25+ Schools
                  </span>
                </div>
              </div>
            </div>

            {/* Right: School & Youth Curriculum */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Award size={15} />
                <span>Next Generation Champions</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                Building Lifelong River Stewards in Schools
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                Our student eco-clubs are not passive classroom lectures. Students participate in hands-on science: testing river dissolved oxygen, leading weekend cleanup squads, and taking pledges back to their families.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Hands-on field excursions where students test river water samples directly at local ghats',
                  'Distribution of native sapling kits for students to plant at school premises and riverbanks',
                  'Official Godavari Eco-Ambassador Certificates recognizing active volunteer leadership hours',
                  'Inter-school debates, street-art poster showcases, and regional environmental quizzes'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PATTERN SECTION: AMBASSADOR CADRE ROLES */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Smile size={15} />
              <span>Roles for Every Passion</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Community Ambassador Leadership Cadres
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
              Whatever your background or skillset, there is a meaningful way for you to lead change along River Godavari.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {ambassadorRoles.map((role, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.75rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#047857',
                  background: '#ecfdf5',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  border: '1px solid #a7f3d0'
                }}>
                  {role.commitment}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {role.role}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {role.duties}
                </p>
              </div>
            ))}
          </div>

          {/* School & Community Enrollment Box */}
          <div style={{
            marginTop: '3rem',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                Enroll Your School, College, or Business
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                Schedule a customized campus workshop, invite our street theatre troupe, or receive official cloth carrier bags for your retail store.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#059669',
                color: '#ffffff',
                padding: '12px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
              }}
            >
              <span>Partner With Our Community</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/activities/conservation"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: River Conservation</span>
          </Link>
          <Link
            to="/activities"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View All Activities &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ActivityCommunity;

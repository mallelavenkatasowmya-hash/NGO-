import React from 'react';
import { Link } from 'react-router-dom';
import godavariCommunityImg from '../../assets/godavari-community-programs.jpg';
import godavariYouthEcoImg from '../../assets/godavari-youth-eco.jpg';
import godavariSchoolDrivesImg from '../../assets/godavari-school-drives.jpg';
import godavariPublicWorkshopsImg from '../../assets/godavari-public-workshops.jpg';

import communityPillarSchoolsImg from '../../assets/community-pillar-schools.jpg';
import communityPillarPilgrimageImg from '../../assets/community-pillar-pilgrimage.jpg';
import communityPillarStreetPlayImg from '../../assets/community-pillar-street-play.jpg';
import communityPillarMerchantsImg from '../../assets/community-pillar-merchants.jpg';

import ambassadorGhatCaptainImg from '../../assets/ambassador-ghat-captain.jpg';
import ambassadorEducatorImg from '../../assets/ambassador-educator.jpg';
import ambassadorMerchantLiaisonImg from '../../assets/ambassador-merchant-liaison.jpg';
import ambassadorStorytellerImg from '../../assets/ambassador-storyteller.jpg';

import { 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Store,
  Compass,
  Smile,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';

const outreachChannels = [
  {
    title: 'School & College Eco-Clubs',
    image: communityPillarSchoolsImg,
    badge: 'Youth Leadership',
    stat: '25+ Campuses',
    desc: 'Empowers students with hands-on river ecology workshops, water testing demonstrations, and eco-leadership awards.'
  },
  {
    title: 'Eco-Friendly Pilgrimage Guidance',
    image: communityPillarPilgrimageImg,
    badge: 'Cultural Harmony',
    stat: '100% Plastic-Free',
    desc: 'Partners with temple priests and devotees to replace plastic carry-bags with natural leaf baskets and floral bins.'
  },
  {
    title: 'Street Theatres & Folk Songs',
    image: communityPillarStreetPlayImg,
    badge: 'Cultural Arts',
    stat: 'Weekly Ghat Plays',
    desc: 'Performs weekend Telugu street plays (Nukkad Natak) and folk ballads at Pushkar Ghat to engage river visitors.'
  },
  {
    title: 'Riverfront Merchant Green Alliance',
    image: communityPillarMerchantsImg,
    badge: 'Local Commerce',
    stat: '40+ Certified Stalls',
    desc: 'Distributes subsidized reusable cotton bags to tea stalls and souvenir vendors to phase out single-use plastics.'
  }
];

const ambassadorRoles = [
  {
    role: 'Ghat Youth Captain',
    image: ambassadorGhatCaptainImg,
    commitment: 'Weekend Mornings (4 hrs/wk)',
    duties: 'Manages volunteer check-ins at Kotilingala & Pushkar Ghats and leads morning riverbank safety teams.'
  },
  {
    role: 'School Environmental Educator',
    image: ambassadorEducatorImg,
    commitment: 'Weekday Afternoons (2 hrs/drive)',
    duties: 'Delivers high-impact slide presentations, interactive water testing kits, and student nature walks.'
  },
  {
    role: 'Merchant Green Liaison',
    image: ambassadorMerchantLiaisonImg,
    commitment: 'Flexible (3 hrs/wk)',
    duties: 'Supplies subsidized cloth bags to riverfront shops and monitors compliance with zero-plastic pledges.'
  },
  {
    role: 'Civic Media & Storyteller',
    image: ambassadorStorytellerImg,
    commitment: 'Remote / Field Media',
    duties: 'Captures authentic on-ground photo stories and short reels highlighting citizen conservation heroes.'
  }
];

const galleryHighlights = [
  {
    title: 'Civic Dialogue at Ghats',
    subtitle: 'Weekly Community Stewardship Circles',
    image: godavariCommunityImg,
    badge: 'Community Forum'
  },
  {
    title: 'School Afforestation Drives',
    subtitle: 'Student Sapling Planting Drives',
    image: godavariSchoolDrivesImg,
    badge: 'Campus Action'
  },
  {
    title: 'Public Environmental Workshops',
    subtitle: 'Open Citizen Hydrology Seminars',
    image: godavariPublicWorkshopsImg,
    badge: 'Education'
  }
];

const ActivityCommunity = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. BALANCED HERO SECTION */}
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
            {/* Left: Headline & Concise Text */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#047857',
                marginBottom: '0.85rem'
              }}>
                <Users size={14} />
                <span>COMMUNITY MOBILIZATION • CIVIC STEWARDSHIP</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Community Programs
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Inspiring Civic Ownership and Cultural Respect for River Godavari.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                True conservation begins when children, pilgrims, elders, and shopkeepers become proud custodians 
                of their sacred river. Our programs bridge generations to build lifelong environmental care.
              </p>

              {/* Quick Highlight Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <GraduationCap size={14} color="#059669" />
                  <span>25+ Schools &amp; Colleges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Users size={14} color="#059669" />
                  <span>3,500+ Citizens Engaged</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Store size={14} color="#059669" />
                  <span>40+ Green Merchants</span>
                </div>
              </div>
            </div>

            {/* Right: Sharp Community Circle Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCommunityImg} 
                  alt="Community outreach workshop along the ghats of River Godavari" 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '0.75rem 1.15rem',
                  background: '#ffffff',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1e293b' }}>
                      Civic Dialogue &amp; Stewardship Circle — Godavari Ghats
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
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
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1.75rem 1.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              { val: '85+', label: 'Workshops Conducted', note: 'Schools, ghats & halls' },
              { val: '3,500+', label: 'Citizens Reached', note: 'Youth, elders & pilgrims' },
              { val: '25+', label: 'Institutions Partnered', note: 'Colleges & high schools' },
              { val: '40+', label: 'Merchant Pledges', note: 'Zero single-use plastic' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.15rem 1.25rem',
                borderLeft: '4px solid #059669'
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.2rem' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.15rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS OF COMMUNITY MOBILIZATION (WITH PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <HeartHandshake size={14} />
              <span>Grassroots Engagement</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Four Pillars of Community Mobilization
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Engaging classrooms, sacred temple ghats, street artists, and riverfront merchants.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {outreachChannels.map((ch, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Photo Top */}
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={ch.image} 
                    alt={ch.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {ch.stat}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}>
                      {ch.badge}
                    </span>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                      {ch.title}
                    </h3>

                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {ch.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. YOUTH ECO-CLUB MOVEMENT WITH PHOTO */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Distinct Youth Eco Club Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariYouthEcoImg} 
                  alt="Students and youth volunteers in eco-club shirts with conservation placards along River Godavari" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '0.75rem 1.15rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Eco-Club Student Ambassadors
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    25+ Schools
                  </span>
                </div>
              </div>
            </div>

            {/* Right: School & Youth Curriculum (Short Bullet Cards) */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <Award size={14} />
                <span>Next Generation Champions</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.6rem', lineHeight: 1.25 }}>
                Building Lifelong River Stewards in Schools
              </h2>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                Our student eco-clubs engage youth directly in field ecology, practical river monitoring, and community outreach.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { title: 'Field Water Testing Excursions', desc: 'Students collect river samples and test dissolved oxygen right at local ghats.' },
                  { title: 'Native Sapling Distribution', desc: 'Supplying indigenous neem and kanuga saplings for campus and bund planting.' },
                  { title: 'Eco-Ambassador Certificates', desc: 'Recognizing student volunteer leadership with accredited environmental badges.' },
                  { title: 'Inter-School Debates & Street Art', desc: 'Annual regional creative showcases, eco-quizzes, and public conservation rallies.' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    gap: '0.85rem',
                    alignItems: 'flex-start',
                    background: '#f8fafc',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.15rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. COMMUNITY AMBASSADOR CADRES (WITH PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Smile size={14} />
              <span>Roles for Every Passion</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Community Ambassador Leadership Cadres
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Lead positive environmental change along River Godavari across diverse volunteer roles.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {ambassadorRoles.map((role, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={role.image} 
                    alt={role.role}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1.2rem' }}>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                    border: '1px solid #a7f3d0'
                  }}>
                    {role.commitment}
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.35rem' }}>
                    {role.role}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                    {role.duties}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONSERVATION FIELD GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Sparkles size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Community Outreach In Action
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Citizen Records • Rajahmundry
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {galleryHighlights.map((item, idx) => (
              <div key={idx} style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1rem 1.15rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {item.title}
                    </h4>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      border: '1px solid #a7f3d0'
                    }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ENROLLMENT CALLOUT BOX */}
      <section style={{ padding: '3rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem 2.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 15px -4px rgba(0,0,0,0.05)'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                <ShieldCheck size={14} />
                <span>Institutional Collaboration</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                Enroll Your School, College, or Business
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                Schedule a campus workshop, invite our street theatre troupe, or receive certified cloth carrier bags for your retail store.
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
                padding: '11px 22px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Partner With Our Community</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityCommunity;

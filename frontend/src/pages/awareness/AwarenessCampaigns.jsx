import React from 'react';
import { Link } from 'react-router-dom';
import campaignUniqueTheatreImg from '../../assets/campaign-unique-theatre.jpg';
import campaignUniqueCyclothonImg from '../../assets/campaign-unique-cyclothon.jpg';
import campaignUniquePledgeImg from '../../assets/campaign-unique-pledge.jpg';
import campaignUniqueMuralImg from '../../assets/campaign-unique-mural.jpg';
import campaignUniqueTroupeImg from '../../assets/campaign-unique-troupe.jpg';

import { 
  Sparkles, 
  Megaphone, 
  Drama, 
  Bike, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  Palette,
  Users,
  Compass,
  Smile,
  ShieldCheck,
  Camera
} from 'lucide-react';

const campaignChannels = [
  {
    num: '01',
    title: 'Ghat Street Theatres (Nukkad Natak)',
    format: 'Telugu Folk Satire',
    image: campaignUniqueTheatreImg,
    badge: 'Street Drama',
    desc: 'High-energy satirical street plays staged on ghat steps communicating river conservation in lively Telugu folk satire.'
  },
  {
    num: '02',
    title: 'Dawn Riverfront Cyclothons',
    format: 'Sunday Morning Rallies',
    image: campaignUniqueCyclothonImg,
    badge: 'Youth Cyclothon',
    desc: 'Hundreds of student cyclists and cadets riding the 12 km scenic Godavari Bund Road with green flags and eco-announcements.'
  },
  {
    num: '03',
    title: '"Nadi Prathijna" Citizen Pledges',
    format: 'Signature & Digital Pledging',
    image: campaignUniquePledgeImg,
    badge: 'Sacred Pledge',
    desc: 'Over 12,000 pilgrims and citizens taking sacred oaths on 20-foot canvas pledge walls to completely reject single-use plastic.'
  },
  {
    num: '04',
    title: 'Riverbank Eco-Murals & Street Art',
    format: 'Public Wall Art Competitions',
    image: campaignUniqueMuralImg,
    badge: 'Eco-Murals',
    desc: 'Transforming concrete flood walls along Rajahmundry bund into vibrant murals celebrating Godavari wildlife and birds.'
  }
];

const pledgeCommitments = [
  {
    title: 'Zero Polythene into River Waters',
    desc: 'Never discard plastic bottles, synthetic wrappers, or polythene bags into River Godavari.'
  },
  {
    title: 'Cloth Bags for Sacred Offerings',
    desc: 'Always carry reusable cloth totes and choose natural banana-leaf plates for temple rituals.'
  },
  {
    title: 'Two Hours Monthly for River Cleanliness',
    desc: 'Dedicate two hours every month to participate in or support community shoreline sanitation drives.'
  },
  {
    title: 'Inspiring Five Family Members & Friends',
    desc: 'Share river conservation habits with five immediate family members and neighbors.'
  }
];

const troupeRoles = [
  { role: 'Street Theatre Actor / Performer', skill: 'Expressive voice & social drama energy' },
  { role: 'Telugu Folk Songwriter / Musician', skill: 'Traditional dholak, harmonium, or lyrics' },
  { role: 'Wall Mural & Canvas Artist', skill: 'Outdoor mural painting & street typography' },
  { role: 'Campaign Photographer & Videographer', skill: 'Capturing reels, photos & citizen stories' }
];

const galleryHighlights = [
  {
    title: 'Nukkad Natak Street Theatre',
    subtitle: 'Satirical Telugu Folk Performances at Ghats',
    image: campaignUniqueTheatreImg,
    badge: 'Street Play'
  },
  {
    title: 'Godavari Bund Road Cyclothon',
    subtitle: '12 km Clean-Corridor Youth Bicycle Convoy',
    image: campaignUniqueCyclothonImg,
    badge: 'Bicycle Rally'
  },
  {
    title: 'Public Wall Art & Biodiversity Murals',
    subtitle: 'Vibrant Flood-Wall Environmental Murals',
    image: campaignUniqueMuralImg,
    badge: 'Street Murals'
  }
];

const AwarenessCampaigns = () => {
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
            {/* Left Column: Headline & Concise Text */}
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
                <Megaphone size={14} />
                <span>STREET MOBILIZATION • CULTURAL ARTS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Youth Campaigns
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Energizing Citizens Through Street Theatre, Cyclothons, and Riverfront Art.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Facts change minds, but art changes hearts. Through weekend Nukkad Nataks in Telugu, 
                cyclothons, and pledge walls, our youth cadres bring river conservation directly to citizens.
              </p>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Drama size={14} color="#059669" />
                  <span>50+ Street Theatres</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Bike size={14} color="#059669" />
                  <span>Dawn Cyclothons</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Heart size={14} color="#059669" />
                  <span>12,000+ Pledges Signed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sharp Street Theatre Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={campaignUniqueTheatreImg} 
                  alt="Youth street theatre performance on Godavari riverfront" 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
                      Nukkad Natak Street Theatre — Kotilingala Ghat Steps
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
                    Live Street Action
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
              { val: '50+', label: 'Street Plays Staged', note: 'Kotilingala & Pushkar Ghats' },
              { val: '12,000+', label: 'Citizen Pledges', note: 'Signed Nadi Prathijna' },
              { val: '15 km', label: 'River Corridors Painted', note: 'Vibrant eco-wall murals' },
              { val: '350+', label: 'Active Youth Artists', note: 'Actors, cyclists & painters' }
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

      {/* 3. FOUR CAMPAIGN CHANNELS WITH HIGH-RES PHOTOS & CONCISE COPY */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Palette size={14} />
              <span>Cultural Mobilization</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Creative Ways We Awaken Public Consciousness
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Harnessing youth drama, cycling, and public art to make environmental responsibility exciting.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {campaignChannels.map((ch, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Photo Header */}
                <div style={{ position: 'relative', height: '165px', overflow: 'hidden' }}>
                  <img 
                    src={ch.image} 
                    alt={ch.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#047857',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                  }}>
                    {ch.num}
                  </div>
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
                    {ch.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.25rem' }}>
                      {ch.title}
                    </h3>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', marginBottom: '0.65rem' }}>
                      {ch.format}
                    </div>
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

      {/* 4. NADI PRATHIJNA CITIZEN PLEDGE & TROUPE AUDITION */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Four Sacred Commitments With Photo */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <Heart size={14} />
                <span>The Sacred Promise</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.65rem', lineHeight: 1.25 }}>
                The "Nadi Prathijna" Citizen River Pledge
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.55, margin: '0 0 1.25rem' }}>
                Connecting spiritual reverence for River Godavari with four daily civic habits.
              </p>

              {/* Pledge Photo Card */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src={campaignUniquePledgeImg} 
                  alt="Citizens taking Nadi Prathijna environmental pledge" 
                  style={{ width: '100%', height: '170px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div style={{ padding: '0.5rem 0.85rem', background: '#f8fafc', fontSize: '0.78rem', color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={14} />
                  <span>Solemn Citizen River Protection Oath — Pushkar Ghat</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {pledgeCommitments.map((p, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.9rem 1.15rem',
                    borderLeft: '4px solid #059669'
                  }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.2rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Join Cultural Troupe Card */}
            <div>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
              }}>
                {/* Troupe Photo Header */}
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  marginBottom: '1.25rem'
                }}>
                  <img 
                    src={campaignUniqueTroupeImg} 
                    alt="Youth theatre and campaign troupe artists in action" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  <Drama size={14} />
                  <span>Audition &amp; Rehearsals</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem' }}>
                  Join Our Street Theatre &amp; Arts Troupe
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, margin: '0 0 1.15rem' }}>
                  Weekly rehearsal sessions every Saturday evening at Pushkar Ghat. Open to actors, musicians, and artists.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  {troupeRoles.map((r, idx) => (
                    <div key={idx} style={{ background: '#ffffff', borderRadius: '8px', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{r.role}</div>
                      <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{r.skill}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '11px 20px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                  }}
                >
                  <span>Join the Youth Campaign Troupe</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LIVE CAMPAIGN ACTION FIELD GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Camera size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Live Youth Mobilization Gallery
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Cultural Records • Andhra Pradesh
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/awareness/workshops"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Public Workshops</span>
          </Link>
          <Link
            to="/awareness"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View All Awareness Programs &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AwarenessCampaigns;

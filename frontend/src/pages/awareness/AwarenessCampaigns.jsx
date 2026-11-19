import React from 'react';
import { Link } from 'react-router-dom';
import godavariYouthCampaignsImg from '../../assets/godavari-youth-campaigns.jpg';
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
  Smile
} from 'lucide-react';

const campaignChannels = [
  {
    num: '01',
    title: 'Ghat Street Theatres (Nukkad Natak)',
    format: 'Telugu Folk Theatre & Satirical Comedy',
    desc: 'Lively, high-energy weekend street performances staged directly on the stone bathing steps of Kotilingala and Pushkar Ghats. Using folk songs and humorous satire, our student actors communicate the tragedy of river plastic pollution in terms everyone understands.'
  },
  {
    num: '02',
    title: 'Dawn Riverfront Cyclothons',
    format: 'Sunday Morning Cycling Rallies',
    desc: 'Mobilizing hundreds of college cyclists, NCC cadets, and fitness clubs across the 12 km scenic Godavari Bund Road, bearing green flags and megaphone announcements championing a litter-free river corridor.'
  },
  {
    num: '03',
    title: '"Nadi Prathijna" Citizen Pledges',
    format: 'On-Site Signature & Digital Pledging',
    desc: 'Physical 20-foot canvas pledge walls erected at major ghat entrances during festival peaks where over 12,000 pilgrims and tourists have officially signed the sacred pledge to reject single-use plastic.'
  },
  {
    num: '04',
    title: 'Riverbank Eco-Murals & Street Art',
    format: 'Public Wall Art Competitions',
    desc: 'Transforming grey, neglected concrete flood walls along Rajahmundry bund into vibrant, colorful murals celebrating Godavari biodiversity, olive ridley turtles, and native river birds.'
  }
];

const pledgeCommitments = [
  {
    title: 'Zero Polythene into River Waters',
    desc: 'I pledge never to toss plastic water bottles, wrappers, or synthetic garlands into River Godavari.'
  },
  {
    title: 'Cloth Bags for Sacred Offerings',
    desc: 'I pledge to carry my own reusable cloth or jute tote bag and use banana-leaf plates for temple rituals.'
  },
  {
    title: 'Two Hours Monthly for River Cleanliness',
    desc: 'I pledge to dedicate at least two hours each month to join or support a community ghat sanitation drive.'
  },
  {
    title: 'Educating Five Family Members & Friends',
    desc: 'I pledge to pass on this conservation mindset to five people in my immediate circle of family and neighbors.'
  }
];

const troupeRoles = [
  { role: 'Street Theatre Actor / Performer', skill: 'Expressive voice, energy & passion for social drama' },
  { role: 'Telugu Folk Songwriter / Musician', skill: 'Traditional dholak, harmonium, or lyric writing' },
  { role: 'Wall Mural & Canvas Artist', skill: 'Outdoor mural painting, typography & street art' },
  { role: 'Campaign Photographer & Videographer', skill: 'Capturing authentic reels, photos & citizen stories' }
];

const AwarenessCampaigns = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. YOUTH CAMPAIGN HERO */}
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
            {/* Left Column: Campaign Info */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fffbeb',
                border: '1px solid #fde68a',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#b45309',
                marginBottom: '1rem'
              }}>
                <Megaphone size={14} />
                <span>STREET MOBILIZATION • CULTURAL ARTS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Youth Campaigns
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#d97706',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Energizing Citizens Through Street Theatre, Cyclothons, and Riverfront Art.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Facts change minds, but art changes hearts. Through weekend Nukkad Nataks (street plays) in Telugu, 
                riverfront cyclothons, and public pledge drives, our vibrant youth cadres bring environmental conservation 
                to life right where thousands gather every day.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Drama size={14} color="#d97706" />
                  <span>50+ Street Theatres</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Bike size={14} color="#d97706" />
                  <span>Dawn Cyclothons</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Heart size={14} color="#d97706" />
                  <span>12,000+ Pledges Signed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Street Theatre Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariYouthCampaignsImg} 
                  alt="Youth street theatre performance on Kotilingala Ghat beside River Godavari" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d97706', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Nukkad Natak Street Theatre — Kotilingala Ghat Steps
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#b45309',
                    background: '#fffbeb',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #fde68a',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
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
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '2rem 1.5rem' }}>
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
                padding: '1.25rem 1.5rem',
                borderLeft: '4px solid #d97706'
              }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#b45309', lineHeight: 1.1, marginBottom: '0.25rem' }}>
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

      {/* 3. PATTERN SECTION: 4 CAMPAIGN CHANNELS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#d97706', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Palette size={15} />
              <span>Cultural Mobilization</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Creative Ways We Awaken Public Consciousness
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              We harness the vibrancy of youth culture—drama, cycling, music, and public art—to break through apathy and make environmental responsibility exciting.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {campaignChannels.map((ch, idx) => (
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
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#fffbeb',
                    border: '1px solid #fde68a',
                    color: '#b45309',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    {ch.num}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                    {ch.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#d97706', marginBottom: '1rem' }}>
                    {ch.format}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {ch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: NADI PRATHIJNA CITIZEN PLEDGE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Four Sacred Commitments */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#d97706', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Heart size={15} />
                <span>The Sacred Promise</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                The "Nadi Prathijna" Citizen River Pledge
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
                Every river dip is an act of spiritual purification. Our pledge connects this sacred ancient ritual with modern civic action through four uncompromising daily commitments.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pledgeCommitments.map((p, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    borderLeft: '4px solid #d97706'
                  }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.35rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Join Cultural Troupe Card */}
            <div>
              <div style={{
                background: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: '16px',
                padding: '2.5rem'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 2px 8px rgba(217, 119, 6, 0.15)'
                }}>
                  <Drama size={28} color="#d97706" />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#78350f', margin: '0 0 0.65rem' }}>
                  Audition for Our Street Theatre &amp; Arts Troupe
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#92400e', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Are you an aspiring actor, folk singer, scriptwriter, or outdoor painter? Join our weekly rehearsal sessions every Saturday evening at Pushkar Ghat.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {troupeRoles.map((r, idx) => (
                    <div key={idx} style={{ background: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', border: '1px solid #fef3c7' }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{r.role}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{r.skill}</div>
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
                    background: '#d97706',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
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

      {/* 5. BOTTOM NAVIGATION BAR */}
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
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#d97706', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View All Awareness Programs &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AwarenessCampaigns;

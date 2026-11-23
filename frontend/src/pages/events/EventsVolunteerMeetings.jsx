import React from 'react';
import { Link } from 'react-router-dom';
import godavariVolunteerMeetingsImg from '../../assets/godavari-volunteer-meetings.jpg';
import meetingBriefingImg from '../../assets/meeting-briefing.jpg';
import meetingStrategyImg from '../../assets/meeting-strategy.jpg';
import meetingYouthImg from '../../assets/meeting-youth.jpg';
import meetingConventionImg from '../../assets/meeting-convention.jpg';
import meetingPathwayImg from '../../assets/meeting-pathway.jpg';
import meetingVenueImg from '../../assets/meeting-venue.jpg';
import meetingGalleryBriefingImg from '../../assets/meeting-gallery-briefing.jpg';
import meetingGalleryPlanningImg from '../../assets/meeting-gallery-planning.jpg';
import meetingGalleryRecognitionImg from '../../assets/meeting-gallery-recognition.jpg';

import { 
  Sparkles, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  Award,
  Compass,
  FileText,
  UserCheck,
  Camera
} from 'lucide-react';

const meetingCadences = [
  {
    title: 'Weekly Ghat Sunrise Briefing',
    cadence: 'Every Sat & Sun • 06:15 AM',
    image: meetingBriefingImg,
    badge: 'Field Briefing',
    venue: 'Kotilingala & Pushkar Ghats',
    audience: 'Active Volunteers & First-Timers',
    desc: '15-minute safety orientation, gear assignment, and shoreline grid allocation.'
  },
  {
    title: 'Monthly Zonal Strategy Review',
    cadence: '1st Sunday • 05:00 PM',
    image: meetingStrategyImg,
    badge: 'Strategy Sync',
    venue: 'Pushkar Nagar Central Office',
    audience: 'Field Coordinators & Zone Leads',
    desc: 'Reviewing plastic collection metrics, net-trap maintenance, and next month’s drives.'
  },
  {
    title: 'Quarterly Youth Captains Huddle',
    cadence: 'Quarterly Saturdays • 03:00 PM',
    image: meetingYouthImg,
    badge: 'Youth Leadership',
    venue: 'Community Hall & Hybrid Zoom',
    audience: 'College Eco-Club Leads',
    desc: 'Leadership workshop on volunteer mobilization, campus chapters, and service hours.'
  },
  {
    title: 'Annual General Volunteer Convention',
    cadence: 'Annual December Summit',
    image: meetingConventionImg,
    badge: 'Annual Convention',
    venue: 'Municipal Auditorium',
    audience: 'All Volunteers & Partners',
    desc: 'Annual conservation milestones, volunteer recognition awards, and ecological reports.'
  }
];

const leadershipRanks = [
  { rank: 'Level 1: Field Volunteer', req: 'Attends weekend drives', role: 'Direct on-ground shoreline cleanup and sapling care' },
  { rank: 'Level 2: Squad Captain', req: 'Completed 5+ drives', role: 'Leads a 10-person volunteer grid team and oversees gear' },
  { rank: 'Level 3: Ghat Coordinator', req: 'Completed 15+ drives', role: 'Manages entire ghat logistics, volunteer desk and liaison' },
  { rank: 'Level 4: Environmental Trustee', req: 'Nominated by council', role: 'Directs NGO conservation policy and ecological audits' }
];

const meetingVenues = [
  { name: 'Pushkar Nagar Central NGO Office', addr: 'D.No 4-12-8, Godavari Bund Road, Near Pushkar Ghat', access: 'Open Daily 09:00 AM – 06:00 PM' },
  { name: 'Kotilingala Ghat Field Operations Desk', addr: 'Beside Kotilingeswara Temple Steps, Rajahmundry', access: 'Weekend Mornings 06:00 AM – 10:00 AM' },
  { name: 'Virtual Strategy Room (Online Access)', addr: 'Zoom Meeting ID provided to registered coordinators', access: 'Every Month 1st Sunday Evening' }
];

const galleryHighlights = [
  {
    title: 'Ghat Morning Roll Call & Safety Briefing',
    subtitle: 'Kotilingala Ghat Shoreline Volunteer Squad',
    image: meetingGalleryBriefingImg,
    badge: 'Morning Briefing'
  },
  {
    title: 'Zonal Strategy & Mapping Session',
    subtitle: 'Pushkar Nagar Command Desk Monthly Review',
    image: meetingGalleryPlanningImg,
    badge: 'Strategy Review'
  },
  {
    title: 'Youth Captain Leadership Training',
    subtitle: 'College Eco-Ambassador Leadership Chapter',
    image: meetingGalleryRecognitionImg,
    badge: 'Leadership Training'
  }
];

const EventsVolunteerMeetings = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. VOLUNTEER MEETINGS HERO */}
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
            {/* Left Column: Concise Info */}
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
                <span>COORDINATOR STRATEGY • LEADERSHIP SYNCS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Volunteer Drives &amp; Meetings
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Strategic Planning, Field Orientations, and Community Leadership Syncs.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Logistics, safety briefings, and collaborative leadership for Godavari shoreline drives. 
                Join regular planning assemblies to shape future drives and coordinate ghat conservation.
              </p>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Monthly Strategy Reviews</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Award size={14} color="#059669" />
                  <span>Leadership Pathways</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <UserCheck size={14} color="#059669" />
                  <span>Open to All Members</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Meeting Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariVolunteerMeetingsImg} 
                  alt="Volunteer coordinators in Rajahmundry reviewing Godavari ghat maps and logistics" 
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
                      Monthly Strategy Review &amp; Field Coordination Table
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
                    Strategy Table
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
              { val: '24 Meetings', label: 'Strategy Sessions/Yr', note: 'Bi-weekly and monthly cadence' },
              { val: '45 Captains', label: 'Certified Squad Leads', note: 'Leading on-ground teams' },
              { val: '100% Democratic', label: 'Open Decision Making', note: 'Volunteers shape drives' },
              { val: 'Hybrid Format', label: 'Physical & Online Access', note: 'Zoom link for remote members' }
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

      {/* 3. PATTERN SECTION: 4 MEETING CADENCES WITH DEDICATED PHOTOS */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Clock size={15} />
              <span>Meeting Timetable</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Four Regular Coordinator Cadences
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0, maxWidth: '680px' }}>
              Weekly morning briefings, monthly zonal reviews, youth huddles, and annual conventions with structured coordination.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {meetingCadences.map((m, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* Photo Banner with Category & Cadence Overlay */}
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                    <img 
                      src={m.image} 
                      alt={m.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {m.badge}
                    </div>
                  </div>

                  {/* Card Content: LESS MATTER */}
                  <div style={{ padding: '1.15rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                      {m.cadence}
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem', lineHeight: 1.3 }}>
                      {m.title}
                    </h3>

                    <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.35rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={13} color="#059669" />
                      <span>{m.venue}</span>
                    </div>

                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '0.65rem' }}>
                      For: {m.audience}
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: LEADERSHIP PATHWAYS & VENUES WITH IMAGES */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Left: Volunteer Leadership Pathway with Photo */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <Award size={15} />
                <span>Growth &amp; Recognition</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.25 }}>
                The Volunteer Leadership Pathway
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.55, margin: '0 0 1.25rem' }}>
                Every coordinator starts as a volunteer. Consistent attendance, safety protocol mastery, and passion unlock leadership ranks.
              </p>

              {/* Leadership Photo */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
              }}>
                <img 
                  src={meetingPathwayImg} 
                  alt="Volunteer leadership progression and coordinator mentoring" 
                  style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {leadershipRanks.map((rank, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    borderLeft: '4px solid #059669'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: '#0f172a' }}>{rank.rank}</strong>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#047857', background: '#ecfdf5', padding: '2px 8px', borderRadius: '4px' }}>
                        {rank.req}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
                      {rank.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Permanent Meeting Venues with Photo */}
            <div>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
              }}>
                {/* Coordination Desk Photo */}
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  marginBottom: '1.25rem'
                }}>
                  <img 
                    src={meetingVenueImg} 
                    alt="NGO coordination office and volunteer meeting facilities" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  <Compass size={14} />
                  <span>Meeting Locations</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem' }}>
                  Permanent Meeting Locations
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                  Need to pick up safety gear, hand over collected membership pledges, or join our monthly review in person? Visit our centers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {meetingVenues.map((v, idx) => (
                    <div key={idx} style={{ background: '#ffffff', borderRadius: '8px', padding: '0.75rem 0.95rem', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a' }}>{v.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', margin: '2px 0 3px' }}>{v.addr}</div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669' }}>{v.access}</div>
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
                  <span>Apply to Become a Field Coordinator</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LIVE ACTION VOLUNTEER COORDINATION GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Camera size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Live Coordinator Gatherings in Action
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Citizen Records • Rajahmundry Operations
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
            to="/events/upcoming"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Upcoming Drives &amp; Events</span>
          </Link>
          <Link
            to="/events/past-reports"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: Past Drives &amp; Reports &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EventsVolunteerMeetings;

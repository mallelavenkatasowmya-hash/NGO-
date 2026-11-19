import React from 'react';
import { Link } from 'react-router-dom';
import godavariVolunteerMeetingsImg from '../../assets/godavari-volunteer-meetings.jpg';
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
  UserCheck
} from 'lucide-react';

const meetingCadences = [
  {
    title: 'Weekly Ghat Sunrise Briefing',
    cadence: 'Every Saturday & Sunday • 06:15 AM – 06:30 AM',
    venue: 'Kotilingala & Pushkar Ghat Field Desks',
    audience: 'All active weekend volunteers & first-time attendees',
    desc: 'Quick 15-minute operational orientation: assigning shoreline grid teams, issuing safety puncture-gloves, and reviewing safety guidelines before the drive begins.'
  },
  {
    title: 'Monthly Zonal Strategy Review',
    cadence: '1st Sunday of Every Month • 05:00 PM – 06:30 PM',
    venue: 'Godavari Parisubhratha Office, Pushkar Nagar',
    audience: 'Field coordinators, zone captains & senior trustees',
    desc: 'Reviewing monthly plastic collection weights, evaluating canal net-trap maintenance schedules, analyzing sapling survival counts, and planning next month’s drives.'
  },
  {
    title: 'Quarterly Youth Captains Huddle',
    cadence: 'Quarterly Saturdays • 03:00 PM – 05:00 PM',
    venue: 'Community Hall, Rajahmundry (Hybrid Zoom Access)',
    audience: 'College eco-club leads & campus ambassadors',
    desc: 'Leadership training workshop focused on event management, volunteer recruitment, public communication, and NSS/NCC service hour certification.'
  },
  {
    title: 'Annual General Volunteer Convention',
    cadence: 'Annual December Summit • Full Day Event',
    venue: 'Rajahmundry Municipal Auditorium',
    audience: 'Entire registered volunteer network, families & partners',
    desc: 'Celebrating annual conservation achievements, presenting the Godavari Ratna civic awards to outstanding volunteers, and releasing the annual ecological audit report.'
  }
];

const leadershipRanks = [
  { rank: 'Level 1: Field Volunteer', req: 'Attends weekend drives', role: 'Direct on-ground shoreline cleanup and sapling care' },
  { rank: 'Level 2: Squad Captain', req: 'Completed 5+ drives', role: 'Leads a 10-person volunteer grid team and oversees gear return' },
  { rank: 'Level 3: Ghat Coordinator', req: 'Completed 15+ drives', role: 'Manages entire ghat logistics, volunteer desk and municipal liaison' },
  { rank: 'Level 4: Environmental Trustee', req: 'Nominated by council', role: 'Shapes policy, audits hydrological metrics, and directs NGO strategy' }
];

const meetingVenues = [
  { name: 'Pushkar Nagar Central NGO Office', addr: 'D.No 4-12-8, Godavari Bund Road, Near Pushkar Ghat', access: 'Open Daily 09:00 AM – 06:00 PM' },
  { name: 'Kotilingala Ghat Field Operations Desk', addr: 'Beside Kotilingeswara Temple Steps, Rajahmundry', access: 'Open Weekend Mornings 06:00 AM – 10:00 AM' },
  { name: 'Virtual Strategy Room (Online Access)', addr: 'Zoom Meeting ID provided to registered coordinators', access: 'Every Month 1st Sunday Evening' }
];

const EventsVolunteerMeetings = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. VOLUNTEER MEETINGS HERO */}
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
            {/* Left Column: Info */}
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
                <span>COORDINATOR STRATEGY • LEADERSHIP SYNCS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Volunteer Drives &amp; Meetings
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Strategic Planning, Field Orientations, and Community Leadership Syncs.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Every successful river cleanup begins with careful logistics, clear safety briefings, 
                and collaborative teamwork. Join our regular planning assemblies to shape future conservation 
                drives and step up as a recognized ghat coordinator.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Monthly Strategy Reviews</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Award size={14} color="#059669" />
                  <span>Leadership Pathways</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <UserCheck size={14} color="#059669" />
                  <span>Open to All Members</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Meeting Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariVolunteerMeetingsImg} 
                  alt="Volunteer coordinators in Rajahmundry reviewing Godavari ghat maps and logistics" 
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
                      Monthly Strategy Review &amp; Field Coordination Table
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
                    Strategy Table
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
              { val: '24 Meetings', label: 'Strategy Sessions/Yr', note: 'Bi-weekly and monthly cadence' },
              { val: '45 Captains', label: 'Certified Squad Leads', note: 'Leading on-ground teams' },
              { val: '100% Democratic', label: 'Open Decision Making', note: 'Volunteers shape drives' },
              { val: 'Hybrid Format', label: 'Physical & Online Access', note: 'Zoom link for remote members' }
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

      {/* 3. PATTERN SECTION: 4 MEETING CADENCES */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Clock size={15} />
              <span>Meeting Timetable</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Four Regular Coordinator Cadences
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              From weekly morning safety huddles before sunrise drives to monthly strategic reviews, our team operates with structured coordination.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {meetingCadences.map((m, idx) => (
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
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    display: 'inline-block',
                    marginBottom: '0.85rem'
                  }}>
                    {m.cadence}
                  </span>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {m.title}
                  </h3>

                  <div style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="#059669" />
                    <span>{m.venue}</span>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669', marginBottom: '0.85rem' }}>
                    For: {m.audience}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: LEADERSHIP PATHWAYS & VENUES */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Volunteer Leadership Pathway */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Award size={15} />
                <span>Growth &amp; Recognition</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                The Volunteer Leadership Pathway
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                Every coordinator starts as a volunteer. Consistent attendance, safety protocol mastery, and passion for Godavari conservation unlock direct leadership responsibilities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {leadershipRanks.map((rank, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem',
                    borderLeft: '4px solid #059669'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>{rank.rank}</strong>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#047857', background: '#ecfdf5', padding: '2px 8px', borderRadius: '4px' }}>
                        {rank.req}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
                      {rank.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Permanent Meeting Venues */}
            <div>
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
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
                  boxShadow: '0 2px 8px rgba(5, 150, 105, 0.15)'
                }}>
                  <Compass size={28} color="#059669" />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#064e3b', margin: '0 0 0.65rem' }}>
                  Permanent Meeting Locations
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#065f46', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Need to pick up safety gear, hand over collected membership pledges, or join our monthly review in person? Visit our designated coordination centers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                  {meetingVenues.map((v, idx) => (
                    <div key={idx} style={{ background: '#ffffff', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{v.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '2px 0 4px' }}>{v.addr}</div>
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#059669' }}>{v.access}</div>
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
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
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

      {/* 5. BOTTOM NAVIGATION BAR */}
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

import React from 'react';
import { Link } from 'react-router-dom';
import godavariPublicWorkshopsImg from '../../assets/godavari-public-workshops.jpg';
import { 
  Sparkles, 
  Users, 
  Recycle, 
  Leaf, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Package,
  Sparkle
} from 'lucide-react';

const workshopTracks = [
  {
    num: '01',
    title: 'Sacred Floral Waste Bio-Composting',
    instructor: 'Led by Organic Agronomy Specialists',
    desc: 'Hundreds of kilograms of marigold and jasmine garlands enter River Godavari daily during temple rituals. We teach pilgrims and priests how to convert discarded florals into nutrient-rich vermicompost for organic farming.'
  },
  {
    num: '02',
    title: 'Banana-Leaf & Palm Pooja Kit Crafting',
    instructor: 'Self-Help Group Women Artisans',
    desc: 'Hands-on training in pressing sun-dried banana leaves and areca palm sheaths into water-resistant, completely natural pooja vessels, eliminating single-use plastic bowls and thermocol lamps from sacred river dips.'
  },
  {
    num: '03',
    title: 'Riverfront Merchant Green Transition',
    instructor: 'Community Trade Coordinators',
    desc: 'Practical sessions tailored for riverside tea stalls, flower sellers, and prasad vendors showing how to switch to subsidized jute and paper packaging with zero loss in business profitability.'
  },
  {
    num: '04',
    title: 'Household Zero-Waste Segregation',
    instructor: 'Civic Sanitation Leaders',
    desc: 'A simple, highly practical 2-bin segregation protocol for riverfront residents to prevent domestic plastic bags and greywater detergents from overflowing into municipal canal drains.'
  }
];

const workshopSchedule = [
  {
    track: 'Floral Composting Masterclass',
    venue: 'Kotilingala Ghat Riverside Pavilion, Rajahmundry',
    timing: 'Every 2nd Saturday • 09:30 AM – 12:00 PM',
    seats: '35 Seats Available',
    type: 'Community Hands-On'
  },
  {
    track: 'Eco-Pooja Artisan Crafting',
    venue: 'Pushkar Ghat Community Hall, Opp. Pushkar Nagar',
    timing: 'Every 3rd Sunday • 10:00 AM – 01:00 PM',
    seats: '40 Seats Available',
    type: 'Family & Pilgrim Friendly'
  },
  {
    track: 'Merchant Plastic-Free Alliance',
    venue: 'Godavari Bund Merchants Association Hall',
    timing: 'Monthly 1st Wednesday • 04:00 PM – 06:00 PM',
    seats: 'Open to All Vendors',
    type: 'Commercial Trade Focus'
  },
  {
    track: 'Riverfront Household Waste Workshop',
    venue: 'Dowleswaram Barrage Community Center',
    timing: 'Alternate Sundays • 10:00 AM – 12:30 PM',
    seats: '30 Seats Available',
    type: 'Residential Focus'
  }
];

const AwarenessWorkshops = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PUBLIC WORKSHOP HERO */}
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
            {/* Left Column: Workshop Summary */}
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
                <span>COMMUNITY MASTERCLASSES • CITIZEN ACTION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Public Workshops
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Practical, Hands-On Eco-Skills for Citizens, Pilgrims, and Riverfront Artisans.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Held in open-air riverside pavilions across Rajahmundry, our practical workshops teach families, 
                devotees, and shopkeepers how to transform temple floral waste into bio-compost and craft completely 
                biodegradable alternatives to single-use plastics.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Recycle size={14} color="#059669" />
                  <span>Floral Bio-Composting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Leaf size={14} color="#059669" />
                  <span>Banana-Leaf Crafting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Package size={14} color="#059669" />
                  <span>Free Starter Kit Provided</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Workshop Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariPublicWorkshopsImg} 
                  alt="Public eco-composting and leaf crafting workshop on Godavari Ghats" 
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
                      Floral Bio-Composting &amp; Leaf Crafting Session — Rajahmundry
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
                    Hands-On Training
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
              { val: '65+', label: 'Workshops Hosted', note: 'Pavilions, ghats & halls' },
              { val: '2,800+', label: 'Citizens Trained', note: 'Households, women & pilgrims' },
              { val: '18 Tons', label: 'Flowers Composted', note: 'Diverted from river water' },
              { val: '100%', label: 'Free Public Access', note: 'All starter kits provided free' }
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

      {/* 3. PATTERN SECTION: 4 WORKSHOP TRACKS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Sparkles size={15} />
              <span>Skills for Sustainability</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Four Core Community Eco-Skill Tracks
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              We do not just lecture on cleanliness; we teach citizens tangible craft and waste transformation techniques they can practice at home and in business.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {workshopTracks.map((trk, idx) => (
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
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#047857',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    {trk.num}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                    {trk.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', marginBottom: '1rem' }}>
                    {trk.instructor}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {trk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: UPCOMING WORKSHOP TIMETABLE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Calendar size={15} />
              <span>Public Timetable</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Upcoming Community Workshop Dates
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
              Workshops are open to all citizens, students, and pilgrims. Advance registration is recommended as seats are limited to 40 per cohort.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {workshopSchedule.map((ws, idx) => (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
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
                      {ws.type}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>
                      {ws.seats}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {ws.track}
                  </h3>

                  <div style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="#059669" />
                    <span>{ws.venue}</span>
                  </div>

                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={13} color="#059669" />
                    <span>{ws.timing}</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1.25rem' }}>
                  <Link 
                    to="/contact" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      width: '100%',
                      background: '#059669',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <span>Reserve Free Seat</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PATTERN SECTION: FREE WORKSHOP STARTER KIT INCLUDED */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  <Package size={16} />
                  <span>Participant Welcome Kit</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.75rem' }}>
                  Free Workshop Materials Provided
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  Every attendee leaves equipped to put their new knowledge into practice immediately. All supplies are provided complimentary by our donor trust.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Microbial Bio-Compost Starter Culture Bottle for home garden floral composting',
                    'Sample stack of dried pressed banana-leaf pooja cups and organic cotton wicks',
                    'Subsidized 100% unbleached cotton grocery tote bag printed with Telugu conservation motifs',
                    'Laminated bilingual pictorial reference sheet for household waste segregation'
                  ].map((kit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>{kit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Card */}
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '14px',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 2px 8px rgba(5, 150, 105, 0.15)'
                }}>
                  <HeartHandshake size={28} color="#059669" />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#064e3b', margin: '0 0 0.5rem' }}>
                  Host a Workshop in Your Community
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#065f46', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  Are you a temple trustee, resident welfare association president, or merchant union leader? We will bring the workshop directly to your venue.
                </p>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '11px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
                  }}
                >
                  <span>Request a Community Workshop</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/awareness/schools"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: School &amp; College Drives</span>
          </Link>
          <Link
            to="/awareness/campaigns"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: Youth Campaigns &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AwarenessWorkshops;

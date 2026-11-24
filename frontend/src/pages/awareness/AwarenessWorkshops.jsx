import React from 'react';
import { Link } from 'react-router-dom';
import workshopUniqueHeroImg from '../../assets/workshop-unique-hero.jpg';
import workshopUniqueCompostImg from '../../assets/workshop-unique-compost.jpg';
import workshopUniqueLeafplateImg from '../../assets/workshop-unique-leafplate.jpg';
import workshopUniqueMerchantImg from '../../assets/workshop-unique-merchant.jpg';
import workshopUniqueBinsImg from '../../assets/workshop-unique-bins.jpg';
import workshopUniquePressImg from '../../assets/workshop-unique-press.jpg';
import workshopUniqueFloralImg from '../../assets/workshop-unique-floral.jpg';
import workshopUniquePotterImg from '../../assets/workshop-unique-potter.jpg';

import { 
  Users, 
  Recycle, 
  Leaf, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  HeartHandshake,
  Package,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const workshopTracks = [
  {
    num: '01',
    title: 'Sacred Floral Waste Bio-Composting',
    image: workshopUniqueCompostImg,
    badge: 'Track 01',
    instructor: 'Organic Agronomy Team',
    desc: 'Teaches pilgrims and priests how to convert discarded temple floral offerings into rich vermicompost for farming.'
  },
  {
    num: '02',
    title: 'Banana-Leaf & Palm Pooja Crafting',
    image: workshopUniqueLeafplateImg,
    badge: 'Track 02',
    instructor: 'Women Artisan Guilds',
    desc: 'Hands-on training in pressing sun-dried banana leaves and areca palm into biodegradable pooja cups and bowls.'
  },
  {
    num: '03',
    title: 'Riverfront Merchant Green Transition',
    image: workshopUniqueMerchantImg,
    badge: 'Track 03',
    instructor: 'Merchant Green Liaisons',
    desc: 'Equips tea stalls and vendors with subsidized reusable cloth bags and clay cups with zero business loss.'
  },
  {
    num: '04',
    title: 'Household Zero-Waste Segregation',
    image: workshopUniqueBinsImg,
    badge: 'Track 04',
    instructor: 'Civic Sanitation Leaders',
    desc: 'A simple 2-bin segregation protocol for riverside households to keep plastics and detergents out of river canals.'
  }
];

const workshopSchedule = [
  {
    track: 'Floral Composting Masterclass',
    venue: 'Kotilingala Ghat Riverside Pavilion',
    timing: 'Every 2nd Saturday • 09:30 AM',
    seats: '35 Seats Available',
    type: 'Hands-On Masterclass'
  },
  {
    track: 'Eco-Pooja Artisan Crafting',
    venue: 'Pushkar Ghat Community Hall',
    timing: 'Every 3rd Sunday • 10:00 AM',
    seats: '40 Seats Available',
    type: 'Family & Pilgrim Friendly'
  },
  {
    track: 'Merchant Plastic-Free Alliance',
    venue: 'Godavari Bund Merchants Hall',
    timing: 'Monthly 1st Wednesday • 04:00 PM',
    seats: 'Open to All Vendors',
    type: 'Commercial Trade Focus'
  },
  {
    track: 'Household Zero-Waste Workshop',
    venue: 'Dowleswaram Barrage Community Center',
    timing: 'Alternate Sundays • 10:00 AM',
    seats: '30 Seats Available',
    type: 'Residential Focus'
  }
];

const galleryHighlights = [
  {
    title: 'Sacred Temple Floral Recycling',
    subtitle: 'Vibrant Temple Offerings Diverted for Bio-Compost',
    image: workshopUniqueFloralImg,
    badge: 'Bio-Composting'
  },
  {
    title: 'Areca Leaf & Palm Pressing Machine',
    subtitle: 'Zero-Plastic Artisan Workshop in Action',
    image: workshopUniquePressImg,
    badge: 'Artisan Press'
  },
  {
    title: 'Handmade Terracotta Pottery & Kulhars',
    subtitle: 'Phasing Out Disposable Plastic Cups at Stalls',
    image: workshopUniquePotterImg,
    badge: 'Plastic-Free Tea'
  }
];

const AwarenessWorkshops = () => {
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
                <span>COMMUNITY MASTERCLASSES • CITIZEN ACTION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Public Workshops
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Practical, Hands-On Eco-Skills for Citizens, Pilgrims, and Riverfront Artisans.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Held in open-air pavilions along River Godavari, our practical workshops teach families, 
                devotees, and vendors how to compost floral waste and craft completely biodegradable alternatives.
              </p>

              {/* Quick Highlight Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Recycle size={14} color="#059669" />
                  <span>Floral Bio-Composting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Leaf size={14} color="#059669" />
                  <span>Banana-Leaf Crafting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Package size={14} color="#059669" />
                  <span>Free Starter Kit</span>
                </div>
              </div>
            </div>

            {/* Right: Sharp Workshop Session Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={workshopUniqueHeroImg} 
                  alt="Public eco-composting and leaf crafting workshop on Godavari Ghats" 
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
                      Floral Bio-Composting &amp; Leaf Crafting Session
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
                    Hands-On Training
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
              { val: '65+', label: 'Workshops Hosted', note: 'Pavilions, ghats & halls' },
              { val: '2,800+', label: 'Citizens Trained', note: 'Households, women & pilgrims' },
              { val: '18 Tons', label: 'Flowers Composted', note: 'Diverted from river water' },
              { val: '100%', label: 'Free Public Access', note: 'All starter kits provided free' }
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

      {/* 3. FOUR CORE WORKSHOP TRACKS (WITH DEDICATED HIGH-RES PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Sparkles size={14} />
              <span>Skills for Sustainability</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Four Core Community Eco-Skill Tracks
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Practical waste-transformation and sustainable craft skills for citizens and local businesses.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {workshopTracks.map((trk, idx) => (
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
                {/* Photo Top */}
                <div style={{ position: 'relative', height: '165px', overflow: 'hidden' }}>
                  <img 
                    src={trk.image} 
                    alt={trk.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
                    {trk.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem', display: 'block' }}>
                      {trk.instructor}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem' }}>
                      {trk.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {trk.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. UPCOMING WORKSHOP TIMETABLE */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Calendar size={14} />
              <span>Public Timetable</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Upcoming Community Workshop Dates
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Free registration open to all citizens, students, and pilgrims. Limited to 40 participants per cohort.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {workshopSchedule.map((ws, idx) => (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em'
                    }}>
                      {ws.type}
                    </span>
                    <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#64748b' }}>
                      {ws.seats}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {ws.track}
                  </h3>

                  <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} color="#059669" />
                    <span>{ws.venue}</span>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} color="#059669" />
                    <span>{ws.timing}</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem', marginTop: '1rem' }}>
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
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <span>Reserve Free Seat</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PARTICIPANT WELCOME KIT WITH PHOTO & HOST A WORKSHOP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 15px -4px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  <Package size={14} />
                  <span>Participant Welcome Kit</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.6rem' }}>
                  Free Workshop Materials Provided
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  Every attendee leaves equipped to put practical knowledge into practice immediately, funded by our trust.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    'Microbial Bio-Compost Starter Culture Bottle for home garden floral composting',
                    'Sample stack of dried pressed banana-leaf pooja cups and organic cotton wicks',
                    'Subsidized 100% unbleached cotton grocery tote bag printed with Telugu conservation motifs',
                    'Laminated bilingual pictorial reference sheet for household waste segregation'
                  ].map((kit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5 }}>{kit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Card with Orientation Photo */}
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '14px',
                padding: '1.75rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1rem',
                  border: '2px solid #059669',
                  boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                }}>
                  <img 
                    src={workshopUniquePressImg} 
                    alt="Eco-Craft Pressing Tool" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#064e3b', margin: '0 0 0.35rem' }}>
                  Host a Workshop in Your Community
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#065f46', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                  Are you a temple trustee, resident welfare association president, or merchant union leader? We bring the workshop directly to your venue.
                </p>
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
                Workshop Activities In Action
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Training Records • Rajahmundry
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

    </div>
  );
};

export default AwarenessWorkshops;

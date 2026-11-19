import React from 'react';
import { Link } from 'react-router-dom';
import godavariCleanupImg from '../../assets/godavari-cleanup.jpg';
import godavariWasteSortingImg from '../../assets/godavari-waste-sorting.jpg';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Trash2, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Award,
  AlertCircle,
  PackageCheck,
  Recycle,
  HeartHandshake
} from 'lucide-react';

const ghatSchedules = [
  {
    ghat: 'Kotilingala Ghat',
    location: 'Godavari Bund Road, Rajahmundry',
    timing: '1st & 3rd Saturday • 06:30 AM – 09:00 AM',
    lead: 'Field Lead: Sri M. Ramu Naidu',
    zone: 'Zone A — Bathing & Ritual Embankment',
    priority: 'High Priority',
    color: '#059669',
    badgeBg: '#ecfdf5'
  },
  {
    ghat: 'Pushkar Ghat',
    location: 'Opp. Pushkar Nagar, Rajahmundry',
    timing: '2nd & 4th Sunday • 06:30 AM – 09:00 AM',
    lead: 'Youth Lead: Dr. K. V. Subba Rao',
    zone: 'Zone B — Pilgrimage Heritage Steps',
    priority: 'Core Pilgrimage Hub',
    color: '#0284c7',
    badgeBg: '#f0f9ff'
  },
  {
    ghat: 'Saraswathi Ghat',
    location: 'Kotipalli Bus Stand Road',
    timing: 'Alternate Saturdays • 07:00 AM – 09:00 AM',
    lead: 'Community Lead: Smt. P. Lakshmi Devi',
    zone: 'Zone C — Cultural & Sacred Bathing',
    priority: 'Community Managed',
    color: '#7c3aed',
    badgeBg: '#f5f3ff'
  },
  {
    ghat: 'Markandeya Ghat',
    location: 'Near Old River Bridge Outfall',
    timing: 'Monthly Mega Drive • 06:30 AM – 09:30 AM',
    lead: 'Operations: Joint Volunteer Cadre',
    zone: 'Zone D — Drainage Inlet Buffer Zone',
    priority: 'Pollution Barrier',
    color: '#d97706',
    badgeBg: '#fffbeb'
  }
];

const wastePipeline = [
  {
    step: '01',
    title: 'Shoreline Grid Clearing',
    desc: 'Volunteers sweep assigned ghat grids using grabbers to collect single-use plastic water bottles, synthetic wrappers, and discarded nylon threads.'
  },
  {
    step: '02',
    title: 'Hands-On Segregation',
    desc: 'Debris is sorted directly into color-coded natural jute bags: recyclable PET bottles, rigid plastics, and organic biodegradable floral waste.'
  },
  {
    step: '03',
    title: 'Audit & Weight Verification',
    desc: 'Every bag is weighed and logged at the on-site command desk to maintain a publicly audited record of total plastics intercepted from the water.'
  },
  {
    step: '04',
    title: 'Municipal Authorized Recycling',
    desc: 'Recovered plastics are transferred immediately to authorized municipal recycling partners, ensuring zero open burning or landfill dumping.'
  }
];

const safetyGearItems = [
  { title: 'Puncture-Resistant Nitrile Gloves', desc: 'Thick protective gloves protecting hands from sharp edges, glass, and riverbed silt.' },
  { title: 'Stainless Steel Litter Grabbers', desc: 'Ergonomic 3-foot reach mechanical grabbers to safely pull debris from riverbank steps.' },
  { title: 'High-Visibility Volunteer Sashes', desc: 'Recognized green identification sashes ensuring volunteer safety and crowd coordination.' },
  { title: 'Labelled Heavy-Duty Jute Sacks', desc: 'Eco-friendly breathable gunny bags replacing disposable plastic trash bags on site.' },
  { title: 'On-Site First Aid & Hydration Desk', desc: 'Trained medical volunteer with antiseptic wash, sterile dressings, and clean drinking water.' }
];

const ActivityCleanliness = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. CAMPAIGN HEADER */}
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
            {/* Left Column: Cleanliness Title & Summary */}
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
                <Trash2 size={14} />
                <span>FIELD CAMPAIGN • BI-WEEKLY CADENCE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Cleanliness Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Direct Shoreline Action Restoring the Sacred Ghats of River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Operating every weekend at sunrise across Rajahmundry, our trained volunteer squads clear single-use plastics, 
                intercept synthetic litter from bathing steps, and channel 100% of recovered recyclables into municipal recovery streams.
              </p>

              {/* Quick meta pills */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Every Saturday &amp; Sunday</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#059669" />
                  <span>4 Rajahmundry Ghats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>100% Segregated &amp; Recycled</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Cleanliness Banner Photo */}
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
                  alt="Godavari Active Volunteer Cleanliness Drive at Ghat Steps" 
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
                      Kotilingala Ghat Shoreline Volunteer Squad — Rajahmundry
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
                    Live Field Action
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
              { val: '45+', label: 'Drives Executed', note: 'Consistent weekend cadence' },
              { val: '28 Tons', label: 'Plastics Intercepted', note: 'Recovered from bathing steps' },
              { val: '1,200+', label: 'Active Volunteers', note: 'Registered citizen stewards' },
              { val: '100%', label: 'Traceable Diversion', note: 'Zero open burning or landfill' }
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

      {/* 3. PATTERN SECTION: FIELD GHAT OPERATIONS ROSTER */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <MapPin size={15} />
              <span>Ghat Operations Schedule</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Permanent Ghat Monitoring &amp; Cleanup Stations
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              We maintain dedicated weekend operational squads at the four most active bathing and cultural ghats across the Rajahmundry riverfront.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {ghatSchedules.map((ghat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: ghat.color,
                      background: ghat.badgeBg,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {ghat.priority}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                      Station #0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                    {ghat.ghat}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="#059669" />
                    <span>{ghat.location}</span>
                  </p>

                  <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={13} color="#059669" />
                      <span>{ghat.timing}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      {ghat.zone}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                    {ghat.lead}
                  </span>
                  <Link 
                    to="/contact" 
                    style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Join</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: 4-STAGE WASTE DIVERSION PIPELINE WITH PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Distinct Waste Sorting Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariWasteSortingImg} 
                  alt="Volunteers sorting plastic bottles into labelled jute bags on Godavari Ghat" 
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
                      On-Site Sorting: Recyclable Plastics vs Floral Biomass
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
                    Certified Sorting
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Waste Diversion Pipeline Steps */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Recycle size={15} />
                <span>Zero Landfill Commitment</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                Our 4-Stage Waste Recovery &amp; Recycling Pipeline
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
                We believe cleanups are only successful when collected debris is systematically prevented from ever returning to nature. Every drive executes this strict four-tier custody protocol.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {wastePipeline.map((pipe, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      color: '#047857',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {pipe.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem' }}>
                        {pipe.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                        {pipe.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PATTERN SECTION: FIELD SAFETY GEAR & PROTOCOLS */}
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
                  <ShieldCheck size={16} />
                  <span>Volunteer Health &amp; Security</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.75rem' }}>
                  Official Field Safety Kit &amp; Protocol
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  No volunteer ever touches waste with bare hands. Before every drive begins, our logistics desk issues certified safety equipment to ensure complete hygienic protection.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {safetyGearItems.map((gear, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>{gear.title}: </span>
                        <span style={{ fontSize: '0.86rem', color: '#64748b' }}>{gear.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
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
                  <PackageCheck size={28} color="#059669" />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#064e3b', margin: '0 0 0.5rem' }}>
                  Join This Saturday's Squad
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#065f46', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  All safety gear, jute bags, grabbers, and refreshing morning refreshments are provided free of cost to all participants.
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
                  <span>Register as Cleanliness Volunteer</span>
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
            to="/activities"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Back to All Activities</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              to="/activities/plantation"
              style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Next: Tree Plantation &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityCleanliness;

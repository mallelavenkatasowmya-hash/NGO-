import React from 'react';
import { Link } from 'react-router-dom';
import godavariCleanupImg from '../../assets/godavari-cleanup.jpg';
import godavariWasteSortingImg from '../../assets/godavari-waste-sorting.jpg';
import ghatKotilingalaImg from '../../assets/ghat-kotilingala.jpg';
import ghatPushkarImg from '../../assets/ghat-pushkar.jpg';
import ghatSaraswathiImg from '../../assets/ghat-saraswathi.jpg';
import ghatMarkandeyaImg from '../../assets/ghat-markandeya.jpg';
import ambassadorGhatCaptainImg from '../../assets/ambassador-ghat-captain.jpg';

import { 
  Trash2, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Recycle,
  PackageCheck,
  UserCheck
} from 'lucide-react';

const ghatSchedules = [
  {
    ghat: 'Kotilingala Ghat',
    image: ghatKotilingalaImg,
    location: 'Godavari Bund Road',
    timing: '1st & 3rd Saturday • 06:30 AM',
    lead: 'Sri M. Ramu Naidu',
    zone: 'Zone A — Bathing Embankment',
    priority: 'High Priority',
    color: '#059669',
    badgeBg: '#ecfdf5'
  },
  {
    ghat: 'Pushkar Ghat',
    image: ghatPushkarImg,
    location: 'Opp. Pushkar Nagar',
    timing: '2nd & 4th Sunday • 06:30 AM',
    lead: 'Dr. K. V. Subba Rao',
    zone: 'Zone B — Pilgrimage Heritage Steps',
    priority: 'Core Pilgrimage Hub',
    color: '#0284c7',
    badgeBg: '#f0f9ff'
  },
  {
    ghat: 'Saraswathi Ghat',
    image: ghatSaraswathiImg,
    location: 'Kotipalli Bus Stand Road',
    timing: 'Alternate Saturdays • 07:00 AM',
    lead: 'Smt. P. Lakshmi Devi',
    zone: 'Zone C — Cultural Bathing Area',
    priority: 'Community Managed',
    color: '#7c3aed',
    badgeBg: '#f5f3ff'
  },
  {
    ghat: 'Markandeya Ghat',
    image: ghatMarkandeyaImg,
    location: 'Near Old River Bridge Outfall',
    timing: 'Monthly Mega Drive • 06:30 AM',
    lead: 'Joint Volunteer Cadre',
    zone: 'Zone D — Drainage Inlet Buffer',
    priority: 'Pollution Barrier',
    color: '#d97706',
    badgeBg: '#fffbeb'
  }
];

const wastePipeline = [
  {
    step: '01',
    title: 'Shoreline Grid Clearing',
    desc: 'Volunteers sweep assigned ghat grids using grabbers to collect single-use bottles and plastics.'
  },
  {
    step: '02',
    title: 'Hands-On Segregation',
    desc: 'Debris is sorted on-site into natural jute bags: recyclable PET bottles, hard plastics, and floral waste.'
  },
  {
    step: '03',
    title: 'Audit & Weight Verification',
    desc: 'Bags are weighed and logged at the command desk for an audited record of intercepted waste.'
  },
  {
    step: '04',
    title: 'Authorized Municipal Recycling',
    desc: 'Recovered materials are transferred directly to authorized recyclers with zero landfill dumping.'
  }
];

const safetyGearItems = [
  { title: 'Puncture-Resistant Nitrile Gloves', desc: 'Protects hands from sharp glass, metal edges, and river silt.' },
  { title: 'Stainless Steel Litter Grabbers', desc: '3-foot reach mechanical grabbers to safely pull debris from river steps.' },
  { title: 'High-Visibility Volunteer Sashes', desc: 'Green recognition sashes ensuring team identification and crowd safety.' },
  { title: 'Heavy-Duty Jute Sacks', desc: 'Breathable, biodegradable bags replacing disposable plastic garbage bags.' },
  { title: 'First Aid & Hydration Desk', desc: 'On-site medical kit with clean drinking water and electrolyte support.' }
];

const galleryHighlights = [
  {
    title: 'Sunrise Shoreline Sweeps',
    subtitle: 'Pushkar Ghat Saturday Drive',
    image: ghatPushkarImg,
    badge: 'Field Action'
  },
  {
    title: 'On-Site Plastic Segregation',
    subtitle: 'Colour-Coded Jute Sorting Desk',
    image: godavariWasteSortingImg,
    badge: 'Zero Landfill'
  },
  {
    title: 'Ghat Command & Weighing Station',
    subtitle: 'Audited Weight Logs & Public Records',
    image: ghatMarkandeyaImg,
    badge: 'Transparent Audit'
  }
];

const ActivityCleanliness = () => {
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
                <Trash2 size={14} />
                <span>FIELD CAMPAIGN • BI-WEEKLY CADENCE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Cleanliness Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Direct Shoreline Action Restoring the Sacred Ghats of River Godavari.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Operating every weekend at sunrise across Rajahmundry, our trained volunteer squads clear 
                single-use plastics, intercept shoreline debris, and ensure 100% of recovered recyclables are properly diverted.
              </p>

              {/* Quick Highlight Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Calendar size={14} color="#059669" />
                  <span>Every Sat &amp; Sun 6:30 AM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#059669" />
                  <span>4 Rajahmundry Ghats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>100% Segregated</span>
                </div>
              </div>
            </div>

            {/* Right: Sharp Cleanliness Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCleanupImg} 
                  alt="Godavari Active Volunteer Cleanliness Drive at Ghat Steps" 
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
                      Kotilingala Ghat Shoreline Volunteer Squad
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
                    Live Field Action
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
              { val: '45+', label: 'Drives Executed', note: 'Consistent weekend cadence' },
              { val: '28 Tons', label: 'Plastics Intercepted', note: 'Recovered from bathing steps' },
              { val: '1,200+', label: 'Active Volunteers', note: 'Registered citizen stewards' },
              { val: '100%', label: 'Traceable Diversion', note: 'Zero open burning or landfill' }
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

      {/* 3. PERMANENT GHAT CLEANUP STATIONS (WITH DEDICATED HIGH-RES PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <MapPin size={14} />
              <span>Ghat Operations Schedule</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Permanent Ghat Monitoring &amp; Cleanup Stations
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Dedicated weekend operational squads stationed at Rajahmundry’s major bathing and cultural ghats.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {ghatSchedules.map((ghat, idx) => (
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
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={ghat.image} 
                    alt={ghat.ghat}
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
                    color: ghat.color,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    Station 0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: ghat.color,
                      background: ghat.badgeBg,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}>
                      {ghat.priority}
                    </span>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                      {ghat.ghat}
                    </h3>

                    <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} color="#059669" />
                      <span>{ghat.location}</span>
                    </p>

                    <div style={{ background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '0.85rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.15rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} color="#059669" />
                        <span>{ghat.timing}</span>
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                        {ghat.zone}
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155' }}>
                      Lead: {ghat.lead}
                    </span>
                    <Link 
                      to="/contact" 
                      style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}
                    >
                      <span>Join</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. 4-STAGE WASTE RECOVERY PIPELINE WITH PHOTO */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Distinct Waste Sorting Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariWasteSortingImg} 
                  alt="Volunteers sorting plastic bottles into labelled jute bags on Godavari Ghat" 
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
                      On-Site Sorting: Recyclables vs Organic Floral Biomass
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
                    Zero Landfill
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Waste Diversion Pipeline Steps (Short Bullet Cards) */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <Recycle size={14} />
                <span>Custody Protocol</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.6rem', lineHeight: 1.25 }}>
                4-Stage Waste Recovery &amp; Recycling Pipeline
              </h2>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                Every drive follows this strict four-tier custody workflow to guarantee 100% transparent material diversion.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {wastePipeline.map((pipe, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    gap: '0.85rem',
                    alignItems: 'flex-start',
                    background: '#f8fafc',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      color: '#047857',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {pipe.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.15rem' }}>
                        {pipe.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
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

      {/* 5. OFFICIAL FIELD SAFETY KIT & SQUAD ENROLLMENT */}
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
                  <ShieldCheck size={14} />
                  <span>Safety Protocol</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.6rem' }}>
                  Official Field Safety Kit
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  No volunteer ever touches waste with bare hands. We issue certified protective equipment prior to every drive.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {safetyGearItems.map((gear, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b' }}>{gear.title}: </span>
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{gear.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Box With Visual Captain Photo */}
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '14px',
                padding: '1.75rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1rem',
                  border: '2px solid #059669',
                  boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                }}>
                  <img 
                    src={ambassadorGhatCaptainImg} 
                    alt="Field Safety Officer" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#064e3b', margin: '0 0 0.35rem' }}>
                  Join This Saturday's Squad
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#065f46', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                  All safety gear, jute sacks, stainless grabbers, and morning refreshments are provided free of cost to all participants.
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
                  <span>Register as Cleanliness Volunteer</span>
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
                Shoreline Cleanups In Action
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Field Records • Rajahmundry Ghats
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

      {/* 7. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2rem 1.5rem', background: '#ffffff' }}>
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

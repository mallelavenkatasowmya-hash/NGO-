import React from 'react';
import { Link } from 'react-router-dom';
import godavariFieldOperationsImg from '../../assets/godavari-field-operations.jpg';
import godavariCanalBarrierImg from '../../assets/godavari-canal-barrier.jpg';
import godavariPastReportsImg from '../../assets/godavari-past-reports.jpg';
import waterParamDoImg from '../../assets/water-param-do.jpg';
import waterParamPhImg from '../../assets/water-param-ph.jpg';
import waterParamTurbidityImg from '../../assets/water-param-turbidity.jpg';
import waterParamBodImg from '../../assets/water-param-bod.jpg';
import protocolCollectionImg from '../../assets/protocol-collection.jpg';
import protocolTestingImg from '../../assets/protocol-testing.jpg';
import protocolDashboardImg from '../../assets/protocol-dashboard.jpg';

import { 
  Waves, 
  Activity, 
  ArrowRight,
  Filter, 
  BarChart3, 
  Microscope, 
  Gauge, 
  Compass,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';

const waterMetrics = [
  {
    name: 'Dissolved Oxygen (DO)',
    image: waterParamDoImg,
    ideal: '> 6.0 mg/L',
    current: '6.8 mg/L',
    status: 'Optimal (Aquatic Life)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Maintains healthy fish populations and oxygen-rich riverbed aquatic flora.'
  },
  {
    name: 'pH Level (Acidity / Alkalinity)',
    image: waterParamPhImg,
    ideal: '7.0 – 8.2',
    current: '7.4 pH',
    status: 'Balanced (Neutral River)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Ensures safe, non-corrosive conditions for community bathing and daily rituals.'
  },
  {
    name: 'Turbidity (Suspended Silt)',
    image: waterParamTurbidityImg,
    ideal: '< 10 NTU',
    current: '8.2 NTU',
    status: 'Clear (High Light)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Guarantees water clarity and natural sunlight penetration through river depths.'
  },
  {
    name: 'Biological Oxygen Demand (BOD)',
    image: waterParamBodImg,
    ideal: '< 2.5 mg/L',
    current: '2.1 mg/L',
    status: 'Class-B Bathing Standard',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Confirms minimal untreated municipal organic waste in monitored river zones.'
  }
];

const canalBarrierSpecs = [
  {
    title: 'Heavy-Duty Floating Booms',
    desc: 'Marine-grade cylindrical barriers that automatically rise and fall with water levels.'
  },
  {
    title: 'Submerged Stainless Steel Catch-Mesh',
    desc: 'Suspended 1.5m below surface to catch plastic bottles, covers, and synthetic items.'
  },
  {
    title: 'Bi-Weekly Municipal Crane Dredging',
    desc: 'Field crews mechanically extract accumulated trash every Tuesday and Friday.'
  },
  {
    title: 'Free River Water & Fish Passage',
    desc: 'Calibrated mesh aperture lets river fish and natural flow pass without obstruction.'
  }
];

const samplingProtocol = [
  {
    step: '01',
    phase: 'Field Sample Collection',
    image: protocolCollectionImg,
    location: '15 Fixed Ghat Stations',
    time: 'Every Sunday 7:00 AM',
    desc: 'Student volunteers collect 500ml water samples from fixed GPS ghat points.'
  },
  {
    step: '02',
    phase: 'On-Site Digital Testing',
    image: protocolTestingImg,
    location: 'Field Laboratory Kits',
    time: 'Within 30 Minutes',
    desc: 'Digital sensors measure DO, pH, turbidity, and conductivity on-site immediately.'
  },
  {
    step: '03',
    phase: 'Open Citizen Data Registry',
    image: protocolDashboardImg,
    location: 'Public Online Dashboard',
    time: 'Live Weekly Updates',
    desc: 'Results are uploaded to an open public registry accessible to all citizens.'
  }
];

const galleryHighlights = [
  {
    title: 'Riverfront Water Sampling',
    subtitle: 'Sunday Field Operations',
    image: godavariFieldOperationsImg,
    badge: 'Field Science'
  },
  {
    title: 'Canal Trap Barrier Defense',
    subtitle: 'Intercepting Plastic at Drainage Inlets',
    image: godavariCanalBarrierImg,
    badge: 'Physical Defense'
  },
  {
    title: 'Community Water Audit Reports',
    subtitle: 'Transparent Public Reporting',
    image: godavariPastReportsImg,
    badge: 'Open Governance'
  }
];

const ActivityConservation = () => {
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
                <Waves size={14} />
                <span>CITIZEN SCIENCE • HYDROLOGICAL SURVEILLANCE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                River Conservation
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Scientific Water Audits &amp; Canal Defense Traps Across Godavari.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                We track river water quality weekly across 15 ghat stations and intercept municipal trash 
                with floating boom barriers before it enters the sacred waters of Godavari.
              </p>

              {/* Quick Highlight Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Activity size={14} color="#059669" />
                  <span>15 Sampling Stations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Filter size={14} color="#059669" />
                  <span>22 Canal Barrier Traps</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <BarChart3 size={14} color="#059669" />
                  <span>Open Citizen Data</span>
                </div>
              </div>
            </div>

            {/* Right: Sharp Field Science Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariFieldOperationsImg} 
                  alt="Coordinators testing Godavari river water quality" 
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
                      Ghat Hydrological Operations — Rajahmundry
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
                    Active Science
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
              { val: '15 Stations', label: 'Water Quality Stations', note: 'Active weekly sampling' },
              { val: '22 Traps', label: 'Canal Plastic Barriers', note: 'Intercepting inlet trash' },
              { val: '4 Parameters', label: 'Core Indicators', note: 'DO, pH, Turbidity, BOD' },
              { val: '100% Open', label: 'Public Data Access', note: 'Verified open audits' }
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

      {/* 3. CORE WATER HEALTH PARAMETERS (WITH PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Gauge size={14} />
              <span>Scientific Parameters</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Core Hydrological Indicators Monitored
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Four physical and chemical indicators tracked weekly across Rajahmundry ghats.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {waterMetrics.map((met, idx) => (
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
                    src={met.image} 
                    alt={met.name}
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
                    color: met.statusColor,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {met.current}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: met.statusColor,
                      background: met.statusBg,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}>
                      {met.status}
                    </span>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                      {met.name}
                    </h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #f1f5f9', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Optimal: {met.ideal}</span>
                      <span style={{ fontSize: '0.72rem', color: met.statusColor, fontWeight: 700 }}>Avg: {met.current}</span>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {met.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CANAL NET-TRAP BARRIER DEFENSE SYSTEM */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Canal Barrier Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCanalBarrierImg} 
                  alt="Floating canal barrier net catching debris before it enters River Godavari" 
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
                      Canal-Mouth Netting Infrastructure
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
                    22 Active Traps
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Features (Short Bullet Cards) */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                <Filter size={14} />
                <span>Physical Barrier Engineering</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.6rem', lineHeight: 1.25 }}>
                Stopping Debris at the Drainage Mouth
              </h2>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                Over 70% of plastic enters through municipal storm channels. We stop it at the inlet with engineered boom barriers before it hits deep currents.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {canalBarrierSpecs.map((spec, idx) => (
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
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.15rem' }}>
                        {spec.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CITIZEN-SCIENCE 3-STEP PROTOCOL (WITH CLEAR PHOTOS) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Microscope size={14} />
              <span>Scientific Rigor</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Citizen-Science Sampling &amp; Auditing Protocol
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Partnering with college biology students and civic leaders to produce peer-verifiable river health records.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {samplingProtocol.map((proto, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{ height: '170px', overflow: 'hidden' }}>
                  <img 
                    src={proto.image} 
                    alt={proto.phase}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                    border: '1px solid #a7f3d0'
                  }}>
                    PHASE {proto.step}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem' }}>
                    {proto.phase}
                  </h4>
                  <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.76rem', color: '#64748b', marginBottom: '0.6rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} color="#059669" />
                      {proto.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} color="#059669" />
                      {proto.time}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                    {proto.desc}
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
                Operations &amp; Conservation In Action
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Field Records • Rajahmundry Basin
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

      {/* 7. VOLUNTEER WATER AUDITOR CALLOUT BOX */}
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
                <span>Join Sunday Field Cohorts</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                Volunteer as a Citizen Water Auditor
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                Join our Sunday morning water sampling cohorts along Rajahmundry ghats. Hands-on training with digital probes, sampling jars, and telemetry provided.
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
              <span>Join as Water Auditor</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityConservation;

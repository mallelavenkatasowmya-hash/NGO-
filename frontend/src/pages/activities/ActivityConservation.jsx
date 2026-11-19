import React from 'react';
import { Link } from 'react-router-dom';
import godavariFieldOperationsImg from '../../assets/godavari-field-operations.jpg';
import godavariCanalBarrierImg from '../../assets/godavari-canal-barrier.jpg';
import { 
  Sparkles, 
  Waves, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Filter, 
  BarChart3, 
  Microscope, 
  ShieldCheck,
  FileText,
  Gauge,
  Compass,
  DownloadCloud,
  Droplet
} from 'lucide-react';

const waterMetrics = [
  {
    name: 'Dissolved Oxygen (DO)',
    ideal: '> 6.0 mg/L',
    current: '6.8 mg/L',
    status: 'Optimal (Healthy Aquatic Life)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'The vital breath of River Godavari. Adequate DO supports fish populations, aquatic flora photosynthesis, and prevents toxic hypoxic dead zones.'
  },
  {
    name: 'pH Level (Acidity / Alkalinity)',
    ideal: '7.0 – 8.2',
    current: '7.4 pH',
    status: 'Balanced (Neutral River Water)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Monitors runoff from upstream agricultural fields and urban storm drains, guaranteeing safe conditions for bathing and ritual ceremonies.'
  },
  {
    name: 'Turbidity (Suspended Silt)',
    ideal: '< 10 NTU',
    current: '8.2 NTU',
    status: 'Clear (High Light Penetration)',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Measures water clarity and suspended particulate matter that blocks natural sunlight from riverbed aquatic plant communities.'
  },
  {
    name: 'Biological Oxygen Demand (BOD)',
    ideal: '< 2.5 mg/L',
    current: '2.1 mg/L',
    status: 'Standard Class-B Water',
    statusColor: '#059669',
    statusBg: '#ecfdf5',
    desc: 'Indicates the rate of microbial organic breakdown. Lower values confirm minimal untreated municipal sewage contamination in monitored zones.'
  }
];

const canalBarrierSpecs = [
  {
    title: 'Heavy-Duty Reinforced Polyethylene Booms',
    desc: 'Floating marine-grade cylindrical barriers that adjust automatically with water level surges without submerging.'
  },
  {
    title: 'Submerged Stainless Steel Catch-Mesh',
    desc: 'Suspended 1.5 meters underwater with weighted anchors to trap water bottles, packaging films, and synthetic offerings.'
  },
  {
    title: 'Bi-Weekly Municipal Crane Extraction',
    desc: 'Dedicated field crews dredge accumulated canal trash into transport skips every Tuesday and Friday before weekend currents.'
  },
  {
    title: 'Zero Flow Obstruction Design',
    desc: 'Mesh aperture size is calibrated to permit natural river water and fish passage while blocking 98%+ of floating anthropogenic debris.'
  }
];

const samplingProtocol = [
  {
    step: '01',
    phase: 'Field Sample Collection',
    desc: 'Trained student teams collect 500ml water samples from 15 fixed GPS coordinates along Rajahmundry ghats at 07:00 AM every Sunday.'
  },
  {
    step: '02',
    phase: 'On-Site Digital Titration',
    desc: 'Digital dissolved oxygen sensors and multi-parameter photometers analyze temperature, pH, conductivity, and dissolved solids within 30 minutes.'
  },
  {
    step: '03',
    phase: 'Open Citizen Data Registry',
    desc: 'Results are uploaded directly to our open public environmental dashboard, empowering citizens and alerting municipal authorities to anomalies.'
  }
];

const ActivityConservation = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. HYDROLOGICAL DATA HERO */}
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
            {/* Left Column: Conservation Info */}
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
                <Waves size={14} />
                <span>CITIZEN SCIENCE • HYDROLOGICAL SURVEILLANCE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                River Conservation
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Scientific Water Quality Auditing &amp; Canal Defense Traps Across Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Effective river restoration requires precise data and engineering defenses. We combine 
                weekly water sampling across 15 ghat stations with physical canal net-trap barriers to stop pollution 
                before it ever enters the sacred waters of Godavari.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Activity size={14} color="#059669" />
                  <span>15 Sampling Stations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Filter size={14} color="#059669" />
                  <span>22 Canal Barrier Traps</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <BarChart3 size={14} color="#059669" />
                  <span>Monthly Public Audits</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Field Science Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariFieldOperationsImg} 
                  alt="Field coordinators and scientists testing Godavari river water quality" 
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
                      Ghat Hydrological Sampling &amp; Laboratory Operations
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
                    Active Science
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
              { val: '15 Stations', label: 'Water Quality Stations', note: 'Active weekly monitoring' },
              { val: '22 Traps', label: 'Canal Plastic Barriers', note: 'Intercepting inlet waste' },
              { val: '4 Parameters', label: 'Scientific Indicators', note: 'DO, pH, Turbidity, BOD' },
              { val: '100% Open', label: 'Citizen Data Access', note: 'Transparent public reports' }
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

      {/* 3. PATTERN SECTION: LIVE RIVER WATER PARAMETERS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Gauge size={15} />
              <span>Public Water Health Metrics</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Core Hydrological Health Indicators Monitored
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              Our team tracks four internationally recognized chemical and physical indicators across Rajahmundry ghats to ensure safe public bathing and preserve aquatic biodiversity.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {waterMetrics.map((met, idx) => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: met.statusColor,
                      background: met.statusBg,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {met.status}
                    </span>
                    <Activity size={16} color="#059669" />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.75rem' }}>
                    {met.name}
                  </h3>

                  <div style={{ display: 'flex', gap: '0.75rem', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Optimal Range</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>{met.ideal}</div>
                    </div>
                    <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '0.75rem' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Current Average</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: met.statusColor }}>{met.current}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {met.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: CANAL NET-TRAP BARRIER DEFENSE SYSTEM WITH PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Distinct Canal Barrier Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariCanalBarrierImg} 
                  alt="Floating canal barrier net catching debris before it enters River Godavari" 
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
                      Canal-Mouth Netting Infrastructure Intercepting Urban Plastics
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
                    22 Barriers
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Engineering Features */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Filter size={15} />
                <span>Physical Barrier Engineering</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                Stopping Debris at the Drainage Mouth
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
                Over 70% of plastic in River Godavari enters via municipal storm drainage channels. Rather than chasing debris in open deep currents, we stop it at the inlet with engineered boom barriers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {canalBarrierSpecs.map((spec, idx) => (
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
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem' }}>
                        {spec.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
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

      {/* 5. PATTERN SECTION: CITIZEN-SCIENCE LAB PROTOCOL */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Microscope size={15} />
              <span>Scientific Rigor</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Citizen-Science Sampling &amp; Auditing Protocol
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
              Partnering with college biology students and civic leaders to produce unassailable, peer-verifiable river health records.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {samplingProtocol.map((proto, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '2rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#047857',
                  background: '#ecfdf5',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  border: '1px solid #a7f3d0'
                }}>
                  PHASE {proto.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {proto.phase}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {proto.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Environmental Report Download Box */}
          <div style={{
            marginTop: '3rem',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                Join the Citizen-Science Hydrology Team
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                Science students, educators, and nature enthusiasts can join our Sunday morning sampling cohorts. Full digital probe training and field safety provided.
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
                padding: '12px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
              }}
            >
              <span>Volunteer as Water Auditor</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/activities/plantation"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Tree Plantation</span>
          </Link>
          <Link
            to="/activities/community"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: Community Programs &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ActivityConservation;

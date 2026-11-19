import React from 'react';
import { Link } from 'react-router-dom';
import godavariMissionHeroImg from '../../assets/godavari-mission-hero.jpg';
import godavariFieldOperationsImg from '../../assets/godavari-field-operations.jpg';
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
  FileText
} from 'lucide-react';

const stats = [
  { value: '15 Stations', label: 'Water Quality Stations', sub: 'Tested across major ghats' },
  { value: '22 Barriers', label: 'Canal Plastic Traps', sub: 'Intercepting inlet waste' },
  { value: '4 Metrics', label: 'Scientific Indicators', sub: 'DO, pH, Turbidity, Coliform' },
  { value: 'Monthly', label: 'Public Health Audits', sub: 'Shared with local citizens' }
];

const scientificMetrics = [
  {
    name: 'Dissolved Oxygen (DO)',
    ideal: '> 6.0 mg/L',
    desc: 'The vital pulse of the river. Healthy DO levels guarantee fish survival, aquatic flora photosynthesis, and prevent stagnant dead zones.'
  },
  {
    name: 'pH Level (Acidity / Alkalinity)',
    ideal: '7.0 – 8.2',
    desc: 'Monitors chemical and industrial run-offs, agricultural pesticide drift, and ensures bathing water safety for millions of pilgrims.'
  },
  {
    name: 'Turbidity & Total Suspended Solids',
    ideal: '< 10 NTU',
    desc: 'Measures water clarity and siltation caused by construction runoff and embankment erosion that blocks sunlight from underwater plants.'
  },
  {
    name: 'Biological Oxygen Demand (BOD)',
    ideal: '< 2.0 mg/L',
    desc: 'Quantifies organic matter decay from municipal drainage, guiding local authorities on sewage treatment plant performance.'
  }
];

const conservationPillars = [
  {
    num: '01',
    title: 'Canal Plastic-Net Trapping',
    desc: 'Heavy-duty steel-reinforced netting installed at municipal drainage outfalls traps floating plastic bottles and packaging before reaching the main river.'
  },
  {
    num: '02',
    title: 'Citizen-Science Water Testing',
    desc: 'Volunteers and college biology students take weekly samples with digital probes, creating an unassailable citizen record of river health.'
  },
  {
    num: '03',
    title: 'Riparian Wetland Restoration',
    desc: 'Natural reed and grass buffers planted near stormwater discharges to naturally filter nitrates, heavy metals, and urban roadway runoff.'
  },
  {
    num: '04',
    title: 'Pollution Hotline & Legal Advocacy',
    desc: 'Documenting unauthorized toxic discharge points with GPS coordinates and filing proactive notices with the State Pollution Control Board.'
  }
];

const ActivityConservation = () => {
  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL SPLIT HERO HEADER */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '4rem 1.5rem 3.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Column: Conservation Info */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#0369a1',
                marginBottom: '1rem'
              }}>
                <Waves size={14} />
                <span>FIELD ACTIVITY #03</span>
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
                color: '#0284c7',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Preserving Hydrological Purity, Water Quality, and Aquatic Life.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Combining citizen science, canal plastic interception netting, and transparent water health tracking 
                to protect River Godavari as a living, free-flowing lifeline for future generations.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Activity size={14} color="#0284c7" />
                  <span>15 Ghat Testing Stations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Filter size={14} color="#0284c7" />
                  <span>22 Net-Trap Barriers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <BarChart3 size={14} color="#0284c7" />
                  <span>Open Citizen Data</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Water Quality Testing Photo */}
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
                  alt="Scientific Water Testing and Conservation Operations on River Godavari" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Water Quality Testing &amp; Monitoring Team
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#0369a1',
                    background: '#f0f9ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bae6fd',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Hydrology
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FAST STATS BAR */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0284c7', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NARRATIVE & CRYSTAL-CLEAR PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Narrative */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Waves size={18} />
                <span>Hydrological Stewardship</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Science-Driven Protection of River Waters
              </h2>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                Clean river conservation demands facts, evidence, and preventative infrastructure. We bridge the gap 
                between civic authorities and local communities by testing water chemistry every week and intercepting 
                solid pollutants before they touch the Godavari main stream.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Weekly water sampling across 15 high-density pilgrimage and bathing ghats',
                  'Engineered canal netting barriers capturing floating debris 24 hours a day',
                  'Transparent public reporting shared directly with universities and civic agencies',
                  'Protection of local fish breeding grounds, turtle nesting sites, and river otters'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Card (100% Clear, Razor-Sharp) */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariMissionHeroImg} 
                  alt="Clear, Free-Flowing Waters of River Godavari Under Active Conservation" 
                  style={{ width: '100%', height: '390px', objectFit: 'cover', display: 'block' }}
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Living River Godavari Waters Monitored for Hydrological Health
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#0369a1',
                    background: '#f0f9ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bae6fd',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Field Science
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WATER QUALITY INDICATORS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#f0f9ff', color: '#0369a1', border: '1px solid #bae6fd' }}>
              SCIENTIFIC METRICS
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Essential Water Health Parameters
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Our testing monitors the four crucial parameters set by the Central Pollution Control Board (CPCB).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {scientificMetrics.map((metric, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#0284c7',
                    background: '#f0f9ff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bae6fd'
                  }}>
                    Standard
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#059669' }}>
                    {metric.ideal}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {metric.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STRATEGIC INTERVENTIONS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#f0f9ff', color: '#0369a1', border: '1px solid #bae6fd' }}>
              ACTIVE MEASURES
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Four Layers of River Defense
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Combining infrastructure interception with community alerts and regulatory collaboration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {conservationPillars.map((pillar, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}>
                  {pillar.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section style={{
        background: '#0c4a6e',
        color: '#ffffff',
        padding: '4.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7dd3fc',
            marginBottom: '1rem'
          }}>
            CITIZEN SCIENCE NETWORK
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Help Monitor Godavari Water Health
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#e0f2fe', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Join our water monitoring field corps. Receive hands-on training with digital testing kits and contribute to regional environmental records.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                background: '#ffffff',
                color: '#0c4a6e',
                padding: '0.85rem 2rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.98rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span>Join as River Guardian</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/activities"
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                padding: '0.85rem 1.75rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.98rem',
                textDecoration: 'none'
              }}
            >
              All Activities Overview
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityConservation;

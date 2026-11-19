import React from 'react';
import { Link } from 'react-router-dom';
import godavariMissionHeroImg from '../../assets/godavari-mission-hero.jpg';
import godavariTreePlantationImg from '../../assets/godavari-tree-plantation.jpg';
import heroBannerImg from '../../assets/hero-banner.jpg';
import { 
  Sparkles, 
  Sprout, 
  TreeDeciduous, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Droplet
} from 'lucide-react';

const stats = [
  { value: '10,000+', label: 'Trees Planted', sub: 'Native indigenous species' },
  { value: '8 km', label: 'Riverbank Stabilized', sub: 'Erosion prevention corridor' },
  { value: '85%', label: 'Sapling Survival Rate', sub: 'Monitored with regular care' },
  { value: '6 Species', label: 'Biodiversity Focus', sub: 'Neem, Peepal, Pongamia & more' }
];

const nativeSpecies = [
  {
    name: 'Neem (Azadirachta indica)',
    type: 'Air Purifier & Antimicrobial',
    desc: 'Deep taproot system that prevents topsoil wash-away while naturally purifying surrounding air and riverfront microclimate.'
  },
  {
    name: 'Peepal (Ficus religiosa)',
    type: '24-Hour Oxygen Generator',
    desc: 'Massive root network anchoring riverbank stone walls, providing shade for pilgrims and nesting for river birds.'
  },
  {
    name: 'Kanuga / Pongamia (Pongamia pinnata)',
    type: 'Riparian Soil Stabilizer',
    desc: 'Exceptional flood tolerance; thrives in wet river margins, fixing nitrogen into degraded riverbank soil.'
  },
  {
    name: 'Alleneredu / Jamun (Syzygium cumini)',
    type: 'Aquatic Ecosystem Buffer',
    desc: 'Loves riverfront water tables; stabilizes muddy edges and feeds resident wetland fauna and songbirds.'
  }
];

const plantationSteps = [
  {
    num: '01',
    title: 'Site Soil & Hydrology Survey',
    desc: 'We map flood-prone embankments along Godavari Bund Road and Dowleswaram to identify critical zones suffering from erosion.'
  },
  {
    num: '02',
    title: 'Indigenous Sapling Selection',
    desc: 'Only native 2-to-3-year-old hardened nursery saplings are chosen to guarantee strong resistance against summer heat and monsoon currents.'
  },
  {
    num: '03',
    title: 'Community Plantation Drives',
    desc: 'School students, collegiate youth, and families dig deep pits with organic compost and water basins along designated green corridors.'
  },
  {
    num: '04',
    title: 'Caretaker Adoption & 3-Year Care',
    desc: 'Volunteers and local shopkeepers adopt tree clusters, ensuring weekly watering, protective bamboo tree-guards, and survival tracking.'
  }
];

const ActivityPlantation = () => {
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
            {/* Left Column: Plantation Info */}
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
                <Sprout size={14} />
                <span>FIELD ACTIVITY #02</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Tree Plantation Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Creating a Living Green Shield Along River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Restoring indigenous riparian forest belts to prevent riverbank erosion, cool local neighborhoods, 
                and revive vital bird and pollinator ecosystems across the Godavari river corridor.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <TreeDeciduous size={14} color="#059669" />
                  <span>10,000+ Native Trees</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#059669" />
                  <span>8 km Embankment Belt</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Droplet size={14} color="#059669" />
                  <span>3-Year Nurturing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Tree Plantation Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariTreePlantationImg} 
                  alt="Godavari Riverfront Tree Plantation Volunteers" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Bund Road Riparian Afforestation Corridor
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
                    Afforestation
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
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#059669', lineHeight: 1.1, marginBottom: '0.35rem' }}>
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Sprout size={18} />
                <span>Riparian Afforestation</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Soil Stabilization &amp; Native Bio-Corridors
              </h2>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                River Godavari experiences significant seasonal water flow fluctuations. During monsoon floods, unprotected 
                riverbanks suffer severe silt erosion. Our afforestation program plants native deep-rooted trees that knit the 
                soil together naturally while providing shade and reducing ambient summer temperatures by 3–4°C.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Targeted planting of flood-resilient native species adapted to riparian riverbeds',
                  'Bamboo tree-guards and protective perimeter fencing for every sapling cluster',
                  'Summer drip-watering schedules in partnership with municipal water tankers',
                  'Adopt-a-Tree certificates for school students to cultivate lifelong stewardship'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
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
                  src={heroBannerImg} 
                  alt="Living Green River Godavari Embankment Corridor" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Living Green River Corridor Protected from Embankment Erosion
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
                    Green Belt
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NATIVE SPECIES SHOWCASE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              BOTANICAL SELECTION
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Native Trees for Riverbank Resilience
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              We deliberately avoid invasive species like eucalyptus, planting only time-tested indigenous Indian riparian trees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {nativeSpecies.map((tree, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#059669',
                  background: '#ecfdf5',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid #a7f3d0',
                  width: 'fit-content',
                  marginBottom: '1rem'
                }}>
                  {tree.type}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {tree.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {tree.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PLANTATION METHODOLOGY */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              STEWARDSHIP CYCLE
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              From Seedling to Forest Canopy
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Planting is only 10% of the effort; our commitment is 3 years of continuous nourishment and monitoring.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {plantationSteps.map((step, idx) => (
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
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section style={{
        background: '#064e3b',
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
            color: '#86efac',
            marginBottom: '1rem'
          }}>
            ADOPT &amp; PLANT
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Plant a Tree Along River Godavari
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Join our weekend plantation drives or sponsor a cluster of native trees with custom geo-tagged naming certificates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                background: '#ffffff',
                color: '#064e3b',
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
              <span>Join as Tree Volunteer</span>
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
              Explore All Activities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivityPlantation;

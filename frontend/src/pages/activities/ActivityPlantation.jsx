import React from 'react';
import { Link } from 'react-router-dom';
import godavariTreePlantationImg from '../../assets/godavari-tree-plantation.jpg';
import godavariSaplingGuardImg from '../../assets/godavari-sapling-guard.jpg';
import { 
  Sparkles, 
  Sprout, 
  TreeDeciduous, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Droplet,
  Sun,
  Leaf,
  Layers,
  Award
} from 'lucide-react';

const nativeSpeciesCatalog = [
  {
    name: 'Neem',
    botanical: 'Azadirachta indica',
    telugu: 'వేప చెట్టు (Vepa)',
    rootDepth: 'Deep Taproot System',
    floodResist: 'High Drought & Heat Resistance',
    superpower: 'Acts as a natural antimicrobial air filter while the deep taproot prevents riverbank topsoil erosion during sudden water level fluctuations.',
    tagColor: '#15803d',
    tagBg: '#f0fdf4'
  },
  {
    name: 'Kanuga / Indian Beech',
    botanical: 'Pongamia pinnata',
    telugu: 'కానుగ (Kanuga)',
    rootDepth: 'Sprawling Lateral Anchors',
    floodResist: 'Exceptional Waterlogging Tolerance',
    superpower: 'Thrives in waterlogged river margins and seasonal flood zones; fixes atmospheric nitrogen into damaged river embankment soil.',
    tagColor: '#047857',
    tagBg: '#ecfdf5'
  },
  {
    name: 'Peepal / Sacred Fig',
    botanical: 'Ficus religiosa',
    telugu: 'రావి చెట్టు (Ravi)',
    rootDepth: 'Massive Structural Soil Grips',
    floodResist: 'Century-Long Resilience',
    superpower: 'Exceptional 24-hour oxygen release profile with dense leaf canopy providing cooling microclimates for pilgrims and nesting birds.',
    tagColor: '#0284c7',
    tagBg: '#f0f9ff'
  },
  {
    name: 'Jamun / Black Plum',
    botanical: 'Syzygium cumini',
    telugu: 'నేరేడు (Neredu)',
    rootDepth: 'Dense Fibrous Water Bed',
    floodResist: 'High Riparian River Adaptation',
    superpower: 'Loves high water tables along watercourses; stabilizes muddy shorelines and provides rich organic fruit for resident aquatic wildlife.',
    tagColor: '#7c3aed',
    tagBg: '#f5f3ff'
  }
];

const riparianZones = [
  {
    zone: 'Zone 1: Waterfront Waterline Buffer (0 – 5m from edge)',
    trees: 'Kanuga (Pongamia) & Water Reed Corridors',
    purpose: 'Submerged root networks break the mechanical force of monsoon river currents and trap sediment before it washes downriver.'
  },
  {
    zone: 'Zone 2: Embankment Slope Stabilization (5 – 20m slope)',
    trees: 'Neem, Jamun & Deep-Root Riparian Grasses',
    purpose: 'Binds porous riverbank soil, eliminating catastrophic slope collapse and landslides along the Rajahmundry bund.'
  },
  {
    zone: 'Zone 3: Bund Crest Canopy & Public Walkway (20m+ crest)',
    trees: 'Peepal, Banyan & Sacred Flowering Flora',
    purpose: 'Creates a dense, shaded canopy lowering ambient summer ground temperatures by 4–6°C and purifying urban air.'
  }
];

const growthMilestones = [
  {
    period: 'Day 0 – Week 2',
    stage: 'Excavation & Bamboo Caging',
    desc: 'Saplings are planted in 2x2ft pits enriched with compost and encircled with traditional woven bamboo guards to protect from livestock.'
  },
  {
    period: 'Month 1 – Month 12',
    stage: 'Adoptive Hydration Schedule',
    desc: 'Coordinators and assigned local volunteers water saplings bi-weekly and apply natural neem-cake mulch around the base.'
  },
  {
    period: 'Year 2',
    stage: 'Root Anchor Establishment',
    desc: 'The taproot penetrates beyond 6 feet into the groundwater table, achieving 85%+ self-sufficiency without artificial watering.'
  },
  {
    period: 'Year 3 & Beyond',
    stage: 'Permanent Ecological Canopy',
    desc: 'The tree reaches maturity, anchoring thousands of cubic feet of river soil, sheltering bird species, and cooling the river corridor.'
  }
];

const ActivityPlantation = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. BOTANICAL AFFORESTATION HERO */}
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
            {/* Left Column: Afforestation Mission */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#15803d',
                marginBottom: '1rem'
              }}>
                <Sprout size={14} />
                <span>AFFORESTATION • RIPARIAN CORRIDORS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Tree Plantation
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#15803d',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Restoring Living Green Riverbanks Along 8 Kilometers of River Godavari.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Unregulated construction and deforestation have weakened Godavari's natural embankments. 
                Our mission plants indigenous, high-survival native species to permanently arrest soil erosion, 
                lower ambient microclimate temperatures, and rebuild riparian wildlife habitats.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <TreeDeciduous size={14} color="#15803d" />
                  <span>10,000+ Native Saplings</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#15803d" />
                  <span>8 km Bund Corridor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#15803d" />
                  <span>85%+ Monitored Survival</span>
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
                  alt="Volunteers planting native saplings along Godavari Riverbank" 
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#15803d', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari Bund Corridor Afforestation Drive — Rajahmundry
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#15803d',
                    background: '#f0fdf4',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bbf7d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Active Plantation
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
              { val: '10,000+', label: 'Trees Planted', note: 'Indigenous Andhra species' },
              { val: '8 km', label: 'Riverbank Stabilized', note: 'Erosion prevention belt' },
              { val: '85%', label: 'Verified Survival Rate', note: 'Monitored by field teams' },
              { val: '3 Years', label: 'Stewardship Cycle', note: 'Guaranteed care per tree' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                borderLeft: '4px solid #15803d'
              }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#15803d', lineHeight: 1.1, marginBottom: '0.25rem' }}>
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

      {/* 3. PATTERN SECTION: INDIGENOUS SPECIES BOTANICAL GUIDE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#15803d', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Leaf size={15} />
              <span>Botanical Curation</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Native Species Selected for Riverbank Resilience
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              We do not plant invasive eucalyptus or ornamental palms. Every single sapling is an indigenous native species scientifically chosen for its root mechanics and hydrological compatibility with the Godavari basin.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {nativeSpeciesCatalog.map((spec, idx) => (
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
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: spec.tagColor,
                      background: spec.tagBg,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {spec.telugu}
                    </span>
                    <TreeDeciduous size={18} color="#15803d" />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.25rem' }}>
                    {spec.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#64748b', marginBottom: '1rem' }}>
                    {spec.botanical}
                  </div>

                  <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                      Root Structure: <span style={{ fontWeight: 500, color: '#475569' }}>{spec.rootDepth}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
                      Resilience: <span style={{ fontWeight: 500, color: '#475569' }}>{spec.floodResist}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {spec.superpower}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: RIPARIAN EMBANKMENT ZONES & BAMBOO GUARD PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Riparian Embankment Blueprint */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#15803d', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Layers size={15} />
                <span>Hydrological Engineering</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                The 3-Zone Riverbank Afforestation Blueprint
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
                River Godavari rises rapidly during monsoon crests. To withstand high river flow velocities, we deploy a layered three-tier planting matrix across the embankment profile.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {riparianZones.map((zone, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    borderLeft: '4px solid #15803d'
                  }}>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.35rem' }}>
                      {zone.zone}
                    </h4>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#15803d', marginBottom: '0.35rem' }}>
                      Key Flora: {zone.trees}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                      {zone.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Distinct Bamboo Caged Sapling Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariSaplingGuardImg} 
                  alt="Young native Neem sapling in woven bamboo guard along Godavari embankment" 
                  style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
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
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#15803d', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Traditional Woven Bamboo Tree Guards Safeguarding River Saplings
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#15803d',
                    background: '#f0fdf4',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #bbf7d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    85% Survival Rate
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PATTERN SECTION: 3-YEAR STEWARDSHIP TIMELINE */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#15803d', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Sun size={15} />
              <span>Long-Term Care Protocol</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              The 3-Year Tree Stewardship Commitment
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
              Anyone can plant a seed for a photo. Our NGO commits to 3 full years of guaranteed watering, mulching, and care.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {growthMilestones.map((m, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.75rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#15803d',
                  background: '#f0fdf4',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  border: '1px solid #bbf7d0'
                }}>
                  {m.period}
                </div>
                <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' }}>
                  {m.stage}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Adopt a Tree Callout */}
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
                Sponsor or Adopt a Tree Along Godavari Embankment
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                Every adopted tree receives a dedicated geo-tagged location, bamboo guard, and 3-year monitored care card with your name or family dedication.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#15803d',
                color: '#ffffff',
                padding: '12px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(21, 128, 61, 0.25)'
              }}
            >
              <span>Adopt a Godavari Tree</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/activities/cleanliness"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Cleanliness Drives</span>
          </Link>
          <Link
            to="/activities/conservation"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#15803d', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: River Conservation &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ActivityPlantation;

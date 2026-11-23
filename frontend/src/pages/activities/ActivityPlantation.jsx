import React from 'react';
import { Link } from 'react-router-dom';
import godavariTreePlantationImg from '../../assets/godavari-tree-plantation.jpg';
import godavariSaplingGuardImg from '../../assets/godavari-sapling-guard.jpg';
import treeNeemImg from '../../assets/tree-neem.jpg';
import treeKanugaImg from '../../assets/tree-kanuga.jpg';
import treePeepalImg from '../../assets/tree-peepal.jpg';
import treeJamunImg from '../../assets/tree-jamun.png';
import riparianForestImg from '../../assets/riparian-forest.jpg';
import riverbankCanopyImg from '../../assets/riverbank-canopy.jpg';
import { 
  Sprout, 
  TreeDeciduous, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  MapPin, 
  Droplet,
  Sun,
  Leaf,
  Layers,
  Calendar,
  Heart
} from 'lucide-react';

const nativeSpeciesCatalog = [
  {
    name: 'Neem',
    botanical: 'Azadirachta indica',
    telugu: 'వేప (Vepa)',
    image: treeNeemImg,
    badge: 'Air Purifier & Root Grip',
    root: 'Deep Taproot',
    benefit: 'Deep anchoring roots stop slope erosion while natural extracts act as an organic bio-shield for river soils.'
  },
  {
    name: 'Kanuga / Indian Beech',
    botanical: 'Pongamia pinnata',
    telugu: 'కానుగ (Kanuga)',
    image: treeKanugaImg,
    badge: 'Waterlogging Champion',
    root: 'Lateral Anchors',
    benefit: 'Thrives directly in monsoon floodwaters and binds fine sediment to reinforce high-tide banks.'
  },
  {
    name: 'Peepal / Sacred Fig',
    botanical: 'Ficus religiosa',
    telugu: 'రావి (Ravi)',
    image: treePeepalImg,
    badge: 'Century Canopy',
    root: 'Massive Structural Grip',
    benefit: 'Provides high oxygen canopy, cools riverfront temperatures, and provides long-lasting structural embankment hold.'
  },
  {
    name: 'Jamun / Black Plum',
    botanical: 'Syzygium cumini',
    telugu: 'నేరేడు (Neredu)',
    image: treeJamunImg,
    badge: 'Riparian Stabilizer',
    root: 'Fibrous Water Bed',
    benefit: 'Grows vigorously along waterline soil, preventing loose mud collapse while nourishing native river birds.'
  }
];

const riparianZones = [
  {
    number: '01',
    zone: 'Waterline Buffer (0 – 5m)',
    flora: 'Kanuga & Water Reed Corridors',
    desc: 'Submerged root systems break powerful monsoon river currents and retain vital embankment soil.'
  },
  {
    number: '02',
    zone: 'Slope Stabilization (5 – 20m)',
    flora: 'Neem, Jamun & Deep Grasses',
    desc: 'Deep taproots interlock underground to eliminate dangerous slope collapse and landslides.'
  },
  {
    number: '03',
    zone: 'Crest Canopy Walk (20m+)',
    flora: 'Peepal, Banyan & Shaded Trees',
    desc: 'Expansive leaf canopy lowers ambient summer ground temperatures by 4–6°C for pilgrims and visitors.'
  }
];

const stewardshipSteps = [
  {
    step: 'Phase 1',
    time: 'Month 1',
    title: 'Planting & Bamboo Guarding',
    desc: '2×2 ft pit preparation with organic compost and woven bamboo guards to protect from grazing cattle.'
  },
  {
    step: 'Phase 2',
    time: 'Year 1',
    title: 'Adoptive Bi-Weekly Watering',
    desc: 'Scheduled volunteer hydration runs and natural neem-cake mulching during peak summer months.'
  },
  {
    step: 'Phase 3',
    time: 'Year 2',
    title: 'Groundwater Root Penetration',
    desc: 'Roots tap into natural water tables, achieving over 85% verified self-sufficiency.'
  },
  {
    step: 'Phase 4',
    time: 'Year 3+',
    title: 'Self-Sustaining Green Shield',
    desc: 'Matured canopy provides permanent riverbank stabilization, bird nesting, and clean air.'
  }
];

const fieldGallery = [
  {
    image: riparianForestImg,
    title: 'Riparian Embankment Forests',
    tag: 'Active On-Ground Action'
  },
  {
    image: godavariSaplingGuardImg,
    title: 'Traditional Bamboo Protection',
    tag: '85% Survival Rate'
  },
  {
    image: riverbankCanopyImg,
    title: 'Restored Godavari River Canopy',
    tag: '8 km Green Belt'
  }
];

const ActivityPlantation = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. CINEMATIC FULL-WIDTH HERO BANNER (CRYSTAL CLEAR HIGH-RES SUNLIT IMAGE) */}
      <section style={{
        position: 'relative',
        padding: '5.5rem 1.5rem 5rem',
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.44) 0%, rgba(6, 78, 59, 0.30) 50%, rgba(15, 23, 42, 0.68) 100%), url(${godavariTreePlantationImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Soft Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(134, 239, 172, 0.22) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 1rem',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Tree Plantation Drives
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
            fontWeight: 600,
            color: '#86efac',
            margin: '0 auto 1.25rem',
            lineHeight: 1.5,
            maxWidth: '780px',
            textShadow: '0 1px 6px rgba(0, 0, 0, 0.35)'
          }}>
            Restoring Living Green Riverbanks Along 8 km of River Godavari.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: '#ecfdf5',
            maxWidth: '720px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
            opacity: 0.95,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)'
          }}>
            Planting indigenous, deep-rooted native trees with protective bamboo guards to permanently prevent soil erosion and cool riverfront microclimates.
          </p>

          {/* Quick Highlight Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.86rem', fontWeight: 600, color: '#ffffff' }}>
              <TreeDeciduous size={15} color="#86efac" />
              <span>10,000+ Native Trees</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.86rem', fontWeight: 600, color: '#ffffff' }}>
              <MapPin size={15} color="#86efac" />
              <span>8 km Bund Corridor</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.86rem', fontWeight: 600, color: '#ffffff' }}>
              <ShieldCheck size={15} color="#86efac" />
              <span>85%+ Survival Rate</span>
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
              { val: '10,000+', label: 'Trees Planted', note: 'Indigenous riverbank species' },
              { val: '8 km', label: 'Riverbank Stabilized', note: 'Erosion prevention corridor' },
              { val: '85%', label: 'Verified Survival', note: 'Protected with bamboo guards' },
              { val: '3 Years', label: 'Care Commitment', note: 'Guaranteed watering & mulch' }
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

      {/* 3. NATIVE TREES PHOTO SHOWCASE (EACH WITH DEDICATED CRISP IMAGE) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Leaf size={16} />
              <span>Indigenous Flora Selection</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Native Trees for River Godavari Resilience
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: '0 auto', maxWidth: '680px' }}>
              Scientifically selected native trees that bond with riverbank soil, survive floods, and create permanent shaded canopies.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}>
            {nativeSpeciesCatalog.map((tree, idx) => (
              <div 
                key={idx} 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                {/* Tree Image */}
                <div style={{ position: 'relative', height: '190px', background: '#0f172a', overflow: 'hidden' }}>
                  <img 
                    src={tree.image} 
                    alt={tree.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(6, 78, 59, 0.9)',
                    color: '#ffffff',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {tree.telugu}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(6px)',
                    color: '#86efac',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}>
                    {tree.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px' }}>
                      {tree.name}
                    </h3>
                    <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#64748b', marginBottom: '0.85rem' }}>
                      {tree.botanical}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#ecfdf5',
                      border: '1px solid #d1fae5',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: '#047857',
                      marginBottom: '0.75rem'
                    }}>
                      <Sprout size={13} />
                      <span>Root System: {tree.root}</span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                      {tree.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE 3-ZONE RIVERBANK BLUEPRINT WITH PROTECTED BAMBOO GUARD PHOTO */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: 3-Zone Blueprint */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Layers size={16} />
                <span>Hydrological Engineering</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.85rem', lineHeight: 1.25 }}>
                The 3-Zone Riverbank Afforestation Blueprint
              </h2>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.65, margin: '0 0 1.75rem' }}>
                River Godavari surges during monsoon floods. To ensure survival, we deploy a layered, 3-tier planting blueprint along the embankment slope.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {riparianZones.map((z, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.1rem 1.25rem',
                    borderLeft: '4px solid #059669',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#059669',
                      background: '#ecfdf5',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      lineHeight: 1
                    }}>
                      {z.number}
                    </span>
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.2rem' }}>
                        {z.zone}
                      </h4>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#047857', marginBottom: '0.35rem' }}>
                        Flora: {z.flora}
                      </div>
                      <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                        {z.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sapling Bamboo Guard Photo */}
            <div>
              <div style={{
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.15)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariSaplingGuardImg} 
                  alt="Traditional Woven Bamboo Tree Guard Protecting River Sapling" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '1rem 1.25rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b' }}>
                      Traditional Bamboo Cages Guarantee 85%+ Sapling Survival
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
                    textTransform: 'uppercase'
                  }}>
                    Field Guarded
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. 3-YEAR STEWARDSHIP PROTOCOL (CONCISE TIMELINE) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Sun size={16} />
              <span>Dedicated Care Protocol</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              The 3-Year Tree Stewardship Commitment
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: '0 auto', maxWidth: '650px' }}>
              Anyone can plant a seed for a photo. Our NGO commits to 3 full years of guaranteed watering, weeding, and bamboo protection.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem'
          }}>
            {stewardshipSteps.map((s, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid #a7f3d0'
                    }}>
                      {s.step}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>
                      {s.time}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem' }}>
                    {s.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FIELD GALLERY STRIP (3 DISTINCT HIGH-RES PHOTOGRAPHS) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Field Operations in Action
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
              On-ground documentation of sapling planting, riverfront care, and green canopy restoration across Godavari.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {fieldGallery.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  background: '#ffffff'
                }}
              >
                <div style={{ height: '230px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 9px',
                    borderRadius: '999px'
                  }}>
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Adopt a Tree Callout */}
          <div style={{
            marginTop: '3.5rem',
            background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
            borderRadius: '16px',
            padding: '2.5rem',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 10px 25px -5px rgba(6, 78, 59, 0.3)'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#86efac', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <Heart size={14} />
                <span>Get Involved</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem' }}>
                Sponsor or Adopt a Tree Along Godavari Embankment
              </h3>
              <p style={{ color: '#ecfdf5', fontSize: '0.94rem', lineHeight: 1.6, margin: 0, opacity: 0.95 }}>
                Every adopted tree receives a dedicated geo-tagged location, bamboo guard, and 3-year monitored care card with your name or family dedication.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#064e3b',
                padding: '12px 26px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span>Adopt a Godavari Tree</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. PREVIOUS / NEXT ACTIVITY NAVIGATION */}
      <section style={{ padding: '2rem 1.5rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/activities/cleanliness"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Cleanliness Drives</span>
          </Link>
          <Link
            to="/activities/conservation"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: River Conservation &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ActivityPlantation;

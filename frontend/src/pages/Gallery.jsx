import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import galleryHeroShowcaseImg from '../assets/gallery-hero-showcase.jpg';
import galleryCleanKotilingalaImg from '../assets/gallery-clean-kotilingala.jpg';
import galleryAwareSchoolImg from '../assets/gallery-aware-school.jpg';
import galleryPlantBundImg from '../assets/gallery-plant-bund.jpg';
import galleryConserveDowleswaramImg from '../assets/gallery-conserve-dowleswaram.jpg';
import galleryCleanSortingImg from '../assets/gallery-clean-sorting.jpg';
import galleryAwarePledgeImg from '../assets/gallery-aware-pledge.jpg';
import galleryPlantCorridorImg from '../assets/gallery-plant-corridor.jpg';
import galleryConserveSamplingImg from '../assets/gallery-conserve-sampling.jpg';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Image as ImageIcon,
  Layers,
  Leaf,
  Users,
  Waves,
  ShieldCheck
} from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Kotilingala Ghat Weekend Cleanup Drive',
      category: 'Cleanliness Drives',
      location: 'Kotilingala Ghat, Rajahmundry',
      date: 'October 2026',
      image: galleryCleanKotilingalaImg,
    },
    {
      id: 2,
      title: 'School Youth River Stewardship Workshop',
      category: 'Awareness Programs',
      location: 'Pushkar Ghat Community Hall',
      date: 'September 2026',
      image: galleryAwareSchoolImg,
    },
    {
      id: 3,
      title: 'Mass Native Sapling Plantation on Riverbank',
      category: 'Tree Plantation',
      location: 'Godavari Bund Road',
      date: 'October 2026',
      image: galleryPlantBundImg,
    },
    {
      id: 4,
      title: 'Morning Ecological Survey at Dowleswaram',
      category: 'River Conservation',
      location: 'Dowleswaram Barrage',
      date: 'August 2026',
      image: galleryConserveDowleswaramImg,
    },
    {
      id: 5,
      title: 'Plastic Interception & Waste Segregation',
      category: 'Cleanliness Drives',
      location: 'Saraswathi Ghat',
      date: 'September 2026',
      image: galleryCleanSortingImg,
    },
    {
      id: 6,
      title: 'Paryavarana Community Pledge & Rally',
      category: 'Awareness Programs',
      location: 'Rajahmundry Municipal Grounds',
      date: 'July 2026',
      image: galleryAwarePledgeImg,
    },
    {
      id: 7,
      title: 'Riverbank Green Corridor Development',
      category: 'Tree Plantation',
      location: 'Kovvur Riverbank',
      date: 'August 2026',
      image: galleryPlantCorridorImg,
    },
    {
      id: 8,
      title: 'Pristine Riverfront Water Sampling',
      category: 'River Conservation',
      location: 'Havelock Bridge Viewpoint',
      date: 'September 2026',
      image: galleryConserveSamplingImg,
    },
  ];

  const categories = ['All', 'Cleanliness Drives', 'Awareness Programs', 'Tree Plantation', 'River Conservation'];

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL 2-COLUMN HERO (CONSISTENT WITH ALL PLATFORM PAGES) */}
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
            {/* Left Column: Info & Action */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ecfdf5',
                color: '#059669',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                border: '1px solid #a7f3d0'
              }}>
                <Sparkles size={14} />
                <span>PHOTO ARCHIVE • VISUAL DOCUMENTATION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em'
              }}>
                Initiative Photo Gallery
              </h1>

              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#059669',
                margin: '0 0 0.75rem',
                lineHeight: 1.45
              }}>
                Visual Records of Grassroots River Restoration Across Godavari Ghats.
              </div>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Explore verified documentary photographs capturing weekend ghat cleanups, youth eco-curriculum drives, 
                riparian tree plantations, and water quality testing across Rajahmundry, Kovvur, and Dowleswaram.
              </p>

              {/* Stat Pills */}
              <div style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Camera size={14} color="#059669" />
                  <span>8 Ground Photo Sets</span>
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Layers size={14} color="#059669" />
                  <span>4 Action Pillars</span>
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>100% Authentic Captures</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="#gallery-grid"
                  style={{
                    background: '#059669',
                    color: '#ffffff',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 10px rgba(5, 150, 105, 0.2)'
                  }}
                >
                  <span>Explore Photo Gallery</span>
                  <ArrowRight size={16} />
                </a>
                <Link
                  to="/contact"
                  style={{
                    background: '#ffffff',
                    color: '#334155',
                    border: '1px solid #cbd5e1',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Submit Field Photos</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img
                  src={galleryHeroShowcaseImg}
                  alt="Godavari River Field Operations and Conservation Archive"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Sparkles size={12} color="#86efac" />
                  <span>VERIFIED GROUND ARCHIVE</span>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    flexShrink: 0
                  }}>
                    <Camera size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                      Godavari Conservation Chronicle
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Documentary photography from Rajahmundry &amp; river basin initiatives
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. IMPACT STATISTICS STRIP (CONSISTENT WITH OTHER PLATFORM PAGES) */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { val: '4', label: 'Program Focus Areas', sub: 'Cleanliness, plantation, awareness, testing' },
              { val: '28.4+', label: 'Tons Diverted Captured', sub: 'Verified weigh-in & bio-barrier logs' },
              { val: '35+', label: 'Campuses Documented', sub: 'High schools & degree colleges' },
              { val: '100%', label: 'Authentic Ground Photos', sub: 'Zero generic stock imagery' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                borderLeft: '4px solid #059669',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
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

      {/* 3. MAIN GALLERY GRID SECTION WITH AMPLE SPACING & PADDING */}
      <section id="gallery-grid" style={{ padding: '4rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span style={{
              display: 'inline-block',
              background: '#ecfdf5',
              color: '#047857',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.76rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '1px solid #a7f3d0',
              marginBottom: '0.5rem'
            }}>
              CURATED MEDIA
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              On-Ground Initiative Photographs
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Filter by initiative category to review verified documentary photos of community stewardship across the Godavari delta.
            </p>
          </div>

          {/* Category Filter Pills (Generous Margin & Spacing) */}
          <div className="eco-filter-pills-wrap" style={{
            marginBottom: '3rem',
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`eco-filter-pill ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid (Balanced Gap & Equal Height Cards) */}
          <div className="eco-gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.75rem',
            marginBottom: '1rem'
          }}>
            {filtered.map((item) => (
              <div key={item.id} className="eco-gallery-card">
                <div className="eco-gallery-img-wrap" style={{ height: '200px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="eco-gallery-img"
                    loading="lazy"
                  />
                  <span className="eco-gallery-badge">{item.category}</span>
                </div>
                <div className="eco-gallery-content">
                  <h3 className="eco-gallery-title" title={item.title}>
                    {item.title}
                  </h3>
                  <div className="eco-gallery-meta">
                    <div className="eco-gallery-meta-item">
                      <MapPin size={13} className="eco-gallery-icon" />
                      <span>{item.location}</span>
                    </div>
                    <div className="eco-gallery-meta-item">
                      <Calendar size={13} className="eco-gallery-icon" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER (CONSISTENT WITH OTHER PLATFORM PAGES) */}
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
            COMMUNITY PHOTOGRAPHY &amp; CONTRIBUTIONS
          </span>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.25 }}>
            Have Photos from a Recent Cleanliness Drive?
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#ecfdf5', lineHeight: 1.7, margin: '0 0 2rem', opacity: 0.95 }}>
            Share your volunteer action photos with our media team to be featured in the official Godavari conservation archive.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
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
              <span>Submit Field Photos</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/register"
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
              Join Next Weekend Drive
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;

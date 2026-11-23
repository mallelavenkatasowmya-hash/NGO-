import React from 'react';
import { Link } from 'react-router-dom';
import godavariSchoolDrivesImg from '../../assets/godavari-school-drives.jpg';
import communityPillarSchoolsImg from '../../assets/community-pillar-schools.jpg';
import protocolTestingImg from '../../assets/protocol-testing.jpg';
import godavariWasteSortingImg from '../../assets/godavari-waste-sorting.jpg';
import godavariYouthEcoImg from '../../assets/godavari-youth-eco.jpg';
import ambassadorEducatorImg from '../../assets/ambassador-educator.jpg';
import protocolCollectionImg from '../../assets/protocol-collection.jpg';
import godavariTreePlantationImg from '../../assets/godavari-tree-plantation.jpg';

import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  School, 
  Presentation, 
  Microscope,
  MapPin,
  Sparkles,
  BookOpen
} from 'lucide-react';

const academicModules = [
  {
    num: '01',
    title: 'Hydrology & River Ecology',
    image: communityPillarSchoolsImg,
    badge: 'Module 01',
    desc: 'Interactive visual modules exploring the Godavari watershed and river aquatic habitats.'
  },
  {
    num: '02',
    title: 'The Chemistry of River Water',
    image: protocolTestingImg,
    badge: 'Module 02',
    desc: 'Live on-stage water demonstrations measuring dissolved oxygen, pH, and water clarity.'
  },
  {
    num: '03',
    title: 'Plastic Lifecycle & Segregation',
    image: godavariWasteSortingImg,
    badge: 'Module 03',
    desc: 'Hands-on segregation exercises showing the 500-year impact of plastic waste.'
  },
  {
    num: '04',
    title: 'Student Eco-Ambassador Action',
    image: godavariYouthEcoImg,
    badge: 'Module 04',
    desc: 'Practical action plans for school bio-composting, plastic-free living, and cleanups.'
  }
];

const campusStats = [
  { value: '35+', label: 'Schools & Colleges', sub: 'Active campus partnerships' },
  { value: '12,500+', label: 'Students Certified', sub: 'Trained environmental stewards' },
  { value: '45 Mins', label: 'Impact Session', sub: 'Structured multimedia lecture' },
  { value: '100%', label: 'Free Institutional Service', sub: 'Funded entirely by NGO trust' }
];

const partnerColleges = [
  { name: 'Government Arts College (Autonomous)', location: 'Rajahmundry', category: 'Degree & PG College' },
  { name: 'Aditya Degree & PG College', location: 'Danavaipeta, Rajahmundry', category: 'Science & Commerce' },
  { name: 'Sri Kandukuri Veeresalingam Theistic College', location: 'Innespeta', category: 'Heritage Institution' },
  { name: 'Zilla Parishad High Schools', location: 'Kovvur & Kadiyam Mandals', category: 'Rural High Schools' }
];

const galleryHighlights = [
  {
    title: 'Interactive Classroom Workshops',
    subtitle: 'Godavari Basin Ecology Presentations',
    image: godavariSchoolDrivesImg,
    badge: 'Classroom Drive'
  },
  {
    title: 'Ghat Water Testing Excursions',
    subtitle: 'Field Science at Rajahmundry Ghats',
    image: protocolCollectionImg,
    badge: 'Hands-On Science'
  },
  {
    title: 'Campus Afforestation Drives',
    subtitle: 'Native Neem & Kanuga Sapling Planting',
    image: godavariTreePlantationImg,
    badge: 'Campus Greening'
  }
];

const AwarenessSchools = () => {
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
                <GraduationCap size={14} />
                <span>CAMPUS OUTREACH • YOUTH EDUCATION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                School &amp; College Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Inspiring the Next Generation of River Guardians Across Andhra Pradesh.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                We bring multimedia science lectures, hands-on river water testing demonstrations, 
                and official eco-ambassador charters directly into school and college auditoriums free of cost.
              </p>

              {/* Quick Highlight Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <School size={14} color="#059669" />
                  <span>35+ Campuses Partnered</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Award size={14} color="#059669" />
                  <span>Eco-Ambassador Badges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Microscope size={14} color="#059669" />
                  <span>Live Water Testing</span>
                </div>
              </div>
            </div>

            {/* Right: Sharp School Session Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariSchoolDrivesImg} 
                  alt="Environmental education classroom session in Andhra Pradesh" 
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
                      Godavari Basin Ecology Session — Rajahmundry Campus
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
                    Active Campus Drive
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
            {campusStats.map((stat, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.15rem 1.25rem',
                borderLeft: '4px solid #059669'
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.2rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.15rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR ACADEMIC MODULES (WITH DEDICATED HIGH-RES PHOTOS & LESS TEXT) */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Presentation size={14} />
              <span>Curriculum &amp; Methodology</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Structured Environmental Curriculum for Campuses
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Four structured modules transitioning students from classroom science to active river stewardship.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {academicModules.map((m, idx) => (
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
                    src={m.image} 
                    alt={m.title}
                    style={{ width: '100%', height: '165px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
                    {m.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem' }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PARTNER INSTITUTIONS & STUDENT CERTIFICATION */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Certification & Badging With Educator Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                marginBottom: '1.25rem'
              }}>
                <img 
                  src={ambassadorEducatorImg} 
                  alt="Environmental educator teaching students" 
                  style={{ 
                    width: '100%', 
                    height: '340px', 
                    objectFit: 'cover', 
                    objectPosition: 'top center', 
                    display: 'block' 
                  }}
                />
                <div style={{
                  padding: '0.65rem 1rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b' }}>
                      Outdoor Godavari Biodiversity &amp; Ecology Session
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    Accredited
                  </span>
                </div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Award size={14} />
                <span>Student Recognition</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.25 }}>
                Official Eco-Ambassador Certification
              </h2>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, margin: '0 0 1rem' }}>
                Students completing the campus session and 8 volunteer hours along the Godavari shoreline receive an official serialized certificate.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'Recognized service-learning hours valid for NSS and NCC institutional records',
                  'Exclusive invitations to monthly citizen-science river sampling cohorts',
                  'Free distribution of native sapling kits for campus micro-forest plantations'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Partner Colleges Roster */}
            <div>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  INSTITUTIONAL NETWORK
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem' }}>
                  Key Participating Colleges &amp; Schools
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {partnerColleges.map((col, idx) => (
                    <div key={idx} style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                          {col.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <MapPin size={12} color="#059669" />
                          <span>{col.location}</span>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#047857',
                        background: '#ecfdf5',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        border: '1px solid #a7f3d0'
                      }}>
                        {col.category}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CAMPUS ACTION FIELD GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Sparkles size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Campus Drives &amp; Action In Progress
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Student Records • Andhra Pradesh
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

      {/* 6. HOST A CAMPUS DRIVE CALLOUT */}
      <section style={{ padding: '3rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem 2.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 15px -4px rgba(0,0,0,0.04)'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                <School size={14} />
                <span>Zero Cost To Institution</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem' }}>
                Invite Our Environmental Educators to Your Campus
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                We provide all projection slides, water test kits, student handouts, and certificates free of cost to your school or college.
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
              <span>Schedule a Campus Drive</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/awareness"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Back to Awareness Hub</span>
          </Link>
          <Link
            to="/awareness/workshops"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Next: Public Workshops &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AwarenessSchools;

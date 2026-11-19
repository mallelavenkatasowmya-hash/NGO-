import React from 'react';
import { Link } from 'react-router-dom';
import godavariSchoolDrivesImg from '../../assets/godavari-school-drives.jpg';
import { 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  School,
  Calendar,
  Clock,
  MapPin,
  Users,
  Presentation,
  ShieldCheck,
  Microscope,
  FileText
} from 'lucide-react';

const academicModules = [
  {
    num: '01',
    title: 'Hydrology & Godavari River Ecology',
    desc: 'Interactive visual module tracing River Godavari from Western Ghats to the Bay of Bengal, teaching watershed health, fish habitats, and microclimate regulation.'
  },
  {
    num: '02',
    title: 'The Chemistry of River Water',
    desc: 'Live on-stage water testing demonstration where students test river water samples for dissolved oxygen, pH, and turbidity using digital scientific sensors.'
  },
  {
    num: '03',
    title: 'The Lifecycle of Single-Use Plastics',
    desc: 'Unpacking the 500-year degradation timeline of polythene carry-bags and synthetic bottles, highlighting direct threats to river animals and municipal drinking water.'
  },
  {
    num: '04',
    title: 'Student Eco-Ambassador Action Plan',
    desc: 'Every participant receives practical steps to eliminate plastics at home, start school bio-composting, and lead cleanups during festival seasons.'
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

const AwarenessSchools = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. ACADEMIC MOBILIZATION HERO */}
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
            {/* Left Column: School Drives Info */}
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
                <GraduationCap size={14} />
                <span>CAMPUS OUTREACH • YOUTH EDUCATION</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                School &amp; College Drives
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Inspiring the Next Generation of River Guardians Across Andhra Pradesh.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Our educators bring multimedia science lectures, hands-on river water testing demonstrations, 
                and certified student eco-club charters directly into high school and degree college auditoriums 
                free of cost.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <School size={14} color="#059669" />
                  <span>35+ Campuses Partnered</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Award size={14} color="#059669" />
                  <span>Official Eco-Ambassador Badges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Microscope size={14} color="#059669" />
                  <span>Live Water Testing Demos</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated School Session Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariSchoolDrivesImg} 
                  alt="Environmental education classroom session in Andhra Pradesh" 
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
                      Godavari Basin Ecology Session — Rajahmundry Campus
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
                    Active Campus Drive
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
            {campusStats.map((stat, i) => (
              <div key={i} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                borderLeft: '4px solid #059669'
              }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#047857', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                  {stat.value}
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

      {/* 3. PATTERN SECTION: 4 ACADEMIC MODULES */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Presentation size={15} />
              <span>Curriculum &amp; Methodology</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Structured Environmental Curriculum for Campuses
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              Designed in collaboration with environmental educators, our four-module framework transitions students from theoretical ecology to active community stewardship.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {academicModules.map((m, idx) => (
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
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#047857',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    {m.num}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.65rem' }}>
                    {m.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: PARTNER INSTITUTIONS & CERTIFICATION */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left: Certification & Badging */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <Award size={15} />
                <span>Student Recognition</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.25 }}>
                Official Eco-Ambassador Certification
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                Students who complete the drive and complete 8 volunteer hours along the Godavari shoreline receive an official serialized certificate and enamel lapel pin for their academic portfolios.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Recognized service-learning hours valid for NSS and NCC institutional records',
                  'Exclusive invitations to monthly ecological citizen-science river sampling cohorts',
                  'Priority eligibility for annual NGO youth environmental leadership fellowships',
                  'Free distribution of native sapling kits for campus micro-forest plantations'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.6 }}>{item}</span>
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
                padding: '2rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                  INSTITUTIONAL NETWORK
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1.25rem' }}>
                  Key Participating Colleges &amp; Schools
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {partnerColleges.map((col, idx) => (
                    <div key={idx} style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                          {col.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <MapPin size={12} color="#059669" />
                          <span>{col.location}</span>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#047857',
                        background: '#ecfdf5',
                        padding: '3px 8px',
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

      {/* 5. PATTERN SECTION: HOST A CAMPUS DRIVE CALLOUT */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{
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
                Invite Our Environmental Educators to Your Campus
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                We provide all projection slides, water test kits, student handouts, and certificates at zero cost to your institution.
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
              <span>Schedule a Campus Drive</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
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

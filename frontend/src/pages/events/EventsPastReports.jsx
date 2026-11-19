import React from 'react';
import { Link } from 'react-router-dom';
import godavariPastReportsImg from '../../assets/godavari-past-reports.jpg';
import { 
  Sparkles, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  Award,
  DownloadCloud,
  Scale,
  Recycle,
  BarChart3,
  MapPin
} from 'lucide-react';

const pastDrivesArchive = [
  {
    code: 'DRV-2026-042',
    date: '16 Nov 2026',
    title: 'Kotilingala Ghat Deep Silt & Plastic Extraction',
    venue: 'Kotilingala Ghat, Rajahmundry',
    volunteers: 46,
    weight: '840 kg Plastics',
    diverted: '100% Sent to Municipal Recycler',
    lead: 'Sri M. Ramu Naidu'
  },
  {
    code: 'DRV-2026-041',
    date: '09 Nov 2026',
    title: 'Pushkar Ghat Post-Festival Debris Clearance',
    venue: 'Pushkar Ghat Steps, Rajahmundry',
    volunteers: 52,
    weight: '1,120 kg Plastics & Discards',
    diverted: 'Floral waste composted on-site',
    lead: 'Dr. K. V. Subba Rao'
  },
  {
    code: 'DRV-2026-040',
    date: '02 Nov 2026',
    title: 'Saraswathi Ghat Riparian Embankment Cleanup',
    venue: 'Saraswathi Ghat, Kotipalli Road',
    volunteers: 38,
    weight: '620 kg Plastics',
    diverted: '100% PET Bottles Segregated',
    lead: 'Smt. P. Lakshmi Devi'
  },
  {
    code: 'DRV-2026-039',
    date: '26 Oct 2026',
    title: 'Markandeya Canal Inlet Debris Net-Dredge',
    venue: 'Old River Bridge Outfall Zone',
    volunteers: 34,
    weight: '980 kg Trapped Debris',
    diverted: 'Loaded onto Municipal Skip',
    lead: 'Joint Operations Cadre'
  }
];

const downloadableReports = [
  {
    title: 'Q3 2026 Riverfront Ecological Audit Summary',
    period: 'July – September 2026',
    size: 'PDF • 2.4 MB',
    highlights: 'Detailed water quality lab metrics, 8.4 tons recovered plastic breakdown, and volunteer hour verification records.'
  },
  {
    title: 'Riparian Forest Afforestation Survival Census',
    period: 'Monsoon 2026 Survey',
    size: 'PDF • 1.8 MB',
    highlights: 'Tag-by-tag survival audit of 2,500 Neem and Pongamia saplings planted along Rajahmundry Bund Road.'
  },
  {
    title: 'Canal Plastic Net-Barrier Efficiency Report',
    period: 'Annual 2025 – 2026 Audit',
    size: 'PDF • 3.1 MB',
    highlights: 'Hydrological flow analysis and debris interception data across 22 drainage mouth barriers.'
  }
];

const EventsPastReports = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PAST REPORTS HERO */}
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
            {/* Left Column: Info */}
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
                <FileText size={14} />
                <span>PUBLIC AUDIT ARCHIVE • PROVABLE IMPACT</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Past Drives &amp; Reports
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Transparent Weigh-In Records and Audited Ecological Outcomes.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                We believe public accountability is the cornerstone of conservation credibility. 
                Every kilogram of plastic intercepted, every sapling planted, and every water test conducted 
                is weighed on-site, logged, and published here for open public review.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Scale size={14} color="#059669" />
                  <span>On-Site Digital Weigh-Ins</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Recycle size={14} color="#059669" />
                  <span>100% Chain-of-Custody</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>Certified Municipal Skips</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Audit Photo */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariPastReportsImg} 
                  alt="Post-cleanup audit and weighing station beside River Godavari" 
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
                      On-Site Digital Weighing &amp; Data Logging Station — Kotilingala Ghat
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
                    Audited Records
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
              { val: '28.4 Tons', label: 'Cumulative Plastic Diverted', note: 'Zero landfill or burning' },
              { val: '45 Drives', label: 'Verified & Audited', note: 'Logged with municipal receipts' },
              { val: '10,250', label: 'Native Trees Planted', note: '85% verified 3-yr survival' },
              { val: '100% Open', label: 'Transparent Public Data', note: 'Free citizen download access' }
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

      {/* 3. PATTERN SECTION: VERIFIED DRIVE AUDIT ARCHIVE */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <Scale size={15} />
              <span>Verified Logbook</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Recent Drive Tonnage &amp; Attendance Records
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, maxWidth: '750px' }}>
              Every drive entry includes verified volunteer headcounts, total weighed debris, and authorized municipal transfer receipts.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {pastDrivesArchive.map((log, idx) => (
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
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {log.code}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                      {log.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                    {log.title}
                  </h3>

                  <div style={{ fontSize: '0.84rem', color: '#64748b', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="#059669" />
                    <span>{log.venue}</span>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#64748b' }}>Plastics Weighed:</span>
                      <strong style={{ color: '#059669' }}>{log.weight}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: '#64748b' }}>Active Volunteers:</span>
                      <strong style={{ color: '#0f172a' }}>{log.volunteers} Citizens</strong>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #e2e8f0', paddingTop: '0.35rem', marginTop: '0.35rem' }}>
                      {log.diverted}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', fontSize: '0.8rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle2 size={13} color="#059669" />
                  <span>Audited by: {log.lead}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: DOWNLOADABLE QUARTERLY AUDIT REPORTS */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <DownloadCloud size={15} />
              <span>Public Documents</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem' }}>
              Download Comprehensive Environmental Summaries
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0 }}>
              Free open-access PDF audit summaries prepared for donors, municipal leaders, educational researchers, and the general public.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}>
            {downloadableReports.map((doc, idx) => (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase'
                    }}>
                      {doc.period}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>
                      {doc.size}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.65rem' }}>
                    {doc.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                    {doc.highlights}
                  </p>
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    border: '1px solid #a7f3d0',
                    color: '#047857',
                    padding: '9px 18px',
                    borderRadius: '8px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <DownloadCloud size={15} color="#059669" />
                  <span>Request Full PDF Report</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BOTTOM NAVIGATION BAR */}
      <section style={{ padding: '2.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/events/volunteer-meetings"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>&larr; Previous: Volunteer Drives &amp; Meetings</span>
          </Link>
          <Link
            to="/events"
            style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View All Drives &amp; Events &rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EventsPastReports;

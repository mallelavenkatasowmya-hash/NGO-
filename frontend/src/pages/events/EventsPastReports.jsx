import React from 'react';
import { Link } from 'react-router-dom';
import godavariPastReportsImg from '../../assets/godavari-past-reports.jpg';
import reportCleanSiltImg from '../../assets/report-clean-silt.jpg';
import reportCleanFestivalImg from '../../assets/report-clean-festival.jpg';
import reportCleanEmbankmentImg from '../../assets/report-clean-embankment.jpg';
import reportCleanCanalImg from '../../assets/report-clean-canal.jpg';
import reportAuditEcoImg from '../../assets/report-audit-eco.jpg';
import reportAuditForestImg from '../../assets/report-audit-forest.jpg';
import reportAuditBarrierImg from '../../assets/report-audit-barrier.jpg';
import reportGalleryScaleImg from '../../assets/report-gallery-scale.jpg';
import reportGallerySortImg from '../../assets/report-gallery-sort.jpg';
import reportGalleryAuditImg from '../../assets/report-gallery-audit.jpg';

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
  MapPin,
  Camera
} from 'lucide-react';

const pastDrivesArchive = [
  {
    code: 'DRV-2026-042',
    date: '16 Nov 2026',
    title: 'Kotilingala Ghat Deep Silt & Plastic Extraction',
    image: reportCleanSiltImg,
    badge: 'Shoreline Silt',
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
    image: reportCleanFestivalImg,
    badge: 'Festival Clearance',
    venue: 'Pushkar Ghat Steps, Rajahmundry',
    volunteers: 52,
    weight: '1,120 kg Plastics',
    diverted: 'Floral waste composted on-site',
    lead: 'Dr. K. V. Subba Rao'
  },
  {
    code: 'DRV-2026-040',
    date: '02 Nov 2026',
    title: 'Saraswathi Ghat Riparian Embankment Cleanup',
    image: reportCleanEmbankmentImg,
    badge: 'Embankment Drive',
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
    image: reportCleanCanalImg,
    badge: 'Canal Net-Dredge',
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
    image: reportAuditEcoImg,
    badge: 'Quarterly Audit',
    highlights: 'Lab water quality metrics, 8.4 tons recovered plastic breakdown, and volunteer hours.'
  },
  {
    title: 'Riparian Forest Afforestation Survival Census',
    period: 'Monsoon 2026 Survey',
    size: 'PDF • 1.8 MB',
    image: reportAuditForestImg,
    badge: 'Forest Census',
    highlights: 'Survival audit of 2,500 native Neem and Pongamia saplings along Godavari Bund Road.'
  },
  {
    title: 'Canal Plastic Net-Barrier Efficiency Report',
    period: 'Annual 2025 – 2026 Audit',
    size: 'PDF • 3.1 MB',
    image: reportAuditBarrierImg,
    badge: 'Hydrological Report',
    highlights: 'Debris interception data and flow monitoring across 22 river mouth drainage barriers.'
  }
];

const galleryHighlights = [
  {
    title: 'On-Site Digital Weigh-In Station',
    subtitle: 'Kotilingala Ghat Certified Net-Weight Logging',
    image: reportGalleryScaleImg,
    badge: 'Weigh-In Station'
  },
  {
    title: 'Post-Drive Material Segregation',
    subtitle: 'Segregated Burlap Sacks Ready for Recycler Transfer',
    image: reportGallerySortImg,
    badge: 'Plastic Segregation'
  },
  {
    title: 'Ecological Water Quality Census',
    subtitle: 'Riverfront Mobile Testing Kit Titration',
    image: reportGalleryAuditImg,
    badge: 'Water Audit'
  }
];

const EventsPastReports = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PAST REPORTS HERO */}
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
            {/* Left Column: Info */}
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
                <FileText size={14} />
                <span>PUBLIC AUDIT ARCHIVE • PROVABLE IMPACT</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Past Drives &amp; Reports
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 0.85rem',
                lineHeight: 1.45
              }}>
                Transparent Weigh-In Records and Audited Ecological Outcomes.
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Public accountability is our core value. Every kilogram of plastic intercepted, 
                every sapling planted, and every water audit is weighed on-site and published here.
              </p>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Scale size={14} color="#059669" />
                  <span>On-Site Digital Weigh-Ins</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  <Recycle size={14} color="#059669" />
                  <span>100% Chain-of-Custody</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
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
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariPastReportsImg} 
                  alt="Post-cleanup audit and weighing station beside River Godavari" 
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
                      Digital Weighing &amp; Data Logging Station — Kotilingala Ghat
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
                    Audited Records
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
              { val: '28.4 Tons', label: 'Cumulative Plastic Diverted', note: 'Zero landfill or burning' },
              { val: '45 Drives', label: 'Verified & Audited', note: 'Logged with municipal receipts' },
              { val: '10,250', label: 'Native Trees Planted', note: '85% verified 3-yr survival' },
              { val: '100% Open', label: 'Transparent Public Data', note: 'Free citizen download access' }
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

      {/* 3. PATTERN SECTION: VERIFIED DRIVE AUDIT ARCHIVE WITH UNIQUE PHOTOS */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Scale size={15} />
              <span>Verified Logbook</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Recent Drive Tonnage &amp; Attendance Records
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0, maxWidth: '680px' }}>
              Every entry includes verified volunteer headcounts, total weighed debris, and municipal transfer slips.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {pastDrivesArchive.map((log, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* Photo Header with Code Overlay */}
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                    <img 
                      src={log.image} 
                      alt={log.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {log.code}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}>
                      {log.date}
                    </div>
                  </div>

                  {/* Card Content - LESS MATTER */}
                  <div style={{ padding: '1.15rem' }}>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.45rem', lineHeight: 1.35 }}>
                      {log.title}
                    </h3>

                    <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 0.65rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={13} color="#059669" />
                      <span>{log.venue}</span>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '0.75rem 0.85rem', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: '#64748b' }}>Plastics Weighed:</span>
                        <strong style={{ color: '#059669' }}>{log.weight}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: '#64748b' }}>Active Volunteers:</span>
                        <strong style={{ color: '#0f172a' }}>{log.volunteers} Citizens</strong>
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#64748b', borderTop: '1px solid #e2e8f0', paddingTop: '0.35rem', marginTop: '0.35rem' }}>
                        {log.diverted}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.15rem 1rem', fontSize: '0.78rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle2 size={13} color="#059669" />
                  <span>Audited by: {log.lead}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATTERN SECTION: DOWNLOADABLE QUARTERLY AUDIT REPORTS WITH IMAGES */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <DownloadCloud size={15} />
              <span>Public Documents</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 0.4rem' }}>
              Download Comprehensive Environmental Summaries
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
              Free open-access PDF audit summaries prepared for donors, municipal leaders, and citizens.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {downloadableReports.map((doc, idx) => (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}>
                <div>
                  {/* Photo Header */}
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                    <img 
                      src={doc.image} 
                      alt={doc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {doc.badge}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}>
                      {doc.size}
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem' }}>
                      {doc.period}
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                      {doc.title}
                    </h3>

                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: '0 0 1rem' }}>
                      {doc.highlights}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid #a7f3d0',
                      color: '#047857',
                      padding: '9px 16px',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  >
                    <DownloadCloud size={15} color="#059669" />
                    <span>Request Full PDF Report</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LIVE ACTION AUDIT & TALLY GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Camera size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Live Field Weigh-Ins &amp; Material Audits
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Citizen Records • Rajahmundry Operations
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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

    </div>
  );
};

export default EventsPastReports;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pressHeroImg from '../../assets/press-communique-hero.jpg';
import statementCanalBarriersImg from '../../assets/statement-pr08-canal-barriers.jpg';
import statementTempleAdvisoryImg from '../../assets/statement-pr06-temple-advisory.jpg';
import statementWaterQualityImg from '../../assets/statement-pr05-water-quality-index.jpg';
import statementTripartiteMouImg from '../../assets/statement-pr03-tripartite-mou.jpg';
import kitBrandIdentityImg from '../../assets/kit-brand-identity.jpg';
import kitNgoFactsheetImg from '../../assets/kit-ngo-factsheet.jpg';
import kitLeadershipProfilesImg from '../../assets/kit-leadership-profiles.jpg';
import kitRiparianStudyImg from '../../assets/kit-riparian-study.jpg';
import { 
  FileText, 
  ShieldCheck, 
  Download, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  Search, 
  FileCheck, 
  ExternalLink,
  ChevronRight,
  X,
  AlertTriangle
} from 'lucide-react';

const pressReleases = [
  {
    ref: 'PR/2026/08',
    title: 'Statement on Full Commissioning of 22 Outfall Plastic-Trap Netting Barriers in Rajahmundry',
    date: '16 Nov 2026',
    category: 'Policy & Infrastructure',
    status: 'Official Statement',
    image: statementCanalBarriersImg,
    signatory: 'Sri K. Venkata Ramana, Executive Director',
    summary: 'The NGO officially announces the complete operationalization of high-tensile marine barrier nets across all 22 municipal stormwater outfalls discharging into River Godavari within Rajahmundry limits.',
    statement: `RAJAHMUNDRY, ANDHRA PRADESH — November 16, 2026

The Governing Board of Godavari Nadhi Paryavarana Parishubratha is pleased to announce that following 14 months of collaborative engineering and municipal clearances, the 22nd and final canal plastic-interception barrier net has been successfully installed and commissioned at the Aryapuram drainage outfall.

With this installation, every designated municipal stormwater and greywater channel discharging into the central Rajahmundry stretch of River Godavari now possesses multi-stage physical debris arrestors. During pilot operations over the preceding 60 days, the first 18 barrier nets intercepted approximately 18.6 metric tonnes of floating single-use plastics, thermocol packaging, and synthetic bags that would have otherwise polluted downstream aquatic habitats.

The organization extends its gratitude to the Municipal Corporation of Rajahmundry, the State Irrigation Department, and over 450 certified volunteer maintenance monitors who have committed to bi-daily clearing schedules. All recovered materials are methodically audited, weighed, and diverted to licensed regional recycling facilities.

Inquiries regarding technical net specifications or replication in other river basins may be directed to our Engineering Taskforce at tech@godavaringo.org.`,
    deliverables: [
      '22 engineered stainless-reinforced outfall nets fully operational',
      'Over 18.6 metric tonnes of debris intercepted during initial 60-day trial',
      'Open-source technical designs available for other coastal and riverine municipalities'
    ]
  },
  {
    ref: 'PR/2026/06',
    title: 'Joint Environmental Advisory: Transitioning to Sacred Eco-Offerings Across All Godavari Ghats',
    date: '02 Nov 2026',
    category: 'Civic Advisory',
    status: 'Public Advisory',
    image: statementTempleAdvisoryImg,
    signatory: 'Dr. P. Radha Krishna, Ecological Director & Regional Temple Council',
    summary: 'A joint advisory in collaboration with 12 major riverside temple trusts, formally advocating for the prohibition of polythene-wrapped puja offerings and synthetic dyes during holy baths.',
    statement: `RAJAHMUNDRY, ANDHRA PRADESH — November 02, 2026

In an unprecedented joint resolution convened at the Kotilingala Devasthanam Assembly Hall, representatives of twelve prominent riverside temple trusts and the leadership of Godavari Nadhi Paryavarana Parishubratha have issued a binding public advisory regarding sacred ritual offerings.

The advisory emphasizes the preservation of Godavari's sanctity through sustainable traditional practices:
1. Complete elimination of single-use thin polyethylene bags for carrying flowers, coconuts, and prasad on ghat steps.
2. Introduction of dedicated "Nirmalya" organic collection bins at all ghat entrance corridors for natural composting of holy flowers.
3. Strict prohibition of synthetic chemical powders and lead-laced vermilion (kumkum) in favor of organic turmeric and natural vegetable-based powders.
4. Deployment of 60 trained youth temple stewards to guide pilgrims during major auspicious bath days (Pushkaram, Ekadashi, and Pournami).

The NGO reiterates that true devotion to Mother Godavari manifests in safeguarding the clarity and purity of her sacred waters. We appeal to all pilgrims, resident devotees, and riverbank merchants to cooperate whole-heartedly with these measures.`,
    deliverables: [
      'Zero synthetic packaging policy ratified by 12 riverside temple trusts',
      'Segregated organic flower collection for sacred temple compost production',
      'Stationing of 60 trained youth volunteer guides across major holy bathing ghats'
    ]
  },
  {
    ref: 'PR/2026/05',
    title: 'Publication of Basin-Wide Water Quality Index (Q3 2026) Demonstrates 28% Improvement in Dissolved Oxygen',
    date: '15 Oct 2026',
    category: 'Scientific Audit',
    status: 'Research Release',
    image: statementWaterQualityImg,
    signatory: 'Environmental Monitoring Lab, Godavari Conservation Directorate',
    summary: 'Independent hydrological monitoring across 15 permanent riverbank stations confirms steady water quality recovery following intensified community sanitation and outfall defense.',
    statement: `RAJAHMUNDRY, ANDHRA PRADESH — October 15, 2026

Godavari Nadhi Paryavarana Parishubratha has officially released its Third Quarter 2026 Water Quality Index (WQI) report, based on 360 individual water samples collected across 15 permanent monitoring stations along the Godavari riverfront.

Key Scientific Findings:
- Mean Dissolved Oxygen (DO) levels across central bathing ghats improved by 28.4% compared to Q3 2025, averaging 6.8 mg/L (well within national river bathing standards).
- Biochemical Oxygen Demand (BOD) recorded a 34% reduction at Kotilingala and Pushkar Ghats, directly attributable to the physical interception of decaying organic refuse and drainage net installations.
- Total Suspended Solids (TSS) decreased by 22%, resulting in noticeably enhanced water clarity along pedestrian bathing promenades.

The full 42-page technical dossier, including lab titration logs, spectrophotometer readouts, and geographic information system (GIS) mapping of pollution hotspots, is available free of charge for researchers, civic planners, and educational institutions on our public data portal.`,
    deliverables: [
      'Comprehensive 42-page scientific audit verified by accredited third-party labs',
      'Dissolved Oxygen levels elevated to 6.8 mg/L across all monitored bathing ghats',
      'Unrestricted open-access dataset released for researchers and civic agencies'
    ]
  },
  {
    ref: 'PR/2026/03',
    title: 'Formal Tripartite MoU Executed with Municipal Corporation and University Research Consortium',
    date: '18 Sep 2026',
    category: 'Institutional Partnership',
    status: 'Bilateral Agreement',
    image: statementTripartiteMouImg,
    signatory: 'Board of Trustees & Municipal Commissioner',
    summary: 'Execution of a formal five-year institutional memorandum establishing permanent student research fellowships, real-time telemetry sensor deployments, and civic funding for river cleanup.',
    statement: `RAJAHMUNDRY, ANDHRA PRADESH — September 18, 2026

A historic milestone in institutional environmental cooperation was achieved today with the formal signing of a five-year Tripartite Memorandum of Understanding (MoU) between Godavari Nadhi Paryavarana Parishubratha, the Rajahmundry Municipal Corporation, and the Environmental Science Consortium of Regional Universities.

Under the framework of this agreement:
1. The Municipal Corporation commits dedicated logistical machinery, collection vehicles, and municipal dumping priority for NGO-recovered river waste.
2. The University Consortium will sponsor 10 annual postgraduate environmental research fellowships dedicated exclusively to Godavari riverbed hydrology and riparian ecology.
3. Godavari Nadhi Paryavarana Parishubratha will oversee volunteer mobilization, citizen science field training, and daily maintenance of riverfront cleanup infrastructure.

This formal alignment bridges civic administration, scientific academia, and grassroots citizen action into an institutional model of river protection for southern India.`,
    deliverables: [
      '5-year binding institutional pact aligning civic authorities and citizen action',
      '10 fully funded academic research fellowships for university scholars',
      'Guaranteed municipal logistic support for rapid riverfront waste disposal'
    ]
  }
];

const pressKits = [
  {
    title: 'Official Brand Identity & Vector Assets',
    size: '14.2 MB',
    format: 'ZIP (PNG, SVG, PDF)',
    image: kitBrandIdentityImg,
    desc: 'Official high-resolution emblem, verified color palette codes, and brand application guidelines for authorized media publications.'
  },
  {
    title: 'Comprehensive NGO Factsheet (2025–2026)',
    size: '2.4 MB',
    format: 'PDF Document',
    image: kitNgoFactsheetImg,
    desc: 'Two-page executive summary covering founding history, governance board, key impact statistics, and active project locations.'
  },
  {
    title: 'Executive Leadership Profiles & Headshots',
    size: '8.6 MB',
    format: 'ZIP (High-Res Images)',
    image: kitLeadershipProfilesImg,
    desc: 'Authorized biographies, speaking topics, and print-ready editorial portraits of key trustees and scientific coordinators.'
  },
  {
    title: 'Godavari Basin Riparian Baseline Study',
    size: '4.8 MB',
    format: 'PDF Technical Paper',
    image: kitRiparianStudyImg,
    desc: 'Detailed environmental study on native tree species, bank erosion patterns, and riverbed biodiversity along the lower Godavari.'
  }
];

const AnnouncementsPress = () => {
  const [activeFilter, setActiveFilter] = useState('All Releases');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const categories = ['All Releases', 'Policy & Infrastructure', 'Civic Advisory', 'Scientific Audit', 'Institutional Partnership'];

  const filteredReleases = pressReleases.filter(item => {
    const matchesCat = activeFilter === 'All Releases' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (kitTitle) => {
    setDownloadSuccess(`Media asset "${kitTitle}" prepared for download.`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  if (selectedRelease) {
    const relatedReleases = pressReleases.filter(r => r.ref !== selectedRelease.ref).slice(0, 3);

    return (
      <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
        {/* Full-Page Press Release Navigation Bar */}
        <div style={{
          background: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          padding: '1rem 1.5rem',
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(248, 250, 252, 0.95)'
        }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setSelectedRelease(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '0.55rem 1.2rem',
                borderRadius: '8px',
                color: '#0f172a',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ArrowLeft size={16} color="#059669" />
              <span>Back to All Press Releases</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#64748b' }}>
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/announcements" style={{ color: '#64748b', textDecoration: 'none' }}>Announcements</Link>
              <span>/</span>
              <button
                onClick={() => {
                  setSelectedRelease(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{ background: 'none', border: 'none', padding: 0, color: '#64748b', textDecoration: 'none', cursor: 'pointer', font: 'inherit' }}
              >
                Press Communiqués
              </button>
              <span>/</span>
              <span style={{ color: '#059669', fontWeight: 600 }}>{selectedRelease.ref}</span>
            </div>
          </div>
        </div>

        {/* Full Communiqué Document Container */}
        <article style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
          {/* Header Metadata */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{
                background: '#0f172a',
                color: '#ffffff',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}>
                {selectedRelease.ref}
              </span>
              <span style={{
                background: '#ecfdf5',
                color: '#047857',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                border: '1px solid #a7f3d0'
              }}>
                {selectedRelease.status}
              </span>
              <span style={{
                background: '#f1f5f9',
                color: '#475569',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Calendar size={13} />
                {selectedRelease.date}
              </span>
              <span style={{
                background: '#f8fafc',
                color: '#059669',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                border: '1px solid #e2e8f0'
              }}>
                {selectedRelease.category}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.25,
              marginBottom: '1.25rem'
            }}>
              {selectedRelease.title}
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              padding: '1rem 1.25rem',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              fontSize: '0.86rem',
              color: '#475569'
            }}>
              <div>
                <strong>Authorized Signatory:</strong> {selectedRelease.signatory}
              </div>
              <button
                onClick={() => handleDownload(selectedRelease.ref)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.45rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Download size={14} />
                <span>Download Official Statement PDF</span>
              </button>
            </div>
          </div>

          {/* Hero Feature Image (if available) */}
          {selectedRelease.image && (
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <img
                src={selectedRelease.image}
                alt={selectedRelease.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                padding: '0.75rem 1.25rem',
                background: '#f8fafc',
                borderTop: '1px solid #e2e8f0',
                fontSize: '0.8rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>Official Communiqué Record • Godavari Conservation Directorate</span>
                <span style={{ fontWeight: 600, color: '#059669' }}>Verified Archival Release</span>
              </div>
            </div>
          )}

          {/* Key Deliverables & Executive Summary Box */}
          <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
            border: '1px solid #a7f3d0',
            borderRadius: '14px',
            padding: '1.75rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              fontSize: '0.84rem',
              fontWeight: 800,
              color: '#065f46',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <CheckCircle2 size={16} color="#059669" />
              <span>Official Key Takeaways &amp; Action Items</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {selectedRelease.deliverables.map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.94rem', color: '#1e293b', lineHeight: 1.6, fontWeight: 500 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Official Communique Body Text */}
          <div style={{
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#334155',
            marginBottom: '3rem',
            background: '#ffffff',
            padding: '2.5rem',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            whiteSpace: 'pre-line'
          }}>
            {selectedRelease.statement}
          </div>

          {/* Sign-off & Verification Seal */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '1.75rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                Issued by Office of Communications
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a' }}>
                Godavari Nadhi Paryavarana Parishubratha
              </div>
              <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '0.2rem' }}>
                Rajahmundry Central Secretariat • Ref: {selectedRelease.ref}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setSelectedRelease(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                ← Back to Press Archive
              </button>
              <button
                onClick={() => handleDownload(selectedRelease.ref)}
                style={{
                  background: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Download size={15} />
                <span>Download Communiqué PDF</span>
              </button>
            </div>
          </div>

          {/* Related Communiqués Section */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '3rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1.5rem' }}>
              More Official Communiqués &amp; Statements
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {relatedReleases.map((rel) => (
                <div
                  key={rel.ref}
                  onClick={() => {
                    setSelectedRelease(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  {rel.image && (
                    <div style={{ height: '160px', overflow: 'hidden' }}>
                      <img
                        src={rel.image}
                        alt={rel.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
                      <span style={{ background: '#0f172a', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                        {rel.ref}
                      </span>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#059669' }}>
                        {rel.status}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                      {rel.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: '0 0 1rem', flex: 1 }}>
                      {rel.summary}
                    </p>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>Read Statement</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. HERO SECTION */}
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
                gap: '0.5rem',
                background: '#ecfdf5',
                color: '#059669',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1rem',
                border: '1px solid #a7f3d0'
              }}>
                <FileText size={15} />
                OFFICIAL COMMUNIQUÉS
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Press Releases & Statements
              </h1>

              <p style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}>
                Official policy positions, environmental advisories, civic partnerships, and scientific findings 
                authorized by the Governing Council of Godavari Nadhi Paryavarana Parishubratha.
              </p>

              {/* Verified Trust Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <ShieldCheck size={16} />
                  Verified Public Releases
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <FileCheck size={16} />
                  Standard Reference Identifiers
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Building2 size={16} />
                  Media Accreditation Protocol
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="#press-archive"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9375rem'
                  }}
                >
                  Browse Releases
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/announcements/news"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#ffffff',
                    color: '#059669',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    border: '1px solid #059669'
                  }}
                >
                  Read Latest News
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img
                  src={pressHeroImg}
                  alt="Official Press Briefings and Media Announcements"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Overlay Top Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(5, 150, 105, 0.92)',
                  color: '#ffffff',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <ShieldCheck size={13} />
                  AUTHORIZED RELEASES
                </div>

                {/* Bottom Caption Strip */}
                <div style={{
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a' }}>
                      Official Media Directorate
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Rajahmundry Regional Headquarters
                    </div>
                  </div>
                  <span style={{
                    background: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid #a7f3d0'
                  }}>
                    PUBLIC DOMAIN
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS NOTIFICATION TOAST */}
      {downloadSuccess && (
        <div style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          background: '#064e3b',
          color: '#ffffff',
          padding: '0.85rem 1.25rem',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>
          <CheckCircle2 size={18} style={{ color: '#34d399' }} />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* 2. FILTER & SEARCH BAR */}
      <section id="press-archive" style={{
        padding: '2.5rem 1.5rem 1rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          background: '#ffffff',
          padding: '1.25rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                Press Statement Archive ({filteredReleases.length})
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.2rem 0 0' }}>
                Search by statement reference, subject matter, or publication date
              </p>
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search reference or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.85rem 0.55rem 2.4rem',
                  fontSize: '0.875rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  outline: 'none',
                  background: '#f8fafc',
                  color: '#1e293b'
                }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.15s ease',
                  background: activeFilter === cat ? '#059669' : '#f1f5f9',
                  color: activeFilter === cat ? '#ffffff' : '#475569'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRESS RELEASES LIST */}
      <section style={{
        padding: '1.5rem 1.5rem 3.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        {filteredReleases.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px dashed #cbd5e1'
          }}>
            <FileText size={36} style={{ color: '#94a3b8', margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#334155', margin: 0 }}>
              No releases match your criteria
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.35rem' }}>
              Reset your keyword search or choose "All Releases".
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredReleases.map((release) => (
              <article
                key={release.ref}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.03)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  transition: 'border-color 0.15s ease'
                }}
              >
                {/* Photo Column */}
                <div 
                  onClick={() => {
                    setSelectedRelease(release);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ position: 'relative', minHeight: '220px', background: '#f1f5f9', cursor: 'pointer' }}
                >
                  <img
                    src={release.image}
                    alt={release.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '220px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  {/* Badges overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '5px',
                      letterSpacing: '0.04em'
                    }}>
                      {release.ref}
                    </span>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#059669',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '5px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {release.category}
                    </span>
                  </div>

                  {/* Signatory pill overlay bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
                    padding: '1.25rem 1rem 0.65rem',
                    color: '#f8fafc',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {release.signatory}
                  </div>
                </div>

                {/* Content Column */}
                <div style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    {/* Meta strip */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      color: '#64748b',
                      fontWeight: 500,
                      marginBottom: '0.45rem'
                    }}>
                      <Calendar size={13} style={{ color: '#059669' }} />
                      Issued: {release.date}
                    </div>

                    {/* Release Title */}
                    <h3 
                      onClick={() => {
                        setSelectedRelease(release);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.4,
                        margin: '0 0 0.5rem',
                        cursor: 'pointer'
                      }}
                    >
                      {release.title}
                    </h3>

                    {/* Summary - LESS MATTER */}
                    <p style={{
                      fontSize: '0.86rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      margin: '0 0 0.75rem'
                    }}>
                      {release.summary}
                    </p>

                    {/* Key Takeaway Pill */}
                    <div style={{
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderLeft: '3px solid #059669',
                      borderRadius: '6px',
                      padding: '0.45rem 0.75rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#166534', marginBottom: '0.15rem' }}>
                        KEY DELIVERABLE
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#14532d', lineHeight: 1.35 }}>
                        {release.deliverables[0]}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.65rem'
                  }}>
                    <button
                      onClick={() => {
                        setSelectedRelease(release);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        padding: '0.55rem 1.15rem',
                        background: '#059669',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      Read Full Statement
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => handleDownload(`${release.ref} Official Release`)}
                      style={{
                        padding: '0.55rem 1.15rem',
                        background: '#ffffff',
                        color: '#059669',
                        border: '1px solid #059669',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <Download size={14} />
                      Download PDF
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. MEDIA RESOURCE CENTER & DOWNLOADABLE KITS */}
      <section style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '3.5rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              background: '#ecfdf5',
              color: '#059669',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 700,
              border: '1px solid #a7f3d0'
            }}>
              PRESS ASSETS
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>
              Media Resource Center & Press Kits
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#64748b', maxWidth: '620px', margin: '0 auto' }}>
              Download official identity files, audited factsheets, and high-resolution visual archives 
              for editorial publications and broadcast news segments.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {pressKits.map((kit, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Kit Image Header */}
                  <div style={{ position: 'relative', height: '145px', overflow: 'hidden' }}>
                    <img
                      src={kit.image}
                      alt={kit.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#059669',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}>
                      {kit.format}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}>
                      {kit.size}
                    </div>
                  </div>

                  {/* Kit Text - LESS MATTER */}
                  <div style={{ padding: '1rem 1.15rem 0.5rem' }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                      {kit.title}
                    </h3>

                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                      {kit.desc}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0.85rem 1.15rem 1.15rem' }}>
                  <button
                    onClick={() => handleDownload(kit.title)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 1rem',
                      background: '#ffffff',
                      color: '#059669',
                      border: '1px solid #059669',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#059669';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#059669';
                    }}
                  >
                    <Download size={14} />
                    Download Kit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPOKESPERSON & CONTACT SECTION */}
      <section style={{
        padding: '3.5rem 1.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
          borderRadius: '16px',
          padding: '2.5rem',
          color: '#ffffff',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              MEDIA RELATIONS SPOKESPERSON
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.75rem', color: '#ffffff' }}>
              Arrange an Official Interview or Statement
            </h2>
            <p style={{ fontSize: '0.9375rem', opacity: 0.9, lineHeight: 1.6, margin: 0, maxWidth: '520px' }}>
              Media houses and journalists requiring background briefings, on-camera television interviews, 
              or live field demonstration access can connect directly with our Communications Office.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', color: '#a7f3d0' }}>
              OFFICIAL MEDIA CONTACTS:
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <Mail size={16} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.875rem', color: '#f8fafc' }}>spokesperson@godavaringo.org</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <Phone size={16} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.875rem', color: '#f8fafc' }}>+91 883 245 7890 (Ext. 402 - Press Desk)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Building2 size={16} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.875rem', color: '#f8fafc' }}>Central Press Secretariat, Rajahmundry, A.P.</span>
            </div>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#ffffff',
                color: '#047857',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              Contact Press Secretariat
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AnnouncementsPress;

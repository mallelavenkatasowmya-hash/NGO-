import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const objectives = [
  {
    num: '01',
    icon: '🧹',
    title: 'Eliminate Ghat Plastic Pollution',
    desc: 'Conduct bi-weekly cleanliness drives at all major Godavari ghats — Kotilingala, Pushkar, Saraswati, and Railway Ghat — collecting, segregating, and responsibly disposing of plastic, synthetic garments, thermocol, and temple waste.',
    targets: ['Minimum 2 drives per month per ghat zone', '100% waste segregation into biodegradable streams', 'Partner with GVMC for timely municipal collection'],
    accent: '#16a34a', light: '#f0fdf4', border: '#bbf7d0',
  },
  {
    num: '02',
    icon: '🪤',
    title: 'Install Canal Plastic Barrier Network',
    desc: 'Design, deploy, and maintain river-inlet netting barriers along major drainage canals entering the Godavari to intercept floating plastic before it enters the mainstream river.',
    targets: ['22 barrier sites operational by end of 2025', 'Monthly barrier cleaning and waste removal schedule', 'GPS tracking of all barrier locations for transparency'],
    accent: '#1d4ed8', light: '#eff6ff', border: '#bfdbfe',
  },
  {
    num: '03',
    icon: '🌳',
    title: 'Bund Afforestation & Soil Conservation',
    desc: 'Plant and nurture 10,000 indigenous trees (Neem, Peepal, Pongamia, Tamaring) along the Godavari embankment to stabilize eroding bunds, reduce sedimentation, and restore avian habitats.',
    targets: ['Plant 2,000 saplings per year with 85% survival rate', 'Engage local youth groups as tree guardians', 'Conduct annual biodiversity audit of planted zones'],
    accent: '#d97706', light: '#fffbeb', border: '#fde68a',
  },
  {
    num: '04',
    icon: '🪷',
    title: 'Promote Eco-Friendly Religious Practices',
    desc: 'Work with temple committees, pujaris, and pilgrims to replace environmentally harmful offerings — plaster idols, synthetic garlands, plastic bags — with biodegradable and water-soluble alternatives.',
    targets: ['Partner with 50+ temples along the Godavari bank', 'Distribute 10,000 leaf-bowl alternatives per festival season', 'Run multilingual campaigns during Pushkaram & Ugadi'],
    accent: '#7c3aed', light: '#fdf4ff', border: '#d8b4fe',
  },
  {
    num: '05',
    icon: '📚',
    title: 'Community Education & Youth Mobilization',
    desc: 'Build a generation of informed environmental stewards through school programs, college drives, street plays, and digital campaigns to spread awareness about river conservation.',
    targets: ['50 school/college awareness programs per year', '1,000 new youth volunteers onboarded annually', 'Quarterly river ambassador certification program'],
    accent: '#e11d48', light: '#fff1f2', border: '#fda4af',
  },
  {
    num: '06',
    icon: '📊',
    title: 'Real-Time Water Quality Monitoring',
    desc: 'Establish a citizen-science network of water quality monitoring stations along the Godavari, measuring key indicators and publishing live data for public and policy use.',
    targets: ['15 monitoring stations operational by 2027', 'Monthly water quality reports published publicly', 'Data shared with APPCB and State Water Resources Board'],
    accent: '#0369a1', light: '#f0f9ff', border: '#7dd3fc',
  },
];

const AboutObjectives = () => (
  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b', background: '#fff' }}>

    {/* Hero */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '72px 24px 60px', textAlign: 'center' }}>
      <span style={{ background: 'rgba(255,255,255,0.15)', color: '#bbf7d0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', padding: '5px 14px', borderRadius: 20, textTransform: 'uppercase' }}>What We Do</span>
      <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '16px 0 12px', lineHeight: 1.2 }}>Our Strategic Objectives</h1>
      <p style={{ color: '#d1fae5', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
        Six clearly defined objectives that translate our mission into measurable, on-ground action across the Godavari basin.
      </p>
    </div>

    {/* Objectives Grid */}
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {objectives.map((obj) => (
          <div key={obj.num} style={{ background: obj.light, border: `1.5px solid ${obj.border}`, borderRadius: 16, padding: '28px 24px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ background: obj.accent, color: '#fff', borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0 }}>{obj.num}</span>
              <span style={{ fontSize: '1.5rem' }}>{obj.icon}</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#0f172a', lineHeight: 1.3 }}>{obj.title}</h3>
            </div>
            {/* Description */}
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7, margin: '0 0 16px' }}>{obj.desc}</p>
            {/* Targets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, borderTop: `1px solid ${obj.border}`, paddingTop: 14 }}>
              {obj.targets.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                  <CheckCircle size={14} style={{ color: obj.accent, marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.83rem', color: '#374151', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '56px 24px', textAlign: 'center' }}>
      <h2 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, margin: '0 0 10px' }}>Help Us Achieve These Objectives</h2>
      <p style={{ color: '#d1fae5', fontSize: '0.95rem', maxWidth: 460, margin: '0 auto 28px' }}>Join our growing community of volunteers and make a direct impact on the Godavari River.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/register" style={{ background: '#fff', color: '#064e3b', fontWeight: 700, padding: '12px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          Become a Volunteer <ArrowRight size={15} />
        </Link>
        <Link to="/activities" style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontWeight: 600, padding: '11px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem' }}>
          See Our Activities →
        </Link>
      </div>
    </div>
  </div>
);

export default AboutObjectives;

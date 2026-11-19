import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';

const objectives = [
  {
    num: '01',
    title: 'Eliminate Ghat Plastic Pollution',
    description:
      'Conduct bi-weekly cleanliness drives at all major Godavari ghats — Kotilingala, Pushkar, Saraswati, and Rajahmundry Railway — collecting, segregating, and responsibly disposing of plastic, synthetic garments, thermocol, and temple waste.',
    targets: [
      'Minimum 2 drives per month per ghat zone',
      '100% waste segregation into biodegradable and non-biodegradable streams',
      'Partner with GVMC for timely municipal collection',
    ],
    color: '#ecfdf5',
    border: '#6ee7b7',
    badge: '#16a34a',
  },
  {
    num: '02',
    title: 'Install Canal Plastic Barrier Network',
    description:
      'Design, deploy, and maintain a network of river-inlet netting barriers along major drainage canals entering the Godavari to intercept floating plastic before it enters the mainstream river.',
    targets: [
      '22 barrier sites operational by end of 2025',
      'Monthly barrier cleaning and waste removal schedule',
      'GPS tracking of all barrier locations for transparency',
    ],
    color: '#eff6ff',
    border: '#93c5fd',
    badge: '#1d4ed8',
  },
  {
    num: '03',
    title: 'Bund Afforestation & Soil Conservation',
    description:
      'Plant and nurture 10,000 indigenous trees (Neem, Peepal, Pongamia, Tamaring) along the Godavari embankment to stabilize eroding bunds, reduce sedimentation, restore avian habitats, and create natural flood buffers.',
    targets: [
      'Plant 2,000 saplings per year with 85% survival rate target',
      'Engage local youth groups as tree guardians',
      'Conduct annual biodiversity audit of planted zones',
    ],
    color: '#fefce8',
    border: '#fde68a',
    badge: '#d97706',
  },
  {
    num: '04',
    title: 'Promote Eco-Friendly Religious Practices',
    description:
      'Work with temple committees, pujaris, and pilgrims to replace environmentally harmful offerings — plaster idols, synthetic garlands, plastic bags, and chemical dyes — with biodegradable and water-soluble alternatives.',
    targets: [
      'Partner with 50+ temples along the Godavari bank',
      'Distribute 10,000 leaf-bowl alternatives per festival season',
      'Run multilingual awareness campaigns during Pushkaram & Ugadi',
    ],
    color: '#fdf4ff',
    border: '#d8b4fe',
    badge: '#7c3aed',
  },
  {
    num: '05',
    title: 'Community Education & Youth Mobilization',
    description:
      'Build a generation of informed environmental stewards by conducting school programs, college drives, street plays (nukkad nataks), and digital campaigns to spread awareness about river conservation across all age groups.',
    targets: [
      '50 school/college awareness programs per year',
      '1,000 new youth volunteers onboarded annually',
      'Quarterly river ambassador certification program',
    ],
    color: '#fff1f2',
    border: '#fda4af',
    badge: '#e11d48',
  },
  {
    num: '06',
    title: 'Real-Time Water Quality Monitoring',
    description:
      'Establish a citizen-science network of water quality monitoring stations along the Godavari, measuring key indicators (dissolved oxygen, pH, turbidity, coliform bacteria) and publishing live data for public and policy use.',
    targets: [
      '15 monitoring stations operational by 2027',
      'Monthly water quality reports published publicly',
      'Data shared with APPCB and State Water Resources Board',
    ],
    color: '#f0f9ff',
    border: '#7dd3fc',
    badge: '#0369a1',
  },
];

const AboutObjectives = () => {
  return (
    <div className="clean-page-wrapper">
      {/* Page Header */}
      <div className="clean-page-header">
        <div className="container">
          <span className="clean-badge">WHAT WE DO</span>
          <h1>Our Strategic Objectives</h1>
          <p className="clean-page-sub">
            Six clearly defined objectives that translate our mission into measurable, on-ground
            action across the Godavari basin.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
            {objectives.map((obj) => (
              <div
                key={obj.num}
                style={{
                  background: obj.color,
                  border: `1.5px solid ${obj.border}`,
                  borderRadius: 16,
                  padding: '2rem 2.25rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number Badge */}
                <div style={{
                  background: obj.badge,
                  color: '#fff',
                  borderRadius: 12,
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {obj.num}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.65rem', color: '#0f172a', fontSize: '1.15rem', fontWeight: 700 }}>
                    {obj.title}
                  </h3>
                  <p style={{ margin: '0 0 1rem', color: '#374151', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {obj.description}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {obj.targets.map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle size={15} style={{ color: obj.badge, marginTop: 3, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Help Us Achieve These Objectives</h2>
          <p className="section-lead" style={{ maxWidth: 500, margin: '0 auto 1.5rem' }}>
            Join our growing community of volunteers and make a direct impact on the Godavari River.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-hero-primary-green" style={{ textDecoration: 'none' }}>
              <Star size={16} />
              <span>Become a Volunteer</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/activities" className="btn-hero-outline-green" style={{ textDecoration: 'none' }}>
              <span>See Our Activities →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutObjectives;

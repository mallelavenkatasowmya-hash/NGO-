import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Droplet, Leaf, Users, ArrowRight } from 'lucide-react';

const AboutMission = () => {
  return (
    <div className="clean-page-wrapper">
      {/* Page Header */}
      <div className="clean-page-header">
        <div className="container">
          <span className="clean-badge">PURPOSE &amp; DIRECTION</span>
          <h1>Our Mission &amp; Vision</h1>
          <p className="clean-page-sub">
            The guiding principles and long-term aspirations that drive every volunteer, trustee,
            and community partner of Godhavari Nadhi Paryavarana Parishubratha.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-cards">
            <div className="clean-content-box">
              <div className="icon-badge bg-blue-tint">
                <Target size={28} className="text-primary" />
              </div>
              <h2>Our Mission</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                To systematically mobilize citizens, youth, and riverfront merchants to maintain
                uncompromising cleanliness across all Godavari ghats, eliminate plastic pollution
                from the riverbed, and safeguard the ecological purity of our sacred waters through
                sustainable community stewardship.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', lineHeight: 2.1, color: '#374151' }}>
                <li>✅ Organize regular ghat cleanup drives</li>
                <li>✅ Install and maintain plastic-trapping barriers</li>
                <li>✅ Educate communities on eco-friendly rituals</li>
                <li>✅ Build a 5,000-member volunteer network by 2030</li>
              </ul>
            </div>

            <div className="clean-content-box">
              <div className="icon-badge bg-green-tint">
                <Eye size={28} className="text-green" />
              </div>
              <h2>Our Vision</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                A pristine, free-flowing, and pollution-free River Godavari celebrated for its
                biological splendor, clean bathing ghats, and deep cultural reverence — guarded
                vigilantly by every riverbank community for generations to come.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', lineHeight: 2.1, color: '#374151' }}>
                <li>🌊 Zero single-use plastic on all Godavari ghats</li>
                <li>🌿 Fully restored riparian forest belt by 2035</li>
                <li>🐟 Revived aquatic biodiversity and fish populations</li>
                <li>🏛️ Recognized as a national model for river conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="sub-tag">WHAT DRIVES US</span>
            <h2>Our Core Values</h2>
            <p className="section-lead">These four values define how we work, lead, and serve.</p>
          </div>
          <div className="focus-grid-four mt-4">
            <div className="focus-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
              <h3>Environmental Responsibility</h3>
              <p>
                Every action we take is measured by its impact on the river ecosystem. We act
                as stewards, not just users.
              </p>
            </div>
            <div className="focus-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
              <h3>Community First</h3>
              <p>
                Long-term change requires local ownership. We empower communities to lead
                conservation, not just participate in it.
              </p>
            </div>
            <div className="focus-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔬</div>
              <h3>Science-Based Action</h3>
              <p>
                Our strategies are informed by water quality data, biodiversity reports, and
                environmental impact assessments.
              </p>
            </div>
            <div className="focus-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕊️</div>
              <h3>Cultural Harmony</h3>
              <p>
                We respect the deep spiritual bond communities share with the Godavari and
                work with religious leaders to promote eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals 2030 */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="sub-tag">ROADMAP</span>
            <h2>Strategic Goals 2025–2030</h2>
            <p className="section-lead">Our five-year plan to accelerate impact along the Godavari basin.</p>
          </div>

          <div style={{ maxWidth: 760, margin: '2rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { year: '2025', goal: 'Deploy 22 plastic-trap barriers across inlet canals in Rajahmundry district.', icon: '🪤' },
              { year: '2026', goal: 'Complete afforestation of 8km of river embankment with 10,000 native trees.', icon: '🌳' },
              { year: '2027', goal: 'Launch Godavari Water Quality Dashboard with live monitoring at 15 stations.', icon: '📊' },
              { year: '2028', goal: 'Expand volunteer network to 2,000 members across 20 Godavari districts.', icon: '👥' },
              { year: '2030', goal: 'Achieve measurable 60% reduction in plastic waste load at Rajahmundry ghats.', icon: '🏆' },
            ].map((item) => (
              <div key={item.year} style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                borderRadius: 12, padding: '1.1rem 1.5rem'
              }}>
                <span style={{
                  background: '#16a34a', color: '#fff', borderRadius: 8,
                  padding: '0.25rem 0.65rem', fontWeight: 700, fontSize: '0.82rem',
                  whiteSpace: 'nowrap', marginTop: 2
                }}>{item.year}</span>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <p style={{ margin: 0, color: '#1e293b', lineHeight: 1.6 }}>{item.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Aligned With Our Mission?</h2>
          <p className="section-lead" style={{ maxWidth: 500, margin: '0 auto 1.5rem' }}>
            See the specific objectives we pursue every day to bring our vision to life.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about/objectives" className="btn-hero-primary-green" style={{ textDecoration: 'none' }}>
              <span>View Our Objectives</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/register" className="btn-hero-outline-green" style={{ textDecoration: 'none' }}>
              <span>Join As Volunteer →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMission;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const values = [
  { icon: '🌍', title: 'Environmental Responsibility', desc: 'Every action is measured by its impact on the river ecosystem. We act as stewards, not just users.' },
  { icon: '🤝', title: 'Community First', desc: 'Long-term change requires local ownership. We empower communities to lead conservation, not just participate.' },
  { icon: '🔬', title: 'Science-Based Action', desc: 'Strategies informed by water quality data, biodiversity reports, and environmental impact assessments.' },
  { icon: '🕊️', title: 'Cultural Harmony', desc: 'We respect the deep spiritual bond communities share with the Godavari and work with religious leaders to promote eco-friendly practices.' },
];

const roadmap = [
  { year: '2025', icon: '🪤', goal: 'Deploy 22 plastic-trap barriers across inlet canals in Rajahmundry district.' },
  { year: '2026', icon: '🌳', goal: 'Complete afforestation of 8km of river embankment with 10,000 native trees.' },
  { year: '2027', icon: '📊', goal: 'Launch Godavari Water Quality Dashboard with live monitoring at 15 stations.' },
  { year: '2028', icon: '👥', goal: 'Expand volunteer network to 2,000 members across 20 Godavari districts.' },
  { year: '2030', icon: '🏆', goal: 'Achieve measurable 60% reduction in plastic waste load at Rajahmundry ghats.' },
];

const AboutMission = () => (
  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b', background: '#fff' }}>

    {/* Hero */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '72px 24px 60px', textAlign: 'center' }}>
      <span style={{ background: 'rgba(255,255,255,0.15)', color: '#bbf7d0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', padding: '5px 14px', borderRadius: 20, textTransform: 'uppercase' }}>Purpose & Direction</span>
      <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '16px 0 12px', lineHeight: 1.2 }}>Our Mission &amp; Vision</h1>
      <p style={{ color: '#d1fae5', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
        The guiding principles and long-term aspirations that drive every volunteer, trustee, and community partner of our NGO.
      </p>
    </div>

    {/* Mission & Vision */}
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>

        {/* Mission */}
        <div style={{ border: '1.5px solid #bbf7d0', borderRadius: 16, padding: '32px 28px', background: '#f0fdf4' }}>
          <div style={{ width: 44, height: 44, background: '#16a34a', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: '1.3rem' }}>🎯</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12, color: '#064e3b' }}>Our Mission</h2>
          <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            To systematically mobilize citizens, youth, and riverfront merchants to maintain uncompromising cleanliness across all Godavari ghats, eliminate plastic pollution from the riverbed, and safeguard the ecological purity of our sacred waters through sustainable community stewardship.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Organize regular ghat cleanup drives', 'Install and maintain plastic-trapping barriers', 'Educate communities on eco-friendly rituals', 'Build a 5,000-member volunteer network by 2030'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.88rem', color: '#374151' }}>
                <span style={{ color: '#16a34a', marginTop: 1, fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div style={{ border: '1.5px solid #bfdbfe', borderRadius: 16, padding: '32px 28px', background: '#eff6ff' }}>
          <div style={{ width: 44, height: 44, background: '#1d4ed8', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: '1.3rem' }}>👁️</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12, color: '#1e3a8a' }}>Our Vision</h2>
          <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            A pristine, free-flowing, and pollution-free River Godavari celebrated for its biological splendor, clean bathing ghats, and deep cultural reverence — guarded vigilantly by every riverbank community for generations to come.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Zero single-use plastic on all Godavari ghats', 'Fully restored riparian forest belt by 2035', 'Revived aquatic biodiversity and fish populations', 'Recognized as a national model for river conservation'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.88rem', color: '#374151' }}>
                <span style={{ color: '#1d4ed8', marginTop: 1, fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Core Values */}
    <div style={{ background: '#f8fafc', padding: '56px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>What Drives Us</span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '10px 0 6px' }}>Our Core Values</h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Four values that define how we work, lead, and serve.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '24px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{v.icon}</div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: 8, color: '#1e293b' }}>{v.title}</h3>
              <p style={{ fontSize: '0.87rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Roadmap */}
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Roadmap</span>
        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '10px 0 6px' }}>Strategic Goals 2025–2030</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Our five-year plan to accelerate impact along the Godavari basin.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {roadmap.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '16px 20px' }}>
            <span style={{ background: '#064e3b', color: '#fff', borderRadius: 8, padding: '5px 12px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{item.year}</span>
            <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
            <span style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.5 }}>{item.goal}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '56px 24px', textAlign: 'center' }}>
      <h2 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, margin: '0 0 10px' }}>Aligned With Our Mission?</h2>
      <p style={{ color: '#d1fae5', fontSize: '0.95rem', maxWidth: 460, margin: '0 auto 28px' }}>See the specific objectives we pursue every day to bring our vision to life.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/about/objectives" style={{ background: '#fff', color: '#064e3b', fontWeight: 700, padding: '12px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          View Our Objectives <ArrowRight size={15} />
        </Link>
        <Link to="/register" style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontWeight: 600, padding: '11px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem' }}>
          Join As Volunteer →
        </Link>
      </div>
    </div>
  </div>
);

export default AboutMission;

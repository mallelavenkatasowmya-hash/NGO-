import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Leaf, Trash2, TreeDeciduous } from 'lucide-react';

const stats = [
  { value: '480+', label: 'Active Members', icon: '👥' },
  { value: '148', label: 'Cleanliness Drives', icon: '🧹' },
  { value: '92 T', label: 'Waste Removed', icon: '♻️' },
  { value: '4,200', label: 'Trees Planted', icon: '🌳' },
];

const team = [
  { initials: 'DR', name: 'Dr. K. V. Subba Rao', role: 'President & Chief Coordinator', color: '#064e3b', desc: 'Environmental researcher and retired water resources engineer, leading river conservation strategies in the Godavari delta since 2018.' },
  { initials: 'PL', name: 'Smt. P. Lakshmi Devi', role: 'General Secretary', color: '#1d4ed8', desc: 'Social organizer coordinating volunteer recruitment, youth participation, and community awareness initiatives across Rajahmundry.' },
  { initials: 'MR', name: 'Sri M. Ramu Naidu', role: 'Field & Ghat Coordinator', color: '#b45309', desc: 'Directs on-ground cleanup logistics, safety equipment distribution, and biohazard containment during Sunday cleanliness drives.' },
];

const AboutNGO = () => (
  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b', background: '#fff' }}>

    {/* Hero */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '72px 24px 60px', textAlign: 'center' }}>
      <span style={{ background: 'rgba(255,255,255,0.15)', color: '#bbf7d0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', padding: '5px 14px', borderRadius: 20, textTransform: 'uppercase' }}>Who We Are</span>
      <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 800, margin: '16px 0 12px', lineHeight: 1.2 }}>
        Godhavari Nadhi Paryavarana Parishubratha
      </h1>
      <p style={{ color: '#d1fae5', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
        A community-driven NGO protecting and rejuvenating the sacred River Godavari from Rajahmundry, Andhra Pradesh — since 2018.
      </p>
    </div>

    {/* Story & Presence */}
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, background: '#ecfdf5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={18} color="#16a34a" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Our Story</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 12 }}>
            Founded in 2018 by passionate environmentalists, retired water engineers, and community leaders alarmed by rising pollution levels in the Godavari River — one of India's longest and most sacred rivers.
          </p>
          <p style={{ color: '#475569', lineHeight: 1.8 }}>
            What started as a small weekend cleanup at Kotilingala Ghat has grown into a registered NGO with <strong>480+ active members</strong> spanning 12 districts along the Godavari basin.
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, background: '#eff6ff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={18} color="#1d4ed8" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Our Presence</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 16 }}>
            Headquartered at Godavari Bund Road, Near Kotilingala Ghat, Rajahmundry. Volunteers operate from Bhadrachalam to the estuary at Antarvedi.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Rajahmundry (HQ) — Kotilingala & Pushkar Ghats', 'Kovvur — River bank monitoring zone', 'Bhimavaram — Plastic trap maintenance', 'Narsapur — Estuary afforestation belt'].map((loc, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', borderRadius: 8, padding: '8px 12px', fontSize: '0.9rem', color: '#374151' }}>
                <span style={{ color: '#16a34a', fontWeight: 700 }}>📍</span> {loc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div style={{ background: '#f8fafc', padding: '56px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Impact Since 2018</span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '10px 0 0' }}>Our Achievements</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 20px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#064e3b', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748b', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Leadership */}
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Committee</span>
        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '10px 0 6px' }}>Executive Leadership</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>The founding trustees and core coordinators driving our conservation work.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {team.map((m, i) => (
          <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 24px', textAlign: 'center', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: m.color, color: '#fff', fontSize: '1.4rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{m.initials}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>{m.name}</h3>
            <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>{m.role}</span>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginTop: 10 }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '56px 24px', textAlign: 'center' }}>
      <h2 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, margin: '0 0 10px' }}>Be Part of Our Journey</h2>
      <p style={{ color: '#d1fae5', fontSize: '0.95rem', maxWidth: 460, margin: '0 auto 28px' }}>Join 480+ volunteers protecting the Godavari. Every hand makes a difference.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/register" style={{ background: '#fff', color: '#064e3b', fontWeight: 700, padding: '12px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          Join As Member <ArrowRight size={15} />
        </Link>
        <Link to="/about/mission" style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontWeight: 600, padding: '11px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.92rem' }}>
          Our Mission &amp; Vision →
        </Link>
      </div>
    </div>
  </div>
);

export default AboutNGO;

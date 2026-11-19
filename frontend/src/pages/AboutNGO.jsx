import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Leaf, Heart, Globe, Star } from 'lucide-react';

const pillars = [
  { icon: <Globe size={22} color="#16a34a" />, bg: '#f0fdf4', title: 'Environmental Cleanliness', desc: 'Promoting clean surroundings and protecting the natural environment through collective action.' },
  { icon: <Star size={22} color="#1d4ed8" />, bg: '#eff6ff', title: 'Public Awareness', desc: 'Helping communities understand the importance of environmental protection and responsible practices.' },
  { icon: <Users size={22} color="#7c3aed" />, bg: '#fdf4ff', title: 'Community Participation', desc: 'Encouraging individuals to come together and actively take part in cleanliness initiatives.' },
  { icon: <Heart size={22} color="#e11d48" />, bg: '#fff1f2', title: 'Collective Responsibility', desc: 'We believe maintaining a clean environment is a shared duty that requires every individual\'s effort.' },
];

const AboutNGO = () => (
  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b', background: '#fff' }}>

    {/* Hero */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '80px 24px 72px', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
        Godhavari Nadhi Paryavarana Parishubratha
      </h1>
      <p style={{ color: '#86efac', fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', fontWeight: 500, margin: '0 0 28px', lineHeight: 1.6, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
        Creating Awareness. Promoting Cleanliness. Encouraging Community Participation.
      </p>
      <p style={{ color: '#d1fae5', fontSize: '0.97rem', maxWidth: 680, margin: '0 auto', lineHeight: 1.8 }}>
        Godhavari Nadhi Paryavarana Parishubratha is an organization focused on public awareness,
        environmental cleanliness and community development activities.
      </p>
    </div>

    {/* Introduction */}
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>About Us</span>
        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, margin: '10px 0 0', color: '#0f172a' }}>Who We Are</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        <div style={{ background: '#f8fafc', borderRadius: 14, padding: '28px 24px', borderLeft: '4px solid #16a34a' }}>
          <p style={{ margin: 0, color: '#374151', lineHeight: 1.85, fontSize: '0.97rem' }}>
            We are an organization committed to promoting environmental awareness and cleanliness among the public.
          </p>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: 14, padding: '28px 24px', borderLeft: '4px solid #1d4ed8' }}>
          <p style={{ margin: 0, color: '#374151', lineHeight: 1.85, fontSize: '0.97rem' }}>
            We believe that community participation plays an important role in creating positive environmental changes. Our focus is on encouraging people to come together and develop responsible environmental practices.
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', marginTop: 24, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
        <p style={{ margin: 0, color: '#374151', lineHeight: 1.9, fontSize: '0.97rem', textAlign: 'center' }}>
          Our organization aims to encourage individuals and communities to understand the importance of
          environmental protection and cleanliness. We believe that maintaining a clean environment is a
          <strong style={{ color: '#064e3b' }}> collective responsibility</strong> that requires active participation from every individual. Through cleanliness
          drives, public awareness initiatives and community activities, we seek to motivate people to
          participate in maintaining clean surroundings and protecting the natural environment.
        </p>
      </div>
    </div>

    {/* Purpose & Approach */}
    <div style={{ background: '#f8fafc', padding: '56px 24px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {/* Our Purpose */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 44, height: 44, background: '#ecfdf5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: '1.4rem' }}>🎯</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 12, color: '#0f172a' }}>Our Purpose</h3>
          <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.93rem', margin: 0 }}>
            Our purpose is to promote cleanliness, create environmental awareness and encourage public participation
            in activities that contribute to a healthier environment.
          </p>
        </div>

        {/* Our Approach */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 44, height: 44, background: '#eff6ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: '1.4rem' }}>💡</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 12, color: '#0f172a' }}>Our Approach</h3>
          <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.93rem', margin: 0 }}>
            We believe that meaningful environmental change begins with awareness and action. By encouraging people
            to participate in community activities and cleanliness initiatives, we aim to create a positive impact on society.
          </p>
        </div>

        {/* Our Commitment */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 44, height: 44, background: '#fdf4ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: '1.4rem' }}>🤝</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 12, color: '#0f172a' }}>Our Commitment</h3>
          <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.93rem', margin: 0 }}>
            We are committed to encouraging a culture of cleanliness, environmental responsibility and community involvement.
            Every small effort towards protecting our surroundings can contribute to a cleaner and healthier future.
          </p>
        </div>
      </div>
    </div>

    {/* What We Stand For */}
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ color: '#16a34a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Values</span>
        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '10px 0 6px', color: '#0f172a' }}>What We Stand For</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>The core principles that guide everything we do.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ background: p.bg, borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>{p.icon}</div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>{p.title}</h4>
            <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Additional stand for items */}
      <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {['Environmental cleanliness', 'Public awareness', 'Community participation', 'Responsible environmental practices', 'Collective efforts for a cleaner society'].map((item, i) => (
          <span key={i} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', borderRadius: 50, padding: '7px 18px', fontSize: '0.85rem', fontWeight: 600 }}>
            ✓ {item}
          </span>
        ))}
      </div>
    </div>

    {/* Join Initiative */}
    <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #15803d 100%)', padding: '72px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <Leaf size={36} color="#86efac" style={{ marginBottom: 16 }} />
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, margin: '0 0 14px', lineHeight: 1.3 }}>Join Our Initiative</h2>
        <p style={{ color: '#d1fae5', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: 8 }}>
          Let us work together to promote cleanliness, protect our environment and create awareness among future generations.
        </p>
        <p style={{ color: '#86efac', fontSize: '1rem', fontWeight: 600, fontStyle: 'italic', marginBottom: 32 }}>
          Together for a Cleaner Environment. Together for a Better Future.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" style={{ background: '#fff', color: '#064e3b', fontWeight: 700, padding: '13px 30px', borderRadius: 50, textDecoration: 'none', fontSize: '0.93rem', display: 'flex', alignItems: 'center', gap: 7 }}>
            Join Our Mission <ArrowRight size={15} />
          </Link>
          <Link to="/about/mission" style={{ border: '2px solid rgba(255,255,255,0.45)', color: '#fff', fontWeight: 600, padding: '12px 30px', borderRadius: 50, textDecoration: 'none', fontSize: '0.93rem' }}>
            Our Mission &amp; Vision →
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AboutNGO;

import React from 'react';
import { Link } from 'react-router-dom';
import heroBannerImg from '../assets/hero-banner.jpg';
import { 
  Users, 
  Target, 
  Leaf, 
  Globe, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Compass,
  CheckCircle2
} from 'lucide-react';

const standForList = [
  {
    title: 'Environmental Cleanliness',
    desc: 'Maintaining pristine surroundings and protecting our riverbanks, ghats, and natural ecosystems.',
    icon: Leaf,
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    title: 'Public Awareness',
    desc: 'Spreading knowledge on environmental responsibility and the critical importance of conservation.',
    icon: Globe,
    color: '#0284c7',
    bg: '#f0f9ff',
  },
  {
    title: 'Community Participation',
    desc: 'Mobilizing citizens, youth, and local organizations to take active civic ownership of our environment.',
    icon: Users,
    color: '#7c3aed',
    bg: '#faf5ff',
  },
  {
    title: 'Responsible Environmental Practices',
    desc: 'Fostering sustainable everyday habits that eliminate plastic waste and prevent pollution.',
    icon: ShieldCheck,
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    title: 'Collective Efforts for a Cleaner Society',
    desc: 'Uniting volunteers, authorities, and pilgrims for lasting and meaningful social impact.',
    icon: HeartHandshake,
    color: '#0f766e',
    bg: '#f0fdfa',
  },
];

const AboutNGO = () => {
  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL HEADER */}
      <section className="clean-page-header" style={{ padding: '4rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
            WHO WE ARE
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Godhavari Nadhi Paryavarana Parishubratha
          </h1>
          <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#059669', margin: '0 0 1rem', lineHeight: 1.5 }}>
            Creating Awareness. Promoting Cleanliness. Encouraging Community Participation.
          </p>
          <p className="clean-page-sub" style={{ fontSize: '1rem', color: '#64748b', maxWidth: '720px', margin: '0 auto', lineHeight: 1.7 }}>
            Godhavari Nadhi Paryavarana Parishubratha is an organization focused on public awareness, 
            environmental cleanliness and community development activities.
          </p>
        </div>
      </section>

      {/* 2. CORE STORY & NARRATIVE (IMAGE + EDITORIAL) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Sparkles size={16} />
                <span>Our Foundation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, margin: '0 0 1.25rem' }}>
                Collective Responsibility for a Cleaner Environment
              </h2>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                Our organization aims to encourage individuals and communities to understand the importance of 
                environmental protection and cleanliness. We believe that maintaining a clean environment is a 
                <strong style={{ color: '#0f172a' }}> collective responsibility</strong> that requires active participation from every individual.
              </p>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.75rem' }}>
                Through cleanliness drives, public awareness initiatives and community activities, we seek to 
                motivate people to participate in maintaining clean surroundings and protecting the natural environment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Educating citizens and youth on long-term river conservation',
                  'Regular weekend volunteer cleanliness drives across Godavari ghats',
                  'Fostering civic ownership and environmental responsibility'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                background: '#0f172a'
              }}>
                <img 
                  src={heroBannerImg} 
                  alt="Godavari River Cleanliness and Awareness Drive" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block', opacity: 0.92 }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 78, 59, 0.85) 0%, rgba(6, 78, 59, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem'
                }}>
                  <span style={{ color: '#86efac', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Environmental Mission
                  </span>
                  <p style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                    Together for a Cleaner Environment.<br />Together for a Better Future.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & OUR PURPOSE (DUAL SECTION) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Box 1: Who We Are */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem' }}>
                Who We Are
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, margin: '0 0 1rem' }}>
                We are an organization committed to promoting environmental awareness and cleanliness among the public.
              </p>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, margin: 0 }}>
                We believe that community participation plays an important role in creating positive environmental changes. 
                Our focus is on encouraging people to come together, participate in cleanliness initiatives and develop 
                responsible environmental practices.
              </p>
            </div>

            {/* Box 2: Our Purpose */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem' }}>
                Our Purpose
              </h3>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, margin: '0 0 1.5rem' }}>
                Our purpose is to promote cleanliness, create environmental awareness and encourage public participation 
                in activities that contribute to a healthier environment.
              </p>
              <div style={{
                marginTop: 'auto',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem'
              }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Core Mission Goal
                </span>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
                  Empowering every citizen to be an active guardian of our river and public surroundings.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT WE STAND FOR (5 PILLARS) */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              GUIDING PRINCIPLES
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              What We Stand For
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Five foundational values that steer our organization's daily work and community engagements.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {standForList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '2rem 1.75rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: item.bg,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH & OUR COMMITMENT */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Our Approach */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Compass size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Strategy in Action</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Our Approach</h3>
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, margin: 0 }}>
                We believe that meaningful environmental change begins with <strong>awareness and action</strong>. 
                By encouraging people to participate in community activities and cleanliness initiatives, 
                we aim to create a positive impact on society.
              </p>
            </div>

            {/* Our Commitment */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Long-Term Promise</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Our Commitment</h3>
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, margin: '0 0 1rem' }}>
                We are committed to encouraging a culture of cleanliness, environmental responsibility and community involvement.
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', background: '#f0fdf4', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.92rem', color: '#065f46', fontWeight: 600, lineHeight: 1.5 }}>
                  Every small effort towards protecting our surroundings can contribute to a cleaner and healthier future.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. JOIN OUR INITIATIVE (PROFESSIONAL CTA) */}
      <section style={{ padding: '5rem 1.5rem', background: '#064e3b', color: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#86efac',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            BE PART OF THE CHANGE
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, margin: '0 0 1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Join Our Initiative
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#d1fae5', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto 1.25rem' }}>
            Let us work together to promote cleanliness, protect our environment and create awareness among future generations.
          </p>

          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#86efac', margin: '0 auto 2.5rem' }}>
            Together for a Cleaner Environment. Together for a Better Future.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: '#ffffff',
                color: '#064e3b',
                fontWeight: 700,
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}
            >
              <span>Join Our Mission</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/activities"
              className="btn btn-outline btn-lg"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#ffffff',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '8px'
              }}
            >
              <span>Explore Our Activities</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutNGO;

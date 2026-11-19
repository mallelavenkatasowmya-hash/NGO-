import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Target, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck,
  Compass
} from 'lucide-react';

const standForItems = [
  {
    title: 'Environmental Cleanliness',
    desc: 'Dedicated to preserving pure riverbanks, ghats, and natural ecological surroundings.',
    icon: Leaf,
    color: '#15803d',
    bg: '#f0fdf4',
    border: '#bbf7d0',
  },
  {
    title: 'Public Awareness',
    desc: 'Educating citizens on responsible waste disposal and long-term river conservation.',
    icon: Globe2,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
  },
  {
    title: 'Community Participation',
    desc: 'Mobilizing youth, families, and local groups to take direct civic ownership.',
    icon: Users,
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#e9d5ff',
  },
  {
    title: 'Responsible Environmental Practices',
    desc: 'Encouraging sustainable everyday habits that eliminate plastic and reduce contamination.',
    icon: ShieldCheck,
    color: '#b45309',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    title: 'Collective Efforts for a Cleaner Society',
    desc: 'Uniting public administration, pilgrims, and local residents for lasting social impact.',
    icon: HeartHandshake,
    color: '#0f766e',
    bg: '#f0fdfa',
    border: '#99f6e4',
  },
];

const AboutNGO = () => {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#0f172a', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
        color: '#ffffff',
        padding: '80px 24px 70px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(134, 239, 172, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#bbf7d0',
            marginBottom: '20px'
          }}>
            <Leaf size={14} />
            <span>Official Organization Profile</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            margin: '0 0 16px',
            color: '#ffffff'
          }}>
            Godhavari Nadhi Paryavarana Parishubratha
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            fontWeight: 600,
            color: '#86efac',
            margin: '0 auto 24px',
            lineHeight: 1.5,
            maxWidth: '720px'
          }}>
            Creating Awareness. Promoting Cleanliness. Encouraging Community Participation.
          </p>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
            color: '#ecfdf5',
            lineHeight: 1.75,
            margin: '0 auto',
            maxWidth: '740px',
            opacity: 0.95
          }}>
            Godhavari Nadhi Paryavarana Parishubratha is an organization focused on public awareness, 
            environmental cleanliness and community development activities.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTRO STATEMENT */}
      <section style={{ maxWidth: '1080px', margin: '-32px auto 0', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
          border: '1px solid #e2e8f0',
          padding: '40px 36px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#059669',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px'
              }}>
                <Sparkles size={16} />
                <span>Our Core Conviction</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px', lineHeight: 1.3 }}>
                Collective Responsibility for a Cleaner Environment
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.98rem', margin: 0 }}>
                Our organization aims to encourage individuals and communities to understand the importance 
                of environmental protection and cleanliness. We believe that maintaining a clean environment 
                is a collective responsibility that requires active participation from every individual.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '24px 28px',
              borderLeft: '4px solid #10b981'
            }}>
              <p style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.96rem', margin: 0 }}>
                Through <strong>cleanliness drives</strong>, <strong>public awareness initiatives</strong> and <strong>community activities</strong>, 
                we seek to motivate people to participate in maintaining clean surroundings and protecting 
                the natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & OUR PURPOSE */}
      <section style={{ maxWidth: '1080px', margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          
          {/* Card: Who We Are */}
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Users size={24} />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Who We Are
            </h3>

            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.96rem', margin: '0 0 14px' }}>
              We are an organization committed to promoting environmental awareness and cleanliness among the public.
            </p>

            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.96rem', margin: 0 }}>
              We believe that community participation plays an important role in creating positive environmental changes. 
              Our focus is on encouraging people to come together, participate in cleanliness initiatives and develop 
              responsible environmental practices.
            </p>
          </div>

          {/* Card: Our Purpose */}
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Target size={24} />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Our Purpose
            </h3>

            <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '1rem', margin: '0 0 20px' }}>
              Our purpose is to promote cleanliness, create environmental awareness and encourage public participation 
              in activities that contribute to a healthier environment.
            </p>

            <div style={{
              marginTop: 'auto',
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '16px 20px',
              border: '1px dashed #cbd5e1'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Key Focus Areas
              </span>
              <p style={{ margin: '6px 0 0', fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Awareness campaigns • On-ground cleanliness • Youth mobilization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE STAND FOR */}
      <section style={{ maxWidth: '1080px', margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#059669',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '8px'
          }}>
            <Compass size={14} />
            <span>Guiding Principles</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            What We Stand For
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {standForItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: `1.5px solid #e2e8f0`,
                  borderRadius: '16px',
                  padding: '24px 22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: item.bg,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', lineHeight: 1.35 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. OUR APPROACH & OUR COMMITMENT */}
      <section style={{ maxWidth: '1080px', margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          
          {/* Our Approach */}
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              display: 'inline-flex',
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#ecfdf5',
              color: '#059669',
              fontWeight: 700,
              fontSize: '0.8rem',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Strategy in Action
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Our Approach
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '0.96rem', margin: 0 }}>
              We believe that meaningful environmental change begins with <strong>awareness and action</strong>. 
              By encouraging people to participate in community activities and cleanliness initiatives, 
              we aim to create a positive impact on society.
            </p>
          </div>

          {/* Our Commitment */}
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              display: 'inline-flex',
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#fef3c7',
              color: '#b45309',
              fontWeight: 700,
              fontSize: '0.8rem',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Dedication to Future
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Our Commitment
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '0.96rem', margin: '0 0 14px' }}>
              We are committed to encouraging a culture of cleanliness, environmental responsibility and community involvement.
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: '#0f766e', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Every small effort towards protecting our surroundings can contribute to a cleaner and healthier future.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. JOIN OUR INITIATIVE (CTA) */}
      <section style={{ maxWidth: '1080px', margin: '60px auto 80px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
          borderRadius: '24px',
          padding: '60px 36px',
          textAlign: 'center',
          color: '#ffffff',
          boxShadow: '0 15px 35px -10px rgba(6, 78, 59, 0.3)'
        }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', fontWeight: 800, margin: '0 0 14px', color: '#ffffff' }}>
            Join Our Initiative
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#ecfdf5', maxWidth: '640px', margin: '0 auto 12px', lineHeight: 1.75 }}>
            Let us work together to promote cleanliness, protect our environment and create awareness among future generations.
          </p>

          <p style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#86efac',
            margin: '0 auto 32px',
            letterSpacing: '-0.01em'
          }}>
            Together for a Cleaner Environment. Together for a Better Future.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                background: '#ffffff',
                color: '#064e3b',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '13px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <span>Join As Volunteer</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/activities"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.3)',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '13px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Explore Activities</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutNGO;

import React from 'react';
import { Link } from 'react-router-dom';
import godavariCleanupImg from '../assets/godavari-cleanup.jpg';
import godavariMissionHeroImg from '../assets/godavari-mission-hero.jpg';
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
  CheckCircle2,
  Calendar,
  MapPin
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

const photoHighlights = [
  {
    title: 'Community Cleanliness Drives',
    subtitle: 'Kotilingala & Pushkar Ghats',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&auto=format&fit=crop&q=85',
    tag: 'Field Action'
  },
  {
    title: 'Public Awareness & Youth Education',
    subtitle: 'Schools & Pilgrim Workshops',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=85',
    tag: 'Awareness'
  },
  {
    title: 'Riverbank Afforestation & Tree Plantation',
    subtitle: 'Godavari Bund Road Corridor',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=85',
    tag: 'Conservation'
  }
];

const AboutNGO = () => {
  return (
    <div className="clean-page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#1e293b' }}>
      
      {/* 1. PROFESSIONAL SPLIT HERO HEADER */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '4rem 1.5rem 3.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Column: NGO Profile & Purpose */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#047857',
                marginBottom: '1rem'
              }}>
                <Sparkles size={14} />
                <span>OFFICIAL ORGANIZATION PROFILE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 1rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}>
                Godhavari Nadhi Paryavarana Parishubratha
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                fontWeight: 600,
                color: '#059669',
                margin: '0 0 1rem',
                lineHeight: 1.5
              }}>
                Creating Awareness. Promoting Cleanliness. Encouraging Community Participation.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: '0 0 1.5rem'
              }}>
                Godhavari Nadhi Paryavarana Parishubratha is an organization focused on public awareness, 
                environmental cleanliness and community development activities. We believe that maintaining a clean 
                environment is a collective responsibility requiring active participation from every individual.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <MapPin size={14} color="#059669" />
                  <span>Rajahmundry, Andhra Pradesh</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, color: '#334155' }}>
                  <Leaf size={14} color="#059669" />
                  <span>River Basin Conservation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Crystal-Clear Distinct River Panorama */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={heroBannerImg} 
                  alt="Godhavari River Natural Panorama" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  padding: '0.85rem 1.25rem',
                  background: '#ffffff',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                      Sacred River Godavari Corridor — Rajahmundry
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Headquarters
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE NARRATIVE WITH FEATURED IMAGE */}
      <section id="conviction" style={{ padding: '4.5rem 1.5rem', background: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Narrative */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Sparkles size={16} />
                <span>Our Core Conviction</span>
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
                  'Organizing regular community-led cleanliness drives along the riverbanks',
                  'Creating proactive awareness campaigns for schools, youth and pilgrims',
                  'Fostering long-term civic ownership and responsible environmental practices'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Photo Card (Unobstructed & Razor-Sharp) */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img 
                  src={godavariMissionHeroImg} 
                  alt="Pristine Godavari River and Ghat Steps" 
                  style={{ 
                    width: '100%', 
                    height: '390px', 
                    objectFit: 'cover', 
                    display: 'block'
                  }}
                  loading="eager"
                />
                <div style={{
                  padding: '0.85rem 1.25rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                      Godavari River Conservation &amp; Clean Surroundings Focus
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    Civic Action
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & OUR PURPOSE WITH REAL PHOTO CARDS */}
      <section id="who-we-are" style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Card 1: Who We Are with Photo Header */}
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=85" 
                  alt="Community Volunteers"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(6, 78, 59, 0.85)', backdropFilter: 'blur(4px)', color: '#ffffff', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Community Stewardship
                </div>
              </div>
              
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Who We Are
                  </h3>
                </div>

                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, margin: '0 0 1rem' }}>
                  We are an organization committed to promoting environmental awareness and cleanliness among the public.
                </p>

                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, margin: 0 }}>
                  We believe that community participation plays an important role in creating positive environmental changes. 
                  Our focus is on encouraging people to come together, participate in cleanliness initiatives and develop 
                  responsible environmental practices.
                </p>
              </div>
            </div>

            {/* Card 2: Our Purpose with Photo Header */}
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&auto=format&fit=crop&q=85" 
                  alt="Ghat Cleanliness Action"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(2, 132, 199, 0.85)', backdropFilter: 'blur(4px)', color: '#ffffff', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Mission In Action
                </div>
              </div>

              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#eff6ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Our Purpose
                  </h3>
                </div>

                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 1.5rem' }}>
                  Our purpose is to promote cleanliness, create environmental awareness and encourage public participation 
                  in activities that contribute to a healthier environment.
                </p>

                <div style={{
                  marginTop: 'auto',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.1rem 1.25rem'
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Key Focus Areas
                  </span>
                  <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
                    Ghat cleanliness • Public awareness campaigns • Sustainable habits
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REAL-TIME ACTIVITIES PHOTO RIBBON */}
      <section id="initiatives" style={{ padding: '4.5rem 1.5rem', background: '#ffffff', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="clean-badge" style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>
              GROUNDWORK IN ACTION
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
              Our Work Across Godavari
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Photographic highlights of our hands-on environmental programs and civic initiatives.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {photoHighlights.map((photo, idx) => (
              <div 
                key={idx}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {photo.tag}
                  </span>
                </div>
                
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.35rem' }}>
                    {photo.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHAT WE STAND FOR (5 PILLARS) */}
      <section id="principles" style={{ padding: '4.5rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '80px' }}>
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

      {/* 6. OUR APPROACH & OUR COMMITMENT */}
      <section style={{ padding: '4.5rem 1.5rem', background: '#ffffff' }}>
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

      {/* 7. PROFESSIONAL JOIN INITIATIVE CTA */}
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import godavariAnnouncementsNewsImg from '../../assets/godavari-announcements-news.jpg';
import { 
  Megaphone, 
  Sparkles, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Newspaper, 
  Share2, 
  Search, 
  Mail, 
  Building2, 
  ChevronRight,
  X
} from 'lucide-react';

const newsArticles = [
  {
    id: 'news-1',
    title: 'Kotilingala Ghat Achieves Landmark 90-Day Continuous Clean Shoreline Milestone',
    category: 'River Cleanliness',
    date: '18 Nov 2026',
    readTime: '4 min read',
    author: 'Field Desk — Rajahmundry',
    summary: 'Through synchronized morning volunteer shifts and reinforced shoreline nets, Kotilingala Ghat has maintained zero accumulated surface plastic across three consecutive months.',
    fullContent: 'Rajahmundry: In an inspiring demonstration of grassroots environmental stewardship, Kotilingala Ghat has officially recorded 90 consecutive days of zero unattended plastic accumulation along its primary bathing steps and water margins.\n\nThe milestone was verified during this week\'s joint municipal audit conducted by civic sanitation engineers and Godavari Nadhi Paryavarana Parishubratha taskforce captains. Over 3,200 cumulative volunteer hours, coupled with newly commissioned bio-barrier catch nets across two upstream drainage outfalls, prevented an estimated 12.4 tonnes of floating plastics and synthetic pilgrim ritual debris from drifting into the mainstream current.\n\nLocal shopkeepers association and boatmen unions have simultaneously banned single-use plastic cups and polyethylene carrier bags within a 300-meter radius of the ghat, demonstrating that persistent civic action yields permanent behavioral transformation.',
    highlights: [
      '12.4 tonnes of plastic debris intercepted before entering mainstream',
      'Over 3,200 volunteer hours logged across 36 coordinated shifts',
      '100% merchant compliance with single-use plastic ban on ghat perimeter'
    ]
  },
  {
    id: 'news-2',
    title: 'Inter-School Haritha Sena Eco-Club Inundates 40 Institutions Across River Belt',
    category: 'Youth & Education',
    date: '12 Nov 2026',
    readTime: '3 min read',
    author: 'Education Bureau',
    summary: 'More than 2,500 high school and collegiate students join certified river stewardship training, taking charge of bi-weekly local water testing and ghat cleanliness patrols.',
    fullContent: 'Following the successful rollout of the Godavari Environmental Education Module, 40 secondary schools and intermediate colleges across Rajahmundry Urban and Rural mandals have formally chartered Haritha Sena (Green Cadre) environmental chapters.\n\nEach participating institution receives standardized digital water test kits, safety collection gear, and an annual conservation calendar. Student leaders will monitor localized dissolved oxygen levels, organize classroom peer presentations, and lead weekend riverfront sensitization drives for pilgrimage tourists.\n\nPrincipal Smt. S. Lakshmi of Government Girls High School remarked: "Our students are no longer passive textbook learners; they have become active river guardians with real scientific tools and field pride."',
    highlights: [
      '40 accredited institutional eco-clubs inaugurated',
      '2,500+ active student guardians equipped with water test equipment',
      'Bi-weekly student-led water clarity indexing across 8 municipal zones'
    ]
  },
  {
    id: 'news-3',
    title: 'Dowleswaram Embankment Afforestation Yields 92% Sapling Survival Rate',
    category: 'Tree Plantation',
    date: '05 Nov 2026',
    readTime: '5 min read',
    author: 'Forestry Operations',
    summary: 'Monsoon survival audit confirms high resilience for 2,500 native Neem and Pongamia saplings secured with community bamboo guards along Godavari Bund Road.',
    fullContent: 'The quarterly survival audit of the Dowleswaram Embankment Green Wall project has registered an extraordinary 92% sapling survival rate across 2,500 newly planted indigenous trees along the 8-kilometer bund stretch.\n\nThe project, launched during early monsoon rains, employed deep-pit soil conditioning and protective hand-woven bamboo guards to shelter saplings against grazing livestock and vehicle exhaust. Routine drip-hydration by volunteer watering squads during dry spells ensured high root retention.\n\nBotanical advisors confirm that native Neem (Azadirachta indica) and Pongamia pinnata (Kanuga) are developing deep taproot systems critical for stabilizing the sandy embankment against post-monsoon soil erosion.',
    highlights: [
      '2,300+ healthy saplings thriving into secondary growth stage',
      'Zero synthetic plastic tree guards used; 100% bio-degradable bamboo',
      'Soil stabilization along 8 km of critical flood protection bund'
    ]
  },
  {
    id: 'news-4',
    title: 'Municipal Corporation Honors NGO With "Swachh Nadi Seva Puraskaram"',
    category: 'Civic Recognition',
    date: '28 Oct 2026',
    readTime: '3 min read',
    author: 'Press Bureau',
    summary: 'Rajahmundry City Municipal Corporation presents highest civic commendation for transparent water audits, volunteer mobilization, and drain interception infrastructure.',
    fullContent: 'At an official civic ceremony held at the Municipal Council Hall, Godavari Nadhi Paryavarana Parishubratha was conferred the prestigious "Swachh Nadi Seva Puraskaram" (Sacred River Service Commendation) by the Worshipful Mayor and Municipal Commissioner.\n\nThe award recognizes the organization\'s uninterrupted year-round ghat sanitation drives, scientifically published water quality indices, and collaborative installations of canal trash-interceptors that have reduced visible river pollution along the central riverfront by over 58%.\n\nAccepting the commendation on behalf of all volunteers, our Founder Secretary dedicated the award to every citizen who woke up before dawn to sweep ghat steps and haul plastic from the riverbanks.',
    highlights: [
      'Highest civic recognition for environmental water protection in the district',
      'Recognized for 58% verified reduction in visible surface plastics',
      'Public praise for uncompromised volunteer transparency and open-access data'
    ]
  },
  {
    id: 'news-5',
    title: 'Canal Defense Barrier Net #22 Commissioned at Aryapuram Outfall',
    category: 'River Cleanliness',
    date: '20 Oct 2026',
    readTime: '4 min read',
    author: 'Engineering Taskforce',
    summary: 'Final phase of municipal drain interception completed, ensuring all 22 primary municipal drainage canals entering Godavari are physically netted to intercept floatable debris.',
    fullContent: 'Engineering squads have successfully mounted and tension-anchored heavy-duty stainless-reinforced netting across the mouth of the Aryapuram municipal storm drain, completing the planned 22-barrier canal defense network.\n\nWith this installation, all primary municipal outfalls discharging stormwater into River Godavari within municipal limits now possess physical trash catchers. These nets trap plastic sachets, thermocol items, and discarded bottles before they enter the river mainstream.\n\nA dedicated municipal-NGO clearing crew clears the trapped debris every 48 hours, weighing and categorizing waste before routing recyclables to authorized recycling centers.',
    highlights: [
      'All 22 planned drainage mouth barriers now fully active and monitored',
      'High-tensile UV-resistant marine netting engineered for high flow volumes',
      'Bi-daily clearing protocol preventing canal blockages and backflow'
    ]
  },
  {
    id: 'news-6',
    title: 'Community Temple Trust Alliance Adopts Eco-Friendly Nirmalya Protocol',
    category: 'Civic Recognition',
    date: '14 Oct 2026',
    readTime: '3 min read',
    author: 'Cultural Liaison Desk',
    summary: 'Twelve historic riverside temples pledge to segregate organic puja floral offerings into dedicated on-site composting pits instead of plastic bag water disposal.',
    fullContent: 'In a significant cultural-environmental breakthrough, trustees and head priests representing 12 riverside temples along the Godavari belt signed an accord adopting the Eco-Friendly Nirmalya Protocol.\n\nUnder this accord, sacred floral offerings (Nirmalya) are placed in clearly labeled organic collection vats stationed outside temple gates. The flowers are shredded and combined with temple cow manure to create rich organic compost for local community gardens, while plastic wrappers, polythene covers, and synthetic kumkum packaging are strictly collected separately.\n\nPriests will also announce daily advisories during prayer assemblies encouraging pilgrims to honor Godavari by keeping her waters immaculate.',
    highlights: [
      '12 historic riverside shrines adopting segregated compost collection',
      'Elimination of hundreds of plastic bag dumps into the water daily',
      'Production of sacred organic compost for green embankment gardens'
    ]
  }
];

const mediaCoverages = [
  { outlet: 'Eenadu Regional', headline: 'రాజమండ్రి గోదావరి ఘాట్లలో స్వచ్ఛంద సేవకుల మహా ప్రక్షాళన', date: 'Nov 2026' },
  { outlet: 'The Hindu', headline: 'Citizens Lead The Charge To Reclaim Godavari Shoreline In Rajamahendravaram', date: 'Nov 2026' },
  { outlet: 'Andhra Jyothi', headline: 'కాలువలకు రక్షణ వలలు.. గోదావరిలోకి ప్లాస్టిక్ కట్టడి', date: 'Oct 2026' },
  { outlet: 'Sakshi District', headline: 'పర్యావరణ పరిరక్షణలో గోదావరి హరిత సేన విద్యార్థుల భాగస్వామ్యం', date: 'Oct 2026' }
];

const AnnouncementsNews = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'River Cleanliness', 'Tree Plantation', 'Youth & Education', 'Civic Recognition'];

  const filteredArticles = newsArticles.filter(item => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
                <Megaphone size={15} />
                PRESS & MEDIA COVERAGE
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Latest News & Ground Updates
              </h1>

              <p style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}>
                Frontline news dispatches, riverfront ecological milestones, youth chapter inaugurations, 
                and verified field developments across the River Godavari basin.
              </p>

              {/* Quick Stat Badges */}
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
                  <Newspaper size={16} />
                  48+ Bulletins Published
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
                  <Sparkles size={16} />
                  15+ Media Coverages
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
                  <Clock size={16} />
                  Weekly Field Despatches
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href="#news-feed"
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
                  Explore News Articles
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/announcements/press"
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
                  View Press Releases
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
                  src={godavariAnnouncementsNewsImg}
                  alt="Godavari River Field News and Public Communications"
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
                  <Newspaper size={13} />
                  ON-GROUND REPORTING
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
                      Independent News & Community Stories
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Rajahkundry Riverfront & Godavari Basin Chapters
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
                    PUBLIC DESPATCH
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section id="news-feed" style={{
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
          {/* Top Row: Search input and summary */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                Editorial News Dispatches ({filteredArticles.length})
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.2rem 0 0' }}>
                Filter reports by thematic area or search specific articles
              </p>
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search news articles..."
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
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.15s ease',
                  background: activeCategory === cat ? '#059669' : '#f1f5f9',
                  color: activeCategory === cat ? '#ffffff' : '#475569'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEWS ARTICLES GRID */}
      <section style={{
        padding: '1.5rem 1.5rem 4rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        {filteredArticles.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px dashed #cbd5e1'
          }}>
            <Megaphone size={36} style={{ color: '#94a3b8', margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#334155', margin: 0 }}>
              No articles found matching "{searchQuery}"
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.35rem' }}>
              Try adjusting your category filter or keyword search.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Category & Date Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem'
                  }}>
                    <span style={{
                      background: '#ecfdf5',
                      color: '#059669',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      border: '1px solid #a7f3d0'
                    }}>
                      {article.category}
                    </span>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      <Calendar size={13} />
                      {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.4,
                    marginBottom: '0.75rem'
                  }}>
                    {article.title}
                  </h3>

                  {/* Author & Read Time */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.75rem',
                    color: '#047857',
                    fontWeight: 600,
                    marginBottom: '0.85rem'
                  }}>
                    <span>{article.author}</span>
                    <span>•</span>
                    <span style={{ color: '#64748b', fontWeight: 500 }}>{article.readTime}</span>
                  </div>

                  {/* Summary */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {article.summary}
                  </p>

                  {/* Highlight bullets */}
                  <div style={{
                    background: '#f8fafc',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    marginBottom: '1.25rem',
                    borderLeft: '3px solid #059669'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', marginBottom: '0.35rem' }}>
                      KEY TAKEAWAY:
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#334155', lineHeight: 1.45 }}>
                      {article.highlights[0]}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA to read full story */}
                <button
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    background: '#ffffff',
                    border: '1px solid #059669',
                    color: '#059669',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
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
                  Read Full Story
                  <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. IN THE REGIONAL PRESS SECTION */}
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
              EXTERNAL COVERAGE
            </span>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', margin: '0.75rem 0 0.5rem' }}>
              In The Regional & National Press
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Highlights of leading print and broadcast journalists documenting our civic river restoration mission.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {mediaCoverages.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.65rem'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857' }}>
                    {item.outlet}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {item.date}
                  </span>
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  lineHeight: 1.45,
                  marginBottom: '0.75rem'
                }}>
                  "{item.headline}"
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  color: '#059669',
                  fontWeight: 600
                }}>
                  <ExternalLink size={13} />
                  Print & Digital Archive
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEDIA ENQUIRY & PRESS LIAISON DESK */}
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
              MEDIA LIAISON DESK
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.75rem', color: '#ffffff' }}>
              Are You a Journalist or Researcher?
            </h2>
            <p style={{ fontSize: '0.9375rem', opacity: 0.9, lineHeight: 1.6, margin: 0, maxWidth: '520px' }}>
              We facilitate field reporting visits, provide verified water quality datasets, 
              and arrange on-record interviews with our environmental coordinators and trustees.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.75rem', color: '#a7f3d0' }}>
              DIRECT MEDIA CONTACTS:
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <Mail size={16} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.875rem', color: '#f8fafc' }}>press@godavaringo.org</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Building2 size={16} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.875rem', color: '#f8fafc' }}>Media Desk, Godavari Bund Road, Rajahmundry</span>
            </div>

            <Link
              to="/announcements/press"
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
              Access Press Release Archive
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MODAL DIALOG FOR FULL ARTICLE */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '9999px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#475569'
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div style={{
              display: 'inline-block',
              background: '#ecfdf5',
              color: '#059669',
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
              border: '1px solid #a7f3d0'
            }}>
              {selectedArticle.category}
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.3,
              marginBottom: '0.75rem'
            }}>
              {selectedArticle.title}
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              fontSize: '0.8125rem',
              color: '#64748b',
              marginBottom: '1.5rem',
              borderBottom: '1px solid #f1f5f9',
              paddingBottom: '0.85rem'
            }}>
              <span><strong>By:</strong> {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            {/* Highlighted bullets in modal */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#047857', marginBottom: '0.5rem' }}>
                EXECUTIVE SUMMARY & KEY TAKEAWAYS:
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                {selectedArticle.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Full text with paragraph separation */}
            <div style={{
              fontSize: '0.9375rem',
              color: '#334155',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              marginBottom: '2rem'
            }}>
              {selectedArticle.fullContent}
            </div>

            {/* Modal Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem',
              borderTop: '1px solid #f1f5f9',
              paddingTop: '1rem'
            }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  padding: '0.6rem 1.25rem',
                  background: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AnnouncementsNews;

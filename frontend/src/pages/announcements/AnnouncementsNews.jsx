import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import godavariAnnouncementsNewsImg from '../../assets/godavari-announcements-news.jpg';
import newsCleanMilestoneImg from '../../assets/news-clean-milestone.jpg';
import newsSchoolEcoclubImg from '../../assets/news-school-ecoclub.jpg';
import newsTreeSurvivalImg from '../../assets/news-tree-survival.jpg';
import newsCivicAwardImg from '../../assets/news-civic-award.jpg';
import newsCanalBarrierImg from '../../assets/news-canal-barrier.jpg';
import newsTempleAllianceImg from '../../assets/news-temple-alliance.jpg';
import newsGalleryReportingImg from '../../assets/news-gallery-reporting.jpg';
import newsGalleryCommunityImg from '../../assets/news-gallery-community.jpg';
import newsGalleryPressmeetImg from '../../assets/news-gallery-pressmeet.jpg';

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
  X,
  Camera
} from 'lucide-react';

const newsArticles = [
  {
    id: 'news-1',
    title: 'Kotilingala Ghat Achieves Landmark 90-Day Continuous Clean Shoreline Milestone',
    category: 'River Cleanliness',
    date: '18 Nov 2026',
    readTime: '4 min read',
    author: 'Field Desk — Rajahmundry',
    image: newsCleanMilestoneImg,
    badge: 'Shoreline Milestone',
    summary: 'Kotilingala Ghat records 90 consecutive days of zero surface plastic through synchronized morning volunteer patrols.',
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
    image: newsSchoolEcoclubImg,
    badge: 'Youth Eco-Clubs',
    summary: 'Over 2,500 students across 40 chartered school chapters conduct bi-weekly water testing demonstrations and conservation patrols.',
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
    image: newsTreeSurvivalImg,
    badge: 'Bund Afforestation',
    summary: 'Monsoon audit confirms 92% survival across 2,500 native Neem and Pongamia saplings sheltered with bio-bamboo guards.',
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
    image: newsCivicAwardImg,
    badge: 'Civic Honor',
    summary: 'Rajahmundry City Municipal Corporation confers its highest civic award for transparent water audits and drain interception nets.',
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
    image: newsCanalBarrierImg,
    badge: 'Canal Netting',
    summary: 'All 22 primary municipal drainage canals entering Godavari now equipped with high-tensile marine nets to trap floating debris.',
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
    image: newsTempleAllianceImg,
    badge: 'Nirmalya Protocol',
    summary: 'Twelve historic riverside shrines sign accord to compost sacred organic floral offerings on-site instead of plastic disposal.',
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

const galleryHighlights = [
  {
    title: 'On-Ground Field Journalism',
    subtitle: 'Correspondents Documenting Shoreline Interceptor Operations',
    image: newsGalleryReportingImg,
    badge: 'Field Journalism'
  },
  {
    title: 'Citizen Town Hall Declaration',
    subtitle: 'Rajahmundry Merchants & Priests Joint Accord',
    image: newsGalleryCommunityImg,
    badge: 'Community Accord'
  },
  {
    title: 'Civic Commendation Ceremony',
    subtitle: 'Municipal Council Hall Annual Recognition',
    image: newsGalleryPressmeetImg,
    badge: 'Press Briefing'
  }
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
        padding: '3rem 1.5rem 2.5rem'
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
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                border: '1px solid #a7f3d0'
              }}>
                <Megaphone size={14} />
                <span>PRESS &amp; MEDIA COVERAGE</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 0.75rem',
                letterSpacing: '-0.025em'
              }}>
                Latest News &amp; Ground Updates
              </h1>

              <p style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 1.25rem',
                maxWidth: '540px'
              }}>
                Frontline news dispatches, riverfront ecological milestones, youth chapter inaugurations, 
                and verified field developments across the River Godavari basin.
              </p>

              {/* Quick Stat Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Newspaper size={14} />
                  48+ Bulletins Published
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Sparkles size={14} />
                  15+ Media Coverages
                </div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#047857'
                }}>
                  <Clock size={14} />
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
                    gap: '6px',
                    background: '#059669',
                    color: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    boxShadow: '0 2px 6px rgba(5, 150, 105, 0.2)'
                  }}
                >
                  <span>Explore News Articles</span>
                  <ArrowRight size={15} />
                </a>

                <Link
                  to="/announcements/press"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    color: '#059669',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.88rem',
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
                boxShadow: '0 10px 25px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}>
                <img
                  src={godavariAnnouncementsNewsImg}
                  alt="Godavari River Field News and Public Communications"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Overlay Top Tag */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(5, 150, 105, 0.95)',
                  color: '#ffffff',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
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
                  padding: '0.75rem 1.15rem',
                  background: '#ffffff',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a' }}>
                      Independent News &amp; Community Stories
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Rajahmundry Riverfront &amp; Godavari Basin Chapters
                    </div>
                  </div>
                  <span style={{
                    background: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '3px 9px',
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
        padding: '2rem 1.5rem 1rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
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
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Editorial News Dispatches ({filteredArticles.length})
              </h2>
              <p style={{ fontSize: '0.84rem', color: '#64748b', margin: '0.2rem 0 0' }}>
                Filter reports by thematic area or search specific articles
              </p>
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Search size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.85rem 0.5rem 2.3rem',
                  fontSize: '0.84rem',
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

      {/* 3. NEWS ARTICLES GRID WITH AUTHENTIC COVER PHOTOS & LESS MATTER */}
      <section style={{
        padding: '1rem 1.5rem 3.5rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Article Photo Header */}
                  <div style={{ position: 'relative', height: '175px', overflow: 'hidden' }}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#047857',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {article.category}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}>
                      {article.date}
                    </div>
                  </div>

                  {/* Body Content - LESS MATTER */}
                  <div style={{ padding: '1.15rem 1.25rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.76rem',
                      color: '#059669',
                      fontWeight: 600,
                      marginBottom: '0.45rem'
                    }}>
                      <span>{article.author}</span>
                      <span>•</span>
                      <span style={{ color: '#64748b' }}>{article.readTime}</span>
                    </div>

                    <h3 style={{
                      fontSize: '1.08rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      margin: '0 0 0.5rem'
                    }}>
                      {article.title}
                    </h3>

                    <p style={{
                      fontSize: '0.84rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      margin: '0 0 0.85rem'
                    }}>
                      {article.summary}
                    </p>

                    <div style={{
                      background: '#f8fafc',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      borderLeft: '3px solid #059669',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#047857', marginBottom: '0.2rem' }}>
                        KEY TAKEAWAY:
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.4 }}>
                        {article.highlights[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read Full Story Button */}
                <div style={{ padding: '0 1.25rem 1.15rem' }}>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 1rem',
                      background: '#ffffff',
                      border: '1px solid #059669',
                      color: '#059669',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
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
                    <span>Read Full Story</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
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
        padding: '3rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              background: '#ecfdf5',
              color: '#059669',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              border: '1px solid #a7f3d0'
            }}>
              EXTERNAL COVERAGE
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 1.95rem)', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.35rem' }}>
              In The Regional &amp; National Press
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Highlights of leading print and broadcast journalists documenting our civic river restoration mission.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem'
          }}>
            {mediaCoverages.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '1.15rem',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857' }}>
                    {item.outlet}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    {item.date}
                  </span>
                </div>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  lineHeight: 1.4,
                  marginBottom: '0.65rem'
                }}>
                  "{item.headline}"
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.74rem',
                  color: '#059669',
                  fontWeight: 600
                }}>
                  <ExternalLink size={12} />
                  Print &amp; Digital Archive
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIVE REPORTING FIELD GALLERY STRIP */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                <Camera size={14} />
                <span>Field Documentation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Live Field Reporting &amp; Media Moments
              </h2>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
              Live Citizen Records • Rajahmundry Operations
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {galleryHighlights.map((item, idx) => (
              <div key={idx} style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1rem 1.15rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {item.title}
                    </h4>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#047857',
                      background: '#ecfdf5',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      border: '1px solid #a7f3d0'
                    }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. MEDIA ENQUIRY & PRESS LIAISON DESK */}
      <section style={{
        padding: '3rem 1.5rem',
        maxWidth: '1180px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
          borderRadius: '16px',
          padding: '2.25rem',
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
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0 0 0.65rem', color: '#ffffff' }}>
              Are You a Journalist or Researcher?
            </h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: 1.6, margin: 0, maxWidth: '520px' }}>
              We facilitate field reporting visits, provide verified water quality datasets, 
              and arrange on-record interviews with our environmental coordinators and trustees.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1.25rem'
          }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.65rem', color: '#a7f3d0' }}>
              DIRECT MEDIA CONTACTS:
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <Mail size={15} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.84rem', color: '#f8fafc' }}>press@godavaringo.org</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <Building2 size={15} style={{ color: '#a7f3d0' }} />
              <span style={{ fontSize: '0.84rem', color: '#f8fafc' }}>Media Desk, Godavari Bund Road, Rajahmundry</span>
            </div>

            <Link
              to="/announcements/press"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#ffffff',
                color: '#047857',
                padding: '0.6rem 1.15rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              Access Press Release Archive
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. MODAL DIALOG FOR FULL ARTICLE */}
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

            {/* Modal Image */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: '240px',
              marginBottom: '1.25rem'
            }}>
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

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
              fontSize: '1.4rem',
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
              marginBottom: '1.25rem',
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
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#047857', marginBottom: '0.5rem' }}>
                EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS:
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.84rem', color: '#334155', lineHeight: 1.6 }}>
                {selectedArticle.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Full text with paragraph separation */}
            <div style={{
              fontSize: '0.9rem',
              color: '#334155',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              marginBottom: '1.5rem'
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

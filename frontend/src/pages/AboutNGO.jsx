import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Users, Award, TreeDeciduous, ArrowRight, MapPin, Calendar, Heart } from 'lucide-react';

const AboutNGO = () => {
  return (
    <div className="clean-page-wrapper">
      {/* Page Header */}
      <div className="clean-page-header">
        <div className="container">
          <span className="clean-badge">WHO WE ARE</span>
          <h1>About Godhavari Nadhi Paryavarana Parishubratha</h1>
          <p className="clean-page-sub">
            A community-driven NGO founded in Rajahmundry, Andhra Pradesh, dedicated to protecting
            and rejuvenating the sacred River Godavari.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-cards">
            <div className="clean-content-box">
              <div className="icon-badge bg-blue-tint">
                <Droplet size={24} className="text-primary" />
              </div>
              <h2>Our Story</h2>
              <p>
                Godhavari Nadhi Paryavarana Parishubratha was established in 2018 by a group of
                passionate environmentalists, retired water engineers, and community leaders from
                Rajahmundry, Andhra Pradesh. Alarmed by the increasing pollution levels in the
                Godavari River — one of India's longest and most sacred rivers — the founders came
                together to build a structured, community-led conservation movement.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                What started as a small weekend cleanup initiative at Kotilingala Ghat has grown
                into a registered NGO with over 480 active members spanning 12 districts along the
                Godavari basin.
              </p>
            </div>

            <div className="clean-content-box">
              <div className="icon-badge bg-green-tint">
                <MapPin size={24} className="text-green" />
              </div>
              <h2>Our Presence</h2>
              <p>
                Headquartered at Godavari Bund Road, Near Kotilingala Ghat, Rajahmundry, Andhra
                Pradesh, our volunteers operate across all major ghats along the Godavari — from
                Bhadrachalam to the estuary at Antarvedi.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', lineHeight: 2 }}>
                <li>📍 Rajahmundry (HQ) — Kotilingala &amp; Pushkar Ghats</li>
                <li>📍 Kovvur — River bank monitoring zone</li>
                <li>📍 Bhimavaram — Plastic trap maintenance</li>
                <li>📍 Narsapur — Estuary afforestation belt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="sub-tag">OUR IMPACT IN NUMBERS</span>
            <h2>What We've Achieved Since 2018</h2>
          </div>
          <div className="focus-grid-four mt-4">
            <div className="focus-card" style={{ textAlign: 'center' }}>
              <span className="focus-step" style={{ fontSize: '2rem' }}>480+</span>
              <h3>Active Members</h3>
              <p>Registered volunteers, trustees, and field coordinators across 12 districts.</p>
            </div>
            <div className="focus-card" style={{ textAlign: 'center' }}>
              <span className="focus-step" style={{ fontSize: '2rem' }}>148</span>
              <h3>Cleanliness Drives</h3>
              <p>Completed ghat cleanup operations since our first drive in January 2018.</p>
            </div>
            <div className="focus-card" style={{ textAlign: 'center' }}>
              <span className="focus-step" style={{ fontSize: '2rem' }}>92 T</span>
              <h3>Waste Removed</h3>
              <p>Metric tonnes of plastic, synthetic waste, and debris cleared from the river.</p>
            </div>
            <div className="focus-card" style={{ textAlign: 'center' }}>
              <span className="focus-step" style={{ fontSize: '2rem' }}>4,200</span>
              <h3>Trees Planted</h3>
              <p>Indigenous Neem, Peepal, and Pongamia trees along the river embankment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="sub-tag">COMMITTEE</span>
            <h2>Executive Leadership</h2>
            <p className="section-lead">The founding trustees and core coordinators driving our conservation work.</p>
          </div>
          <div className="clean-team-grid mt-4">
            <div className="clean-team-card">
              <div style={{
                width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#064e3b,#15803d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: '0 auto 1rem'
              }}>DR</div>
              <h3>Dr. K. V. Subba Rao</h3>
              <span className="team-role">President &amp; Chief Coordinator</span>
              <p className="team-desc">
                Environmental researcher and retired water resources engineer leading river conservation
                strategies in the Godavari delta since 2018.
              </p>
            </div>
            <div className="clean-team-card">
              <div style={{
                width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: '0 auto 1rem'
              }}>PL</div>
              <h3>Smt. P. Lakshmi Devi</h3>
              <span className="team-role">General Secretary</span>
              <p className="team-desc">
                Pioneering social organizer coordinating volunteer recruitment, youth participation,
                and community awareness initiatives across Rajahmundry.
              </p>
            </div>
            <div className="clean-team-card">
              <div style={{
                width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#b45309,#f59e0b)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: '0 auto 1rem'
              }}>MR</div>
              <h3>Sri M. Ramu Naidu</h3>
              <span className="team-role">Field &amp; Ghat Coordinator</span>
              <p className="team-desc">
                Directs on-ground cleanup logistics, safety equipment distribution, and biohazard
                containment during Sunday cleanliness drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Part of Our Journey</h2>
          <p className="section-lead" style={{ maxWidth: 520, margin: '0 auto 1.5rem' }}>
            Join 480+ volunteers protecting the Godavari. Every hand makes a difference.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-hero-primary-green" style={{ textDecoration: 'none' }}>
              <Heart size={16} />
              <span>Join As Member</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/about/mission" className="btn-hero-outline-green" style={{ textDecoration: 'none' }}>
              <span>Our Mission &amp; Vision →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutNGO;

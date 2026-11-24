import React, { useState } from 'react';
import { Image, Filter, Eye, MapPin, Calendar, Sparkles } from 'lucide-react';
import galleryCleanKotilingalaImg from '../assets/gallery-clean-kotilingala.jpg';
import galleryAwareSchoolImg from '../assets/gallery-aware-school.jpg';
import galleryPlantBundImg from '../assets/gallery-plant-bund.jpg';
import galleryConserveDowleswaramImg from '../assets/gallery-conserve-dowleswaram.jpg';
import galleryCleanSortingImg from '../assets/gallery-clean-sorting.jpg';
import galleryAwarePledgeImg from '../assets/gallery-aware-pledge.jpg';
import galleryPlantCorridorImg from '../assets/gallery-plant-corridor.jpg';
import galleryConserveSamplingImg from '../assets/gallery-conserve-sampling.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Kotilingala Ghat Weekend Cleanup Drive',
      category: 'Cleanliness Drives',
      location: 'Kotilingala Ghat, Rajahmundry',
      date: 'October 2026',
      image: galleryCleanKotilingalaImg,
    },
    {
      id: 2,
      title: 'School Youth River Stewardship Workshop',
      category: 'Awareness Programs',
      location: 'Pushkar Ghat Community Hall',
      date: 'September 2026',
      image: galleryAwareSchoolImg,
    },
    {
      id: 3,
      title: 'Mass Native Sapling Plantation on Riverbank',
      category: 'Tree Plantation',
      location: 'Godavari Bund Road',
      date: 'October 2026',
      image: galleryPlantBundImg,
    },
    {
      id: 4,
      title: 'Morning Ecological Survey at Dowleswaram',
      category: 'River Conservation',
      location: 'Dowleswaram Barrage',
      date: 'August 2026',
      image: galleryConserveDowleswaramImg,
    },
    {
      id: 5,
      title: 'Plastic Interception & Waste Segregation',
      category: 'Cleanliness Drives',
      location: 'Saraswathi Ghat',
      date: 'September 2026',
      image: galleryCleanSortingImg,
    },
    {
      id: 6,
      title: 'Paryavarana Community Pledge & Rally',
      category: 'Awareness Programs',
      location: 'Rajahmundry Municipal Grounds',
      date: 'July 2026',
      image: galleryAwarePledgeImg,
    },
    {
      id: 7,
      title: 'Riverbank Green Corridor Development',
      category: 'Tree Plantation',
      location: 'Kovvur Riverbank',
      date: 'August 2026',
      image: galleryPlantCorridorImg,
    },
    {
      id: 8,
      title: 'Pristine Riverfront Water Sampling',
      category: 'River Conservation',
      location: 'Havelock Bridge Viewpoint',
      date: 'September 2026',
      image: galleryConserveSamplingImg,
    },
  ];

  const categories = ['All', 'Cleanliness Drives', 'Awareness Programs', 'Tree Plantation', 'River Conservation'];

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="eco-page-container">
      {/* Subpage Header */}
      <div className="eco-subpage-hero">
        <div className="container">
          <div className="eco-green-accent-bar mb-2"></div>
          <h1 className="eco-subpage-title">Initiative Photo Gallery</h1>
          <p className="eco-subpage-desc">
            Visual documentation of citizen volunteer efforts, riverbank cleanups, educational programs, and ecological regeneration along the Godavari.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Category Filter Pills */}
        <div className="eco-filter-pills-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`eco-filter-pill ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="eco-gallery-grid">
          {filtered.map((item) => (
            <div key={item.id} className="eco-gallery-card">
              <div className="eco-gallery-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="eco-gallery-img"
                  loading="lazy"
                />
                <span className="eco-gallery-badge">{item.category}</span>
              </div>
              <div className="eco-gallery-content">
                <h3 className="eco-gallery-title" title={item.title}>
                  {item.title}
                </h3>
                <div className="eco-gallery-meta">
                  <div className="eco-gallery-meta-item">
                    <MapPin size={13} className="eco-gallery-icon" />
                    <span>{item.location}</span>
                  </div>
                  <div className="eco-gallery-meta-item">
                    <Calendar size={13} className="eco-gallery-icon" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

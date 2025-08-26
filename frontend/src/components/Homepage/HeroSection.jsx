import React from 'react';
import './HeroSection.css';
import '../../styles/button.css'
function HeroSection() {
  return (
    <section className="hero-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
        poster="/images/hero-poster.jpg"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className='container'>
          <div className="hero-content">
        <div className="hero-text-content">
        <h1 className="hero-title">
          Middle East’s Largest Trusted Partner for Audio Visual IT Business Solutions
        </h1>
        <p className="hero-subtitle">
          Established in 1995, we lead the region in distribution and integration of the latest AV and IT products and services.
        </p>
        <div className="hero-section-button">
        <a href="/contactus" className="button">
          Discover the Possibilities
        </a>
        </div>
      </div>
      <div className="hero-image-content">
        <img src="/images/30y+elements-years.webp" alt="" />
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;

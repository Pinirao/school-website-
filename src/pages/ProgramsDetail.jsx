import React from 'react';
import './ProgramsDetail.css';

const ProgramsDetail = () => {
  return (
    <div className="programs-detail">
      <div className="programs-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Programs</h1>
          <p>Explore the diverse programs we offer to nurture young minds.</p>
        </div>
      </div>
      <div className="programs-content">
        <h2>STEM Program</h2>
        <p>Advanced science, technology, engineering, and mathematics curriculum designed to challenge and inspire students.</p>
        <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="STEM Program" />

        <h2>Arts Academy</h2>
        <p>Comprehensive visual and performing arts education to foster creativity and self-expression.</p>
        <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Arts Academy" />

        <h2>Athletics</h2>
        <p>Competitive sports programs with professional coaching to develop teamwork and leadership skills.</p>
        <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Athletics" />

        <h2>Global Studies</h2>
        <p>International perspective and language immersion to prepare students for a globalized world.</p>
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Global Studies" />
      </div>
    </div>
  );
};

export default ProgramsDetail;
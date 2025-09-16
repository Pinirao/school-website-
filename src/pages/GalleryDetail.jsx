import React from 'react';
import './GalleryDetail.css';

const GalleryDetail = () => {
  return (
    <div className="gallery-detail">
      <div className="gallery-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>School Gallery</h1>
          <p>Explore moments captured from our vibrant school life.</p>
        </div>
      </div>
      <div className="gallery-content">
        <div className="gallery-grid">
          {[
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1524178232409-7c3c7a34c1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1498247041572-2c4dceeefbb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          ].map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
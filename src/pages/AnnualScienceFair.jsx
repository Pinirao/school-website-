import React, { useState, useEffect } from 'react';
import './AnnualScienceFair.css';

const AnnualScienceFair = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // First useEffect for initial animation
  useEffect(() => {
    setIsVisible(true);
    
    // Cleanup animation when component unmounts
    return () => setIsVisible(false);
  }, []);

  // Second useEffect for timeline scroll animation
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const projects = [
    { id: 1, title: "Robotic Arm", category: "Robotics", description: "A fully functional robotic arm controlled by AI" },
    { id: 2, title: "Renewable Energy", category: "Environmental Science", description: "Innovative solar panel technology" },
    { id: 3, title: "Chemical Reactions", category: "Chemistry", description: "Interactive demonstration of exotic chemical reactions" },
    { id: 4, title: "Microbial Fuel Cells", category: "Biology", description: "Generating electricity from bacteria" },
    { id: 5, title: "Virtual Reality Lab", category: "Computer Science", description: "Immersive educational experiences through VR" },
    { id: 6, title: "Astronomy Project", category: "Physics", description: "Mapping celestial bodies with homemade telescope" }
  ];

  const events = [
    { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome address by the principal" },
    { time: "10:00 AM", title: "Project Demonstrations", description: "Students showcase their innovations" },
    { time: "12:00 PM", title: "Keynote Speech", description: "Dr. Jane Smith on 'Future of Innovation'" },
    { time: "1:30 PM", title: "Hands-on Workshops", description: "Interactive sessions for visitors" },
    { time: "3:00 PM", title: "Awards Ceremony", description: "Recognition of outstanding projects" }
  ];

  return (
    <div className={`science-fair-container ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section with 3D effect */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-word title-word-1">Annual</span>
            <span className="title-word title-word-2">Science</span>
            <span className="title-word title-word-3">Fair</span>
          </h1>
          <p className="hero-subtitle">Showcasing Student Innovations and Creativity</p>
          <div className="hero-details">
            <div className="detail-item">
              <span className="icon-calendar">📅</span>
              <span>October 15, 2023</span>
            </div>
            <div className="detail-item">
              <span className="icon-location">📍</span>
              <span>School Auditorium</span>
            </div>
          </div>
          <button className="cta-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <h2 className="section-title">Event Schedule</h2>
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">{event.time}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section">
        <h2 className="section-title">Event Location</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="location-pin"></div>
            <div className="pulse-effect"></div>
          </div>
          <div className="map-info">
            <h3>School Auditorium</h3>
            <p>123 Education Street, Knowledge City</p>
            <p>Parking available in Lots B and C</p>
            <p>Wheelchair accessible entrance on north side</p>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="registration-section">
        <div className="registration-content">
          <h2>Register to Attend</h2>
          <p>Secure your spot at the most anticipated science event of the year</p>
          <button className="cta-button">Register Now</button>
        </div>
      </section>
    </div>
  );
};

export default AnnualScienceFair;
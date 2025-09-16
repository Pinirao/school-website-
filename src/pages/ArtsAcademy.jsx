import React, { useState } from 'react';
import './ArtsAcademy.css';

const ArtsAcademy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the program
  const programData = {
    overview: {
      title: "Arts Academy",
      description: "Our Arts Academy is a vibrant community where creativity flourishes and artistic expression is nurtured. We provide comprehensive training in visual and performing arts, helping students develop their unique artistic voice while building technical skills.",
      highlights: [
        "Professional-grade studios and performance spaces",
        "Master classes with visiting artists",
        "Exhibition and performance opportunities",
        "Interdisciplinary arts collaborations"
      ]
    },
    disciplines: {
      title: "Arts Disciplines",
      description: "Our comprehensive curriculum covers a wide range of artistic disciplines with specialized tracks.",
      categories: [
        {
          name: "Visual Arts",
          items: ["Painting & Drawing", "Sculpture", "Photography", "Digital Media", "Printmaking"]
        },
        {
          name: "Performing Arts",
          items: ["Theater & Drama", "Dance", "Music Performance", "Musical Theater", "Directing"]
        },
        {
          name: "Media Arts",
          items: ["Film Production", "Animation", "Graphic Design", "Audio Production", "Game Design"]
        },
        {
          name: "Art History & Theory",
          items: ["Art Criticism", "Aesthetics", "Cultural Studies", "Curatorial Studies", "Art Conservation"]
        }
      ]
    },
    facilities: {
      title: "Arts Facilities & Studios",
      description: "Our campus features state-of-the-art facilities designed to inspire creativity and support artistic development.",
      features: [
        "Professional black box theater",
        "Digital media lab with industry-standard software",
        "Ceramics studio with kilns",
        "Dance studios with sprung floors",
        "Music practice rooms and recording studio",
        "Gallery space for student exhibitions"
      ]
    }
  };

  return (
    <div className="arts-academy">
      {/* Hero Section */}
      <section className="program-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-content">
          <h1>Arts Academy</h1>
          <p>Where creativity flourishes and artistic expression transforms lives</p>
          <button className="cta-button">Audition Information</button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stat-item">
            <h3>14</h3>
            <p>Artistic Disciplines</p>
          </div>
          <div className="stat-item">
            <h3>6</h3>
            <p>Performance Spaces</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>College Acceptance</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Annual Productions</p>
          </div>
        </div>
      </section>

      {/* Program Navigation */}
      <nav className="program-nav">
        <div className="container">
          <button 
            className={activeTab === 'overview' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={activeTab === 'disciplines' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('disciplines')}
          >
            Disciplines
          </button>
          <button 
            className={activeTab === 'facilities' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('facilities')}
          >
            Facilities
          </button>
          <button 
            className={activeTab === 'productions' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('productions')}
          >
            Productions
          </button>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="program-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              {activeTab === 'overview' && (
                <div className="tab-content">
                  <h2>{programData.overview.title}</h2>
                  <p>{programData.overview.description}</p>
                  <div className="highlight-cards">
                    {programData.overview.highlights.map((item, index) => (
                      <div key={index} className="highlight-card">
                        <div className="card-icon">🎨</div>
                        <h4>{item}</h4>
                      </div>
                    ))}
                  </div>
                  
                  <div className="faculty-section">
                    <h3>Distinguished Arts Faculty</h3>
                    <p>Our instructors are working artists and industry professionals who bring real-world experience to the classroom.</p>
                    <div className="faculty-grid">
                      <div className="faculty-card">
                        <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Prof. Elena Martinez</h4>
                        <p>Director of Visual Arts</p>
                        <span>Exhibited internationally</span>
                      </div>
                      <div className="faculty-card">
                        <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Dr. James Wilson</h4>
                        <p>Theater Department Chair</p>
                        <span>Broadway credits</span>
                      </div>
                      <div className="faculty-card">
                        <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Ms. Sophia Chen</h4>
                        <p>Dance Program Director</p>
                        <span>Former professional dancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'disciplines' && (
                <div className="tab-content">
                  <h2>{programData.disciplines.title}</h2>
                  <p>{programData.disciplines.description}</p>
                  <div className="disciplines-grid">
                    {programData.disciplines.categories.map((category, index) => (
                      <div key={index} className="discipline-category">
                        <h3>{category.name}</h3>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'facilities' && (
                <div className="tab-content">
                  <h2>{programData.facilities.title}</h2>
                  <p>{programData.facilities.description}</p>
                  <div className="facilities-gallery">
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Black Box Theater</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Art Studios</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Recording Studio</h4>
                    </div>
                  </div>
                  <div className="facilities-list">
                    <h3>Facility Features</h3>
                    <ul>
                      {programData.facilities.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'productions' && (
                <div className="tab-content">
                  <h2>Student Productions & Exhibitions</h2>
                  <div className="productions-grid">
                    <div className="production-card">
                      <div className="production-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="production-content">
                        <h4>Spring Musical: "Into the Woods"</h4>
                        <p>Our talented theater department presents this Sondheim classic with original set designs by visual arts students.</p>
                        <div className="production-details">
                          <span>April 15-17, 2023</span>
                          <span>Main Theater</span>
                        </div>
                      </div>
                    </div>
                    <div className="production-card">
                      <div className="production-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="production-content">
                        <h4>Annual Student Art Exhibition</h4>
                        <p>Featuring works from all visual arts disciplines, including painting, sculpture, photography, and digital media.</p>
                        <div className="production-details">
                          <span>May 5-30, 2023</span>
                          <span>Academy Gallery</span>
                        </div>
                      </div>
                    </div>
                    <div className="production-card">
                      <div className="production-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="production-content">
                        <h4>Dance Ensemble: "Movements"</h4>
                        <p>Original choreography by students and faculty in our annual contemporary dance performance.</p>
                        <div className="production-details">
                          <span>March 22-24, 2023</span>
                          <span>Dance Theater</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="program-sidebar">
              <div className="sidebar-card">
                <h3>Program Details</h3>
                <ul>
                  <li><strong>Program Type:</strong> Pre-Professional</li>
                  <li><strong>Duration:</strong> 4 years</li>
                  <li><strong>Audition Required:</strong> Yes</li>
                  <li><strong>Portfolio Review:</strong> Required for visual arts</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Upcoming Events</h3>
                <div className="event-item">
                  <h4>Fall Auditions</h4>
                  <p>September 15-16 • 9:00 AM - 4:00 PM</p>
                </div>
                <div className="event-item">
                  <h4>Gallery Opening</h4>
                  <p>October 5 • 6:00 PM - 8:00 PM</p>
                </div>
                <div className="event-item">
                  <h4>Winter Concert</h4>
                  <p>December 10 • 7:00 PM</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Career Pathways</h3>
                <div className="pathway-item">
                  <h4>Professional Artist</h4>
                  <p>Exhibitions, commissions, residencies</p>
                </div>
                <div className="pathway-item">
                  <h4>Arts Education</h4>
                  <p>Teaching, arts administration</p>
                </div>
                <div className="pathway-item">
                  <h4>Design Industries</h4>
                  <p>Graphic design, UX/UI, animation</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>Student Work Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2>Student & Alumni Experiences</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Arts Academy gave me the technical skills and creative confidence to pursue my passion. The mentorship I received from working artists was invaluable in preparing my portfolio for art school."</p>
              </div>
              <div className="testimonial-author">
                <div className="student-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>Maya Johnson</h4>
                  <p>Class of 2021, BFA Painting</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a musical theater student, I appreciated the interdisciplinary approach. We collaborated with visual arts students on sets, with dancers on movement, and it created a truly holistic arts education."</p>
              </div>
              <div className="testimonial-author">
                <div className="student-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>David Chen</h4>
                  <p>Class of 2020, Musical Theater Major</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="program-cta">
        <div className="container">
          <h2>Begin Your Artistic Journey</h2>
          <p>Join our community of creators and innovators</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Schedule an Audition</button>
            <button className="cta-button secondary">View Portfolio Requirements</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsAcademy;
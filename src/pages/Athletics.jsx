import React, { useState } from 'react';
import './Athletics.css';

const Athletics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the program
  const programData = {
    overview: {
      title: "Athletics Program",
      description: "Our Athletics program is designed to develop student-athletes who excel both on the field and in the classroom. We focus on building character, leadership, and teamwork while achieving competitive excellence.",
      highlights: [
        "State-of-the-art training facilities",
        "Professional coaching staff",
        "Competitive league participation",
        "Academic support for student-athletes"
      ]
    },
    sports: {
      title: "Sports Offered",
      description: "We offer a wide range of competitive sports programs for all skill levels.",
      categories: [
        {
          name: "Fall Sports",
          items: ["Football", "Soccer", "Cross Country", "Volleyball"]
        },
        {
          name: "Winter Sports",
          items: ["Basketball", "Swimming", "Wrestling", "Indoor Track"]
        },
        {
          name: "Spring Sports",
          items: ["Baseball", "Softball", "Track & Field", "Tennis"]
        }
      ]
    },
    facilities: {
      title: "Athletic Facilities",
      description: "Our campus features world-class athletic facilities for training and competition.",
      features: [
        "Olympic-sized swimming pool",
        "Indoor basketball arena with seating for 2,000",
        "Artificial turf football/soccer field",
        "All-weather track",
        "Weight training and fitness center",
        "Indoor batting cages"
      ]
    }
  };

  return (
    <div className="athletics">
      {/* Hero Section */}
      <section className="program-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-content">
          <h1>Athletics</h1>
          <p>Developing champions in sports and life through competitive programs and professional coaching</p>
          <button className="cta-button">Try Out Information</button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stat-item">
            <h3>24</h3>
            <p>Varsity Teams</p>
          </div>
          <div className="stat-item">
            <h3>15</h3>
            <p>State Championships</p>
          </div>
          <div className="stat-item">
            <h3>85%</h3>
            <p>Student-Athlete GPA 3.0+</p>
          </div>
          <div className="stat-item">
            <h3>40+</h3>
            <p>College Scholarships</p>
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
            className={activeTab === 'sports' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('sports')}
          >
            Sports
          </button>
          <button 
            className={activeTab === 'facilities' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('facilities')}
          >
            Facilities
          </button>
          <button 
            className={activeTab === 'schedule' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
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
                        <div className="card-icon">🏆</div>
                        <h4>{item}</h4>
                      </div>
                    ))}
                  </div>
                  
                  <div className="coaching-section">
                    <h3>Professional Coaching Staff</h3>
                    <p>Our coaches are experienced professionals who are dedicated to developing student-athletes both on and off the field.</p>
                    <div className="coach-grid">
                      <div className="coach-card">
                        <div className="coach-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Coach Michael Johnson</h4>
                        <p>Head of Athletics</p>
                        <span>15 years experience</span>
                      </div>
                      <div className="coach-card">
                        <div className="coach-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Coach Sarah Williams</h4>
                        <p>Basketball Head Coach</p>
                        <span>Former Division I Player</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sports' && (
                <div className="tab-content">
                  <h2>{programData.sports.title}</h2>
                  <p>{programData.sports.description}</p>
                  <div className="sports-grid">
                    {programData.sports.categories.map((category, index) => (
                      <div key={index} className="sport-category">
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
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Stadium Complex</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Indoor Arena</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Fitness Center</h4>
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

              {activeTab === 'schedule' && (
                <div className="tab-content">
                  <h2>Upcoming Games & Events</h2>
                  <div className="schedule-table">
                    <div className="schedule-header">
                      <span>Date</span>
                      <span>Event</span>
                      <span>Location</span>
                      <span>Time</span>
                    </div>
                    <div className="schedule-row">
                      <span>Oct 15</span>
                      <span>Football vs. Rival High School</span>
                      <span>Home Stadium</span>
                      <span>7:00 PM</span>
                    </div>
                    <div className="schedule-row">
                      <span>Oct 18</span>
                      <span>Volleyball Tournament</span>
                      <span>Away</span>
                      <span>4:00 PM</span>
                    </div>
                    <div className="schedule-row">
                      <span>Oct 22</span>
                      <span>Basketball Season Opener</span>
                      <span>Home Arena</span>
                      <span>6:30 PM</span>
                    </div>
                    <div className="schedule-row">
                      <span>Oct 25</span>
                      <span>Swimming Meet</span>
                      <span>City Aquatic Center</span>
                      <span>3:00 PM</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="program-sidebar">
              <div className="sidebar-card">
                <h3>Upcoming Games</h3>
                <div className="game-item">
                  <h4>Football vs. Rival HS</h4>
                  <p>Oct 15 • 7:00 PM</p>
                  <span className="game-location">Home Stadium</span>
                </div>
                <div className="game-item">
                  <h4>Volleyball Tournament</h4>
                  <p>Oct 18 • 4:00 PM</p>
                  <span className="game-location">Away</span>
                </div>
                <div className="game-item">
                  <h4>Basketball Season Opener</h4>
                  <p>Oct 22 • 6:30 PM</p>
                  <span className="game-location">Home Arena</span>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Achievements</h3>
                <div className="achievement-item">
                  <h4>State Champions 2023</h4>
                  <p>Girls Basketball</p>
                </div>
                <div className="achievement-item">
                  <h4>Regional Champions</h4>
                  <p>Boys Soccer</p>
                </div>
                <div className="achievement-item">
                  <h4>Academic Excellence Award</h4>
                  <p>Athletics Department</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Contact Athletics</h3>
                <p>Athletics Department</p>
                <p>Email: athletics@school.edu</p>
                <p>Phone: (123) 456-7890</p>
                <p>Office Hours: 8:00 AM - 5:00 PM</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2>Student Athlete Experiences</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Being part of the basketball team taught me discipline, time management, and how to work with others. These skills have been invaluable in both college and my career."</p>
              </div>
              <div className="testimonial-author">
                <div className="athlete-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>James Wilson</h4>
                  <p>Class of 2021, Basketball Captain</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>The coaching staff pushed me to be my best both academically and athletically. Thanks to their support, I earned a scholarship to compete at the collegiate level."</p>
              </div>
              <div className="testimonial-author">
                <div className="athlete-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>Sophia Martinez</h4>
                  <p>Class of 2022, Soccer Scholarship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="program-cta">
        <div className="container">
          <h2>Join Our Winning Tradition</h2>
          <p>Become part of our athletic community and develop skills that last a lifetime</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Tryout Information</button>
            <button className="cta-button secondary">Contact Coach</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Athletics;
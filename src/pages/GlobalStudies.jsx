import React, { useState } from 'react';
import './GlobalStudies.css';

const GlobalStudies = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the program
  const programData = {
    overview: {
      title: "Global Studies Program",
      description: "Our Global Studies program is designed to cultivate globally competent citizens through interdisciplinary learning, cultural immersion, and international experiences. Students develop critical perspectives on global issues while gaining practical skills for international careers.",
      highlights: [
        "Interdisciplinary curriculum combining politics, economics, and culture",
        "Language immersion opportunities",
        "Study abroad programs in 20+ countries",
        "Internships with international organizations"
      ]
    },
    curriculum: {
      title: "Curriculum Structure",
      description: "Our comprehensive curriculum balances theoretical knowledge with practical application.",
      courses: [
        { name: "Global Politics", credits: 3 },
        { name: "International Economics", credits: 3 },
        { name: "Cross-Cultural Communication", credits: 3 },
        { name: "World Languages (choose from 8 options)", credits: 6 },
        { name: "Global Environmental Issues", credits: 3 },
        { name: "Study Abroad Program", credits: 12 }
      ]
    },
    opportunities: {
      title: "Career Opportunities",
      description: "Graduates of our Global Studies program pursue diverse international careers.",
      careers: [
        "International Diplomacy",
        "Global Business Management",
        "Non-Profit and NGO Leadership",
        "International Journalism",
        "Cultural Exchange Coordination"
      ]
    }
  };

  return (
    <div className="global-studies">
      {/* Hero Section */}
      <section className="program-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-content">
          <h1>Global Studies</h1>
          <p>Developing globally-minded leaders with international perspective and cultural fluency</p>
          <button className="cta-button">Apply Now</button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stat-item">
            <h3>20+</h3>
            <p>Partner Countries</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Graduate Employment</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p>Language Options</p>
          </div>
          <div className="stat-item">
            <h3>12:1</h3>
            <p>Student-Faculty Ratio</p>
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
            className={activeTab === 'curriculum' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('curriculum')}
          >
            Curriculum
          </button>
          <button 
            className={activeTab === 'opportunities' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('opportunities')}
          >
            Opportunities
          </button>
          <button 
            className={activeTab === 'faculty' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('faculty')}
          >
            Faculty
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
                        <div className="card-icon">🌍</div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="tab-content">
                  <h2>{programData.curriculum.title}</h2>
                  <p>{programData.curriculum.description}</p>
                  <div className="curriculum-list">
                    {programData.curriculum.courses.map((course, index) => (
                      <div key={index} className="course-item">
                        <h4>{course.name}</h4>
                        <span>{course.credits} credits</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'opportunities' && (
                <div className="tab-content">
                  <h2>{programData.opportunities.title}</h2>
                  <p>{programData.opportunities.description}</p>
                  <ul className="career-list">
                    {programData.opportunities.careers.map((career, index) => (
                      <li key={index}>{career}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'faculty' && (
                <div className="tab-content">
                  <h2>Distinguished Faculty</h2>
                  <p>Our Global Studies faculty are renowned experts in their fields with extensive international experience.</p>
                  <div className="faculty-grid">
                    <div className="faculty-card">
                      <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                      <h4>Dr. Elena Rodriguez</h4>
                      <p>International Relations Specialist</p>
                    </div>
                    <div className="faculty-card">
                      <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Prof. James Chen</h4>
                      <p>Global Economics Expert</p>
                    </div>
                    <div className="faculty-card">
                      <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                      <h4>Dr. Amina Diallo</h4>
                      <p>Cultural Studies Department Chair</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="program-sidebar">
              <div className="sidebar-card">
                <h3>Program Details</h3>
                <ul>
                  <li><strong>Degree Offered:</strong> Bachelor of Arts</li>
                  <li><strong>Duration:</strong> 4 years</li>
                  <li><strong>Language Requirement:</strong> 2 years of study</li>
                  <li><strong>Study Abroad:</strong> Required (1 semester)</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Upcoming Events</h3>
                <div className="event-item">
                  <h4>Global Studies Info Session</h4>
                  <p>October 15, 2023 • 4:00 PM</p>
                </div>
                <div className="event-item">
                  <h4>Study Abroad Fair</h4>
                  <p>November 3, 2023 • 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Contact Us</h3>
                <p>Department of Global Studies</p>
                <p>Email: global.studies@university.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2>Student Experiences</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Global Studies program transformed my perspective. My semester in Japan gave me confidence and skills I use every day in my international business career."</p>
              </div>
              <div className="testimonial-author">
                <h4>Maria Johnson</h4>
                <p>Class of 2021, Business Analyst</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The faculty's expertise and the diverse student community created an incredible learning environment. The internship opportunities were career-changing."</p>
              </div>
              <div className="testimonial-author">
                <h4>David Kim</h4>
                <p>Class of 2020, NGO Program Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="program-cta">
        <div className="container">
          <h2>Begin Your Global Journey</h2>
          <p>Join our diverse community of globally-minded students and faculty</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Request Information</button>
            <button className="cta-button secondary">Schedule a Visit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalStudies;
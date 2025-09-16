import React, { useState, useEffect } from 'react';
import './StandardsDetail.css';

const StandardsDetail = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      
      // Reset active section after a delay
      setTimeout(() => setActiveSection(null), 2000);
    }
  };

  return (
    <div className="standards-detail">
      {/* Hero Section */}
      <div className="standards-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Commitment to Excellence</h1>
          <p>Discover how we maintain the highest standards in education and student development</p>
          <button className="cta-button" onClick={() => scrollToSection('academic')}>Explore Our Standards</button>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="quick-nav">
        <div className="nav-container">
          <button 
            className={activeSection === 'academic' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => scrollToSection('academic')}
          >
            Academic Excellence
          </button>
          <button 
            className={activeSection === 'support' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => scrollToSection('support')}
          >
            Student Support
          </button>
          <button 
            className={activeSection === 'facilities' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => scrollToSection('facilities')}
          >
            World-Class Facilities
          </button>
          <button 
            className={activeSection === 'community' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => scrollToSection('community')}
          >
            Community Engagement
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="standards-content">
        {/* Academic Excellence Section */}
        <section id="academic" className="content-section">
          <div className="section-header">
            <h2>Academic Excellence</h2>
            <div className="section-divider"></div>
            <p>Our curriculum is meticulously designed to challenge students while fostering critical thinking, creativity, and problem-solving skills essential for success in the 21st century.</p>
          </div>
          
          <div className="vertical-content">
            <div className="vertical-image">
              <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Academic Excellence" />
            </div>
            
            <div className="features-grid vertical-layout">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <div className="feature-content">
                  <h3>Rigorous Curriculum</h3>
                  <p>Our courses are designed to meet and exceed national education standards, preparing students for higher education and beyond.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👩‍🏫</div>
                <div className="feature-content">
                  <h3>Expert Faculty</h3>
                  <p>Our teachers are subject matter experts with advanced degrees and years of experience in their respective fields.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔬</div>
                <div className="feature-content">
                  <h3>STEM Focus</h3>
                  <p>We emphasize Science, Technology, Engineering, and Mathematics to prepare students for future career opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Support Section */}
        <section id="support" className="content-section">
          <div className="section-header">
            <h2>Comprehensive Student Support</h2>
            <div className="section-divider"></div>
            <p>We provide personalized support systems to ensure every student achieves their full potential, both academically and personally.</p>
          </div>
          
          <div className="vertical-content">
            <div className="vertical-image">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Student Support" />
            </div>
            
            <div className="features-grid vertical-layout">
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <div className="feature-content">
                  <h3>Academic Counseling</h3>
                  <p>Individualized guidance to help students navigate their educational journey and make informed decisions about their future.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <div className="feature-content">
                  <h3>Mental Health Resources</h3>
                  <p>Professional counselors available to support students' emotional well-being and mental health.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <div className="feature-content">
                  <h3>Learning Support</h3>
                  <p>Specialized programs for students with different learning needs, ensuring everyone has the opportunity to succeed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="content-section">
          <div className="section-header">
            <h2>World-Class Facilities</h2>
            <div className="section-divider"></div>
            <p>Our campus features state-of-the-art facilities designed to enhance the learning experience and provide students with the best resources available.</p>
          </div>
          
          <div className="vertical-content">
            <div className="vertical-image">
              <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="School Facilities" />
            </div>
            
            <div className="features-grid vertical-layout">
              <div className="feature-card">
                <div className="feature-icon">🧪</div>
                <div className="feature-content">
                  <h3>Modern Laboratories</h3>
                  <p>Fully equipped science and computer labs for hands-on learning experiences.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <div className="feature-content">
                  <h3>Extensive Library</h3>
                  <p>A vast collection of physical and digital resources to support research and learning.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚽</div>
                <div className="feature-content">
                  <h3>Athletic Complex</h3>
                  <p>Top-tier sports facilities to promote physical health and teamwork.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎭</div>
                <div className="feature-content">
                  <h3>Performance Spaces</h3>
                  <p>Auditoriums and music rooms for artistic expression and development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section id="community" className="content-section">
          <div className="section-header">
            <h2>Community Engagement</h2>
            <div className="section-divider"></div>
            <p>We believe in fostering strong connections with our local and global community through various outreach programs and partnerships.</p>
          </div>
          
          <div className="vertical-content">
            <div className="vertical-image">
              <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Community Engagement" />
            </div>
            
            <div className="features-grid vertical-layout">
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h3>Service Learning</h3>
                  <p>Programs that combine classroom instruction with meaningful community service.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍👩‍👧‍👦</div>
                <div className="feature-content">
                  <h3>Parent Involvement</h3>
                  <p>Opportunities for parents to actively participate in school activities and decision-making processes.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <div className="feature-content">
                  <h3>Global Partnerships</h3>
                  <p>Collaborations with institutions worldwide to provide diverse cultural experiences for our students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>98%</h3>
            <p>University Acceptance Rate</p>
          </div>
          <div className="stat-item">
            <h3>12:1</h3>
            <p>Student-Teacher Ratio</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Advanced Placement Courses</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Faculty with Advanced Degrees</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Community Says</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <div className="testimonial-text">
              "The academic rigor and supportive environment helped me develop both intellectually and personally."
            </div>
            <div className="testimonial-author">
              <h4>Sarah Johnson</h4>
              <p>Alumna, Class of 2020</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text">
              "As a parent, I appreciate the school's commitment to maintaining high standards while nurturing each student's individuality."
            </div>
            <div className="testimonial-author">
              <h4>Michael Chen</h4>
              <p>Parent</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text">
              "Teaching here allows me to implement innovative educational approaches while being supported by excellent resources."
            </div>
            <div className="testimonial-author">
              <h4>Dr. Emily Rodriguez</h4>
              <p>Science Department Chair</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="standards-cta">
        <h2>Experience Our Standards Firsthand</h2>
        <p>Schedule a visit to our campus or speak with our admissions team to learn more about how we maintain excellence in education.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Schedule a Tour</button>
          <button className="cta-button secondary">Contact Admissions</button>
        </div>
      </div>
    </div>
  );
};

export default StandardsDetail;
import React, { useEffect } from 'react';
import './InnovativeLearning.css';

const InnovativeLearning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="innovative-learning">
      {/* Hero Section */}
      <section className="il-hero-section">
        <div className="il-hero-content">
          <div className="il-hero-text">
            <h1 className="il-hero-title">Innovative Learning</h1>
            <p className="il-hero-subtitle">Integrating cutting-edge technology to prepare students for the digital future.</p>
            <div className="il-hero-buttons">
              <button className="il-primary-btn">Explore Programs</button>
              <button className="il-secondary-btn">View Tech Tools</button>
            </div>
          </div>
          <div className="il-hero-visual">
            <div className="floating-tech">
              <div className tech-icon tablet>
                <i className="fas fa-tablet-alt"></i>
              </div>
              <div className="tech-icon code">
                <i className="fas fa-code"></i>
              </div>
              <div className="tech-icon vr">
                <i className="fas fa-vr-cardboard"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="il-approach-section">
        <div className="container">
          <h2 className="il-section-title">Our Technological Approach</h2>
          <p className="il-section-subtitle">We leverage advanced educational technology to create engaging, effective learning experiences that prepare students for tomorrow's challenges.</p>
          
          <div className="il-approach-grid">
            <div className="il-approach-card">
              <div className="il-card-header">
                <div className="il-card-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Smart Boards</h3>
              </div>
              <p>Interactive displays that transform traditional lessons into dynamic, collaborative learning experiences with touch capability and digital ink.</p>
              <div className="il-card-stats">
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Classroom Coverage</span>
                </div>
              </div>
            </div>
            
            <div className="il-approach-card">
              <div className="il-card-header">
                <div className="il-card-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>1:1 Device Programs</h3>
              </div>
              <p>Each student receives their own device, ensuring equal access to digital resources and enabling personalized learning pathways.</p>
              <div className="il-card-stats">
                <div className="stat">
                  <span className="stat-number">1:1</span>
                  <span className="stat-label">Student-Device Ratio</span>
                </div>
              </div>
            </div>
            
            <div className="il-approach-card">
              <div className="il-card-header">
                <div className="il-card-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3>Interactive Learning</h3>
              </div>
              <p>Gamified platforms and VR experiences that make complex concepts tangible and increase student engagement through immersive technology.</p>
              <div className="il-card-stats">
                <div className="stat">
                  <span className="stat-number">87%</span>
                  <span className="stat-label">Engagement Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Showcase Section */}
      <section className="il-tech-showcase">
        <div className="container">
          <h2 className="il-section-title">Technology in Action</h2>
          
          <div className="tech-showcase-container">
            <div className="tech-feature">
              <div className="tech-demo">
                <div className="device-mockup">
                  <div className="screen-content">
                    <div className="code-editor">
                      <div className="editor-header">
                        <div className="window-controls">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <span>script.js</span>
                      </div>
                      <div className="code-lines">
                        <div className="code-line"><span className="code-keyword">function</span> <span className="code-function">calculate</span>() {'{'}</div>
                        <div className="code-line">&nbsp;&nbsp;<span className="code-keyword">return</span> innovation + creativity;</div>
                        <div className="code-line">{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-description">
                <h3>Coding from an Early Age</h3>
                <p>Our students begin developing computational thinking skills in elementary school through age-appropriate programming platforms and robotics kits.</p>
                <ul className="tech-benefits">
                  <li><i className="fas fa-check-circle"></i> Problem-solving skills development</li>
                  <li><i className="fas fa-check-circle"></i> Creative expression through technology</li>
                  <li><i className="fas fa-check-circle"></i> Foundation for future STEM learning</li>
                </ul>
              </div>
            </div>
            
            <div className="tech-feature reversed">
              <div className="tech-demo">
                <div className="vr-demo">
                  <div className="vr-headset">
                    <i className="fas fa-vr-cardboard"></i>
                  </div>
                  <div className="vr-environment">
                    <div className="vr-object planet"></div>
                    <div className="vr-object satellite"></div>
                    <div className="vr-object astronaut"></div>
                  </div>
                </div>
              </div>
              <div className="tech-description">
                <h3>Immersive VR Learning</h3>
                <p>Virtual reality transports students to historical sites, inside human cells, or even to distant planets, making abstract concepts tangible and memorable.</p>
                <ul className="tech-benefits">
                  <li><i className="fas fa-check-circle"></i> Enhanced retention through experience</li>
                  <li><i className="fas fa-check-circle"></i> Virtual field trips to inaccessible locations</li>
                  <li><i className="fas fa-check-circle"></i> Safe simulation of dangerous environments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="il-stats-section">
        <div className="container">
          <h2 className="il-section-title">Measuring Impact</h2>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">42%</span>
              </div>
              <h3>Improved Problem-Solving</h3>
              <p>Students using tech tools show significantly better critical thinking abilities</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">1.7x</span>
              </div>
              <h3>Engagement Multiplier</h3>
              <p>Technology-integrated lessons nearly double student participation</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">93%</span>
              </div>
              <h3>Digital Literacy</h3>
              <p>Of our students demonstrate advanced digital skills by graduation</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">78%</span>
              </div>
              <h3>Collaboration Increase</h3>
              <p>Technology facilitates more peer-to-peer learning opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="il-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Innovative Learning?</h2>
            <p>Schedule a tour to see our technology-integrated classrooms in action and discover how we're preparing students for the future.</p>
            <button className="il-primary-btn">Schedule a Visit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeLearning;
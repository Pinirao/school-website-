import React, { useState } from 'react';
import './StemProgram.css';

const StemProgram = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the program
  const programData = {
    overview: {
      title: "STEM Program",
      description: "Our STEM program integrates Science, Technology, Engineering, and Mathematics through project-based learning, cutting-edge technology, and real-world applications. We prepare students for the challenges of tomorrow's technological landscape.",
      highlights: [
        "State-of-the-art laboratories and makerspaces",
        "Industry partnerships and mentorship programs",
        "Competitions and science fairs",
        "Research opportunities with university professors"
      ]
    },
    disciplines: {
      title: "STEM Disciplines",
      description: "Our comprehensive curriculum covers all aspects of STEM education with specialized tracks.",
      categories: [
        {
          name: "Science",
          items: ["Advanced Biology", "Chemistry Research", "Physics Applications", "Environmental Science"]
        },
        {
          name: "Technology",
          items: ["Computer Programming", "Data Science", "Artificial Intelligence", "Cybersecurity"]
        },
        {
          name: "Engineering",
          items: ["Robotics", "Civil Engineering", "Electrical Engineering", "Biomedical Engineering"]
        },
        {
          name: "Mathematics",
          items: ["Advanced Calculus", "Statistics", "Discrete Mathematics", "Mathematical Modeling"]
        }
      ]
    },
    facilities: {
      title: "STEM Facilities & Labs",
      description: "Our campus features cutting-edge facilities designed for innovation and discovery.",
      features: [
        "3D printing and prototyping lab",
        "Computer science and robotics lab",
        "Biotechnology and genetics laboratory",
        "Physics and engineering workshop",
        "Digital media and design studio",
        "Collaborative innovation space"
      ]
    }
  };

  return (
    <div className="stem-program">
      {/* Hero Section */}
      <section className="program-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }}>
        <div className="hero-content">
          <h1>STEM Program</h1>
          <p>Innovate, Create, and Solve Tomorrow's Challenges Through Science, Technology, Engineering, and Mathematics</p>
          <button className="cta-button">Explore Opportunities</button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stat-item">
            <h3>92%</h3>
            <p>STEM Career Placement</p>
          </div>
          <div className="stat-item">
            <h3>15</h3>
            <p>National Awards</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p>Research Labs</p>
          </div>
          <div className="stat-item">
            <h3>27</h3>
            <p>Industry Partners</p>
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
            className={activeTab === 'projects' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
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
                        <div className="card-icon">🔬</div>
                        <h4>{item}</h4>
                      </div>
                    ))}
                  </div>
                  
                  <div className="faculty-section">
                    <h3>Distinguished STEM Faculty</h3>
                    <p>Our instructors are industry professionals and researchers who bring real-world experience to the classroom.</p>
                    <div className="faculty-grid">
                      <div className="faculty-card">
                        <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Dr. Elena Rodriguez</h4>
                        <p>Director of STEM Programs</p>
                        <span>PhD in Biomedical Engineering</span>
                      </div>
                      <div className="faculty-card">
                        <div className="faculty-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                        <h4>Prof. James Chen</h4>
                        <p>Computer Science Department</p>
                        <span>Former Tech Industry Executive</span>
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
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Robotics Lab</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Biotechnology Lab</h4>
                    </div>
                    <div className="facility-item">
                      <div className="facility-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <h4>Engineering Workshop</h4>
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

              {activeTab === 'projects' && (
                <div className="tab-content">
                  <h2>Student Projects & Research</h2>
                  <div className="projects-grid">
                    <div className="project-card">
                      <div className="project-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="project-content">
                        <h4>Autonomous Drone Delivery System</h4>
                        <p>Engineering students developed a drone capable of delivering medical supplies to remote areas using AI navigation.</p>
                        <div className="project-tags">
                          <span>Engineering</span>
                          <span>AI</span>
                          <span>Robotics</span>
                        </div>
                      </div>
                    </div>
                    <div className="project-card">
                      <div className="project-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="project-content">
                        <h4>Renewable Energy Monitoring</h4>
                        <p>Science students created a system to monitor and optimize solar panel efficiency using IoT sensors.</p>
                        <div className="project-tags">
                          <span>Environmental Science</span>
                          <span>IoT</span>
                          <span>Data Analysis</span>
                        </div>
                      </div>
                    </div>
                    <div className="project-card">
                      <div className="project-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                      <div className="project-content">
                        <h4>Machine Learning for Medical Diagnosis</h4>
                        <p>Computer science students developed an AI algorithm to assist in early detection of certain medical conditions.</p>
                        <div className="project-tags">
                          <span>Computer Science</span>
                          <span>Machine Learning</span>
                          <span>Healthcare</span>
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
                  <li><strong>Program Type:</strong> Advanced Placement</li>
                  <li><strong>Duration:</strong> 4 years</li>
                  <li><strong>Prerequisites:</strong> Advanced Math & Science</li>
                  <li><strong>Capstone Project:</strong> Required</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Upcoming Events</h3>
                <div className="event-item">
                  <h4>STEM Fair 2023</h4>
                  <p>November 15-17 • 9:00 AM - 4:00 PM</p>
                </div>
                <div className="event-item">
                  <h4>Robotics Competition</h4>
                  <p>December 5 • 10:00 AM - 6:00 PM</p>
                </div>
                <div className="event-item">
                  <h4>Industry Partner Day</h4>
                  <p>January 12 • 1:00 PM - 5:00 PM</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Career Pathways</h3>
                <div className="pathway-item">
                  <h4>Data Scientist</h4>
                  <p>Average Salary: $120,000</p>
                </div>
                <div className="pathway-item">
                  <h4>Biomedical Engineer</h4>
                  <p>Average Salary: $95,000</p>
                </div>
                <div className="pathway-item">
                  <h4>Software Developer</h4>
                  <p>Average Salary: $110,000</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Partnerships Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Industry & University Partnerships</h2>
          <div className="partners-grid">
            <div className="partner-logo">
              <i className="fas fa-microchip"></i>
              <p>Tech Innovations Inc.</p>
            </div>
            <div className="partner-logo">
              <i className="fas fa-flask"></i>
              <p>BioResearch Labs</p>
            </div>
            <div className="partner-logo">
              <i className="fas fa-robot"></i>
              <p>Robotics United</p>
            </div>
            <div className="partner-logo">
              <i className="fas fa-university"></i>
              <p>State University</p>
            </div>
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
                <p>"The STEM program gave me the foundation I needed to pursue a career in artificial intelligence. The research opportunities and mentorship were invaluable in preparing me for university."</p>
              </div>
              <div className="testimonial-author">
                <div className="student-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>Alex Johnson</h4>
                  <p>Class of 2021, Computer Science Major</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Through the biotechnology track, I was able to work on real research projects that eventually got published. This experience set me apart in college applications and scholarship opportunities."</p>
              </div>
              <div className="testimonial-author">
                <div className="student-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')" }}></div>
                <div>
                  <h4>Sophia Martinez</h4>
                  <p>Class of 2022, Biotechnology Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="program-cta">
        <div className="container">
          <h2>Start Your STEM Journey</h2>
          <p>Join our community of innovators and problem-solvers</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Apply Now</button>
            <button className="cta-button secondary">Schedule a Tour</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StemProgram;
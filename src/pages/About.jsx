import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Layout from '../components/Layout/Layout';
import './About.css';

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // 3D effect on cards
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    const missionCards = document.querySelectorAll('.mission-card, .value-card, .team-card');
    
    missionCards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      missionCards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Principal",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "James Wilson",
      role: "Vice Principal",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Emily Chen",
      role: "Academic Dean",
      image: "https://randomuser.me/api/portraits/women/47.jpg"
    }
  ];

  // Animation for leadership cards
  const teamCardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-team-card');
          }
        });
      },
      { threshold: 0.2 }
    );

    teamCardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      teamCardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Layout>
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1 className="hero-title">About Our School</h1>
            <p className="hero-subtitle">Shaping futures through excellence in education</p>
            <div className="hero-image">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="mission-section">
          <div className="container">
            <h2 className="section-title">Our Mission & Vision</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To provide a nurturing environment that encourages academic excellence, creativity, and character development, preparing students to become responsible global citizens.</p>
              </div>
              <div className="mission-card">
                <div className="card-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>To be a leading educational institution that innovates teaching methodologies and fosters lifelong learning, critical thinking, and holistic development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="values-section">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Integrity</h3>
                <p>We uphold the highest standards of honesty, ethics, and moral principles in all our actions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">👥</div>
                <h3>Respect</h3>
                <p>We value diversity, treat everyone with dignity, and foster an inclusive community.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe in the power of teamwork between students, teachers, parents, and the community.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We embrace creative thinking and continuously seek improved approaches to education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="history-section">
          <div className="container">
            <h2 className="section-title">Our History</h2>
            <div className="history-content">
              <div className="history-text">
                <p>Founded in 1995, our school began with a simple vision: to create an educational environment where every student could thrive. What started as a small institution with just 50 students has now grown into a renowned educational center serving over 1,200 students annually.</p>
                <p>Throughout our journey, we've maintained our commitment to academic excellence while adapting to the changing educational landscape. Our beautiful campus now features state-of-the-art facilities, including science laboratories, sports complexes, and dedicated arts spaces.</p>
              </div>
              <div className="history-image">
                <div className="floating-school"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="team-section">
          <div className="container">
            <h2 className="section-title">Our Leadership</h2>
            <div className="team-grid">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="team-card"
                  ref={el => teamCardRefs.current[index] = el}
                  style={{ transitionDelay: `${index * 0.15 + 0.1}s` }}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Join Our Educational Community</h2>
            <p>Discover how our school can help your child achieve their full potential. Schedule a visit or apply for admission today.</p>
            <div className="cta-buttons">
              <button 
                className="btn-primary" 
                onClick={() => navigate('/schedule-tour')} // Navigate to the SchedulePage
              >
                Schedule a Tour
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/application-form')} // Navigate to the correct route
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
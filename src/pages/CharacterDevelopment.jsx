import React, { useState, useEffect } from 'react';
import './CharacterDevelopment.css';

const CharacterDevelopment = () => {
  const [activeTab, setActiveTab] = useState('values');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Integrity",
      description: "We teach students to be honest and have strong moral principles in all situations.",
      icon: "✓"
    },
    {
      title: "Respect",
      description: "Students learn to value others, appreciate differences, and treat everyone with dignity.",
      icon: "🙏"
    },
    {
      title: "Responsibility",
      description: "We empower students to take ownership of their actions and commitments.",
      icon: "⭐"
    },
    {
      title: "Compassion",
      description: "Developing empathy and concern for others is central to our approach.",
      icon: "❤️"
    }
  ];

  const programs = [
    {
      title: "Leadership Workshops",
      description: "Interactive sessions that build confidence and team management skills.",
      image: "👨‍💼"
    },
    {
      title: "Community Service",
      description: "Hands-on projects that connect students with local community needs.",
      image: "🤝"
    },
    {
      title: "Peer Mentoring",
      description: "Structured programs where students guide and support each other.",
      image: "👥"
    },
    {
      title: "Reflection Sessions",
      description: "Guided activities that encourage self-awareness and personal growth.",
      image: "🧠"
    }
  ];

  const testimonials = [
    {
      quote: "The mentorship program helped me discover my leadership potential and become more confident.",
      author: "Alex Johnson, Grade 11"
    },
    {
      quote: "Community service projects taught me the value of empathy and making a difference.",
      author: "Sophia Martinez, Grade 10"
    },
    {
      quote: "I learned that true character means doing the right thing even when no one is watching.",
      author: "Michael Chen, Grade 12"
    }
  ];

  return (
    <div className={`character-development-page ${isVisible ? 'visible' : ''}`}>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Character Development</h1>
          <p>Shaping tomorrow's leaders through values, mentorship, and personal growth</p>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </div>

      <div className="content-container">
        <section className="intro-section">
          <h2>Building Character, Shaping Futures</h2>
          <p>At our school, we believe that academic excellence and character development go hand in hand. Our comprehensive approach integrates values education into all aspects of school life, creating an environment where students can thrive as ethical, compassionate individuals.</p>
        </section>

        <section className="tabs-section">
          <div className="tabs-header">
            <button 
              className={activeTab === 'values' ? 'active' : ''} 
              onClick={() => setActiveTab('values')}
            >
              Core Values
            </button>
            <button 
              className={activeTab === 'programs' ? 'active' : ''} 
              onClick={() => setActiveTab('programs')}
            >
              Our Programs
            </button>
            <button 
              className={activeTab === 'testimonials' ? 'active' : ''} 
              onClick={() => setActiveTab('testimonials')}
            >
              Student Stories
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'values' && (
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'programs' && (
              <div className="programs-grid">
                {programs.map((program, index) => (
                  <div key={index} className="program-card">
                    <div className="program-image">{program.image}</div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <button className="learn-more-btn">Learn More</button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                    <p className="testimonial-author">- {testimonial.author}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Character Development Journey</h2>
            <p>Become part of a community that values personal growth and ethical development as much as academic achievement.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Learn About Enrollment</button>
              <button className="cta-btn secondary">Contact Our Mentors</button>
            </div>
          </div>
        </section>
      </div>

      <button onClick={() => window.history.back()} className="modern-btn back-btn">
        <span className="btn-icon">←</span> Go Back
      </button>
    </div>
  );
};

export default CharacterDevelopment;
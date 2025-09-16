import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);
  const navigate = useNavigate();

  // Sample data for different sections
  const heroSlides = [
    {
      image: "https://pixahive.com/wp-content/uploads/2020/10/Happy-kids-showing-victory-sign-150053-pixahive-1024x683.jpg",
      title: "Welcome to Our Prestigious School",
      description: "Excellence in education since 1985"
    },
    {
      image: "https://www.chennaipublicschool.com/thirumazhisai/gallery/annualsportsmeet/17.webp",
      title: "Shaping Future Leaders",
      description: "Our students achieve remarkable success"
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "State-of-the-Art Facilities",
      description: "Learning environment designed for success"
    }
  ];

  const events = [
    { id: 1, title: "Annual Science Fair", date: "2023-10-15", description: "Showcasing student innovations" },
    { id: 2, title: "Sports Day", date: "2023-11-05", description: "Annual inter-house competition" },
    { id: 3, title: "Parent-Teacher Meeting", date: "2023-10-22", description: "Discuss student progress" }
  ];

  const galleryImages = [
    "https://media.istockphoto.com/id/1366797961/photo/interior-views-of-an-empty-japanese-style-classroom.jpg?b=1&s=170667a&w=0&k=20&c=9VXDSLlX2Y-TiuO8AKSLKaN0-TKYZ0CAZWj1dhAckkQ=",
    "https://imgcdn.stablediffusionweb.com/2024/5/6/1ed5dbdd-6be8-421c-82cb-19077ff1784d.jpg",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://cdn.pixabay.com/photo/2021/09/05/17/32/school-6600051_960_720.jpg",
    "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];

  const awards = [
    { year: "2023", title: "Best School in Academic Excellence" },
    { year: "2022", title: "National Sports Championship Winners" },
    { year: "2021", title: "Green School Award for Environmental Initiatives" },
    { year: "2020", title: "Technology Innovation in Education Award" }
  ];

  const testimonials = [
    { name: "John Doe", role: "Parent", text: "This school has transformed my child into a confident and curious learner." },
    { name: "Jane Smith", role: "Alumni", text: "The foundation I received here prepared me perfectly for university and beyond." },
    { name: "Robert Johnson", role: "Community Leader", text: "The school's commitment to holistic education is truly commendable." }
  ];

  const posters = [
    "https://www.ptotoday.com/images/articles/body/0319-school-events-you-love-most-family-dance-body.jpg",
    "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
  ];

  const stats = [
    { number: "98%", label: "Graduation Rate" },
    { number: "25+", label: "Advanced Courses" },
    { number: "15", label: "Sports Teams" },
    { number: "100+", label: "College Acceptances" }
  ];

  const programs = [
    { title: "Stem Program", icon: "🧪", description: "Advanced science, technology, engineering, and mathematics curriculum" },
    { title: "Arts Academy", icon: "🎨", description: "Comprehensive visual and performing arts education" },
    { title: "Athletics", icon: "⚽", description: "Competitive sports programs with professional coaching" },
    { title: "Global Studies", icon: "🌎", description: "International perspective and language immersion" }
  ];

  // Auto-advance the hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Layout>
      <div className="home">
        {/* Hero Section with Slider */}
        <section className="hero-section">
          <div className="hero-slider">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  display: index === currentSlide ? 'block' : 'none',
                }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1 data-aos="fade-down" data-aos-delay="300">{slide.title}</h1>
                  <p data-aos="fade-up" data-aos-delay="500">{slide.description}</p>
                  <button 
                    className="cta-button" 
                    data-aos="zoom-in" 
                    data-aos-delay="700" 
                    onClick={() => navigate('/about')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {heroSlides.map((_, idx) => (
              <div
                key={idx}
                className={`slider-dot${currentSlide === idx ? ' active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll Down</span>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="container">
            <h2 className="section-title" data-aos="fade-right">About Our School</h2>
            <div className="about-content">
              <div className="about-text" data-aos="fade-right">
                <p>Founded in 1985, our school has been a beacon of excellence in education for over three decades. We believe in nurturing young minds through a balanced approach to academics, sports, and arts.</p>
                <p>Our dedicated faculty and state-of-the-art facilities provide an environment where students can discover their passions and develop their unique talents.</p>
                <button 
                  className="modern-btn" 
                  onClick={() => navigate('/about')}
                >
                  Discover Our History
                </button>
              </div>
              <div className="about-image" data-aos="fade-left" data-aos-delay="300">
                <div className="image-container">
                  <img src="https://www.kingshousesportsground.co.uk/wp-content/uploads/2022/02/Tennis-Centre.jpg" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="programs-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Our Programs</h2>
            <div className="programs-grid">
              {programs.map((program, index) => (
                <div 
                  key={index} 
                  className="program-card"
                  data-aos="flip-left"
                  data-aos-delay={index * 150}
                  onClick={() => {
                    if (program.title === "Arts Academy") {
                      navigate("/programs/arts");
                    } else if (program.title === "Stem Program") {
                      navigate("/programs/stem");
                    } else if (program.title === "Athletics") {
                      navigate("/programs/athletics");
                    } else if (program.title === "Global Studies") {
                      navigate("/programs/global-studies");
                    }
                  }}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="program-icon">{program.icon}</div>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                    </div>
                    <div className="card-back">
                      <p>Explore more about our {program.title} program and how it benefits students.</p>
                      <button className="modern-btn">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="standards-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-right">Our High Standards</h2>
            <div className="standards-grid">
              <div 
                className="standard-card" 
                data-aos="fade-up" 
                data-aos-delay="0"
                onClick={() => navigate('/standards/academic-excellence')}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h3>Academic Excellence</h3>
                    <div className="standard-icon">📚</div>
                  </div>
                  <div className="card-back">
                    <p>Our curriculum is designed to challenge students and foster critical thinking skills with a 15:1 student-teacher ratio.</p>
                    <button className="modern-btn">Learn More</button>
                  </div>
                </div>
              </div>
              <div 
                className="standard-card" 
                data-aos="fade-up" 
                data-aos-delay="150"
                onClick={() => navigate('/character-development')}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h3>Character Development</h3>
                    <div className="standard-icon">🌟</div>
                  </div>
                  <div className="card-back">
                    <p>We emphasize values like integrity, respect, and responsibility in all aspects of school life through our mentorship programs.</p>
                    <button className="modern-btn">Learn More</button>
                  </div>
                </div>
              </div>
              <div 
                className="standard-card" 
                data-aos="fade-up" 
                data-aos-delay="300"
                onClick={() => navigate('/standards/innovative-learning')}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h3>Innovative Learning</h3>
                    <div className="standard-icon">💡</div>
                  </div>
                  <div className="card-back">
                    <p>Our classrooms integrate technology to prepare students for the digital future with smart boards and 1:1 device programs.</p>
                    <button className="modern-btn">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Upcoming Events</h2>
            <div className="events-list">
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="event-card"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="event-date">
                    <span className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                    <span className="event-day">{new Date(event.date).getDate()}</span>
                  </div>
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p>
                      Join us for the {event.title}, where students and faculty come together to celebrate creativity, teamwork, and innovation. 
                      Don't miss this exciting opportunity to witness the best of our school community!
                    </p>
                  </div>
                  <div className="event-poster">
                    <img 
                      src={posters[index] || "https://media.istockphoto.com/photos/parent-teacher-meeting-picture-id1209443032?k=20&m=1209443032&s=612x612&w=0&h=iMRSU4PzQ8V71cYH5dn9yNu90aMaqELeQVXLhY2745c="} 
                      alt={`${event.title} Poster`} 
                      className="event-poster-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">School Gallery</h2>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="gallery-image-container">
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="awards-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-right">Our Achievements</h2>
            <div className="awards-timeline">
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="award-item"
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                >
                  <div className="award-dot"></div>
                  <div className="award-content">
                    <span className="award-year">{award.year}</span>
                    <span className="award-title">{award.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">What People Say About Us</h2>
            <div className="testimonials-carousel">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-card"
                  data-aos="flip-left"
                  data-aos-delay={index * 200}
                >
                  <div className="testimonial-quote">“</div>
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
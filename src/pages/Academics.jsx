import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './Academics.css';

// Academic Program Detail Component
export const ProgramDetail = () => {
  const { id } = useParams();
  
  const academicPrograms = [
    {
      id: 1,
      title: "Elementary School",
      description: "Our elementary program focuses on foundational skills in literacy, numeracy, and social development.",
      grades: "Grades 1-5",
      features: ["Interactive Learning", "STEM Introduction", "Arts Integration"],
      color: "#4f9da6",
      fullDescription: "Our Elementary School program provides a nurturing environment where young learners develop foundational skills across all subject areas. We emphasize hands-on learning experiences that foster curiosity and creativity. Our curriculum is designed to build strong literacy and numeracy skills while promoting social-emotional development. Students engage in project-based learning that connects classroom concepts to real-world applications.",
      image: "https://educationsnapshots.com/wp-content/uploads/sites/4/2019/12/lake-elementary-school-7-1200x801.jpg",
      highlights: [
        "Differentiated instruction to meet individual needs",
        "Technology integration in all classrooms",
        "Specialist teachers for art, music, and physical education",
        "After-school enrichment programs",
        "Parent involvement opportunities"
      ],
      contact: "elementary@school.edu"
    },
    {
      id: 2,
      title: "Middle School",
      description: "Our middle school curriculum challenges students with advanced coursework while supporting adolescent development.",
      grades: "Grades 6-8",
      features: ["Project-Based Learning", "Technology Integration", "Exploratory Courses"],
      color: "#ff8a5c",
      fullDescription: "Our Middle School program is designed to support students through the critical adolescent years while providing academic challenges that prepare them for high school. We offer a balanced curriculum that emphasizes core subjects while allowing students to explore various electives. Our advisory program ensures each student has a staff member who knows them well and can provide academic and personal guidance.",
      image: "https://media.istockphoto.com/id/918576744/photo/education-is-the-key-to-our-future.webp?b=1&s=170667a&w=0&k=20&c=kezZ64V37kZ6kYA69H9eoW9AKUXcFEM3aVvomcFAzVI=",
      highlights: [
        "Team teaching approach with subject specialists",
        "1:1 technology program with school-provided devices",
        "Leadership and community service opportunities",
        "Comprehensive arts program with multiple electives",
        "Competitive athletics program"
      ],
      contact: "middleschool@school.edu"
    },
    {
      id: 3,
      title: "High School",
      description: "Our comprehensive high school prepares students for college and career with diverse academic pathways.",
      grades: "Grades 9-12",
      features: ["AP Courses", "Career Technical Education", "College Counseling"],
      color: "#7b3c95",
      fullDescription: "Our High School offers a rigorous college preparatory curriculum with multiple pathways to meet diverse student interests and goals. Students can choose from Advanced Placement courses, career technical education programs, and a wide variety of electives. Our comprehensive counseling program supports students in academic planning, college applications, and career exploration.",
      image: "https://c8.alamy.com/comp/2PNWNJX/portrait-of-high-school-students-2PNWNJX.jpg",
      highlights: [
        "25+ Advanced Placement courses",
        "Dual enrollment opportunities with local colleges",
        "Comprehensive college counseling program",
        "Career technical education pathways in high-demand fields",
        "Extracurricular activities including athletics, arts, and clubs"
      ],
      contact: "highschool@school.edu"
    }
  ];

  const program = academicPrograms.find(p => p.id === parseInt(id));

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <Layout>
      <div className="program-detail-page">
        <div className="detail-hero" style={{ backgroundColor: program.color }}>
          <div className="container">
            <h1>{program.title}</h1>
            <p>{program.grades}</p>
          </div>
        </div>

        <div className="container">
          <div className="program-detail-content">
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            
            <div className="program-overview">
              <h2>Program Overview</h2>
              <p>{program.fullDescription}</p>
            </div>
            
            <div className="program-highlights">
              <h2>Program Highlights</h2>
              <ul>
                {program.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="program-features">
              <h2>Key Features</h2>
              <div className="features-grid">
                {program.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <h3>{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="program-contact">
              <h2>Contact Information</h2>
              <p>For more information about our {program.title} program, please contact:</p>
              <p className="contact-email">{program.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Curriculum Detail Component
export const CurriculumDetail = () => {
  const { grade } = useParams();
  
  const curriculumData = [
    {
      grade: "elementary",
      title: "Elementary School Curriculum",
      focus: "Foundational Skills",
      description: "Our elementary curriculum builds strong foundations in core academic areas while fostering creativity and social development.",
      subjects: [
        {
          name: "Reading & Writing",
          description: "Comprehensive literacy program focusing on phonics, comprehension, and writing skills across genres."
        },
        {
          name: "Mathematics",
          description: "Hands-on mathematics program developing number sense, operations, and problem-solving strategies."
        },
        {
          name: "Science",
          description: "Inquiry-based science curriculum exploring life, earth, and physical sciences through experimentation."
        },
        {
          name: "Social Studies",
          description: "Integrated social studies program examining communities, geography, history, and civics."
        },
        {
          name: "Arts",
          description: "Comprehensive arts education including visual arts, music, and movement."
        },
        {
          name: "Physical Education",
          description: "Developmentally appropriate physical education promoting health, fitness, and motor skills."
        }
      ],
      color: "#4f9da6"
    },
    {
      grade: "middleschool",
      title: "Middle School Curriculum",
      focus: "Exploratory Learning",
      description: "Our middle school curriculum challenges students with rigorous academics while allowing exploration of various subjects and interests.",
      subjects: [
        {
          name: "English Language Arts",
          description: "Comprehensive literacy program focusing on analytical reading, writing, and communication skills."
        },
        {
          name: "Algebra",
          description: "Foundational algebraic concepts preparing students for higher-level mathematics."
        },
        {
          name: "Life Sciences",
          description: "In-depth study of biological sciences including cells, genetics, and ecosystems."
        },
        {
          name: "World History",
          description: "Survey of world civilizations from ancient times to the modern era."
        },
        {
          name: "Electives",
          description: "Exploratory courses in technology, arts, world languages, and other interest areas."
        },
        {
          name: "Health Education",
          description: "Comprehensive health education covering physical, mental, and social well-being."
        }
      ],
      color: "#ff8a5c"
    },
    {
      grade: "highschool",
      title: "High School Curriculum",
      focus: "College & Career Preparation",
      description: "Our high school curriculum offers rigorous college preparatory courses and career pathways to prepare students for post-secondary success.",
      subjects: [
        {
          name: "Advanced Mathematics",
          description: "Advanced math courses including Calculus, Statistics, and other college-level mathematics."
        },
        {
          name: "Laboratory Sciences",
          description: "Advanced science courses with laboratory components in Biology, Chemistry, Physics, and Environmental Science."
        },
        {
          name: "Social Sciences",
          description: "In-depth study of history, government, economics, and psychology."
        },
        {
          name: "World Languages",
          description: "Comprehensive language programs in Spanish, French, Mandarin, and other languages."
        },
        {
          name: "AP Courses",
          description: "College-level Advanced Placement courses across all subject areas."
        },
        {
          name: "Career Technical Education",
          description: "Career-focused pathways in technology, health sciences, business, and other high-demand fields."
        }
      ],
      color: "#7b3c95"
    }
  ];

  const curriculum = curriculumData.find(c => c.grade === grade);

  if (!curriculum) {
    return <div>Curriculum not found</div>;
  }

  return (
    <Layout>
      <div className="curriculum-detail-page">
        <div className="detail-hero" style={{ backgroundColor: curriculum.color }}>
          <div className="container">
            <h1>{curriculum.title}</h1>
            <p>Focus: {curriculum.focus}</p>
          </div>
        </div>

        <div className="container">
          <div className="curriculum-overview">
            <h2>Curriculum Overview</h2>
            <p>{curriculum.description}</p>
          </div>

          <div className="subjects-detail">
            <h2>Subject Areas</h2>
            <div className="subjects-grid">
              {curriculum.subjects.map((subject, index) => (
                <div key={index} className="subject-detail-card">
                  <h3>{subject.name}</h3>
                  <p>{subject.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="curriculum-resources">
            <h2>Curriculum Resources</h2>
            <div className="resources-list">
              <div className="resource-item">
                <h3>Curriculum Guides</h3>
                <p>Detailed scope and sequence for each subject area</p>
              </div>
              <div className="resource-item">
                <h3>Standards Alignment</h3>
                <p>Our curriculum aligns with state and national standards</p>
              </div>
              <div className="resource-item">
                <h3>Assessment Information</h3>
                <p>Learn about our approach to measuring student progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Faculty Detail Component
export const FacultyDetail = () => {
  const { id } = useParams();
  
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Science Department Chair",
      education: "Ph.D. in Biology, Stanford University",
      experience: "15 years teaching experience",
      bio: "Dr. Johnson specializes in molecular biology and has published several research papers in scientific journals. She is passionate about making science accessible to all students and leads our school's award-winning science fair program.",
      image: "https://img.freepik.com/premium-photo/man-sitting-front-classroom-with-group-children_763111-287711.jpg",
      courses: ["Biology", "AP Biology", "Research Methods"],
      email: "sjohnson@school.edu",
      office: "Room 205",
      phone: "555-1234"
    },
    {
      id: 2,
      name: "Mr. David Chen",
      position: "Mathematics Instructor",
      education: "M.S. in Mathematics, MIT",
      experience: "12 years teaching experience",
      bio: "Mr. Chen brings real-world application to mathematics through his previous work as an engineer. He coaches the math olympiad team and has led students to multiple state championships.",
      image: "https://img.freepik.com/premium-photo/teacher-leading-classroom-full-attentive-students_731930-176621.jpg",
      courses: ["Algebra II", "Calculus", "AP Statistics"],
      email: "dchen@school.edu",
      office: "Room 312",
      phone: "555-5678"
    },
    {
      id: 3,
      name: "Ms. Maria Rodriguez",
      position: "Humanities Department",
      education: "M.A. in Literature, University of Chicago",
      experience: "10 years teaching experience",
      bio: "Ms. Rodriguez is passionate about diverse voices in literature and leads the school's multicultural literature club. She has developed several innovative curriculum units that connect classic literature to contemporary issues.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/028/678/230/small_2x/female-teacher-near-board-generate-ai-photo.jpg",
      courses: ["American Literature", "World Literature", "AP English"],
      email: "mrodriguez@school.edu",
      office: "Room 118",
      phone: "555-9012"
    }
  ];

  const faculty = facultyMembers.find(f => f.id === parseInt(id));

  if (!faculty) {
    return <div>Faculty member not found</div>;
  }

  return (
    <Layout>
      <div className="faculty-detail-page">
        <div className="container">
          <div className="faculty-detail-header">
            <div className="faculty-image">
              <img src={faculty.image} alt={faculty.name} />
            </div>
            <div className="faculty-basic-info">
              <h1>{faculty.name}</h1>
              <p className="position">{faculty.position}</p>
              <p className="education">{faculty.education}</p>
              <p className="experience">{faculty.experience}</p>
            </div>
          </div>

          <div className="faculty-detail-content">
            <div className="faculty-bio">
              <h2>Biography</h2>
              <p>{faculty.bio}</p>
            </div>

            <div className="faculty-courses">
              <h2>Courses Taught</h2>
              <ul>
                {faculty.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="faculty-contact">
              <h2>Contact Information</h2>
              <p><strong>Email:</strong> {faculty.email}</p>
              <p><strong>Office:</strong> {faculty.office}</p>
              <p><strong>Phone:</strong> {faculty.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// All Faculty Component
export const AllFaculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Science Department Chair",
      education: "Ph.D. in Biology, Stanford University",
      experience: "15 years teaching experience",
      image: "https://img.freepik.com/premium-photo/man-sitting-front-classroom-with-group-children_763111-287711.jpg"
    },
    {
      id: 2,
      name: "Mr. David Chen",
      position: "Mathematics Instructor",
      education: "M.S. in Mathematics, MIT",
      experience: "12 years teaching experience",
      image: "https://img.freepik.com/premium-photo/teacher-leading-classroom-full-attentive-students_731930-176621.jpg"
    },
    {
      id: 3,
      name: "Ms. Maria Rodriguez",
      position: "Humanities Department",
      education: "M.A. in Literature, University of Chicago",
      experience: "10 years teaching experience",
      image: "https://static.vecteezy.com/system/resources/thumbnails/028/678/230/small_2x/female-teacher-near-board-generate-ai-photo.jpg"
    },
    // Additional faculty members
    {
      id: 4,
      name: "Mr. James Wilson",
      position: "Physical Education",
      education: "M.Ed. in Physical Education, University of Texas",
      experience: "8 years teaching experience",
      image: "https://static.vecteezy.com/system/resources/thumbnails/012/417/900/small_2x/teacher-with-a-group-of-hi-school-students-in-classroom-free-photo.jpg"
    },
    {
      id: 5,
      name: "Ms. Emily Parker",
      position: "Art Department",
      education: "M.F.A. in Visual Arts, Rhode Island School of Design",
      experience: "7 years teaching experience",
      image: "https://centraldigest.com/wp-content/uploads/2023/01/InDefenseofTeachers.jpeg"
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      position: "Social Studies Department",
      education: "Ph.D. in History, Yale University",
      experience: "14 years teaching experience",
      image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/04/22/11/teacher2204a.jpg?width=1200&auto=webp&quality=75"
    }
  ];

  return (
    <Layout>
      <div className="all-faculty-page">
        <div className="container">
          <h1>Our Distinguished Faculty</h1>
          <p className="section-description">Meet our dedicated educators who are committed to student success</p>
          
          <div className="faculty-grid">
            {facultyMembers.map(member => (
              <div key={member.id} className="faculty-card">
                <Link to={`/academics/faculty/${member.id}`}>
                  <div className="faculty-image">
                    <img src={member.image} alt={member.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="faculty-info">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="education">{member.education}</p>
                    <p className="experience">{member.experience}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Resource Detail Component
export const ResourceDetail = () => {
  const { resource } = useParams();
  
  const resourcesData = {
    library: {
      title: "Library Services",
      description: "Our library provides comprehensive resources and services to support teaching and learning across all grade levels.",
      image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      services: [
        "Physical book collection with over 20,000 titles",
        "Digital resources including e-books and audiobooks",
        "Research databases for academic projects",
        "Collaborative learning spaces",
        "Information literacy instruction"
      ],
      hours: [
        { day: "Monday-Thursday", time: "7:30 AM - 5:00 PM" },
        { day: "Friday", time: "7:30 AM - 4:00 PM" },
        { day: "Saturday", time: "9:00 AM - 12:00 PM" }
      ],
      contact: "library@school.edu"
    },
    technology: {
      title: "Technology Resources",
      description: "We provide comprehensive technology resources to support digital learning and innovation.",
      image: "https://c8.alamy.com/comp/FRP2CT/collage-of-technology-devices-FRP2CT.jpg",
      services: [
        "1:1 device program for all students",
        "Campus-wide WiFi access",
        "Learning management system for course materials",
        "Digital creativity tools and software",
        "Technical support services"
      ],
      hours: [
        { day: "Monday-Friday", time: "7:00 AM - 6:00 PM" }
      ],
      contact: "techsupport@school.edu"
    },
    college: {
      title: "College Counseling",
      description: "Our college counseling program supports students through the college search and application process.",
      image: "https://www.nobles.edu/wp-content/uploads/2018/08/College-Counseling-12-e1533842496421.jpg",
      services: [
        "Individual college planning meetings",
        "College search and selection guidance",
        "Application essay support",
        "Financial aid and scholarship information",
        "College visit coordination"
      ],
      hours: [
        { day: "Monday-Friday", time: "8:00 AM - 5:00 PM" }
      ],
      contact: "collegecounseling@school.edu"
    }
  };

  const resourceInfo = resourcesData[resource];

  if (!resourceInfo) {
    return <div>Resource not found</div>;
  }

  return (
    <Layout>
      <div className="resource-detail-page">
        <div className="container">
          <h1>{resourceInfo.title}</h1>
          
          <div className="resource-image">
            <img src={resourceInfo.image} alt={resourceInfo.title} />
          </div>
          
          <div className="resource-description">
            <p>{resourceInfo.description}</p>
          </div>
          
          <div className="resource-services">
            <h2>Services Offered</h2>
            <ul>
              {resourceInfo.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div className="resource-hours">
            <h2>Hours of Operation</h2>
            {resourceInfo.hours.map((hour, index) => (
              <p key={index}><strong>{hour.day}:</strong> {hour.time}</p>
            ))}
          </div>
          
          <div className="resource-contact">
            <h2>Contact Information</h2>
            <p>Email: {resourceInfo.contact}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Main Academics Component
const Academics = () => {
  const [activeTab, setActiveTab] = useState('programs');

  // Sample data for academic programs
  const academicPrograms = [
    {
      id: 1,
      title: "Elementary School",
      description: "Our elementary program focuses on foundational skills in literacy, numeracy, and social development.",
      grades: "Grades 1-5",
      features: ["Interactive Learning", "STEM Introduction", "Arts Integration"],
      color: "#4f9da6"
    },
    {
      id: 2,
      title: "Middle School",
      description: "Our middle school curriculum challenges students with advanced coursework while supporting adolescent development.",
      grades: "Grades 6-8",
      features: ["Project-Based Learning", "Technology Integration", "Exploratory Courses"],
      color: "#ff8a5c"
    },
    {
      id: 3,
      title: "High School",
      description: "Our comprehensive high school prepares students for college and career with diverse academic pathways.",
      grades: "Grades 9-12",
      features: ["AP Courses", "Career Technical Education", "College Counseling"],
      color: "#7b3c95"
    }
  ];

  // Sample faculty data
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Science Department Chair",
      education: "Ph.D. in Biology, Stanford University",
      experience: "15 years teaching experience",
      image: "https://static.vecteezy.com/system/resources/previews/030/710/106/large_2x/happy-male-teacher-in-an-elementary-school-classroom-generative-ai-photo.jpg"
    },
    {
      id: 2,
      name: "Mr. David Chen",
      position: "Mathematics Instructor",
      education: "M.S. in Mathematics, MIT",
      experience: "12 years teaching experience",
      image: "https://img.freepik.com/premium-photo/teacher-photos_943898-3987.jpg"
    },
    {
      id: 3,
      name: "Ms. Maria Rodriguez",
      position: "Humanities Department",
      education: "M.A. in Literature, University of Chicago",
      experience: "10 years teaching experience",
      image: "https://img.freepik.com/premium-photo/teacher-photos_943898-5367.jpg"
    }
  ];

  // Sample curriculum data
  const curriculumData = [
    {
      grade: "Elementary",
      focus: "Foundational Skills",
      subjects: ["Reading & Writing", "Mathematics", "Science", "Social Studies", "Arts", "Physical Education"]
    },
    {
      grade: "Middle School",
      focus: "Exploratory Learning",
      subjects: ["English Language Arts", "Algebra", "Life Sciences", "World History", "Electives", "Health Education"]
    },
    {
      grade: "High School",
      focus: "College & Career Preparation",
      subjects: ["Advanced Mathematics", "Laboratory Sciences", "Social Sciences", "World Languages", "AP Courses", "Career Technical Education"]
    }
  ];

  return (
    <Layout>
      <div className="academics-page">
        {/* Hero Section */}
        <section className="academics-hero">
          <div className="hero-content">
            <h1>Academic Excellence</h1>
            <p>Preparing students for success through innovative teaching and rigorous curriculum</p>
            <button className="cta-button">Explore Our Programs</button>
          </div>
          <div className="hero-gradient"></div>
        </section>

        {/* Programs Section */}
        <section className="academics-programs">
          <div className="container">
            <h2>Our Academic Programs</h2>
            <p className="section-description">We offer comprehensive educational pathways designed to nurture each student's potential</p>
            
            <div className="programs-grid">
              {academicPrograms.map(program => (
                <div 
                  key={program.id} 
                  className="program-card"
                  style={{ '--accent-color': program.color }}
                >
                  <div className="program-header">
                    <h3>{program.title}</h3>
                    <span className="grade-level">{program.grades}</span>
                  </div>
                  <p>{program.description}</p>
                  <ul className="program-features">
                    {program.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Link to={`/academics/program/${program.id}`} className="program-link">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="academics-curriculum">
          <div className="container">
            <h2>Our Curriculum</h2>
            <p className="section-description">A rigorous, standards-based curriculum designed to challenge and inspire students</p>
            
            <div className="curriculum-tabs">
              <div className="tabs-header">
                {curriculumData.map(item => (
                  <button 
                    key={item.grade}
                    className={activeTab === item.grade.toLowerCase() ? 'active' : ''}
                    onClick={() => setActiveTab(item.grade.toLowerCase())}
                  >
                    {item.grade}
                  </button>
                ))}
              </div>
              
              <div className="tabs-content">
                {curriculumData.map(item => (
                  <div 
                    key={item.grade} 
                    className={`tab-pane ${activeTab === item.grade.toLowerCase() ? 'active' : ''}`}
                  >
                    <h3>{item.grade} Curriculum Focus: {item.focus}</h3>
                    <div className="subjects-grid">
                      {item.subjects.map((subject, index) => (
                        <Link 
                          key={index} 
                          to={`/academics/curriculum/${item.grade.toLowerCase().replace(' ', '')}`}
                          className="subject-card"
                        >
                          {subject}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="academics-faculty">
          <div className="container">
            <h2>Our Distinguished Faculty</h2>
            <p className="section-description">Meet our dedicated educators who are committed to student success</p>
            
            <div className="faculty-grid">
              {facultyMembers.map(member => (
                <div key={member.id} className="faculty-card">
                  <Link to={`/academics/faculty/${member.id}`}>
                    <div className="faculty-image">
                      <img src={member.image} alt={member.name} />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="faculty-info">
                      <h3>{member.name}</h3>
                      <p className="position">{member.position}</p>
                      <p className="education">{member.education}</p>
                      <p className="experience">{member.experience}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="view-all-container">
              <Link to="/academics/faculty" className="outline-button">
                View All Faculty Members
              </Link>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="academics-achievements">
          <div className="container">
            <h2>Academic Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-number">98%</div>
                <div className="achievement-label">Graduation Rate</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">85%</div>
                <div className="achievement-label">AP Exam Pass Rate</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">1:12</div>
                <div className="achievement-label">Student-Teacher Ratio</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">25+</div>
                <div className="achievement-label">AP Courses Offered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="academics-resources">
          <div className="container">
            <h2>Academic Resources</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📚</div>
                <h3>Library Services</h3>
                <p>Access our digital and physical collections, research databases, and learning resources</p>
                <Link to="/academics/resource/library" className="resource-link">
                  Explore Library
                </Link>
              </div>
              <div className="resource-card">
                <div className="resource-icon">💻</div>
                <h3>Technology Resources</h3>
                <p>Digital tools, online learning platforms, and technology support for students</p>
                <Link to="/academics/resource/technology" className="resource-link">
                  Access Resources
                </Link>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🎓</div>
                <h3>College Counseling</h3>
                <p>Guidance for college applications, financial aid, and career planning</p>
                <Link to="/academics/resource/college" className="resource-link">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Academics;
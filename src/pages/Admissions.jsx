import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Layout from '../components/Layout/Layout';
import './Admissions.css';

const Admissions = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeTab, setActiveTab] = useState('process');
  const [isOpen, setIsOpen] = useState({});
  const [detailView, setDetailView] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    currentSchool: '',
    currentGrade: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelationship: '',
    
    // Program Information
    programInterest: '',
    entryTerm: '',
    
    // Additional Information
    previousApplications: 'no',
    specialNeeds: '',
    additionalComments: '',
    
    // Agreement
    agreeToTerms: false
  });

  const toggleFAQ = (index) => {
    setIsOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const showDetail = (section) => {
    setDetailView(section);
  };

  const hideDetail = () => {
    setDetailView(null);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to backend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'swamirao42@gmail.com',
          subject: 'New School Application Submission',
          formData: formData
        }),
      });

      if (response.ok) {
        alert('Application submitted successfully! We will contact you soon.');
        setShowApplicationForm(false);
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          gender: '',
          currentSchool: '',
          currentGrade: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          parentFirstName: '',
          parentLastName: '',
          parentEmail: '',
          parentPhone: '',
          parentRelationship: '',
          programInterest: '',
          entryTerm: '',
          previousApplications: 'no',
          specialNeeds: '',
          additionalComments: '',
          agreeToTerms: false
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again later.');
    }
  };

  const startApplication = () => {
    setShowApplicationForm(true);
  };

  const cancelApplication = () => {
    setShowApplicationForm(false);
  };

  const goBack = () => {
    if (showApplicationForm) {
      setShowApplicationForm(false);
    } else if (detailView) {
      setDetailView(null);
    } else {
      window.history.back();
    }
  };

  const faqItems = [
    {
      question: "What is the application deadline?",
      answer: "The application deadline for the upcoming academic year is March 1st. Late applications may be considered on a case-by-case basis."
    },
    {
      question: "When will we receive the admission decision?",
      answer: "Admission decisions are typically sent out by April 15th. You will receive an email notification followed by an official letter."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer a variety of merit-based and need-based scholarships. Please visit the Financial Aid section for more details."
    },
    {
      question: "Can we schedule a campus tour?",
      answer: "Absolutely! We encourage prospective students and their families to visit our campus. You can schedule a tour through our Visit Us page."
    }
  ];

  // Detailed views for requirements
  const requirementDetails = {
    application: {
      title: "Application Form",
      icon: "📝",
      description: "Complete our online application with accurate and current information.",
      details: [
        "Fill out all personal information including full name, date of birth, and contact details",
        "Provide complete educational history from elementary school to present",
        "List extracurricular activities, awards, and special achievements",
        "Include any special needs or accommodations required",
        "Digital signature from both student and parent/guardian"
      ],
      deadline: "March 1st",
      tips: "Save your work frequently and review all information before submission. You can save your progress and return to complete the application later."
    },
    academic: {
      title: "Academic Records",
      icon: "📊",
      description: "Official transcripts from the previous two years of schooling.",
      details: [
        "Official transcripts must be sent directly from your current school",
        "Include standardized test scores if available (e.g., SAT, ACT, state exams)",
        "Provide report cards from the past two academic years",
        "Any specialized testing results (gifted, learning differences, etc.)",
        "International students must provide certified English translations"
      ],
      deadline: "March 1st",
      tips: "Request transcripts early as processing may take several weeks. Follow up with your school to ensure they've been sent."
    },
    recommendations: {
      title: "Recommendations",
      icon: "✉️",
      description: "Two letters of recommendation from teachers or counselors.",
      details: [
        "One recommendation must be from a current math or English teacher",
        "The second recommendation can be from another academic teacher, counselor, or extracurricular advisor",
        "Recommendations should speak to your character, work ethic, and potential",
        "Provide recommenders with your resume or list of accomplishments",
        "Follow up politely to ensure recommendations are submitted by the deadline"
      ],
      deadline: "March 8th",
      tips: "Ask recommenders at least one month in advance and provide them with your resume or list of accomplishments."
    },
    statement: {
      title: "Personal Statement",
      icon: "📄",
      description: "A written essay or personal statement from the student.",
      details: [
        "500-750 words in length",
        "Should reflect your personality, values, and goals",
        "Address why you want to attend our school specifically",
        "Discuss challenges you've overcome or lessons you've learned",
        "Proofread carefully for grammar and spelling errors"
      ],
      prompt: "Tell us about a significant experience that shaped who you are today and how it will contribute to our school community.",
      deadline: "March 1st",
      tips: "Start early, write multiple drafts, and ask a teacher or parent to review your essay before submission."
    }
  };

  // Detailed views for financial aid
  const financialDetails = {
    merit: {
      title: "Merit-Based Scholarships",
      description: "Awarded to students who demonstrate exceptional academic achievement, talent in arts or athletics, or leadership qualities.",
      details: [
        "Academic Excellence Scholarship: Full tuition for students with 4.0 GPA and top 5% test scores",
        "STEM Scholarship: $10,000 annually for students excelling in science and mathematics",
        "Arts Scholarship: Up to $7,500 for demonstrated excellence in visual or performing arts",
        "Athletic Scholarship: Varies by sport and skill level, requires tryout and coach recommendation",
        "Leadership Scholarship: $5,000 for students with significant community service and leadership roles"
      ],
      requirements: [
        "Minimum 3.5 GPA for consideration",
        "Submission of portfolio, performance recording, or athletic tryout as applicable",
        "Letter of recommendation specifically addressing the scholarship area",
        "Separate scholarship application may be required"
      ],
      deadline: "February 15th",
      renewal: "Most scholarships are renewable annually provided the student maintains a 3.0 GPA and continues participation in relevant activities"
    },
    needBased: {
      title: "Need-Based Financial Aid",
      description: "Available to families who demonstrate financial need. Applications are reviewed confidentially by our financial aid committee.",
      details: [
        "Financial aid awards range from 10% to 100% of tuition costs",
        "Aid is determined based on family income, assets, and special circumstances",
        "Over 40% of our students receive some form of financial assistance",
        "Aid packages may include grants, work-study opportunities, and low-interest loans"
      ],
      process: [
        "Complete the Financial Aid Application by January 31st",
        "Submit previous year's tax returns and W-2 forms",
        "Financial aid decisions are communicated with admission offers",
        "Special circumstances (medical expenses, job loss, etc.) can be explained in a separate letter"
      ],
      deadline: "January 31st",
      renewal: "Financial aid is reassessed annually. Families must reapply each year by the stated deadline."
    },
    payment: {
      title: "Payment Plans",
      description: "Flexible payment options are available to help families manage tuition costs throughout the academic year.",
      options: [
        {
          name: "Full Payment Plan",
          description: "Pay the entire year's tuition by August 1st",
          discount: "3% discount for full payment in advance"
        },
        {
          name: "Semester Plan",
          description: "Two equal payments due August 1st and January 1st",
          discount: "No additional fees"
        },
        {
          name: "Monthly Plan",
          description: "10 monthly payments from August through May",
          discount: "$75 enrollment fee, automatic bank draft available"
        },
        {
          name: "Extended Plan",
          description: "12 monthly payments from June through May",
          discount: "$100 enrollment fee, available for returning families with good payment history"
        }
      ],
      additional: "All payment plans include tuition insurance. Additional fees for materials, technology, and activities are billed separately.",
      contact: "For personalized payment plan options, contact our business office at business@schoolname.edu or (123) 456-7890 ext. 222"
    }
  };

  // Helper functions for colors
  const getColorForRequirement = (req) => {
    const colors = {
      application: '#4361ee',
      academic: '#7209b7',
      recommendations: '#f72585',
      statement: '#4cc9f0'
    };
    return colors[req] || '#4361ee';
  };

  const getColorForFinancial = (fin) => {
    const colors = {
      merit: '#fb8500',
      needBased: '#023e8a',
      payment: '#2a9d8f'
    };
    return colors[fin] || '#4361ee';
  };

  // Render detailed view if active
  if (detailView) {
    let detailContent;
    
    if (detailView.startsWith('req-')) {
      const reqKey = detailView.replace('req-', '');
      const requirement = requirementDetails[reqKey];
      
      detailContent = (
        <div className="requirement-detail">
          <div className="detail-hero" style={{backgroundColor: getColorForRequirement(reqKey)}}>
            <div className="detail-hero-content">
              <span className="detail-icon">{requirement.icon}</span>
              <h1>{requirement.title}</h1>
              <p>{requirement.description}</p>
            </div>
          </div>
          
          <div className="detail-content">
            <div className="detail-section">
              <h2>Requirements</h2>
              <ul>
                {requirement.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {requirement.prompt && (
              <div className="detail-section">
                <h2>Essay Prompt</h2>
                <p className="essay-prompt">{requirement.prompt}</p>
              </div>
            )}
            
            <div className="detail-section">
              <h2>Submission Deadline</h2>
              <p className="deadline">{requirement.deadline}</p>
            </div>
            
            <div className="detail-section">
              <h2>Helpful Tips</h2>
              <p>{requirement.tips}</p>
            </div>
          </div>
        </div>
      );
    } else if (detailView.startsWith('fin-')) {
      const finKey = detailView.replace('fin-', '');
      const financial = financialDetails[finKey];
      
      detailContent = (
        <div className="financial-detail">
          <div className="detail-hero" style={{backgroundColor: getColorForFinancial(finKey)}}>
            <div className="detail-hero-content">
              <h1>{financial.title}</h1>
              <p>{financial.description}</p>
            </div>
          </div>
          
          <div className="detail-content">
            <div className="detail-section">
              <h2>Program Details</h2>
              <ul>
                {financial.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {financial.requirements && (
              <div className="detail-section">
                <h2>Eligibility Requirements</h2>
                <ul>
                  {financial.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {financial.options && (
              <div className="detail-section">
                <h2>Payment Options</h2>
                <div className="options-grid">
                  {financial.options.map((option, index) => (
                    <div key={index} className="option-card">
                      <h3>{option.name}</h3>
                      <p>{option.description}</p>
                      <div className="discount">{option.discount}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="detail-section">
              <h2>Application Deadline</h2>
              <p className="deadline">{financial.deadline}</p>
            </div>
            
            {financial.renewal && (
              <div className="detail-section">
                <h2>Renewal Information</h2>
                <p>{financial.renewal}</p>
              </div>
            )}
            
            {financial.additional && (
              <div className="detail-section">
                <h2>Additional Information</h2>
                <p>{financial.additional}</p>
              </div>
            )}
            
            {financial.contact && (
              <div className="detail-section">
                <h2>Contact Information</h2>
                <p>{financial.contact}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <Layout>
        <div className="detail-view">
          <button className="back-button" onClick={goBack}>
            &larr; Back
          </button>
          {detailContent}
        </div>
      </Layout>
    );
  }

  // Render application form if active
  if (showApplicationForm) {
    return (
      <Layout>
        <div className="application-form-container">
          <button className="back-button" onClick={goBack}>
            &larr; Back
          </button>
          
          <div className="application-form">
            <h1>School Application Form</h1>
            <p>Please fill out all required fields to complete your application.</p>
            
            <form onSubmit={handleFormSubmit}>
              {/* Student Information */}
              <fieldset>
                <legend>Student Information</legend>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth *</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleFormChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="currentSchool">Current School *</label>
                    <input
                      type="text"
                      id="currentSchool"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="currentGrade">Current Grade *</label>
                    <select
                      id="currentGrade"
                      name="currentGrade"
                      value={formData.currentGrade}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="1st">1st Grade</option>
                      <option value="2nd">2nd Grade</option>
                      <option value="3rd">3rd Grade</option>
                      <option value="4th">4th Grade</option>
                      <option value="5th">5th Grade</option>
                      <option value="6th">6th Grade</option>
                      <option value="7th">7th Grade</option>
                      <option value="8th">8th Grade</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              
              {/* Contact Information */}
              <fieldset>
                <legend>Contact Information</legend>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
              </fieldset>
              
              {/* Parent/Guardian Information */}
              <fieldset>
                <legend>Parent/Guardian Information</legend>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="parentFirstName">First Name *</label>
                    <input
                      type="text"
                      id="parentFirstName"
                      name="parentFirstName"
                      value={formData.parentFirstName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="parentLastName">Last Name *</label>
                    <input
                      type="text"
                      id="parentLastName"
                      name="parentLastName"
                      value={formData.parentLastName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="parentEmail">Email Address *</label>
                    <input
                      type="email"
                      id="parentEmail"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="parentPhone">Phone Number *</label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="parentRelationship">Relationship to Student *</label>
                  <select
                    id="parentRelationship"
                    name="parentRelationship"
                    value={formData.parentRelationship}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select Relationship</option>
                    <option value="mother">Mother</option>
                    <option value="father">Father</option>
                    <option value="guardian">Guardian</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </fieldset>
              
              {/* Program Information */}
              <fieldset>
                <legend>Program Information</legend>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="programInterest">Program of Interest *</label>
                    <select
                      id="programInterest"
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Program</option>
                      <option value="elementary">Elementary School</option>
                      <option value="middle">Middle School</option>
                      <option value="high">High School</option>
                      <option value="stem">STEM Program</option>
                      <option value="arts">Arts Program</option>
                      <option value="athletics">Athletics Program</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="entryTerm">Desired Entry Term *</label>
                    <select
                      id="entryTerm"
                      name="entryTerm"
                      value={formData.entryTerm}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Term</option>
                      <option value="fall-2023">Fall 2023</option>
                      <option value="spring-2024">Spring 2024</option>
                      <option value="fall-2024">Fall 2024</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              
              {/* Additional Information */}
              <fieldset>
                <legend>Additional Information</legend>
                
                <div className="form-group">
                  <label>Have you applied to our school before? *</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="previousApplications"
                        value="yes"
                        checked={formData.previousApplications === 'yes'}
                        onChange={handleFormChange}
                        required
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="previousApplications"
                        value="no"
                        checked={formData.previousApplications === 'no'}
                        onChange={handleFormChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="specialNeeds">Special Needs or Accommodations</label>
                  <textarea
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleFormChange}
                    rows="3"
                    placeholder="Please describe any special needs, accommodations, or learning differences we should be aware of"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="additionalComments">Additional Comments</label>
                  <textarea
                    id="additionalComments"
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleFormChange}
                    rows="4"
                    placeholder="Is there anything else you'd like us to know about the applicant?"
                  />
                </div>
              </fieldset>
              
              {/* Agreement */}
              <fieldset>
                <legend>Agreement</legend>
                
                <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleFormChange}
                      required
                    />
                    I certify that the information provided in this application is true and complete to the best of my knowledge. I understand that falsification of information may result in denial of admission or dismissal from the school. *
                  </label>
                </div>
              </fieldset>
              
              <div className="form-actions">
                <button type="button" onClick={goBack} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="admissions">
        {/* Back Button */}
        <button className="back-button" onClick={goBack}>
          &larr; Back
        </button>

        {/* Hero Section */}
        <section className="admissions-hero">
          <div className="hero-content">
            <h1>Begin Your Educational Journey</h1>
            <p>Join our community of learners and discover your potential</p>
            <button className="cta-button" onClick={startApplication}>Start Your Application</button>
          </div>
        </section>

        {/* Admissions Tabs */}
        <section className="admissions-tabs">
          <div className="tabs-header">
            <button 
              className={activeTab === 'process' ? 'tab-active' : ''}
              onClick={() => setActiveTab('process')}
            >
              Process
            </button>
            <button 
              className={activeTab === 'requirements' ? 'tab-active' : ''}
              onClick={() => setActiveTab('requirements')}
            >
              Requirements
            </button>
            <button 
              className={activeTab === 'dates' ? 'tab-active' : ''}
              onClick={() => setActiveTab('dates')}
            >
              Important Dates
            </button>
            <button 
              className={activeTab === 'financial' ? 'tab-active' : ''}
              onClick={() => setActiveTab('financial')}
            >
              Financial Aid
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'process' && (
              <div className="tab-panel">
                <h2>Admissions Process</h2>
                <p>Our admissions process is designed to help us get to know you and your potential to thrive in our school community.</p>
                
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Inquiry & Exploration</h3>
                      <p>Submit an inquiry form, attend an open house, or schedule a campus tour to learn more about our school.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Application</h3>
                      <p>Complete our online application form and submit all required documents by the deadline.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Assessment & Interview</h3>
                      <p>Students may be required to complete an assessment, and families will participate in an interview with our admissions team.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Decision & Enrollment</h3>
                      <p>Receive your admission decision and complete the enrollment process if accepted.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'requirements' && (
              <div className="tab-panel">
                <h2>Admissions Requirements</h2>
                <p>To ensure a complete application, please submit the following documents:</p>
                
                <div className="requirements-grid">
                  <div 
                    className="requirement-card" 
                    style={{backgroundColor: getColorForRequirement('application')}}
                    onClick={() => showDetail('req-application')}
                  >
                    <div className="card-icon">📝</div>
                    <h3>Application Form</h3>
                    <p>Complete our online application with accurate and current information.</p>
                    <button className="detail-link">View Details &rarr;</button>
                  </div>
                  
                  <div 
                    className="requirement-card"
                    style={{backgroundColor: getColorForRequirement('academic')}}
                    onClick={() => showDetail('req-academic')}
                  >
                    <div className="card-icon">📊</div>
                    <h3>Academic Records</h3>
                    <p>Official transcripts from the previous two years of schooling.</p>
                    <button className="detail-link">View Details &rarr;</button>
                  </div>
                  
                  <div 
                    className="requirement-card"
                    style={{backgroundColor: getColorForRequirement('recommendations')}}
                    onClick={() => showDetail('req-recommendations')}
                  >
                    <div className="card-icon">✉️</div>
                    <h3>Recommendations</h3>
                    <p>Two letters of recommendation from teachers or counselors.</p>
                    <button className="detail-link">View Details &rarr;</button>
                  </div>
                  
                  <div 
                    className="requirement-card"
                    style={{backgroundColor: getColorForRequirement('statement')}}
                    onClick={() => showDetail('req-statement')}
                  >
                    <div className="card-icon">📄</div>
                    <h3>Personal Statement</h3>
                    <p>A written essay or personal statement from the student.</p>
                    <button className="detail-link">View Details &rarr;</button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'dates' && (
              <div className="tab-panel">
                <h2>Important Dates</h2>
                <p>Mark your calendar with these important admissions deadlines:</p>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">January 15</div>
                    <div className="timeline-content">
                      <h3>Application Opens</h3>
                      <p>Begin submitting your applications for the next academic year.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-date">March 1</div>
                    <div className="timeline-content">
                      <h3>Application Deadline</h3>
                      <p>All applications and supporting materials must be submitted by this date.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-date">March 15-30</div>
                    <div className="timeline-content">
                      <h3>Interviews</h3>
                      <p>Schedule your family interview with the admissions committee.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-date">April 15</div>
                    <div className="timeline-content">
                      <h3>Decision Notification</h3>
                      <p>Admission decisions will be sent to all applicants.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-date">May 1</div>
                    <div className="timeline-content">
                      <h3>Enrollment Deadline</h3>
                      <p>Deadline for accepted students to confirm their enrollment.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'financial' && (
              <div className="tab-panel">
                <h2>Financial Aid & Scholarships</h2>
                <p>We believe in making quality education accessible. Explore our financial support options:</p>
                
                <div className="financial-cards">
                  <div 
                    className="financial-card"
                    style={{borderTop: `5px solid ${getColorForFinancial('merit')}`}}
                    onClick={() => showDetail('fin-merit')}
                  >
                    <h3>Merit-Based Scholarships</h3>
                    <p>Awarded to students who demonstrate exceptional academic achievement, talent in arts or athletics, or leadership qualities.</p>
                    <button className="info-button">Learn More &rarr;</button>
                  </div>
                  
                  <div 
                    className="financial-card"
                    style={{borderTop: `5px solid ${getColorForFinancial('needBased')}`}}
                    onClick={() => showDetail('fin-needBased')}
                  >
                    <h3>Need-Based Financial Aid</h3>
                    <p>Available to families who demonstrate financial need. Applications are reviewed confidentially by our financial aid committee.</p>
                    <button className="info-button">Learn More &rarr;</button>
                  </div>
                  
                  <div 
                    className="financial-card"
                    style={{borderTop: `5px solid ${getColorForFinancial('payment')}`}}
                    onClick={() => showDetail('fin-payment')}
                  >
                    <h3>Payment Plans</h3>
                    <p>Flexible payment options are available to help families manage tuition costs throughout the academic year.</p>
                    <button className="info-button">Learn More &rarr;</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span className="faq-icon">{isOpen[index] ? '−' : '+'}</span>
                </button>
                {isOpen[index] && <div className="faq-answer">{item.answer}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <h2>Have More Questions?</h2>
            <p>Contact our admissions office for personalized assistance.</p>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>admissions@schoolname.edu</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(123) 456-7890 ext. 100</p>
              </div>
              <div className="contact-item">
                <h3>Office Hours</h3>
                <p>Monday-Friday, 8:00 AM - 4:30 PM</p>
              </div>
            </div>
            <button 
              className="contact-button" 
              onClick={() => navigate('/contact')} // Navigate to the Contact page
            >
              Contact Admissions
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Admissions;
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        studentGrade: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCaptchaChange = (value) => {
        setIsCaptchaVerified(!!value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please verify you're not a robot");
            return;
        }
        
        // Form validation and submission logic would go here
        setIsSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                studentGrade: '',
                subject: '',
                message: ''
            });
            setIsCaptchaVerified(false);
            // Reset captcha if needed
            if (window.grecaptcha && window.grecaptcha.reset) {
                window.grecaptcha.reset();
            }
        }, 3000);
    };

    // Inline styles
    const styles = {
        contactPage: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#333",
            lineHeight: 1.6
        },
        contactHero: {
            background: "linear-gradient(rgba(30, 67, 116, 0.8), rgba(30, 67, 116, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white"
        },
        heroOverlay: {
            maxWidth: "800px",
            padding: "0 20px"
        },
        heroTitle: {
            fontSize: "2.5rem",
            marginBottom: "1rem"
        },
        heroText: {
            fontSize: "1.2rem",
            marginBottom: "1rem"
        },
        contactContainer: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem"
        },
        contactContent: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "3rem"
        },
        formSection: {
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            padding: "2rem"
        },
        infoSection: {
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            padding: "2rem"
        },
        sectionTitle: {
            color: "#1e4374",
            marginBottom: "1.5rem",
            paddingBottom: "0.5rem",
            borderBottom: "2px solid #4CAF50"
        },
        formRow: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
        },
        formGroup: {
            marginBottom: "1.5rem"
        },
        label: {
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "600",
            color: "#444"
        },
        input: {
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            transition: "border-color 0.3s"
        },
        inputFocus: {
            borderColor: "#4CAF50",
            outline: "none"
        },
        textarea: {
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            transition: "border-color 0.3s",
            minHeight: "120px",
            resize: "vertical"
        },
        select: {
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            transition: "border-color 0.3s",
            background: "white"
        },
        recaptchaContainer: {
            margin: "1.5rem 0",
            display: "flex",
            justifyContent: "center"
        },
        recaptchaBox: {
            background: "#f9f9f9",
            border: "1px dashed #ccc",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "5px",
            color: "#666",
            width: "100%",
            maxWidth: "304px"
        },
        submitBtn: {
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "12px 24px",
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            transition: "background-color 0.3s"
        },
        submitBtnHover: {
            backgroundColor: "#3e8e41"
        },
        successMessage: {
            textAlign: "center",
            padding: "2rem",
            background: "#f0fff0",
            borderRadius: "5px",
            borderLeft: "4px solid #4CAF50"
        },
        successTitle: {
            color: "#4CAF50",
            marginBottom: "1rem"
        },
        contactMethod: {
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "1.5rem"
        },
        icon: {
            background: "#e8f5e9",
            color: "#4CAF50",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "1rem",
            flexShrink: "0"
        },
        methodTitle: {
            margin: "0 0 0.5rem 0",
            color: "#1e4374"
        },
        whatsappBtn: {
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            marginTop: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: "600"
        },
        whatsappBtnHover: {
            backgroundColor: "#128C7E"
        },
        officeHours: {
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #eee"
        },
        mapSection: {
            marginTop: "2rem"
        },
        mapTitle: {
            color: "#1e4374",
            marginBottom: "1rem",
            textAlign: "center"
        },
        mapContainer: {
            height: "400px",
            background: "#f0f0f0",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden"
        },
        mapIframe: {
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px"
        },
        // Responsive styles
        responsiveContactContent: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "3rem"
        },
        responsiveFormRow: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem"
        }
    };

    return (
        <Layout>
            <div style={styles.contactPage}>
                {/* Hero Section */}
                <div style={styles.contactHero}>
                    <div style={styles.heroOverlay}>
                        <h1 style={styles.heroTitle}>Get in Touch With Our School</h1>
                        <p style={styles.heroText}>We're here to answer all your questions and support your educational journey</p>
                    </div>
                </div>

                {/* Main Content */}
                <div style={styles.contactContainer}>
                    <div style={window.innerWidth <= 900 ? styles.responsiveContactContent : styles.contactContent}>
                        {/* Contact Form Section */}
                        <div style={styles.formSection}>
                            <h2 style={styles.sectionTitle}>Send Us a Message</h2>
                            {isSubmitted ? (
                                <div style={styles.successMessage}>
                                    <h3 style={styles.successTitle}>Thank You for Contacting Us!</h3>
                                    <p>We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div style={window.innerWidth <= 900 ? styles.responsiveFormRow : styles.formRow}>
                                        <div style={styles.formGroup}>
                                            <label htmlFor="name" style={styles.label}>Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={styles.input}
                                                onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                                onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                            />
                                        </div>
                                        <div style={styles.formGroup}>
                                            <label htmlFor="email" style={styles.label}>Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={styles.input}
                                                onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                                onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div style={window.innerWidth <= 900 ? styles.responsiveFormRow : styles.formRow}>
                                        <div style={styles.formGroup}>
                                            <label htmlFor="phone" style={styles.label}>Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                style={styles.input}
                                                onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                                onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                            />
                                        </div>
                                        <div style={styles.formGroup}>
                                            <label htmlFor="studentGrade" style={styles.label}>Student Grade</label>
                                            <select
                                                id="studentGrade"
                                                name="studentGrade"
                                                value={formData.studentGrade}
                                                onChange={handleChange}
                                                style={styles.select}
                                                onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                                onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                            >
                                                <option value="">Select Grade</option>
                                                <option value="preschool">Preschool</option>
                                                <option value="elementary">Elementary School</option>
                                                <option value="middle">Middle School</option>
                                                <option value="high">High School</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div style={styles.formGroup}>
                                        <label htmlFor="subject" style={styles.label}>Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            style={styles.select}
                                            onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                            onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                        >
                                            <option value="">Select Subject</option>
                                            <option value="admissions">Admissions Inquiry</option>
                                            <option value="academic">Academic Questions</option>
                                            <option value="transportation">Transportation</option>
                                            <option value="extracurricular">Extracurricular Activities</option>
                                            <option value="feedback">Feedback/Suggestions</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div style={styles.formGroup}>
                                        <label htmlFor="message" style={styles.label}>Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            style={styles.textarea}
                                            onFocus={(e) => e.target.style.borderColor = "#4CAF50"}
                                            onBlur={(e) => e.target.style.borderColor = "#ddd"}
                                        ></textarea>
                                    </div>
                                    
                                    {/* reCAPTCHA */}
                                    <div style={styles.recaptchaContainer}>
                                        <div style={styles.recaptchaBox}>
                                            <p>reCAPTCHA Integration</p>
                                            <div style={{margin: '10px 0', padding: '10px', background: '#e9e9e9', borderRadius: '4px'}}>
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={isCaptchaVerified}
                                                        onChange={(e) => handleCaptchaChange(e.target.checked)}
                                                    /> I'm not a robot
                                                </label>
                                            </div>
                                            <small>In a real implementation, Google reCAPTCHA would appear here</small>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        style={styles.submitBtn}
                                        onMouseOver={(e) => e.target.style.backgroundColor = "#3e8e41"}
                                        onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div style={styles.infoSection}>
                            <div className="info-card">
                                <h3 style={styles.sectionTitle}>Contact Information</h3>
                                
                                <div style={styles.contactMethod}>
                                    <div style={styles.icon}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="details">
                                        <h4 style={styles.methodTitle}>Our Address</h4>
                                        <p>123 Education Lane</p>
                                        <p>Learning City, KS 12345</p>
                                    </div>
                                </div>
                                
                                <div style={styles.contactMethod}>
                                    <div style={styles.icon}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <h4 style={styles.methodTitle}>Phone Number</h4>
                                        <p>(123) 456-7890</p>
                                        <p>Fax: (123) 456-7891</p>
                                    </div>
                                </div>
                                
                                <div style={styles.contactMethod}>
                                    <div style={styles.icon}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <h4 style={styles.methodTitle}>Email Address</h4>
                                        <p>info@learningschool.com</p>
                                        <p>admissions@learningschool.com</p>
                                    </div>
                                </div>
                                
                                <div style={styles.contactMethod}>
                                    <div style={styles.icon}>
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="details">
                                        <h4 style={styles.methodTitle}>WhatsApp Support</h4>
                                        <p>+1 (123) 456-7890</p>
                                        <button 
                                            style={styles.whatsappBtn}
                                            onMouseOver={(e) => e.target.style.backgroundColor = "#128C7E"}
                                            onMouseOut={(e) => e.target.style.backgroundColor = "#25D366"}
                                        >
                                            <i className="fab fa-whatsapp"></i> Message Us on WhatsApp
                                        </button>
                                    </div>
                                </div>
                                
                                <div style={styles.officeHours}>
                                    <h4 style={styles.methodTitle}>Office Hours</h4>
                                    <p>Monday-Friday: 8:00 AM - 4:30 PM</p>
                                    <p>Saturday: 9:00 AM - 12:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div style={styles.mapSection}>
                        <h2 style={styles.mapTitle}>Find Our Campus</h2>
                        <div style={styles.mapContainer}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621465758859!2d-74.0059493489481!3d40.712784179226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23c7ad7f0f%3A0x77ac85c5542e4df4!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1644261852533!5m2!1sen!2sus" 
                                style={styles.mapIframe}
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
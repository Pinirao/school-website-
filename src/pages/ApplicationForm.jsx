import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    currentGrade: '',
    applyingForGrade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    previousSchool: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalInfo: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      currentGrade: '',
      applyingForGrade: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      previousSchool: '',
      emergencyContact: '',
      emergencyPhone: '',
      medicalInfo: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="application-form-container">
      <h2>School Application Form</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-section">
          <h3>Student Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currentGrade">Current Grade</label>
              <input
                type="text"
                id="currentGrade"
                name="currentGrade"
                value={formData.currentGrade}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="applyingForGrade">Applying For Grade *</label>
              <select
                id="applyingForGrade"
                name="applyingForGrade"
                value={formData.applyingForGrade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                <option value="pre-k">Pre-K</option>
                <option value="kindergarten">Kindergarten</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Parent/Guardian Information</h3>
          <div className="form-group">
            <label htmlFor="parentName">Parent/Guardian Name *</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="parentEmail">Email *</label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Address Information</h3>
          <div className="form-group">
            <label htmlFor="address">Street Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <div className="form-group">
            <label htmlFor="previousSchool">Previous School (if applicable)</label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="emergencyContact">Emergency Contact Name *</label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
              <input
                type="tel"
                id="emergencyPhone"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="medicalInfo">Medical Information/Allergies</label>
            <textarea
              id="medicalInfo"
              name="medicalInfo"
              value={formData.medicalInfo}
              onChange={handleChange}
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information/Comments</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
import React, { useState } from 'react';
import './SchedulePage.css';

const SchedulePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your tour has been scheduled successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <div className="schedule-page-container">
      <h2>Schedule a Tour</h2>
      <p>Fill out the form below to schedule a visit to our school.</p>
      <form className="schedule-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SchedulePage;
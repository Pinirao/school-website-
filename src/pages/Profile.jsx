import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Sample user data - in a real app this would come from an API or context
  const [userData, setUserData] = useState({
    name: 'Emily Johnson',
    role: 'Student',
    grade: 'Grade 10',
    studentId: 'STU-2023-1085',
    email: 'emily.j@school.edu',
    phone: '(555) 123-4567',
    address: '123 Main St, City, State 12345',
    bio: 'Honor student passionate about science and mathematics. Member of the robotics club and debate team.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    courses: ['Mathematics', 'Physics', 'Chemistry', 'English', 'History', 'Computer Science'],
    attendance: '96%',
    performance: 'A-',
    classes: [
      { name: 'Mathematics', teacher: 'Mr. Anderson', time: '9:00 AM', room: 'Room 302' },
      { name: 'Physics', teacher: 'Dr. Roberts', time: '10:30 AM', room: 'Science Lab 1' },
      { name: 'English', teacher: 'Ms. Parker', time: '1:15 PM', room: 'Room 105' },
    ]
  });

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Student Profile</h1>
        <p>Manage your academic information and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-image">
              <img src={userData.avatar} alt={userData.name} />
              <div className="online-status"></div>
            </div>
            <h2>{userData.name}</h2>
            <p className="role">{userData.role} • {userData.grade}</p>
            <p className="id">{userData.studentId}</p>
            
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-value">{userData.attendance}</span>
                <span className="stat-label">Attendance</span>
              </div>
              <div className="stat">
                <span className="stat-value">{userData.performance}</span>
                <span className="stat-label">Performance</span>
              </div>
              <div className="stat">
                <span className="stat-value">{userData.courses.length}</span>
                <span className="stat-label">Courses</span>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><i className="icon email"></i> {userData.email}</p>
            <p><i className="icon phone"></i> {userData.phone}</p>
            <p><i className="icon location"></i> {userData.address}</p>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-tabs">
            <button 
              className={activeTab === 'overview' ? 'active' : ''} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'schedule' ? 'active' : ''} 
              onClick={() => setActiveTab('schedule')}
            >
              Class Schedule
            </button>
            <button 
              className={activeTab === 'courses' ? 'active' : ''} 
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </button>
            <button 
              className={activeTab === 'settings' ? 'active' : ''} 
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-tab">
                <h3>About Me</h3>
                <p>{userData.bio}</p>
                
                <div className="courses-grid">
                  <h3>Current Courses</h3>
                  <div className="courses-list">
                    {userData.courses.map((course, index) => (
                      <span key={index} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
                
                <div className="recent-activity">
                  <h3>Recent Activity</h3>
                  <div className="activity-item">
                    <div className="activity-icon assignment"></div>
                    <div className="activity-details">
                      <p>Submitted Mathematics Assignment</p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon grade"></div>
                    <div className="activity-details">
                      <p>Received grade for Physics test: A</p>
                      <span className="activity-time">1 day ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon attendance"></div>
                    <div className="activity-details">
                      <p>Marked present for all classes</p>
                      <span className="activity-time">2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'schedule' && (
              <div className="schedule-tab">
                <h3>Today's Schedule</h3>
                <div className="schedule-list">
                  {userData.classes.map((classItem, index) => (
                    <div key={index} className="schedule-item">
                      <div className="class-time">{classItem.time}</div>
                      <div className="class-details">
                        <h4>{classItem.name}</h4>
                        <p>{classItem.teacher} • {classItem.room}</p>
                      </div>
                      <button className="join-button">Join Class</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div className="courses-tab">
                <h3>My Courses</h3>
                <div className="course-cards">
                  {userData.courses.map((course, index) => (
                    <div key={index} className="course-card">
                      <div className="course-color" style={{backgroundColor: `hsl(${index * 60}, 70%, 50%)`}}></div>
                      <h4>{course}</h4>
                      <p>Progress: {Math.floor(Math.random() * 40) + 60}%</p>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: `${Math.floor(Math.random() * 40) + 60}%`}}></div>
                      </div>
                      <button className="view-course-btn">View Course</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="settings-tab">
                <h3>Profile Settings</h3>
                <form className="settings-form">
                  <div className="form-group">
                    <label>Display Name</label>
                    <input type="text" defaultValue={userData.name} />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" defaultValue={userData.email} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" defaultValue={userData.phone} />
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea defaultValue={userData.bio}></textarea>
                  </div>
                  <button type="submit" className="save-button">Save Changes</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
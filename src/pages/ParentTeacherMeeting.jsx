import React from 'react';

const ParentTeacherMeeting = () => {
  return (
    <div className="event-page">
      <h1>Parent-Teacher Meeting</h1>
      <p>Discuss student progress and future goals.</p>
      <p>Date: October 22, 2023</p>
      <p>Location: School Conference Room</p>
      <button onClick={() => window.history.back()} className="modern-btn">Go Back</button>
    </div>
  );
};

export default ParentTeacherMeeting;
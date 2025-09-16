import React from 'react';

const SportsDay = () => {
  return (
    <div className="event-page">
      <h1>Sports Day</h1>
      <p>Annual inter-house competition to showcase athletic skills.</p>
      <p>Date: November 5, 2023</p>
      <p>Location: School Sports Ground</p>
      <button onClick={() => window.history.back()} className="modern-btn">Go Back</button>
    </div>
  );
};

export default SportsDay;
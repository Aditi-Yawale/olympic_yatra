import React from 'react';
import './ProfilePage.css';

const Coach = () => {
  return (
    <div className="coach-container">
      <div className="coach-header">
        <img src="coach_img.png" alt="Coach" className="coach-image" />
        <div className="coach-details">
          <h3>Your Coach</h3>
          <p>Mr. Janneke Schopman</p>
          <p>2021 - Present</p>
        </div>
      </div>
      
      <div className="coach-messages">
        <div className="message-box blue-background">
          <p><strong>2 days ago</strong></p>
          <p>You’re doing better, definitely work on what we discussed however hard it might be you’re getting there Son lets....</p>
        </div>
        
        <div className="message-box">
          <p><strong>6 days ago</strong></p>
          <p>You’re doing better, definitely work on what we discussed however hard it might be you’re getting there Son lets....</p>
        </div>
      </div>
    </div>
  );
};

export default Coach;

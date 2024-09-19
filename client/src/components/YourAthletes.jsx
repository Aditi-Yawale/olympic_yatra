import React from 'react';
import './CoachDashboard.css'; // Ensure this CSS file includes styles for YourAthletes

const YourAthletes = () => {
  return (
    <div className="your-athletes">
      <h3>Your Athletes</h3>
      <div className="athlete-list">
        <div className="athlete-card">
          <h4>Athlete 1</h4>
          <p>Details about Athlete 1...</p>
        </div>
        <div className="athlete-card">
          <h4>Athlete 2</h4>
          <p>Details about Athlete 2...</p>
        </div>
        {/* More athlete cards */}
      </div>
    </div>
  );
};

export default YourAthletes;

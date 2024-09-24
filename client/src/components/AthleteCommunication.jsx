import React from 'react';
import './CoachDashboard.css'; // Ensure this CSS file includes styles for AthleteCommunication

const AthleteCommunication = () => {
  return (
    <div className="athlete-communication">
      <h3>Athlete Communication</h3>
      <div className="communication-content">
        <p>3 days ago: "Working on the Game"</p>
        <p>1 week ago: "Final Preparation going on"</p>
        {/* More communication logs */}
      </div>
    </div>
  );
};

export default AthleteCommunication;
import React from 'react';
import './AthleteDashboard.css';

const CoachCommunication = () => {
  return (
    <div className="coach-communication">
      <h3>Coach Communication</h3>
      <div className="communication-content">
        <p>2 days ago: "Keep improving."</p>
        {/* More communication logs */}
      </div>
    </div>
  );
};

export default CoachCommunication;
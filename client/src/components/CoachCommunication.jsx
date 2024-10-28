import React from 'react';
import './AthleteDashboard.css';

const CoachCommunication = () => {
  return (
<div className="coach-communication">
  <h3>Coach Communication</h3>
  
  <div className="communication-content">
    <p>2 days ago: "Keep improving."</p>
    <p>1 week ago: "Focus on your recovery after each session."</p>
    <p>3 weeks ago: "Great job on your last performance, keep up the consistency."</p>
    <p>1 month ago: "Work on your flexibility and mobility."</p>
    <p>2 months ago: "Stay positive and keep your training regular."</p>
    
    {/* More communication logs can be added here */}
  </div>
</div>

  );
};

export default CoachCommunication;
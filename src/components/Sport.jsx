import React from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

const Sport = () => {
  return (
    <div className="sport-container">
      <div className="sport-header">
        <h3>Your Sport</h3>
        <span className="edit-icon">✎</span> {/* Edit Icon */}
      </div>
      <div className="sport-info">
        <div className="sport-box">
          <span className="sport-label">Sport:</span>
          <span className="sport-value">Basketball</span> {/* Example Sport */}
        </div>
        <div className="category-box">
          <span className="category-label">Category:</span>
          <span className="category-value">Men</span> {/* Example Category */}
        </div>
      </div>
      <div className="performance-section">
        <h4>Your Performance</h4>
        {/* Add performance details here */}
      </div>
    </div>
  );
};

export default Sport;

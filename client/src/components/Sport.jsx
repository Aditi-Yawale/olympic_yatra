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
          <span className="sport-value">Athletics</span> {/* Example Sport */}
        </div>
        <div className="category-box">
          <span className="category-label">Category:</span>
          <span className="category-value">Men's</span> {/* Example Category */}
        </div>
      </div>
      <div className="performance-section">
        <h4>Your Performance</h4>
        <div className="performance-details">
          <div className="performance-item">
            <span className="performance-label">100 m Sprint:</span>
            <span className="performance-value">10.09 secs</span> {/* Example Performance */}
          </div>
          <div className="performance-item">
            <span className="performance-label">200 m Sprint:</span>
            <span className="performance-value">20.20 secs</span> {/* Example Performance */}
          </div>
          <div className="performance-item">
            <span className="performance-label">4 x 100 m Relay:</span>
            <span className="performance-value">39.27 secs</span> {/* Example Performance */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;

import React from 'react';
import './ProfilePage.css'; 

const Details = () => {
  return (
    <div className="details-container">
      <div className="details-header">
        <h3>Details</h3>
        <span className="edit-icon">✎</span> {/* Edit Icon */}
      </div>
      <div className="details-grid">
        <div className="details-item">
          <span className="label">Name</span>
          <span className="value">Bharat Kadhaavak</span>
        </div>
        <div className="details-item">
          <span className="label">Height</span>
          <span className="value">5 ft 11 in</span>
        </div>
        <div className="details-item">
          <span className="label">Age</span>
          <span className="value">24 years</span>
        </div>
        <div className="details-item">
          <span className="label">Weight</span>
          <span className="value">71 kgs (156.5 lbs)</span>
        </div>
        <div className="details-item">
          <span className="label">Nationality</span>
          <span className="value">Indian</span>
        </div>
        <div className="details-item">
          <span className="label">BMI</span>
          <span className="value">21.8 kg/m²</span>
        </div>
      </div>
    </div>
  );
};

export default Details;

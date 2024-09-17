import React from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h3>Your Experience</h3>
        <span className="edit-icon">✎</span> {/* Edit Icon */}
      </div>
      
      {/* District & State Level */}
      <div className="experience-box">
        <h4>District & State Level</h4>
        <div className="experience-details">
          <p>2010, 11 - U/10 Athletics Meet - Winner</p>
          <p>2013, 14, 15 - U/15 Athletics Meet - 2nd Place</p>
          <p>2016, 17, 18 - U/18 Athletics Meet - Winner</p>
        </div>
      </div>

      {/* National Level */}
      <div className="experience-box">
        <h4>National Level</h4>
        <div className="experience-details">
          <p>2014 - U/15 Athletics Meet - Winner</p>
          <p>2016, 17, 18 - U/18 Athletics Meet - Winner</p>
          <p>2020, 23 - Men’s Athletics Meet - 2nd Place</p>
        </div>
      </div>

      {/* International Level */}
      <div className="experience-box">
        <h4>International Level</h4>
        <div className="experience-details">
          <p>2017, 18 - U/18 Athletics Meet - 7th Place</p>
          <p>2020, 23, 24 - Men’s Athletic Meet - 8th Place</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

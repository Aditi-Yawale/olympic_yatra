import React, { useState } from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

const Experience = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [experience, setExperience] = useState({
    districtStateLevel: [
      '2010, 11 - U/10 Athletics Meet - Winner',
      '2013, 14, 15 - U/15 Athletics Meet - 2nd Place',
      '2016, 17, 18 - U/18 Athletics Meet - Winner'
    ],
    nationalLevel: [
      '2014 - U/15 Athletics Meet - Winner',
      '2016, 17, 18 - U/18 Athletics Meet - Winner',
      '2020, 23 - Men’s Athletics Meet - 2nd Place'
    ],
    internationalLevel: [
      '2017, 18 - U/18 Athletics Meet - 7th Place',
      '2020, 23, 24 - Men’s Athletic Meet - 8th Place'
    ]
  });

  // Toggle between edit and view modes
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle input changes for experience details
  const handleInputChange = (e, level, index) => {
    const updatedExperience = [...experience[level]];
    updatedExperience[index] = e.target.value;
    setExperience({ ...experience, [level]: updatedExperience });
  };

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h3>Your Experience</h3>
        <span className="edit-icon" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
          ✎
        </span> {/* Edit Icon */}
      </div>
      
      {/* District & State Level */}
      <div className="experience-box">
        <h4>District & State Level</h4>
        <div className="experience-details">
          {experience.districtStateLevel.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'districtStateLevel', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* National Level */}
      <div className="experience-box">
        <h4>National Level</h4>
        <div className="experience-details">
          {experience.nationalLevel.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'nationalLevel', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* International Level */}
      <div className="experience-box">
        <h4>International Level</h4>
        <div className="experience-details">
          {experience.internationalLevel.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'internationalLevel', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Save/Cancel buttons only appear in edit mode */}
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={() => setIsEditing(false)}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Experience;

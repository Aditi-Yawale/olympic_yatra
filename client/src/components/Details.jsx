import React, { useState } from 'react';
import './ProfilePage.css';

const Details = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    name: 'Bharat Kadhaavak',
    height: '5 ft 11 in',
    age: '24 years',
    weight: '71 kgs (156.5 lbs)',
    nationality: 'Indian',
    bmi: '21.8 kg/m²',
  });

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h3>Details</h3>
        <span className="edit-icon" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
          ✎ {/* Edit Icon */}
        </span>
      </div>
      <div className="details-grid">
        {/* Render inputs if in edit mode, otherwise render plain text */}
        <div className="details-item">
          <span className="label">Name</span>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={details.name}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.name}</span>
          )}
        </div>

        <div className="details-item">
          <span className="label">Height</span>
          {isEditing ? (
            <input
              type="text"
              name="height"
              value={details.height}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.height}</span>
          )}
        </div>

        <div className="details-item">
          <span className="label">Age</span>
          {isEditing ? (
            <input
              type="text"
              name="age"
              value={details.age}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.age}</span>
          )}
        </div>

        <div className="details-item">
          <span className="label">Weight</span>
          {isEditing ? (
            <input
              type="text"
              name="weight"
              value={details.weight}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.weight}</span>
          )}
        </div>

        <div className="details-item">
          <span className="label">Nationality</span>
          {isEditing ? (
            <input
              type="text"
              name="nationality"
              value={details.nationality}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.nationality}</span>
          )}
        </div>

        <div className="details-item">
          <span className="label">BMI</span>
          {isEditing ? (
            <input
              type="text"
              name="bmi"
              value={details.bmi}
              onChange={handleInputChange}
            />
          ) : (
            <span className="value">{details.bmi}</span>
          )}
        </div>
      </div>

      {/* Display Save/Cancel buttons only in edit mode */}
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={() => setIsEditing(false)}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Details;

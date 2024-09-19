import React, { useState } from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

const Sport = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [sportDetails, setSportDetails] = useState({
    sport: 'Athletics', // Default sport
    category: "Men's", // Default category
    performance: {
      '100mSprint': { label: '100 m Sprint', value: '10.09 secs' },
      '200mSprint': { label: '200 m Sprint', value: '20.20 secs' },
      '4x100mRelay': { label: '4 x 100 m Relay', value: '39.27 secs' }
    }
  });

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle input changes for sport/category and performance
  const handleInputChange = (e, field, isLabel = false) => {
    const { name, value } = e.target;
    if (field in sportDetails.performance) {
      setSportDetails({
        ...sportDetails,
        performance: {
          ...sportDetails.performance,
          [field]: {
            ...sportDetails.performance[field],
            [isLabel ? 'label' : 'value']: value
          }
        }
      });
    } else {
      setSportDetails({ ...sportDetails, [name]: value });
    }
  };

  return (
    <div className="sport-container">
      <div className="sport-header">
        <h3>Your Sport</h3>
        <span className="edit-icon" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
          ✎
        </span>
      </div>
      <div className="sport-info">
        {/* Toggle between text and input fields based on the editing state */}
        <div className="sport-box">
          <span className="sport-label">Sport:</span>
          {isEditing ? (
            <input
              type="text"
              name="sport"
              value={sportDetails.sport}
              onChange={handleInputChange}
            />
          ) : (
            <span className="sport-value">{sportDetails.sport}</span>
          )}
        </div>
        <div className="category-box">
          <span className="category-label">Category:</span>
          {isEditing ? (
            <input
              type="text"
              name="category"
              value={sportDetails.category}
              onChange={handleInputChange}
            />
          ) : (
            <span className="category-value">{sportDetails.category}</span>
          )}
        </div>
      </div>

      <div className="performance-section">
        <h4>Your Performance</h4>
        <div className="performance-details">
          {/* Toggle between text and input fields for both labels and values */}
          {Object.keys(sportDetails.performance).map((key) => (
            <div className="performance-item" key={key}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={sportDetails.performance[key].label}
                    onChange={(e) => handleInputChange(e, key, true)}
                  />
                  <input
                    type="text"
                    value={sportDetails.performance[key].value}
                    onChange={(e) => handleInputChange(e, key)}
                  />
                </>
              ) : (
                <>
                  <span className="performance-label">{sportDetails.performance[key].label}:</span>
                  <span className="performance-value">{sportDetails.performance[key].value}</span>
                </>
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

export default Sport;

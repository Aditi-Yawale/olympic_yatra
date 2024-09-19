import React, { useState } from 'react';
import './ProfilePage.css'; // Import the CSS file

const MedicalHistory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [medicalHistory, setMedicalHistory] = useState({
    diagnosis: ['Hypertonic disease', 'Persistent atrial fibrillation', 'Chronic heart failure'],
    treatment: ['10G Dopamine', '90MM Nitroglycerin for BP'],
    classification: ['III-IV CLASS NYHA'],
    testsDone: ['Diastolic stress test']
  });

  // Toggle between view and edit modes
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle input changes
  const handleInputChange = (e, section, index) => {
    const updatedSection = [...medicalHistory[section]];
    updatedSection[index] = e.target.value;
    setMedicalHistory({ ...medicalHistory, [section]: updatedSection });
  };

  // Handle adding new items
  const handleAddClick = (section) => {
    setMedicalHistory({
      ...medicalHistory,
      [section]: [...medicalHistory[section], ''] // Add a new empty field
    });
  };

  return (
    <div className="medical-history-container">
      <div className="medical-history-header">
        <h3>Medical History</h3>
        <span className="edit-icon" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
          ✎
        </span>
      </div>

      <div className="medical-history-grid">
        {/* Detailed Diagnosis */}
        <div className="medical-history-box">
          <h4>Detailed Diagnosis</h4>
          {medicalHistory.diagnosis.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'diagnosis', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
          {isEditing && (
            <button onClick={() => handleAddClick('diagnosis')}>+ Add Diagnosis</button>
          )}
        </div>

        {/* Treatment */}
        <div className="medical-history-box">
          <h4>Treatment</h4>
          {medicalHistory.treatment.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'treatment', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
          {isEditing && (
            <button onClick={() => handleAddClick('treatment')}>+ Add Treatment</button>
          )}
        </div>

        {/* Classification */}
        <div className="medical-history-box">
          <h4>Classification</h4>
          {medicalHistory.classification.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'classification', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
          {isEditing && (
            <button onClick={() => handleAddClick('classification')}>+ Add Classification</button>
          )}
        </div>

        {/* Tests Done */}
        <div className="medical-history-box">
          <h4>Tests Done</h4>
          {medicalHistory.testsDone.map((item, index) => (
            <div key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(e, 'testsDone', index)}
                />
              ) : (
                <p>{item}</p>
              )}
            </div>
          ))}
          {isEditing && (
            <button onClick={() => handleAddClick('testsDone')}>+ Add Test</button>
          )}
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

export default MedicalHistory;

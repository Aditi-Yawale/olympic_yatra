import React from 'react';
import './ProfilePage.css'; // Import the CSS file

const MedicalHistory = () => {
  return (
    <div className="medical-history-container">
      <div className="medical-history-header">
        <h3>Medical History</h3>
        <span className="edit-icon">✎</span> {/* Edit Icon */}
      </div>

      <div className="medical-history-grid">
        {/* Detailed Diagnosis */}
        <div className="medical-history-box">
          <h4>Detailed Diagnosis</h4>
          <p>Hypertonic disease</p>
          <p>Persistent atrial fibrillation</p>
          <p>Chronic heart failure</p>
        </div>

        {/* Treatment */}
        <div className="medical-history-box">
          <h4>Treatment</h4>
          <p>10G Dopamine</p>
          <p>90MM Nitroglycerin for BP</p>
        </div>

        {/* Classification */}
        <div className="medical-history-box">
          <h4>Classification</h4>
          <p>III-IV CLASS NYHA</p>
        </div>

        {/* Tests Done */}
        <div className="medical-history-box">
          <h4>Tests Done</h4>
          <p>Diastolic stress test</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

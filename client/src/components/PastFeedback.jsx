import React from 'react';
import './AthleteDashboard.css';

const PastFeedback = () => {
  return (
    <div className="past-feedback">
    <h3>Past Feedback</h3>
    
    <div className="feedback-card">
      <h4>Craig Fulton</h4>
      <p>Coach from 2020 - 2021</p>
      <p>Make sure to rest before events.</p>
    </div>
    
    <div className="feedback-card">
      <h4>Samantha Hill</h4>
      <p>Coach from 2019 - 2020</p>
      <p>Focus on improving your endurance during training.</p>
    </div>
    
    <div className="feedback-card">
      <h4>John Doe</h4>
      <p>Coach from 2021 - 2022</p>
      <p>Work on your mental toughness and visualization techniques.</p>
    </div>
    
    <div className="feedback-card">
      <h4>Emily Smith</h4>
      <p>Coach from 2018 - 2019</p>
      <p>Stay consistent with your nutrition and hydration routine.</p>
    </div>
  
    {/* More feedback cards can be added here */}
  </div>
  
  );
};

export default PastFeedback;
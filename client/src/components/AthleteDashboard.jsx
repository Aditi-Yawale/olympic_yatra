import React from 'react';
import Header2 from './Header2';
import MedalTally2 from './MedalTally2';
import Timeline from './Timeline';
import Performance from './Performance';
import PastFeedback from './PastFeedback';
import CoachCommunication from './CoachCommunication';
import PlayersPerCountry from './PlayersPerCountry';
import Sports2 from './Sports2';
import './AthleteDashboard.css';

const AthleteDashboard = () => {
  return (
    <div className="athlete-dashboard-container">
      <Header2 />
      <div className="dashboard">
        {/* Left Sidebar */}
        <div className="sidebar-left">
          <MedalTally2 className="medal-tally" />
          <Sports2 className="sports" />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Timeline className="timeline" />
          <Performance className="performance" />
          <PastFeedback className="past-feedback" />
        </div>

        {/* Right Sidebar */}
        <div className="sidebar-right">
          <CoachCommunication className="coach-communication" />
          <PlayersPerCountry className="players-per-country" />
        </div>
      </div>
    </div>
  );
};

export default AthleteDashboard;

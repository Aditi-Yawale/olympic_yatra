import React from 'react';
import Header2 from './Header2';
import MedalTally from './MedalTally';
import Timeline from './Timeline';
import Performance from './Performance';
import PastFeedback from './PastFeedback';
import CoachCommunication from './CoachCommunication';
import PlayersPerCountry from './PlayersPerCountry';
import Sports from './Sports';
import './AthleteDashboard.css';

const AthleteDashboard = () => {
  return (
    <div className="athlete-dashboard-container">
      <Header2 />
      <div className="dashboard">
        {/* Left Sidebar */}
        <div className="sidebar-left">
          <MedalTally className="medal-tally" />
          <Sports className="sports" />
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

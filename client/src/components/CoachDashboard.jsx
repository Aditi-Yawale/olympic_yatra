import React from 'react';
import Header4 from './Header4';
import MedalTally from './MedalTally';
import Timeline from './Timeline';
import Performance from './Performance';
import YourAthletes from './YourAthletes';
import AthleteCommunication from './AthleteCommunication';
import PlayersPerCountry from './PlayersPerCountry';
import Sports3 from './Sports3';
import './CoachDashboard.css'; // Make sure to update the CSS file name if needed

const CoachDashboard = () => {
  return (
    <div className="coach-dashboard-container">
      <Header4 />
      <div className="dashboard">
        {/* Left Sidebar */}
        <div className="sidebar-left">
          <MedalTally className="medal-tally" />
          <Sports3 className="sports" />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Timeline className="timeline" />
          <Performance className="performance" />
          <YourAthletes className="your-athletes" />
        </div>

        {/* Right Sidebar */}
        <div className="sidebar-right">
          <AthleteCommunication className="athlete-communication" />
          <PlayersPerCountry className="players-per-country" />
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
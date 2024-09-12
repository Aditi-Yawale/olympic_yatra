import React from 'react';
import MedalTally from './components/MedalTally';
import EventSchedule from './components/EventSchedule';
import LiveEvent from './components/LiveEvent';
import Sports from './components/Sports';
import AtheletePerformance from './components/AtheletePerformance';
import Header from './components/Header';
import './App.css';



import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header"><Header /></div>
      </header>
      
      <div className="content-grid">
        <div className="medal-tally"><MedalTally /></div>
        <div className="event-schedule"><EventSchedule /></div>
        <div className="live-event"><LiveEvent /></div>
        <div className="sports"><Sports /></div>
        <div className="athelete-performance"><AtheletePerformance /></div>
      </div>
    </div>
  );
}

export default App;

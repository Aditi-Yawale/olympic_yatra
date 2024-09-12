import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedalTally from './components/MedalTally';
import EventSchedule from './components/EventSchedule';
import LiveEvent from './components/LiveEvent';
import Sports from './components/Sports';
import AtheletePerformance from './components/AtheletePerformance';
import Header from './components/Header';
import SignIn from './components/SignIn'; // Import your Sign In component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={
          <div className="content-grid">
            <div className="medal-tally"><MedalTally /></div>
            <div className="event-schedule"><EventSchedule /></div>
            <div className="live-event"><LiveEvent /></div>
            <div className="sports"><Sports /></div>
            <div className="athelete-performance"><AtheletePerformance /></div>
          </div>
        } />
        {/* Optionally, add a catch-all route */}
        <Route path="*" element={
          <div className="content-grid">
            <div className="medal-tally"><MedalTally /></div>
            <div className="event-schedule"><EventSchedule /></div>
            <div className="live-event"><LiveEvent /></div>
            <div className="sports"><Sports /></div>
            <div className="athelete-performance"><AtheletePerformance /></div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

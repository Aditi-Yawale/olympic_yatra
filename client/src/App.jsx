import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedalTally from './components/MedalTally';
import EventSchedule from './components/EventSchedule';
import LiveEvent from './components/LiveEvent';
import Sports from './components/Sports';
import AtheletePerformance from './components/AtheletePerformance';
import Header from './components/Header';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
import Login from './components/Login';
import Signup from './components/Signup';
import CoachDashboard from './components/CoachDashboard';
import AthleteDashboard from './components/AthleteDashboard';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/coachdashboard" element={<CoachDashboard />} />
        <Route path="/athletedashboard" element={<AthleteDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/athletedashboard" element={<AthleteDashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

=======
        <Route path="/profile" element={<ProfilePage />} /> {/* Add ProfilePage route */}
>>>>>>> f89bf408169534abc13c50e977d10795d3a3680c
        <Route path="/" element={
          <div className="content-grid">
            <div className="medal-tally"><MedalTally /></div>
            <div className="event-schedule"><EventSchedule /></div>
            <div className="live-event"><LiveEvent /></div>
            <div className="sports"><Sports /></div>
            <div className="athelete-performance"><AtheletePerformance /></div>
          </div>
        } />
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
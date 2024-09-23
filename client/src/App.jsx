
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedalTally from './components/MedalTally';
import EventSchedule from './components/EventSchedule';
import LiveEvent from './components/LiveEvent';
import Sports from './components/Sports';
import AtheletePerformance from './components/AtheletePerformance';
import Header from './components/Header';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import Signup from './components/Signup';
import CoachDashboard from './components/CoachDashboard';
import AthleteDashboard from './components/AthleteDashboard';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import PieChart from './components/PieChart'; // Add import for PieChart
import BarChart from './components/BarChart'; // Add import for BarChart
import { barChartData, chartData } from './components/data'; // Add import for data

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Add ProfilePage route */}
        <Route path="/" element={
          <div className="content-grid">
            <div className="medal-tally"><MedalTally /></div>
            <div className="event-schedule"><EventSchedule /></div>
            <div className="live-event"><LiveEvent /></div>
            <div className="sports"><Sports /></div>
            <div className="athelete-performance"><AtheletePerformance /></div>
            <div className="pie-chart">
              <PieChart chartData={chartData} /> {/* Include PieChart */}
            </div>
          </div>
        } />
        <Route path="*" element={
          <div className="charts">
            <div className="pie-chart">
              <PieChart chartData={chartData} /> {/* Include PieChart */}
            </div>
            <div className="bar-chart">
              <BarChart chartData={barChartData} /> {/* Include BarChart */}
            </div>
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;

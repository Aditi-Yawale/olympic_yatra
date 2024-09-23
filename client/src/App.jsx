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
import PieChart from './components/PieChart'; // Import for PieChart
import BarChart from './components/BarChart'; // Import for BarChart
import Plot1 from './components/Plot1'; // Import for plot1

// Import necessary data
import { barChartData, chartData } from './components/data';

import './App.css'; // Import styles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different components */}
        <Route path="/coachdashboard" element={<CoachDashboard />} />
        <Route path="/athletedashboard" element={<AthleteDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Define the default route */}
        <Route
          path="/"
          element={
            <div className="content-grid">
              <div className="medal-tally">
                <MedalTally />
              </div>
              <div className="event-schedule">
                <EventSchedule />
              </div>
              <div className="live-event">
                <LiveEvent />
              </div>
              <div className="sports">
                <Sports />
              </div>
              <div className="athelete-performance">
                <AtheletePerformance />
              </div>
              <div className="pie-chart">
                <PieChart chartData={chartData} /> {/* Render PieChart */}
              </div>
              <div className="bar-chart">
                <BarChart chartData={barChartData} /> {/* Render BarChart */}
              </div>
                            <div className="pie-chart">
                <Plot1 /> {/* Render Plot1 for pie chart */}
              </div>
            </div>
          }
        />

        {/* Fallback route for undefined paths */}
        <Route
          path="*"
          element={
            <div className="charts">
              <div className="bar-chart">
                <BarChart chartData={barChartData} /> {/* Render BarChart first */}
              </div>
              <div className="pie-chart">
                <PieChart chartData={chartData} /> {/* Render PieChart second */}
              </div>
              <div className="pie-chart">
                <Plot1 /> {/* Render Plot1 for pie chart */}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedalTally from './components/MedalTally';
import EventSchedule from './components/EventSchedule';
import LiveEvent from './components/LiveEvent';
import Sports from './components/Sports';
import Header from './components/Header';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import Signup from './components/Signup';
import CoachDashboard from './components/CoachDashboard';
import AthleteDashboard from './components/AthleteDashboard';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import './components/CommonDashboard.css';

// Visualizations
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import Plot1 from './components/Plot1';
import Plot2 from './components/Plot2';
import AgeDistributionChart from './components/AgeDistributionChart';
import MedalsOverYearsChart from './components/MedalsOverYearsChart';
import HeightVsWeightChart from './components/HeightVsWeightChart';
import TopCountriesParticipationChart from './components/TopCountriesParticipationChart';
import GenderWiseParticipationChart from './components/GenderWiseParticipationChart';
import { barChartData, chartData } from './components/data';
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
        <Route
          path="/"
          element={
            <div className="content-grid">
              <div className="medal-tally-container">
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
              {/* <div className="athelete-performance">
                <AtheletePerformance />
              </div> */}
              <div className="plot1">
                <Plot1 />
              </div>
              <div className="plot2">
                <Plot2 />
              </div>
              <div className="age-distribution-chart">
                <AgeDistributionChart />
              </div>
              <div className="medals-over-years-chart">
                <MedalsOverYearsChart />
              </div>
              <div className="medals-over-years-chart">
                <HeightVsWeightChart />
              </div>
              <div className="age-distribution-chart">
                <TopCountriesParticipationChart />
              </div>
              <div className="age-distribution-chart">
                <GenderWiseParticipationChart />
              </div>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="charts">
              <div className="bar-chart">
                <BarChart chartData={barChartData} />
              </div>
              <div className="pie-chart">
                <PieChart chartData={chartData} />
              </div>
              <div className="plot1">
                <Plot1 />
              </div>
              <div className="plot2">
                <Plot2 />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

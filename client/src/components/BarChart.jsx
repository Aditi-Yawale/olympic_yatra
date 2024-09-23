// BarChart.jsx

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import PropTypes from 'prop-types';

// Register components needed for the Bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ chartData }) => {
  return (
    <div className="bar-chart-container">
      <h2>Olympics Medal Distribution</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Allow chart to scale without aspect ratio constraint
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Medal Distribution by Country',
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default BarChart;

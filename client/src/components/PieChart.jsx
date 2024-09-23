import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

// Register components needed for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData }) => {
  return (
    <div className="pie-chart-container">
      <h2>Olympics Medal Distribution</h2>
      <Pie
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
        }}
      />
    </div>
  );
};

PieChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default PieChart;

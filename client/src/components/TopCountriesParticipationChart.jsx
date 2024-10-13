import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TopCountriesParticipationChart() {
    const [participationData, setParticipationData] = useState({ labels: [], counts: [] });

    useEffect(() => {
        const fetchTopCountries = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/top-countries');
                const fetchedCountries = response.data;

                // Log fetched data for debugging
                console.log("Fetched countries:", fetchedCountries);

                // Calculate country participation
                calculateParticipation(fetchedCountries);
            } catch (error) {
                console.error("Error fetching top countries data:", error);
            }
        };

        fetchTopCountries();
    }, []);

    const calculateParticipation = (fetchedCountries) => {
        const labels = fetchedCountries.map(country => country.NOC); // Extract country codes
        const counts = fetchedCountries.map(country => country.count); // Extract counts

        setParticipationData({ labels, counts });
    };

    const participationDataChart = {
        labels: participationData.labels,
        datasets: [
            {
                label: 'Total Athlete Participation',
                data: participationData.counts,
                backgroundColor: '#2196F3',
                borderColor: '#1976D2',
                borderWidth: 1,
                borderRadius: 10,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h2>Top Countries by Athlete Participation</h2>
            <Bar data={participationDataChart} options={options} />
        </div>
    );
}

export default TopCountriesParticipationChart;

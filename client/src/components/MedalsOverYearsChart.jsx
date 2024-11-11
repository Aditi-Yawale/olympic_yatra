import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MedalsOverYearsChart() {
    const [medalsData, setMedalsData] = useState({ labels: [], counts: [] });

    useEffect(() => {
        const fetchMedals = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/medals');
                const fetchedMedals = response.data;
                calculateMedalsPerYear(fetchedMedals);
            } catch (error) {
                console.error("Error fetching medal data:", error);
            }
        };

        fetchMedals();
    }, []);

    const calculateMedalsPerYear = (fetchedMedals) => {
        const yearCounts = fetchedMedals.reduce((acc, medal) => {
            const year = medal.Year;
            if (year) {
                acc[year] = (acc[year] || 0) + 1;
            }
            return acc;
        }, {});

        const labels = Object.keys(yearCounts).sort();
        const counts = labels.map(year => yearCounts[year]);
        setMedalsData({ labels, counts });
    };

    const medalsDataChart = {
        labels: medalsData.labels,
        datasets: [
            {
                label: 'Total Medals Won',
                data: medalsData.counts,
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
                borderWidth: 1,
                borderRadius: 10,
                barPercentage: 1,
                categoryPercentage: 0.8,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                    display: true,
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
        <div>
            <h2>Total Medals Won Over the Years</h2>
            <Bar data={medalsDataChart} options={options} />
        </div>
    );
}

export default MedalsOverYearsChart;

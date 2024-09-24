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

                // Calculate total medals per year
                calculateMedalsPerYear(fetchedMedals);
            } catch (error) {
                console.error("Error fetching medal data:", error);
            }
        };

        fetchMedals();
    }, []);

    const calculateMedalsPerYear = (fetchedMedals) => {
        const yearCounts = {};

        fetchedMedals.forEach(medal => {
            const year = medal.Year;
            if (year) {
                yearCounts[year] = (yearCounts[year] || 0) + 1; // Increment medal count for the year
            }
        });

        const labels = Object.keys(yearCounts).sort(); // Sort years
        const counts = labels.map(year => yearCounts[year]); // Align counts with sorted years
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
                borderWidth: 1, // Makes the bars outlined
                borderRadius: 10, // Rounded top edges
                barPercentage: 1, // Make bars fill the whole space
                categoryPercentage: 0.8, // Make bars thicker to touch each other
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true, // Forces the bars to stack close together
                grid: {
                    display: false, // Hide the gridlines on the X axis
                },
            },
            y: {
                stacked: true, // Forces the Y axis to behave for stacked charts
                beginAtZero: true, // Start the chart at zero
                grid: {
                    display: true,
                },
            },
        },
        plugins: {
            legend: {
                display: true, // Show or hide legend
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

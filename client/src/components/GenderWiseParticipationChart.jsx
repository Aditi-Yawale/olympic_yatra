/* import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function GenderWiseParticipationChart() {
    const [participationData, setParticipationData] = useState({ labels: [], maleCounts: [], femaleCounts: [] });

    useEffect(() => {
        const fetchGenderParticipation = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/gender-wise-participation');
                const fetchedParticipationData = response.data;

                // Log fetched data for debugging
                console.log("Fetched gender participation data:", fetchedParticipationData);

                // Calculate gender participation
                calculateParticipation(fetchedParticipationData);
            } catch (error) {
                console.error("Error fetching gender participation data:", error);
            }
        };

        fetchGenderParticipation();
    }, []);

    const calculateParticipation = (fetchedParticipationData) => {
        const maleCount = fetchedParticipationData.find(participation => participation.Gender === 'Male')?.count || 0;
        const femaleCount = fetchedParticipationData.find(participation => participation.Gender === 'Female')?.count || 0;

        setParticipationData({ labels: ['Male', 'Female'], maleCounts: [maleCount], femaleCounts: [femaleCount] });
    };

    const participationDataChart = {
        labels: participationData.labels,
        datasets: [
            {
                label: 'Male Participation',
                data: participationData.maleCounts,
                backgroundColor: '#36A2EB', // Color for male participation
                borderColor: '#36A2EB',
                borderWidth: 1,
            },
            {
                label: 'Female Participation',
                data: participationData.femaleCounts,
                backgroundColor: '#FF6384', // Color for female participation
                borderColor: '#FF6384',
                borderWidth: 1,
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
            <h2>Gender-wise Athlete Participation</h2>
            <Bar data={participationDataChart} options={options} />
        </div>
    );
}

export default GenderWiseParticipationChart;
 */


import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function GenderWiseParticipationChart() {
    const [participationData, setParticipationData] = useState({ labels: [], counts: [] });

    useEffect(() => {
        const fetchGenderParticipation = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/gender-wise-participation'); // Update the API endpoint
                const fetchedParticipationData = response.data;

                // Log fetched data for debugging
                console.log("Fetched gender participation data:", fetchedParticipationData);

                // Calculate gender participation
                calculateParticipation(fetchedParticipationData);
            } catch (error) {
                console.error("Error fetching gender participation data:", error);
            }
        };

        fetchGenderParticipation();
    }, []);

    const calculateParticipation = (fetchedParticipationData) => {
        // Extract labels and counts based on your data structure
        const labels = fetchedParticipationData.map(participation => participation.Sex === "M" ? "Male" : "Female");
        const counts = fetchedParticipationData.map(participation => participation.count);

        setParticipationData({ labels, counts });
    };

    const participationDataChart = {
        labels: participationData.labels,
        datasets: [
            {
                label: 'Total Athlete Participation by Gender',
                data: participationData.counts,
                backgroundColor: ['#36A2EB', '#FF6384'], // Different colors for gender
                borderColor: ['#FFF'], // Optional: border color
                borderWidth: 2, // Optional: border width
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h2>Gender-wise Athlete Participation</h2>
            <Pie data={participationDataChart} options={options} />
        </div>
    );
}

export default GenderWiseParticipationChart;

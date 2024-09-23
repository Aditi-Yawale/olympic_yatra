import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function AgeDistributionChart() {
    const [ageData, setAgeData] = useState({ labels: [], counts: [] });

    useEffect(() => {
        const fetchMedals = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/medals');
                const fetchedMedals = response.data;

                // Calculate age distribution
                calculateAgeDistribution(fetchedMedals);
            } catch (error) {
                console.error("Error fetching medal data:", error);
            }
        };

        fetchMedals();
    }, []);

    const calculateAgeDistribution = (fetchedMedals) => {
        const ageBins = Array(7).fill(0); // 10 age bins for ranges [0-9], [10-19], ..., [90-99]
        fetchedMedals.forEach(medal => {
            if (medal.Age != null) {
                const binIndex = Math.min(Math.floor(medal.Age / 10), 9); // Cap at index 9 for ages 90 and above
                ageBins[binIndex] += 1;
            }
        });

        // Create labels for age ranges
        const labels = ageBins.map((_, index) => `${index * 10}-${(index + 1) * 10 - 1}`);
        setAgeData({ labels, counts: ageBins });
    };

    const ageDataChart = {
        labels: ageData.labels,
        datasets: [
            {
                label: 'Number of Athletes',
                data: ageData.counts,
                backgroundColor: '#3e95cd',
            },
        ],
    };

    return (
        <div>
            <h2>Age Distribution of Athletes</h2>
            <Bar data={ageDataChart} />
        </div>
    );
}

export default AgeDistributionChart;

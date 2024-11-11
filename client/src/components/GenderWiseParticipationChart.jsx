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
                const response = await axios.get('http://localhost:3001/api/gender-wise-participation');
                const fetchedParticipationData = response.data;

                // Calculate gender participation
                calculateParticipation(fetchedParticipationData);
            } catch (error) {
                console.error("Error fetching gender participation data:", error);
            }
        };

        fetchGenderParticipation();
    }, []);

    const calculateParticipation = (fetchedParticipationData) => {
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
                backgroundColor: ['#36A2EB', '#FF6384'],
                borderColor: ['#FFF'],
                borderWidth: 2,
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

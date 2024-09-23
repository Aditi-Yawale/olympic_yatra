import { useEffect, useState } from 'react';
import axios from 'axios';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function HeightVsWeightChart() {
    const [athleteData, setAthleteData] = useState({ heights: [], weights: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAthleteData = async () => {
            try {
                // Make a request to the /api/medals endpoint
                const response = await axios.get('http://localhost:3001/api/medals');
                const fetchedData = response.data;

                // Filter out athletes who have both Height and Weight defined
                const validData = fetchedData.filter(item => item.Height && item.Weight);

                // Extract heights and weights from valid data
                const heights = validData.map(item => item.Height);
                const weights = validData.map(item => item.Weight);

                setAthleteData({ heights, weights });
            } catch (error) {
                console.error("Error fetching athlete data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAthleteData();
    }, []);

    const scatterData = {
        labels: athleteData.heights, // Optional labels for tooltips
        datasets: [
            {
                label: 'Height vs Weight',
                data: athleteData.heights.map((height, index) => ({ x: height, y: athleteData.weights[index] })),
                backgroundColor: '#4c58af',
            },
        ],
    };

    const scatterOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Height (cm)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (kg)',
                },
            },
        },
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Height vs. Weight of Athletes</h2>
            <Scatter data={scatterData} options={scatterOptions} />
        </div>
    );
}

export default HeightVsWeightChart;

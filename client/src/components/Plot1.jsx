import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function Plot1() {
    const [medalData, setMedalData] = useState({ gold: 0, silver: 0, bronze: 0 });

    useEffect(() => {
        const fetchMedals = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/medals');
                console.log("Fetched medals:", response.data);
                const medals = response.data;
    
                // Count medals
                const counts = medals.reduce((acc, medal) => {
                    if (medal.Medal === 'Gold') acc.gold += 1;
                    else if (medal.Medal === 'Silver') acc.silver += 1;
                    else if (medal.Medal === 'Bronze') acc.bronze += 1;
                    return acc;
                }, { gold: 0, silver: 0, bronze: 0 });
    
                setMedalData(counts);
            } catch (error) {
                console.error("Error fetching medal data:", error);
            }
        };
    
        fetchMedals();
    }, []);

    const data = {
        labels: ['Gold', 'Silver', 'Bronze'],
        datasets: [
            {
                data: [medalData.gold, medalData.silver, medalData.bronze],
                backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32'],
            },
        ],
    };

    return (
        <div>
            <h1>Medal Distribution</h1>
            <Pie data={data} />
        </div>
    );
}

export default Plot1;
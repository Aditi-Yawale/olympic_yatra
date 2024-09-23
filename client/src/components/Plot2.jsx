import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function Plot2() {
    const [medals, setMedals] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [medalData, setMedalData] = useState({ gold: 0, silver: 0, bronze: 0 });

    useEffect(() => {
        const fetchMedals = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/medals');
                const fetchedMedals = response.data;
                setMedals(fetchedMedals);

                // Get unique countries
                const uniqueCountries = [...new Set(fetchedMedals.map(medal => medal.Team))];
                setCountries(uniqueCountries);
            } catch (error) {
                console.error("Error fetching medal data:", error);
            }
        };

        fetchMedals();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const counts = medals.reduce((acc, medal) => {
                if (medal.Team === selectedCountry) {
                    if (medal.Medal === 'Gold') acc.gold += 1;
                    else if (medal.Medal === 'Silver') acc.silver += 1;
                    else if (medal.Medal === 'Bronze') acc.bronze += 1;
                }
                return acc;
            }, { gold: 0, silver: 0, bronze: 0 });

            setMedalData(counts);
        }
    }, [selectedCountry, medals]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

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
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
            {selectedCountry && <Pie data={data} />}
        </div>
    );
}

export default Plot2;

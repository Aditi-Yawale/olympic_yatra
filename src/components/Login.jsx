import React, { useState } from 'react';
import Header from './Header'; // Import the Header component

const Login = () => {
    const [selectedTab, setSelectedTab] = useState('Athlete'); // Athlete login is default

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="image-container">
                    <img src="paris_olympic.png" alt="Olympics Image" />
                </div>
                <div className="form-container">
                    
                    {/* Tab buttons for Athlete and Coach */}
                    <div className="tab-container">
                        <button
                            className={selectedTab === 'Athlete' ? 'selected' : ''}
                            onClick={() => handleTabClick('Athlete')}
                        >
                            Athlete
                        </button>
                        <button
                            className={selectedTab === 'Coach' ? 'selected' : ''}
                            onClick={() => handleTabClick('Coach')}
                        >
                            Coach
                        </button>
                    </div>

                    {/* Render form based on selected tab */}
                    <h2>{selectedTab} Login</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>Username</label>
                        <input type="text" placeholder={`Enter your ${selectedTab.toLowerCase()} username`} />

                        <label>Password</label>
                        <input type="password" placeholder={`Enter your ${selectedTab.toLowerCase()} password`} />

                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Not already a user?{' '}
                        <span
                            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

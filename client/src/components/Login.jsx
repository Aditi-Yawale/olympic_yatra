import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [selectedTab, setSelectedTab] = useState('Athlete'); // Athlete login is default
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleSignUpClick = () => {
        // Navigate to the signup page
        navigate('/signup'); // Adjust the path if necessary
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', {
            email: username, // Adjust based on your login form
            password: password
        })
        .then(response => {
            console.log(response);
            if (response.data.token) {
                // Save token and navigate to the home page
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            } else {
                alert('Invalid credentials');
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
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
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder={`Enter your ${selectedTab.toLowerCase()} username`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder={`Enter your ${selectedTab.toLowerCase()} password`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Not already a user?{' '}
                        <span
                            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                            onClick={handleSignUpClick} // Call handleSignUpClick on click
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

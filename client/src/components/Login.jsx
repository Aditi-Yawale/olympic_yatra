import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header3 from './Header3';

const Login = () => {
    const [selectedTab, setSelectedTab] = useState('Athlete'); // Athlete login is default
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleSignUpClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the backend for login
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
        .then(response => {
            console.log('Response from server:', response); // Log the entire response for debugging

            // Check if we received a token in the response
            if (response.data && response.data.token) {
                console.log('Token received:', response.data.token); // Log the token for debugging
                // Save the token in local storage
                localStorage.setItem('token', response.data.token);

                // Navigate to the appropriate dashboard based on the selected tab
                if (selectedTab === 'Athlete') {
                    navigate('/athletedashboard'); // Navigate to Athlete Dashboard
                } else if (selectedTab === 'Coach') {
                    navigate('/coachdashboard'); // Navigate to Coach Dashboard
                }
            } else {
                // If token isn't present, it means login failed
                alert('Login failed: Invalid credentials or no token received from server.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error.response ? error.response.data : error.message); // Log the error details
            alert('Login error: ' + (error.response ? error.response.data.message : error.message)); // Show the actual error to the user
        });
    };

    return (
        <div>
            <Header3 />
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
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder={`Enter your ${selectedTab.toLowerCase()} email`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            onClick={handleSignUpClick}
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
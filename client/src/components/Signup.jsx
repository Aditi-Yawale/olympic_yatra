import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    
    // State to track form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dob: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });

    // State to track the current step (1, 2, or 3)
    const [step, setStep] = useState(1);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle the next button click to move to the next step
    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    // Handle the signup submission on the last step
    const handleSignup = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Send signup data to backend
        axios.post('http://localhost:3001/register', {
            username: formData.username,
            email: formData.email,
            dob: formData.dob,
            gender: formData.gender,
            password: formData.password
        })
        .then(response => {
            console.log(response);
            // After successful signup, navigate to the login page
            navigate('/login');
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };

    // Handle login redirection
    const handleLoginClick = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="image-container">
                    <img src="paris_olympic.png" alt="Olympics Image" />
                </div>
                <div className="form-container">
                    <h2>Sign up</h2>

                    {/* Conditionally render form based on current step */}
                    <form onSubmit={handleSignup}>
                        {step === 1 && (
                            <>
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />

                                <label>Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email id"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                
                                <button type="button" onClick={handleNext}>
                                    Next
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />

                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                
                                <button type="button" onClick={handleNext}>
                                    Next
                                </button>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Enter your password again"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />

                                <button type="submit">Sign Up</button>
                            </>
                        )}
                    </form>

                    <p>
                        Already a user?{' '}
                        <span
                            onClick={handleLoginClick}
                            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

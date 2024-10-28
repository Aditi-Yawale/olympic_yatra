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
        confirmPassword: '',
        otp: '', // New state to store OTP input
    });

    // State to track the current step (1, 2, 3, or 4)
    const [step, setStep] = useState(1);

    // State to track OTP sent status
    const [otpSent, setOtpSent] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    
    // Send OTP to user's email
    const sendOtp = () => {
        axios.post('http://localhost:3001/register-user', {  // Changed here
            username: formData.username,
            email: formData.email,
          })
          .then(response => {
            console.log("OTP sent:", response.data);
            setOtpSent(true); // Set OTP sent status to true
            setStep(3); // Move to the OTP input step
          })
          .catch(error => {
            console.error("Error sending OTP:", error);
          });
    };

        // Handle the next button click to move to the next step
        const handleNext = () => {
            if (step < 4) {
                if (step === 2 && !otpSent) {
                    sendOtp(); // Send OTP on step 2 if not already sent
                } else {
                    setStep(step + 1);
                }
            }
        };
    
    // Verify the OTP
    const verifyOtp = () => {
        console.log("Sending OTP:", formData.otp); // Log the OTP being sent
        axios.post('http://localhost:3001/verify-otp', {
            email: formData.email,
            otp: formData.otp
        })
        .then(response => {
            if (response.data.success) {
                setStep(step + 1); // Proceed to password step if OTP is correct
            } else {
                alert("Invalid OTP. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error verifying OTP:', error);
        });
    };
    
    // Handle the signup submission on the last step
    const handleSignup = (e) => {
        e.preventDefault();
    
        // Ensure the password is set after OTP verification
        axios.post('http://localhost:3001/set-password', {
            email: formData.email, // User's email
            password: formData.password // User's password
        })
        .then(response => {
            console.log(response.data);
            // Handle successful registration (e.g., navigate to the login page)
            navigate('/login');
        })
        .catch(error => {
            console.error('There was an error!', error.response.data); // Log the error response
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
                                    Send OTP
                                </button>
                            </>
                        )}

                        {step === 3 && otpSent && (
                            <>
                                <label>Enter OTP</label>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter the OTP sent to your email"
                                    value={formData.otp}
                                    onChange={handleChange}
                                />

                                <button type="button" onClick={verifyOtp}>
                                    Verify OTP
                                </button>
                            </>
                        )}

                        {step === 4 && (
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

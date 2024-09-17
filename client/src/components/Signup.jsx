import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
<<<<<<< HEAD

=======
    
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
    // State to track form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dob: '',
        gender: '',
        password: '',
<<<<<<< HEAD
        confirmPassword: '',
        otp: ''
    });

    // State to track the current step (1, 2, 3, or 4)
    const [step, setStep] = useState(1);
    const [otpSent, setOtpSent] = useState(false);
=======
        confirmPassword: ''
    });

    // State to track the current step (1, 2, or 3)
    const [step, setStep] = useState(1);
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

<<<<<<< HEAD
    // Handle moving to the next step
    const handleNext = async () => {
        // Make sure OTP is shown only if OTP is sent
        if (step === 4 && otpSent) {
            // Verify OTP
            try {
                const response = await axios.post('http://localhost:3001/verify-otp', {
                    email: formData.email,
                    otp: formData.otp
                });

                if (response.data.success) {
                    // After successful OTP verification, navigate to login
                    navigate('/login');
                } else {
                    alert('Invalid OTP. Please try again.');
                }
            } catch (error) {
                console.error('There was an error verifying the OTP!', error);
            }
        } else {
            // Move to next step
=======
    // Handle the next button click to move to the next step
    const handleNext = () => {
        if (step < 3) {
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
            setStep(step + 1);
        }
    };

<<<<<<< HEAD
    // Handle the signup submission
    const handleSignup = async (e) => {
        e.preventDefault();

=======
    // Handle the signup submission on the last step
    const handleSignup = (e) => {
        e.preventDefault();
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

<<<<<<< HEAD
        try {
            // Send signup data to backend
            await axios.post('http://localhost:3001/register', {
                username: formData.username,
                email: formData.email,
                dob: formData.dob,
                gender: formData.gender,
                password: formData.password
            });

            // After successful signup, call OTP API to send OTP to the user's email
            const otpResponse = await axios.post('http://localhost:3001/send-otp', {
                email: formData.email
            });

            if (otpResponse.data.success) {
                setOtpSent(true); // Mark OTP as sent
                setStep(4); // Move to OTP verification step
            } else {
                alert('Failed to send OTP. Please try again.');
            }

        } catch (error) {
            console.error('There was an error!', error);
        }
=======
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
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
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

<<<<<<< HEAD
                    {/* Conditionally render form based on the current step */}
=======
                    {/* Conditionally render form based on current step */}
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
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
<<<<<<< HEAD

=======
                                
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
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
<<<<<<< HEAD

=======
                                
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
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

<<<<<<< HEAD
                                <button type="submit">Submit</button>
                            </>
                        )}

                        {/* Render OTP form if OTP was sent and we are at step 4 */}
                        {step === 4 && otpSent && (
                            <>
                                <label>Enter OTP</label>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP sent to your email"
                                    value={formData.otp}
                                    onChange={handleChange}
                                />

                                <button type="button" onClick={handleNext}>
                                    Verify OTP
                                </button>
=======
                                <button type="submit">Sign Up</button>
>>>>>>> 552cc221612f6f21b8ab91cd68ae444c0102727a
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

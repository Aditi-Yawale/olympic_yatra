import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './AboutContact.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Go back to the previous page
    };

    return (
        <div>
            <Header />
            <div className="about-container">
                <h2>About Us</h2>
                <p className="about-description">
                    Welcome to the <strong>Performance Analysis and Recommendation System using Historical Olympics Dataset</strong>!
                </p>
                <p>
                    Our platform leverages historical Olympic data to provide performance analysis and recommendations for athletes and coaches. By using machine learning, we help athletes optimize their training and competition strategies.
                </p>
                <p>
                    Whether you're an athlete aiming for the next Olympics or a coach guiding your team, our system offers valuable insights and predictions to enhance performance.
                </p>
                <p className="about-footer">
                    We are dedicated to helping athletes achieve their best. Thank you for being part of our journey!
                </p>

                <button className="back-button" onClick={handleGoBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default AboutUs;

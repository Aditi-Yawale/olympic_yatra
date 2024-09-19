import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './AboutContact.css';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Go back to the previous page
    };

    return (
        <div>
            <Header />
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p className="contact-description">
                    If you have any questions, feedback, or need more information, feel free to reach out to us through the contact details provided below:
                </p>

                <div className="contact-info">
                    <p><strong>Email:</strong> support@olympicperformance.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Address:</strong> 1234 Sports Complex, 
                        Near National Stadium, 
                        New Delhi, India - 110001</p>
                    <p><strong>Working Hours:</strong> Monday to Friday, 9 AM to 6 PM (IST)</p>
                </div>

                <p className="contact-footer">We look forward to hearing from you!</p>

                <button className="back-button" onClick={handleGoBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ContactUs;

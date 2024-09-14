import React from 'react';
import Header from './Header'; // Import the Header component
import './Register.css'; // Importing the new CSS

const Register = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="image-container">
          <img src="paris_olympic.png" alt="Olympics Image" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
            
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
            
            <label>Country</label>
            <input type="text" placeholder="Enter your country" />
            
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
            
            <label>Sport</label>
            <input type="text" placeholder="Enter your sport" />
            
            <label>Domain</label>
            <input type="text" placeholder="Enter your domain" />
            
            <button type="submit">Register as an Athlete</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

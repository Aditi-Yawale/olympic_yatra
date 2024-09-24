import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './Register.css'; // Import your CSS

const Register = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    cholesterol: '',
    sugar: '',
    bp: '',
    heartRate: '',
    oxygenSaturation: '',
    vo2Max: '',
    coreTemp: '',
  });

  const [message, setMessage] = useState('Register as an Athlete');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/registerAthlete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registered Successfully!');
      } else {
        setMessage('Error occurred during registration');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Error occurred during registration');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form-container">
          <h2>Register as an Athlete</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
            />

            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              placeholder="Enter your height in cm"
              value={formData.height}
              onChange={handleChange}
            />

            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              placeholder="Enter your weight in kg"
              value={formData.weight}
              onChange={handleChange}
            />

            <label>Cholesterol (mg/dL)</label>
            <input
              type="number"
              name="cholesterol"
              placeholder="Enter your cholesterol level"
              value={formData.cholesterol}
              onChange={handleChange}
            />

            <label>Sugar Levels (mg/dL)</label>
            <input
              type="number"
              name="sugar"
              placeholder="Enter your sugar levels"
              value={formData.sugar}
              onChange={handleChange}
            />

            <label>Blood Pressure (mmHg)</label>
            <input
              type="text"
              name="bp"
              placeholder="Enter your BP (e.g., 120/80)"
              value={formData.bp}
              onChange={handleChange}
            />

            <label>Heart Rate (bpm)</label>
            <input
              type="number"
              name="heartRate"
              placeholder="Enter your heart rate"
              value={formData.heartRate}
              onChange={handleChange}
            />

            <label>Oxygen Saturation (SpO2) %</label>
            <input
              type="number"
              name="oxygenSaturation"
              placeholder="Enter your oxygen saturation level"
              value={formData.oxygenSaturation}
              onChange={handleChange}
            />

            <label>VO2 Max (ml/kg/min)</label>
            <input
              type="number"
              name="vo2Max"
              placeholder="Enter your VO2 Max"
              value={formData.vo2Max}
              onChange={handleChange}
            />

            <label>Core Body Temperature (°C)</label>
            <input
              type="number"
              name="coreTemp"
              placeholder="Enter your core body temperature"
              value={formData.coreTemp}
              onChange={handleChange}
            />

            <button type="submit">{message}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

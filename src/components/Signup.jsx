import React from 'react';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';

const Signup = () => {

const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

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
          <form onSubmit = {handleSignup}>
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
            
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your password" />
            
            <button type="submit">Sign Up</button>

            
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

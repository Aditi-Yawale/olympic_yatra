import React from 'react';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignInClick = () => {
    navigate('/signup'); // Redirects to the sign-in page
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="image-container">
          <img src="paris_olympic.png" alt="Olympics Image" />
        </div>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit = {handleSignInClick}>
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
            
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            
            <button type="submit">Login</button>

            
          </form>
          <p>
            Not already a user?{' '}
            <span
            onClick={handleSignInClick}
            style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
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

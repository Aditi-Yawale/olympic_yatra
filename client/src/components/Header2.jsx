import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Adjust the path if necessary

const Header2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown
  const navigate = useNavigate();

  // Function to toggle dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle logout and navigate to the common dashboard
  const handleLogout = () => {
    // Optionally, clear any user data or tokens from localStorage
    localStorage.removeItem('token');
    navigate('/#'); // Redirect to the common dashboard
  };

  return (
    <header className='header'>
      <div className="header-left">
        <img src="Olympic_flag.png" alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <Link to="/contactus" className="nav-item">Contact Us</Link>
          <Link to="/aboutus" className="nav-item">About Us</Link>
          <Link to="/register" className="nav-item">Register</Link>
        </nav>

        <div className="profile-photo">
          {/* Profile picture that toggles dropdown */}
          <img 
            src="avatar.png" 
            alt="Profile" 
            className="profile-img" 
            onClick={handleDropdownToggle} // Toggle dropdown on click
          />

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">Profile</Link>
              <span className="dropdown-item" onClick={handleLogout}>Logout</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header2;

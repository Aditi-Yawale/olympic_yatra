import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Adjust the path if necessary

const Header = () => {
  return (
    <header className='header'>
      <div className="header-left">
        <img src="Olympic_flag.png" alt="Logo" className="logo" />
        <span className="profile-text">Profile</span>
      </div>
      <div className="header-right">
        <nav className="header-nav">
        <Link to="/contactus" className="nav-item">Contact Us</Link>
          <Link to="/aboutus" className="nav-item">About Us</Link>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item">Register</Link>

        </nav>
        
        <div className="profile-photo">
        <Link to="/profile">
          <img src="avatar.png" alt="Profile" className="profile-img" />
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
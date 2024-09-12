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
          <a href="#contact-us" className="nav-item">Contact Us</a>
          <a href="#about-us" className="nav-item">About Us</a>
          <Link to="/signin" className="nav-item">Sign In</Link>

        </nav>
        
        <div className="profile-photo">
          <img src="avatar.png" alt="Profile" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
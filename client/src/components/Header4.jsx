import { Link } from 'react-router-dom';
import './Header.css'; // Adjust the path if necessary

const Header4 = () => {
  return (
    <header className='header'>
      <div className="header-left">
        <Link to="/coachdashboard">
          <img src="Olympic_flag.png" alt="Logo" className="logo" />
          <h2 className="site-title">Olympic Yatra</h2>
        </Link>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <Link to="/contactus" className="nav-item">Contact Us</Link>
          <Link to="/aboutus" className="nav-item">About Us</Link>
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

export default Header4;
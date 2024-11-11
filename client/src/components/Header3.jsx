import { Link } from 'react-router-dom';
import './Header.css'; // Adjust the path if necessary

const Header3 = () => {
  return (
    <header className='header'>
      <div className="header-left">
        <Link to="/athletedashboard">
          <img src="Olympic_flag.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <Link to="/contactus" className="nav-item">Contact Us</Link>
          <Link to="/aboutus" className="nav-item">About Us</Link>
        </nav>
        
        <div className="profile-photo">
          <img src="avatar.png" alt="Profile" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Header3;
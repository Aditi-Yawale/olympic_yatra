import React from 'react';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Details from './Details';
import Sport from './Sport';
import './ProfilePage.css'; 

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="profile-page-container">
        <div className="left-section">
          <ProfilePicture />
        </div>
        <div className="right-section">
          <Details />
          <Sport />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

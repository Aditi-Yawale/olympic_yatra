import React from 'react';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Details from './Details';
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

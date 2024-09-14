import React from 'react';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Details from './Details';
import Sport from './Sport';
import Experience from './Experience';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="profile-page-container">
        <ProfilePicture />
        <Details />
        <Sport />
      </div>
      <div className='profile-page-container'>
        <Experience />
      </div>

    </div>
  );
};

export default ProfilePage;

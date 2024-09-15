import React from 'react';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Details from './Details';
import Sport from './Sport';
import Experience from './Experience';
import MedicalHistory from './MedicalHistory';
import Coach from './Coach'; // Import the Coach component
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
      <div className="profile-page-container">
        <Experience />
        <MedicalHistory />
        <Coach />
      </div>
    </div>
  );
};

export default ProfilePage;

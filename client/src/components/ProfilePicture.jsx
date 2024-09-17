import React from 'react';
import './ProfilePage.css';

const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <div className="profile-header">
        <h3>Profile Picture</h3>
        <span className="edit-icon">&#9998;</span> 
      </div>
      <div className="profile-picture">
        <img src="myphoto.png" alt="Profile" />
      </div>
    </div>
  );
};

export default ProfilePicture;

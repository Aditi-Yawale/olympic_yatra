// ProfilePicture.jsx
import React, { useState } from 'react';

const UserProfilePicture = () => {
  const [profileImage, setProfileImage] = useState('myphoto.png'); // Default image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-picture-container">
      <div className="profile-header">
        <h3>Profile Picture</h3>
        <label htmlFor="file-input" className="edit-icon" style={{ cursor: 'pointer' }}>
          &#9998;
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
      <div className="profile-picture">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default UserProfilePicture;

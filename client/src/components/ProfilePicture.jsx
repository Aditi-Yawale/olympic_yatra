import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState('myphoto.png'); // Default image

  // Function to handle file change (when user selects a new photo)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // Update profile image with the selected file
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-picture-container">
      <div className="profile-header">
        <h3>Profile Picture</h3>
        {/* Hidden file input triggered by the pencil icon */}
        <label htmlFor="file-input" className="edit-icon" style={{ cursor: 'pointer' }}>
          &#9998; 
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }} // Hide the file input
          onChange={handleImageChange} // Handle the file selection
        />
      </div>
      <div className="profile-picture">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default ProfilePicture;

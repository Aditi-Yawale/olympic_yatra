import React, { useState } from 'react';
import axios from 'axios';
import './ProfilePage.css';
import UserProfilePicture from './ProfilePicture'; // Adjust import if renamed



const ProfilePage = () => {
  const [profile, setProfile] = useState({
    _id: '',
    name: '',
    email: '',
    age: '',
    medicalHistory: {
      diagnosis: '',
      treatment: ''
    },
    experience: {
      districtLevel: '',
      stateLevel: '',
      nationalLevel: '',
      internationalLevel: ''
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleMedicalHistoryChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      medicalHistory: {
        ...prevProfile.medicalHistory,
        [name]: value
      }
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      experience: {
        ...prevProfile.experience,
        [name]: value
      }
    }));
  };

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleFetch = () => {
    axios.get(`/api/user/${userId}`)
      .then(response => {
        setProfile(response.data);
        setIsEditing(true);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post('/api/user', profile)
      .then(response => {
        console.log('Profile added successfully:', response.data);
        setProfile({
          _id: '', name: '', email: '', age: '',
          medicalHistory: { diagnosis: '', treatment: '' },
          experience: { districtLevel: '', stateLevel: '', nationalLevel: '', internationalLevel: '' }
        });
        setUserId('');
      })
      .catch(error => {
        console.error('Error adding profile:', error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`/api/user/${profile._id}`, profile)
      .then(response => {
        console.log('Profile updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <h3>{isEditing ? 'Update Profile' : 'Add Profile'}</h3>

      <UserProfilePicture />


      <label>
        User ID:
        <input
          type="number"
          value={userId}
          onChange={handleIdChange}
          required
        />
        <button onClick={handleFetch}>Fetch Profile</button>
      </label>

      <form onSubmit={isEditing ? handleUpdate : handleAdd}>
        <div className="form-section">
          {/* User Details Box */}
          <div className="form-box">
            <h4>User Details</h4>
            <label>
              ID:
              <input
                type="number"
                name="_id"
                value={profile._id}
                onChange={handleChange}
                required
                disabled={isEditing}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Medical History Box */}
          <div className="form-box">
            <h4>Medical History</h4>
            <label>
              Diagnosis:
              <input
                type="text"
                name="diagnosis"
                value={profile.medicalHistory.diagnosis}
                onChange={handleMedicalHistoryChange}
              />
            </label>
            <label>
              Treatment:
              <input
                type="text"
                name="treatment"
                value={profile.medicalHistory.treatment}
                onChange={handleMedicalHistoryChange}
              />
            </label>
          </div>

          {/* Experience Box */}
          <div className="form-box">
            <h4>Experience</h4>
            <label>
              District Level:
              <input
                type="text"
                name="districtLevel"
                value={profile.experience.districtLevel}
                onChange={handleExperienceChange}
              />
            </label>
            <label>
              State Level:
              <input
                type="text"
                name="stateLevel"
                value={profile.experience.stateLevel}
                onChange={handleExperienceChange}
              />
            </label>
            <label>
              National Level:
              <input
                type="text"
                name="nationalLevel"
                value={profile.experience.nationalLevel}
                onChange={handleExperienceChange}
              />
            </label>
            <label>
              International Level:
              <input
                type="text"
                name="internationalLevel"
                value={profile.experience.internationalLevel}
                onChange={handleExperienceChange}
              />
            </label>
          </div>
        </div>
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ProfilePage;

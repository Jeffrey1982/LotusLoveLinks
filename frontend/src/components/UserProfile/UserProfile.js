import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import UserPhoto from './UserPhoto';
import UserPhotoGallery from './UserPhotoGallery';
import './UserProfile.scss';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userGalleryPhotos, setUserGalleryPhotos] = useState([]);
  
  const userId = "12345";

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const fetchGalleryPhotosForUser = async () => {
    try {
        const response = await fetch(`/api/userphotos/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching photos:", error);
        return [];
    }
  }

  useEffect(() => {
    const fetchUserPhotos = async () => {
      const photos = await fetchGalleryPhotosForUser();
      setUserGalleryPhotos(photos);
    };

    fetchUserPhotos();
  }, []);

  return (
    <div className="user-profile-container">
      <UserPhoto />

      <h2>Your Profile</h2>

      {isEditing ? (
        <EditProfile onCancel={handleEditToggle} />
      ) : (
        <>
          <p>Name: John Doe</p>
          <p>Age: 25</p>
          <p>Location: New York, USA</p>
          <p>About: Love to travel and meet new people.</p>

          <button onClick={handleEditToggle}>Edit Profile</button>
        </>
      )}

      <UserPhotoGallery userId={userId} photos={userGalleryPhotos} />
    </div>
  );
};

export default UserProfile;

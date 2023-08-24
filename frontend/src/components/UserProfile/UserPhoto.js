import React from 'react';

const UserPhoto = () => {
  return (
    <div className="user-photo-container">
      {/* Placeholder for profile photo */}
      <img src="path_to_default_image.jpg" alt="User" />

      <button>Change Photo</button> {/* This can open a modal or an input to upload a new photo */}
    </div>
  );
};

export default UserPhoto;

import React, { useState } from 'react';
import './UserPhotoGallery.scss';

const UserPhotoGallery = ({ userId, photos }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handlePhotoUpload = async (event) => {
    setIsUploading(true);
    
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    formData.append('userId', userId);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const newPhoto = await response.json();
      setPhotos(prevPhotos => [...prevPhotos, newPhoto]);
    } catch (error) {
      console.error("Error uploading photo:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="photo-gallery-container">
      <div className="photo-upload">
        <label>
          Upload new photo:
          <input type="file" onChange={handlePhotoUpload} disabled={isUploading} />
        </label>
      </div>

      <div className="photos">
        {photos.map((photo, index) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.photo_url} alt={`User photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPhotoGallery;

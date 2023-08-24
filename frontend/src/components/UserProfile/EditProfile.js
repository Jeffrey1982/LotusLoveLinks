import React from 'react';

const EditProfile = ({ onCancel }) => {
  return (
    <div className="edit-profile-container">
      <h3>Edit Your Details</h3>
      
      {/* Example form for editing profile */}
      <form>
        <label>Name:</label>
        <input type="text" defaultValue="John Doe" />

        <label>Age:</label>
        <input type="number" defaultValue={25} />

        <label>Location:</label>
        <input type="text" defaultValue="New York, USA" />

        <label>About:</label>
        <textarea defaultValue="Love to travel and meet new people." />

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProfile;

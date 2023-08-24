import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLogin from '../components/Auth/Login';
import AuthRegister from '../components/Auth/Register';
import UserProfile from '../components/UserProfile/UserProfile';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
      <Route path="/profile" element={<UserProfile />} />
      {/* ... other routes */}
      <Route path="*" element={<p>Path not resolved</p>} /> {/* Catch-all route */}
    </Routes>
  );
};

export default RoutesComponent;

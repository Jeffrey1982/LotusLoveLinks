import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        // Redirect to login page if no user is logged in
        return <Navigate to="/login" />;
    }

    // Render the element if a user is logged in
    return element;
};

export default PrivateRoute;

import React, { createContext, useContext, useState } from 'react';

// 1. Initialize the context
export const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false); // Change loading to false initially

    // Simulate a delayed authentication check
    setTimeout(() => {
        // Mock user data, replace with actual user data if logged in
        setCurrentUser({ id: 12345, name: "John Doe" });
        setLoading(false);
    }, 1000);

    if (loading) {
        return <div>Loading...</div>; // Or a loading spinner/component
    }

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Create the custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

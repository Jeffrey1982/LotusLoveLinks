import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderComponent from './Header/HeaderComponent';
import FooterComponent from './Footer/FooterComponent';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderOnPaths = ['/', '/login', '/register'];


  return (
    <div>
      {/* Conditionally render the HeaderComponent based on the current route */}
      {!hideHeaderOnPaths.includes(location.pathname) && <HeaderComponent />}
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;

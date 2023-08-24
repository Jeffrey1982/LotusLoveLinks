import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import './HeaderComponent.scss'; // Import your SCSS file for styling

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Lotus Love Links</Link>
      </div>
      <Menu mode="horizontal" className="nav" items={[
        { key: 'matches', label: <Link to="/matches">Online</Link> },
        { key: 'search', label: <Link to="/search">Search</Link> },
        { key: 'messages', label: <Link to="/messages">Messages</Link> },
        { key: 'Visits', label: <Link to="/visits">Visited Me</Link> },
        { key: 'Likes', label: <Link to="/likes">Likes</Link> },
        { key: 'Chat', label: <Link to="/chat">Chat</Link> },
        { key: 'settings', label: <Link to="/settings">Settings</Link> },
        { key: 'premium', label: <Link to="/premium">Premium</Link> },
        // ... other menu items
      ]} />
      <div className="header-buttons">
        <Button type="primary" className="login-button">
          Log In
        </Button>
        <Button className="signup-button">Sign Up</Button>
      </div>
    </header>
  );
};

export default HeaderComponent;

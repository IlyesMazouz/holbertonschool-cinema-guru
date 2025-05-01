import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <div>
        <img src="https://picsum.photos/100/100" alt="User Avatar" />
        <p>Welcome, {userUsername}</p>
      </div>
      <span onClick={logout}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </span>
    </nav>
  );
};

export default Header;

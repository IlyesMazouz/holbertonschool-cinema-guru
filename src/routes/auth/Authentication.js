import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSwitch = (isLogin) => {
    setSwitch(isLogin);
  };

  return (
    <div className="auth-container">
      <h1 className="auth-header">Cinema Guru</h1>
      <div className="auth-form">
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}

        <div className="auth-toggle-buttons">
          <button
            className="auth-toggle-button"
            onClick={() => handleSwitch(true)}
          >
            Sign In
          </button>
          <button
            className="auth-toggle-button"
            onClick={() => handleSwitch(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

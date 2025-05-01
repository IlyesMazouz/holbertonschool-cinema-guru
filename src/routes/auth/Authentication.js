import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const endpoint = _switch ? '/routes/auth/login' : '/routes/auth/register';
    const requestBody = { username, password };

    axios
      .post(endpoint, requestBody)
      .then((response) => {
        const { token, username: user } = response.data;

        localStorage.setItem('accessToken', token);

        setUserUsername(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error('Authentication failed', error);
      });
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
        <form className="auth-submit-form" onSubmit={handleSubmit}>
          <button type="submit" className="auth-button">
            {_switch ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;

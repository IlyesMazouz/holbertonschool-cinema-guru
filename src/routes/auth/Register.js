import React from 'react';
import './auth.css';

const Register = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const handleRegister = () => {
    console.log('User registered:', username);
  };

  return (
    <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="auth-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="auth-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default Register;

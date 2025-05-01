import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-content">
        <h2>Welcome to your dashboard, {userUsername}!</h2>
      </div>
    </div>
  );
};

export default Dashboard;

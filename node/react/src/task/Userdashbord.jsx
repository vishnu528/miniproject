import React, { useState } from 'react';

const UserDashboard = () => {
  const [userName, setUserName] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLogin = () => {
    if (userName.trim() !== '') {
      setLoginStatus(true);
    }
  };

  const handleLogout = () => {
    setUserName('');
    setLoginStatus(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {!loginStatus ? (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {userName}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const UserDetails = () => {
  const auth = useAuth();
  const currentUser = auth.userCredentials[0]; // Assuming there's only one authenticated user

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    auth.logoutUser();
  };

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <p>Name: {currentUser.name}</p>
        <p>Email: {currentUser.email}</p>
        <p>Password: {showPassword ? currentUser.password : '********'}</p>
        <button onClick={handleShowPassword}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserDetails;

import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const auth = useAuth();
  const history = useNavigate(); 

  useEffect(() => {
    if (!auth.userCredentials.length) {
      // Redirect to login page if userCredentials is empty
      history('/');
    }
  }, [auth.userCredentials,history]);
  console.log("user details page")
  const currentUser = auth.userCredentials[0]; // Assuming there's only one authenticated user

  const [showPassword, setShowPassword] = React.useState(false); // Use React.useState

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    history('/'); // Navigate to the login page after logout
  };

  if (!currentUser) {
    // Handle case when currentUser is undefined (e.g., not logged in)
    history('/'); // Navigate to the login page if not logged in
    return null; // Return null or another component while waiting for redirection
  }

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

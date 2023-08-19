import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { createBrowserHistory } from 'history';

const UserDetails = () => {
  const auth = useAuth();
  const history = createBrowserHistory(); 

  useEffect(() => {
    if (!auth.userCredentials.length) {
      // Redirect to login page if userCredentials is empty
      history.push('/');
    }
  }, [auth.userCredentials, history]);

  const currentUser = auth.userCredentials[0]; // Assuming there's only one authenticated user

  const [showPassword, setShowPassword] = React.useState(false); // Use React.useState

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    auth.logoutUser();
    history.push('/'); // Navigate to the login page after logout
  };

  if (!currentUser) {
    // Handle case when currentUser is undefined (e.g., not logged in)
    history.push('/'); // Navigate to the login page if not logged in
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

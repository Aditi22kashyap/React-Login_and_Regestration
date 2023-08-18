// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Initialize userCredentials state with an array
  const storedUserCredentials = JSON.parse(localStorage.getItem('userCredentials'));
  const initialUserCredentials = Array.isArray(storedUserCredentials) ? storedUserCredentials : [];
  const [userCredentials, setUserCredentials] = useState(initialUserCredentials);

  useEffect(() => {
    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
  }, [userCredentials]);

  const registerUser = (newUser) => {
    setUserCredentials((prevUsers) => [...prevUsers, newUser]);
  };

  const loginUser = (emailOrMobile, password) => {
    const foundUser = userCredentials.find(
      (user) => user.email === emailOrMobile || user.mobilenumer === emailOrMobile // Use 'mobilenumer' instead of 'mobile' if that's what you've used in your registration form
    );

    if (foundUser && foundUser.password === password) {
      return true; // Return true for successful login
    } else {
      // Handle authentication error
      console.log('Authentication failed');
      return false; // Return false for failed login
    }
  };

  const logoutUser = () => {
    setUserCredentials([]);
  };

  const value = {
    userCredentials,
    registerUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { AuthProvider } from './context/AuthContext';
import UserDetails from './User/UserDetails';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

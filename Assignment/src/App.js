import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



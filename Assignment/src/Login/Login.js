import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; 
const Login = () => {

  const auth = useAuth();
  const history = useNavigate(); 
  // const history = useHistory(); 
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(''); // Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.emailOrMobile)) {
      newErrors.emailOrMobile = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
  
    if (Object.keys(newErrors).length === 0) {
      const loginSuccessful = await auth.loginUser(formData.emailOrMobile, formData.password);
if (loginSuccessful) {
  console.log('Login successful!');
  alert('Login successful!');
  history('/user-details');
  // Perform actions after successful login
} else {
  setLoginError('Invalid email or password'); // Set the error message
  console.log('Login failed!');
}
    } else {
      setErrors(newErrors);
    }
  };
  
  

  return (
    <div className='outer-box'>
    
      <form id='registrationform' onSubmit={handleSubmit}>
      <h2>Login Page</h2>
        <div className='inner-box'>
          <label>Email/Mobile:</label>
          <input
            type="text"
            name="emailOrMobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            required
          />
          {errors.emailOrMobile && <div className="error">{errors.emailOrMobile}</div>}
        </div>
        <div className='inner-box'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
        <p>Not a user? <Link to="/register">Register</Link></p>
      </form>
      {loginError && <div className="error">{loginError}</div>} 
      
    </div>
  );
};

export default Login;

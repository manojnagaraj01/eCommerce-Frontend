import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser, setSuccessMessage ,setMobileNumber

} from "../../Redux/Slice/AuthSlice";
import "./LoginSignup.css"; // Make sure to replace this with the actual path to your CSS file
import axios from "axios";
const Registration = () => {
  const dispatch = useDispatch();
  const {successMessage,mobileNumber} = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [successMessage, setSuccessMessage] = useState('');
  const [loginToggle, setLoginToggle] = useState(true);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Full Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = 'Phone Number is required';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (event) => {
    const inputMobileNumber = event.target.value;
    const sanitizedMobileNumber = inputMobileNumber
      .replace(/\D/g, "")
      .slice(0, 10);
      dispatch(setMobileNumber(sanitizedMobileNumber))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const apiEndpoint = loginToggle
          ? 'http://localhost:8080/api/auth/login'
          : 'http://localhost:8080/api/auth/register';
  
        const response = await axios.post(apiEndpoint, {
          name,
          email,
          mobileNumber,
          password,
        });
  
        dispatch(setSuccessMessage(response.data.message));
  
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        dispatch(setErrors(error.response?.data.message || 'An error occurred'));
      }
    } else {
      console.log('Form validation failed');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setLoginToggle(!loginToggle);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="brand-logo"></div>
        <div className="brand-title">{loginToggle ? 'LOGIN' : 'REGISTER'}</div>
        {successMessage && (
          <div className="notification">
            <div className="notification__body">
              <img
                src="" 
                alt="Success"
                className="notification__icon"
              />
              {successMessage}
            </div>
            <div className="notification__progress"></div>
          </div>
        )}
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            {!loginToggle && (
              <>
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  value={mobileNumber}
                  onChange={handleInputChange}
                />
                {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
              </>
            )}

            <label>EMAIL</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>PASSWORD</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Min 6 characters long"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            {!loginToggle && (
              <>
                <label>CONFIRM PASSWORD</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </>
            )}

            <div className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'} Password
            </div>

            <button type="submit">{loginToggle ? 'LOGIN' : 'REGISTER'}</button>
          </form>

          <p>  
            {loginToggle ? 'Don\'t have an account?' : 'Already have an account?'}
            <button type="button" onClick={toggleForm}>
              {loginToggle ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

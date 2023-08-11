import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import AuthService from '../service/AuthService';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password || !isValidEmail()) {
   
      alert(
        'Please complete all form fields before registering or correcting errors.'
      );
    }
    const newUser = { email: email, password: password };


    try {
      const response = await AuthService.login(newUser);
      console.log("hadirr" + response.message)
      if (response.Role == "admin") {
        window.location.href = "/tous";
      } else if (response.Role == "employee") {
        window.location.href = "/prod";

      } else {
        setAlertMessage(
          response.error
        );


      }


    } catch (error) {
      console.log(error);

    }



  };

  const isValidEmail = () => {
    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@wind\.tn$/;
    return emailRegex.test(email);
  };

  const validateEmail = () => {
    if (!isValidEmail()) {
      setEmailError('Please enter an e-mail address in the format name.firstname@wind.tn.');


    } else {
      setEmailError('');
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);


  };







  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length > 8) {

      alert('The password must not exceed 8 characters.');
    } else {
      setAlertMessage('');
    }
  };

  return (
    <div className="form-container">

      <header className="form-header">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
        Wind Transport
      </header>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title-medium blue-title">Inscription</h2>
          {alertMessage && <p className="alert">{alertMessage}</p>}
          <label>
            Email:
            <input
              type="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              placeholder="E-mail (surname.firstname@wind.tn)"
              required
              className="input1"
            />
          </label>
          {emailError && <p className="error">{emailError}</p>}
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password (8 characters exactly)"
              minLength={8}
              required
              className="form-input"
            />
          </label>
          <br />


          <div className="button-container">
            <button type="submit" className="register-button">
            log in
            </button>
            <Link to="/Reset" className="forget-password-link">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
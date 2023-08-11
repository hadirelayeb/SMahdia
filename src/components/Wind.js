import React from 'react';
import './Wind.css';
import { Link } from 'react-router-dom';

function Wind() {
  return (
    <div className="Wind">
      <header className="Wind-header">
        <h1 className="title1">Wind Consulting</h1>
        <p className="subtitle">transport costs</p>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
        <Link to="/">
        <button className="start-button">Sign up</button>
        </Link>
        <Link to="/login">
        <button className="start-button">Sign in</button>
        </Link>
       



      </header>
    </div>
  );
}

export default Wind;

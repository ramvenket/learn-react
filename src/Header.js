import React from 'react';
import './bootstrap.min.css';

function Header() {
  return (
    <div className="header row align-items-center">
      <div className="col-md-4 text-center">
        <h1>Logo</h1>
      </div>
      <div className="col-md-8">
        <ul className="nav justify-content-around">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Career</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

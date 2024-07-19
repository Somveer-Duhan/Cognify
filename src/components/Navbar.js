import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import './Navbar.css'; // Ensure you have the correct path to your CSS

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference to local storage
  const handleDarkModeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Cognify</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Dashboard</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <button className="nav-link btn btn-outline-danger" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="nav-link btn btn-outline-secondary" onClick={handleDarkModeToggle}>
              {darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

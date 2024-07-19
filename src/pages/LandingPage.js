import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css'; 
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="landing-page">
        <Navbar/>
      <header className="landing-header">
        <h1>Cognify</h1>
        <p>Your personal productivity assistant</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
        <Link to="/login" className="cta-button">Login</Link>
      </header>
      <section className="features">
        <div className="feature-item">
          <h2>Organize Your Tasks</h2>
          <p>Manage and track your tasks effectively with our intuitive interface.</p>
        </div>
        <div className="feature-item">
          <h2>Take Notes</h2>
          <p>Keep your notes organized and easily accessible.</p>
        </div>
        <div className="feature-item">
          <h2>Analyze Your Productivity</h2>
          <p>Get insights into your productivity and improve your workflow.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>© 2024 Cognify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

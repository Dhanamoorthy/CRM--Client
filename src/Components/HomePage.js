import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="welcome-section">
          <h2>Welcome to Your CRM Application</h2>
          <p>Log in to access your account.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

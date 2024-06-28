// Navbar.js
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {


  const navigate = useNavigate()
  useEffect(() => {
    const performLogout = async () => {
      try {
        const res = await axios.get('https://crm-server-611x.onrender.com/auth/logout');
        console.log('Logout response:', res);
       
      } catch (err) {
        console.error('Logout error:', err);
      }
    };

    performLogout();
  }, [navigate]);

  const handleLogout = () => {
    // Directly navigating here, if you prefer this method
    navigate('/');
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item">Dashboard</span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/dashboard/leads" className="navbar-item">Leads</Link>
          <Link to="/dashboard/services" className="navbar-item">Services</Link>
          <Link to="/dashboard/contacts" className="navbar-item">Contacts</Link>
          <button className="button is-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

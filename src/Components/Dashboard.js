// Dashboard.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import LeadsPage from './LeadsPage'; // Import the LeadsPage component
import ServicesPage from './ServicesPage'; // Import the ServicesPage component
import ContactsPage from './ContactsPage'; // Import the ContactsPage component
import { Routes, Route } from 'react-router-dom';
import '../css/Dashboard.css'


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Navbar /> {/* Render the Navbar component */}
      <div className="dashboard-content">
        <h1 className='dashboard-title'>Welcome to the Dashboard</h1>
        <Routes>
          <Route path="/dashboard/leads" element={<LeadsPage />} />
          <Route path="/dashboard/services" element={<ServicesPage />} />
          <Route path="/dashboard/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

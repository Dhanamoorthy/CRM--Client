import React, { useState } from 'react'
import '../css/Registeration.css'
import axios from 'axios'

const LoginRegisteration = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://crm-server-611x.onrender.com/auth/register', formData);
      console.log('Form submitted:', response.data);
      // Handle success response (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error response (e.g., show an error message)
    }
  };
  return (
    <div className="registration-container">
      <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Role:</label>
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select a role</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
      </select>
    </div>
    <button type="submit">Register</button>
  </form>
  </div>
  )
}

export default LoginRegisteration
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default role

const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://crm-server-g7z4.onrender.com/auth/login',{username,password,role})
   .then(navigate('/dashboard'))
   .catch(err => console.log(err))
  };


  const handleRegister = () => {
    navigate('/register'); // Navigate to register page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
            <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
        <br />
        <br/>
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered yet? <button onClick={handleRegister}>Register here</button>
      </p>
    </div>
  );
};

export default LoginForm;

import axios from 'axios';
import React, {  useState } from 'react';
import '../css/LeadsPage.css';
import { useNavigate } from 'react-router-dom';


const LeadsPage = () => {
  const [leadData, setLeadData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    designation: '',
    leadStatus: 'New',
    description: ''
  });
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate()
 
  const handlelead = () =>{
    navigate('/leadlist')
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData({ ...leadData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://crm-server-g7z4.onrender.com/auth/leads', leadData);
      setLeads([...leads, response.data]);
      setLeadData({
        firstName: '',
        lastName: '',
        phone: '',
        designation: '',
        leadStatus: 'New',
        description: ''
      });
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };

  

  return (
    <div className="leads-form-container">
      <h1 className="form-heading">Lead Creation</h1>
      <form onSubmit={handleSubmit} className="leads-form">
        <input type="text" name="firstName" value={leadData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={leadData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input type="text" name="phone" value={leadData.phone} onChange={handleChange} placeholder="Phone Number" />
        <input type="text" name="designation" value={leadData.designation} onChange={handleChange} placeholder="Designation" />
        <select name="leadStatus" value={leadData.leadStatus} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Confirmed">Confirmed</option>
        </select>
        <textarea name="description" value={leadData.description} onChange={handleChange} placeholder="Description"></textarea>
        <button type="submit">Create Lead</button>
      </form>
      <button variant="primary" onClick={handlelead}>Show Leads List</button>
    </div>
  );
};

export default LeadsPage;

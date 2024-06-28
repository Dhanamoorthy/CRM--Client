import React, { useEffect, useState } from 'react'
import EditLeads from './EditLeads'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LeadList = () => {

    const [leads, setLeads] = useState([]);
    const [selectedLead, setSelectedLead] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


     const navigate = useNavigate()

     
  const handleSave = async (id, updatedLead) => {
    try {
      const response = await axios.put(`http://localhost:4000/auth/leadlist/${id}`, updatedLead);
      setLeads(leads.map(lead => (lead._id === id ? response.data : lead)));
      setIsModalOpen(false);
      setSelectedLead(null);
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };
    useEffect(() => {
        fetchLeads();
      }, []);
    
      const fetchLeads = async () => {
        try {
          const response = await axios.get('http://localhost:4000/auth/leadlist');
          setLeads(response.data);
        } catch (error) {
          console.error('Error fetching leads:', error);
        }
      };


     
  const handleEdit = (lead) => {
  
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

    
      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/auth/leads/${id}`);
          setLeads(leads.filter(lead => lead._id !== id));
          console.log(`Deleted lead with id: ${id}`);
        } catch (error) {
          console.error('Error deleting lead:', error);
        }
      };
  return (
    <div>
         <h2 className="leads-list-heading">Leads List</h2>
      <div className="leads-list">
        {leads.map((lead, index) => (
          <div className="card" key={index}>
            <h2><strong>{lead.firstName} {lead.lastName}</strong></h2>
            <p>{lead.phone}</p>
            <p>{lead.leadStatus}</p>
            <button onClick={() => handleEdit(lead)}>Edit</button>
            <button onClick={() => handleDelete(lead._id)}>Delete</button>
          </div>
        ))}
        <EditLeads
         show={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         lead={selectedLead}
         onSave={handleSave}
         
        />
      </div>
    </div>
  )
}

export default LeadList
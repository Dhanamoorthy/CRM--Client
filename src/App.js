

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import LoginRegisteration from './Components/LoginRegisteration';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import withAuth from './Components/withAuth'; // Import the HOC
import LeadsPage from './Components/LeadsPage'
import ServicePage from './Components/ServicesPage'
import ContactsPage from './Components/ContactsPage'
import EditLeads from './Components/EditLeads'
import LeadList from './Components/LeadList';

function App() {
  const AuthDashboard = withAuth(Dashboard); // Wrap Dashboard with HOC
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<LoginRegisteration/>}/>
    <Route path="/dashboard" element={<AuthDashboard />} />
    <Route path='/dashboard/leads' element={<LeadsPage/>}/>
    <Route path='/dashboard/services' element={<ServicePage/>}/>
    <Route path='/dashboard/contacts' element={<ContactsPage/>}/>
    <Route path='/leadlist' element={<LeadList/>}/>

   </Routes>
   </BrowserRouter>
   
  );
}

export default App;

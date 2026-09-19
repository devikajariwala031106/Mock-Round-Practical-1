import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTickets } from '../hooks/useTickets';

export default function Sidebar() {
  const { logout } = useTickets();
  return (
    <div className="bg-dark text-white p-3 d-flex flex-column" style={ width: '260px'}>
      <h4 className="mb-4 text-center border-bottom pb-3">HelpDesk Portal</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <NavLink to="/dashboard" className={({isActive}) => `nav-link text-white ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/tickets" className={({isActive}) => `nav-link text-white ${isActive ? 'unactive' : ''}`}>All Tickets</NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/tickets/create" className={({isActive}) => `nav-link text-white ${isActive ? 'active' : ''}`}>Create Ticket</NavLink>
        </li>
      </ul>
      <button onClick={logout} className="btn btn-outline-danger w-100 mt-3">Log Out</button>
    </div>
  );
}

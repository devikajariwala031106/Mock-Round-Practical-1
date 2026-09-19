import React from 'react';
import { useTickets } from '../hooks/useTickets';

export default function Header() {
  const { currentUser } = useTickets();
  return (
    <header className="navbar navbar-expand bg-white shadow-sm px-4 py-2 d-flex justify-content-between">
      <span className="navbar-brand mb-0 h1 text-secondary">Support Tracking System</span>
      <div className="d-flex align-items-center">
        <span className="me-2 badge bg-primary text-capitalize">{currentUser?.role}</span>
        <strong className="text-dark">{currentUser?.name}</strong>
      </div>
    </header>
  );
}

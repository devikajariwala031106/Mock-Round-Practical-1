import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from'react-router-dom';
import { TicketProvider, useTickets } from './hooks/useTickets';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import CreateTicket from './pages/CreateTicket';
import TicketDetails from './pages/TicketDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function ProtectedLayout({ children }) {
  const { currentUser } = useTickets();
  if (!currentUser) return <Navigate to="/login" replace />;

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="w-100 bg-light">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
          <Route path="/tickets" element={<ProtectedLayout><Tickets /></ProtectedLayout>} />
          <Route path="/tickets/create" element={<ProtectedLayout><CreateTicket /></ProtectedLayout>} />
          <Route path="/tickets/:id" element={<ProtectedLayout><TicketDetails /></ProtectedLayout>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </TicketProvider>
  );
}

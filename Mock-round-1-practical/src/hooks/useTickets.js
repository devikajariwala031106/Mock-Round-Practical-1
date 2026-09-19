import React, { createContext, useContext, useState, useEffect } from 'react';
import mockData from '../data/mockData.json';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [users] = useState(mockData.users);
  const [tickets, setTickets] = useState(() => {
    const localData = localStorage.getItem('tickets');
    return localData ? JSON.parse(localData) : mockData.tickets;
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && password === "123456");
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const createTicket = (subject, description, priority, assignedTo) => {
    const nextNumericId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1000;
    const newTicket = {
      id: nextNumericId,
      ticket_id: `TCK-${1000 + nextNumericId}`,
      subject,
      description,
      priority,
      status: 'Open',
      assigned_to: assignedTo ? parseInt(assignedTo) : null,
      created_by: currentUser ? currentUser.id : 3,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setTickets([newTicket, ...tickets]);
    return newTicket;
  };

  const updateTicket = (id, updatedFields) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === parseInt(id) 
        ? { ...ticket, ...updatedFields, updated_at: new Date().toISOString() } 
        : ticket
    ));
  };

  return (
    <TicketContext.Provider value={{ users, tickets, currentUser, login, logout, createTicket, updateTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketContext);
}

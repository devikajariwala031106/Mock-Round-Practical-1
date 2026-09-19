import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTickets } from '../hooks/useTickets';

export default function CreateTicket() {
  const { createTicket, users } = useTickets();
  const navigate = useNavigate();

  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [assignedTo, setAssignedTo] = useState('');
  const [error, setError] = useState('');

  const staff = users.filter(u => u.role === 'support');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple Validation
    if (!subject.trim() || !description.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    createTicket(subject, description, priority, assignedTo);
    navigate('/tickets');
  };

  return (
    <div className="container mt-2">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: '700px' }}>
        <div className="card-header bg-dark text-white">
          <h4 className="mb-0">Create New Ticket</h4>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Subject *</label>
              <input type="text" className="form-control" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Brief title of the issue" />
            </div>

            <div className="mb-3">
              <label className="form-label">Description *</label>
              <textarea className="form-control" rows="4" value={description} onChange={e => setDescription(e.target.value)} placeholder="Provide steps to reproduce or details..."></textarea>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Priority *</label>
                <select className="form-select" value={priority} onChange={e => setPriority(e.target.value)}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Assign To</label>
                <select className="form-select" value={assignedTo} onChange={e => setAssignedTo(e.target.value)}>
                  <option value="">Select Staff member</option>
                  {staff.map(u => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/tickets')}>Cancel</button>
              <button type="submit" className="btn btn-primary">Submit Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

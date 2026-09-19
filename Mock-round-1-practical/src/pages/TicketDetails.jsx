import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTickets } from '../hooks/useTickets';
import StatusBadge from '../components/StatusBadge';
import PriorityBadge from '../components/PriorityBadge';

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tickets, users, updateTicket } = useTickets();

  // Find the exact ticket matching the URL parameter ID
  const ticket = tickets.find(t => t.id === parseInt(id));
  const staff = users.filter(u => u.role === 'support');

  if (!ticket) {
    return <div className="alert alert-danger m-4">Ticket not found!</div>;
  }

  const [status, setStatus] = useState(ticket.status);
  const [assignedTo, setAssignedTo] = useState(ticket.assigned_to || '');

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTicket(ticket.id, {
      status,
      assigned_to: assignedTo ? parseInt(assignedTo) : null
    });
    alert('Ticket updated successfully!');
    navigate('/tickets');
  };

  const createdByUser = users.find(u => u.id === ticket.created_by)?.name || 'Unknown';

  return (
    <div className="container mt-2">
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate('/tickets')}>
        ← Back to List
      </button>

      <div className="row g-4">
        {/* Left Side: Ticket Overview Info */}
        <div className="col-md-8">
          <div className="card shadow-sm p-4 mb-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span className="text-muted small fw-bold">{ticket.ticket_id}</span>
                <h2>{ticket.subject}</h2>
              </div>
              <div className="d-flex gap-2">
                <PriorityBadge priority={ticket.priority} />
                <StatusBadge status={ticket.status} />
              </div>
            </div>

            <hr />

            <h5>Description</h5>
            <p className="bg-light p-3 rounded text-secondary" style={{ whiteSpace: 'pre-wrap' }}>
              {ticket.description}
            </p>

            <div className="text-muted small mt-3">
              <strong>Raised By:</strong> {createdByUser} <br />
              <strong>Created Date:</strong> {new Date(ticket.created_at).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Right Side: Update Actions Panel */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">Manage Ticket</h5>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Update Status</label>
                <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Reassign Agent</label>
                <select className="form-select" value={assignedTo} onChange={e => setAssignedTo(e.target.value)}>
                  <option value="">Unassigned</option>
                  {staff.map(u => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-success w-100 mt-2">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

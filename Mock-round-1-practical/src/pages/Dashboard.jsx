import React, { useMemo } from 'react';
import { useTickets } from '../hooks/useTickets';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import PriorityBadge from '../components/PriorityBadge';

export default function Dashboard() {
  const { tickets, users } = useTickets();

  const analytics = useMemo(() => {
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'Open').length,
      progress: tickets.filter(t => t.status === 'In Progress').length,
      resolved: tickets.filter(t => t.status === 'Resolved').length,
      closed: tickets.filter(t => t.status === 'Closed').length,
      highPriority: tickets.filter(t => t.priority === 'High').length,
      recent: tickets.slice(0, 5)
    };
  }, [tickets]);

  const getUserName = (id) => users.find(u => u.id === id)?.name || 'Unassigned';

  return (
    <div>
      <h2 className="mb-4">System Analysis Matrix</h2>
      <div className="row g-3 mb-4">
        {/* Metric Cards Row */}
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-primary border-4"><h6>Total Records</h6><h3>{analytics.total}</h3></div></div>
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-success border-4"><h6>Open</h6><h3>{analytics.open}</h3></div></div>
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-warning border-4"><h6>In Progress</h6><h3>{analytics.progress}</h3></div></div>
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-info border-4"><h6>Resolved</h6><h3>{analytics.resolved}</h3></div></div>
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-secondary border-4"><h6>Closed</h6><h3>{analytics.closed}</h3></div></div>
        <div className="col-md-2"><div className="card shadow-sm p-3 bg-white border-start border-danger border-4"><h6>Critical High</h6><h3>{analytics.highPriority}</h3></div></div>
      </div>

      <div className="card shadow-sm p-4">
        <h5 className="card-title mb-3">Recently Updated Records Queue</h5>
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th><th>Subject Query</th><th>Priority</th><th>Status Badge</th><th>Assigned Specialist</th>
            </tr>
          </thead>
          <tbody>
            {analytics.recent.map(ticket => (
              <tr key={ticket.id}>
                <td><Link to={`/tickets/${ticket.id}`} className="fw-bold">{ticket.ticket_id}</Link></td>
                <td>{ticket.subject}</td>
                <td><PriorityBadge priority={ticket.priority} /></td>
                <td><StatusBadge status={ticket.status} /></td>
                <td>{getUserName(ticket.assigned_to)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

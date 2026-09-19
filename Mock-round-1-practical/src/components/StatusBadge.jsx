import React from 'react';

export default function StatusBadge({ status }) {
  const mapping = {
    'Open': 'bg-success',
    'In Progress': 'bg-warning text-dark',
    'Resolved': 'bg-info text-white',
    'Closed': 'bg-secondary'
  };
  return <span className={`badge ${mapping[status] || 'bg-dark'}`}>{status}</span>;
}

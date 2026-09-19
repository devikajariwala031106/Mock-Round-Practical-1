import React from 'react';

export default function PriorityBadge({ priority }) {
  const mapping = {
    'High': 'bg-danger',
    'Medium': 'bg-warning text-dark',
    'Low': 'bg-info text-white'
  };
  return <span className={`badge ${mapping[priority] || 'bg-dark'}`}>{priority}</span>;
}

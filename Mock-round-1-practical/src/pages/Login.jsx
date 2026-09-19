import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTickets } from '../hooks/useTickets';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useTickets();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid system credentials. Use demo passwords.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-secondary" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-3">System Login</h3>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Context</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Security Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Authenticate Session</button>
        </form>
        <div className="mt-3 small text-muted text-center border-top pt-2">
          <strong>Demo Profiles (Pass: 123456):</strong><br/>
          support@company.com | employee@company.com
        </div>
      </div>
    </div>
  );
}

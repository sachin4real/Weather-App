import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import WeatherSearch from './components/WeatherSearch';

export default function App() {
  const [page, setPage] = useState('weather');

  const buttonStyle = {
    padding: '10px 16px',
    borderRadius: '6px',
    color: '#fff',
    border: 'none',
    marginRight: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f3f3', padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
        <button
          onClick={() => setPage('register')}
          style={{ ...buttonStyle, backgroundColor: '#3b82f6' }} // blue
        >
          Register
        </button>
        <button
          onClick={() => setPage('login')}
          style={{ ...buttonStyle, backgroundColor: '#10b981' }} // green
        >
          Login
        </button>
        <button
          onClick={() => setPage('weather')}
          style={{ ...buttonStyle, backgroundColor: '#8b5cf6' }} // purple
        >
          Weather
        </button>
      </div>

      {page === 'register' && <RegisterForm />}
      {page === 'login' && <LoginForm />}
      {page === 'weather' && <WeatherSearch />}
    </div>
  );
}

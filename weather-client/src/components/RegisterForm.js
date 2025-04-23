import React, { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return React.createElement(
    'form',
    {
      onSubmit: handleSubmit,
      style: {
        maxWidth: '400px',
        margin: 'auto',
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }
    },
    [
      React.createElement('h2', {
        key: 'title',
        style: { marginBottom: '1rem', fontSize: '1.5rem' }
      }, 'Register'),

      React.createElement('input', {
        key: 'email',
        type: 'email',
        placeholder: 'Email',
        value: email,
        onChange: (e) => setEmail(e.target.value),
        style: {
          display: 'block',
          width: '100%',
          marginBottom: '1rem',
          padding: '0.5rem'
        }
      }),

      React.createElement('input', {
        key: 'password',
        type: 'password',
        placeholder: 'Password',
        value: password,
        onChange: (e) => setPassword(e.target.value),
        style: {
          display: 'block',
          width: '100%',
          marginBottom: '1rem',
          padding: '0.5rem'
        }
      }),

      React.createElement('button', {
        key: 'submit',
        type: 'submit',
        style: {
          width: '100%',
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '0.5rem',
          border: 'none',
          borderRadius: '4px'
        }
      }, 'Register')
    ]
  );
}

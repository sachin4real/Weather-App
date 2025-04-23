import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.message) {
     
      navigate('/login');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 via-blue-100 to-indigo-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 text-gray-800"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account ✨</h2>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white/80 text-gray-800 shadow-inner placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white/80 text-gray-800 shadow-inner placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white/90 text-blue-700 font-bold py-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 mb-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
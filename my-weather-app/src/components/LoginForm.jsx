import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.message) {
      setUser({ email });
      navigate('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-200 via-blue-100 to-indigo-300 px-4 py-10">
      <div className="mb-8 animate-bounce">
        <img src="/SS.svg" alt="Animated Weather Icon" className="w-45 h-35 drop-shadow-lg" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 text-gray-800"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-inner placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white shadow-inner placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

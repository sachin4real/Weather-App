import React from 'react';

export default function Navbar({ setPage }) {
  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center border-b border-white/30">
      <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">🌤️ Weather App</h1>
      <div className="flex gap-4">
        <button onClick={() => setPage('register')} className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition duration-200">Register</button>
        <button onClick={() => setPage('login')} className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition duration-200">Login</button>
        <button onClick={() => setPage('weather')} className="px-4 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 transition duration-200">Weather</button>
      </div>
    </nav>
  );
}
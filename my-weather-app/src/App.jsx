import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import WeatherSearch from './components/WeatherSearch';
import Navbar from './components/Navbar';

export default function App() {
  const [page, setPage] = useState('weather');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200">
      <Navbar setPage={setPage} />
      <div className="p-6">
        {page === 'register' && <RegisterForm />}
        {page === 'login' && <LoginForm />}
        {page === 'weather' && <WeatherSearch />}
      </div>
    </div>
  );
}
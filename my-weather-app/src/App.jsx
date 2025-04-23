import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import WeatherSearch from './components/WeatherSearch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/" element={user ? <WeatherSearch /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm setUser={setUser} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200">
        <Navbar user={user} setUser={setUser} />
        <div className="p-6">
          <AppRoutes user={user} setUser={setUser} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/api/auth/profile?email=${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(console.error);
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white/60 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center border-b border-white/30">
      <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight cursor-pointer" onClick={() => navigate('/')}>🌤️ Weather App</h1>
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <button
              onClick={() => navigate('/register')}
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition-all"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-md hover:from-green-500 hover:to-green-700 transition-all"
            >
              Login
            </button>
          </>
        ) : (
          profile && (
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow border border-gray-300">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {profile.email[0].toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-800">{profile.email}</span>
              <button
                onClick={handleLogout}
                className="ml-3 px-3 py-1 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white text-sm rounded-full shadow-md transition-all"
              >
                Logout
              </button>
            </div>
          )
        )}
        
      </div>
    </nav>
  );
}
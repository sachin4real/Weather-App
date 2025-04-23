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
    <nav className="bg-white/60 backdrop-blur-md shadow-lg py-4 px-6 flex justify-between items-center border-b border-white/30">
      <h1
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
        onClick={() => navigate('/')}
      >
        🌤️ Weather App
      </h1>

      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <button
              onClick={() => navigate('/register')}
              className="px-5 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium rounded-full shadow-md hover:from-sky-500 hover:to-blue-700 transition-all"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium rounded-full shadow-md hover:from-green-500 hover:to-emerald-700 transition-all"
            >
              Login
            </button>
          </>
        ) : (
          profile && (
            <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-full shadow-inner border border-gray-300 transition-all">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                {profile.email[0].toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-800 truncate max-w-[150px]">
                {profile.email}
              </span>
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-1 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white text-sm rounded-full shadow-md transition-all"
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

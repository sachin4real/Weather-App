import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import React from 'react';

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    const res = await fetch(`http://localhost:8000/api/weather/${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-200 via-blue-100 to-indigo-300 px-4 py-10">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 text-gray-800">
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white/80 text-gray-800 shadow-inner placeholder-gray-500"
          />
          <button
            onClick={searchWeather}
            className="p-3 bg-white/90 text-blue-700 hover:bg-white rounded-full shadow-lg transition duration-300"
          >
            <FiSearch size={20} />
          </button>
        </div>

        {weather && (
          <div className="text-center space-y-4">
            <img
              src={weather.current.icon_url}
              alt="Weather Icon"
              className="mx-auto w-24 h-24 drop-shadow-xl"
            />
            <h1 className="text-5xl font-extrabold text-gray-800">{weather.current.temperature_c}°C</h1>
            <p className="text-xl font-semibold text-gray-700">{weather.location.city}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/60 p-4 rounded-xl shadow text-center">
                <div className="text-2xl">💧</div>
                <div className="text-lg font-semibold text-gray-700">{weather.current.humidity}%</div>
                <p className="text-sm text-gray-600">Humidity</p>
              </div>
              <div className="bg-white/60 p-4 rounded-xl shadow text-center">
                <div className="text-2xl">💨</div>
                <div className="text-lg font-semibold text-gray-700">{weather.current.wind_kph} km/h</div>
                <p className="text-sm text-gray-600">Wind Speed</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Hourly Forecast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {weather.forecast.slice(0, 6).map((hour, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4 text-center shadow">
                  <p className="text-md font-semibold text-gray-800">
                    {hour.time.split(' ')[1]}
                  </p>
                  <img src={hour.icon_url} alt={hour.condition} className="mx-auto w-10 h-10" />
                  <p className="text-lg font-bold text-gray-900">{hour.temperature_c}°C</p>
                  <p className="text-sm text-gray-600">{hour.condition}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
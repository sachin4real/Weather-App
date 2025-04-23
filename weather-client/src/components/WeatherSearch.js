import React, { useState } from 'react';

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    const res = await fetch(`http://localhost:8000/api/weather/${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #f0c, #f66, #fc3)',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '2rem',
        borderRadius: '1.5rem',
        color: '#fff',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '999px',
              border: 'none',
              fontSize: '1rem',
              color: '#333',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          />
          <button
            onClick={searchWeather}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '50%',
              backgroundColor: '#ffd700',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            🔍
          </button>
        </div>

        {weather && (
          <div style={{ textAlign: 'center' }}>
            <img
              src={weather.current.icon_url}
              alt="Weather Icon"
              style={{ width: '90px', height: '90px' }}
            />
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              {weather.current.temperature_c}°C
            </h1>
            <p style={{ fontSize: '1.2rem' }}>{weather.location.city}</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                padding: '1rem',
                borderRadius: '1rem'
              }}>
                <div style={{ fontSize: '1.5rem' }}>💧</div>
                <div style={{ fontWeight: 'bold' }}>{weather.current.humidity}%</div>
                <p>Humidity</p>
              </div>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                padding: '1rem',
                borderRadius: '1rem'
              }}>
                <div style={{ fontSize: '1.5rem' }}>💨</div>
                <div style={{ fontWeight: 'bold' }}>{weather.current.wind_kph} km/h</div>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

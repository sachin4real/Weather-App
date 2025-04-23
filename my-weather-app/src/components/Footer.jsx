import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-white/30 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800">🌦️ Weather App</h2>
          <p className="text-sm text-gray-600">Search Your Weather!</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-blue-600 transition duration-200">Privacy</a>
          <a href="#" className="text-sm hover:text-blue-600 transition duration-200">Terms</a>
          <a href="https://github.com/sachin4real/Weather-App" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-600 transition duration-200">GitHub</a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

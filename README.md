# 🌦️ Weather App

A beautiful full-stack weather application built with **React (Vite)** and **Express.js**, using **Supabase**  and **WeatherAPI** for fetching real-time weather data.

![App Screenshot](https://github.com/sachin4real/Weather-App/blob/292b4e67d9d1559362ae5d74480158d704c1e9fe/my-weather-app/public/Screen.png)

## 🔧 Features

-  User Registration & Login (custom built with Supabase)
-  Searchable current weather by city
-  Hourly forecast (6-hour preview)
-  Tailwind CSS styling and UI animations
-  Backend structured in MVC architecture

## ⚙️ Backend API

**Base URL:** `http://localhost:8000/api`

- `POST /auth/register` — Register user  
- `POST /auth/login` — Login user  
- `GET /auth/profile?email=` — Fetch user profile  
- `GET /weather/:city` — Get weather info + forecast  

## 🧰 Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js
- Express.js (MVC structure)
- Supabase (for user authentication and storage)



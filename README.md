
🌤️ Weather App
A sleek and modern weather application built with React (Vite) and Express.js, featuring real-time weather updates, hourly forecasts, and user authentication via Supabase.


🔗 Live Demo
Coming soon (Deploy on Vercel/Render)

🚀 Features
🌍 Get Weather by City Name

📦 Fetch Live Data from Weather API

🔐 User Registration & Login (using Supabase)

🧭 Hourly Forecast View

💡 Modern UI with Tailwind CSS

🌈 Beautiful Gradients and Animations

🖼️ Custom animated weather icons

🌐 Responsive and mobile-friendly

🧰 Tech Stack

Frontend	Backend	Auth & DB
React + Vite	Express.js (MVC)	Supabase
Tailwind CSS	Node.js	Supabase Table
React Router DOM	REST API	BcryptJS
📸 Screenshots

Weather Page 💨	Login Page 🔐
⚙️ Installation
bash
Copy
Edit
git clone https://github.com/sachin4real/Weather-App.git
cd Weather-App
🔧 Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run dev
Make sure to add a .env file in /backend/:

ini
Copy
Edit
PORT=8000
WEATHER_API_KEY=your_weather_api_key_here
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_service_role_key
🎨 Frontend Setup
bash
Copy
Edit
cd my-weather-app
npm install
npm run dev
📂 Folder Structure
css
Copy
Edit
Weather-App/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── my-weather-app/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
📌 Routes
🔐 Auth
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile?email=user@example.com

🌤️ Weather
GET /api/weather/:city

🎁 Additional Features
🌠 Animated weather logo

📊 Forecast data mapped with dynamic icons

🧠 Error handling when city not found

🎨 Beautiful hover effects and gradient buttons

🧑‍💻 Author
Sachintha Wadugedara
📧 sachin@gmail.com
🔗 GitHub


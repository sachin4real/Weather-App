import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import weatherRoutes from './routes/weatherRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/weather', weatherRoutes);

app.get("/test", (req,res)=>{
    res.send("Api is running");
})

export default app;
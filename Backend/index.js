import express from 'express'
import { PORT } from './src/config/serverconfig.js';
import connnectdb from './src/config/dbConfig.js';
import apiRoutes from '../Backend/src/routers/apiRoutes.js'
import cors from 'cors'

const app = express();

app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:3000',
    'https://evolt-soft-assignment.vercel.app/',
    'https://evolt-soft-assignment.vercel.app'
  ];


  app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.get('/pong',(req,res)=>{
    res.json({message:'pong'})
})


app.use('/api',apiRoutes);

app.listen(PORT,()=>{
  console.log(`Server is Running on the PORT ${PORT}`)
  connnectdb();
})
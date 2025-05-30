import express from 'express'
import { PORT } from './src/config/serverconfig.js';
import connnectdb from './src/config/dbConfig.js';
import apiRoutes from '../Backend/src/routers/apiRoutes.js'

const app = express();

app.use(express.json());


app.get('/pong',(req,res)=>{
    res.json({message:'pong'})
})


app.use('/api',apiRoutes);

app.listen(PORT,()=>{
  console.log(`Server is Running on the PORT ${PORT}`)
  connnectdb();
})
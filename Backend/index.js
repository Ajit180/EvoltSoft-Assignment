import express from 'express'
import { PORT } from './src/config/serverconfig.js';
import connnectdb from './src/config/dbConfig.js';

const app = express();

app.listen(PORT,()=>{
  console.log(`Server is Running on the PORT ${PORT}`)
  connnectdb();
})
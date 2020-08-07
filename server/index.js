import express from 'express';
import dotenv from'dotenv';
import app from'./src/app';
import { ConnectionToDB } from './src/config/DBConection'
const server = express();

dotenv.config();

ConnectionToDB()
  .then(done => console.log('Connected to mongo'))
  .then(err => console.log(err))

// Entry point
server.use('/api', app);

server.listen(3000, () => console.log('Server Up and Running'));

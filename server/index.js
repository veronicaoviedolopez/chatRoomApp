import express from 'express';
import dotenv from 'dotenv';
import app from './src/app';
import { ConnectionToDB } from './src/config/DBConection';
import { logger } from './src/config/logger';
const server = express();
import SocketIO from 'socket.io';

dotenv.config();

// Start the server
server.use('/api', app);
const serverRunning = server.listen(process.env.port,
    () =>logger.info('Server up and running'));

// Conect to DB
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

// Websockets
const io = SocketIO(serverRunning);

let interval;
io.on('connection', (socket) => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});


const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit('FromAPI', response);
};

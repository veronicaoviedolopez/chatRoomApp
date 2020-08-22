import express from 'express';
import dotenv from 'dotenv';
import app from './src/app';
import http from 'http';
import { ConnectionToDB } from './src/config/DBConection';
import { logger } from './src/config/logger';
import socketio from 'socket.io';
const expressApp = express();
const server = http.createServer(expressApp);
const io = socketio(server);

dotenv.config();

// Start the server
expressApp.use('/api', app);
expressApp.use(express.static(__dirname +'/assets'));
server.listen(process.env.port, () =>logger.info('Server up and running'));

// Conect to DB
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('new_message', (message) => {
    socket.broadcast.emit('incomming_message', message);
  });
});


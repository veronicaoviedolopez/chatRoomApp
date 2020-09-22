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
server.listen(process.env.port, () => logger.info('Server up and running'));

// Connect Database
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

// Connect Socket
io.on('connection', (socket) => {
  console.log('se conectaron al socket', socket.id);
  socket.emit('login', {
    id: socket.id,
  });

  socket.on('enter to room', (data) => {
    socket.username = data.username;
    socket.join('room '+ data.chatroom);
  });

  socket.on('disconnecting', () => {
    let rooms = Object.keys(socket.rooms);
    console.log('disconnecting', rooms);
    socket.leaveAll();
    rooms = Object.keys(socket.rooms);
    console.log('disconnecting', rooms);
  });

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    console.log('new message', data);
    // we tell the client to execute 'new message'
    socket.to('room '+ data.chatroom_id).emit('new message', data);
  });

  // when the user disconnects.. perform this
  socket.on('disconnection', () => {
    console.log('disconnection');
    socket.disconnect(true);
    console.log('disconnected: ', socket.disconnected);
  });
});

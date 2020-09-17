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

// Conect to DB
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

// Chatroom
let numUsers = 0;

io.on('connection', (socket) => {
  console.log('se conectaron al socket', socket.id);
  socket.emit('login', {
    numUsers: ++numUsers,
    id: socket.id,
  });

  socket.on('notifyAllThatIamConnected', (data) => {
    socket.broadcast.emit('user joined', {
      username: data,
      numUsers,
    });
  });

  socket.on('enter to room', (data) => {
    socket.username = data.username;
    socket.join('room '+ data.chatroom);
  });

  socket.on('disconnecting', () => {
    const rooms = Object.keys(socket.rooms);
    // the rooms array contains at least the socket ID
  });

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    console.log('new message', data);
    // we tell the client to execute 'new message'
    console.log('data.chatroom_id', data.chatroom_id);
    socket.to('room '+ data.chatroom_id).emit('new message', data);
  });

  // when the user disconnects.. perform this
  socket.on('disconnection', () => {
    console.log('disconnection');
    --numUsers;
    socket.leaveAll();
    // echo globally that this client has left
    socket.broadcast.emit('user left', {
      username: socket.username,
      numUsers: numUsers,
    });
    socket.disconnect(true);
    console.log('disconnect', socket.disconnected);
  });

/* io.on('connection', (socket) => {
  socket.join('game');
  socket.to('game').emit('nice game');
  // io.to('game').emit('some event');
  /*  socket.on('new_message', (message) => {
    console.log('new_message', message);
    socket.broadcast.emit('incomming_message', JSON.stringify(message));
  }); */
});

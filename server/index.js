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
  console.log('se conectaron al socket');
  let addedUser = false;
  socket.emit('your id', socket.id);

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    console.log('new message', data);
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data.message,
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    console.log('add user', username);
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers,
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers,
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username,
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username,
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    console.log('disconected user', addedUser);
    if (addedUser) {
      --numUsers;
      socket.emit('disconected');
      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers,
      });
    }
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

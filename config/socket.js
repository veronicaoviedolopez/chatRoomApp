import socketio from 'socket.io';

// Connect Socket
export const ConnectionToSocket = (server) => {
  const io = socketio(server);
  return (
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
    })
  );
};

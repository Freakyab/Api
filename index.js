const io = require('socket.io')(5000, {
  cors: {
    origin: '*',
  }
});
const users = {};


io.on('connection', socket => {
  socket.on('new-user', (name, id) => {
    users[id] = name;
    socket.broadcast.emit('receive-message', { message: `${name} has joined the chat`, type: 'Name' });
    socket.broadcast.emit('online', { message: Object.values(users) });
  });

  socket.on('receive-message', (message, name) => {
    socket.broadcast.emit('receive-message', { message: message, name: name, type: 'Message' });
  });

  socket.on('leave', (id) => {
    if (id === undefined) return;
    else {
      const name = users[id];
      delete users[id];
      socket.broadcast.emit('receive-message', { message: `${name} has left the chat`, type: 'Name' });
      socket.broadcast.emit('online', { message: Object.values(users) });
    }
  });

  socket.on('online', () => {
    const onlineUsers = Object.values(users);
    console.log(users);
    if (onlineUsers.length === 0) {
      socket.broadcast.emit('online', { message: ["No one is online"] });
    } else {
      socket.broadcast.emit('online', { message: onlineUsers });
    }
  });

  socket.on('join-room', (room,name) => {
    console.log(name,room);
    socket.join(room);
    socket.broadcast.to(room).emit('receive-message', { message: `${name} has joined the room`, type: 'Name' });
    socket.broadcast.to(room).emit('online', { message: Object.values(users) });
  });
  socket.on('room-message', (message, name,room) => {
    console.log(message);
    socket.broadcast.to(room).emit('room-message', { message: message });
  }
  );
});

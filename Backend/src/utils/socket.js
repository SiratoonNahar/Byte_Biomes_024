const socketIo = require('socket.io');

const setupSocket = (server) => {
  const io = socketIo(server);
  io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

module.exports = { setupSocket };

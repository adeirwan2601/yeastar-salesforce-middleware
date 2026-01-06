const { Server } = require('socket.io');

let io;

exports.init = (server) => {
  io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log('🔌 Open CTI connected');
  });
};

exports.broadcast = (event, payload) => {
  if (io) io.emit(event, payload);
};

const http = require('http');
const app = require('./app');
const socketService = require('./services/socket.service');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
socketService.init(server);

server.listen(PORT, () => {
  console.log(`🚀 Middleware running on port ${PORT}`);
});

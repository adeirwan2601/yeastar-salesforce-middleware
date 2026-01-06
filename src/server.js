const http = require('http');
const app = require('./app');
const socketService = require('./services/socket.service');

const server = http.createServer(app);
socketService.init(server);

server.listen(3000, () => {
  console.log('Middleware running on port 3000');
});

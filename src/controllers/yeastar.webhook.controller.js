const mapper = require('../mappers/call.mapper');
const socketService = require('../services/socket.service');
const store = require('../store/call.session.store');

exports.handleCallEvent = (req, res) => {
  const rawEvent = req.body;
  console.log('📥 Yeastar Event:', rawEvent);

  const call = mapper.fromYeastar(rawEvent);
  store.upsert(call);

  socketService.broadcast('CALL_EVENT', call);

  res.sendStatus(200);
};

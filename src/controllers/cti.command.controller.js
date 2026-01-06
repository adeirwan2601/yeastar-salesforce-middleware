const yeastarApi = require('../services/yeastar.api.service');

exports.dial = async (req, res) => {
  const { phone, agentExt } = req.body;

  await yeastarApi.dial(phone, agentExt);

  res.json({ status: 'dialing' });
};

exports.fromYeastar = (e) => ({
  callId: e.call_id || e.callId,
  state: e.event,               // Incoming, Answered, Hangup
  from: e.caller,
  to: e.callee,
  agentExt: e.extension,
  direction: e.direction || 'INBOUND',
  timestamp: new Date()
});

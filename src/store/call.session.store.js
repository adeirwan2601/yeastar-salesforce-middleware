const calls = new Map();

exports.upsert = (call) => {
  calls.set(call.callId, {
    ...calls.get(call.callId),
    ...call
  });
};

exports.get = (callId) => calls.get(callId);

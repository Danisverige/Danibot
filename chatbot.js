function getReply(input) {
  const msg = String(input || '').trim().toLowerCase();
  if (!msg) return "I'm listening…";
  if (/(hi|hello|hey)/.test(msg)) return "Hi there!";
  if (msg.includes('help')) return "How can I help?";
  return "Sorry, I didn’t catch that.";
}

module.exports = { getReply };

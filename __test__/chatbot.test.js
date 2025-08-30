const { getReply } = require('../chatbot');

test('greets on hello', () => {
  expect(getReply('Hello')).toBe('Hi there!');
});

test('handles nonsense', () => {
  expect(getReply('blahblah')).toBe('Sorry, I didn’t catch that.');
});

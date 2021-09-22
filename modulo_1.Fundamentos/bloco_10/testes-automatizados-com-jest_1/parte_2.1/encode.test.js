const encode = require('./encode');

test('If encode is a function', () => {
  expect(typeof encode).toEqual('function');
});

test('vowel conversion', () => {
  expect(encode('aeiou')).toEqual('12345');
})

test('if the string that is returned has the same number of characters as the parameter string', () => {
  expect(encode('Gabriela').length).toEqual(8);
});

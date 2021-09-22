const decode = require('./decode');

test('If decode is a function', () => {
  expect(typeof decode).toEqual('function');
});

test('numbers conversion', () => {
  expect(decode('12345')).toEqual('aeiou');
});

test('if the string that is returned has the same number of characters as the parameter string', () => {
  expect(decode('Gabriela').length).toEqual(8);
});

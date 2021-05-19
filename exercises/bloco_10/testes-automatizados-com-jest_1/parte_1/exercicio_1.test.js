const sum = require('./exercicio_1');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
  expect(sum(0, 0)).toEqual(0);
});

test('tests whether an error is thrown when number is undefined', () => {
  expect(() => { sum(4, '5') }).toThrow();
});

test('tests whether the error message is "parameters must be numbers"', () => {
  expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
});

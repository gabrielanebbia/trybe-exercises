const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(number) {
  let sum = 0;
  for(let index = 0; index < number.length; index += 1) {
    sum += number[index];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

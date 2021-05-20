// const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Testes unitários em JavaScript:
/* assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('cinco'), false); */

// Testes automatizados com Jest:
module.exports = myFizzBuzz;

const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(word) {
 const sizeWords = [];
 for(let index = 0; index < word.length; index += 1) {
  sizeWords.push(word[index].length);
 } 
 return sizeWords;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

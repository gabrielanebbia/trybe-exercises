const assert = require('assert');

/* function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
      return x + y;
  });
  results = [array[1], array[2]];
  return results;
};
 */

function secondThirdSmallest(array) {
  let results = [];
  array.sort(function compare(x, y) {
      if(x > y) return 1;
      if(x < y) return -1;
      return 0;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

/* function secondThirdSmallest(array) { //Forma simplificada de escrever a mesma função acima
  let results = [];
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
} */

assert.deepStrictEqual(secondThirdSmallest(parameter), result);

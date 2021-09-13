const oddsAndEvens = [13, 3, 4, 10, 7, 2]

const arrayOfNumbers = (array) => {
  array.sort(function comparaValores(param1, param2) {
  if (param1 > param2) {
    return 1;
  } else if (param1 < param2) {
  return -1;
  }
  return 0;
});
return array;
}

const sortedArray = arrayOfNumbers(oddsAndEvens); 

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

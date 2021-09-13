//Bônus

const oddsAndEvens = [13, 3, 4, 10, 7, 2]

const arrayOfNumbers = array => {
  array.sort((param1, param2) => param1 - param2);
  return array;
}

const sortedArray = arrayOfNumbers(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

// Referencia: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Por%20padr%C3%A3o%2C%20o%20m%C3%A9todo%20sort,para%20determinar%20as%20suas%20ordens.

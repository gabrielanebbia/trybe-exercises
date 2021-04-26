const oddsAndEvens = [13, 3, 4, 10, 7, 2]

oddsAndEvens.sort(function comparaValores(param1, param2) {
  if (param1 > param2) {
    return 1;
  } else if (param1 < param2) {
  return -1;
  }
  return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//Bônus
const oddsAndEvens = [13, 3, 4, 10, 7, 2]

oddsAndEvens.sort((param1, param2) => param1 - param2);

console.log(oddsAndEvens);

// Referencia: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Por%20padr%C3%A3o%2C%20o%20m%C3%A9todo%20sort,para%20determinar%20as%20suas%20ordens.
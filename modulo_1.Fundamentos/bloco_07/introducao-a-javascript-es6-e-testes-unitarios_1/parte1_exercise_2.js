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

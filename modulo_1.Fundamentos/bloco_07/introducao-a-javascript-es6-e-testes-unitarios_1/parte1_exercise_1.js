/* Exercício 1:

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); 

*/

// Resultado
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

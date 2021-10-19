const readline = require('readline-sync');

function fibonacci(num) {
  let penultimo = 0;
  let ultimo = 1;
  let fibArray = [0, 1];

  if (num <= 2) {
    fibArray.push(num - 1);
  } else {
    for (let index = 2; index <= num; index += 1) {
      let result = ultimo + penultimo;
      fibArray.push(result);
      penultimo = ultimo;
      ultimo = result;
    }
  }
  return fibArray;
}

function getNum() {
  const num = readline.questionInt('Digite um número: ');

  console.log(`Número: ${num}`);
  fibonacci(num);
}

getNum();

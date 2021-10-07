const readline = require('readline-sync');

const numeroInput = readline.questionInt('Escolha um número inteiro de 0 a 10: ');

function game(numero) {
  const numeroAleatorio = parseInt(Math.random() * 10);

  if(numero === numeroAleatorio) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
  }
};

game(numeroInput);

const readline = require('readline-sync');

function game() {
  const numeroInput = readline.questionInt('Escolha um número inteiro de 0 a 10: ');
  const numeroAleatorio = parseInt(Math.random() * 10);

  if(numeroInput === numeroAleatorio) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
  }
};

game();

const respostaInput = readline.question('Jogar novamente? (s/n) ');

function reloadGame(resposta) {
  if(resposta === 's') {
    game();
  }
}

reloadGame(respostaInput);

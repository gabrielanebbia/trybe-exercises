const readline = require('readline-sync');

const distanciaInput = readline.questionInt('Qual a distância percorrida(metros)? ');
const tempoInput = readline.questionInt('Qual o tempo gasto(segundos)? ');

function calculaVelocidadeMedia(distancia, tempo) {
  const velocidadeMedia = distancia / tempo;

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
};

calculaVelocidadeMedia(distanciaInput, tempoInput);

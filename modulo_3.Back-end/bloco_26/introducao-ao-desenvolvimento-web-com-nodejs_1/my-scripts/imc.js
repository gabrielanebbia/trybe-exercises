const readline = require('readline-sync');

const pesoInput = readline.questionFloat('Qual é o seu peso(kg)?');
const alturaInput = readline.questionInt('Qual é sua altura(cm)?');

function calculaIMC(peso, altura) {
  const alturaEmMetros = altura / 100;
  const IMC = (peso / Math.pow(alturaEmMetros, 2)).toFixed(2);

  console.log(`Peso: ${peso} kg`);
  console.log(`Altura: ${altura} cm`);
  console.log(`IMC: ${IMC} kg/m²`);
}

calculaIMC(pesoInput, alturaInput);

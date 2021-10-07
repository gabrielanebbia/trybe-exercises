const readline = require('readline-sync');

const pesoInput = readline.questionFloat('Qual é o seu peso(kg)?');
const alturaInput = readline.questionInt('Qual é sua altura(cm)?');

function calculaIMC(peso, altura) {
  const alturaEmMetros = altura / 100;
  const IMC = (peso / Math.pow(alturaEmMetros, 2)).toFixed(2);

  console.log(`Peso: ${peso} kg`);
  console.log(`Altura: ${altura} cm`);
  console.log(`IMC: ${IMC} kg/m²`);

  if (IMC < 18,5) {
    console.log('Situação: Abaixo do peso (magreza)');
  } else if (IMC >= 18.5 && IMC <= 24.9){
    console.log('Situação: Peso normal');
  } else if (IMC >= 25.0 && IMC <= 29.9){
    console.log('Situação: Acima do peso (sobrepeso)');
  } else if (IMC >= 30.0 && IMC <= 34.9){
    console.log('Situação: Obesidade grau I');
  } else if (IMC >= 35.0 && IMC <= 39.9){
    console.log('Situação: Obesidade grau II');
  } else {
    console.log('Situação: Obesidade graus III e IV');
  }
}

calculaIMC(pesoInput, alturaInput);

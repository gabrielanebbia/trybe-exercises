const readline = require('readline-sync');

function calculaFatorial(numero) {
  if( numero === 1) {
    return 1;
  }
  return numero * calculaFatorial(numero - 1);
}

function realizaValidacao() {
  const numeroinput = readline.questionInt('Informe um número inteiro: ');
  if(numeroinput <= 0) {
    return console.log('Digite um número maior que 0');
  } else if(numeroinput === 0 || numeroinput === 1) {
    return console.log(`Resposta: ${calculaFatorial(1)}`);
  } else {
    return console.log(`Resposta: ${calculaFatorial(numeroinput)}`);
  }
}

realizaValidacao();

// Referência: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

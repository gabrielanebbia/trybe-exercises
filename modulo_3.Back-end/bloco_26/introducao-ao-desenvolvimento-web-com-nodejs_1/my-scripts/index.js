const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const listScripts = scripts.map((script, index) => `\n ${index + 1} - ${script.name}`);

const mensagem = `Escolha um script da lista: \n ${listScripts} \n`;

const scriptInput = readline.questionInt(mensagem) -1;

const script = scripts[scriptInput];

require(script.script);

//Exercicio 1.4 - Faça um for/in que mostre todos os valores do abjeto.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  for (let key in info) {
      console.log(info[key]);
  }

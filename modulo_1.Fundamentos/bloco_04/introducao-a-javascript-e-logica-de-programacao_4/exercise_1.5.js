//Exercicio 1.5 - Crie um novo objeto e imprima os valores dos dois objetos juntos e de acordo com cada chave.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  let novaInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (let key in info && novaInfo) {
      console.log(info[key] + ' e ' + novaInfo[key]);
  }

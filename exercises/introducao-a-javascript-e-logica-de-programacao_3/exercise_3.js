//Exercicio 3 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um triângulo retângulo com 5 asteriscos de base invertido.

/* 
n = 5

    *
   **
  ***
 ****
***** 

*/

let numero = 5;
let asteristico = '*';
let espaco = '';
let posicao = numero;

for (let index = 0; index < numero; index += 1) {
  for (let index2 = 0; index2 <= numero; index2 += 1) {
    if (index2 < posicao) {
      espaco = espaco + ' ';
    } else {
      espaco = espaco + asteristico;
    }
  }
  console.log(espaco);
  espaco = '';
  posicao -= 1;
}

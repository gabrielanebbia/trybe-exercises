//Exercicio 1 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

/* 

n = 5

*****
*****
*****
*****
***** 

*/

let quadrado = [];
let numero = 5;
let asteristico = '*';

for (let index = 1; index < numero; index += 1) {
   quadrado.push(asteristico);
   for (let index = 1; index < numero; index += 1) {
        quadrado.push(asteristico);
   }    
} 
console.log(quadrado);
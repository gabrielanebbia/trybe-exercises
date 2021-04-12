//Exercicio 2 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um triângulo retângulo com 5 asteriscos de base.

/* 
n = 5

*
**
***
****
*****

 */


let quadrado = '';
let numero = 5;
let asteristico = "*";

for (let index = 1; index <= numero; index += 1) {
   console.log(quadrado);
   quadrado = quadrado + asteristico;
}

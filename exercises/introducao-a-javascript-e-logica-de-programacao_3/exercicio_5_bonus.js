/* Exercício 5 (bônus) - Faça uma pirâmide com n asteriscos de base, que seja vazia no meio. Assuma que o valor de n será sempre ímpar.Assuma

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
 */

let numero = 5;
let asteristico = '*';
let espaco = '';

let meio = (numero + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let index = 1; index <= meio; index += 1) {
  espaco = '';
  for (let index2 = 1; index2 <= numero; index2 += 1) {
    if (index2 == ladoEsquerdo || index2 == ladoDireito || index == meio) {
      espaco = espaco + asteristico;
    } else {
      espaco = espaco + ' ';
    }
  }
  console.log(espaco);
  ladoDireito += 1;
  ladoEsquerdo -= 1;
}
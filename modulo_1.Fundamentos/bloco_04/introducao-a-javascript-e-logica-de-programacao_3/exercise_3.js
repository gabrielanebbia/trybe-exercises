/* 
n = 5

    *
   **
  ***
 ****
***** 

*/

let numero = 5;
let asterisco = '*';
let espaco = '';
let posicao = numero;

for (let index = 0; index < numero; index += 1) {
  for (let index2 = 0; index2 <= numero; index2 += 1) {
    if (index2 < posicao) {
      espaco = espaco + ' ';
    } else {
      espaco = espaco + asterisco;
    }
  }
  console.log(espaco);
  espaco = '';
  posicao -= 1;
}

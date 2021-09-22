/* 
n = 5

  *
 ***
*****

*/

let numero = 5;
let asterisco = '*';
let espaco = '';

let meio = (numero + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let index = 0; index <= meio; index += 1) {
  for (let index2 = 0; index2 <= numero; index2 += 1) {
    if (index2 > ladoEsquerdo && index2 < ladoDireito) {
      espaco = espaco + asterisco;
    } else {
      espaco = espaco + ' ';
    }
  }
  console.log(espaco);
  espaco = '';
  ladoDireito += 1;
  ladoEsquerdo -= 1;
}

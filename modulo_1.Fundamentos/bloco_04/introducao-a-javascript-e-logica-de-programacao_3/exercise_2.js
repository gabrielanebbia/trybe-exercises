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
let asterisco = "*";

for (let index = 1; index <= numero; index += 1) {
   console.log(quadrado);
   quadrado = quadrado + asterisco;
}

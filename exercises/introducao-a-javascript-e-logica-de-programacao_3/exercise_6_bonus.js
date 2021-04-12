/* Exercício 6 (bônus) - Faça um programa que diz se um número definido numa variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */


let divisor = 1;
let numero = 15;

for (let index = 2; index <= numero; index += 1) {
  if (numero % index === 0) divisor += 1;
}

if (divisor === 2) console.log(numero + ' é número primo');
else console.log(numero + ' não é número primo');

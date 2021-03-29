//Exercicio 6 - Descubra quantos valores impares existem no array e imprima o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumber = [];

for (let index = 0; index < numbers.length; index += 1) {
   if (numbers[index]%2 !== 0) {
      oddNumber.push(numbers[index]);
   }
}

console.log(oddNumber);

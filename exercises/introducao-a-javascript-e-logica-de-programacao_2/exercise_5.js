//Exercicio 5 - Utilizando o for descubra quam o maior valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumber = 0;

for (var index = 0; index < numbers.length; index += 1) {
   if (numbers[index] > maiorNumber) {
      maiorNumber = numbers[index];
   }
}

console.log(maiorNumber);

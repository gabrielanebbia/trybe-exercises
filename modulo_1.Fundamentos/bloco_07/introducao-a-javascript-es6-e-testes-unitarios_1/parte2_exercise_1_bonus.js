// Exercício 2.1 - Bônus:

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(4));

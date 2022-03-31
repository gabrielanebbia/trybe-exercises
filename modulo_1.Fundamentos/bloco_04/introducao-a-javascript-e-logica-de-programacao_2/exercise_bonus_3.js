let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]); // Cada valor do novo array é igual ao valor correspondente do array anterior multiplicado pelo próximo.
  } else {
    newArray.push(numbers[index] * 2); // Caso não haja próximo valor, a multiplicação é feita por 2
  }
}

console.log(newArray);

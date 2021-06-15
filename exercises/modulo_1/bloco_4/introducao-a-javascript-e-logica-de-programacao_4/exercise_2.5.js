function mostRepeatedNumber(numbers) {
  let number = [];

  for (let index = 0; index < numbers.length; index += 1) {
    let value = numbers[index];
    
    if (number[value] === undefined) {
      number[value] = 1;
    } else {
      number[value] = number[value] + 1;
    }
  }

  let contRepete = 0;
  let contNum= 0;

  for (let index in number) {
    if (contRepete < number[index]) {
      contRepete = number[index];
      contNum = index;
    }
  }
  return contNum;
}

console.log(mostRepeatedNumber([2, 3, 2, 5, 8, 2, 3])); // 2

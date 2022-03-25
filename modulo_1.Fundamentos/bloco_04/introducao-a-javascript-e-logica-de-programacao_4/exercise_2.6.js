function sumOfAllNumbers(numbers) {
  let total = 0;
  for (let index = 1; index <= numbers; index +=1) {
    total += index;
  }
  return total
};

console.log(sumOfAllNumbers(5)); // 15

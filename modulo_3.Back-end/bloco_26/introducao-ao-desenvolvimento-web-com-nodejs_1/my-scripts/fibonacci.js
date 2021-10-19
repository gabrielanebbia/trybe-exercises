function fibonacci(num) {
  let penultimo = 0;
  let ultimo = 1;
  let fibArray = [0, 1];

  if (num <= 2) {
    fibArray.push(num - 1);
  } else {
    for (let index = 2; index <= num; index += 1) {
      let result = ultimo + penultimo;
      fibArray.push(result);
      penultimo = ultimo;
      ultimo = result;
    }
  }
  return fibArray;
}

console.log(fibonacci(10));

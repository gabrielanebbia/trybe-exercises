const promise = () => {
  return new Promise((resolve, reject) => {
    const sumRandomNumbers = () => {
      const arrayLength = 10;
      let array = [];
      for (let index = 0; index < arrayLength; index += 1) {
        array.push(Math.random() * (50 - 1 + 1) + 1);
      }
      let total = 0;
      for (index in array) {
        let exp = array[index] ** 2;
        total += exp;
      }
      return total.toFixed(2);
    }

    console.log(sumRandomNumbers());

    if (arrayOfNumbers() < 8000) {
      resolve()
    } else {
      reject(new Error('Valor inválido. Resultado maior que 8000'))
    };
  })
}

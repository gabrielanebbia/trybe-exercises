function calcular(num1, num2, num3) {
  return new Promisse((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Informe apenas números');
    }

    const result = ((num1 + num2) * num3);

    if(result < 50) {
      return reject('Valor muito baixo');
    }
    
    resolve(result);
  });
}

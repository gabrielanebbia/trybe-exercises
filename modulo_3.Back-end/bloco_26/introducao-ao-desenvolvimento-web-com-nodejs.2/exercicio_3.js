function calculate(num1, num2, num3) {
  return new Promise((resolve, reject) => {
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

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function randomCalculate() {
  try {
    const resolve = await calculate(randomNumber(), randomNumber(), randomNumber());
    console.log(resolve);
  } catch (error) {
    console.log(error);
  }
}

randomCalculate();

let divisor = 1;
let numero = 15;

for (let index = 2; index <= numero; index += 1) {
  if (numero % index === 0) {
    divisor += 1;
  }
}

if (divisor === 2) {
  console.log(numero + ' é número primo');
} else {
  console.log(numero + ' não é número primo');
}

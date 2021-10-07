const pesoFixo = 60;
const alturaFixa = 162;

function calculaIMC(peso, altura) {
  const alturaEmMetros = altura / 100;
  const IMC = (peso / Math.pow(alturaEmMetros, 2)).toFixed(2);

  console.log(`Peso: ${peso} kg`);
  console.log(`Altura: ${altura} cm`);
  console.log(`IMC: ${IMC} kg/m²`);
}

calculaIMC(pesoFixo, alturaFixa);

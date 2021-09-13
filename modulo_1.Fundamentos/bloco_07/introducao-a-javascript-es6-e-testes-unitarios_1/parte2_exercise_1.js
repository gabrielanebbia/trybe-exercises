const fatorial = number => {
  let result = 1;
  for(let index = number; index > 1; index -= 1) {
    result *= index;
  }
  return result;
}

console.log(fatorial(4));

// Referencia: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

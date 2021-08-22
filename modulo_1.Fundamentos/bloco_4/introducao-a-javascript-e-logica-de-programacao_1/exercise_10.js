//Crie um programa que calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let valorCusto = 100;
let valorVenda = 150;
let produtosVendidos = 1000;

let impostoSobreOCusto = valorCusto / 5;      //20%

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;


console.log(lucro * produtosVendidos);


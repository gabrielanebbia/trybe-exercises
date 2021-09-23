//Cria um programa que dado um salário bruto calcula o valor líquido a ser recebido, considerando a faixas de imposto, aliquora do INSS e do IR.

let salarioBruto = 3000;
let aliquotaINSS = 0;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = (salarioBruto * 8) / 100;
} else if(salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = (salarioBruto * 9) / 100;
} else if(salarioBruto > 2594.93 && salarioBruto < 5189.82) {
    aliquotaINSS = (salarioBruto * 11) / 100;
} else if (salarioBruto >= 5189.82) {
    aliquotaINSS = 570.88;
}

console.log('Aliquota do INSS = R$ ' + aliquotaINSS);

let salarioBase = salarioBruto - aliquotaINSS;

console.log('Salário Base = R$ ' + salarioBase);

let aliquotaIR = 0;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
    parcelaIR = 0;
} else if(salarioBase > 1903.99 && salarioBase <= 2836.65) {
    aliquotaIR = (salarioBase * 7.5) / 100;
    parcelaIR = 142.80;
} else if(salarioBase > 2826.66 && salarioBase <= 3751.05) {
    aliquotaINSS = (salarioBase * 15) / 100;
    parcelaIR = 354.80;
} else if(salarioBase > 3751.06 && salarioBase < 4664.68) {
    aliquotaINSS = (salarioBase * 22.5) / 100;
    parcelaIR = 636.13;
} else if (salarioBruto >= 4664.68) {
    aliquotaIR = (salarioBase * 27.5) / 100;
    parcelaIR = 869.36;
}

console.log('Aliquota IR = R$ ' + aliquotaIR);
console.log('Parcela IR = R$ ' + parcelaIR);

let impostoRenda = aliquotaIR - parcelaIR;

console.log('Imposto de Renda = R$ ' + impostoRenda);

let salarioLiquido = salarioBase - impostoRenda;

console.log('Salário Líquido = R$ ' + salarioLiquido);

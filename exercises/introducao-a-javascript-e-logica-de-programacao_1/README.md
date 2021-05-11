## Bloco 4 - Introdução à JavaScript e Lógica de Programação
### Dia 1 - Introdução - JavaScript

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre 

Os requisitos do exercí­cio são:

**Exercício 1**
- [ ] Cria cinco programas, um para cada operação aritmética básica. Contendo duas variáveis (a e b).

**Exercício 2**
- [ ] Cria um programa que retorna o maior de dois números.

**Exercício 3**
- [ ] Cria um programa que retorne o maior de três números. 

**Exercício 4**
- [ ] Cria um programa que, dado um valor definido numa variável, retorna "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

**Exercício 5**
- [ ] Cria um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorna true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa retorna uma mensagem de erro.

**Exercício 6**
- [ ] Cria um programa que recebe o nome de uma peça de xadrez e retorna os movimentos que ela faz. Se a peça passada for inválida, o programa retorna uma mensagem de erro. Exemplo: bishop (bispo) -> diagonals (diagonais)

**Exercício 7**
- [ ] Cria um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. O programa retorna uma mensagem de erro e encerra se a nota passada for menor que 0 ou maior que 100.

Regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

**Exercício 8**
- [ ] Cria um programa que define três números em variáveis e retorna true se pelo menos uma das três for par. Caso contrário, ele retorna false.

**Exercício 9**
- [ ] Cria um programa que define três números em variáveis e retorna true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

**Exercício 10**
- [ ] Cria um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. Caso algum dos seus valores de entrada for menor que zero emite uma mensagem de erro e encerra.
- A partir dos valores, calcula quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
- Sobre o custo do produto, incide um imposto de 20%.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        valorCustoTotal = valorCusto + impostoSobreOCusto
        lucro = valorVenda - valorCustoTotal (lucro de um produto)

**Exercício 11**
- [ ] Cria um programa que, dado um salário bruto, calcula o valor líquido a ser recebido.
Considerando que uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

Informações para o calculo:
- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

- Exemplo: 
Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.

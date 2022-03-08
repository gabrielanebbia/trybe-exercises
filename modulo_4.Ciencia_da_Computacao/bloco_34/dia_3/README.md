## `Bloco 34: Programação Orientada a Objetos e Padrões de Projeto`

## `Dia 3 - Padrões de Projeto`

### Exercícios do dia

Cria funções para solucionar os problemas abaixo.

Dado parte da implementação de um jogo do mundo de Star Wars, com um erro.

- [ ] Encontra e corrige o erro, sem alterar o código das classes de personagens (Soldier e Jedi)

#### Exercício 2

Dado o código de um baralho e suas cartas.

- [ ] Transforma-o em um iterador sequencial, que fornece as cartas em sua ordem tradicional, começando de <A de copas> até <K de paus>

#### Exercício 3

Com o baralho tradicional pronto no exercício anterior:

- [ ] Implementa uma subclasse de Baralho chamada BaralhoInverso, que produz um iterador para fornecer as cartas na ordem inversa, ou seja, sem embaralhar, a primeira carta deve ser o <K de paus> em vez do <A de copas>, como acontece na implementação atual.

#### Exercício 4

Depois de criar duas formas diferentes de dar cartas para o baralho:

- [ ] Refatora o código para não precisar mais de dois baralhos e dois iteradores isolados, mas sim usar um único iterador com duas estratégias diferentes de iteração.

#### Exercício 5

Imaginando que temos a implementação de uma classe capaz renderizar imagens através de uma interface que utiliza o método draw. Porém, no momento ela só suporta formato PNG e precisamos ser capaz de renderizar imagens em SVG.

- [ ] Altera o código sem modificar a classe SvgImage, para que isso seja possível.

#### Exercício 6

O código representa um sistema de orçamentos que faz cálculos de impostos e precisa ser refatorado para adicionar novos, que no caso são o PIS (0,65%) e o COFINS (3%). Porém durante a refatoração, se depara com uma má prática de código.

- [ ] Encontra essa má prática e a soluciona em conjunto com a refatoração.

#### Exercício 7

Em um sistema de compras online, temos um código que efetua a compra do pedido. Este código possui code smells e precisa ser refatorado.

- [ ] Efetua a refatoração do código.

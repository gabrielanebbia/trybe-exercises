## Bloco 8 - Higher Order Functions do JavaScript ES6
### Dia 1 - JavaScript ES6 - Introdução a Higher Order Functions

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Higher Order Functions.

**Exercício 1**

- [x] Cria uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada.
- [x] Cria uma HOF newEmployees para criar cada pessoa contratada em seu respctivo id. A função recebe como parâmetro o nome completo da pessoa funcionária e a partir dele gera automaticamente um email no formato nome_da_pessoa@trybe.com.

**Exercício 2**

- [x] Desenvolve uma HOF que retorna o resultado de um sorteio, gerando um número aleatório entre 1 e 5. Ao receber como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.

**Bônus 1**
Nestes exercícios são criadas HOFs que simulam um turno de batalha em um jogo. 
As funções criadas calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

- [x] 1 -  Cria uma função que retorna o dano do dragão.
O dano é um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

- [x] 2 - Cria uma função que retorna o dano causado pelo warrior .
O dano é um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

- [x] 3 - Cria uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano é um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função tem uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.


**Bônus 2**
Passando a implementação das funções relativas aos três exercícios anteriores como parâmetro para outras funções componha um objeto gameActions.
 O objeto é composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

- [x] 1 - Cria a primeira HOF que compõe o objeto gameActions. Ela é a função que simula o turno do personagem warrior. Esta HOF recebe como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualiza os healthPoints do monstro dragon. Além disto ela também atualiza o valor da chave damage do warrior.

- [ ] 2 - Cria a segunda HOF que compõe o objeto gameActions. Ela é a função que simula o turno do personagem mage. Esta HOF recebe como parâmetro a função que calcula o dano deferido pelo personagem mage e atualiza os healthPoints do monstro dragon. Além disto ela também atualiza o valor das chaves damage e mana do mage.

- [ ] 3 - Cria a terceira HOF que compõe o objeto gameActions. Ela é a função que simula o turno do monstro dragon. Esta HOF recebe como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualiza os healthPoints dos personagens mage e warrior. Além disto ela também atualiza o valor da chave damage do monstro. 

- [ ] 4 - Adiciona ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faz um console.log para visualizar o resultado final do turno.

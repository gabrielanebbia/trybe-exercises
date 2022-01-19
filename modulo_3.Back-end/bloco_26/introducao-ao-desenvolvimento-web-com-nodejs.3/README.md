# `Bloco 26 - Introdução ao desenvolvimento Web com NodeJS`

## `Dia 3 - Testes com NodeJS`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre testes e como testar scripts NodesJS. Revendo os conceitos de testes e os benefícios de escrever testes automatizados. Utilizando três ferramentas bastante populares para testes com NodeJS: Mocha , Chai e Sinon. Além disso, revisitar conceitos importantes como asserts, testes unitários e TDD.

### `Parte 1`

### Exercício 1 - testes

Estrutura os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
    - Essa função irá recebe um número como parâmetro e retorna uma string como resposta
    - Quando o número passado for maior que 0 retorna "positivo", quando for menor que 0 retorna "negativo" e quando igual a 0 retorna "neutro"

- [x] Descreve todos os cenário de teste utilizando describes
- [x] Descreve todos os testes que serão feitos utilizando its
- [x] Cria as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado

### Exercício 2 - função

- [x] Implementa a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes escritos.

### Exercício 3 - tratamento de casos

Adiciona à função um tratamento para casos em que o parâmetro informado não seja do tipo Number.

- [ ] Adiciona o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função
- [ ] Adiciona uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número"
- [ ] Implementa a função tal validação para que o teste passe

### `Parte 2`

### Exercício 4 - testes

Cria testes para uma função que escreve um conteúdo em um arquivo específico.
    - Essa função recebe dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
    - Após concluir a escrita do arquivo ela retorna um ok

- [ ] Descreve todos os cenários de teste utilizando describes
- [ ] Descreve todos os testes que serão feitos utilizando its
- [ ] Cria as asserções validando se o retorno da função possui o valor e tipo esperado

### Exercício 5 - função

Implementa a função descrita no exercício 4.

- [ ] Cria a função descrita no exercício 4 utilizando o módulo fs do node.
- [ ] Adapta os testes adicionando stub ao módulo utilizado do fs, isolando assim o teste.
- [ ] Garante que todos os testes escritos no exercício 4 passam com sucesso

### `Bloco 27 - NodeJS: Camada de Serviço e Arquitetura Rest e Restful`

### `Dia 4 - Arquitetura de Software - Testando as Camadas`

Nos exercícios são implementadas todas as camadas, para adicionar um endpoint que recebe o ID de um filme específico e, então, retorna os detalhes desse filme.

Esse endpoint tem os seguintes cenários:

- Quando é encontrado um filme com o ID passado pela pessoa usuária retorna um objeto com todas as propriedades do filme e o código http 200 - OK no status da response.
- Quando não é encontrado nenhum filme com o ID passado pela pessoa usuária responde com código http 404 - Not Found no status da response e com a mensagem "Filme não encontrado."

#### Exercício 1

- [ ] Seguindo o TDD, implementa a camada de model necessária para o end-point, aplicando os comportamentos para atender aos requisitos:

- Cria os testes da camada de model. Como essa camada é responsável por realizar as operações no BD, adiciona as operações necessárias para que o endpoint funcione conforme esperado.
- Implementa os métodos para atender aos cenários descritos nos testes.
- Faz os ajustes necessários nos testes de acordo com sua implementação.

#### Exercício 2

- [ ] Seguindo o TDD, implementa a camada de model necessária para o end-point, aplicando os comportamentos para atender aos requisitos:
- Cria os testes da camada de service. CComo essa camada é responsável por realizar as operações no BD, adiciona as operações necessárias para que o endpoint funcione conforme esperado.
- Implementa os métodos necessários para atender aos testes.
- Faz os ajustes necessários nos testes de acordo com sua implementação.

#### Exercício 3

- [ ] Seguindo o TDD, implementa a camada de model necessária para o end-point, aplicando os comportamentos para atender aos requisitos:

- Cria os testes da camada de controller. Como essa camada é responsável por realizar as operações no BD, adiciona as operações necessárias para que o endpoint funcione conforme esperado. Outro ponto de atenção é que diferente das outras camadas, os controllers são middlewares e é necessário criar asserções com os stubs para testar seus comportamentos.
- Implementa o código necessário para atender os cenários descritos nos testes.
- Faz os ajustes necessários nos testes de acordo com sua implementação.

#### Exercício 4

- [ ] Faz os ajustes no index.js para finalizar o endpoint.

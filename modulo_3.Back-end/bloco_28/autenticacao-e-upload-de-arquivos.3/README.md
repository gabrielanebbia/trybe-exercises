## `Bloco 28 - Autenticação e Upload de Arquivos`

## `Dia 3 - NodeJS - Testando APIs com Testes de Integração`

O objetivo dos exercícios desse dia foi colocar em pratica o que aprendi sobre testes de integração e como escreve-los com a finalidade de testar qualquer end-point de uma API.

- Entender e aplicar conceitos de testes de integração / contrato
- Criar testes de integração para API's REST
- Testar endpoint com middleware de autenticação JWT

### Exercícios

[Fork do projeto nodejs-jwt-base-project](https://github.com/gabrielanebbia/nodejs-jwt-base-project)

Utilizando o processo de TDD foi implementado, a partir de testes, um endpoint para busca de dados de um usuário a partir do seu ID: GET /api/users/:userId.

Cada exercício contém um dos requisitos implementados.

### Exercício 1

O endpoint é autenticado exigindo o envio de um token no header da requisição.
Caso não seja passado um token, o endpoint retorna:

- [ ] O código de status 400 - Not Found.
- [ ] Mensagem de erro no body da response com o texto Token não encontrado ou informado.

### Exercício 2

O usuário pode ver somente os seus próprios dados. Ou seja, ao receber uma request, é comparado se o ID vindo no parâmetro é o mesmo do armazenado no token. Para isso, utiliza-se o middleware de autenticação para recuperar o ID dentro do token.

Caso não seja, a API retorna:

- [ ] O código de status 401 - Unauthorized.
- [ ] Mensagem no body da response com o texto Acesso negado.

### Exercício 3

Caso o usuário esteja autenticado corretamente e esteja solicitando os dados de seu próprio usuário, o sistema retorna:

- [ ] Os dados da pessoa usuária em um objeto no corpo (body) da resposta (response).
- [ ] Código de status 200 - OK.

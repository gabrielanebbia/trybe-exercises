### `Bloco 26 - Introdução ao desenvolvimento Web com NodeJS`

### `Dia 4 - Express: HTTP com Node.js`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre HTTP com Node.js.

- Relembrando os conceitos de HTTP e API
  - Utilizando um dos mais famosos e importantes frameworks na construção de APIs com Node: o Express
  - Entendendo como funciona o Express e seu sistema de rotas e middlewares

### `Exercícios`

#### Passo 1

Inicia os exercícios criando uma aplicação Node.js com os comandos já aprendidos.

#### Passo 2

#### Exercício 1

Cria uma rota GET /ping

- [x] A rota retorna o seguinte JSON: { message: 'pong' }

#### Exercício 2

Cria uma rota POST /hello

- [x] A rota recebe, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
- [x] A rota retorna o seguinte JSON: { "message": "Hello, <nome do usuário>!" }

#### Exercício 3

Cria uma rota POST /greetings

- [x] A rota recebe o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }
- [x] Caso a pessoa usuária tenha idade superior a 17 anos, devolve o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK
- [x] Caso a pessoa usuária tenha 17 anos ou menos, devolve o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized

#### Exercício 4

Crie uma rota PUT /users/:name/:age.

- [x] A rota retorna o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }

#### Exercício 5

Cria uma API de dados das personagens de Simpsons

- Utiliza o modulo fs do Node para ler/escrever arquivos
- Caso algum erro ocorra, retorna um código 500 (Internal Server Error)
- Caso dê tudo certo, a resposta volta com status 200 OK 
- Para testar a API durante o desenvolvimento, utiliza ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie

#### Exercício 6

Cria um endpoint GET /simpsons

- [ ] O endpoint retorna um array com todos os simpsons

#### Exercício 7

Cria um endpoint GET /simpsons/:id

- [ ] O endpoint retorna o personagem com o id informado na URL da requisição
- [ ] Caso não exista nenhum personagem com o id especificado, retorna o JSON { message: 'simpson not found' } com o status 404 - Not Found

#### Exercício 8

Cria um endpoint POST /simpsons

- [ ] Este endpoint cadastra novos personagens
- [ ] O corpo da requisição recebe o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }
- [ ] Caso já exista uma personagem com o id informado, devolve o JSON { message: 'id already exists' } com o status 409 - Conflict
- [ ] Caso a personagem ainda não exista, adiciona ao arquivo simpsons.json e devolve um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, pode-se utilizar res.status(204).end();

### `Bloco 29: NodeJS: Introdução Deployment`

### `Dia 1 - Infraestrutura - Deploy com Heroku`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre o processo de deploy de uma aplicação.

#### Exercícios

#### Exercício 1

- [ ] Cria uma API simples no node utilizando express.
- [ ] No arquivo index.js, cria uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!".
- [ ] Faz o deploy no Heroku utilizando o CLI.

#### Exercício 2

Modifica a API para responder a uma nova mensagem.

- [ ] Cria uma nova variável de ambiente com um texto qualquer.
- [ ] Modifica o código da API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.

#### Exercício 3

Criação do arquivo um Procfile.

- [ ] Cria uma cópia do arquivo index.js com o nome indexProcfile.js
- [ ] No novo arquivo, altera a mensagem de resposta da API para "Procfile funciona mesmo!"
- [ ] Cria um Procfile para iniciar sua aplicação a partir do novo arquivo de indexProcfile.js.

#### Exercício 4

Simula o deploy em multiambientes (produção e homologação).

- [ ] Renomeia o remote do deploy dos exercícios anteriores para homolog
- [ ] Cria um novo remote a partir do mesmo projeto, chamado prod.
- [ ] Configura as variáveis de ambiente para terem valores diferentes por ambiente.

#### Exercício 5

Faz o deploy de uma aplicação React

- [ ] Cria uma aplicação React utilizando create-react-app
- [ ] Cria um novo app utilizando o buildpack mars/create-react-app
- [ ] Faz o deploy do app no Heroku

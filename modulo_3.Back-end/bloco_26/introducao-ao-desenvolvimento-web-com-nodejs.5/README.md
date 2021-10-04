### `Bloco 26 - Introdução ao desenvolvimento Web com NodeJS`
### `Dia 5 - Express: Middlewares`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre o que são middlewares, como organizar nossas rotas separando em diferentes arquivos e também como lidar com erros no Express.

#### Atividade 1
**Exercício 1**
Cria uma rota POST /user/register que receba uma requisição que envie username, email e password no body da requisição, onde:
- [ ] username com mais de 3 caracteres
- [ ] email com o formato email@mail.com
- [ ] password contém no mínimo 4 caracteres e no máximo 8 (todos números)
- [ ] Para todos os casos não atendidos acima retorna o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" }
- [ ] Caso tenha sucesso retorna uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" }

**Exercício 2**
Cria uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
- [ ] O formato do token retornado é uma string aleatória com 12 caracteres
- [ ] O email recebido tem o formato email@mail.com
- [ ] O password contém no mínimo 4 caracteres e no máximo 8, todos números
- [ ] Para todos os casos não atendidos acima retorna o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }
- [ ] Caso tenha sucesso retorna uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" }

#### Atividade 2:
**Exercício 3**
Cria uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
- [ ] O token é uma string de 12 caracteres contendo letras e/ou números
- [ ] Para todos os casos não atendidos acima retorna o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" }
- [ ] Caso tenha sucesso é feito um fetch em uma API externa de sua preferência e retorna os dados da API como resposta
Sugestão de API: ( https://api.coindesk.com/v1/bpi/currentprice/BTC.json)

#### Atividade 3:
**Exercício 4**
Cria uma rota GET /posts/:id que receba uma requisição com um id como param route , verifique existência do post com aquele id, onde:
- [ ] existe id
- [ ] Para todos os casos não atendidos acima retorna o código de status e um JSON com uma mensagem de erro, ex: status 404 e { "message": "post not found" }
- [ ] Caso tenha sucesso retorna uma resposta com o código de status e um JSON com as informações do respectivo post

**Exercício 5**
Cria uma rota GET /posts que deve trazer todos os posts cadastrados, onde:
- [ ] Se não existir posts cadastrados retorna um array vazio e um status code, ex: status 200 e { "posts": [] }
- [ ] Se existir posts cadastrados retorna um array com os posts e um status code

**Exercício 6**
- [ ] Faz um middleware de erro. Caso tenha sido requisitada uma rota inexistente retorna o código de status e um JSON , ex: status 404 e { "message": "Opsss, route not found!" }

#### Atividade 4:
**Exercício 7**
Cria uma rota POST /teams que receba uma requisição que envie name, initials, country e league no body da requisção, onde:
- [ ] name tem mais de 5 caracteres
- [ ] initials contém no máximo 3 caracteres em caixa alta
- [ ] country tem mais de 3 caracteres
- [ ] league este campo é opcional
- [ ] Para todos os casos não atendidos acima retorna o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" }
- [ ] Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um JSON com as informações do time criado

**Exercício 8**
Na rota GET /teams deve trazer todos os times cadastrados, onde:
- [ ] Se não existir times cadastrados retorna um array vazio e um status code, ex: status 200 e { "teams": [] }
- [ ] Se existir times cadastrados retorna um array com os times e um status code

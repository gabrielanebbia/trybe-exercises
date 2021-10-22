## `Bloco 27 - Autenticação e Upload de Arquivos`

## `Dia 1 - NodeJS - JWT - (JSON Web Token)`

O objetivo dos exercícios desse dia foi colocar em pratica os aprendizados sobre o JWT (JSON Web Token), por que utilizá-lo, sua importância, como criar uma API com autenticação JWT.

Os exercícios foram realizados em um novo projeto chamado hello-jwt utilizando o comando npm init @tryber/backend hello-jwt, aceitando as opções padrão.

### Exercícios

- [ ] Cria um endpoint POST /login

- [ ] O endpoint recebe os seguintes dados no corpo da requisição:

```
{
  "username": "someUsername",
  "password": "somePassword"
}
```

- [ ] Caso username e password sejam válidos, retorna um token que atende às seguintes especificações:

- Expira em uma hora;
- Contém, no payload, o nome de usuário informado na request;
- Contém, no payload, uma propriedade admin , com o valor false.

- [ ] Para retornar o token, se utiliza o seguinte formato no corpo da resposta:

```
{
  "token": "<JWT aqui>"
}
```

- [ ] Para que username seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres.

- [ ] Para que password seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.

- [ ] Altere o endpoint POST /login:

- [ ] Caso username seja admin e password seja s3nh4S3gur4???, a chave admin no payload do token gerado tem o valor true.

- [ ] Cria o endpoint /GET /users/me
 
- [ ] O endpoint só é acessado por pessoas autenticadas

- [ ] Para realizar a autenticação, a requisição contém o header Authorization, cujo valor é um token válido.

- [ ] Caso o token não exista, retorna o status 401 Unauthorized, com o seguinte corpo da resposta:

```
{
  "error": {
    "message": "Token not found"
  }
}
```

- [ ] Caso aconteça um erro ao validar o token, retorna o status 401 Unauthorized com o seguinte conteúdo no corpo:

```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

- [ ] Caso o token seja válido, retorna o status 200 OK e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade admin, no seguinte formato:

```
{
  "username": "nome de usuario do token",
  "admin": true || false
}
```

- [ ] Utiliza um middleware exclusivo para a autenticação. Armazena-o no arquivo middlewares/auth.js

- [ ] Cria o endpoint /GET /top-secret

- [ ] O endpoint só pode ser acessado por pessoas autenticadas.

- [ ] Apenas tokens contendo, no payload, a propriedade admin com o valor true têm autorização para acessar esse endpoint.

- [ ] Caso o token não exista, retorne o status 401 Unauthorized , com o seguinte corpo da resposta:

```
{
  "error": {
    "message": "Token not found"
  }
}
```

- [ ] Caso aconteça um erro ao validar o token, retorna o status 401 Unauthorized com o seguinte conteúdo no corpo:

```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

- [ ] Caso o token seja válido, mas a propriedade admin do payload não seja true, retorna o status 403 Forbidden e o seguinte JSON:

```
{
  "error": {
    "message": "Restricted access"
  }
}
```

- [ ] Caso o token seja válido e o payload contenha admin com o valor true, retorna o seguinte JSON:

```
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```

- [ ] Para validar se a pessoa é admin, cria um novo middleware no arquivo middlewares/admin.js.

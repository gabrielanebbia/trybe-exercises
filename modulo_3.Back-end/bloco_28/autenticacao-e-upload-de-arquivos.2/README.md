## `Bloco 28 - Autenticação e Upload de Arquivos`

## `Dia 2 - NodeJS - Upload de arquivos com Multer`

O objetivo dos exercícios desse dia foi colocar em pratica o que aprendi sobre criar APIs que suportam upload de arquivos.

- Fazer upload de arquivos em APIs REST
- Salvar arquivos no servidor através de uma API REST
- Consultar arquivos do servidor através de uma api REST

### Exercícios

### Passo 1

Cria um projeto chamado multer-exercises utilizando o comando:

```
npm init @tryber/backend multer-exercises
```

### Passo 2

Instala o multer acessando a pasta e executando o comando:

```
npm i multer
```

### Exercício 1

Cria o endpoint POST /upload

- [ ] O endpoint recebe apenas um arquivo no campo file
- [ ] O arquivo é armazenado na pasta uploads
- [ ] O arquivo armazenado tem o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo.
- [ ] Retorna o status 200 OK se der tudo certo.

### Exercício 2

Altera o endpoint POST /upload para que atenda os seguintes critérios:

- [ ] Apenas aceita arquivos cuja extensão seja .png. Caso o arquivo tenha outro tipo de extensão, retorna o status 403 Forbidden com o JSON a seguir:

```
    {
        "error": { "message": "Extension must be `png`" }
    }
```

- [ ] Não aceita um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads. Caso o arquivo já exista, retorna o status 409 Conflict com o seguinte JSON:

```
    {
        "error": { "mesage": "File already exists" }
    }
```

- [ ] Torna a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.

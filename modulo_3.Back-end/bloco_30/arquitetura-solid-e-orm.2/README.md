# Bloco 30: Arquitetura de Software: SOLID e ORM

## Dia 2 - ORM - Interface da aplicação com bancos de dados

O objetivo dos exercícios desse dia foi criar uma API simples, com as funcionalidades de adicionar um livro e de listar todos os livros da base de dados.

As tecnologias utilizadas foram:

- MySQL como banco de dados
- Sequelize como nosso ORM

## Exercícios

### Parte I - Criando o projeto

1. Iniciando o projeto

  Dependências instaladas:

  - express
  - body-parser
  - sequelize
  - mysql2

2. Inicializando o sequelize
3. Cria as migrations
4. Cria o model para Books

### Parte II - Cria os controllers e rotas

- [ ] GET /books - lista todos os livros
- [ ] GET /book/:id - pega o livro com o id especificado
- [ ] POST /book - cria um novo livro
- [ ] POST /book/:id - sobrescreve o livro com ID selecionado
- [ ] DELETE /book/:id - deleta um livro

### Bloco 21 - Funções SQL, Joins e Subqueries
### Dia 3 - Stored Routines, Stored Functions & Triggers

O objetivo dos exercícios desse dia foi colocar em pratica as ferramentas Stored Procedures e Stored Functions, que nos ajudam a criar blocos de código reutilizáveis dentro do banco de dados. Também praticar o uso dos TRIGGERS, que nos permite construir blocos de código que podem ser disparados automaticamente de acordo com alguma ação desejada (inserção, atualização, remoção).

**STORED PROCEDURES**

Utilizando o banco de dados sakila:
- [x] 1.Monta uma procedure que exibe os 10 atores mais populares, baseado em sua quantidade de filmes.
- [x] 2.Monta uma procedure que recebe como parâmetro de entrada o nome da categoria desejada em uma string e exibe o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada.
- [x] 3.Monta uma procedure que recebe o email de um cliente como parâmetro de entrada e diz se o cliente está ou não ativo, através de um parâmetro de saída.

**STORED FUNCTIONS**

Utilizando o banco de dados sakila:
- [x] 1.Monta uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
- [ ] 2.Cria uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
- [ ] 3.Cria uma function que receba uma determinada categoria de filme em formato de texto e retorna a quantidade total de filmes registrados nessa categoria.

**TRIGGERS**

Utilizando o banco de dados BeeMovies:
- [x] 1.Cria um Trigger para INSERT
- [x] 2.Cria um Trigger para UPDATE
- [x] 3.Cria um Trigger para DELETE

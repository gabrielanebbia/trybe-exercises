### `Bloco 24 - MongoDB: Updates Simples e Complexos`
### `Dia 1 - Updates Simples`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre como inserir e buscar dados no MongoDB, como alterar esses dados através dos métodos e operadores disponíveis para isso.
  - Utilizar o método updateOne()
  - Utilizar o método updateMany()
  - Utilizar os operadores $set, $mul, $inc, $min, $max e $currentDate
  - Renomear campos
  - Remover campos

**Exercícios**
Para os exercícios foi utilizada a coleção movies do banco de dados class.
Após cada execução foi utilizado o método find() para conferir as alterações nos documentos.

- [x] 1. Altera o imdbRating para 7.7 no filme Batman 
- [x] 2. Altera budget para 1 no filme Godzilla 
- [x] 3. Altera budget para 15 e imdbRating para 5.5 no filme Home Alone
- [x] 4. Aumenta em 2 o imdbRating do filme Batman
- [x] 5. Aumenta em 5 o budget do filme Home Alone
- [x] 6. Multiplica por 4 o imdbRating do filme Batman
- [x] 7. Renomeia o campo budget para estimatedBudget do filme Batman
- [x] 8. Utiliza o operador $min para alterar o budget para 5 do filme Home Alone
- [x] 9. Utiliza o operador $max para alterar o imdbRating para 8.6 do filme Godzilla. Além disso, altera a categoria "adventure" para "thriller" do filme Godzilla
- [x] 10. Utilizando o operador $currentDate, cria um campo chamado lastUpdated com o tipo timestamp no filme Home Alone
- [x] 11. Utilizando uma única operação, cria um campo chamado sequels e atribua a ele o valor 0 em todos os documentos
- [x] 12. Utilizando uma única operação, remove os campos budget e estimatedBudget em todos os documentos
- [x] 13. Para os filmes Batman ou Home Alone, atribui a imdbRating o valor 17, caso o valor de imdbRating seja menor que 17

**Exercícios Bônus**
Para os exercícios foi utilizada a coleção xmen do banco de dados class.
Após todas as alterações realizadas foi atualizado o campo lastUpdate, que armazena a data da última alteração com o tipo timestamp.

- [x] 14. Remove o campo class dos documentos que possuem esse campo com o valor unknown.
- [x] 15. Produz uma query que renomeie os campos de name para hero_name, e de true_name para full_name. Adiciona o campo power com valor 100, em todos os documentos.
- [x] 16. Produz uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.
- [x] 17. Produz uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300.
- [x] 18. Decrementa em 100 o poder dos mutantes que não possuem a propriedade class.
- [x] 19. Em apenas uma query adiciona o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
- [x] 20. Em apenas uma query, adiciona o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.

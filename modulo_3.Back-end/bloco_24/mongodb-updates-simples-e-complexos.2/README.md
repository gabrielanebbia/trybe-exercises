### `Bloco 24 - MongoDB: Updates Simples e Complexos`
### `Dia 2 - Updates Complexos - Arrays - Parte 1`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre MongoDB e os métodos de update, como inserir e alterar itens em um array.
  - Incorporar dados aos documentos através de arrays
  - Utilizar os operadores $pop, $pull e $push
  - Utilizar o operador $addToSet
  - Utilizar os operadores $each, $slice e $sort

**Exercícios** 
- [x] 1. Adiciona a categoria "superhero" ao filme Batman.
- [x] 2. Utilizando o modificador $each, adiciona as categorias "villain" e "comic-based" ao filme Batman.
- [ ] 3. Remove a categoria "action" do filme Batman.
- [ ] 4. Remove o primeiro elemento do array category do filme Batman.
- [ ] 5. Remove o último elemento do array category do filme Batman.
- [ ] 6. Adiciona o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.
- [ ] 7. Adiciona a categoria "90's" aos filmes Batman e Home Alone.
- [ ] 8. Cria um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
```
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```
- [ ] 9. Adiciona o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.
- [ ] 10. Cria um array de documentos chamado cast para o filme Batman com os seguintes dados:
```
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```
- [ ] 11. Produz três querys para o filme Batman:
  - Adiciona o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
  - Adiciona o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
  - Adiciona o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.
- [ ] 12. Adiciona aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixa o array em ordem alfabética.


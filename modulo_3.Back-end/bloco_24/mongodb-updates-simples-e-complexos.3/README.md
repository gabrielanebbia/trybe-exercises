### `Bloco 24 - MongoDB: Updates Simples e Complexos`
### `Dia 3 - Updates Complexos - Arrays - Parte 2`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre MongoDB e os operadores de update que podem ser utilizados em arrays.
  - Utilizar o operador $all para filtrar documentos
  - Utilizar o operador $elemMatch para filtrar documentos
  - Utilizar o operador $size para filtrar documentos pelo tamanho de arrays 
  - Utilizar o operador $expr para criar expressões de agregação
  - Utilizar expressões regulares e o operador $regex para buscar documentos
  - Utilizar o índice textual e o operador $text para buscar textos
  - Utilizar o operador $mod para executar a operação matemática módulo

**Exercícios**
Para os exercícios foi utilizada a coleção movies do banco de dados class. 
Após cada execução foi utilizado o método find() para conferir as alterações nos documentos.

- [x] 1. Utilizando o operador $all, retorna todos os filmes que contenham action e adventure no array category.
- [x] 2. Retorna os filmes que contenham action no array category e possuem nota do IMDB maior do que 7.
- [x] 3. Adiciona um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105].
- [x] 4. Adiciona um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102].
- [x] 5. Adiciona um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65].
- [x] 6. Retorna todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
- [x] 7. Retorna todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
- [x] 8. Retorna todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
- [x] 9. Retorna os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title, ratings e category.
- [x] 10. Retorna somente o título de todos os filmes com dois elementos no array category.
- [x] 11. Retorna somente o título de todos os filmes com quatro elementos no array ratings.
- [x] 12. Busca os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
- [x] 13. Retorna os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
- [ ] 14. Retorna os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.
- [ ] 15. Adiciona o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .
- [ ] 16. Adiciona o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.".
- [ ] 17. Adiciona o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .
- [ ] 18. Utilizando o operador $regex, retorna todos os filmes em que a descrição comece com a palavra "The".
- [ ] 19. Utilizando o operador $regex, retorna todos os filmes em que a descrição termine com a palavra "humanity.".
- [ ] 20. Cria um índice do tipo text no campo description.
- [ ] 21. Utilizando o operador $text, busca por filmes que contenham o termo "vacation".
- [ ] 22. Utilizando o operador $text, busca por filmes que contenham os termos "monstrous" ou "criminal".
- [ ] 23. Utilizando o operador $text, busca por filmes que contenham a frase "when he is accidentally".

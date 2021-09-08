### Bloco 22 - Normalização e Modelagem de Banco de Dados
### Dia 3 - Transformando ideias em um modelo de banco de dados - Parte 2

_Exercícios sobre VIEW_
Usando o banco de dados sakila:
- [ ] Cria uma view chamada film_with_categories utilizando as tabelas category, film_category e film, exibindo o título do filme, o id da categoria e o nome da categoria. Os resultados são ordenados pelo título do filme.
- [ ] Cria uma view chamada film_info utilizando as tabelas actor, film_actor e film, exibindo actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados são ordenados pelos nomes de atores e atrizes.
- [ ] Cria uma view chamada address_info que faça uso das tabelas address e city, exibindo o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades.
- [ ] Cria uma view chamada movies_languages, usando as tabelas film e language, exibindo o título do filme, o id do idioma e o idioma do filme.

_Exercícios sobre INDEX_
- [ ] Verifica o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name. Após adicionar o índice, mensura o custo da query utilizando o execution plan. Após ter criado e mensurado o custo da query, exclue o índice e mensura novamente esse custo.
- [ ] Verifica o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code. Após ter adicionado o índice, mensura o custo da query utilizando o execution plan. Após ter criado e mensurado o custo da query, exclui o índice e mensura novamente esse custo.

_Exercícios sobre ALTER TABLE_
- [ ] Escreve uma query SQL para alterar na tabela localtions o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.
- [ ] Escreve uma query SQL para alterar o nome da coluna region_name para region, mantendo o mesmo tipo e tamanho de dados.
- [ ] Escreve uma query SQL para alterar o nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.
  
-- Exercícios sobre INDEX
-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila), adicionando-o na coluna name. 
-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- Resultado:
CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila), adicionando-o na coluna postal_code. 
-- Após ter adicionado o índice, mensura o custo da query utilizando o execution plan. 
-- Após ter criado e mensurado o custo da query, exclui o índice e mensura novamente esse custo.
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

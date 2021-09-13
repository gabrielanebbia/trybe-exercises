-- Exercício parte 1 (STORED PROCEDURES):
-- 1.Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id 
-- do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER $$

CREATE PROCEDURE top_10_actors()
BEGIN
    SELECT actor_id AS 'id do ator ou atriz', COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Testando:
CALL top_10_actors();

-- 2.Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string 
-- e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. 
-- Use as tabelas film, film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$

CREATE PROCEDURE movie_by_category(IN category VARCHAR(25))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film AS f
    INNER JOIN sakila.film_category AS fc 
    ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c 
    ON fc.category_id = c.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

-- Testando:
CALL movie_by_category('Games');

-- 3.Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente 
-- está ou não ativo, através de um parâmetro de saída.

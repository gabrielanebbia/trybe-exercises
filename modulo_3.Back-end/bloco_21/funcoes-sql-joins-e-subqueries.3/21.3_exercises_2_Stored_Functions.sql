-- Exercício parte 2 (STORED FUNCTIONS):
-- 1.Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos 
-- feitos até o momento por um determinado customer_id.

USE sakila;
DELIMITER $$

CREATE FUNCTION payments(customer INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(*) FROM payment
    WHERE customer_id = customer INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

-- Testando:
SELECT payments(1);

-- 2.Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado 
-- ao registro de inventário com esse id.

USE sakila;
DELIMITER $$

CREATE FUNCTION film_by_id_inventory(inventory INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE movie VARCHAR(100);
    SELECT title 
    FROM inventory AS i
    INNER JOIN film AS f
    ON i.film_id = f.film_id
    WHERE i.inventory_id = inventory INTO movie;
    RETURN movie;
END $$

DELIMITER ;

-- Testando:
SELECT film_by_id_inventory(1);


-- 3.Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 
-- 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.

USE sakila;
DELIMITER $$

CREATE FUNCTION film_by_category(category VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_films INT;
    SELECT COUNT(*) 
    FROM film_category AS fc
    INNER JOIN category AS c
    ON fc.category_id = c.category_id
    WHERE c.name = category INTO total_films;
    RETURN total_films;
END $$

DELIMITER ;

-- Testando:
SELECT film_by_category('Action');

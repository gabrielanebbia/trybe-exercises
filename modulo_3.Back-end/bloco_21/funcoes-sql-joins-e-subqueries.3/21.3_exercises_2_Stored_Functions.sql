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

-- 3.Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 
-- 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.

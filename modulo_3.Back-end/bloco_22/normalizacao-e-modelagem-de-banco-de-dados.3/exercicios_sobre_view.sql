-- Exercícios sobre VIEW
-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film, exibindo o 
-- título do filme, o id da categoria e o nome da categoria. Os resultados são ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
    SELECT f.title, fc.category_id, c.name
    FROM sakila.film_category AS fc
    INNER JOIN sakila.film AS f 
    ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c 
    ON fc.category_id = c.category_id
    ORDER BY f.title;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film, exibindo actor_id, o nome 
-- completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados são ordenados 
-- pelos nomes de atores e atrizes.


-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city, exibindo o address_id, o address, 
-- o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades.


-- 4. Crie uma view chamada movies_languages, usando as tabelas film e language, exibindo o título do filme, o id do 
-- idioma e o idioma do filme.


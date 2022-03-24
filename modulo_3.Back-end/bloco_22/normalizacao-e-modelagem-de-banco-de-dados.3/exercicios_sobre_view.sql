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
CREATE VIEW film_info AS
    SELECT fa.actor_id, 
    CONCAT(a.first_name, ' ', a.last_name) AS actor,
    f.title
    FROM sakila.film_actor AS fa
    INNER JOIN sakila.film AS f 
    ON f.film_id = fa.film_id
    INNER JOIN sakila.actor AS a 
    ON a.actor_id = fa.actor_id
    ORDER BY actor;

-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city, exibindo o address_id, o address, 
-- o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades.
CREATE VIEW address_info AS
    SELECT a.address_id, a.address, a.district, a.city_id, c.city
    FROM sakila.address AS a
    INNER JOIN sakila.city AS c 
    ON c.city_id = a.city_id
    ORDER BY c.city;

-- 4. Crie uma view chamada movies_languages, usando as tabelas film e language, exibindo o título do filme, o id do 
-- idioma e o idioma do filme.
CREATE VIEW movies_languages AS
    SELECT f.title, f.language_id, l.name AS language
    FROM sakila.film AS f
    INNER JOIN sakila.language AS l
    ON l.language_id = f.language_id;
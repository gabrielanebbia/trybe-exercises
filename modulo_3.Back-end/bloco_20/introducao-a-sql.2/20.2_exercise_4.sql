-- Exercício 4: Aplicando Restrições
-- Realiza os exercícios do site SQLBolt
-- https://sqlbolt.com/lesson/select_queries_with_constraints

-- 1. Find the movie with a row id of 6.
SELECT * FROM movies
WHERE id = 6;
-- 2. Find the movies released in the years between 2000 and 2010 .
SELECT * FROM movies
WHERE year BETWEEN 2000 AND 2010;

-- 3.Find the movies not released in the years between 2000 and 2010.
SELECT * FROM movies
WHERE NOT year BETWEEN 2000 AND 2010;

-- 4. Find the first 5 Pixar movies and their release year.
SELECT * FROM movies
WHERE id <= 5;

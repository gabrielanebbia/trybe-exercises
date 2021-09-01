-- Parte 1
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais domestic_sales) e internacionais
-- (international_sales) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales 
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON b.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que 
-- possui um número maior de vendas internacionais(international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title, b.domestic_sales, b.international_sales 
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação(rating) em ordem 
-- decrescente.
SELECT m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não 
-- possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT *
FROM Pixar.Theater AS t
LEFT JOIN  Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;
-- ou (sem incluir os id no resultado)
SELECT t.name, t.location, m.title, m.director, m.length_minutes, m.year
FROM Pixar.Theater AS t
LEFT JOIN  Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não 
-- estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes 
-- dos cinemas em ordem alfabética.
SELECT *
FROM Pixar.Theater AS t
RIGHT JOIN  Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;
-- ou (sem incluir os id no resultado)
SELECT t.name, t.location, m.title, m.director, m.length_minutes, m.year
FROM Pixar.Theater AS t
RIGHT JOIN  Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem os títulos 
-- dos filmes que possuem avaliação maior que 7.5.

-- Usando SUBQUERY
SELECT title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id 
    FROM Pixar.BoxOffice
    WHERE rating > 7.5
);
    
-- Usando INNER JOIN
SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as 
-- avaliações dos filmes lançados depois de 2009.

-- Usando SUBQUERY
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id 
    FROM Pixar.Movies
    WHERE year > 2009
);
    
-- Usando INNER JOIN
SELECT b.rating
FROM Pixar.BoxOffice AS b
INNER JOIN  Pixar.Movies AS m
ON m.id = b.movie_id
WHERE m.year > 2009;

-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE EXISTS(
	SELECT * FROM Pixar.Movies AS m
  WHERE m.theater_id = t.id
);

-- Exercício 9: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE NOT EXISTS(
	SELECT * FROM Pixar.Movies AS m
  WHERE m.theater_id = t.id
);

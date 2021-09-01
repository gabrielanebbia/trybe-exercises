-- Exercício Bônus:

-- 10. Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8 
-- e que estejam em cartaz.
SELECT *
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;

-- 11. Utilizando o SELF JOIN, selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM Pixar.Movies AS m1,
Pixar.Movies AS m2
WHERE m1.director = m2.director;

-- 12. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título
-- dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

-- Usando SUBQUERY
SELECT title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id 
    FROM Pixar.BoxOffice
    WHERE international_sales >= 500000000
)
AND length_minutes > 110;
    
-- Usando INNER JOIN
SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales >= 500000000
AND m.length_minutes > 110;

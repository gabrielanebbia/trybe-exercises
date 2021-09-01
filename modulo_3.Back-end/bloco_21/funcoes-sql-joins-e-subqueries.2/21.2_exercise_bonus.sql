-- Exercício Bônus:

-- 10. Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8 
-- e que estejam em cartaz.
SELECT *
FROM Pixar.Movies AS m
INNER JOIN  Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;

-- 11. Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.


-- 12. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título
-- dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.


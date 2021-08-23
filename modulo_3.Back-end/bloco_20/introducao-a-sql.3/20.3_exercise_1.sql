-- Exercício 1:
-- 1. Escreva uma query para exibir todas as peças que começam com GR.
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

-- 2. Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. 
-- Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;


-- 3. Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o 
-- código do fornecedor tenha a letra N.
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

-- 4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- 5. Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%%F%';

-- 6. Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos 
-- de $40,00 . Ordene os resultados por ordem crescente.


-- 7. Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

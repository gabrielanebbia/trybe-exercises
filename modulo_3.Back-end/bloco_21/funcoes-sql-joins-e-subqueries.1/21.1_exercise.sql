-- Exercícios:
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial 
-- em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS average_salary 
FROM hr.employees
GROUP BY JOB_ID
ORDER BY average_salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento 
-- de todas as pessoas funcionárias.
SELECT SUM(SALARY) FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os 
-- salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(SALARY) AS highest_salary, 
MIN(SALARY) AS lowest_salary,
SUM(SALARY) AS sum_of_wages,
ROUND(AVG(SALARY), 2) AS average_of_wages
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras(IT_PROG).
SELECT JOB_ID, COUNT(*) AS 'number_of_programmers'
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de 
-- cada profissão(JOB_ID).
SELECT JOB_ID, SUM(SALARY) AS 'total_payments'
FROM hr.employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de 
-- dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras(IT_PROG).
SELECT JOB_ID, SUM(SALARY) AS 'total_payments'
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto 
-- das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, AVG(SALARY) AS average_of_wages
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY average_of_wages DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos 
-- com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT DEPARTMENT_ID, AVG(SALARY) AS average_of_wages, COUNT(*) AS number_of_employees
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING number_of_employees > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados 
-- por 515 agora devem iniciar com 777.
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito 
-- ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome 
-- e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, 
FIRST_NAME, 
YEAR(HIRE_DATE) AS HIRE_DAY
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome 
-- e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, 
FIRST_NAME, 
RIGHT(HIRE_DATE, 2) AS HIRE_DAY
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome 
-- e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, 
FIRST_NAME, 
MONTH(HIRE_DATE) AS HIRE_MONTH
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes completos dos funcionários em letra maiúscula.
SELECT UPPER(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário 
-- contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7 
AND YEAR(HIRE_DATE) = 1987;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, 
-- tempo que trabalha na empresa (em dias).


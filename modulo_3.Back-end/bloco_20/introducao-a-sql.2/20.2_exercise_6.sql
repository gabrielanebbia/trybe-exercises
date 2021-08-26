-- Exercício 6: Comparação de valores. 
-- Realiza os exercícios do site SQLzoo
-- https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial

-- 1. (Introduction) Observe the result of running this SQL command to show the name, continent and population of all countries.
SELECT name, continent, population FROM world;

-- 2. (Large Countries) How to use WHERE to filter records. 
-- Show the name for the countries that have a population of at least 200 million. 
SELECT name FROM world
WHERE population > 200000000;

-- 3. (Per capita GDP) Give the name and the per capita GDP for those countries with a population of at least 200 million.
SELECT name, gdp/population FROM world
WHERE population > 200000000;

-- 4. (South America In millions) Show the name and population in millions for the countries of the continent 'South America'. 
-- Divide the population by 1000000 to get population in millions.
SELECT name, population/1000000 FROM world
WHERE continent = 'South America';

-- 5.(France, Germany, Italy) Show the name and population for France, Germany, Italy.
SELECT name, population FROM world
WHERE name = 'France' 
OR name = 'Germany'
OR name = 'Italy';

-- 6.(United) Show the countries which have a name that includes the word 'United'.
SELECT name FROM world
WHERE name LIKE '%United%';

-- 7.(Two ways to be big) Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.
-- Show the countries that are big by area or big by population. Show name, population and area.
SELECT name, population, area FROM world
WHERE area > 3000000
OR population > 250000000;

-- 8.(One or the other (but not both) Exclusive OR (XOR). 
-- Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. 
-- Show name, population and area.
	-- Australia has a big area but a small population, it should be included.
	-- Indonesia has a big population but a small area, it should be included.
	-- China has a big population and big area, it should be excluded.
	-- United Kingdom has a small population and a small area, it should be excluded.
SELECT name, population, area FROM world
WHERE (area > 3000000 AND population <= 250000000)
OR (area <= 3000000 AND population > 250000000)

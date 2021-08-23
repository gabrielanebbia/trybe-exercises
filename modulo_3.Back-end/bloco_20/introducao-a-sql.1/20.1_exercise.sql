-- Exercícios 20.1:
-- Utilizando o banco de dados de prática sakila siga as instruções listadas nos exercicos a seguir:

-- Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.
-- Resposta: Clicando com o botão direito sobre tabela e selecionando 'select rows'

-- Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
-- Resposta: Clicando no icone da barra superior 'create a new table'

-- Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
		-- Nome da tabela: Filme
		-- Colunas:
		-- FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
		-- Descricao - não permite nulos, tipo texto (varchar(100));
		-- AnoLancamento - não permite nulos, tipo int;
		-- Nota - permite nulos, tipo int;
-- Resposta: Usando a a janela que se abre podemos preeencher as colunas e marcar as restricioes desejadas.ALTER
		-- Column name -- Datatype -- PK NN UQ BIN UN ZF AI G -- Default/Expression
		-- FilmeId -- INT -- PK AI
		-- Descricao -- varchar(100) -- NN
		-- AnoLancamento -- INT -- NN
		-- Nota - INT

-- Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
-- Resposta: Faz referência a tabela country

-- Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
-- Resposta: N:1 (muitos para um)

-- Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?
-- Resposta: 1:N (um para muitos)

-- Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
-- Resposta: 1- country : city (1:N), 2- store -> staff(1:N), 3- language : film (1:N)

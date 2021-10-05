### `Bloco 25 - MongoDB: Aggregation Framework`
### `Dia 2 - Aggregation Framework - Parte 2`

O objetivo dos exercícios desse dia foi colocar em prática os aprendizados sobre o recurso Aggregation Framework do MongoDB, estágios e expressões do aggregation pipeline. Trabalhar com operações matemáticas, combinações de projeções e operações em campos e strings.
  - Executar operações de soma e subtração de valores em um pipeline
  - Trabalhar com datas em pipelines , adicionando ou subtraindo tempo
  - Executar operações de multiplicação e divisão em pipelines, utilizando valores fixos ou variáveis
  - Adicionar novos campos aos documentos durante um pipeline

**Exercícios**
Para os exercícios foi utilizado o dataset que contém três coleções: clientes, produtos e vendas, do banco erp.

- [ ] 1. Utilizando uma combinação das expressões aritméticas adiciona um campo chamado idade à coleção clientes.
- [ ] 2. Utilizando o novo campo idade, conta quantos clientes têm entre 18 e 25 anos.
- [ ] 3. Remove os estágios $count e $match do exercício anterior e adiciona um estágio no pipeline que coloque as compras do cliente no campo compras.
- [ ] 4. Seleciona TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
- [ ] 5. Confere o número de documentos retornados pelo pipeline com o método itcount(). Devem ter 486 documentos sendo retornados.
- [ ] 6. Ainda nesse pipeline, descobre os 5 estados com mais compras.
- [ ] 7. Descobre o cliente que mais consumiu QUEIJO PRATO. Retorna um documento com a seguinte estrutura:
```
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
```
- [ ] 8. Seleciona todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescenta um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorna apenas os campos clienteId, dataVenda e dataEntregaPrevista.

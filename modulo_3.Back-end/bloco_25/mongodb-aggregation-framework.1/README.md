### `Bloco 25 - MongoDB: Aggregation Framework`
### `Dia 1 - Aggregation Framework - Parte 1`

O objetivo dos exercícios desse dia foi colocar em prática os aprendizados sobre o recurso Aggregation Framework do MongoDB, que oferece um conjunto de ferramentas para realizar operações mais complexas para agrupar valores de múltiplos documentos ou coleções. Dentre os caminhos para executar operações de agregação, o foco foi o aggregation pipeline, o método mais utilizado e recomendado pela MongoDB.
  - Filtrar documentos com o estágio $match
  - Limitar os resultados com $limit
  - Fazer agrupamentos com o $group
  - Controlar a exibição de campos com o $project
  - Trabalhar com arrays com o $unwind
  - Juntar dados de uma ou mais coleções com o $lookup

**Exercícios**
Para os exercícios foi utilizado o dataset que contém três coleções: clientes, produtos e vendas, do banco erp.

- [x] 1. Utilizando o estágio $match, escreve uma agregação para retornar somente os clientes do sexo "MASCULINO".
- [x] 2. Utilizando o estágio $match, escreve uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
- [x] 3. Utilizando o estágio $match, escreve uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005, limitando a quantidade de documentos retornados em 5.
- [x] 4. Conta quantos clientes do estado SC existem na coleção. Retorna um documento em que o campo _id contenha a UF e outro campo com o total.
- [x] 5. Agrupa os clientes por sexo. Retorna o total de clientes de cada sexo no campo total.
- [x] 6. Agrupa os clientes por sexo e uf. Retorna o total de clientes de cada sexo no campo total.
- [x] 7. Utilizando a mesma agregação do exercício anterior, adiciona um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir:
```
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
```
- [x] 8. Descobre quais são os 5 clientes que gastaram o maior valor.
- [ ] 9. Descobre quais são os 10 clientes que gastaram o maior valor no ano de 2019.
- [ ] 10. Descobre quantos clientes compraram mais de 5 vezes. Retorna um documento que contenha somente o campo clientes com o total de clientes.
- [ ] 11. Descobre quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.
- [ ] 12. Descobre quais as três uf s que mais compraram no ano de 2020. Retorna os documentos no seguinte formato:
```
{
  "totalVendas": 10,
  "uf": "SP"
}
```
- [ ] 13. Encontra qual foi o total de vendas e a média de vendas de cada uf no ano de 2019. Ordena os resultados pelo nome da uf. Retorna os documentos no seguinte formato:
```
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}
```

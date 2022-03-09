## `Bloco 35: Redes e Raspagem de Dados`

## `Dia 3 - Raspagem de Dados`

### Exercícios do dia

#### Exercício 1

- [ ] Faz uma requisição ao site https://httpbin.org/encoding/utf8 e exibe seu conteúdo de forma legível.

#### Exercício 2

- [ ] Faz uma requisição ao recurso usuários da API do Github (https://api.github.com/users), exibindo o username e url de todos os usuários retornados.

#### Exercício 3

Simulando solicitações HTTP no navegador para que o servidor retorne os mesmos dados que se vê no navegador.

- [ ] Faz uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers
- [ ] Verifica se foi bem sucedido utilizando o assert "bot detected" not in response.text, se nada acontecer, significa que o código está funcionando.

#### Exercício 4

Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html

- [ ] Faz a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
- [ ] O preço retorna somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.
- [ ] A descrição tem o sufixo "more..." removido quando existir.
- [ ] Os campos extraídos são apresentados separados por vírgula. Ex: título,preço,descrição,capa.

#### Exercício 5

- [ ] Modifica o exercício anterior para retornar também quantos livros estão disponíveis apresentando como último campo no retorno.
Exemplo:

#### Exercício 6

❗ Importa o arquivo books.json no MongoDB antes de realizar questões a seguir.

``` shell
mongoimport --db library books.json
```

- [ ] Escreve um programa que se conecta ao banco de dados library
- [ ] Lista os livros da coleção books para uma determinada categoria recebida por uma pessoa usuária
- [ ] Somente o título dos livros é exibido

#### Exercício 7

- [ ] Faz o calculo de quantos livros publicados (STATUS = PUBLISH) tem no banco de dados por categoria. 
- [ ] Ordena-os de forma decrescente de acordo com a quantidade.

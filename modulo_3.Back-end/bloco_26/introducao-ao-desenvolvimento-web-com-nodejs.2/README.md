### `Bloco 26 - Introdução ao desenvolvimento Web com NodeJS`
### `Dia 2 - Node.js - Fluxo Assíncrono`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre como funciona uma operação assíncrona e qual a sua importância no Node.js. Realizando operações assíncronas utilizando callbacks ou Promises, ler e escrever arquivos localmente com Node.js, escrever scripts que criam e consomem Promises e reescrever códigos que usam callbacks para que usem Promises.

**Exercício 1**
- [x] Cria uma função que recebe três parâmetros e retorna uma Promise.
    - Caso algum dos parâmetros recebidos não seja um número, rejeita a Promise com o motivo "Informe apenas números".
    - Caso todos os parâmetros sejam numéricos, soma os dois primeiros e multiplica o resultado pelo terceiro ( (a + b) * c ).
    - Caso o resultado seja menor que 50, rejeita a Promise com o motivo "Valor muito baixo"
    - Caso o resultado seja maior que 50, resolve a Promise com o valor obtido.

**Exercício 2**
- [x] Escreve um código para consumir a função construída no exercício anterior.
    - Gera um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
    - Chama a função do exercício anterior, passando os três números aleatórios como parâmetros.
    - Utiliza then e catch para manipular a Promise retornada pela função:
        - Caso a Promise seja rejeitada, escreve na tela o motivo da rejeição.
        - Caso a Promise seja resolvida, escreve na tela o resultado do cálculo.

**Exercício 3**
- [x] Reescreve o código do exercício anterior para que utilize async/await.

**Exercício 4**
Utilizando o arquivo simpsons.json realiza os requisitos abaixo:
- [x] Cria uma função que lê todos os dados do arquivo e imprime cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
- [ ] Cria uma função que receba o id de uma personagem como parâmetro e retorna uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeita a Promise com o motivo "id não encontrado".
- [ ] Cria uma função que altera o arquivo simpsons.json retirando os personagens com id 10 e 6.
- [ ] Cria uma função que leia o arquivo simpsons.json e cria um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
- [ ] Cria uma função que adiciona ao arquivo simpsonFamily.json o personagem Nelson Muntz.
- [ ] Cria uma função que substitui o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

**Exercício 5**
- [ ] Cria uma função que lê e escreve vários arquivos ao mesmo tempo.
  - Utiliza o Promise.all para manipular vários arquivos ao mesmo tempo.
  - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] faz com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
  - Programa a função para que ela faça a leitura de todos os arquivos criados no item anterior, armazena essa informação e escreva em um arquivo chamado fileAll.txt.

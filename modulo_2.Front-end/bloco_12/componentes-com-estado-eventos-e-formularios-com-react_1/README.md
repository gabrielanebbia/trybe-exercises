## `Bloco 12 - Componentes com Estado, Eventos e Formulários com React`

### `Dia 1 - Componentes com estado e eventos`

O objetivo dos exercícios do dia foi aplicar um conceito fundamental para a correta construção de aplicações em React, o Lifecycle (ciclo de vida de um componente) e as suas funções. Praticando a utilização correta de cada recurso e garantindo que a assincronicidade do React não prejudique a lógica do que se está tentando executar.

As funções de ciclo de vida do componente utilizadas:

- **componentDidMount** -> para executar uma ação após o componente ser inserido no DOM.
- **shouldComponentUpdate** -> para avaliar se uma atualização do componente deve ou não acontecer naquele momento.
- **componentDidUpdate** -> para executar uma ação após o componente ser atualizado.
- **componentWillUnmount** -> para realizar uma ação antes de o componente ser desmontado.

#### Exercícios

Os exercícios realizados foram retirados do repositório [flaviosugano/exercise-dog-image](https://github.com/flaviosugano/exercise-dog-image) que ensina recuperar e filtrar [fotos de cachorros desse site](https://dog.ceo/dog-api/) em React.

#### Exercício 1

Cria uma aplicação que consume uma API de fotos aleatórias de cachorros.

- [x] Assim que a página é montada, uma primeira requisição acontece, e a imagem é mostrada na tela.
- [x] Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela.
- [ ] Cria um botão que a cada clique busca mais um cachorro.

#### Exercício 2

- [ ] A cada tentativa de atualização do componente, verifica se o campo message tem a palavra terrier. Se sim, não atualiza o componente.
- [ ] Guarda a url da última imagem gerada no localStorage após cada atualização.
- [ ] Após a atualização do componente, exiba um alert com a raça.

#### Bônus

- [ ] A cada foto que for baixada, através de um input, permite que quem usa dê um nome ao cachorro.
- [ ] Cria um botão que guarda o resultado em um array, juntamente com o nome dado ao cachorro.
- [ ] Guarda o array no localStorage a cada atualização, e não mais a url da última imagem gerada.
- [ ] A cada inicialização da aplicação, verifica se existem dados prévios guardados no localStorage. Caso haja, ignora a instrução do exercício 1.1 e exibe a última imagem guardada.

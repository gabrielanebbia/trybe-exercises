## Bloco 5 - JavaScript: DOM, Eventos e Web Storage
### Dia 3 - Eventos

O objetivo dos exercícios desse dia eram colocar em pratica o que aprendi sobre DOM, seletores, manipulação de elementos HTML e Eventos em JavaScript.

**Exercício 1**
Desenvolve uma função que cria dinamicamente cada dia do calendário
- [x] Adiciona os dias como filhos/filhas da tag <ul> com ID "days".
- [x] Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day.
- [x] Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
- [x] Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.

**Exercício 2**
- [ ] Implementa uma função que recebe como parâmetro a string "Feriados" e cria dinamicamente um botão com o nome "Feriados".
- [ ] Adiciona este botão a ID "btn-holiday".
- [ ] Adiciona este botão como filho/filha da tag <div> com classe "buttons-container".
  
**Exercício 3**
- [ ] Implementa uma função que adiciona ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
- [ ] Implementa a lógica inversa, na qual ao clicar novamente no botão ele retorna à configuração inicial com a cor "rgb(238,238,238)".

**Exercício 4**
- [ ] Implementa uma função que recebe como parâmetro a string "Sexta-feira" e cria dinamicamente um botão com o nome "Sexta-feira".
- [ ] Adiciona ao botão o ID "btn-friday".
- [ ] Adiciona este botão como filho/filha da tag <div> com classe "buttons-container".

**Exercício 5**
- [ ] Implementa uma função que adiciona ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
- [ ] Implementa a lógica inversa, na qual ao clicar no botão novamente ele retorna à configuração inicial exibindo os dias.

**Exercício 6**
Implementa duas funções que criem um efeito de "zoom". 
-[ ] Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia aumenta e, quando o ponteiro do mouse sair do dia, o texto retorna ao tamanho original.

**Exercício 7**
Implementa uma função que adiciona uma tarefa personalizada ao calendário. 
- [ ] A função recebe como parâmetro a string com o nome da tarefa (ex: "cozinhar") e cria dinamicamente um elemento com a tag <span> contendo a tarefa.
- [ ] O elemento criado é adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

**Exercício 8**
Implementa uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.
- [ ] Esta função recebe como parâmetro uma string ("cor") e cria dinamicamente um elemento de tag <div> com a classe task.
- [ ] O parâmetro cor é utilizado como cor de fundo da <div> criada.
- [ ] O elemento criado é adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

**Exercício 9**
- [ ] Implementa uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribui a este elemento a classe task selected, para indicar que ela foi selecionada.
- [ ] Ao clicar novamente no elemento, a sua classe volta a ser somente task, indicando que esta tarefa está deixando de ser uma tarefa selecionada.

**Exercício 10**
- [ ] Implementa uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribui a este dia a cor da legenda da sua tarefa selecionada.
- [ ] Ao clicar novamente no dia, a sua cor volta à configuração inicial rgb(119,119,119).

**Exercício Bônus*
- [ ] Implementa uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS" e clicar no botão "ADICIONAR" adiciona o item à lista "MEUS COMPROMISSOS".
- [ ] Se nenhum caractere for inserido no campo input, a função retorna um alert com uma mensagem de erro ao clicar em "ADICIONAR".
- [ ] Ao pressionar a tecla "enter" o evento anterior também é disparado.

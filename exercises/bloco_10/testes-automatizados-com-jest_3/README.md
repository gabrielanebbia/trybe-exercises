## Bloco 10 - Testes automatizados com Jest
### Dia 3 - Jest - Simulando comportamentos

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre testes automatizados com Jest.

**Exercício 1**
- [ ] Cria uma função que gere um número aleatório entre 0 e 100.
- [ ] Cria os testes para essa função. 

Utilizando o mock:
- [ ] Define o retorno padrão para 10. 
- [ ] Testa se a função foi chamada.
- [ ] Testa qual seu retorno.
- [ ] Testa quantas vezes a função foi chamada.

**Exercício 2**
Com a função do exercício anterior e utilizando o mock:
- [ ] Cria uma nova implementação que recebe dois parâmetros e retorna a divisão do primeiro pelo segundo (Essa implementação ocorre uma única vez).
- [ ] Cria os testes necessários para validar.

**Exercício 3**
Com a função do primeiro exercício e utilizando o mock:
- [ ] Cria uma nova implementação que recebe três parâmetros e retorna sua multiplicação. 
- [ ] Cria os testes necessários para validar.
- [ ] Reseta sua implementação
- [ ] Cria uma nova implementação que receba um parâmetro e retorna seu dobro.

**Exercício 4**
- [ ] Cria um função que recebe uma string e retorna-a em caixa alta. 
- [ ] Cria um função que recebe uma string e retorna só a primeira letra. 
- [ ] Cria um função que recebe duas strings e as concatena. 

Utilizando o mock no arquivo: 
- [ ] Faz uma nova implementação para a primeira função, com ela agora retornando a string em caixa baixa. 
- [ ] Na segunda função, faz uma nova implementação que retorna a última letra de uma string. 
- [ ] Na terceira função, faz uma nova implementação que ao receber três strings as concatena.

**Exercício 5**
Com a primeira função do exercício anterior:
- [ ] Restaura a implementação original.
- [ ] Cria os testes necessários para validar.

**Exercício 6**
Utilizando o mock:
- [ ] Cria uma função que faz requisição para a api dog pictures.
- [ ] Cria um teste que deve interpretar que a requisição se resolveu e retorna como valor "request sucess". 
- [ ] Cria um teste que deve interpretar que a requisição falhou e retorna como valor "request failed". 
- [ ] Cria outros testes necessários para validar.

**Exercício Bônus**
Tendo uma API de piadas se implementa o fetchJoke, um gerador de piadas ruins, que gera piadas aleatoriamente através do endpoint armazenado em API_URL. 
- [ ] Cria um teste que verifica a chamada da API para um resultado específico.

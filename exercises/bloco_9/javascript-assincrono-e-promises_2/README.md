## Bloco 9 - JavaScript Assíncrono e Promises
### Dia 2 - Promises

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Promises.
- Utilizar Promises para fazer chamadas assíncronas
- Integrações com APIs de terceiros

Os requisitos do exercí­cio são:

Criar um site simples com um gerador de piadas ruins

**Exercício 1**
- [x] Faz a piada aparecer no DOM da página.

**Exercício 2**
Fendo passo a passo uma Promise

- [ ] Instancia uma Promise.
- [ ] Dentro dela produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
- [ ] Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. 
- [ ] No caso contrário do item anterior ela deve ser rejeitada. 
- [ ] Acresce um then, com um console.log('Promise resolvida') e um catch, com um console.log('Promise rejeitada') à Promise, só para que o código funcione e possamos ver o resultado.

**Exercício 3**
- [ ] Quando a promise for resolvida com sucesso, retorna um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

**Exercício 4**
- [ ] Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

**Exercício 5**
- [ ] Quando a Promise for bem-sucedida, encadeia nela uma segunda Promise que some os elementos do array.

**Bônus 1**
- [ ] Utiliza somente Higher Order Functions para fazer as operações com o array

**Bônus 2**
- [ ] Refatora a Promise para utilizar somente async e await

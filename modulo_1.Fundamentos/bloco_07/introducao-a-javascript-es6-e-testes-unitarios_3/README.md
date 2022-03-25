### `Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários`
### `Dia 3 - Testes unitários em JavaScript`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre testes unitários e o conceito de testar em pequenos passos, assim orientando o nosso desenvolvimento com base nos testes.

### Parte 1 - Praticando a implementação de testes
**Exercício 1**
A função sum(a, b) retorna a soma do parâmetro a com o b.
- [x]Testa se o retorno de sum(4, 5) é 9
- [x]Testa se o retorno de sum(0, 0) é 0
- [x]Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
- [x]Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

**Exercício 2**
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- [x]Verifica se o array passado por parâmetro não sofreu alterações
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

**Exercício 3**
Passa a função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array:
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- [x]Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

**Exercício 4**
Passada a função myFizzBuzz(num) que recebe um número e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número:

- [x]Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado
- [x]Faz uma chamada com um número divisível por 3 e verifica se o retorno é o esperado
- [x]Faz uma chamada com um número divisível por 5 e verifica se o retorno é o esperado
- [x]Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado
- [x]Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado

**Exercício 5**
- [x]Compara dois objetos (JSON) e verifica se são idênticos ou não

### Parte II - Praticando TDD
Dado os testes unitários escreva as funções de forma a passar nos testes.
- [x]Escreve a função addOne
- [x]Escreve a função wordLengths
- [x]Escreve a função sumAllNumbers
- [x]Escreve a função findTheNeedle
  
### Parte III - Reescrevendo funções utilizando TDD
Escreve os testes de modo a entender e testar o comportamento das funções passadas(propositalmente erradas) e depois, as altera para que passem nos testes.
- [x] TDD 1
- [x] TDD 2
- [x] TDD 3
- [x] TDD 4

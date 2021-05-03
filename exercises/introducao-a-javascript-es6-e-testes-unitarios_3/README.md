## Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
### 7.3 - Testes unitários em JavaScript

## Parte 1
#### Exercício 1
A função sum(a, b) retorna a soma do parâmetro a com o b

- [x]Teste se o retorno de sum(4, 5) é 9;
- [x]Teste se o retorno de sum(0, 0) é 0;
- [x]Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5);
- [x]Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");

#### Exercício 2
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

- [x]Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
- [x]Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
- [x]Verifique se o array passado por parâmetro não sofreu alterações;
- [x]Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado;

#### Exercício 3
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
- [x]Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado;
- [x]Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
- [x]Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações;
- [x]Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado;

#### Exercício 4
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

- [x]Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado;
- [x]Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado;
- [x]Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado;
- [x]Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado;
- [x]Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado;

#### Exercício 5
- [x]Compare dois objetos (JSON) para verificar se são idênticos ou não;

## Parte II
Dado os testes unitários escreva as funções de forma a passar nos testes.

- [x]Escreva a função addOne para passar nos testes já implementados.
- [x]Escreva a função wordLengths para passar nos testes já implementados.
- [ ]Escreva a função sumAllNumbers para passar nos testes já implementados.
- [ ]Escreva a função findTheNeedle para passar nos testes já implementados.



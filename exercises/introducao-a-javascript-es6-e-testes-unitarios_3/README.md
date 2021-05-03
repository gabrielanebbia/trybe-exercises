## Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
### 7.3 - Testes unitários em JavaScript


#### Exercício 1
A função sum(a, b) retorna a soma do parâmetro a com o b

- [x]Teste se o retorno de sum(4, 5) é 9;
- [x]Teste se o retorno de sum(0, 0) é 0;
- [x]Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5);
- [x]Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");

#### Exercício 2
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

- [x]Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
- [ ]Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- [ ]Verifique se o array passado por parâmetro não sofreu alterações
- [ ]Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
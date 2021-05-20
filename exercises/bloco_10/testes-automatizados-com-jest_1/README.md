## Bloco 10 - Testes automatizados com Jest
### Dia 1 - Primeiros passos no Jest

## Parte 1 - Refazendo os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript, dessa vez utilizando Jest.

**Exercício 1**
A função sum(a, b) retorna a soma do parâmetro a com o b.
- [x]Testa se o retorno de sum(4, 5) é 9;
- [x]Testa se o retorno de sum(0, 0) é 0;
- [x]Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5);
- [x]Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");

**Exercício 2**
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
- [x]Verifica se o array passado por parâmetro não sofreu alterações;
- [x]Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado;

**Exercício 3**
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array.
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado;
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
- [x]Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações;
- [x]Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado;

**Exercício 4**
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número.
- [ ]Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado;
- [ ]Faz uma chamada com um número divisível por 3 e verifica se o retorno é o esperado;
- [ ]Faz uma chamada com um número divisível por 5 e verifica se o retorno é o esperado;
- [ ]Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado;
- [ ]Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado;

**Exercício 5**
- [ ]Compara dois objetos (JSON) para verifica se são idênticos ou não;

## Parte II - Trabalhar com os testes para algumas funções criadas anteriormente no projeto Playground functions.

**Exercício 1**
Para as funções encode e decode cria os seguintes testes:
- [ ]Testa se encode e decode são funções;
- [ ]Para a função encode testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
- Para a função decode testa se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u, respectivamente;
- [ ]Testa se as demais letras/números não são convertidos para cada caso;
- [ ]Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

**Exercício 2**
- [ ]Implementa a função techList a partir dos testes no arquivo. 

**Exercício 3**
- [ ]Implementa a função hydrate a partir dos testes no arquivo.

## Bônus
Praticar o desenvolvimento orientado a testes implementando:
- A função;
- Os testes para essa função;

- [ ]Cria uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). 
- [ ]Cria os testes para essa função que deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, a função retorna o erro "ID não identificada". Se a informação que se quer acessar não existir, a função retorna o erro "Informação indisponível".

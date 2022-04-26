## `Bloco 38 - Estrutura de Dados I: Arrays, Hashmaps e Sets`

### `Dia 1 - Arquitetura de Computadores`

#### Exercícios

#### Exercício 1 - Simulando um computador

Cria um projeto que simula a arquitetura de computadores de uma maneira bem simples, ela tem um arquivo principal para a execução do programa que representa um Sistema Operacional e duas classes que representam a Memória Principal e a Secundária.

Cada tipo de memória armazena os dados de fato na memória que ela representa, sendo a Principal armazenando tudo em memória RAM e a secundária no disco.

O objetivo do script é realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória.

Primeiros passos:

1. Cria um novo diretório chamado de computador
2. Para a memória principal, ou memória RAM, cria um arquivo main_memory.py
3. Cria um arquivo secondary_memory.py para ser a memória secundária
4. Cria um novo arquivo operating_system.py para gerenciar as "memórias" criadas

Implementações:

- [ ] Implementa os métodos get e load para a memória principal
- [ ] Implementa os métodos get e load para a memória secundária

Testando os conceitos:

- [ ] Testa o script, executando o comando python operating_system.py e observa na saída no console como foram os tempos de saída.
- [ ] Aumenta a quantidade de números para serem somados, adicionando uma grande quantidade de números no array de números aleatórios, com * 200 ao final da linha que declara a lista RANDOM_NUMBERS, para multiplicar a quantidade de elementos na lista.
- [ ] Roda o script novamente e verifica como foi o tempo de resposta e qual é o mais rápido.
- [ ] Comenta os trechos de código que fazem a operação de limpeza (clean) da memória e executa o comando novamente
- [ ] Comenta os trechos de código que fazem a operação de carregamento (load) da memória e executa novamente.
- [ ] Compara o que aconteceu com os resultados das somas.

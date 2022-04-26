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

#### Exercício 2 - Explorando o sistema que estamos utilizando

> Utilizando o módulo [platform](https://docs.python.org/3/library/platform.html) do Python.

Cria um script chamado my_platform.py e utiliza-o para exibir no console as informações solicitadas abaixo:

- [ ] A plataforma que está sendo utilizada (linux, win32, darwin, etc).
- [ ] A versão (release).
- [ ] A arquitetura (x32 ou x64).

#### Exercício 3 - Enviando programaticamente comandos para o shell

> Utilizando o método check_output do módulo [subprocess](https://docs.python.org/3/library/subprocess.html) do Python.

Cria um script chamado resources.py e utiliza-o para exibir no console as informações sobre a CPU abaixo:

obs: no linux pode-se usar o comando `lscpu`, e no OSX pode-se usar o comando `sysctl -n machdep.cpu.brand_string`

- [ ] O modelo
- [ ] A quantidade de cores
- [ ] A velocidade em Megahertz - MHz
- [ ] A quantidade de cache (L1, L2, L3);
- [ ] Informações sobre a memória RAM 
obs: no linux pode-se usar comando `free`, e no OSX pode-se usar o comando `top -l 1 | head -n 10 | grep PhysMem`.
- [ ] A quantidade total de memória RAM disponível em megabytes - MB e a a conversão também.
- [ ] A quantidade total de memória RAM que está sendo utilizada em megabytes - MB.

**Dicas:**

- O método `decode("UTF-8")` é útil para ler os dados oriundos da check_output.
- Os métodos `split` e `strip` são úteis para limpar e separar as informações obtidas com os comandos.
O método `startswith` é útil para selecionar informações específicas.

#### Exercício 4

- [ ] Faz um script que a cada intervalo de segundo mostra no console a memória utilizada do sistema operacional vs a memória total (ambos em megabytes - MB).

#### Exercício 5

- [ ] Faz um script que exibe o seu respectivo `process id` utilizando o módulo `os` do Python e então fica em execução por um determinado tempo.
- [ ] Utilizando os comandos de monitoramento visto no conteúdo, exibe os processos em execução e então identifica o seu processo.

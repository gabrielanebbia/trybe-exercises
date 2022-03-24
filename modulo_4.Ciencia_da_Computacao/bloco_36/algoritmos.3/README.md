## `Bloco 36: Algoritmos`

### `Dia 3 - Algoritmos de ordenação e busca`

Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte classe :

``` python
from time import perf_counter


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name
    def __enter__(self):
        self.start = perf_counter()
    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")
```

Para utilizar o Cronometro, basta usá-lo dentro de um with e em seguida chamar a função:

``` python
from Cronometro import Cronometro


with Cronometro("algoritmo"):
    algoritmo(...)
```

#### Exercício 1

Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"] , após duas iterações utilizando bubble sort , como estaria este array?

#### Exercício 2

Demonstre o passo a passo, do processo de mistura, de um array sendo ordenado, utilizando merge sort . Comece o passo a passo a partir da linha abaixo:

`7 3    5 4    6 8    2 1`

#### Exercício 3

Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
A entrada de dados pode ser gerada da seguinte maneira:

``` python
from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:] # copia dos ordenados
shuffle(aleatorios) # embaralha eles
```

#### Exercício 4

Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

#### Exercício 5

Converta o algoritmo recursivo de busca binária em iterativo.

#### Exercício 6

Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um array de booleanos , descubra o índice onde o erro ocorreu pela primeira vez.
Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.

``` python
entrada: [True, True, True, True, False, False, False]
saída: 4


entrada: [True, True, False, False, False, False, False]
saída: 2
```

## Bloco 38 - Estrutura de Dados II: Listas, Filas e Pilhas

### Dia 1 -  Nó e Listas Encadeadas

---

#### Exercícios

O objetivo dos exercícios do dia foi colocar em prática o que havia aprendido sobre um dos tipos abstratos de dados que é utilizado como fundamento para a construção de outros TADs: o Nó, e o comportamento das listas encadeadas e como elas são construídas a partir dos nós.

- Construir e utilizar um Nó.
- Construir e utilizar uma Lista Encadeada.

---

#### Exercício 1 - Aprimorando a classe Lista

Na [classe LinkedList](./linked_list_content.py), que atende as principais operações que a TAD nos oferece, se adiciona os seguintes métodos:

- [x] a. A operação clear para remover todos os Nodes da lista.
- [x] b. A operação __get_node_at para acessar o Node em qualquer posição da lista.

Após criar as operações anteriores, refatora os seguintes métodos para que utilizem a __get_node_at ante iterações:

- [x] insert_last
- [ ] insert_at
- [ ] remove_last
- [ ] remove_at
- [ ] get_element_at

---

#### Exercício 2 - Nova busca

- [ ] Cria uma função chamada `def index_of(self, value)` responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência.
- [ ] Caso o valor não exista retorna `-1`.
- [ ] A função respeita a complexidade O(n).

---

#### Exercício 3 - Remover duplicatas de uma LinkedList

 > Atividade extraída e adaptada do [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/).

- [ ] Implementa um algoritmo que recebe uma LinkedList como argumento.
- [ ] Retorna uma nova lista sem elementos duplicados.
- [ ] A função respeita a complexidade O(n).

---

#### Exercício 4 - Remover duplicatas de uma DoublyLinkedList

> Atividade extraída e adaptada do [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/).

- [ ] Implementa um algoritmo que recebe uma DoublyLinkedList como argumento.
- [ ] Retorna uma nova lista, sem elementos que possuem mais de uma ocorrência.

## `Bloco 33: Introdução à Python`

## `Dia 3 - Testes`

---

### Exercícios

O objetivo dos exercícios do dia foi colocar em prática o que havia aprendido sobre testes automatizados em Python, utilizando a biblioteca [pytest](https://docs.pytest.org/en/latest/), um framework que facilita a escrita de testes simples, mas capazes de testar funcionalidades complexas em aplicações e bibliotecas.

- Escrever testes automatizados utilizando a linguagem Python
- Verificar a ocorrência de erros esperados utilizando testes automatizados
- Criar contextos para execução de testes automatizados
- Modificar componentes do software para evitar a utilização de recursos externos

---

Em todos os exercícios, os problemas foram resolvidos com pelo menos 4 testes automatizados e prevenindo possíveis erros na entrada de dados e na execução do programa.

---

### Exercício 1 - FizzBuzz

- [ ] Escreve um programa que retorna uma lista com os valores numéricos de 1 a N.
Adiciona as seguintes exceções:
- [ ] Números divisíveis por 3 aparecem como 'Fizz' ao invés do número.
- [ ] Números divisíveis por 5 aparecem como 'Buzz' ao invés do número.
- [ ] Números divisíveis por 3 e 5 aparecem como 'FizzBuzz' ao invés do número.

---

### Exercício 2 - Expressões com números de telefone

- [ ] Cria uma função que lê uma expressão e encontra o número formado correspondente baseado na tabela abaixo:
Letras  ->  Número
ABC     ->  2
DEF     ->  3
GHI     ->  4
JKL     ->  5
MNO     ->  6
PQRS    ->  7
TUV     ->  8
WXYZ    ->  9

---

### Exercício 3 - Validação de e-mails

Faz uma função que valida um e-mail segundo critérios e lançando uma exceção quando o valor for inválido.

- [ ] Possui o formato nomeusuario@nomewebsite.extensao.
- [ ] O nome de usuário contém somente letras, dígitos, traços e underscores.
- [ ] O nome de usuário inicia com uma letra.
- [ ] O nome do website contém somente letras e dígitos.
- [ ] O tamanho máximo da extensão é três.

---

### Exercício 4 - Validando lista de e-mails

Baseado no exercício anterior:

- [ ] Escreve uma função que, dado uma lista de emails, retorna somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.
## `Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo`

### `Dia 1 - HTML & CSS - Forms`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre criar formulários em HTML com as tags: input, button, textarea, select, form.

### Exercícios

Para o exercício foi criado um formulário de currículo com as seguintes especificações:

#### Exercício 1

Cria um `<fieldset>` para os seguintes dados pessoais:

- [x] Nome - Texto
        Limite de 40 caracteres
        Campo obrigatório
        Email - Texto
- [x] Limite de 50 caracteres
        Campo obrigatório
- [x] CPF - Texto
Limite de 11 caracteres
        Campo obrigatório
- [x] Endereço - Texto
Limite de 200 caracteres
        Campo obrigatório
- [x] Cidade - Texto
        Limite de 28 caracteres
        Campo obrigatório
- [x] Estado - Select
        Todos os estados do Brasil
        Utilize estruturas de repetição via JavaScript para gerar os `<option>`
        Campo obrigatório
- [x]Tipo - Radio Button
        Casa, Apartamento
        Campo obrigatório

#### Exercício 2

Cria outro `<fieldset>` para dados do seu último emprego:

- [x] Resumo do currículo - TextArea
        Limite de 1000 caracteres
        Campo obrigatório
- [x] Cargo - Texto
        Limite de 40 caracteres
        Campo obrigatório
- [x] Descrição do cargo - Texto
        Limite de 500 caracteres
        Campo obrigatório
- [x] Data de início - Texto
        Verificar o formato da data dd/mm/aaaa
        O dia deve ser > 0 e <= 31
        O mês deve ser > 0 e <= 12
        O ano não pode ser negativo
        Caso alguma das condições seja inválida no momento do envio do formulário, exibe via alert uma mensagem de erro contextualizada
        Campo obrigatório

#### Exercício 3

Logo abaixo do formulário, cria um botão que:

- [x] Chama uma função JavaScript que interrompe o fluxo automático do form utilizando o preventDefault() - impede as validações do HTML ao fazer o submit.
- [ ] Implementa, no Javascript as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostra em uma `<div>` uma mensagem de erro. Se o erro for na Data de Início, a mensagem é contextualizada.

#### Exercício 4

- [ ] Cria um botão Limpar que limpa todos os campos do formulário e a `<div>` com seu currículo também.

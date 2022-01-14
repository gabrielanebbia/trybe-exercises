### `Bloco 29: NodeJS: Introdução Deployment`

### `Dia 2 - Deploy - Gerenciadores de Processos`

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre como gerenciar o ciclo de vida de aplicações, e sua importância em um ambiente de produção. Sobre os Gerenciadores de Processos (Process Managers), como instalá-los e utilizá-los para rodar os códigos.

#### Exercícios

Prática utilizando os principais recursos do PM2.

#### Exercício 1

- [ ] Cria uma API simples que retorne uma mensagem qualquer.

Gerencia os processos da seguinte maneira:
- [ ] Cria um processo no PM2 utilizando o CLI
- [ ] Restart e recarrega o processo utilizando o CLI do PM2
- [ ] Para o processo
- [ ] (Bônus) - Escalona para mais 5 processos
- [ ] (Bônus) - Define para 3 a quantidade de processos
- [ ] Remove o processo da listagem do PM2

#### Exercício 2

- [ ] Cria um arquivo ecosystem para configurar o PM2
- [ ] Configura para alterações no diretório da aplicação e, caso ocorram, reiniciam automaticamente a aplicação
- [ ] Configura para ativar o modo cluster e a quantidade de processos rodando para o máximo possível
- [ ] Configura para reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória

#### Exercício 3

Explorando variáveis de ambiente

- [ ] Adiciona à API o uso de uma variável de ambiente que altera a mensagem exibida em sua resposta ou outro comportamento que preferir
- [ ] Adiciona ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e env_homolog
- [ ] Executa o processo utilizando o contexto prod
- [ ] Executa o processo utilizando o contexto homolog
- [ ]  Valida se o comportamento foi alterado.

#### Exercício 4

Adiciona monitoramento à API

- [ ] Cria uma conta no PM2
- [ ] Adiciona o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2
- [ ] Verifica se o dashboard web está exibindo as informações de sua API

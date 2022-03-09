## `Bloco 35: Redes e Raspagem de Dados`

## `Dia 1 - Arquitetura de redes`

### Exercícios do dia

O objetivo dos exercícios foi testar requisições utilizando [comandos curl](https://curl.se/docs/), ferramenta de linha de comando que permite lidar com transferência de dados por meio de diferentes protocolos.

#### Exercício 1

Utilizando um server HTTP e a ferramenta cURL para realizar uma chamada.

- [x] Cria um projeto com as rotas GET e POST, para que seja possível enviar requisições para os endpoints e receber respostas.
- [x] Faz uma chamada GET, utilizando o cURL
- [x] Faz uma chamada POST, utilizando o cURL, passando um JSON no body da requisição
- [x] Faz uma chamada qualquer, utilizando o cURL, passando um header na requisição

#### Exercício 2

Ainda utilizando o cURL para explorar mais alguns conceitos do HTTP:

- [x] Faz uma chamada GET, utilizando o cURL, para "google.com"
- [x] Faz uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location , que serve para "seguir redirecionamentos"

#### Exercício 3

Utilizando o wget:

- [x] Pega o conteúdo da página do site da [Trybe](https://www.betrybe.com)
- [x] Depois abre o arquivo HTML baixado no navegador

#### Exercício 4

Na camada de transporte:

Cria um servidor TCP usando o módulo socketserver que já vem embutido com o Python que:

- [x] Responde com um "Olá, client", logo quando estabelece uma conexão
- [x] Imprime no console todo dado recebido
- [x] Responde com os dados recebidos (como um eco)
- [x] Utiliza a porta 8085

#### Exercício 5

Utilizando o comando telnet ou o Netcat(nc):

- [ ] Conecta no server do exercício anterior e envia informações. O server deverá imprime as mensagens enviadas no console.
- [ ] Para o servidor e verifica o que acontece com a conexão que estava aberta com o comando telnet ou nc.

#### Exercício 6

Reinicia o servidor TCP e faz uma requisição utilizando o cURL (HTTP) que:

- [ ] Retorna o que é exibido no console do server

#### Exercício 7

Para explorar outro protocolo de transporte cria um servidor UDP usando o mesmo módulo socketserver.

O servidor UDP:

- [ ] Imprime no console toda mensagem recebida
- [ ] Responde com os dados recebidos (como um eco).
- [ ] Utiliza a porta 8084.

#### Exercício 8

- [ ] Envia pacotes para o servidor UDP utilizando o Netcat(nc).
- [ ] Em seguida para o servidor e e verifica a conexão no sentido do client

#### Exercício 9

- [ ] Faz uma chamada ao server utilizando o cURL

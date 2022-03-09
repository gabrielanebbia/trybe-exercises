## `Bloco 35: Redes e Raspagem de Dados`

## `Dia 2 - Redes de computadores, ferramentas e segurança`

### Exercícios do dia

O objetivo dos exercícios do dia foi utilizar os conhecimentos aprendidos sobre protocolos seguros, firewall e proxy.

#### Exercício 1

Utilizando [iptables](https://www.netfilter.org/documentation/):

- [x] Define uma regra de firewall utilizando o comando iptables -A, que bloqueia (block ou REJECT/DROP) toda a entrada (in ou INPUT) de pacotes utilizando o protocolo ICMP, impedindo assim que a máquina responda ao comando ping.
- [x] Executa o comando ping para validar se a regra está funcionando corretamente.
- [x] Adiciona o parâmetro -O para exibir os pings rejeitados.

#### Exercício 2

- [ ] Exclui a regra anterior utilizando o parâmetro -D

#### Exercício 3

Cria uma regra para bloquear o tráfego HTTPS.

- [ ] Bloqueia a saída de pacotes (out ou OUTPUT).
- [ ] Especifica a porta utilizando o parâmetro --sport. (A porta padrão para esse protocolo é a 443)
- [ ] Testa a regra acessando um site pelo navegador que usa o protocolo, como o Youtube, o Google ou o Facebook.

#### Exercício 4

- [ ] Bloqueia agora o tráfego de saída para HTTP.
- [ ] Testa a regra acessando um site pelo navegador que use HTTP.

#### Exercício 5

- [ ] Limpa todas as regras utilizando o comando --flush do iptables (Linux).

#### Exercício 6

Utilizar um tipo de proxy que pode ser bastante útil no nosso dia como pessoas desenvolvedoras: o NGROK, com ele conseguimos criar um túnel para o nosso localhost.

- [ ] Cria um servidor HTTP na máquina executando na porta 80
- [ ] Baixa o ngrok
- [ ] Cria um túnel para a porta 80
- [ ] Acessa o link disponibilizado no navegador. Utiliza ele para acessar de outros dispositivos, como um smartphone ou outro computador.

#### Exercício 7

Sobre os protocolos SSL e TLS.
O objetivo é subir o próprio servidor HTTPS utilizando um certificado criado pela ferramenta OpenSSL.

Gerando o próprio certificado auto-assinado:

``` shell
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

Obs: Lembrando que ele não será reconhecido por nenhuma entidade certificadora e só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador.

1. Após gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada).

- [ ] Copia os dois arquivos para um diretório onde será criado o servidor HTTPS.

2. Escreve um servidor https usando os módulos nativos do python ssl e http.server seguindo as instruções a seguir:

- [ ] Cria um contexto SSL com a classe SSLContext, usando o protocolo de versão mais alta disponível para servidores.
- [ ] Carrega no contexto SSL a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave.
- [ ] Cria uma instância de HTTPServer.
- [ ] Cria um socket server-side usando o método wrap_socket do contexto SSL. Passa como parâmetro o socket do servidor (server.socket).
- [ ] Substitui o socket do servidor pelo socket que foi criado.
- [ ] Executa o servidor com o método serve_forever.

- [ ] 3. Acessa o servidor no endereço https://localhost:8000/ utilizando o Firefox.
Obs: Percebe-se que é informado que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele. O Chrome e Safari se recusam a acessar um site cujo certificado não está assinado por NENHUMA autoridade certificadora.

- [ ] 4. Acessa o servidor utilizando cURL.

- [ ] 5. Utilizando o recurso o parâmetro -k ou --insecure do cURL, somente para testes. Que diz para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".

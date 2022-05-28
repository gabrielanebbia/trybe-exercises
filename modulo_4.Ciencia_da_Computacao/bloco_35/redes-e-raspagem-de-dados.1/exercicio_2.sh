# Exercício 2 - utilizando o cURL para explorar conceitos do HTTP

# obs: foi utilizando o parametro -I para obter mais detalhes no conteúdo do cabeçalho.

### 1. chamadas GET sem utilizar os redirecionamentos

curl google.com
# <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
# <TITLE>301 Moved</TITLE></HEAD><BODY>
# <H1>301 Moved</H1>
# The document has moved
# <A HREF="http://www.google.com/">here</A>.
# </BODY></HTML> 

curl -I google.com
# HTTP/1.1 301 Moved Permanently
# Location: http://www.google.com/
# Content-Type: text/html; charset=UTF-8
# Date: Tue, 08 Mar 2022 04:28:21 GMT
# Expires: Thu, 07 Apr 2022 04:28:21 GMT
# Cache-Control: public, max-age=2592000
# Server: gws
# Content-Length: 219
# X-XSS-Protection: 0
# X-Frame-Options: SAMEORIGIN

### 2. chamda GET usando o parametro -L que serve para "seguir redirecionamentos".

curl -I -L google.com
# HTTP/1.1 301 Moved Permanently
# Location: http://www.google.com/
# Content-Type: text/html; charset=UTF-8
# Date: Tue, 08 Mar 2022 04:15:55 GMT
# Expires: Thu, 07 Apr 2022 04:15:55 GMT
# Cache-Control: public, max-age=2592000
# Server: gws
# Content-Length: 219
# X-XSS-Protection: 0
# X-Frame-Options: SAMEORIGIN

# HTTP/1.1 200 OK
# Content-Type: text/html; charset=ISO-8859-1
# P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
# Date: Tue, 08 Mar 2022 04:15:55 GMT
# Server: gws
# X-XSS-Protection: 0
# X-Frame-Options: SAMEORIGIN
# Transfer-Encoding: chunked
# Expires: Tue, 08 Mar 2022 04:15:55 GMT
# Cache-Control: private
# Set-Cookie: 1P_JAR=2022-03-08-04; expires=Thu, 07-Apr-2022 04:15:55 GMT; path=/; domain=.google.com; Secure
# Set-Cookie: NID=511=e8DPlAnECEZ3zTxAPP1zd3QSZChDQA5r3zhw7OgHQ46HiU3690QZx6nOH3LZnDU8b9HZRc-t19HouigbEdqk9uUb1-Y5TQMGQ4mz56Aq6sskUYihEnjCy-86dLAxgWOeTYPdaOFFvga3GIm4HruRSlPwtUGr-QYuOOyoRbl5x0o; expires=Wed, 07-Sep-2022 04:15:55 GMT; path=/; domain=.google.com; HttpOnly

### 3. chamada GET usando o caminho correto sem necessidade de redirecionamentos

curl -I https://www.google.com
# HTTP/2 200 
# content-type: text/html; charset=ISO-8859-1
# p3p: CP="This is not a P3P policy! See g.co/p3phelp for more info."
# date: Tue, 08 Mar 2022 04:16:57 GMT
# server: gws
# x-xss-protection: 0
# x-frame-options: SAMEORIGIN
# expires: Tue, 08 Mar 2022 04:16:57 GMT
# cache-control: private
# set-cookie: 1P_JAR=2022-03-08-04; expires=Thu, 07-Apr-2022 04:16:57 GMT; path=/; domain=.google.com; Secure
# set-cookie: NID=511=Uk9UASEI4cRsdXWuEgFDQXFA0FzvGuS2_Cd2usdSoMOUfy4c2vPtR95VrJtjpiH6o381-zg31aWJPBpakm_jk6kd3cOKDcEfiQPCckN-v1U-lRUDrqLMJCoUbQteOzHtxjgQFsjMtutpsKeuYo6s9dX6chl03m8tfOqQ9_8-FIs; expires=Wed, 07-Sep-2022 04:16:57 GMT; path=/; domain=.google.com; HttpOnly
# alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

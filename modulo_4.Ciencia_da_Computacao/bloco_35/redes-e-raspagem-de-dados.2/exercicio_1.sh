### Verificando que a máquina responde ao comando ping

ping 127.0.0.1
# 64 bytes de 127.0.0.1: icmp_seq=1 ttl=64 tempo=0.056 ms
# 64 bytes de 127.0.0.1: icmp_seq=2 ttl=64 tempo=0.076 ms
# 64 bytes de 127.0.0.1: icmp_seq=3 ttl=64 tempo=0.076 ms
# 64 bytes de 127.0.0.1: icmp_seq=4 ttl=64 tempo=0.074 ms
# 64 bytes de 127.0.0.1: icmp_seq=5 ttl=64 tempo=0.078 ms
# ^C
# --- 127.0.0.1 estatísticas de ping ---
# 5 pacotes transmitidos, 5 recebidos, 0% perda de pacote, tempo 4104ms
# rtt min/avg/max/mdev = 0.056/0.072/0.078/0.008 ms


### Verificando que a lista de regras de firewall com iptables está vazia

iptables -L INPUT
# Chain INPUT (policy ACCEPT)
# target     prot opt source               destination 

### Adicionando a regra de firewall para bloquear entradas de ping pelo protocolo ICMP

iptables -A INPUT -p icmp -j REJECT

# outra opção com o parametro DROP e expecificando o icmp

iptables -A INPUT -p icmp --icmp-type echo-request -j DROP


### Verificando que a regra foi adicionada a tabela

iptables -L INPUT
# Chain INPUT (policy ACCEPT)
# target     prot opt source               destination         
# REJECT     icmp --  anywhere             anywhere             reject-with icmp-port-unreachable


### Verificando que o comando ping foi rejeitado

ping 127.0.0.1
# PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
# ^C
# --- 127.0.0.1 estatísticas de ping ---
# 42 pacotes transmitidos, 0 recebidos, 100% perda de pacote, tempo 41992ms

#### Verificando em tempo real os pings rejeitados com o parametro -O

ping 127.0.0.1 -O
# PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
# nenhuma resposta ainda para icmp_seq=1
# nenhuma resposta ainda para icmp_seq=2
# nenhuma resposta ainda para icmp_seq=3
# nenhuma resposta ainda para icmp_seq=4
# nenhuma resposta ainda para icmp_seq=5
# nenhuma resposta ainda para icmp_seq=6
# nenhuma resposta ainda para icmp_seq=7
# nenhuma resposta ainda para icmp_seq=8
# ^C
# --- 127.0.0.1 estatísticas de ping ---
# 9 pacotes transmitidos, 0 recebidos, 100% perda de pacote, tempo 8185ms

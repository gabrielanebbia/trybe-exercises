### Exclui regra de firewall

iptables -D INPUT -p icmp -j REJECT


### Verifica lista de regras INPUT

iptables -L INPUT
# Chain INPUT (policy ACCEPT)
# target     prot opt source               destination


### Verifica que a máquina volta a responder ao comando ping

ping 127.0.0.1 -O
# PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
# 64 bytes de 127.0.0.1: icmp_seq=1 ttl=64 tempo=0.073 ms
# 64 bytes de 127.0.0.1: icmp_seq=2 ttl=64 tempo=0.071 ms
# 64 bytes de 127.0.0.1: icmp_seq=3 ttl=64 tempo=0.070 ms
# 64 bytes de 127.0.0.1: icmp_seq=4 ttl=64 tempo=0.071 ms
# 64 bytes de 127.0.0.1: icmp_seq=5 ttl=64 tempo=0.070 ms
# 64 bytes de 127.0.0.1: icmp_seq=6 ttl=64 tempo=0.070 ms
# ^C
# --- 127.0.0.1 estatísticas de ping ---
# 6 pacotes transmitidos, 6 recebidos, 0% perda de pacote, tempo 5126ms
# rtt min/avg/max/mdev = 0.070/0.070/0.073/0.001 ms

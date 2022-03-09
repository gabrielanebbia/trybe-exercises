from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        for line in self.rfile:
            # responde ao cliente criando o eco
            self.wfile.write(line)
            # imprime no console todo dado recebido
            print("{} client wrote:".format(self.client_address[0]))
            print(line.strip().decode('utf-8'))


with UDPServer(("localhost", 8084), UDPHandler) as server:
    print("Server UDP ativo")
    server.serve_forever()

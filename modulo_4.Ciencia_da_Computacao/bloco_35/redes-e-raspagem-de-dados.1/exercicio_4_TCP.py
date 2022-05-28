from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        message = "Olá, client"
        self.wfile.write(bytes(message + "\n", "utf-8"))

        for line in self.rfile:
            # responde ao cliente criando o eco
            self.wfile.write(line)
            # imprime no console todo dado recebido
            print("{} client wrote:".format(self.client_address[0]))
            print(line.strip().decode('utf-8'))


with TCPServer(("localhost", 8085), TCPHandler) as server:
    print("Server TCP ativo")
    server.serve_forever()

from http.server import BaseHTTPRequestHandler, HTTPServer


class HTTPHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        message = "Hi, client! This is a GET method response\n"

        self.wfile.write(bytes(message, "utf8"))

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        message = "Hi, client! This is a POST method response\n"

        self.wfile.write(bytes(message, "utf8"))


with HTTPServer(("localhost", 8000), HTTPHandler) as server:
    print("Server HTTP ativo")
    server.serve_forever()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/ping', function(req, res) {
  res.json({ message: 'pong' })
  ;});

  // http GET :3001/ping
// Resposta:
/* HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 18
Content-Type: application/json; charset=utf-8
Date: Thu, 14 Oct 2021 19:42:26 GMT
ETag: W/"12-6FyCUNJCdUkgXM8yXmM99u6fQw0"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "message": "pong"
} */

app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

// http POST :3001/hello
// Resposta:
/* HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 31
Content-Type: application/json; charset=utf-8
Date: Thu, 14 Oct 2021 19:43:49 GMT
ETag: W/"1f-Zb+bacwmRCi2jdF4VxvKh1+4b7o"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "message": "Hello, undefined!"
} */

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  const ageUser = parseInt(age, 10);

  if (ageUser > 17) {
    return res.status(200).json({ "message": `Hello, ${name}!` });
  }

  res.status(401).json({ "message": "Unauthorized" });
});

// http POST :3001/greetings
// Resposta:
/* HTTP/1.1 401 Unauthorized
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 26
Content-Type: application/json; charset=utf-8
Date: Thu, 14 Oct 2021 19:44:34 GMT
ETag: W/"1a-pljHtlo127JYJR4E/RYOPb6ucbw"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "message": "Unauthorized"
} */

app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// http PUT :3001/users/:name/:age
// Resposta: 
/* HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 71
Content-Type: application/json; charset=utf-8
Date: Thu, 14 Oct 2021 19:47:21 GMT
ETag: W/"47-hJJrPhwhpSTU93CQ/LTWcS2uzRo"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "message": "Seu nome é undefined e você tem undefined anos de idade"
} */

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

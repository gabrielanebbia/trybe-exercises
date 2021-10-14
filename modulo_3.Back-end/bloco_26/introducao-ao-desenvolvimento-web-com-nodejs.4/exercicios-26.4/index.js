const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/ping', function(req, res) {
  res.json({ message: 'pong' })
;});

app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  const ageUser = parseInt(age, 10);

  if (ageUser > 17) {
    return res.status(200).json({ "message": `Hello, ${name}!` });
  }
  res.status(401).json({ "message": "Unauthorized" });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

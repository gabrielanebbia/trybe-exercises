const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const simpsonsUtils = require('./fs-utils-simpsons');

app.get('/simpsons', function (req, res) {
  const simpsons = simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

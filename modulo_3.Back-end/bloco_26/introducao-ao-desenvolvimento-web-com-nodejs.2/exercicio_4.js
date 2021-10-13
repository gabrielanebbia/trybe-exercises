const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((result) => {
    result.forEach((simpsons) => console.log(simpsons));
  })
  .catch((err) => {
    console.error(err.message);
  });

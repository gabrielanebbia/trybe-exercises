// 4.1
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

// 4.2
function findById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      })
      .then((simpsons) => {
        const result = simpsons.find((item) => item.id === id);
        if(!result) {
          reject('id não encontrado');
        }    
        resolve(result);
      })
  });
}

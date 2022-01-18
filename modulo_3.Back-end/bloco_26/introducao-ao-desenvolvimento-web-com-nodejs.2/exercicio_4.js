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
        const result = simpsons.find(item => Number(item.id) === id);
        if (!result) {
          reject('id não encontrado');
        }
        resolve(console.log(result));
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
findById(0);
findById(1);

// 4.3
function deleteSimpsons() {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      })
      .then((simpsons) => {
        const result = simpsons.filter(item => item.id !== '10' && item.id !== '6');
        if (!result) {
          reject('id não encontrado');
        }
        resolve(fs.writeFile('./simpsons.json', JSON.stringify(result)));
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
deleteSimpsons();

// 4.4
function createSimpsonsFamily() {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      })
      .then((simpsons) => {
        const result = simpsons.filter(item => [1, 2, 3, 4].includes(item.id));
        if (!result) {
          reject('id não encontrado');
        }
        resolve(fs.writeFile('./simpsonsFamily.json', JSON.stringify(result)));
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
createSimpsonsFamily();

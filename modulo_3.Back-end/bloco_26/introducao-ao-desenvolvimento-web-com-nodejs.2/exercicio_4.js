// 4.1
const fs = require('fs').promises;

/* fs.readFile('./simpsons.json', 'utf8')
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
        const result = simpsons.filter(item => item.id < 5);
        if (!result) {
          reject('id não encontrado');
        }
        const newFile = fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
        resolve(newFile);
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
createSimpsonsFamily();

// 4.5
function addNewSimpsons() {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsonsFamily.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      })
      .then((simpsonsFamily) => {
        if (!simpsonsFamily) {
          reject('simpsons não encontrados');
        }
        simpsonsFamily.push(
          { 
            "id": "8",
            "name": "Nelson Muntz"
          }
        );
        const newFile = fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
        resolve(newFile);
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
addNewSimpsons(); */

// 4.6
function changeSimpsons() {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsonsFamily.json', 'utf8')
      .then((data) => {
        return JSON.parse(data);
      })
      .then((simpsonsFamily) => {
        const simpsonsWithoutNelson = simpsonsFamily.filter(item => item.name !== 'Nelson Muntz');
        if (!simpsonsWithoutNelson) {
          reject('name não encontrado');
        }
        simpsonsWithoutNelson.concat(
          [
            {
              id: '8',
              name: 'Maggie Simpson'
            }
          ]
        )
        const newFamily = fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithoutNelson));
        resolve(newFamily);
      })
      .catch((err) => {
        console.error(err.message);
      })
  });
}
changeSimpsons();

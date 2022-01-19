const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

function createFiles() {
  const arrayOfPromises = array.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string);
  });

  Promise.all(arrayOfPromises);
}
createFiles();

const filesNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
];

function readAndConcatFiles() {
  const arrayOfPromises = filesNames.map((fileName) => fs.readFile(fileName, 'utf-8'));

  Promise.all(arrayOfPromises)

    .then((filesData) => {
      const newFile = filesData.join(' ');

      const fileAll = fs.writeFile('./fileAll.txt', newFile);

      if(!fileAll) {
        reject('arquivo não criado');
      }

      resolve(fileAll)
    })
    .catch((err) => {
      console.error(err.message);
    })
}
readAndConcatFiles();

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(lesson, shift, value) {
  lesson[shift] = value;
}
addShift(lesson2, 'turno', 'noite');
console.log(lesson2);

function listKeys(obj) {
 console.log(Object.keys(obj))
}
listKeys(lesson2);

const objectLength = (obj) => {
  console.log(Object.keys(obj).length);
}
objectLength(lesson1);

const listValues = (obj) => {
  console.log(Object.values(obj));
}
listValues(lesson3);

const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(allLessons);

const numberOfStudents = (obj) => {
  const array = Object.keys(obj);

  let total = 0;
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }

  return total;
};
console.log(numberOfStudents(allLessons));

const getValueByNumber = (obj, position) => {
 return Object.values(obj)[position];
}
console.log(getValueByNumber(lesson1, 0));

function verifyPair(obj, key, value) {
  const array = Object.entries(obj);

  let result = false;
  for (let index in array) {
    if(array[index][0] === key && array[index][1] === value) {
      result = true;
    }
  }
  return result;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

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

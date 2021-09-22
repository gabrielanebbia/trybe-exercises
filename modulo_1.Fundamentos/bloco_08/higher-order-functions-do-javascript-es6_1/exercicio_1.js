// Exercício 1: 

const employeeData = (fullName) => {
  const employee = {
    Nome: `${fullName}`,
    email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`
  };
  return employee;
};

const newEmployees = (employeeData) => {
  const employees = {
    id1: employeeData('Pedro Guerra'), 
    id2: employeeData('Luiza Drumond'),
    id3: employeeData('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeData));

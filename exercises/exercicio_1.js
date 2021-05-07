/* const newEmployees = () => {
  const employees = {
    id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
}; */

const pessoaContratada = (nomeCompleto) => {
  const pessoa = {
    nomeCompleto: `${nomeCompleto}`,
    email: `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`
  };
  return pessoa;
};

const newEmployees = (pessoaContratada) => {
  const employees = {
    id1: pessoaContratada('Pedro Guerra'), 
    id2: pessoaContratada('Luiza Drumond'),
    id3: pessoaContratada('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(pessoaContratada));

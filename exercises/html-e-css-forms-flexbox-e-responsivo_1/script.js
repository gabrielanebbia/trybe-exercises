// Cria através de uma estrutura de repetição os <option>
let estados = ['Selecione','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

let secaoEstado = document.querySelector('#userEstado');

for (let index = 0; index < estados.length; index += 1) {
  let novoEstado = document.createElement('option');
  novoEstado.innerText = estados[index];
  secaoEstado.appendChild(novoEstado);
}

//Cria alertas de erro para datas inválidas
function testDataInicial() {
let dataInput = document.getElementById('userDataInicio').value;

  for (let index = 0; index < dataInput.length; index += 1) {
    if (dataInput[index] === '-') {
    alert('Data inválida');
    }
    if ((dataInput[0] + dataInput[1]) > 31) {
      alert('Data inválida');
    }
    if ((dataInput[2] + dataInput[3]) > 12) {
      alert('Mês inválido');
    }
  }
}

testDataInicial();

dataInput.addEventListener('keyup', testDataInicial);

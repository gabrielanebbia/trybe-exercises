// Cria através de uma estrutura de repetição os <option>
  let states = ['Selecione','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  let selectState = document.querySelector('#userState');
  
  for (let index = 0; index < states.length; index += 1) {
    let newState = document.createElement('option');
    newState.innerText = states[index];
    newState.value = states[index];
    selectState.appendChild(newState);
  }

//Cria alertas de erro para datas inválidas
function testInitialDate() {
let dateInput = document.getElementById('userInitialDate').value;

  for (let index = 0; index < dateInput.length; index += 1) {
    if (dateInput[index] === '-') {
    alert('Data inválida');
    }
    if ((dateInput[0] + dateInput[1]) > 31) {
      alert('Data inválida');
    }
    if ((dateInput[2] + dateInput[3]) > 12) {
      alert('Mês inválido');
    }
  }
}

testInitialDate();

dateInput.addEventListener('keyup', testInitialDate);

// Botão para criar uma div com o conteúdo inserido no formulário
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener e https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault

let forms = document.getElementById('forms');
let buttonCreateResume = document.getElementById('buttonCreateResume');

forms.addEventListener('submit', function (event) {
  event.preventDefault();
  let valid = false;

  if (valid = true) {
    buttonCreateResume.addEventListener('click', createResume())
  }
});

function createResume() {
  let resume = document.querySelector('#resume');
  let section1 = document.createElement('div');
  resume.appendChild(section1);
}

buttonCreateResume.addEventListener('click', createResume);

function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')

  for (let index = 0; index < formElements.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

let clearButton = document.querySelector('#buttonClearResume');
clearButton.addEventListener('click', clearFields);

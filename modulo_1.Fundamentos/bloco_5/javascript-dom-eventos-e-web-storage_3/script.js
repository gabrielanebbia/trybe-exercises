function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfTheMonth() {
    let getDaysUl = document.getElementById('days');

    for(let index = 0; index < dezDaysList.length; index += 1) {
      const dayLi = document.createElement('li');
      const day = dezDaysList[index];

      if(day === 24 || day === 31) {
        dayLi.classList.add('day', 'holiday');
        dayLi.innerText = day;
        getDaysUl.appendChild(dayLi);
      } else if (day === 4 || day === 11 || day === 18) {
        dayLi.classList.add('day', 'friday');
        dayLi.innerText = day;
        getDaysUl.appendChild(dayLi);
      } else if (day === 25) {
        dayLi.classList.add('day', 'holiday', 'friday');
        dayLi.innerText = day;
        getDaysUl.appendChild(dayLi);
      } else {
        dayLi.className = 'day';
        dayLi.innerText = day;
        getDaysUl.appendChild(dayLi);
      }
    };
  }
  createDaysOfTheMonth();
  
  function createHolidaysButtons(nameHoliday) {
    let holidayButton = document.createElement('button');

    holidayButton.innerHTML = 'Feriados';
    holidayButton.id = 'btn-holiday';

    let getButtonsContainer = document.querySelector('.buttons-container');
    getButtonsContainer.appendChild(holidayButton);
  }
  createHolidaysButtons('Feriados');

  function displayHolydays() {
    let getHolidayButton = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');

    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === 'rgb(238,238,238)') {
          getHolidays[index].style.backgroundColor = 'orange';
        } else {
          getHolidays[index].style.backgroundColor = 'orange';
        }
      };
    });
  }
  displayHolydays();

  function friday(buttonName) {
    let getButtonsContainer = document.querySelector('.buttons-container');
    let fridayButton = document.createElement('button');

    fridayButton.innerText = buttonName;
    fridayButton.id = 'btn-friday';
    getButtonsContainer.appendChild(fridayButton);
  }
  friday('Sexta-feira');

  function displayFridays() {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let fridayList = [4, 11, 18, 25];

    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < fridays.length; index += 1) {
        if(fridays[index].innerText !== 'Sexta-feira') {
          fridays[index].innerText = 'Sexta-feira';
        } else {
          fridays[index].innerText = fridayList[index];
        }
      };
    });
  }
  displayFridays();

  function dayZoomIn() {
    let getDays = document.getElementById('days');
    getDays.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '50px';
      event.target.style.fontWeight = '700';
    })
  }
  dayZoomIn();

  function dayZoomOut() {
    let getDays = document.getElementById('days');
    getDays.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '250';
    })
  }
  dayZoomOut();

  function addNewTask(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let createTask = document.createElement('span');

    createTask.innerText = task;
    tasksContainer.appendChild(createTask);
  }
  addNewTask('Cozinhar');
  
  function addNewTaskDiv(color) {
    let tasksContainer = document.querySelector('.my-tasks');
    let createTaskDiv = document.createElement('div');

    createTaskDiv.className = 'task';
    createTaskDiv.style.backgroundColor = color;

    tasksContainer.appendChild(createTaskDiv);
  }
  addNewTaskDiv('yellow');

  function classSelectedTask() {
    let tasks = document.querySelector('.task');
    
    tasks.addEventListener('click', function(event) {
      if (event.target.className === 'task selected') {
        event.target.classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    })
  }
  classSelectedTask();

  function dayColor() {
    let getDays = document.querySelector('#days');
    let selectedTask = document.getElementsByClassName('selected');
    let taskDiv = document.querySelector('.task');
    
    getDays.addEventListener('click', function(event){
      if (event.target.style.color !== taskDiv.style.backgroundColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (event.target.color === taskDiv.style.backgroundColor) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  dayColor();

  function newAppointment() {
    let getInput = document.querySelector('#task-input');
    let getAddButton = document.querySelector('#btn-add');
    let getList = document.querySelector('.task-list');

    getInput.addEventListener('keyup', function(event) {
      let keyName = event.key;
      if (getInput.value.length > 0 && keyName === 'Enter') {
        let li = document.createElement('li');
        li.innerText = getInput.value;
  
        getList.appendChild(li);
        getInput.value = '';
      }
    });

    
    getAddButton.addEventListener('click', function() {
      if (getInput.value.length > 0) {
        let li = document.createElement('li');
        li.innerText = getInput.value;
        
        getList.appendChild(li);
        getInput.value = '';
      } else {
        alert('Error: Campo obrigatório');
      }
    })
  };
  
  newAppointment();

// Referência: https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

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
        getHolidays[index].style.backgroundColor = 'orange';
      };
    });
  }
  displayHolydays();
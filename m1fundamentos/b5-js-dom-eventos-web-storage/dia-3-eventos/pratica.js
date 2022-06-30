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

// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
  // O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//   A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

  function createDaysOfDecember() {
    const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.getElementById('days');

    for (let i = 0; i < decemberDays.length; i += 1) {
      const numberDay = decemberDays[i];
      const daysList = document.createElement('li');
      
      daysList.innerHTML = numberDay;
      daysList.className = 'day';
      if (numberDay === 24 || numberDay === 25 || numberDay === 31) {
        daysList.classList.add('holiday');
      };
      if (numberDay === 4 ||numberDay === 11 ||numberDay === 18 ||numberDay === 25) {
        daysList.classList.add('friday');
      }

      monthDays.appendChild(daysList);
    }
  }
  createDaysOfDecember();

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createHolidayButton(buttonName) {
  const holidayButton = document.createElement('button');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerHTML = buttonName;

  const divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
  divButtonsContainer.appendChild(holidayButton);
}
createHolidayButton('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function changeHolidaysColor() {
  const holidays = document.querySelectorAll('.holiday');

  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor !== "pink") {
      holidays[i].style.backgroundColor = "pink";
    }
    else {
      holidays[i].style.backgroundColor = "rgb(238,238,238)";
    }
  }
}

let holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeHolidaysColor);

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

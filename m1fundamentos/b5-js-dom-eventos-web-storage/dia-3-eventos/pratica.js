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
    } else {
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

function createFridayButton(buttonName) {
  const FridayButton = document.createElement('button');
  FridayButton.id = 'btn-friday';
  FridayButton.innerHTML = buttonName;

  const divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
  divButtonsContainer.appendChild(FridayButton);
}
createFridayButton('Sexta-feira');

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function changeFridaysText(arrayFridays) {
  const fridays = document.querySelectorAll('.friday');
  let FridayButton = document.getElementById('btn-friday');

  FridayButton.addEventListener('click', function () {
    for (let i = 0; i < fridays.length; i += 1) {
  
      if (fridays[i].innerText !== "Sextou!") {
        fridays[i].innerText = "Sextou!";
      } else {
        fridays[i].innerText = arrayFridays[i];
      }
    }
  });
}

// let decemberFridays = document.getElementsByClassName('friday');

let decemberFridays = [4, 11, 18, 25];
changeFridaysText(decemberFridays);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function putZoom() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  }); 
};
putZoom();

function removeZoom() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '300';
  });
};
removeZoom(); 

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function customTask(nomeDaTarefa) {
  const span = document.createElement('span');
  span.innerText = nomeDaTarefa;
  const divMyTasks = document.getElementsByClassName('my-tasks')[0];
  divMyTasks.appendChild(span);
}
customTask('cozinhar');

// 🚀 Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// 
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function taskSubtitle(cor) {
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  const divMyTasks = document.getElementsByClassName('my-tasks')[0];
  divMyTasks.appendChild(div);
};

let cor = 'blue';
taskSubtitle(cor);

// 🚀 Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTask() {
  let task = document.querySelector('.task');

  task.addEventListener('click', function (event) {
    if (task.className === 'task') {
      event.target.className = 'selectedTask';
    } else {
      event.target.className = 'task';
    }
  });
};
selectTask();


// 🚀 Exercício 10:
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function dayColorTask() {
  let day = document.getElementsByClassName('.day');
  let dayColor = day.style.backgroundColor;
  let selectedTask = document.querySelector('selectedTask')[0];
  let selectedTaskColor = selectedTask.style.backgroundColor;

  day.addEventListener('click', function () {
    day.style.backgroundColor = 'green';
  });
}
dayColorTask();

// 🚀 Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.

function commitment() {
  let input = document.getElementById('task-input');
  let commitmentButton = document.getElementById('btn-add');
  commitmentButton.addEventListener('click', function () {
    let inputContainer = document.getElementsByClassName('input-container')[0];
    let item = document.createElement('li');
    item.innerText = input;
    inputContainer.appendChild(item);
  })
}
commitment();
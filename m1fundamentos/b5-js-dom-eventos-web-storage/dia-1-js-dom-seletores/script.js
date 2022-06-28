document.getElementById("container").style.backgroundColor = "grey";

let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "lime";

let tarefasUrgentes = document.querySelectorAll(".emergency-tasks h3");
for (i = 0; i < tarefasUrgentes.length; i += 1) {
  tarefasUrgentes[i].style.backgroundColor = "pink";
}

let divTarefasUrgentes = document.querySelectorAll(".emergency-tasks div");
for (i = 0; i < divTarefasUrgentes.length; i += 1) {
  divTarefasUrgentes[i].style.backgroundColor = "salmon";
}

let tarefasNaoUrgentes = document.querySelectorAll(".no-emergency-tasks h3");
for (i = 0; i < tarefasNaoUrgentes.length; i += 1) {
  tarefasNaoUrgentes[i].style.backgroundColor = "black";
}

let divTarefasNaoUrgentes = document.querySelectorAll(".no-emergency-tasks div");
for (i = 0; i < divTarefasNaoUrgentes.length; i += 1) {
  divTarefasNaoUrgentes[i].style.backgroundColor = "yellow";
}

let footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "green";
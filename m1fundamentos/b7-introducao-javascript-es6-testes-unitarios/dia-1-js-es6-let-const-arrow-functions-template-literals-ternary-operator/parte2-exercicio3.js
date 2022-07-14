// // 3 - 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const clickCounterButton = document.getElementById('clickCounter');
const clickAmount = document.createElement('p');
document.body.appendChild(clickAmount);
let clickCount = 0;

clickCounterButton.addEventListener('click', () => {
  clickCount += 1;
  clickAmount.innerText = clickCount;
});
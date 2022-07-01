function changeBackgroundColor() {
  let inputBackgroundColor = document.getElementById('corFundo');
  let newBackgroundColor = inputBackgroundColor.value;
  localStorage.setItem('backgroundColor', newBackgroundColor);
  // exemplo: 'pink'
  let body = document.getElementById('body');
  document.body.style.backgroundColor = newBackgroundColor;
};
let buttonBackgroundColor = document.getElementById('btnCorFundo');
buttonBackgroundColor.addEventListener('click', changeBackgroundColor);

function changeTextColor() {
  let inputTextColor = document.getElementById('corTexto');
  let newTextColor = inputTextColor.value;
  localStorage.setItem('textColor', newTextColor);
  // exemplo: 'red'
  let body = document.getElementById('body');
  document.body.style.color = newTextColor;
};
let buttonTextColor = document.getElementById('btnCorTexto');
buttonTextColor.addEventListener('click', changeTextColor);

function changeFontSize() {
  let inputFontSize = document.getElementById('tamanhoTexto');
  let newFontSize = inputFontSize.value;
  localStorage.setItem('fontSize', newFontSize);
  // exemplo: 30px
  let body = document.getElementById('body');
  document.body.style.fontSize = newFontSize;
};
let buttonFontSize = document.getElementById('btnTamanhoTexto');
buttonFontSize.addEventListener('click', changeFontSize);

function changeLineHeight() {
  let inputLineHeight = document.getElementById('espacamentoLinha');
  let newLineHeight = inputLineHeight.value;
  localStorage.setItem('lineHeight', newLineHeight);
  // exemplo: 3.5
  let body = document.getElementById('body');
  document.body.style.lineHeight = newLineHeight;
};
let buttonLineHeight = document.getElementById('btnEspacamentoLinha');
buttonLineHeight.addEventListener('click', changeLineHeight);

function changeFontFamily() {
  let inputFontFamily = document.getElementById('familiaFonte');
  let newFontFamily = inputFontFamily.value;
  localStorage.setItem('fontFamily', newFontFamily);
  // exemplo: arial
  // exemplo: "Times New Roman"
  let body = document.getElementById('body');
  document.body.style.fontFamily = newFontFamily;
};
let buttonFontFamily = document.getElementById('btnFamiliaFonte');
buttonFontFamily.addEventListener('click', changeFontFamily);

window.onload = function () {
  if (localStorage.getItem('backgroundColor') !== null) {
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
  };

  if (localStorage.getItem('textColor') !== null) {
    document.body.style.color = localStorage.getItem('textColor');
  };

  if (localStorage.getItem('fontSize') !== null) {
    document.body.style.fontSize = localStorage.getItem('fontSize');
  };

  if (localStorage.getItem('fontSize') !== null) {
    document.body.style.fontSize = localStorage.getItem('fontSize');
  };

  if (localStorage.getItem('fontFamily') !== null) {
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
  };

}
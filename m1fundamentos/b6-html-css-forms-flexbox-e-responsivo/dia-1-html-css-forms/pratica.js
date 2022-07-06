let submitButton = document.getElementById('submit-button');
let photos = document.getElementById('photos');
let validation = document.getElementsByClassName('validation');



submitButton.addEventListener('click', function (e) {
  // if (photos.checked === false) {
  //   e.preventDefault();
  //   alert('Concorde com o envio de fotos.');
  // } else {
  //   alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  // };

  for (let i = 0; i < validation.length; i += 1) {
    if (validation[i].value === '') {
      e.preventDefault();
      alert('Dados inválidos');
      break;
    };
  };
});
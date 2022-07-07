let submitButton = document.getElementById('submit-button');
let photos = document.getElementById('photos');
let validation = document.getElementsByClassName('validation');



// submitButton.addEventListener('click', function (e) {
//   for (let i = 0; i < validation.length; i += 1) {
//     if (validation[i].value === '') {
//       e.preventDefault();
//       alert('Dados inválidos');
//       break;
//     };
//   };
// });
// Essa validação não parece ser necessária, sendo possível nesse caso usar validação configurando o required no forms.
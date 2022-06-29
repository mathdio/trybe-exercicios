// 🚀 Você deverá fazer tudo a seguir usando somente JavaScript.
// 1 - Acesse o elemento elementoOndeVoceEsta.
  
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//  2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = ondeVoceEsta.parentNode;

pai.style.color = "red";

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let filhoDoFilho = ondeVoceEsta.firstElementChild;
filhoDoFilho.innerText = 'Texto teste';

// 4 - Acesse o primeiroFilho a partir de pai.

let primeiroFilho = pai.firstElementChild;

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let primeiroFilho2 = ondeVoceEsta.previousElementSibling;


// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let textNode = ondeVoceEsta.nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// 🚀 E a prática? Aqui!
// Crie um irmão para elementoOndeVoceEsta.

let paragraphOne = document.createElement('p');
paragraphOne.innerText = 'Primeiro parágrafo';

let papai = document.getElementById('pai');
papai.appendChild(paragraphOne);


// Crie um filho para elementoOndeVoceEsta.

let paragraphTwo = document.createElement('p');
paragraphTwo.innerText = 'Segundo parágrafo';

ondeVoceEsta.appendChild(paragraphTwo);

// Crie um filho para primeiroFilhoDoFilho.

let paragraphThree = document.createElement('p');
paragraphThree.innerText = 'Terceiroooooo';

filhoDoFilho.appendChild(paragraphThree);


// A partir desse filho criado, acesse terceiroFilho.

let terceiroParagrafo = paragraphThree.parentElement.parentElement.nextElementSibling;

console.log(terceiroParagrafo); 

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

for (i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  let filhoAtual = pai.childNodes[i];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
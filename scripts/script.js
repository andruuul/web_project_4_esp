import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

function initiateValidation () {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  const inputList = Array.from(document.querySelectorAll(".popup__input"));
  console.log(inputList)
  const validator = new FormValidator (formList, inputList);
  validator.enableValidation();
  }
  initiateValidation();

//Cards iniciales

const initialCards = [
  {  name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"  },
  {  name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"  },
  {  name:"Montañas Calvas",
    link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"  },
  {  name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"  },
  {  name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"  },
  {  name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"  }
];

const elementsGrid = document.querySelector("#elementsGrid");

initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardReady = card.generateCard();

  elementsGrid.prepend(cardReady);
})

//Crear cards nuevas al guardar los cambios hechos en el value de <input> como el nuevo textContent de <p> con el botón *guardar* y cerrar el popup

const newPlaceSaveBtn = document.getElementById('newPlaceSaveButton');

newPlaceSaveBtn.addEventListener('click', addNewPlace)
function addNewPlace () {
  let cardURL = document.querySelector("#inputNewPlaceURL");
  let cardTitle = document.querySelector("#inputNewPlaceTitle");
  
  const customCard = new Card (cardTitle.value, cardURL.value);
  const customCardReady = customCard.generateCard()

  elementsGrid.prepend(customCardReady);
  closePopupContainerNewPlace()
}



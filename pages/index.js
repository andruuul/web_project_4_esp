import Card from '../scripts/components/Card.js'
import {FormValidator} from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import { initialCards, elementsGridSection } from '../scripts/utils/constants.js';


//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

const cardsList = new Section ({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card (item.name, item.link);
    const cardReady = card.generateCard();

    cardsList.addItem(cardReady);
    },
  },
  elementsGridSection
);

  //rendering the cards
  cardsList.renderItems();

function initiateValidation () {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  const inputList = Array.from(document.querySelectorAll(".popup__input"));
  console.log(inputList)
  const validator = new FormValidator (formList, inputList);
  validator.enableValidation();
  }
  initiateValidation();

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



import Card from '../scripts/components/Card.js'
import {FormValidator} from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import { initialCards, elementsGridSection } from '../scripts/utils/constants.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

const cardsList = new Section ({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card (item.name, item.link);
    const cardReady = card.generateCard();
    cardReady.addEventListener("click", (evt) => {openImagePopup(evt)} ) //ESTO CAMBIARÁ POR LA CLASE POPUPWITHIMAGE
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
  const validator = new FormValidator (formList, inputList);
  validator.enableValidation();
  }
  initiateValidation();

//Crear cards nuevas al guardar los cambios hechos en el value de <input> como el nuevo textContent de <p> con el botón *guardar* y cerrar el popup

const newPlaceSaveBtn = document.getElementById('newPlaceSaveButton');

newPlaceSaveBtn.addEventListener('click', addNewPlace)
function addNewPlace () {
  console.log("ANP WORKS1")
  let cardURL = document.querySelector("#inputNewPlaceURL");
  let cardTitle = document.querySelector("#inputNewPlaceTitle");
  
  const customCard = new Card (cardTitle.value, cardURL.value);
  const customCardReady = customCard.generateCard()

  elementsGrid.prepend(customCardReady);
  customCardReady.addEventListener("click", (evt) => {openImagePopup(evt)}) //ESTO CAMBIARÁ POR LA CLASE POPUPWITHIMAGE

  document.querySelector("#popupContainerNewPlace").classList.add("popup_hidden")
  document.querySelector(".overlay").style.display = "none";
  console.log("ANP WORKS2")
}

//Precargar el textContent de los <p> como el value de <input>

const defaultUsername = document.getElementById('defaultUsername');
const defaultSubtitle = document.getElementById('defaultSubtitle');
const newUsername = document.getElementById('inputUsername');
const newSubtitle = document.getElementById('inputSubtitle');

newUsername.value = defaultUsername.textContent;
newSubtitle.value = defaultSubtitle.textContent;

const saveBtn = document.getElementById('saveButton');

saveBtn.addEventListener('click', saveInputChanges)
function saveInputChanges(){
  document.querySelector('#defaultUsername').textContent = document.querySelector('#inputUsername').value
  document.querySelector('#defaultSubtitle').textContent = document.querySelector('#inputSubtitle').value
}

//Popups

const profilePopup = new PopupWithForm ("#popupContainer")  //Aquí se agrega el USERINFO como callback?
profilePopup.setEventListeners("#editButton", "#popupCloseButton", "#saveButton")

const newPlacePopup = new PopupWithForm ("#popupContainerNewPlace")  //Aquí se agrega el USERINFO como callback?
newPlacePopup.setEventListeners(".profile-grid__add-button", "#newPlaceCloseButton")

// 

const imagePopup = new PopupWithImage ("#popupImageContainer")
imagePopup.setEventListeners("#popupImageCloseButton")




//POPUPWITHIMAGE


function openImagePopup(evt) {
  let cardCloseBtn = evt.target.nextElementSibling
  let cardDescription = cardCloseBtn.nextElementSibling
  let cardText = cardDescription.firstElementChild
  let imagePopupContainer = document.getElementById('popupImageContainer');
  let overlay = document.querySelector('.overlay');


  imagePopupContainer.style.display= 'flex';
  overlay.style.display = 'block';

  let popupImageImage = imagePopupContainer.querySelector('#popupImageImage');

  popupImageImage.src = evt.target.src;

  let popupImageText = imagePopupContainer.querySelector('#popupImageText');
  popupImageText.textContent = cardText.textContent;

  imagePopupContainer.classList.remove("popup_hidden")
  overlay.style.display = 'block';

  console.log("clickkkkas")
}
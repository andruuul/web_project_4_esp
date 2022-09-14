import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

let popupContainer = document.getElementById('popupContainer');
let overlayForms = document.getElementById('overlay-forms');
let editBtn = document.getElementById('editButton');
let closeBtn = document.getElementById('popupCloseButton');

editBtn.addEventListener('click', openPopupContainer);
function openPopupContainer() {
  popupContainer.classList.remove("popup_hidden")
  overlayForms.style.display = 'block'; 
}

closeBtn.addEventListener('click', closePopupContainer);
function closePopupContainer() {
  popupContainer.classList.add("popup_hidden")
  overlayForms.style.display = 'none';
  
}

//Cerrar el modal al hacer click fuera

overlayForms.addEventListener('click', closePopupContainer)


//Precargar el textContent de los <p> como el value de <input>

const defaultUsername = document.getElementById('defaultUsername');
const defaultSubtitle = document.getElementById('defaultSubtitle');
let newUsername = document.getElementById('inputUsername');
let newSubtitle = document.getElementById('inputSubtitle');

newUsername.value = defaultUsername.textContent;
newSubtitle.value = defaultSubtitle.textContent;

//Guardar los cambios hechos en el value de <input> como el nuevo textContent de <p> con el botón *guardar* y cerrar el popup

const saveBtn = document.getElementById('saveButton');

saveBtn.addEventListener('click', saveInputChanges)
function saveInputChanges () {
  defaultUsername.textContent = newUsername.value
  defaultSubtitle.textContent = newSubtitle.value
  closePopupContainer() 
}

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

//Abrir y cerrar formulario para añadir una tarjeta

let popupContainerNewPlace = document.getElementById('popupContainerNewPlace');
let addBtn = document.querySelector('.profile-grid__add-button');
let newPlaceCloseBtn = document.getElementById('newPlaceCloseButton');

addBtn.addEventListener('click', openPopupContainerNewPlace);
function openPopupContainerNewPlace() {
  popupContainerNewPlace.classList.remove("popup_hidden");
  overlayForms.style.display = 'block';
}
  
newPlaceCloseBtn.addEventListener('click', closePopupContainerNewPlace);
function closePopupContainerNewPlace() {
  popupContainerNewPlace.classList.add("popup_hidden");
  overlayForms.style.display = 'none';
}

//Cerrar el modal al hacer click fuera

overlayForms.addEventListener('click', closePopupContainerNewPlace)

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

//Ocultar el popup de la imagen al hacer click en el botón de cerrar
let imagePopupContainer = document.getElementById('popupImageContainer');
let imagePopupCloseButton = imagePopupContainer.querySelector('#popupImageCloseButton');
let overlayPictures = document.getElementById('overlay-pictures');
imagePopupCloseButton.addEventListener('click', closeImagePopup)
function closeImagePopup() {
  imagePopupContainer.classList.add("popup-image_hidden")
  overlayPictures.style.display = 'none';
}
//Ocultar el popup de la imagen al hacer click fuera
overlayPictures.addEventListener('click', closeImagePopup)

//Ocultar cualquier popup al hacer click en 'esc'
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImagePopup();
    closePopupContainer();
    closePopupContainerNewPlace();
  }
})






//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

let popupContainer = document.getElementById('popupContainer');
let overlay = document.getElementById('overlay');
let editBtn = document.getElementById('editButton');
let closeBtn = document.getElementById('popupCloseButton');

editBtn.addEventListener('click', openPopupContainer);
function openPopupContainer() {
  popupContainer.style.opacity = '1';
  popupContainer.style.height = '330px';
  popupContainer.style.width = '430px';
  popupContainer.style.transition = 'opacity .5s, height 0s, width 0s';
  popupContainer.style.overflow = 'visible'
  overlay.style.display = 'block';
}

closeBtn.addEventListener('click', closePopupContainer);
function closePopupContainer() {
  popupContainer.style.opacity = '0';
  popupContainer.style.height = '0';
  popupContainer.style.width = '0';
  popupContainer.style.transition = 'opacity 0s, height 0s, width 0s';
  popupContainer.style.overflow = 'hidden'
  overlay.style.display = 'none';
}

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
  closePopupContainer() //*Muchas gracias por todas tus observaciones!
}

//Cards iniciales

const initialCards = [
  {  name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"  },
  {  name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"  },{  name:"Montañas Calvas", link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},
  {  name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"  },
  {  name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"  },
  {  name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"  }
];

//Cargar las Cards iniciales

const elementsGrid = document.querySelector("#elementsGrid");
const cardsTemplate = document.querySelector("#cardTemplate").content;

for (var i=0;i<initialCards.length;i++) {
const cardsElement = cardsTemplate.querySelector(".elements-grid__card").cloneNode(true);
cardsElement.querySelector(".elements-grid__photo").src = initialCards[i].link;
cardsElement.querySelector(".elements-grid__place-name").textContent = initialCards[i].name;
elementsGrid.append(cardsElement)
}

//Abrir y cerrar formulario para añadir una tarjeta

let popupContainerNewPlace = document.getElementById('popupContainerNewPlace');
let addBtn = document.querySelector('.profile-grid__add-button');
let newPlaceCloseBtn = document.getElementById('newPlaceCloseButton');


addBtn.addEventListener('click', openPopupContainerNewPlace);
function openPopupContainerNewPlace() {
    popupContainerNewPlace.style.opacity = '1';
    popupContainerNewPlace.style.height = '330px';
    popupContainerNewPlace.style.width = '430px';
    popupContainerNewPlace.style.transition = 'opacity .5s, height 0s, width 0s';
    popupContainerNewPlace.style.overflow = 'visible'
    overlay.style.display = 'block';
  }
  
newPlaceCloseBtn.addEventListener('click', closePopupContainerNewPlace);
function closePopupContainerNewPlace() {
    popupContainerNewPlace.style.opacity = '0';
    popupContainerNewPlace.style.height = '0';
    popupContainerNewPlace.style.width = '0';
    popupContainerNewPlace.style.transition = 'opacity 0s, height 0s, width 0s';
    popupContainerNewPlace.style.overflow = 'hidden'
    overlay.style.display = 'none';
  }


//Guardar los cambios hechos en el value de <input> como el nuevo textContent de <p> con el botón *guardar* y cerrar el popup

const newPlaceSaveBtn = document.getElementById('newPlaceSaveButton');

newPlaceSaveBtn.addEventListener('click', addNewPlace)
function addNewPlace () {
  const cardsElement = cardsTemplate.querySelector('.elements-grid__card').cloneNode(true);
  let cardURL = document.querySelector("#inputNewPlaceURL");
  let cardTitle = document.querySelector("#inputNewPlaceTitle");
  cardsElement.querySelector(".elements-grid__photo").src = cardURL.value;
  cardsElement.querySelector(".elements-grid__place-name").textContent = cardTitle.value;
  elementsGrid.append(cardsElement)
  closePopupContainerNewPlace()
}

//*****Para la próxima, leer sobre: "submit", preventDefault, etc.//

//Activar y desactivar el boton "like" al hacer click  
//*** NO SIRVE PARA LOS BOTONES DE LAS TARJETAS NUEVAS (LAS CREADAS CON EL BOTÓN ADD) ????????????
const likeBtn = document.getElementsByClassName('elements-grid__like-button');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function() {
    likeBtn[i].classList.toggle("elements-grid__like-button_active");
  });
}


//Eliminar (ocultar) un card con el botón delete 
//*** NO SIRVE PARA LOS BOTONES DE LAS TARJETAS NUEVAS (LAS CREADAS CON EL BOTÓN ADD) ?????????????

let deleteBtn = elementsGrid.getElementsByClassName('elements-grid__delete-button');

window.onload=function(){
  
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteCard)
    function deleteCard() {deleteBtn[i].parentElement.style.display = "none";
    };
  }


}//onload


//Mostrar la imagen en un popup 
//(cambiar el src del img en el div de image-popup y el texto)

let cardImage = elementsGrid.getElementsByClassName('elements-grid__photo');
let imagePopupContainer = document.getElementById('popupImageContainer');
let cardText = elementsGrid.getElementsByClassName('elements-grid__place-name');

for (let i = 0; i < cardImage.length; i++) {
cardImage[i].addEventListener("click", () => {
  imagePopupContainer.style.display= 'flex';
  overlay.style.display = 'block';

  let popupImageImage = imagePopupContainer.querySelector('#popupImageImage');

  let cardSource = cardImage[i].src;
  popupImageImage.src = cardSource;

  let popupImageText = imagePopupContainer.querySelector('#popupImageText');
  popupImageText.textContent = cardText[i].textContent;

  imagePopupContainer.style.opacity = '1';
  imagePopupContainer.style.height = 'auto';
  imagePopupContainer.style.width = 'auto';
  imagePopupContainer.style.transition = 'opacity .7s, height 0s, width 0s';
  imagePopupContainer.style.overflow = 'visible';
  overlay.style.display = 'block';
}

)
}

//Ocultar el popup de la imagen al hacer click en el botón de cerrar
let imagePopupCloseButton = imagePopupContainer.querySelector('#popupImageCloseButton');
imagePopupCloseButton.addEventListener('click', closeImagePopup)
function closeImagePopup() {
  imagePopupContainer.style.opacity = '0';
  imagePopupContainer.style.height = '0';
  imagePopupContainer.style.width = '0';
  imagePopupContainer.style.transition = 'opacity 0s, height 0s, width 0s';
  imagePopupContainer.style.overflow = 'hidden'
  overlay.style.display = 'none';
  console.log(cardsTemplate)

}















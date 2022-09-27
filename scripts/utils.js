let popupContainer = document.getElementById('popupContainer');
let overlay = document.querySelector('.overlay');
let editBtn = document.getElementById('editButton');
let closeBtn = document.getElementById('popupCloseButton');

editBtn.addEventListener('click', openPopupContainer);
function openPopupContainer() {
  popupContainer.classList.remove("popup_hidden")
  overlay.style.display = 'block'; 
}

closeBtn.addEventListener('click', closePopupContainer);
function closePopupContainer() {
  popupContainer.classList.add("popup_hidden")
  overlay.style.display = 'none';
}

//Cerrar el modal al hacer click fuera

overlay.addEventListener('click', closePopupContainer)

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
//Abrir y cerrar formulario para añadir una tarjeta

let popupContainerNewPlace = document.getElementById('popupContainerNewPlace');
let addBtn = document.querySelector('.profile-grid__add-button');
let newPlaceCloseBtn = document.getElementById('newPlaceCloseButton');

addBtn.addEventListener('click', openPopupContainerNewPlace);
function openPopupContainerNewPlace() {
  popupContainerNewPlace.classList.remove("popup_hidden");
  overlay.style.display = 'block';
}
  
newPlaceCloseBtn.addEventListener('click', closePopupContainerNewPlace);
function closePopupContainerNewPlace() {
  popupContainerNewPlace.classList.add("popup_hidden");
  overlay.style.display = 'none';
}

//Cerrar el modal al hacer click fuera

overlay.addEventListener('click', closePopupContainerNewPlace)

//Ocultar el popup de la imagen al hacer click en el botón de cerrar
let imagePopupContainer = document.getElementById('popupImageContainer');
let imagePopupCloseButton = imagePopupContainer.querySelector('#popupImageCloseButton');
imagePopupCloseButton.addEventListener('click', closeImagePopup)
function closeImagePopup() {
  imagePopupContainer.classList.add("popup_hidden")
  overlay.style.display = 'none';
}
//Ocultar el popup de la imagen al hacer click fuera
overlay.addEventListener('click', closeImagePopup)

//Ocultar cualquier popup al hacer click en 'esc'
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImagePopup();
    closePopupContainer();
    closePopupContainerNewPlace();
  }
})
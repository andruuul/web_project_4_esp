//Abrir y cerrar el modal con el botón *editar* y *cerrar*, correspondientemente

let popupContainer = document.getElementById('popupContainer');
let overlay = document.getElementById('overlay');
let editBtn = document.getElementById('editButton');
let closeBtn = document.getElementById('popupCloseButton');

editBtn.addEventListener('click', openPopupContainer);
function openPopupContainer() {
  popupContainer.style.display = 'flex';
  overlay.style.display = 'block';
}

closeBtn.addEventListener('click', closePopupContainer);
function closePopupContainer() {
  popupContainer.style.display = 'none';
  overlay.style.display = 'none';
}

//Precargar el textContent de los <p> como el value de <input>

const defaultUsername = document.getElementById('defaultUsername');
const defaultSubtitle = document.getElementById('defaultSubtitle');
var newUsername = document.getElementById('inputUsername');
var newSubtitle = document.getElementById('inputSubtitle');

newUsername.value = defaultUsername.textContent;
newSubtitle.value = defaultSubtitle.textContent;

//Guardar los cambios hechos en el value de <input> como el nuevo textContent de <p> con el botón *guardar*

const saveBtn = document.getElementById('saveButton');

saveBtn.addEventListener('click', saveInputChanges)
function saveInputChanges () {
  defaultUsername.textContent = newUsername.value
  defaultSubtitle.textContent = newSubtitle.value
  closePopupContainer() //*Muchas gracias por todas tus observaciones!
}

//*****Para la próxima, leer sobre: "submit", preventDefault, etc.//


//likeBtn (todavía no)

var likeBtns = document.getElementsByClassName('elements-grid__like-button')

for (const likeBtn of likeBtns) {
  likeBtn.addEventListener('click', activateLikeBtn) 
  function activateLikeBtn() {
    likeBtn.setAttribute('style', 'background: url("/images/like-button-active.svg"); background-repeat: no-repeat;');
  };
}

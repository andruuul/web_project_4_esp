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

var likeBtns = document.getElementsByClassName('elements-grid__like-button')

for (const likeBtn of likeBtns) {
  likeBtn.addEventListener('click', activateLikeBtn) 
  function activateLikeBtn() {
    likeBtn.setAttribute('style', 'background: url("images/like-button-active.svg"); background-repeat: no-repeat;');
  };
}
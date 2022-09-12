   export class Card {
    constructor(placeName, photo) {
      this._placeName = placeName;
      this._photo = photo;
    }
  
    _getTemplate() {
      const cardsElement = document.querySelector("#cardTemplate").content.querySelector(".elements-grid__card").cloneNode(true);
  
      return cardsElement;
    }
  
    _likeCard() {
      this._element.querySelector(".elements-grid__like-button").classList.toggle("elements-grid__like-button_active");
    }
  
    _removeCard() {
      this._element.querySelector(".elements-grid__delete-button").parentElement.remove();
    }
  
    _openImagePopup() {
      let cardCloseBtn = this._element.querySelector(".elements-grid__photo").nextElementSibling
      let cardDescription = cardCloseBtn.nextElementSibling
      let cardText = cardDescription.firstElementChild
      let imagePopupContainer = document.getElementById('popupImageContainer');
      let overlayPictures = document.getElementById('overlay-pictures');

  
      imagePopupContainer.style.display= 'flex';
      overlayPictures.style.display = 'block';
    
      let popupImageImage = imagePopupContainer.querySelector('#popupImageImage');
    
      popupImageImage.src = this._element.querySelector(".elements-grid__photo").src;
    
      let popupImageText = imagePopupContainer.querySelector('#popupImageText');
      popupImageText.textContent = cardText.textContent;
    
      imagePopupContainer.classList.remove("popup-image_hidden")
      overlayPictures.style.display = 'block';

      console.log("clickkkkas")
    }
  
    _setEventListeners() {
      this._element.querySelector(".elements-grid__like-button").addEventListener("click", () => {this._likeCard()})
      this._element.querySelector(".elements-grid__delete-button").addEventListener("click", () => {this._removeCard()})
      this._element.querySelector(".elements-grid__photo").addEventListener("click", () => {this._openImagePopup()})
    }
  
    generateCard() {
      this._element = this._getTemplate();
  
      this._element.querySelector(".elements-grid__photo").src = this._photo;
      this._element.querySelector(".elements-grid__place-name").textContent = this._placeName;
      this._setEventListeners();
  
      return this._element;
    }
  }
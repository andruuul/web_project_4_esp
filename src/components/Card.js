export default class Card {
  constructor({placeName, photo, likes, cardId, ownerId, cardTemplateSelector, callbackImage, deleteCallback}) {
    this._placeName = placeName;
    this._photoSource = photo;
    this._likes = likes;
    this._callbackImage = callbackImage;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._deleteCallback = deleteCallback;
  }

  _getTemplate() {
    const cardsElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".elements-grid__card").cloneNode(true);

    return cardsElement;
  }

  _likeCard() {
    this._likeBtn.classList.toggle("elements-grid__like-button_active");
    console.log(this._likes)
    //this._likes.length
  }

  _removeCard() {
    this._deleteCallback()
    this._element.remove();
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector(".elements-grid__like-button")
    this._deleteBtn = this._element.querySelector(".elements-grid__delete-button")
    this._photo = this._element.querySelector(".elements-grid__photo")

    this._likeBtn.addEventListener("click", () => {this._likeCard()})
    this._deleteBtn.addEventListener("click", () => {this._removeCard()})
    this._photo.addEventListener('click', (evt) => {this._callbackImage(evt);})
  }

  generateCard(loggedUserId) {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements-grid__photo")
    this._cardLikes = this._element.querySelector(".elements-grid__likes")
    
    if(this._ownerId !== loggedUserId) {
      this._element.querySelector(".elements-grid__delete-button").classList.add("elements-grid__delete-button_hidden")
    }


    this._cardImage.src = this._photoSource;
    this._cardImage.alt = this._placeName;
    this._element.querySelector(".elements-grid__place-name").textContent = this._placeName;
    this._cardLikes.textContent = this._likes.length
    this._setEventListeners();

    return this._element;
  }
}
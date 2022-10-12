export default class Card {
  constructor({placeName, photo, cardTemplateSelector, callbackImage}) {
    this._placeName = placeName;
    this._photoSource = photo;
    this._callbackImage = callbackImage;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    const cardsElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".elements-grid__card").cloneNode(true);

    return cardsElement;
  }

  _likeCard() {
    this._likeBtn.classList.toggle("elements-grid__like-button_active");
  }

  _removeCard() {
    this._deleteBtn.closest(".elements-grid__card").remove();
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector(".elements-grid__like-button")
    this._deleteBtn = this._element.querySelector(".elements-grid__delete-button")
    this._photo = this._element.querySelector(".elements-grid__photo")

    this._likeBtn.addEventListener("click", () => {this._likeCard()})
    this._deleteBtn.addEventListener("click", () => {this._removeCard()})
    this._photo.addEventListener('click', (evt) => {this._callbackImage(evt);})
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements-grid__photo").src = this._photoSource;
    this._element.querySelector(".elements-grid__place-name").textContent = this._placeName;
    this._setEventListeners();

    return this._element;
  }
}
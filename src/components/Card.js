export default class Card {
  constructor({placeName, photo, callbackImage}) {
    this._placeName = placeName;
    this._photo = photo;
    this._callbackImage = callbackImage;
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

  _setEventListeners() {
    this._element.querySelector(".elements-grid__like-button").addEventListener("click", () => {this._likeCard()})
    this._element.querySelector(".elements-grid__delete-button").addEventListener("click", () => {this._removeCard()})
    this._element.querySelector(".elements-grid__photo").addEventListener('click', (evt) => {this._callbackImage(evt);})
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements-grid__photo").src = this._photo;
    this._element.querySelector(".elements-grid__place-name").textContent = this._placeName;
    this._setEventListeners();

    return this._element;
  }
}
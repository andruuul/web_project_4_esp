export default class Card {
  constructor({placeName, photo, likes, cardId, ownerId, cardTemplateSelector, callbackImage, confirmCallback, likeCallback, removeLikeCallback }) {
    this._placeName = placeName;
    this._photoSource = photo;
    this._likes = likes;
    this._callbackImage = callbackImage;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._confirmCallback = confirmCallback;
    this._likeBtnActive = "elements-grid__like-button_active";
    this._likeCallback = likeCallback;
    this._removeLikeCallback = removeLikeCallback;
  }

  _getTemplate() {
    const cardsElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".elements-grid__card").cloneNode(true);

    return cardsElement;
  }
  
  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    //this._loadLikeButtonState();

    this._likeBtn = this._element.querySelector(".elements-grid__like-button")
    this._deleteBtn = this._element.querySelector(".elements-grid__delete-button")
    this._photo = this._element.querySelector(".elements-grid__photo")

    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains(this._likeBtnActive)) {
        this._removeLikeCallback()
      } else {
        this._likeCallback()
      }
    });
    this._deleteBtn.addEventListener("click", () => {this._confirmCallback()})
    this._photo.addEventListener('click', (evt) => {this._callbackImage(evt);})
  }

  toggleCardLike(likedByMe) {
    if (likedByMe) {
      this._likeBtn.classList.add(this._likeBtnActive);
    } else {
      this._likeBtn.classList.remove(this._likeBtnActive);
    }
  }

  updateLikes(newLikesLength) {
    this._cardLikes.textContent = newLikesLength
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
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(evt) { 
    super.open()
    let cardCloseBtn = evt.target.nextElementSibling
    let cardDescription = cardCloseBtn.nextElementSibling
    let cardText = cardDescription.firstElementChild
    this._popup.querySelector('#popupImageImage').src = evt.target.src;
    this._popup.querySelector('#popupImageText').textContent = cardText.textContent;
  }
}

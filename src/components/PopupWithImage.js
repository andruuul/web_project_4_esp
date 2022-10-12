import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(evt) { 
    super.open()
    const picture = evt.target
    const cardDiv = picture.closest('div')
    const cardText = cardDiv.querySelector('.elements-grid__place-name')
    this._popup.querySelector('#popupImageImage').src = picture.src;
    this._popup.querySelector('#popupImageText').textContent = cardText.textContent;
  }
}

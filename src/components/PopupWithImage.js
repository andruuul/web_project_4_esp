import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector){
    super(popupSelector);
    this._popupImage = this._popup.querySelector('#popupImageImage')
    this._popupTextSelector = '#popupImageText'
    this._imageCaption = this._popup.querySelector(this._popupTextSelector)
    this._sourceTextSelector = '.elements-grid__place-name'
  }

  open(evt) { 
    super.open()
    const picture = evt.target
    const cardText = picture.closest('div').querySelector(this._sourceTextSelector)
    this._popupImage.src = picture.src;
    this._popupImage.alt = cardText.textContent
    this._imageCaption.textContent = cardText.textContent;
  }
}

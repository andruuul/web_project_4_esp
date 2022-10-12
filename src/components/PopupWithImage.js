import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector){
    super(popupSelector);
    this._popupImage = this._popup.querySelector('#popupImageImage')
    this._imageCaption = this._popup.querySelector('#popupImageText')
  }

  open(evt) { 
    super.open()
    const picture = evt.target
    const cardText = picture.closest('div').querySelector('.elements-grid__place-name')

    this._popupImage.src = picture.src;
    this._popup.querySelector('#popupImageText').textContent = cardText.textContent;
  }
}

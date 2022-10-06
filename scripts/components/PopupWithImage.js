import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(evt) { //debes añadir una imagen al popup y el correspondiente atributo de imagen src junto con una leyenda para la imagen.
    super.open()
    let cardCloseBtn = evt.target.nextElementSibling
    let cardDescription = cardCloseBtn.nextElementSibling
    let cardText = cardDescription.firstElementChild
    this._popup.querySelector('#popupImageImage').src = evt.target.src;
    this._popup.querySelector('#popupImageText').textContent = cardText.textContent;
  }
}

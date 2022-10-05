import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(evt) {
    super.open()

    let cardCloseBtn = evt.target.nextElementSibling
    let cardDescription = cardCloseBtn.nextElementSibling
    let cardText = cardDescription.firstElementChild    
    
    let popupImageImage = this._popup.querySelector('#popupImageImage');
    popupImageImage.src = evt.target.src; 
    let popupImageText = this._popup.querySelector('#popupImageText');
    popupImageText.textContent = cardText.textContent;
  }

  setEventListeners(closeButton) {
    super.setEventListeners(closeButton)
    const overlay = document.querySelector(".overlay")
    overlay.addEventListener("click", () => {this.close()})
  }
}

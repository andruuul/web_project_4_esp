export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)
    this._overlay = document.querySelector(".overlay");
  }
  
  open() {
    this._popup.classList.remove("popup_hidden")
    this._overlay.style.display = 'block'; 
    let _handleEscClose = (event) => {
      if (event.key === 'Escape') {
        this.close(); 
        document.removeEventListener('keydown', _handleEscClose);
      }
    }
    document.addEventListener('keydown', _handleEscClose);
  }

  close() {
    this._popup.classList.add("popup_hidden");
    this._overlay.style.display = "none";
  }
  
  setEventListeners() {
    this._overlay.addEventListener("click", () => {this.close()})
    this._popup.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
  }
} 
 

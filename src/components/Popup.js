export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)
    this._overlay = document.querySelector(".overlay");
  }
  
  open() {
    this._popup.classList.remove("popup_hidden");
    this._overlay.style.display = "block";
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  close() {
    this._popup.classList.add("popup_hidden");
    this._overlay.style.display = "none";
    document.removeEventListener("keydown", this._handleEscClose);
  }

  
  setEventListeners() {
    this._overlay.addEventListener("click", () => {this.close()})
    this._popup.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
  }
} 
 

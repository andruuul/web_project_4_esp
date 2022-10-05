import { overlay } from "../utils/constants.js";

export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)

  }
  
  open() {
    this._popup.classList.remove("popup_hidden")
    overlay.style.display = 'block'; 
  }

  close() {
    this._popup.classList.add("popup_hidden");
    overlay.style.display = "none";
  }

  _handleEscClose() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close(); 
      }
    })
  } 

  setEventListeners(closeButton) {
    const overlay = document.querySelector(".overlay")
    overlay.addEventListener("click", () => {this.close()})
    document.querySelector(closeButton).addEventListener("click", () => {this.close()
    console.log(this._popup)})
    this._handleEscClose();
  }
} 
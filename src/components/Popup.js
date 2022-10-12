import { overlay } from "../utils/constants.js";

export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)

  }
  
  open() {
    this._popup.classList.remove("popup_hidden")
    overlay.style.display = 'block'; 
    this._handleEscClose();
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
    }, {once: true})
  } 

  setEventListeners() {
    const overlay = document.querySelector(".overlay")
    overlay.addEventListener("click", () => {this.close()})
    this._popup.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
  }
} 
 

export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)
    this._overlay = document.querySelector(".overlay");

  }
  
  open() {
    this._popup.classList.remove("popup_hidden")
    this._overlay.style.display = 'block'; 
    this._handleEscClose();
  }

  close() {
    this._popup.classList.add("popup_hidden");
    this._overlay.style.display = "none"; 
    //ya no puse el "removeEventListener" porque configuré el _handleEscClose para que solo funcione una vez, después de eso, se "desactiva" la función
  }

  _handleEscClose() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close(); 
      }
    }, {once: true})
  } 

  setEventListeners() {
    this._overlay.addEventListener("click", () => {this.close()})
    this._popup.querySelector(".popup__close-button").addEventListener("click", () => {this.close()})
  }
} 
 

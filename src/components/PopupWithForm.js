import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback){
    super(popupSelector);
    this._callback = callback;
  }

  _getInputValues(){ 
    const inputs = this._popup.querySelectorAll(".popup__input");
    const inputValues = {};
    inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }
  
  setEventListeners(openButton){
    
    super.setEventListeners();
    this._popup.querySelector(".popup__form").addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._callback(this._getInputValues()) 
      this.close()
    })
    document.querySelector(openButton).addEventListener("click", () => {
      this.open()
    }) 
  }
}

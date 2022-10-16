import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback){
    super(popupSelector);
    this._callback = callback;
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._formSelector = ".popup__form"
  }

  _getInputValues(){ 
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }
  
  setEventListeners(){
    
    super.setEventListeners();
    this._popup.querySelector(this._formSelector).addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._callback(this._getInputValues()) 
      this.close()
      this._inputs.forEach(input => {
        input.value = "";
      });
    })
  }
}

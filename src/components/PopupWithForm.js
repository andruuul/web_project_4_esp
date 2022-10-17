import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback){
    super(popupSelector);
    this._callback = callback;
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._formSelector = ".popup__form"
    this._form = this._popup.querySelector(this._formSelector)
  }

  _getInputValues(){ 
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }

  close() {
    super.close();
    this._form.reset()
  }
  
  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._callback(this._getInputValues()) 
      this.close()
    })
  }
}

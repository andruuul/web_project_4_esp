import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback){
    super(popupSelector);
    this._callback = callback;
  }

  _getInputValues(){ //¿Dónde lo llamo?
    const inputs = this._popup.querySelectorAll(".popup__input");
    const inputValues = {};
    inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
  }
  
  setEventListeners(openButton, closeButton, saveButton){
    //this._popup.querySelector("form").addEventListener("submit",this._callback) //Pero, ¿cómo le aplico el callback?¿Cómo uso _getInputValues?
    super.setEventListeners(closeButton);
    document.querySelector(openButton).addEventListener("click", () => {this.open()})    
    if (saveButton) {document.querySelector(saveButton).addEventListener("click", () => {this.close()})}
  }


  close(){
    super.close();
    //this._popup.querySelector('form').reset() //Si lo agrego, la validación flopea. Fix validation.
  }
}

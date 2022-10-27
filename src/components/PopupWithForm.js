import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }){
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._formSelector = ".popup__form"
    this._form = this._popup.querySelector(this._formSelector)
    // arregle el texto inicial del botón solo una vez en el constructor
    //this._submitBtnText = this._submitBtn.textContent    
  }

  _getInputValues(){ 
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }

  /* ESTE MEJOR VER EN LA PLATAFORMA
  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }
  */

  close() {
    super.close();
    this._form.reset()
  }
  
  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleSubmit(this._getInputValues()) 
      this.close() //No olvidar pasar este a un "then"
    })
  }
}

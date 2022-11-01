import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }){
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._inputs = this._popup.querySelectorAll(".popup__input");
    this._formSelector = ".popup__form"
    this._form = this._popup.querySelector(this._formSelector)
    this._submitBtn = this._popup.querySelector(".popup__save-button")
    this._submitBtnText = this._submitBtn.textContent
  }

  _getInputValues(){ 
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }

  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
      console.log(this._submitBtnText)
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

               //Este no lo usé, sé que solo es una recomendación, pero podrías enseñarme dónde debería ir?
  setInputValues(data) { 
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
  

  close() {
    super.close();
    this._form.reset()
  }
  
  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleSubmit(this._getInputValues()) 
    })
  }
}

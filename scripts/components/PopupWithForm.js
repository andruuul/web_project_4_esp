import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback){
    super(popupSelector);
    this._callback = callback;
  }

  _getInputValues(){ //¿Dónde lo llamo?, este al final, no lo usé.
    const inputs = this._popup.querySelectorAll(".popup__input");
    const inputValues = {};
    inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });   
    return inputValues
  }
  
  setEventListeners(openButton, closeButton){
    
    super.setEventListeners(closeButton);
    this._popup.querySelector(".popup__form").addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._callback() //Aquí debería ir la llamada a _getInputValues()?
      this.close()
    })
    document.querySelector(openButton).addEventListener("click", () => {
      this.open()
    }) 
  }


  close(){
    super.close();
    //this._popup.querySelector('.popup__form').reset() //Si lo agrego, la info del perfil de usuario se resetea también.
  }
}

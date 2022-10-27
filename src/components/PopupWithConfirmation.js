import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, _callback){
    super(popupSelector);
    this._callback = _callback
    this._confirmBtn = document.querySelector("#confirmButton")
  }

  setEventListeners(id) {
    this._confirmBtn.addEventListener("click", () => {
        super.close()
        this._callback(id)
    })
  }

}
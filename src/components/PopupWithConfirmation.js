import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, _callback){
    super(popupSelector);
    this._callback = _callback
    this._confirmBtn = document.querySelector("#confirmButton")
  }

  updateId(id){
    this._id = id
  }

  setEventListeners() {
    super.setEventListeners()
    this._confirmBtn.addEventListener("click", () => {
        this._callback(this._id)
    })
  }

}
export class FormValidator {
 //necesito ayuda en index.js
  constructor(form, settings) {
    this._form = form;
    this._settings = settings;
    this._settings.inactiveButtonSelector = "popup__save-button_inactive";
    this._submitButton = this._form.querySelector(".popup__save-button")
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"))
    this._errorElement = this._form.querySelector(`.${inputElement.id}-input-error`)
    this._settings.errorSelector = "popup__input_type_error"
    this._settings.errorActiveSelector = "popup__input-error_active"
  }

  resetValidation() { //Y puedes llamarlo en index.js al hacer clic en los botones de abriR
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  _toggleButtonState() { 
    if (this._hasInvalidInput()) { 
      this._submitButton.classList.add(this._settings.inactiveButtonSelector);
      this._submitButton.disabled = true
    } else { 
      this._submitButton.classList.remove(this._settings.inactiveButtonSelector);
      this._submitButton.disabled = false
    }
  }; 

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
 
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };

  _showError (inputElement) {
    inputElement.classList.add(this._settings.errorSelector);
    this._errorElement.classList.add(this._settings.errorActiveSelector);
    this._errorElement.textContent = inputElement.validationMessage;
  };

  _hideError (inputElement) {
    inputElement.classList.remove(this._settings.errorSelector);
    this._errorElement.classList.remove(this._settings.errorActiveSelector);
    this._errorElement.textContent = "";
  };

  _setEventListeners() {
    // aquí, para comprobar el estado del botón al principio
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity (inputElement);
        // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
        this._toggleButtonState ();
      });
    }); 
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    })
    this._setEventListeners();
  }

}

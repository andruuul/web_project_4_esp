export class FormValidator {
  constructor(form, input) {
    this.form = [form];
    this.input = [input];
    this.FormValidation = this.enableValidation();
  }

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("popup__save-button_inactive");
    } else {
      buttonElement.classList.remove("popup__save-button_inactive");
    }
  };

  _showError (formElement, inputElement, errorMessage) {
    const _errorElement = formElement.querySelector(`.${inputElement.id}-input-error`)
    inputElement.classList.add("popup__input_type_error");
    _errorElement.classList.add("popup__input-error_active");
    _errorElement.textContent = errorMessage;
  };
  
  _hideError (formElement, inputElement) {
    const _errorElement = formElement.querySelector(`.${inputElement.id}-input-error`)
    inputElement.classList.remove("popup__input_type_error");
    _errorElement.classList.remove("popup__input-error_active");
    _errorElement.textContent = "";
  };
  
  _checkInputValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideError(formElement, inputElement);
    }
  };
  
  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); }

  _setEventListeners(formElement) {
    const _inputList = Array.from(formElement.querySelectorAll(".popup__input")) 
    const _buttonElement = formElement.querySelector(".popup__save-button")
    // aquí, para comprobar el estado del botón al principio
    this._toggleButtonState(_inputList, _buttonElement);

    _inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      this._checkInputValidity(formElement, inputElement);
      // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
      this._toggleButtonState(_inputList, _buttonElement);
    });
    }); 
  }

  enableValidation() {
    formList = Array.from(document.querySelectorAll(".popup__form"))
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();})
    this._setEventListeners(formElement)})
   }
}

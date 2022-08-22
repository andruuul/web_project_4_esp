const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`)
  inputElement.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__input-error_active");
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`)
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); }

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-button_inactive");
  } else {
    buttonElement.classList.remove("popup__save-button_inactive");
  }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input")) 
    
    const buttonElement = formElement.querySelector(".popup__save-button")
    // aquí, para comprobar el estado del botón al principio
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
      toggleButtonState(inputList, buttonElement);
    });
  
  }); 
 
}
  
function enableValidation () {
    formList = Array.from(document.querySelectorAll(".popup__form"))
    formList.forEach((formElement) => {formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();})
    setEventListeners(formElement)})
   }

//toggleButtonState(inputList, buttonElement)

enableValidation();

//Entendí que necesito pasarle siempre un formulario a esta función, mis dos formularios tienen la misma clase, entonces dejé el .form__selector. Gracias!!!
enableValidation({
  formSelector: ".popup__form",
}); 
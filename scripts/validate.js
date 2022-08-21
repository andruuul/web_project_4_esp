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

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input")) 
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  }); }
  
function enableValidation () {formList = Array.from(document.querySelectorAll(".popup__form"))
  formList.forEach((formElement) => {formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();})
    setEventListeners(formElement)})
   }

enableValidation();

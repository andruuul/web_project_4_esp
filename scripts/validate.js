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
    console.log("seteventLISTENERS()FUNCIONANDO")
    const inputList = Array.from(formElement.querySelectorAll(".popup__input")) 
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
    
    const hasInvalidInput = (inputList) => {
        console.log("hasInvalidInput()FUNCIONANDO")
        console.log()
        return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); }

      console.log(hasInvalidInput(inputList)) // ESTE HAY QUE CAMBIAR Y USAR EN OTRA FUNCION
      

      
  }); }
  
function enableValidation () {
    console.log("enableValidation()FUNCIONANDO")
    formList = Array.from(document.querySelectorAll(".popup__form"))
    formList.forEach((formElement) => {formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();})
    setEventListeners(formElement)})
   }

//toggleButtonState(inputList, buttonElement)

enableValidation();
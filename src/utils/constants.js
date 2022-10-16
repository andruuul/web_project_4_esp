export const initialCards = [
  {  name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"  },
  {  name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"  },
  {  name:"Montañas Calvas",
    link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"  },
  {  name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"  },
  {  name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"  },
  {  name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"  }
];

export const elementsGridSection = ".elements-grid"
export const inputUserName = document.querySelector('#inputUsername')
export const inputSubtitle = document.querySelector('#inputSubtitle')
export const cardTemplate = "#cardTemplate"
export const settings = {
  inactiveButtonSelector: "popup__save-button_inactive", 
  saveButtonSelector: ".popup__save-button",
  inputSelector: ".popup__input",
  errorSelector: "popup__input_type_error",
  errorActiveSelector: "popup__input-error_active"
}
export const addBtn = document.querySelector(".profile-grid__add-button")
export const editBtn = document.querySelector("#editButton")
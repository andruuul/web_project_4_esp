import './index.css';
import '../styles/normalize.css'
import Card from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import { initialCards, elementsGridSection, inputSubtitle, inputUserName, cardTemplate } from '../utils/constants.js'; 
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo(document.getElementById('defaultUsername'), document.getElementById('defaultSubtitle'));
inputUserName.value = userInfo.getUserInfo().name;
inputSubtitle.value = userInfo.getUserInfo().job;

const cardsList = new Section ({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card ({placeName: item.name, photo: item.link, cardTemplateSelector:cardTemplate, callbackImage: (evt) => {
      const imagePopup = new PopupWithImage ("#popupImageContainer")
      imagePopup.open(evt)
    }
  });
    const cardReady = card.generateCard();
    cardsList.addItem(cardReady);
    },
  },
  elementsGridSection
);


cardsList.renderItems();
/////////////////////////////////////////////////////////////////////////////aquí
//function initiateValidation () {
  const formValidators = {}

  // habilitar la validación
  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(".popup__form"))
    formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, settings)
      // aquí obtienes el nombre del formulario
      const formName = formElement.getAttribute('name')
  
     // aquí almacena un validador por el `nombre` del formulario
      formValidators[formName] = validator;
     validator.enableValidation();
    });
  };
  
  enableValidation(settings);
  
//Me da el siguiente error: "settings is not defined", por eso no quería
//cambiarlo jajjaa, no sé muy bien cómo manejar el parámetro "settings"


//}
//initiateValidation();
//////////////////////////////////////////////////////////////////////////////

const profilePopup = new PopupWithForm ("#popupContainer", ({name, job}) => {
   userInfo.setUserInfo(name, job);
})
const editBtn = document.querySelector("#editButton")  ///
const profileSaveBtn =  document.querySelector("#saveButton")  ///

editBtn.addEventListener("click", () => {
  profilePopup.open()
  profileSaveBtn.classList.add("popup__save-button_inactive")
})
profilePopup.setEventListeners()




const newPlacePopup = new PopupWithForm ("#popupContainerNewPlace", () => {
  const cardURL = document.querySelector("#inputNewPlaceURL");
  const cardTitle = document.querySelector("#inputNewPlaceTitle");
  const customCard = new Card ({placeName: cardTitle.value, photo: cardURL.value, cardTemplateSelector:cardTemplate, callbackImage: (evt) => {
    const imagePopup = new PopupWithImage ("#popupImageContainer")
    imagePopup.open(evt)
  }});
  const customCardReady = customCard.generateCard()
  elementsGrid.prepend(customCardReady);
})

const addBtn = document.querySelector(".profile-grid__add-button")
const newPlaceSaveBtn = document.querySelector("#newPlaceSaveButton")

addBtn.addEventListener("click", () => {
  console.log("sup1")
  newPlacePopup.open();
  console.log("sup2")
  newPlaceSaveBtn.classList.add("popup__save-button_inactive")
})
newPlacePopup.setEventListeners()


const imagePopup = new PopupWithImage ("#popupImageContainer")
imagePopup.setEventListeners()

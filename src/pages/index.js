import './index.css';
import '../styles/normalize.css'
import Card from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import { elementsGridSection, inputSubtitle, inputUserName, cardTemplate, settings, addBtn, editBtn, defaultSubtitle, defaultUsername, profilePicture } from '../utils/constants.js'; 
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

function getUserInfoFromServer() {
  fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/users/me", {
    headers: {
      authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5"
    }
  })
  .then(res => res.json())
  .then((result) => {
    defaultUsername.textContent = result.name
    defaultSubtitle.textContent = result.about
    profilePicture.src = result.avatar
  })
}
getUserInfoFromServer();

const userInfo = new UserInfo(defaultUsername, defaultSubtitle);

const profilePopup = new PopupWithForm ("#popupContainer", ({name, job}) => {
  userInfo.setUserInfo(name, job);
})

editBtn.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  inputUserName.value = name;
  inputSubtitle.value = job;
  profilePopup.open()
  formValidators['profile-form'].resetValidation()
})
profilePopup.setEventListeners()

function getCardsFromServer() {
  fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/cards", {
    headers: {
      authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5"
    }
  })
  .then(res => res.json())
  .then((cardsFromServer) => {
    console.log(cardsFromServer)
    const cardsList = new Section ({
      items: cardsFromServer, 
      renderer: (item) => {
        const cardReady = createCard(item);
        cardsList.addItem(cardReady);
      },
      },
      elementsGridSection
    );
    cardsList.renderItems();
  })
}
getCardsFromServer();

//PATCH

fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/users/me", {
  method: "PATCH",
  headers: {
    authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Marie Skłodowska Curie",
    about: "Físico y químicos"
  })
});

//POST

fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/cards", {
  method: "POST",
  headers: {
    authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "nombredelafoto", //cardData.name,
    link: "Físico y químicos" //cardData.link
  })
});
 
const newPlacePopup = new PopupWithForm ("#popupContainerNewPlace", (cardData) => {
  const customCardReady = createCard(cardData)
  cardsList.addItem(customCardReady); //¿Cómo puedo utilizar cardsList otra vez, si está en un .then de otra función? :( O ya no la necesito?
});

console.log(newPlacePopup)


function createCard(item) {
  const card = new Card ({placeName: item.name, photo: item.link, cardTemplateSelector:cardTemplate, callbackImage: (evt) => {
    imagePopup.open(evt)
  }})
  const cardElement = card.generateCard();
  return cardElement
}

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


addBtn.addEventListener("click", () => {
  newPlacePopup.open();
  formValidators['place-form'].resetValidation()
})
newPlacePopup.setEventListeners()


const imagePopup = new PopupWithImage ("#popupImageContainer")
imagePopup.setEventListeners()

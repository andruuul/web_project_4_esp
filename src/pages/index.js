import './index.css';
import '../styles/normalize.css'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js';
import { elementsGridSection, inputSubtitle, inputUserName, cardTemplate, settings, addBtn, editBtn, defaultSubtitle, defaultUsername, profilePicture } from '../utils/constants.js'; 
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5",
    "Content-Type": "application/json"
  }
});

/* Aquí qué hago??
Promise.all([getProfileInfo(), getInitialCards(), editProfile(), addNewCard()])
// destructure la respuesta
  .then(([userData, cards]) => {
      // establecer todos los datos
  })
  .catch(err => {
    console.log(err)
  });
  */


api.getProfileInfo().then((userInfo) => {
  defaultUsername.textContent = userInfo.name
  defaultSubtitle.textContent = userInfo.about
  profilePicture.src = userInfo.avatar
})
  .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
  .finally(() => {}) //en este bloque, la mayoría de las veces cambia el texto del botón y oculta el efecto de carga)


api.getInitialCards().then((cardsFromServer) => {
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
  .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
  .finally(() => {}) //en este bloque, la mayoría de las veces cambia el texto del botón y oculta el efecto de carga)

const profilePopup = new PopupWithForm ("#popupContainer", ({name, job}) => {
  userInfo.setUserInfo(name, job);
  // editProfile()
  api.editProfile(name, job)
    .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
    .finally(() => {}) //en este bloque, la mayoría de las veces cambia el texto del botón y oculta el efecto de carga)
})

const newPlacePopup = new PopupWithForm ("#popupContainerNewPlace", (cardData) => {
  api.addNewCard(cardData)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      const customCardReady = createCard(data)    //esto...
      document.querySelector(".elements-grid").prepend(customCardReady)  // ...y esto pasa solo cuando se reinicia la página!!
    })
    .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
    .finally(() => {}) //en este bloque, la mayoría de las veces cambia el texto del botón y oculta el efecto de carga)
});


const userInfo = new UserInfo(defaultUsername, defaultSubtitle); 

function createCard(item) { //este se puede quedar aquí,supongo
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



  
editBtn.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  inputUserName.value = name;
  inputSubtitle.value = job;
  profilePopup.open()
  formValidators['profile-form'].resetValidation()
})
profilePopup.setEventListeners()


addBtn.addEventListener("click", () => {
  newPlacePopup.open();
  formValidators['place-form'].resetValidation()
})
newPlacePopup.setEventListeners()


const imagePopup = new PopupWithImage ("#popupImageContainer")
imagePopup.setEventListeners()
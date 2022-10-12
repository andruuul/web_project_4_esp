import "./index.css";
import Card from './components/Card.js'
import {FormValidator} from './components/FormValidator.js'
import Section from './components/Section.js';
import { initialCards, elementsGridSection, inputSubtitle, inputUserName } from './utils/constants.js'; 
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';

const userInfo = new UserInfo(document.getElementById('defaultUsername'), document.getElementById('defaultSubtitle'));
inputUserName.value = userInfo.getUserInfo().name;
inputSubtitle.value = userInfo.getUserInfo().job;

const cardsList = new Section ({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card ({placeName: item.name, photo: item.link, callbackImage: (evt) => {
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

function initiateValidation () {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  const inputList = Array.from(document.querySelectorAll(".popup__input"));
  const validator = new FormValidator (formList, inputList);
  validator.enableValidation();
}
initiateValidation();


const profilePopup = new PopupWithForm ("#popupContainer", ({name, job}) => {
   userInfo.setUserInfo(name, job);
})
profilePopup.setEventListeners("#editButton", "#popupCloseButton")


const newPlacePopup = new PopupWithForm ("#popupContainerNewPlace", () => {
  let cardURL = document.querySelector("#inputNewPlaceURL");
  let cardTitle = document.querySelector("#inputNewPlaceTitle");
  const customCard = new Card ({placeName: cardTitle.value, photo: cardURL.value, callbackImage: (evt) => {
    const imagePopup = new PopupWithImage ("#popupImageContainer")
    imagePopup.open(evt)
  }});
  const customCardReady = customCard.generateCard()
  elementsGrid.prepend(customCardReady);
  
})
newPlacePopup.setEventListeners(".profile-grid__add-button", "#newPlaceCloseButton")


const imagePopup = new PopupWithImage ("#popupImageContainer")
imagePopup.setEventListeners("#popupImageCloseButton")



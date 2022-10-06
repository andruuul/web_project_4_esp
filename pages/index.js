import Card from '../scripts/components/Card.js'
import {FormValidator} from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import { initialCards, elementsGridSection } from '../scripts/utils/constants.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

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


const profilePopup = new PopupWithForm ("#popupContainer", () => {
  const changeUserInfo = new UserInfo({
    name: document.getElementById('defaultUsername'), 
    job: document.getElementById('defaultSubtitle')
  })
  changeUserInfo.setUserInfo();
})
profilePopup.setEventListeners("#editButton", "#popupCloseButton")

const preloadUserInfo = new UserInfo({
  name: document.getElementById('defaultUsername'), 
  job: document.getElementById('defaultSubtitle')
})
preloadUserInfo.getUserInfo();

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



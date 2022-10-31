import './index.css';
import '../styles/normalize.css'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js';
import { 
  elementsGridSection, 
  inputSubtitle, 
  inputUserName, 
  cardTemplate, 
  settings, 
  addBtn, 
  editBtn, 
  defaultSubtitle, 
  defaultUsername, 
  //profilePicture
} from '../utils/constants.js'; 
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
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

/* Esto lo haré hasta el final
Promise.all([getProfileInfo(), getInitialCards(), editProfile(), addNewCard()])
// destructure la respuesta
  .then(([userData, cards]) => {
      // establecer todos los datos
  })
  .catch(err => {
    console.log(err)
  });
  */

  const userInfo = new UserInfo(defaultUsername, defaultSubtitle);

  let loggedUserId = "";
  
  api
  .getProfileInfo()
    .then(({ name, about, /*avatar,*/ _id }) => {
      loggedUserId = _id;
      userInfo.setUserInfo(name, about, loggedUserId)
      //profilePicture.src = userInfo.avatar
    })
    .then(() => {
      return api.getInitialCards()
    })
    .then((cardsFromServer) => {
      const cardsList = new Section({
        items: cardsFromServer,
        renderer: (item) => {
          const cardReady = createCard(item);
          cardsList.addItem(cardReady);
          if (item.likes.some(e => e._id === userInfo.getUserInfo().id
          )) {
            cardReady.querySelector(".elements-grid__like-button").classList.add("elements-grid__like-button_active")
          }
        },
      },
        elementsGridSection
      );
      cardsList.renderItems();
    })
    .catch((err) => { console.log("Error. La solicitud ha fallado: ", err); })
    .finally(() => { }) //cambiar el texto del botón


    

const profilePopup = new PopupWithForm ({popupSelector:"#popupContainer", handleSubmit: ({name, job}) => {
  userInfo.setUserInfo(name, job);
  api.editProfile(name, job)
    .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
    .finally(() => {}) //cambiar el texto del botón
}})

const newPlacePopup = new PopupWithForm ({popupSelector:"#popupContainerNewPlace", handleSubmit: (cardData) => {
  api.addNewCard(cardData)
    .then((data) => {
      const customCardReady = createCard(data)
      document.querySelector(".elements-grid").prepend(customCardReady)
    })
    .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
    .finally(() => {}) //cambiar el texto del botón
}});

let cardToDelete = null;

const confirmationPopup = new PopupWithConfirmation("#confirmationPopup", (id) => {
  api.deleteCard(id)
  .then(() => {
    confirmationPopup.close()
    cardToDelete.removeCard()
  })
  .catch ((err) => {console.log("Error. La solicitud ha fallado: ", err);})
})
confirmationPopup.setEventListeners()

function createCard(item) {
  const card = new Card ({
    placeName: item.name, 
    photo: item.link, 
    likes: item.likes, 
    cardId: item._id, 
    ownerId: item.owner._id, 
    cardTemplateSelector:cardTemplate, 
    callbackImage: (evt) => {
      imagePopup.open(evt)
    },
    confirmCallback: () => {
      confirmationPopup.open()
      cardToDelete = card
      confirmationPopup.updateId(item._id)
    },
    likeCallback: () => {
      api.addCardLike(item._id)
      .then((likedCard) => {
        card.updateLikes(likedCard.likes.length)
        likedCard.likedByMe = true;
        card.toggleCardLike(likedCard.likedByMe)
      })
    }
  })
  const cardElement = card.generateCard(userInfo.getUserInfo().id);
  return cardElement
}

const formValidators = {}

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(".popup__form"))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, settings)
    const formName = formElement.getAttribute('name')
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

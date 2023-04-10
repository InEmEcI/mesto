import '../pages/index.css';

import {
  profileName, profileWhoIsThisElement,
  profileEditAvatarButton, profileImage,
  popupProfile, profileOpenButton,
  formElement, cardsSection, popupNewPlaceForm,
  popupAddNewCardOpen, validationConfig,
  avatarOpenButton, popupAvatarForm,
  popupAvatar
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: "186e858b-0f86-414d-8c8c-a1408bf9b14d",
    "Content-Type": "application/json",
  }
});

let userId;

Promise.all([api.getUser(), api.getCards()
])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    section.renderItems(cards.reverse());
  }
  )
  .catch((error) => {
    console.log(error);
  })

//Экземпляр пользователя
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__who-is-this',
  avatar: '.profile__image'
});

const handleEditUserInfo = (info) => {
  api.editUserInfo(info)
    .then((info) => { userInfo.setUserInfo(info) })
    .then(() => { popupProfileEdit.close() })
    .catch((error) => console.log(`Ошибка: ${error}`))
}

const heandleChangeAvatar = (item) => {
  api.changeUserAvatar(item)
    .then((data) => { userInfo.setUserInfo(data) })
    .then(() => { popupAvatarProfile.close() })
    .catch((error) => console.log(`Ошибка: ${error}`))
}

function removeCard(evt, { cardId, card }) {
  evt.preventDefault();
  api.removeCard(cardId)
    .then(() => {
      card.remove();
      popupWithConfirmation.close();
    })
}

// попап информации профиля
const popupProfileEdit = new PopupWithForm(popupProfile, handleEditUserInfo);
profileOpenButton.addEventListener('click', () => {
  popupProfileEdit.open();
  profileValidation.resetValidation();
  popupProfileEdit.setInputValues(userInfo.getUserInfo());
});
popupProfileEdit.setEventListeners();

// попап замены аватара
const popupAvatarProfile = new PopupWithForm(popupAvatar, heandleChangeAvatar);
avatarOpenButton.addEventListener('click', () => {
  popupAvatarProfile.open();
  popupAvatarFormValidation.resetValidation();
});
popupAvatarProfile.setEventListeners();

// попап с картинкой
const popupWithImage = new PopupWithImage('.popup-card-image');
const clickToImage = ({ name, link }) => { popupWithImage.open({ name, link }) };
popupWithImage.setEventListeners();

// функция для создания новой карточки
function createCard(data) {
  const cardElement = new Card(
    data,
    '.template-card',
    clickToImage,
    userId,
    (cardId, card) => popupWithConfirmation.open(cardId, card)
  );
  return cardElement.generateCard();
}

// добавляем  карточки на страницу
const section = new Section({
  renderer: (item) => {
    const cardContainer = createCard(item);
    cardsSection.prepend(cardContainer);
  },
}, '.elements');

// для подтверждения создания новой карточки
const submitAddCardForm = (data) => {
  api.addNewCard(data)
    .then((data) => {
      section.addItem(createCard({ name: data.name, link: data.link }));
    })
    .then(() => {
      popupWithFormCard.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`));
}


// попап для подтвеждения удаления карточки
const popupWithConfirmation = new PopupWithConfirmation('.popup__card-del', removeCard)
popupWithConfirmation.setEventListeners();

// попап для добавления новой карточки
const popupWithFormCard = new PopupWithForm('.popup_new-card', submitAddCardForm);
popupWithFormCard.setEventListeners();

// ВАЛИДАЦИЯ:

const cardsValidation = new FormValidator(validationConfig, popupNewPlaceForm);
cardsValidation.enableValidation();

const profileValidation = new FormValidator(validationConfig, formElement);
profileValidation.enableValidation();

const popupAvatarFormValidation = new FormValidator(validationConfig, popupAvatarForm);
popupAvatarFormValidation.enableValidation();

// СЛУШАТЕЛИ
popupAddNewCardOpen.addEventListener('click', () => {
  popupWithFormCard.open();
  cardsValidation.resetValidation();
});

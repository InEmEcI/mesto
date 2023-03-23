import '../pages/index.css';

import { initialCards } from '../utils/constants.js';
import {
  profileName, profileWhoIsThisElement,
  popupProfile, profileOpenButton,
  formElement, cardsSection, popupNewPlaceForm,
  popupAddNewCardOpen, validationConfig
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo({ name: profileName, whoIsThis: profileWhoIsThisElement });

const saveUserInfo = (input) => {
  userInfo.setUserInfo(input.name, input.job)
};

const popupEditProfile = new PopupWithForm(popupProfile, saveUserInfo)

profileOpenButton.addEventListener('click', () => {
  popupEditProfile.open();
  profileValidation.resetValidation();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
});

popupEditProfile.setEventListeners();
// открытие попапа с картинкой
const popupWithImage = new PopupWithImage('.popup-card-image');
const clickToImage = ({ name, link }) => { popupWithImage.open({ name, link }) };
popupWithImage.setEventListeners();

// функция для создания новой карточки
function createCard(data) {
  const cardElement = new Card(data, '.template-card', clickToImage);
  return cardElement.generateCard();
}

// добавляем первые шесть карточек на страницу
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardContainer = createCard(item);
    cardsSection.prepend(cardContainer);
  },
},'.elements');
section.renderItems();

function submitAddCardForm(data){
  section.addItem(createCard(data));
}

// для добавления карточки
const popupWithFormCard = new PopupWithForm('.popup_new-card', submitAddCardForm);
popupWithFormCard.setEventListeners();

// функция открытия попапа для создания новой карточки
const openAddNewCardPopup = function () {
  cardsValidation.resetValidation();
  popupWithFormCard.open();
}

const cardsValidation = new FormValidator(validationConfig, popupNewPlaceForm);
cardsValidation.enableValidation();

const profileValidation = new FormValidator(validationConfig, formElement);
profileValidation.enableValidation();

// СЛУШАТЕЛИ
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);



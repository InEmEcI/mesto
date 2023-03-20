import { initialCards } from '../utils/constants.js';
import {
  profileName, profileWhoIsThisElement,
  // allPopups, popupCloseButtons,
  popupProfile, profileOpenButton,
  formElement, nameInput, jobInput, cardsSection,
  popupNewPlaceForm, popupNewCardItem, newCardName, newCardLink,
  popupAddNewCardOpen, cardImagePhoto, popupCardImage,
  popupCardImageFigcaption, object
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';

import { FormValidator } from '../components/FormValidator.js';

// открытие попапа с картинкой
const popupWithImage = new PopupWithImage('.popup-card-image');
const clickToImage = ({ name, link }) => {popupWithImage.open({ name, link })};
popupWithImage.setEventListeners();

// функция для создания новой карточки
function createCard({ name, link }) {
  const cardElement = new Card({ name, link }, '.template-card', clickToImage);
  return cardElement.generateCard();
}

// функция для добавления новой карточки
const renderCards = (item) => {
  const cardContainer = createCard(item);
  cardsSection.prepend(cardContainer);
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


// функция открытия попапа для создания новой карточки
const openAddNewCardPopup = function () {
  popupNewPlaceForm.reset();
  cardsValidation.resetValidation();
  openPopup(popupNewCardItem);
}

// открытие попапа в профиле
const openProfilePopup = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
  profileValidation.resetValidation();
  openPopup(popupProfile);
}

// заполнение полей в профиле
function saveProfileChanges(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
  closePopup(popupProfile);
}

// функция добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = { name: newCardName.value, link: newCardLink.value, };
  renderCards(newCard);
  popupNewPlaceForm.reset();
  closePopup(popupNewCardItem);
}

const cardsValidation = new FormValidator(object, popupNewPlaceForm);
cardsValidation.enableValidation();

const profileValidation = new FormValidator(object, formElement);
profileValidation.enableValidation();

// СЛУШАТЕЛИ
profileOpenButton.addEventListener('click', openProfilePopup);
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);
formElement.addEventListener('submit', saveProfileChanges);
popupNewPlaceForm.addEventListener('submit', addNewCard);

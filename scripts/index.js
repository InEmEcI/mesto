import {initialCards} from './cards.js';
import Card from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

// ПРОФИЛЬ
const profileSection = document.querySelector('.profile'); // сам профиль
const profileName = profileSection.querySelector('.profile__name'); // как зовут (в профиле)
const profileWhoIsThisElement = profileSection.querySelector('.profile__who-is-this'); // кто он (в профиле)

// ПОПАП
const allPopups = document.querySelectorAll('.popup'); // Все попапы
const popupCloseButtons = document.querySelectorAll('.popup__close'); // кнопки закрытия попапов

// ПОПАП ПРОФИЛЬ
const popupProfile = document.querySelector('.popup_profile'); // попап профиля
const profileOpenButton = document.querySelector('.profile__edit'); // кнопка открытия попапа в профиле
const formElement = document.querySelector('.popup__form_profile'); // форма в попапе профиля
const nameInput = formElement.querySelector('.popup__input_name_name'); // имя в попапе профиля
const jobInput = formElement.querySelector('.popup__input_name_who-is-this'); // "кто он" в попапе профиля

// КАРТОЧКИ
const cardsSection = document.querySelector('.elements');

// НОВАЯ КАРТОЧКА
const popupNewPlaceForm = document.querySelector('.popup__form-about_new-form-about'); // форма новой карточки
const popupNewCardItem = document.querySelector('.popup_new-card'); // попап новой карточки
const newCardName = document.querySelector('.popup__input_type_card-name'); // имя карточки а попапе
const newCardLink = document.querySelector('.popup__input_type_photo-link') // ссылка на картинку карточки а попапе
const popupAddNewCardOpen = document.querySelector('.profile__add-new') // кнопка открытия попапа новой карточки

// ПОПАП УВЕЛИЧЕННОЙ КАРТОЧКИ
const cardImagePhoto = document.querySelector('.popup-card-image__photo');
// фото карточки в попапе большой карточки
const popupCardImage = document.querySelector('.popup-card-image');
// подпись фотографии в попапе большой карточки
const popupCardImageFigcaption = document.querySelector('.popup-card-image__figcaption');

const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const cardsValidation = new FormValidator(object, popupNewPlaceForm);
cardsValidation.enableValidation();

const profileValidation = new FormValidator(object, formElement);
profileValidation.enableValidation();

// открытие попапа в профиле
const openProfilePopup = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
  profileValidation.resetValidation();
  openPopup(popupProfile);
}

// функция открытия попапа для создания новой карточки
const openAddNewCardPopup = function () {
  popupNewPlaceForm.reset();
  cardsValidation.resetValidation();
  openPopup(popupNewCardItem);
}

const renderCards = (item) => {
  const cardContainer = createCard(item);
  cardsSection.prepend(cardContainer);
}

popupCloseButtons.forEach(function (button) {
  const closeButtonCross = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(closeButtonCross)
  });
}
);

// универсальная функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByPressToEsc);
}

// универсальная функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByPressToEsc);
}

// закрытие попапа по клику на оверлей
allPopups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
})

// закрытие попапа по нажатию на Esc
function closePopupByPressToEsc(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function zoomImage(item) {
  cardImagePhoto.src = item.link;
  cardImagePhoto.alt = item.name;
  popupCardImageFigcaption.textContent = item.name;
  openPopup(popupCardImage);
}

function createCard({ name, link }) {
  const cardElement = new Card({name, link}, '.template-card', zoomImage);
  return cardElement.generateCard();
}

initialCards.forEach(item => renderCards(item));

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

// СЛУШАТЕЛИ
profileOpenButton.addEventListener('click', openProfilePopup);
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup); 
formElement.addEventListener('submit', saveProfileChanges);
popupNewPlaceForm.addEventListener('submit', addNewCard);

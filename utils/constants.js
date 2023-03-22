// первые 6 карточек
export const initialCards = [

  {
    name: 'Калининград',
    link: './images/kaliningrad_6.jpg'
  },

  {
    name: 'Екатеринбург',
    link: './images/ekatirenburg_5.jpg'
  },

  {
    name: 'Нижний Новгород',
    link: './images/nizhnii-novgorod_4.jpg'
  },

  {
    name: 'Казань',
    link: './images/kazan_3.jpg'
  },

  {
    name: 'Москва',
    link: './images/moskva_2.jpg'
  },

  {
    name: 'Санкт-Петербург',
    link: './images/piter_1.jpg'
  }

];

export const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// ПРОФИЛЬ
export const profileSection = '.profile'; // сам профиль
// export const profileSection = document.querySelector('.profile'); // сам профиль
// export const profileName = profileSection.querySelector('.profile__name'); // как зовут (в профиле)
// export const profileWhoIsThisElement = profileSection.querySelector('.profile__who-is-this'); // кто он (в профиле)
export const profileName = '.profile__name'; // как зовут (в профиле)
export const profileWhoIsThisElement = '.profile__who-is-this'; // кто он (в профиле)

// ПОПАП
export const allPopups = document.querySelectorAll('.popup'); // Все попапы
export const popupCloseButtons = document.querySelectorAll('.popup__close'); // кнопки закрытия попапов

// ПОПАП ПРОФИЛЬ
// export const popupProfile = document.querySelector('.popup_profile'); // попап профиля
export const popupProfile = '.popup_profile'; // попап профиля
export const profileOpenButton = document.querySelector('.profile__edit'); // кнопка открытия попапа в профиле
export const formElement = document.querySelector('.popup__form_profile'); // форма в попапе профиля
export const nameInput = formElement.querySelector('.popup__input_name_name'); // имя в попапе профиля
export const jobInput = formElement.querySelector('.popup__input_name_who-is-this'); // "кто он" в попапе профиля

// КАРТОЧКИ
export const cardsSection = document.querySelector('.elements');
export const cardName = document.querySelector('.popup__input_type_card-name');
export const photoLink = document.querySelector('.popup__input_type_photo-link');
// export const cardName = '.popup__input_type_card-name';
// export const photoLink = '.popup__input_type_photo-link';



// НОВАЯ КАРТОЧКА
export const popupNewPlaceForm = document.querySelector('.popup__form-about_new-form-about'); // форма новой карточки
export const popupNewCardItem = document.querySelector('.popup_new-card'); // попап новой карточки
export const newCardName = document.querySelector('.popup__input_type_card-name'); // имя карточки а попапе
export const newCardLink = document.querySelector('.popup__input_type_photo-link') // ссылка на картинку карточки а попапе
export const popupAddNewCardOpen = document.querySelector('.profile__add-new') // кнопка открытия попапа новой карточки

// ПОПАП УВЕЛИЧЕННОЙ КАРТОЧКИ
export const cardImagePhoto = document.querySelector('.popup-card-image__photo');
// фото карточки в попапе большой карточки
export const popupCardImage = document.querySelector('.popup-card-image');
// подпись фотографии в попапе большой карточки
export const popupCardImageFigcaption = document.querySelector('.popup-card-image__figcaption');

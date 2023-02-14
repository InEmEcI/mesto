// ПРОФИЛЬ
const profileSection = document.querySelector('.profile'); // сам профиль
const profileName = profileSection.querySelector('.profile__name'); // как зовут (в профиле)
const profileWhoIsThisElement = profileSection.querySelector('.profile__who-is-this'); // кто он (в профиле)

// ПОПАП
// Все попапы
const allPopups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile'); // попап профиля
const profileOpenButton = document.querySelector('.profile__edit'); // кнопка открытия попапа в профиле
// const popupClose = popupProfile.querySelector('.popup__close'); // кнопка закрытия попапа в профиле
const profileNameInput = popupProfile.querySelector('.popup__name'); // как зовут (в попапе)
const popupWhoIsThisElement = popupProfile.querySelector('.popup__who-is-this'); // кто он (в попапе)
// кнопка сохранения информации в попапе профиля
const popupContentSaveButton = popupProfile.querySelector('.popup__save');

// НОВАЯ КАРТОЧКА
const popupNewPlaceForm = document.querySelector('.popup__form-about_new-form-about'); // форма новой карточки
const popupNewCardItem = document.querySelector('.popup_new-card'); // попап новой карточки
const newCardName = document.querySelector('.popup__input_type_card-name'); // имя карточки а попапе
const newCardLink = document.querySelector('.popup__input_type_photo-link') // ссылка на картинку карточки а попапе
// кнопка сохранения информации в попапе при создании новой карточки
const popupAddNewCardSaveButton = popupNewCardItem.querySelector('.new-card-save');
const popupAddNewCardOpen = document.querySelector('.profile__add-new') // кнопка открытия попапа новой карточки
// кнопка закрытия попапа новой карточки
const popupAddNewCardCloseButton = popupNewCardItem.querySelector('.popup-new-card_close');

// ПОПАП ПРОФИЛЬ
const formElement = document.querySelector('.popup__form-about'); // форма в попапе профиля
const nameInput = formElement.querySelector('.popup__input_name_name'); // имя в попапе профиля
const jobInput = formElement.querySelector('.popup__input_name_who-is-this'); // "кто он" в попапе профиля

// закрытие попапа
const popupCloseButton = document.querySelectorAll('.popup__close');

// КАРТОЧКИ
const cardsSection = document.querySelector('.elements');
const cardsSectionElement = cardsSection.querySelector('.element'); // Карточка
const likeButton = document.querySelector('.element__like'); // кнопка like
const cardImage = document.querySelector('.popup-card-image__figure'); // изображение в карточке
// карточка с городами в template(шаблоне) (<article class="element">)
const templateCard = document.querySelector('#template-card').content.querySelector('.element');
const newCardButton = document.querySelector('.profile__add-new'); // кнопка добавления карточки
const elementTrashButton = cardsSection.querySelector('.element__trash'); // кнопка удаления карточки

// ПОПАП БОЛЬШОЙ КАРТОЧКИ
const cardImagePhoto = document.querySelector('.popup-card-image__photo');
// фото карточки в попапе большой карточки
const popupCardImage = document.querySelector('.popup-card-image');
// подпись фотографии
const popupCardImageFigcaption = document.querySelector('.popup-card-image__figcaption');

// открытие попапа в профиле
const popupOpen = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
  openPopup(popupProfile);
}

// универсальная функция открытия попапа
const openAddNewCardPopup = function () {
  openPopup(popupNewCardItem);
}

const renderCards = (item) => {
  const cardContainer = createCard(item);
  cardsSection.prepend(cardContainer);
}

// ФОРМЫ
const allForms = document.querySelector('.popup__form');
// input в поле "Имя"
const formInputName = allForms.querySelector('.popup__input_name_name');
// input в поле "Кто он"
const formInputJob = allForms.querySelector('.popup__input_name_who-is-this');
// input в поле "Название"
const newPlaceName = allForms.querySelector('.popup__input_type_card-name');
// input в поле "Ссылка на картинку"
const newPlaceLink = allForms.querySelector('.popup__input_type_photo-link');

// добавить класс ошибки элементу input
const showError = (input) => {
  input.classList.add('popup__input_type_error');
};

// удалить класс ошибки с элемента input
const hideError = (input) => {
  input.classList.remove('popup__input_type_error');
};

const checkInputValidity = (input) => {
  if (!input.validity.valid){
      showError(input);
      } else hideError (input);
};



// Слушатель события input
formInputName.addEventListener('input', function (evt) {
  // console.log(evt.target.validity.valid);
  console.log(evt.target.validity);
});

// formInputJob.addEventListener('input', function (evt) {
//   console.log(evt.target.validity.valid);
// })




// allForms.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', function (evt) {
//   console.log(evt.target.validity);
// });

popupCloseButton.forEach(function (button) {
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
// const closePopupByClickToOverlay = function (evt){
//   if(evt.target === evt.currentTarget){
//     closePopup(evt.currentTarget);
//   }
// }

// allPopups.forEach((evt) => {
  // evt.addEventListener('click', closePopupByClickToOverlay);
  // evt.addEventListener('keydown', closePopupByPressToEsc);
// });

// закрытие попапа по клику на оверлей
allPopups.forEach((popup) => {
  popup.addEventListener('mousedown',(evt) => {
    if(evt.target.classList.contains('popup_opened')){
      popupNewPlaceForm.reset();
      closePopup(popup);
    }
  })
})

// закрытие попапа по нажатию на Esc
function closePopupByPressToEsc(evt){
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    popupNewPlaceForm.reset();
    closePopup(openPopup);
    // closePopup(evt.currentTarget);
    }
}

// функция для создания карточки
function createCard({ name, link }) {
  const card = templateCard.cloneNode(true);
  const imageCard = card.querySelector('.element__image');
  card.querySelector('.element__title').textContent = name;
  imageCard.alt = name;
  imageCard.src = link;
  card.querySelector('.element__trash').addEventListener('click', () => card.remove());
  card.querySelector('.element__like').addEventListener('click',
    function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
  // открытие попапа просмотра карточки
  imageCard.addEventListener('click',
    function () {
      cardImagePhoto.src = link;
      cardImagePhoto.alt = name;
      popupCardImageFigcaption.textContent = name;
      openPopup(popupCardImage);
    })
  return card;
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
profileOpenButton.addEventListener('click', popupOpen);
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);
formElement.addEventListener('submit', saveProfileChanges);
popupNewPlaceForm.addEventListener('submit', addNewCard);

// const elementItem = document.querySelector('.element');

// ПРОФИЛЬ
const profileElement = document.querySelector('.profile'); // сам профиль
const profileName = profileElement.querySelector('.profile__name'); // как зовут (в профиле)
const profileWhoIsThisElement = profileElement.querySelector('.profile__who-is-this'); // кто он (в профиле)

// ПОПАП
const popupElement = document.querySelector('.popup_profile'); // попап профиля
const profileOpenButton = document.querySelector('.profile__edit'); // кнопка открытия попапа в профиле
const popupCloseElement = popupElement.querySelector('.popup__close'); // кнопка закрытия попапа в профиле
const popupNameElement = popupElement.querySelector('.popup__name'); // как зовут (в попапе)
const popupWhoIsThisElement = popupElement.querySelector('.popup__who-is-this'); // кто он (в попапе)
// кнопка сохранения информации в попапе профиля
const popupContentSaveButton = popupElement.querySelector('.popup__save');

// НОВАЯ КАРТОЧКА
const popupNewPlaceForm = document.querySelector('.popup_new-place-form'); // форма новой карточки
const popupNewCardItem = document.querySelector('.popup_new-card'); // попап новой карточки
const newCardName = document.querySelector('.popup__input_type_card_name'); // имя карточки а попапе
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
const closes = document.querySelectorAll('.popup__close');

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

// закрытие попапа
const popupClose = function (evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

// открытие попапа в профиле
const popupOpen = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
}

// открытие попапа
const openAddNewCardPopup = function () {
  popupNewCardItem.classList.add('popup_opened');
}

// функция для добавления карточки
function createCard(items) {
  items.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__trash').addEventListener('click', () => card.remove());
    card.querySelector('.element__like').addEventListener('click',
      function (evt) {
        evt.target.classList.toggle('element__like_active');
      });

  // открытие попапа просмотра карточки
    card.querySelector('.element__image').addEventListener('click',
      function () {
        cardImagePhoto.src = item.link;
        cardImagePhoto.alt=item.name
        popupCardImageFigcaption.textContent = item.name;
        popupCardImage.classList.toggle('popup_opened');
      })

    cardsSection.prepend(card);
  })
}

// вставляем карточки из массива initialCards[]
createCard(initialCards);

// вешаем события "закрытие попапа" на каждый крестик
closes.forEach((closeButton) => {
  closeButton.addEventListener('click', popupClose);
})

// заполнение полей в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
  popupClose(evt);
}

// функция добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = [{ name: newCardName.value, link: newCardLink.value, }];
  createCard(newCard);
  popupNewPlaceForm.reset();
  popupClose(evt);
}

// СЛУШАТЕЛИ
profileOpenButton.addEventListener('click', popupOpen);
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);
formElement.addEventListener('submit', handleFormSubmit);
popupNewPlaceForm.addEventListener('submit', addNewCard);
